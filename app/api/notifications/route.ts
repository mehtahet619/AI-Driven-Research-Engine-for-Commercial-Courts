import { NextResponse } from "next/server"

export async function GET() {
  const now = new Date()

  // Generate notifications based on current time
  const notifications = [
    {
      id: `notif-${now.getTime()}-1`,
      title: "Case Status Update",
      message: "ABC Enterprises vs XYZ Corporation hearing has been rescheduled",
      time: new Date(now.getTime() - 15 * 60 * 1000).toISOString(),
      read: false,
      type: "update",
    },
    {
      id: `notif-${now.getTime()}-2`,
      title: "New Document Filed",
      message: "Plaintiff in Patel Industries vs SBI has submitted additional evidence",
      time: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
      read: false,
      type: "document",
    },
    {
      id: `notif-${now.getTime()}-3`,
      title: "Judgment Ready for Review",
      message: "Draft judgment for Mehta Exports case is ready for your review",
      time: new Date(now.getTime() - 5 * 60 * 60 * 1000).toISOString(),
      read: true,
      type: "judgment",
    },
    {
      id: `notif-${now.getTime()}-4`,
      title: "High Court Circular",
      message: "New guidelines issued for commercial courts procedure",
      time: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      read: true,
      type: "circular",
    },
  ]

  return NextResponse.json({ notifications })
}
