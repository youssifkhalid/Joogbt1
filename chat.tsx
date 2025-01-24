"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-[600px]">
      <ScrollArea className="flex-1 p-4 rounded-md border mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-blue-600" : "text-green-600"}`}>
            <span className="font-bold">{m.role === "user" ? "أنت: " : "الروبوت: "}</span>
            {m.content}
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input value={input} onChange={handleInputChange} placeholder="اكتب رسالتك هنا..." className="flex-grow" />
        <Button type="submit">إرسال</Button>
      </form>
    </div>
  )
}

