"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LocalizationHeader } from "@/components/dashboard/localization-header"
import { JudicialSidebar } from "@/components/sidebar/judicial-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { BarChart2, Clock, Scale, FileText, PieChart, LineChart, Info, Download, Share2 } from "lucide-react"
import { AiAssistant } from "@/components/ai-assistant"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen">
      <JudicialSidebar />
      <SidebarInset className="bg-background">
        <LocalizationHeader />

        <div className="container py-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Predictive Analytics</h1>
            <div className="flex items-center gap-3">
              <Select defaultValue="contract">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Commercial Contract</SelectItem>
                  <SelectItem value="ip">Intellectual Property</SelectItem>
                  <SelectItem value="banking">Banking & Finance</SelectItem>
                  <SelectItem value="corporate">Corporate Law</SelectItem>
                  <SelectItem value="maritime">Maritime Dispute</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="gujarat">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select jurisdiction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gujarat">Gujarat High Court</SelectItem>
                  <SelectItem value="bombay">Bombay High Court</SelectItem>
                  <SelectItem value="delhi">Delhi High Court</SelectItem>
                  <SelectItem value="calcutta">Calcutta High Court</SelectItem>
                  <SelectItem value="madras">Madras High Court</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-blue-600" />
                  <span>Case Outcome Forecast</span>
                </CardTitle>
                <CardDescription>Predicted outcomes based on precedent analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Outcome forecast chart would appear here</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Plaintiff Success</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Defendant Success</span>
                    <span className="font-medium">24%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Settlement</span>
                    <span className="font-medium">8%</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Based on analysis of 42 similar cases</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Resolution Time Analysis</span>
                </CardTitle>
                <CardDescription>Estimated time to resolution by stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Resolution time chart would appear here</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Total Duration</span>
                    <span className="font-medium">5.2 months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Pleadings Stage</span>
                    <span className="font-medium">1.5 months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Evidence Stage</span>
                    <span className="font-medium">2.3 months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Arguments & Judgment</span>
                    <span className="font-medium">1.4 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Scale className="h-5 w-5 text-blue-600" />
                  <span>Legal Complexity Score</span>
                </CardTitle>
                <CardDescription>AI-generated complexity assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Complexity score visualization would appear here</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Overall Complexity</span>
                    <span className="font-medium">7.4/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Factual Complexity</span>
                    <span className="font-medium">6.8/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Legal Issues Complexity</span>
                    <span className="font-medium">8.2/10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Procedural Complexity</span>
                    <span className="font-medium">7.1/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="cited-provisions" className="space-y-6">
            <TabsList>
              <TabsTrigger value="cited-provisions" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Cited Provisions Tree</span>
              </TabsTrigger>
              <TabsTrigger value="precedents" className="flex items-center gap-2">
                <BarChart2 className="h-4 w-4" />
                <span>Top Precedents Cluster</span>
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span>Historical Trends</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cited-provisions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cited Provisions Tree</CardTitle>
                  <CardDescription>Interactive mind-map of relevant statutory provisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive mind-map visualization would appear here</p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Most Cited Provisions</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Based on frequency of citation in similar cases</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Indian Contract Act, 1872</h4>
                          <span className="text-sm">Cited in 87% of cases</span>
                        </div>
                        <div className="mt-2 text-sm space-y-1">
                          <div className="flex items-center justify-between">
                            <span>• Section 73 - Compensation for Loss</span>
                            <span className="text-muted-foreground">76%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>• Section 74 - Liquidated Damages</span>
                            <span className="text-muted-foreground">68%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>• Section 39 - Effect of Refusal</span>
                            <span className="text-muted-foreground">54%</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Specific Relief Act, 1963</h4>
                          <span className="text-sm">Cited in 64% of cases</span>
                        </div>
                        <div className="mt-2 text-sm space-y-1">
                          <div className="flex items-center justify-between">
                            <span>• Section 10 - Specific Performance</span>
                            <span className="text-muted-foreground">58%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>• Section 14 - Contracts Not Enforceable</span>
                            <span className="text-muted-foreground">42%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>• Section 16 - Personal Bars to Relief</span>
                            <span className="text-muted-foreground">36%</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Commercial Courts Act, 2015</h4>
                          <span className="text-sm">Cited in 52% of cases</span>
                        </div>
                        <div className="mt-2 text-sm space-y-1">
                          <div className="flex items-center justify-between">
                            <span>• Section 12 - Jurisdiction</span>
                            <span className="text-muted-foreground">48%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>• Section 16 - Transfer of Cases</span>
                            <span className="text-muted-foreground">32%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>• Section 21 - Appeals</span>
                            <span className="text-muted-foreground">28%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="precedents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Precedents Cluster View</CardTitle>
                  <CardDescription>Timeline and similarity score of influential precedents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Precedents cluster visualization would appear here</p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Most Influential Precedents</h3>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Download className="h-3.5 w-3.5" />
                          <span>Export</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Share2 className="h-3.5 w-3.5" />
                          <span>Share</span>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Reliance Industries vs SEBI (2019)</h4>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">92% Similarity</div>
                        </div>
                        <p className="text-sm mt-2">
                          Established precedent for contractual obligations in commercial agreements with regulatory
                          oversight.
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-muted-foreground">Gujarat HC | Cited 24 times</div>
                          <Button variant="link" size="sm" className="h-6 p-0">
                            View Case
                          </Button>
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Tata Consultancy vs Infosys Ltd. (2018)</h4>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">87% Similarity</div>
                        </div>
                        <p className="text-sm mt-2">
                          Key judgment on breach of contract and specific performance in technology service agreements.
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-muted-foreground">Gujarat HC | Cited 18 times</div>
                          <Button variant="link" size="sm" className="h-6 p-0">
                            View Case
                          </Button>
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Adani Enterprises vs Gujarat State (2020)</h4>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">78% Similarity</div>
                        </div>
                        <p className="text-sm mt-2">
                          Relevant for interpretation of force majeure clauses in commercial contracts with government
                          entities.
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-muted-foreground">Gujarat HC | Cited 12 times</div>
                          <Button variant="link" size="sm" className="h-6 p-0">
                            View Case
                          </Button>
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">HDFC Bank vs Kingfisher Airlines (2016)</h4>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">72% Similarity</div>
                        </div>
                        <p className="text-sm mt-2">
                          Established principles for damages calculation in high-value commercial contract breaches.
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-muted-foreground">Bombay HC | Cited 9 times</div>
                          <Button variant="link" size="sm" className="h-6 p-0">
                            View Case
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Historical Trends Analysis</CardTitle>
                  <CardDescription>Trends in case outcomes and judicial reasoning over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Historical trends visualization would appear here</p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Key Trend Insights</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Based on analysis of similar cases over the past 5 years</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Outcome Trends</h4>
                        <ul className="mt-2 text-sm space-y-2 list-disc pl-5">
                          <li>Increasing trend toward partial relief (68% in 2023 vs. 52% in 2019)</li>
                          <li>Decreasing trend in complete dismissals (14% in 2023 vs. 28% in 2019)</li>
                          <li>Stable trend in complete plaintiff success (18% across 5 years)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Damages Assessment</h4>
                        <ul className="mt-2 text-sm space-y-2 list-disc pl-5">
                          <li>Increasing trend in awarding interest at 12% for delayed payments</li>
                          <li>Courts more likely to award actual damages rather than liquidated damages</li>
                          <li>Growing consideration of opportunity costs in damage calculations</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Procedural Trends</h4>
                        <ul className="mt-2 text-sm space-y-2 list-disc pl-5">
                          <li>Average case duration decreased from 9.2 months to 5.8 months</li>
                          <li>Increased use of case management hearings (76% in 2023 vs. 42% in 2019)</li>
                          <li>Growing trend of courts appointing expert witnesses in complex cases</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium">Judicial Reasoning</h4>
                        <ul className="mt-2 text-sm space-y-2 list-disc pl-5">
                          <li>Increasing emphasis on commercial practicality in contract interpretation</li>
                          <li>Growing trend of citing international commercial principles</li>
                          <li>More detailed analysis of force majeure and frustration doctrines</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-2">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600 dark:text-blue-400"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-blue-800 dark:text-blue-300">
                            AI Interpretation Disclaimer
                          </h4>
                          <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                            This analysis is provided as research assistance only. All judicial decisions remain the
                            sole responsibility of the presiding judge. The AI system does not provide legal advice or
                            make judicial determinations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <AiAssistant />
      </SidebarInset>
    </main>
  )
}
