"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon, Clock, BarChart2, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface AnalyticsData {
  caseOutcome: {
    plaintiffSuccess: number
    defendantSuccess: number
    settlement: number
    similarCases: number
  }
  resolutionTime: {
    average: string
    pleadings: string
    evidence: string
    arguments: string
  }
  complexityScore: {
    overall: string
    factual: string
    legal: string
    procedural: string
  }
  lastUpdated: string
}

export function PredictiveAnalyticsCards() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const fetchAnalytics = async () => {
    try {
      setRefreshing(true)
      const response = await fetch("/api/analytics?caseType=contract&jurisdiction=gujarat")

      if (!response.ok) {
        throw new Error("Failed to fetch analytics data")
      }

      const data = await response.json()
      setAnalytics(data.analytics)
      setError(null)
    } catch (err) {
      setError("Error loading analytics data")
      console.error(err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()

    // Set up polling for real-time updates
    const intervalId = setInterval(() => {
      fetchAnalytics()
    }, 60000) // Poll every minute

    return () => clearInterval(intervalId)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-blue-50 dark:bg-blue-950 p-3">
                <Skeleton className="h-5 w-40" />
              </div>
              <div className="p-4">
                <Skeleton className="h-64 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error || !analytics) {
    return (
      <Card className="p-4">
        <div className="text-destructive mb-2">{error || "Failed to load analytics data"}</div>
        <Button onClick={fetchAnalytics} variant="outline" size="sm">
          Retry
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={fetchAnalytics}
          disabled={refreshing}
          className="flex items-center gap-1"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} />
          <span>Refresh Analytics</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-blue-50 dark:bg-blue-950 p-3 flex items-center justify-between">
              <h3 className="font-medium text-sm">Case Outcome Forecast</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Based on precedent analysis of similar cases in your jurisdiction</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Plaintiff Success</span>
                    <span className="text-sm font-medium">{analytics.caseOutcome.plaintiffSuccess}%</span>
                  </div>
                  <Progress value={analytics.caseOutcome.plaintiffSuccess} className="h-2" />
                  <div className="mt-1 text-xs text-muted-foreground">
                    Based on {analytics.caseOutcome.similarCases} similar cases
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Defendant Success</span>
                    <span className="text-sm font-medium">{analytics.caseOutcome.defendantSuccess}%</span>
                  </div>
                  <Progress value={analytics.caseOutcome.defendantSuccess} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Settlement</span>
                    <span className="text-sm font-medium">{analytics.caseOutcome.settlement}%</span>
                  </div>
                  <Progress value={analytics.caseOutcome.settlement} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-blue-50 dark:bg-blue-950 p-3 flex items-center justify-between">
              <h3 className="font-medium text-sm">Average Resolution Time</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Estimated time to resolution based on case type and complexity</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{analytics.resolutionTime.average}</div>
                    <div className="text-xs text-muted-foreground">Months</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div>Commercial Contract</div>
                  <div className="text-xs text-muted-foreground">Gujarat HC</div>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Pleadings Stage</span>
                  <span>{analytics.resolutionTime.pleadings} months</span>
                </div>
                <div className="flex justify-between">
                  <span>Evidence Stage</span>
                  <span>{analytics.resolutionTime.evidence} months</span>
                </div>
                <div className="flex justify-between">
                  <span>Arguments & Judgment</span>
                  <span>{analytics.resolutionTime.arguments} months</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-blue-50 dark:bg-blue-950 p-3 flex items-center justify-between">
              <h3 className="font-medium text-sm">Legal Complexity Score</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      AI-generated complexity assessment based on legal issues, precedents, and statutory interpretation
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BarChart2 className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{analytics.complexityScore.overall}</div>
                    <div className="text-xs text-muted-foreground">out of 10</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-sm font-medium">
                    {Number.parseFloat(analytics.complexityScore.overall) > 7
                      ? "High"
                      : Number.parseFloat(analytics.complexityScore.overall) > 5
                        ? "Medium"
                        : "Low"}{" "}
                    Complexity
                  </div>
                  <div className="text-xs text-muted-foreground">Multiple jurisdictions</div>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Factual Complexity</span>
                  <span>{analytics.complexityScore.factual}/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Legal Issues Complexity</span>
                  <span>{analytics.complexityScore.legal}/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Procedural Complexity</span>
                  <span>{analytics.complexityScore.procedural}/10</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
