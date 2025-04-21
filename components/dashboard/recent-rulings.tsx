"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gavel, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

// Mock data for recent rulings
const recentRulings = [
  {
    id: "ruling-001",
    title: "Reliance Industries vs SEBI",
    court: "Gujarat HC",
    date: "18 Apr 2023",
    type: "Securities Law",
    summary: "Ruling on disclosure requirements for listed companies during corporate restructuring.",
    relevance: "High",
  },
  {
    id: "ruling-002",
    title: "Adani Ports vs Customs Department",
    court: "Gujarat HC",
    date: "14 Apr 2023",
    type: "Customs & Excise",
    summary: "Interpretation of import duty provisions for port infrastructure equipment.",
    relevance: "Medium",
  },
  {
    id: "ruling-003",
    title: "Zydus Cadila vs Union of India",
    court: "Gujarat HC",
    date: "10 Apr 2023",
    type: "Pharmaceutical Regulations",
    summary: "Judgment on price control mechanisms for essential medicines.",
    relevance: "Medium",
  },
]

export function RecentRulings() {
  return (
    <div className="space-y-4">
      {recentRulings.map((ruling) => (
        <div key={ruling.id} className="flex items-start space-x-4 pb-4 border-b last:border-0 last:pb-0">
          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
            <Gavel className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between">
              <h4 className="font-medium">{ruling.title}</h4>
              <Badge
                variant={
                  ruling.relevance === "High" ? "default" : ruling.relevance === "Medium" ? "secondary" : "outline"
                }
              >
                {ruling.relevance} Relevance
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{ruling.court}</span>
              <span>•</span>
              <span>{ruling.date}</span>
              <Badge variant="outline" className="ml-1">
                {ruling.type}
              </Badge>
            </div>
            <p className="text-sm mt-1">{ruling.summary}</p>
            <div className="flex items-center gap-2 mt-2">
              <Button variant="outline" size="sm" className="h-8">
                <Download className="mr-1 h-4 w-4" />
                <span>PDF</span>
              </Button>
              <Button asChild variant="ghost" size="sm" className="h-8">
                <Link href={`/ruling/${ruling.id}`}>
                  <span>View Full Judgment</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
