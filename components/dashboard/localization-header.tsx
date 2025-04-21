"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Bell, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: string
}

export function LocalizationHeader() {
  const { setTheme, theme } = useTheme()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/notifications")

      if (!response.ok) {
        throw new Error("Failed to fetch notifications")
      }

      const data = await response.json()
      setNotifications(data.notifications)

      // Count unread notifications
      const unread = data.notifications.filter((notif: Notification) => !notif.read).length
      setUnreadCount(unread)
    } catch (err) {
      console.error("Error fetching notifications:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()

    // Set up polling for real-time notifications
    const intervalId = setInterval(() => {
      fetchNotifications()
    }, 60000) // Poll every minute

    return () => clearInterval(intervalId)
  }, [])

  const formatNotificationTime = (timeString: string) => {
    const time = new Date(timeString)
    const now = new Date()
    const diffMs = now.getTime() - time.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours}h ago`

    return time.toLocaleDateString()
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "update":
        return "🔄"
      case "document":
        return "📄"
      case "judgment":
        return "⚖️"
      case "circular":
        return "📢"
      default:
        return "📌"
    }
  }

  return (
    <div className="border-b">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Select defaultValue="gujarat">
              <SelectTrigger className="w-[180px] h-8">
                <SelectValue placeholder="Select High Court" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gujarat">Gujarat High Court</SelectItem>
                <SelectItem value="bombay">Bombay High Court</SelectItem>
                <SelectItem value="delhi">Delhi High Court</SelectItem>
                <SelectItem value="calcutta">Calcutta High Court</SelectItem>
                <SelectItem value="madras">Madras High Court</SelectItem>
                <SelectItem value="karnataka">Karnataka High Court</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-1.5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
                <DropdownMenuItem>ગુજરાતી (Gujarati)</DropdownMenuItem>
                <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
                <DropdownMenuItem>বাংলা (Bengali)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 relative">
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                    {unreadCount}
                  </Badge>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-2 border-b">
                <h4 className="font-medium">Notifications</h4>
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    Mark all as read
                  </Button>
                )}
              </div>

              {loading ? (
                <div className="p-4 text-center text-sm text-muted-foreground">Loading notifications...</div>
              ) : notifications.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">No notifications</div>
              ) : (
                <div className="max-h-[300px] overflow-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 border-b last:border-0 ${!notification.read ? "bg-muted/50" : ""}`}
                    >
                      <div className="flex gap-2">
                        <div className="text-lg">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h5 className="font-medium text-sm">{notification.title}</h5>
                            <span className="text-xs text-muted-foreground">
                              {formatNotificationTime(notification.time)}
                            </span>
                          </div>
                          <p className="text-sm mt-1">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-2 border-t text-center">
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
