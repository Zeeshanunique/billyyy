"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,dangerouslyAllowBrowser: true
  });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');

    try {
      const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
        stream: true,
      });

      let streamedMessage = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || '';
        streamedMessage += content;
        
        // Update the last message with accumulated content
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].content = streamedMessage;
          return updated;
        });
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-4 h-[600px] flex flex-col">
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 p-3 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-primary text-primary-foreground ml-auto' 
                : 'bg-muted'
            } max-w-[80%] ${msg.role === 'user' ? 'ml-auto' : 'mr-auto'}`}
          >
            {msg.content}
          </div>
        ))}
      </ScrollArea>
      
      <div className="flex gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          disabled={loading}
        />
        <Button onClick={sendMessage} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : 'Send'}
        </Button>
      </div>
    </Card>
  );
};

export default Chat;