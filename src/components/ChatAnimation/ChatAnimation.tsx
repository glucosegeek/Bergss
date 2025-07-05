import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface TypingIndicatorProps {
  isVisible: boolean;
  sender: 'user' | 'ai';
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible, sender }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`flex items-center gap-2 mb-4 ${
            sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className={`flex items-center gap-2 rounded-2xl px-4 py-3 max-w-[200px] ${
            sender === 'user' 
              ? 'bg-brand-primary/80' 
              : 'bg-slate-700/50'
          }`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              sender === 'user' 
                ? 'bg-accent-blue' 
                : 'bg-brand-primary'
            }`}>
              {sender === 'user' ? (
                <User className="w-3 h-3 text-white" />
              ) : (
                <Bot className="w-3 h-3 text-white" />
              )}
            </div>
            <div className="flex items-center gap-1">
              <motion.div
                className="w-2 h-2 bg-slate-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-slate-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-slate-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ChatAnimation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<'user' | 'ai'>('ai');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const conversationScript: Omit<Message, 'id' | 'timestamp'>[] = [
    {
      text: "Cześć! Jestem Twoim asystentem AI. W czym mogę Ci dzisiaj pomóc?",
      sender: 'ai'
    },
    {
      text: "Czy możecie pomóc w zmniejszeniu czasu poświęconego na obsługę klienta?",
      sender: 'user'
    },
    {
      text: "Oczywiście! Nasz chatbot AI może zredukować czas obsługi klienta o 70%. Automatyzuje odpowiedzi na najczęstsze pytania i kwalifikuje leady 24/7.",
      sender: 'ai'
    },
    {
      text: "To brzmi świetnie! Jak szybko można to wdrożyć?",
      sender: 'user'
    },
    {
      text: "Wdrożenie zajmuje zazwyczaj 48-72 godziny. Zajmujemy się całą konfiguracją, szkoleniem AI na danych Twojej firmy i integracją z istniejącymi systemami.",
      sender: 'ai'
    },
    {
      text: "Jakie są koszty takiego rozwiązania?",
      sender: 'user'
    },
    {
      text: "Koszty zależą od zakresu funkcjonalności. Oferujemy bezpłatną konsultację, podczas której omówimy Twoje potrzeby i przedstawimy spersonalizowaną ofertę. Chcesz umówić spotkanie?",
      sender: 'ai'
    },
    {
      text: "Tak, chciałbym umówić konsultację!",
      sender: 'user'
    },
    {
      text: "Świetnie! Przekierowuję Cię do kalendarza, gdzie możesz wybrać dogodny termin. Dziękuję za zainteresowanie naszymi rozwiązaniami AI! 🚀",
      sender: 'ai'
    }
  ];

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('pl-PL', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const addMessage = (messageData: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...messageData,
      id: Date.now(),
      timestamp: formatTime(new Date())
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (currentMessageIndex >= conversationScript.length) {
      // Reset animation after completion
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
        setIsTyping(false);
      }, 5000);

      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      // Set the typing sender to match the next message sender
      const nextMessage = conversationScript[currentMessageIndex];
      setTypingSender(nextMessage.sender);
      setIsTyping(true);

      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        addMessage(nextMessage);
        setCurrentMessageIndex(prev => prev + 1);
      }, 1500); // Typing duration

      return () => clearTimeout(typingTimer);
    }, currentMessageIndex === 0 ? 500 : 2000); // Delay between messages

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  const messageVariants = {
    hidden: (sender: string) => ({
      opacity: 0,
      x: sender === 'user' ? 50 : -50,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chat Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-t-xl border border-slate-700/50 p-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-brand-white font-semibold text-sm">Asystent AI</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <span className="text-xs text-slate-400">Online</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Container */}
      <div 
        ref={chatContainerRef}
        className="h-96 bg-slate-900/50 backdrop-blur-sm border-x border-slate-700/50 p-4 overflow-y-auto scrollbar-hide"
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              custom={message.sender}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              className={`flex items-end gap-2 mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-white" />
                </div>
              )}
              
              <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : ''}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-brand-primary text-white rounded-br-md'
                      : 'bg-slate-700/50 text-brand-light rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <div className={`flex items-center gap-1 mt-1 px-2 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}>
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-500">{message.timestamp}</span>
                </div>
              </div>

              {message.sender === 'user' && (
                <div className="w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center flex-shrink-0 order-2">
                  <User className="w-3 h-3 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <TypingIndicator isVisible={isTyping} sender={typingSender} />
      </div>

      {/* Chat Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-b-xl border border-slate-700/50 p-4"
      >
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
          <span>Demonstracja chatbota AI w akcji</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatAnimation;