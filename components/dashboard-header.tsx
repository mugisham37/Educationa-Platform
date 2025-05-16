"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Bell, MessageSquare, Search, User, Settings, CreditCard, HelpCircle, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "/dashboard",
  },
  {
    name: "Educational Consulting",
    href: "#",
    dropdown: true,
    items: [
      { name: "University Selection", href: "/educational-consulting/university-selection" },
      { name: "Counselor Sessions", href: "/educational-consulting/counselor-sessions" },
      { name: "Profile Analytics", href: "/educational-consulting/profile-analytics" },
    ],
  },
  {
    name: "Document Preparation",
    href: "#",
    dropdown: true,
    items: [
      { name: "Statement of Purpose", href: "/document-preparation/statement-of-purpose" },
      { name: "Resume/CV", href: "/document-preparation/resume-cv" },
      { name: "Letters of Recommendation", href: "/document-preparation/recommendation-letters" },
    ],
  },
  {
    name: "Visa Support",
    href: "#",
    dropdown: true,
    items: [
      { name: "Requirements", href: "/visa-support/requirements" },
      { name: "Application Process", href: "/visa-support/application-process" },
      { name: "Interview Preparation", href: "/visa-support/interview-preparation" },
    ],
  },
  {
    name: "Academic Enhancement",
    href: "#",
    dropdown: true,
    items: [
      { name: "Research Opportunities", href: "/academic-enhancement/research" },
      { name: "Test Preparation", href: "/academic-enhancement/test-preparation" },
      { name: "Skills Development", href: "/academic-enhancement/skills" },
    ],
  },
]

export function DashboardHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="font-montserrat font-bold text-2xl text-primary-deep">YMGrad</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn("h-4 w-4 transition-transform", openDropdown === item.name ? "rotate-180" : "")}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ) : (
                  <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                )}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 relative">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 relative">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                2
              </span>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32&text=JD"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="px-2 py-6">
                <Link href="/dashboard" className="flex items-center mb-6">
                  <span className="font-montserrat font-bold text-2xl text-primary-deep">YMGrad</span>
                </Link>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full text-base font-medium"
                          >
                            {item.name}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={cn(
                                "h-4 w-4 transition-transform",
                                openDropdown === item.name ? "rotate-180" : "",
                              )}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                          {openDropdown === item.name && (
                            <div className="pl-4 space-y-2">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link href={item.href} className="block text-base font-medium">
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                        <Image
                          src="/placeholder.svg?height=32&width=32&text=JD"
                          alt="Profile"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-gray-500">john.doe@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/profile" className="flex items-center text-sm">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link href="/settings" className="flex items-center text-sm">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                    <Link href="/billing" className="flex items-center text-sm">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </Link>
                    <Link href="/support" className="flex items-center text-sm">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </Link>
                    <Link href="/sign-in" className="flex items-center text-sm">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
