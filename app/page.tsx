import { JudicialDashboard } from "@/components/dashboard/judicial-dashboard"
import { JudicialSidebar } from "@/components/sidebar/judicial-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { AiAssistant } from "@/components/ai-assistant"

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <JudicialSidebar />
      <SidebarInset className="bg-background">
        <JudicialDashboard />
        <AiAssistant />
      </SidebarInset>
    </main>
  )
}
