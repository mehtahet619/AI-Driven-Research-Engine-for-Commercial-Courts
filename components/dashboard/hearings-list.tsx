"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gavel, FileText, Clock, ArrowRight, AlertCircle, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

type HearingType = "today" | "pending" | "adjourned"

interface HearingsListProps {
  type: HearingType
}

interface Hearing {
  id: string
  title: string
  type: string
  time: string
  courtroom: string
  value: string
  status: string
  lastUpdated: string
  note?: string
  expectedJudgment?: string
  reason?: string
}

export function HearingsList({ type }: HearingsListProps) {
  const [hearings, setHearings] = useState<Hearing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const fetchHearings = async () => {
    try {
      setRefreshing(true)
      const response = await fetch(`/api/cases?type=${type}`)

      if (!response.ok) {
        throw new Error("Failed to fetch hearings")
      }

      const data = await response.json()
      setHearings(data.cases)
      setLastUpdated(new Date())
      setError(null)
    } catch (err) {
      setError("Error loading case data. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchHearings()

    // Set up polling for real-time updates
    const intervalId = setInterval(() => {
      fetchHearings()
    }, 30000) // Poll every 30 seconds

    return () => clearInterval(intervalId)
  }, [type])

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 flex items-center justify-center md:w-24">
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                <div className="p-4 flex-1">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="p-4">
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <p>{error}</p>
        </div>
        <Button onClick={fetchHearings} variant="outline" className="mt-2">
          Retry
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {lastUpdated && <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchHearings}
          disabled={refreshing}
          className="flex items-center gap-1"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} />
          <span>Refresh</span>
        </Button>
      </div>

      {hearings.length === 0 ? (
        <Card className="p-4 text-center text-muted-foreground">No {type} hearings found.</Card>
      ) : (
        hearings.map((hearing) => (
          <Card key={hearing.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 flex items-center justify-center md:w-24">
                  <Gavel className="h-8 w-8 text-blue-600" />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{hearing.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{hearing.type}</Badge>
                        <span className="text-sm text-muted-foreground">Value: {hearing.value}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          hearing.status === "In Progress"
                            ? "default"
                            : hearing.status === "Reserved"
                              ? "secondary"
                              : hearing.status === "Adjourned"
                                ? "outline"
                                : hearing.status === "Delayed"
                                  ? "destructive"
                                  : hearing.status === "Completed"
                                    ? "outline"
                                    : "outline"
                        }
                      >
                        {hearing.status}
                      </Badge>
                    </div>
                  </div>

                  {hearing.note && (
                    <div className="mt-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 p-2 rounded-md">
                      {hearing.note}
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{hearing.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{hearing.courtroom}</span>
                      </div>
                    </div>

                    {type === "pending" && hearing.expectedJudgment && (
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0 mb-2 md:mb-0">
                        Expected judgment: {hearing.expectedJudgment}
                      </div>
                    )}

                    {type === "adjourned" && hearing.reason && (
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0 mb-2 md:mb-0 max-w-md">
                        Reason: {hearing.reason}
                      </div>
                    )}

                    <Button asChild variant="ghost" size="sm" className="mt-2 md:mt-0">
                      <Link href={`/case/${hearing.id}`}>
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
