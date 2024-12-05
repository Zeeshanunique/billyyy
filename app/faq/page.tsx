"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle } from "lucide-react";

const faqData = [
  {
    category: "Cyberbullying Basics",
    questions: [
      {
        q: "What are the different types of cyberbullying?",
        a: "Common types include harassment, cyberstalking, doxing (sharing private information), exclusion, impersonation, and cybermobbing."
      },
      {
        q: "What are the warning signs of cyberbullying?",
        a: "Signs include anxiety when using devices, withdrawal from social activities, declining grades, emotional distress, and sudden avoidance of digital communication."
      },
      {
        q: "How does cyberbullying affect mental health?",
        a: "It can lead to anxiety, depression, low self-esteem, sleep problems, and in severe cases, suicidal thoughts."
      }
    ]
  },
  {
    category: "Prevention & Protection",
    questions: [
      {
        q: "How can I protect myself from cyberbullying?",
        a: "Use strong privacy settings, be careful what you share online, keep evidence of harassment, block abusive users, and report inappropriate behavior."
      },
      {
        q: "What should parents do to protect their children?",
        a: "Monitor online activity, educate about digital citizenship, maintain open communication, set boundaries, and know their children's online friends."
      },
      {
        q: "What security settings should I enable?",
        a: "Enable two-factor authentication, use private accounts, limit location sharing, review tagged posts before they appear, and regularly update passwords."
      }
    ]
  },
  {
    category: "Legal & Reporting",
    questions: [
      {
        q: "Is cyberbullying a crime?",
        a: "Yes, in many jurisdictions cyberbullying is a criminal offense, especially when involving threats, harassment, or sharing private content without consent."
      },
      {
        q: "How do I report cyberbullying to social media platforms?",
        a: "Use the platform's built-in reporting tools, document the harassment, and follow up if needed. Most platforms have specific procedures for harassment reports."
      },
      {
        q: "When should I involve law enforcement?",
        a: "Contact law enforcement if there are threats of violence, sexual exploitation, stalking, hate crimes, or if the bullying involves criminal activities."
      }
    ]
  },
  {
    category: "Support & Recovery",
    questions: [
      {
        q: "Where can I find support if I'm being cyberbullied?",
        a: "Reach out to trusted adults, school counselors, anti-bullying hotlines, mental health professionals, and online support communities."
      },
      {
        q: "How can I help someone who is being cyberbullied?",
        a: "Listen without judgment, help document the bullying, assist in reporting it, provide emotional support, and connect them with appropriate resources."
      },
      {
        q: "What are some coping strategies for cyberbullying victims?",
        a: "Practice self-care, maintain offline connections, seek professional help if needed, take breaks from social media, and focus on positive activities."
      }
    ]
  },
  {
    category: "Digital Citizenship",
    questions: [
      {
        q: "What is digital citizenship?",
        a: "Digital citizenship involves using technology responsibly, ethically, and safely while respecting others' rights and privacy online."
      },
      {
        q: "How can I create a positive online environment?",
        a: "Practice kindness, respect others' opinions, think before posting, verify information before sharing, and stand up against online harassment."
      },
      {
        q: "What's the impact of digital footprint?",
        a: "Your digital footprint affects your reputation, relationships, and future opportunities. Once content is online, it can be difficult to completely remove."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showExpertChat, setShowExpertChat] = useState(false);
  const [expertQuestion, setExpertQuestion] = useState("");

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Cybercrime & Cyberbullying FAQ</h1>
      
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button 
          variant="outline"
          onClick={() => setShowExpertChat(!showExpertChat)}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Ask Expert
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {filteredFAQ.map((category, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {showExpertChat && (
          <Card className="h-fit sticky top-6">
            <CardHeader>
              <CardTitle>Ask an Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Type your question..."
                  value={expertQuestion}
                  onChange={(e) => setExpertQuestion(e.target.value)}
                />
                <Button className="w-full">
                  Submit Question
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FAQ;