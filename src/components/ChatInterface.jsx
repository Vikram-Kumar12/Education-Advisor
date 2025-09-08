import axios from "../Services/axiosInstance";
import { customerSupportAgent } from "../agent/customer-support";
import { RealtimeSession } from "@openai/agents-realtime";
import { Send, Mic, MicOff, X, User, Bot } from "lucide-react";
// import { startChat } from "../http";
import { useEffect, useRef, useState } from "react";

export default function ChatInterface({ setShowChat }) {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      content: "Hello ,tell me your stream first so that i help you better",
      role: "assistant",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const sessionRef = useRef(null);
  const [choosenStream,setChoosenStream]=useState('science')

  async function handleStartAgent(e) {
    e.preventDefault();
    console.log("Making api call for getting emphermal key");
    const response = await axios.get("/voice/start-call");
    console.log("emphermal key:", response);

    const tempKey = response.data.tempApiKey;

    const session = new RealtimeSession(customerSupportAgent, {
      model: "gpt-4o-realtime-preview-2025-06-03",
      config: {
        inputAudioFormat: "pcm16",
        inputAudioNoiseReduction: { type: "near_field" },
        inputAudioTranscription: {
          language: "en",
          model: "gpt-4o-mini-transcribe",
        },
      },
    });
    sessionRef.current = session;
    await session.connect({ apiKey: tempKey });
  }
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    // Add user message
    const newUserMessage = {
      content: inputText,
      role: "user",
    };
    setMessages([...messages, newUserMessage]);
    setInputText("");

   if(messages.length==1){
    setChoosenStream(inputText);
   }else{
    setChoosenStream(messages[1].content)
   }

    try {
      const res = await axios.get("/quiz/chat", {
        params: {
          stream: choosenStream,
          question: inputText,
        },
      });

      const { answer } = res.data;

      setMessages((prev) => [
        ...prev,
        { content: answer.response, role: "assistant" },
      ]);
    } catch (error) {
      console.log(error.response?.data?.message || "Error occurred");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceMode = (e) => {
    setIsVoiceMode(!isVoiceMode);
    if (!isVoiceMode) {
      handleStartAgent(e);
      setIsListening(true);
    } else {
      // Stop listening
      setIsListening(false);
    }
  };

  const handleEndCall = async () => {
    const session = sessionRef.current;

    if (session && typeof session.close === "function") {
      try {
        await session.close();
        sessionRef.current = null;
        console.log("Session disconnected");
      } catch (err) {
        console.error("Disconnect error:", err);
      }
    } else {
      console.warn("No active session or invalid session object.");
    }

    setIsVoiceMode(false);
    setIsListening(false);
  };

  return (
    <div className=" flex flex-col  bg-gray-100 rounded-lg shadow-lg w-full max-w-sm mx-auto h-120 fixed bottom-1 right-1 z-50  ">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
            <Bot className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold">Aina Assistant</h3>
            <p className="text-xs opacity-80">Online</p>
          </div>
        </div>
        <button
          onClick={() => setShowChat(false)}
          className="cursor-pointer text-white hover:text-gray-200 hover:bg-orange-400 px-2 py-1 rounded-md"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <Bot className="h-4 w-4 text-blue-600" />
              </div>
            )}
            <div
              className={`max-w-xs rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-gray-900 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center ml-2">
                <User className="h-4 w-4 text-blue-600" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area / Voice Mode */}
      {!isVoiceMode ? (
        <div className="p-3 bg-gray-100 border-t">
          <div className="flex items-center gap-x-2 text-black py-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1  rounded-l-lg py-2 px-4 border-1 border-gray-400 outline-none "
            />
            <button
              onClick={handleSendMessage}
              disabled={inputText.trim() === ""}
              className="bg-orange-500 text-white p-2 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="h-5 w-5" />
            </button>
            <button
              onClick={toggleVoiceMode}
              className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700 cursor-pointer"
            >
              <Mic className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white flex flex-col items-center">
          <div className="text-center mb-4">
            <p className="font-medium">Listening...</p>
            <p className="text-sm opacity-80">Speak now</p>
          </div>

          {/* Voice Waves Animation */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Mic className="h-8 w-8 text-blue-600" />
            </div>
            {isListening && (
              <>
                <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
                <div
                  className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full bg-white opacity-10 animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
              </>
            )}
          </div>

          <button
            onClick={handleEndCall}
            className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-700 cursor-pointer"
          >
            <MicOff className="h-5 w-5 mr-2" />
            End Voice Call
          </button>
        </div>
      )}
    </div>
  );
}
