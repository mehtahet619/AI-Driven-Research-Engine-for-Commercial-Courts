"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LocalizationHeader } from "@/components/dashboard/localization-header"
import { JudicialSidebar } from "@/components/sidebar/judicial-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { Search, Book, FileText, Scale, BarChart2, Filter, Download, Bookmark, Share2 } from "lucide-react"
import { AiAssistant } from "@/components/ai-assistant"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ResearchPage() {
  return (
    <main className="flex min-h-screen">
      <JudicialSidebar />
      <SidebarInset className="bg-background">
        <LocalizationHeader />

        <div className="container py-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Legal Research</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="text" placeholder="Search case laws, statutes, rules, precedents..." className="pl-9" />
                </div>
                <Button className="shrink-0">Search</Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filters</span>
                </Button>

                <Select>
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="High Court Jurisdiction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jurisdictions</SelectItem>
                    <SelectItem value="gujarat">Gujarat High Court</SelectItem>
                    <SelectItem value="bombay">Bombay High Court</SelectItem>
                    <SelectItem value="delhi">Delhi High Court</SelectItem>
                    <SelectItem value="calcutta">Calcutta High Court</SelectItem>
                    <SelectItem value="madras">Madras High Court</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[150px] h-8">
                    <SelectValue placeholder="Time Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="1year">Last 1 Year</SelectItem>
                    <SelectItem value="3years">Last 3 Years</SelectItem>
                    <SelectItem value="5years">Last 5 Years</SelectItem>
                    <SelectItem value="10years">Last 10 Years</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[150px] h-8">
                    <SelectValue placeholder="Case Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="contract">Commercial Contract</SelectItem>
                    <SelectItem value="ip">Intellectual Property</SelectItem>
                    <SelectItem value="banking">Banking & Finance</SelectItem>
                    <SelectItem value="corporate">Corporate Law</SelectItem>
                    <SelectItem value="maritime">Maritime Dispute</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[150px] h-8">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="gu">Gujarati</SelectItem>
                    <SelectItem value="mr">Marathi</SelectItem>
                    <SelectItem value="bn">Bengali</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="case-laws" className="space-y-6">
            <TabsList>
              <TabsTrigger value="case-laws" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Case Laws</span>
              </TabsTrigger>
              <TabsTrigger value="statutes" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span>Statutes</span>
              </TabsTrigger>
              <TabsTrigger value="rules" className="flex items-center gap-2">
                <Scale className="h-4 w-4" />
                <span>High Court Rules</span>
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <BarChart2 className="h-4 w-4" />
                <span>Precedent Trends</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="case-laws" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Refine Search</CardTitle>
                      <CardDescription>Filter case laws by specific criteria</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium">Case Outcome</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="outcome-plaintiff" />
                            <Label htmlFor="outcome-plaintiff">Plaintiff Favored</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="outcome-defendant" />
                            <Label htmlFor="outcome-defendant">Defendant Favored</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="outcome-partial" />
                            <Label htmlFor="outcome-partial">Partial Relief</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="outcome-remanded" />
                            <Label htmlFor="outcome-remanded">Remanded</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium">Legal Issues</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="issue-breach" />
                            <Label htmlFor="issue-breach">Breach of Contract</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="issue-damages" />
                            <Label htmlFor="issue-damages">Damages Assessment</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="issue-specific" />
                            <Label htmlFor="issue-specific">Specific Performance</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="issue-jurisdiction" />
                            <Label htmlFor="issue-jurisdiction">Jurisdiction</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="issue-limitation" />
                            <Label htmlFor="issue-limitation">Limitation</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Relevance Score</h3>
                          <span className="text-sm">70%+</span>
                        </div>
                        <Slider defaultValue={[70]} max={100} step={5} />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium">Citation Count</h3>
                        <div className="flex items-center space-x-2">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any</SelectItem>
                              <SelectItem value="high">Highly Cited (10+)</SelectItem>
                              <SelectItem value="medium">Medium Cited (5-9)</SelectItem>
                              <SelectItem value="low">Low Cited (1-4)</SelectItem>
                              <SelectItem value="none">Not Cited</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full">Apply Filters</Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Search Results</CardTitle>
                      <CardDescription>Showing 3 results for "commercial contract breach"</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="p-4 border-b bg-muted/50">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">Reliance Industries vs SEBI</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">Gujarat HC</Badge>
                                <span className="text-sm text-muted-foreground">2019</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-500">92% Relevant</Badge>
                              <Badge variant="outline">Cited 24 times</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm">
                            This landmark judgment established precedent for contractual obligations in commercial
                            agreements with regulatory oversight. The court held that regulatory compliance does not
                            absolve parties from contractual commitments unless explicitly stated in the agreement.
                          </p>
                          <div className="mt-3 text-sm">
                            <span className="font-medium">Key Holdings:</span>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Force majeure clauses must be explicitly invoked within reasonable time</li>
                              <li>Regulatory changes constitute foreseeable business risks</li>
                              <li>Specific performance available where damages inadequate</li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Download className="h-3.5 w-3.5" />
                                <span>PDF</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Bookmark className="h-3.5 w-3.5" />
                                <span>Save</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Share2 className="h-3.5 w-3.5" />
                                <span>Share</span>
                              </Button>
                            </div>
                            <Button size="sm" className="h-8">
                              View Full Judgment
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="p-4 border-b bg-muted/50">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">Tata Consultancy vs Infosys Ltd.</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">Gujarat HC</Badge>
                                <span className="text-sm text-muted-foreground">2018</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-500">87% Relevant</Badge>
                              <Badge variant="outline">Cited 18 times</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm">
                            Key judgment on breach of contract and specific performance in technology service
                            agreements. The court established a three-part test for determining when specific
                            performance is appropriate in service contracts.
                          </p>
                          <div className="mt-3 text-sm">
                            <span className="font-medium">Key Holdings:</span>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Non-compete clauses enforceable if reasonable in scope and duration</li>
                              <li>Damages must be calculated based on actual loss, not potential gain</li>
                              <li>Confidentiality breaches create presumption of irreparable harm</li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Download className="h-3.5 w-3.5" />
                                <span>PDF</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Bookmark className="h-3.5 w-3.5" />
                                <span>Save</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Share2 className="h-3.5 w-3.5" />
                                <span>Share</span>
                              </Button>
                            </div>
                            <Button size="sm" className="h-8">
                              View Full Judgment
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="p-4 border-b bg-muted/50">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">Adani Enterprises vs Gujarat State</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">Gujarat HC</Badge>
                                <span className="text-sm text-muted-foreground">2020</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-500">78% Relevant</Badge>
                              <Badge variant="outline">Cited 12 times</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm">
                            Relevant for interpretation of force majeure clauses in commercial contracts with government
                            entities. The court established that government agencies cannot indefinitely delay
                            contractual obligations citing procedural delays.
                          </p>
                          <div className="mt-3 text-sm">
                            <span className="font-medium">Key Holdings:</span>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Government entities subject to same contractual standards as private parties</li>
                              <li>Administrative delays not valid force majeure events</li>
                              <li>Specific timelines for contract performance are enforceable</li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Download className="h-3.5 w-3.5" />
                                <span>PDF</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Bookmark className="h-3.5 w-3.5" />
                                <span>Save</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Share2 className="h-3.5 w-3.5" />
                                <span>Share</span>
                              </Button>
                            </div>
                            <Button size="sm" className="h-8">
                              View Full Judgment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="statutes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statutes Search</CardTitle>
                  <CardDescription>Browse and search through relevant statutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Select a statute to view its provisions</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <h3 className="font-medium">Commercial Courts Act, 2015</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Establishes specialized commercial courts for efficient resolution of commercial disputes
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <h3 className="font-medium">Indian Contract Act, 1872</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Governs contract formation, performance, and remedies for breach
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <h3 className="font-medium">Specific Relief Act, 1963</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Provides for specific performance and injunctive relief
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <h3 className="font-medium">Arbitration & Conciliation Act, 1996</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Framework for arbitration, conciliation, and alternative dispute resolution
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <h3 className="font-medium">Companies Act, 2013</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Regulates incorporation, responsibilities of companies, directors, and dissolution
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <h3 className="font-medium">Limitation Act, 1963</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Prescribes time limits for filing suits and other legal proceedings
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rules" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>High Court Rules</CardTitle>
                  <CardDescription>Browse procedural rules for commercial courts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Gujarat High Court Rules</h3>
                      <Badge>Updated: Jan 2023</Badge>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="p-4 border-b bg-muted/50">
                        <h4 className="font-medium">Commercial Division Rules</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 1: Filing of Commercial Suits</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 2: Case Management Hearings</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 3: Summary Judgment Procedure</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 4: Disclosure and Discovery</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 5: Expert Evidence</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="p-4 border-b bg-muted/50">
                        <h4 className="font-medium">Commercial Appellate Division Rules</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 1: Filing of Commercial Appeals</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 2: Expedited Hearing Procedure</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 3: Stay Applications</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Rule 4: Record of Proceedings</span>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Precedent Trends Analysis</CardTitle>
                  <CardDescription>AI-powered analysis of precedent patterns and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="p-4 border-b bg-muted/50">
                        <h3 className="font-medium">Commercial Contract Disputes (2018-2023)</h3>
                      </div>
                      <div className="p-4">
                        <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">Trend visualization chart would appear here</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <h4 className="text-sm font-medium">Key Insights:</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>68% of commercial contract disputes resulted in partial relief</li>
                            <li>Average time to resolution decreased from 9.2 months to 5.8 months</li>
                            <li>Force majeure defenses successful in only 23% of cases</li>
                            <li>Specific performance granted in 34% of eligible cases</li>
                            <li>Increasing trend of courts awarding interest at 12% for delayed payments</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="p-4 border-b bg-muted/50">
                        <h3 className="font-medium">Citation Network Analysis</h3>
                      </div>
                      <div className="p-4">
                        <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">Citation network visualization would appear here</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <h4 className="text-sm font-medium">Most Influential Precedents:</h4>
                          <ol className="list-decimal pl-5 text-sm space-y-1">
                            <li>Reliance Industries vs SEBI (2019) - Cited in 24 subsequent judgments</li>
                            <li>Tata Consultancy vs Infosys Ltd. (2018) - Cited in 18 subsequent judgments</li>
                            <li>Adani Enterprises vs Gujarat State (2020) - Cited in 12 subsequent judgments</li>
                            <li>HDFC Bank vs Kingfisher Airlines (2016) - Cited in 9 subsequent judgments</li>
                            <li>Larsen & Toubro vs NHAI (2017) - Cited in 7 subsequent judgments</li>
                          </ol>
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
