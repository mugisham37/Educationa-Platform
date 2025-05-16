"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "/",
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

export function Navbar() {
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
          <Link href="/" className="flex items-center space-x-2">
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
                    <ChevronDown className="h-4 w-4" />
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
          <div className="hidden md:flex gap-4">
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-secondary-teal hover:bg-secondary-teal/90">Get Started</Button>
            </Link>
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
                <Link href="/" className="flex items-center mb-6">
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
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                openDropdown === item.name ? "rotate-180" : "",
                              )}
                            />
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
                <div className="mt-6 space-y-4">
                  <Link href="/sign-in" className="block">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up" className="block">
                    <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90">Get Started</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
