"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { MessageSquare, Send, Mic } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello, I'm Justice AI. How can I assist with your legal research today?",
      timestamp: new Date(),
    },
  ])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        precedent:
          "Here are 3 precedents for delayed contract enforcement:\n\n1. M/s Consolidated Engineering vs Principal Secretary (2019): Court held that delay in payment beyond 120 days entitled the contractor to interest at 12%.\n\n2. Larsen & Toubro vs Gujarat Industrial Development Corp (2016): Established that force majeure clauses must be explicitly invoked within reasonable time.\n\n3. Reliance Infrastructure vs NHAI (2021): Determined that government agencies cannot indefinitely delay contractual obligations citing procedural delays.",
        outcome:
          "Based on analysis of 28 similar IP disputes in Gujarat HC over the past 3 years, a ₹1Cr IP dispute has the following likely outcomes:\n\n- 62% chance of partial relief to plaintiff\n- 24% chance of settlement during proceedings\n- 14% chance of complete dismissal\n\nAverage time to resolution: 8.4 months\nTypical relief: Injunction + partial damages (40-60% of claimed amount)",
        default:
          "I can help you with that. Would you like me to search for relevant case law, statutes, or provide an analysis based on precedent?",
      }

      let responseContent = aiResponses.default

      if (input.toLowerCase().includes("precedent") && input.toLowerCase().includes("contract")) {
        responseContent = aiResponses.precedent
      } else if (
        input.toLowerCase().includes("outcome") &&
        input.toLowerCase().includes("ip dispute") &&
        input.toLowerCase().includes("gujarat")
      ) {
        responseContent = aiResponses.outcome
      }

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg">
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[400px] sm:max-w-md p-0 flex flex-col">
          <SheetHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-blue-600 text-white">JA</AvatarFallback>
                </Avatar>
                <SheetTitle>Justice AI Assistant</SheetTitle>
              </div>
              <Badge variant="outline" className="font-normal">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
                AI Powered
              </Badge>
            </div>
          </SheetHeader>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <div className="whitespace-pre-line text-sm">{message.content}</div>
                    <div className="mt-1 text-xs opacity-70 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <SheetFooter className="border-t p-4">
            <form
              className="flex w-full items-center space-x-2"
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
            >
              <Button type="button" size="icon" variant="ghost" className="shrink-0">
                <Mic className="h-5 w-5" />
                <span className="sr-only">Use voice input</span>
              </Button>
              <Input
                placeholder="Ask Justice AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
