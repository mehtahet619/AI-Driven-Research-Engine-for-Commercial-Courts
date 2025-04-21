"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Book, FileText, Scale } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export function QuickResearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search statutes, cases, rules..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button type="submit">Search</Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="statutes" className="flex items-center gap-1">
            <Book className="h-3.5 w-3.5" />
            <span>Statutes</span>
          </TabsTrigger>
          <TabsTrigger value="cases" className="flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" />
            <span>Cases</span>
          </TabsTrigger>
          <TabsTrigger value="rules" className="flex items-center gap-1">
            <Scale className="h-3.5 w-3.5" />
            <span>Rules</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="text-sm text-muted-foreground">
        <p>Recent searches:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Commercial Courts Act, 2015
          </Button>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Specific Relief
          </Button>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Arbitration
          </Button>
        </div>
      </div>
    </div>
  )
}
