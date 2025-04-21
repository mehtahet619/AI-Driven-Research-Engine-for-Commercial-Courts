"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LocalizationHeader } from "@/components/dashboard/localization-header"
import { JudicialSidebar } from "@/components/sidebar/judicial-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { FileUp, Save, ArrowRight } from "lucide-react"
import { AiAssistant } from "@/components/ai-assistant"

export default function NewHearingPage() {
  return (
    <main className="flex min-h-screen">
      <JudicialSidebar />
      <SidebarInset className="bg-background">
        <LocalizationHeader />

        <div className="container py-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">New Hearing Entry</h1>
          </div>

          <Tabs defaultValue="details" className="space-y-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="details">Case Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="ai-suggestions">AI Suggestions</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Enter the basic details of the case</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="case-title">Case Title</Label>
                      <Input id="case-title" placeholder="e.g. ABC Enterprises vs XYZ Corporation" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="case-type">Case Type</Label>
                        <Select>
                          <SelectTrigger id="case-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="contract">Commercial Contract</SelectItem>
                            <SelectItem value="ip">Intellectual Property</SelectItem>
                            <SelectItem value="banking">Banking & Finance</SelectItem>
                            <SelectItem value="corporate">Corporate Law</SelectItem>
                            <SelectItem value="maritime">Maritime Dispute</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="suit-value">Suit Value (₹)</Label>
                        <Input id="suit-value" type="text" placeholder="e.g. 2,50,00,000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hearing-date">Hearing Date</Label>
                        <Input id="hearing-date" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="court">Court & Jurisdiction</Label>
                        <Select defaultValue="gujarat">
                          <SelectTrigger id="court">
                            <SelectValue placeholder="Select court" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gujarat">Gujarat HC - Commercial Division</SelectItem>
                            <SelectItem value="gujarat-app">Gujarat HC - Commercial Appellate</SelectItem>
                            <SelectItem value="ahmedabad">Commercial Court, Ahmedabad</SelectItem>
                            <SelectItem value="surat">Commercial Court, Surat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Parties Information</CardTitle>
                    <CardDescription>Enter details about the parties involved</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="plaintiff">Plaintiff/Petitioner</Label>
                      <Input id="plaintiff" placeholder="Name of Plaintiff/Petitioner" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="plaintiff-counsel">Plaintiff's Counsel</Label>
                      <Input id="plaintiff-counsel" placeholder="Name of Counsel" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="defendant">Defendant/Respondent</Label>
                      <Input id="defendant" placeholder="Name of Defendant/Respondent" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="defendant-counsel">Defendant's Counsel</Label>
                      <Input id="defendant-counsel" placeholder="Name of Counsel" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Case Details</CardTitle>
                  <CardDescription>Provide a summary of facts and legal issues</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="facts">Facts Summary</Label>
                    <Textarea
                      id="facts"
                      placeholder="Provide a concise summary of the case facts..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="legal-issues">Legal Issues Raised</Label>
                    <Textarea
                      id="legal-issues"
                      placeholder="List the key legal issues to be determined..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="relief">Relief Sought</Label>
                    <Textarea
                      id="relief"
                      placeholder="Describe the relief sought by the plaintiff..."
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline">
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
                <Button>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Documents</CardTitle>
                  <CardDescription>Upload relevant case documents for AI analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-1">Pleadings & Affidavits</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload plaint, written statement, affidavits, and other pleadings
                      </p>
                      <Button variant="secondary" size="sm">
                        Select Files
                      </Button>
                    </div>

                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-1">Evidence & Exhibits</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload documentary evidence, exhibits, and supporting materials
                      </p>
                      <Button variant="secondary" size="sm">
                        Select Files
                      </Button>
                    </div>

                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-1">Previous Orders</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload any previous orders or judgments in this case
                      </p>
                      <Button variant="secondary" size="sm">
                        Select Files
                      </Button>
                    </div>

                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-1">Legal Research</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload case law compilations, legal research notes, or memos
                      </p>
                      <Button variant="secondary" size="sm">
                        Select Files
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline">
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
                <Button>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ai-suggestions" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Historical Case Matching</CardTitle>
                    <CardDescription>Similar judgments based on case facts and legal issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">Reliance Industries vs SEBI (2019)</h3>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">92% Match</div>
                        </div>
                        <p className="text-sm mt-2">
                          Established precedent for contractual obligations in commercial agreements with regulatory
                          oversight.
                        </p>
                        <Button variant="link" className="px-0 h-auto text-sm">
                          View Full Case
                        </Button>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">Tata Consultancy vs Infosys (2018)</h3>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">87% Match</div>
                        </div>
                        <p className="text-sm mt-2">
                          Key judgment on breach of contract and specific performance in technology service agreements.
                        </p>
                        <Button variant="link" className="px-0 h-auto text-sm">
                          View Full Case
                        </Button>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">Adani Enterprises vs Gujarat State (2020)</h3>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">78% Match</div>
                        </div>
                        <p className="text-sm mt-2">
                          Relevant for interpretation of force majeure clauses in commercial contracts with government
                          entities.
                        </p>
                        <Button variant="link" className="px-0 h-auto text-sm">
                          View Full Case
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Statutes & Provisions</CardTitle>
                    <CardDescription>AI-identified relevant legal provisions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium">Commercial Courts Act, 2015</h3>
                        <div className="text-sm mt-2 space-y-2">
                          <p>• Section 12 - Jurisdiction of Commercial Courts</p>
                          <p>• Section 16 - Transfer of Pending Cases</p>
                          <p>• Section 21 - Appeals from Decrees of Commercial Courts</p>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Relevance: Jurisdictional provisions for commercial disputes
                        </div>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium">Indian Contract Act, 1872</h3>
                        <div className="text-sm mt-2 space-y-2">
                          <p>• Section 73 - Compensation for Loss or Damage</p>
                          <p>• Section 74 - Compensation for Breach of Contract</p>
                          <p>• Section 75 - Party Rightfully Rescinding Contract</p>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Relevance: Provisions governing breach of contract and damages
                        </div>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium">Specific Relief Act, 1963</h3>
                        <div className="text-sm mt-2 space-y-2">
                          <p>• Section 10 - Cases in which Specific Performance Enforceable</p>
                          <p>• Section 14 - Contracts Not Specifically Enforceable</p>
                          <p>• Section 16 - Personal Bars to Relief</p>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Relevance: Provisions for specific performance of contracts
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>AI Case Analysis</CardTitle>
                  <CardDescription>Preliminary analysis based on case details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">AI Confidence Level</h3>
                      <div className="text-sm text-muted-foreground">
                        Based on 42 similar cases and applicable statutes
                      </div>
                    </div>

                    <div className="w-full bg-muted rounded-full h-4">
                      <div className="bg-blue-600 h-4 rounded-full" style={{ width: "76%" }}></div>
                    </div>

                    <div className="text-xs text-right text-muted-foreground">76% confidence</div>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Likely Case Path & Estimated Duration</h3>
                        <div className="p-4 bg-muted rounded-lg">
                          <p className="text-sm">
                            Based on the case type and complexity, this matter is likely to proceed through:
                          </p>
                          <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
                            <li>Initial hearing and arguments on interim relief (1-2 hearings)</li>
                            <li>Written statement and counter-claim filing (30-45 days)</li>
                            <li>Evidence stage with potential expert witnesses (2-3 months)</li>
                            <li>Final arguments (1-2 hearings)</li>
                          </ul>
                          <p className="text-sm font-medium mt-3">Estimated total duration: 5-7 months</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Suggested Issues for Consideration</h3>
                        <div className="p-4 bg-muted rounded-lg">
                          <ul className="text-sm space-y-2 list-disc pl-5">
                            <li>Whether the alleged breach of contract falls within the force majeure provisions?</li>
                            <li>
                              Whether specific performance is an appropriate remedy given the nature of the contract?
                            </li>
                            <li>What is the appropriate quantum of damages if breach is established?</li>
                            <li>Whether there are any jurisdictional challenges to be addressed?</li>
                            <li>Whether any interim relief should be granted pending final disposal?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-6">
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

              <div className="flex justify-end gap-4">
                <Button variant="outline">
                  <Save className="mr-2 h-4 w-4" />
                  Save Analysis
                </Button>
                <Button>
                  Complete Entry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <AiAssistant />
      </SidebarInset>
    </main>
  )
}
