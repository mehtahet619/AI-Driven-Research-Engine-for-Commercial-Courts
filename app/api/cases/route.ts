import { NextResponse } from "next/server"

// This would connect to your actual database or external API in production
// For now, we'll simulate real-time data with timestamps and random status changes
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "today"

  // Get current cases with real timestamps
  const cases = getCases(type as "today" | "pending" | "adjourned")

  return NextResponse.json({ cases })
}

// Helper function to get cases based on type
function getCases(type: "today" | "pending" | "adjourned") {
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()

  // Base cases that will be modified based on current time
  const baseCases = {
    today: [
      {
        id: "case-001",
        title: "ABC Enterprises vs XYZ Corporation",
        type: "Commercial Contract Dispute",
        time: `${(currentHour % 12) + 1}:${currentMinute < 30 ? "30" : "00"} ${currentHour < 12 ? "AM" : "PM"}`,
        courtroom: "Courtroom 3A",
        value: "₹2.5 Cr",
        status: currentHour < 12 ? "Scheduled" : currentHour < 15 ? "In Progress" : "Completed",
        lastUpdated: now.toISOString(),
      },
      {
        id: "case-002",
        title: "Patel Industries vs State Bank of India",
        type: "Banking & Finance",
        time: `${(currentHour % 12) + 2}:${currentMinute < 45 ? "45" : "15"} ${currentHour < 12 ? "AM" : "PM"}`,
        courtroom: "Courtroom 2B",
        value: "₹4.8 Cr",
        status: currentHour < 14 ? "Scheduled" : currentHour < 17 ? "In Progress" : "Completed",
        lastUpdated: now.toISOString(),
      },
      {
        id: "case-003",
        title: "Sharma Tech vs Global Software Ltd.",
        type: "Intellectual Property",
        time: `${(currentHour % 12) + 3}:${currentMinute < 15 ? "15" : "45"} ${currentHour < 12 ? "AM" : "PM"}`,
        courtroom: "Courtroom 5C",
        value: "₹3.2 Cr",
        status: currentHour < 16 ? "Scheduled" : currentHour < 18 ? "In Progress" : "Completed",
        lastUpdated: now.toISOString(),
      },
    ],
    pending: [
      {
        id: "case-004",
        title: "Mehta Exports vs Shipping Corp. of India",
        type: "Maritime Dispute",
        time: `Heard on ${now.getDate() - 2} ${now.toLocaleString("default", { month: "short" })}`,
        courtroom: "Courtroom 4D",
        value: "₹6.7 Cr",
        status: "Reserved",
        lastUpdated: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        expectedJudgment: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN"),
      },
      {
        id: "case-005",
        title: "Reliance Retail vs Future Group",
        type: "Corporate Acquisition",
        time: `Heard on ${now.getDate() - 5} ${now.toLocaleString("default", { month: "short" })}`,
        courtroom: "Courtroom 1A",
        value: "₹24.7 Cr",
        status: "Reserved",
        lastUpdated: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        expectedJudgment: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN"),
      },
    ],
    adjourned: [
      {
        id: "case-006",
        title: "Tata Consultancy vs Infosys Ltd.",
        type: "Employee Poaching",
        time: `Next: ${now.getDate() + 7} ${now.toLocaleString("default", { month: "short" })}`,
        courtroom: "Courtroom 3C",
        value: "₹1.8 Cr",
        status: "Adjourned",
        lastUpdated: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        reason: "Counsel requested additional time for evidence submission",
      },
      {
        id: "case-007",
        title: "Gujarat Textiles vs Income Tax Dept.",
        type: "Tax Dispute",
        time: `Next: ${now.getDate() + 10} ${now.toLocaleString("default", { month: "short" })}`,
        courtroom: "Courtroom 2A",
        value: "₹5.3 Cr",
        status: "Adjourned",
        lastUpdated: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        reason: "Awaiting expert witness availability",
      },
    ],
  }

  // Add some randomization to simulate real-time changes
  if (type === "today") {
    // Randomly update status of one case if it's afternoon
    if (currentHour >= 12 && Math.random() > 0.7) {
      const randomIndex = Math.floor(Math.random() * baseCases.today.length)
      const statuses = ["Scheduled", "In Progress", "Delayed", "Completed"]
      baseCases.today[randomIndex].status = statuses[Math.floor(Math.random() * statuses.length)]

      // Add a note for delayed cases
      if (baseCases.today[randomIndex].status === "Delayed") {
        baseCases.today[randomIndex].note = "Delayed due to previous case overrun"
      }
    }
  }

  return baseCases[type]
}
