"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, Search, TrendingUp, Scale, AlertCircle } from "lucide-react"
import { HearingsList } from "@/components/dashboard/hearings-list"
import { PredictiveAnalyticsCards } from "@/components/dashboard/predictive-analytics-cards"
import { RecentRulings } from "@/components/dashboard/recent-rulings"
import { QuickResearch } from "@/components/dashboard/quick-research"
import { LocalizationHeader } from "@/components/dashboard/localization-header"

export function JudicialDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <LocalizationHeader />

      <div className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Today:</span>
            <span className="text-sm font-medium">
              {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>

        <Tabs defaultValue="today" className="space-y-4">
          <TabsList>
            <TabsTrigger value="today" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Today's Hearings</span>
            </TabsTrigger>
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Pending Decisions</span>
            </TabsTrigger>
            <TabsTrigger value="adjourned" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Adjourned</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-4">
            <HearingsList type="today" />
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <HearingsList type="pending" />
          </TabsContent>

          <TabsContent value="adjourned" className="space-y-4">
            <HearingsList type="adjourned" />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Predictive Analytics
                </CardTitle>
                <CardDescription>AI-driven insights based on case precedents and patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <PredictiveAnalyticsCards />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-blue-600" />
                  Recent High Court Rulings
                </CardTitle>
                <CardDescription>Latest judgments from your jurisdiction</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentRulings />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  Quick Research
                </CardTitle>
                <CardDescription>Search statutes, case laws, and rules</CardDescription>
              </CardHeader>
              <CardContent>
                <QuickResearch />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  Ethical AI Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>
                    AI suggestions are provided as research assistance only. All judicial decisions remain the sole
                    responsibility of the presiding judge.
                  </p>
                  <p className="mt-2">Confidence levels are displayed for transparency.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
