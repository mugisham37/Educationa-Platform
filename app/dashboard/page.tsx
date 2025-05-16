import Image from "next/image"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  FileText,
  Bell,
  MessageSquare,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  BookOpen,
  User,
  BarChart,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 bg-soft-gray">
        <div className="container">
          {/* Welcome Banner */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="font-montserrat font-semibold text-2xl text-primary-deep mb-1">Welcome back, John</h1>
                <p className="text-gray-500">Tuesday, May 6, 2025</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                <Button size="sm" variant="outline">
                  <Bell className="h-4 w-4 mr-2" />
                  Check Application Status
                </Button>
                <Button size="sm" variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  View Tasks
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Progress Overview Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Your Journey Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-secondary-teal/20 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-secondary-teal flex items-center justify-center text-white font-bold text-2xl">
                            35%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-montserrat font-semibold text-primary-deep mb-2">University Selection</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      You're currently exploring universities that match your profile.
                    </p>
                  </div>

                  <h4 className="font-medium text-sm mb-2">Next Steps:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Schedule a counselor session</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Finalize your university shortlist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Begin drafting your statement of purpose</span>
                    </li>
                  </ul>

                  <Button variant="link" className="text-secondary-teal p-0 h-auto">
                    View Complete Timeline <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-secondary-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Initial Consultation</p>
                        <p className="text-xs text-gray-500 mb-1">May 10, 2025 • 10:00 AM (EST)</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            Reschedule
                          </Button>
                          <Button size="sm" className="h-7 text-xs bg-secondary-teal hover:bg-secondary-teal/90">
                            Join
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-accent-gold/10 rounded-md p-2 flex-shrink-0">
                        <Clock className="h-5 w-5 text-accent-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Document Submission Deadline</p>
                        <p className="text-xs text-gray-500 mb-1">May 15, 2025 • 11:59 PM (EST)</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-secondary-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">University Info Session</p>
                        <p className="text-xs text-gray-500 mb-1">May 20, 2025 • 2:00 PM (EST)</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="text-secondary-teal p-0 h-auto mt-4">
                    View All Events <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column */}
            <div className="space-y-8">
              {/* Task Tracker Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Priority Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm">Complete GRE registration</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">High</span>
                        <span className="text-xs text-gray-500">2 days left</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm">Upload transcript to profile</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded mr-2">Medium</span>
                        <span className="text-xs text-gray-500">5 days left</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm">Research scholarship opportunities</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded mr-2">Medium</span>
                        <span className="text-xs text-gray-500">1 week left</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm">Draft personal statement</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded mr-2">Document</span>
                        <span className="text-xs text-gray-500">2 weeks left</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm">Contact potential recommenders</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">Low</span>
                        <span className="text-xs text-gray-500">3 weeks left</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>2/7 completed</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>

                  <Button variant="link" className="text-secondary-teal p-0 h-auto">
                    View All Tasks <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              {/* Application Status Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Application Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-md overflow-hidden">
                      <div className="flex items-center p-4 border-b">
                        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=MIT"
                            alt="MIT"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">Massachusetts Institute of Technology</h3>
                          <p className="text-xs text-gray-500">Master of Computer Science</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">In Progress</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Application Completion</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} className="h-2 mb-3" />
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Next deadline: May 15, 2025</span>
                          <Button variant="link" className="text-secondary-teal p-0 h-auto text-xs">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md overflow-hidden">
                      <div className="flex items-center p-4 border-b">
                        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Stanford"
                            alt="Stanford"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">Stanford University</h3>
                          <p className="text-xs text-gray-500">Master of Computer Science</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Planning</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Application Completion</span>
                          <span>25%</span>
                        </div>
                        <Progress value={25} className="h-2 mb-3" />
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Next deadline: June 10, 2025</span>
                          <Button variant="link" className="text-secondary-teal p-0 h-auto text-xs">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="text-secondary-teal p-0 h-auto mt-4">
                    View All Applications <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Counselor Connection Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Your Counselor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=Sarah"
                        alt="Counselor"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-montserrat font-semibold">Sarah Johnson, M.Ed.</h3>
                    <p className="text-sm text-gray-500 mb-2">Senior Educational Consultant</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Computer Science</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Engineering</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">US Universities</span>
                    </div>
                    <p className="text-xs text-green-600 mb-4">Available for scheduling</p>
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90">
                        Schedule Session
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resources Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Recommended Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                        <FileText className="h-5 w-5 text-secondary-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">SOP Writing Guide</p>
                        <p className="text-xs text-gray-500 mb-1">
                          Learn how to craft a compelling Statement of Purpose
                        </p>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Guide</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-secondary-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Scholarship Opportunities for CS Students</p>
                        <p className="text-xs text-gray-500 mb-1">Comprehensive list of scholarships for your field</p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Article</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                        <BarChart className="h-5 w-5 text-secondary-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">GRE Preparation Strategies</p>
                        <p className="text-xs text-gray-500 mb-1">Tips and techniques to maximize your GRE score</p>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Video</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                        <User className="h-5 w-5 text-secondary-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Student Success Story: From India to MIT</p>
                        <p className="text-xs text-gray-500 mb-1">Learn how Raj navigated the application process</p>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Case Study</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="link" className="text-secondary-teal p-0 h-auto mt-4">
                    View All Resources <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Your Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center mb-1">
                        <FileText className="h-4 w-4 text-secondary-teal mr-2" />
                        <span className="text-sm font-medium">Documents</span>
                      </div>
                      <p className="text-2xl font-semibold">3/8</p>
                      <p className="text-xs text-gray-500">Completed</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 text-secondary-teal mr-2" />
                        <span className="text-sm font-medium">Deadlines</span>
                      </div>
                      <p className="text-2xl font-semibold">5</p>
                      <p className="text-xs text-gray-500">Upcoming</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center mb-1">
                        <MessageSquare className="h-4 w-4 text-secondary-teal mr-2" />
                        <span className="text-sm font-medium">Consultations</span>
                      </div>
                      <p className="text-2xl font-semibold">2</p>
                      <p className="text-xs text-gray-500">Hours Used</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center mb-1">
                        <AlertCircle className="h-4 w-4 text-secondary-teal mr-2" />
                        <span className="text-sm font-medium">Success Rate</span>
                      </div>
                      <p className="text-2xl font-semibold">85%</p>
                      <p className="text-xs text-gray-500">Probability</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
