import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const caseType = searchParams.get("caseType") || "contract"
  const jurisdiction = searchParams.get("jurisdiction") || "gujarat"

  // Generate analytics data based on parameters
  const analytics = {
    caseOutcome: {
      plaintiffSuccess: Math.floor(60 + Math.random() * 15),
      defendantSuccess: Math.floor(20 + Math.random() * 10),
      settlement: Math.floor(5 + Math.random() * 10),
      similarCases: Math.floor(35 + Math.random() * 15),
    },
    resolutionTime: {
      average: (4 + Math.random() * 2).toFixed(1),
      pleadings: (1.2 + Math.random() * 0.6).toFixed(1),
      evidence: (2 + Math.random() * 0.8).toFixed(1),
      arguments: (1.1 + Math.random() * 0.6).toFixed(1),
    },
    complexityScore: {
      overall: (6.5 + Math.random() * 2).toFixed(1),
      factual: (6 + Math.random() * 2).toFixed(1),
      legal: (7 + Math.random() * 2).toFixed(1),
      procedural: (6 + Math.random() * 2).toFixed(1),
    },
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json({ analytics })
}
