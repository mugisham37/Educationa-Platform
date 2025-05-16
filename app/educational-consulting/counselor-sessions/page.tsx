import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import {
  Search,
  CalendarIcon,
  Clock,
  Video,
  MessageSquare,
  Star,
  ChevronRight,
  CheckCircle,
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  Download,
  Calendar,
  Info,
} from "lucide-react"

export default function CounselorSessions() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 bg-soft-gray">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep mb-2">
                Counselor Sessions
              </h1>
              <p className="text-gray-500">Connect with expert counselors for personalized guidance</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Schedule New Session
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Session Notes
              </Button>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="past">Past Sessions</TabsTrigger>
              <TabsTrigger value="counselors">Find Counselors</TabsTrigger>
            </TabsList>

            {/* Upcoming Sessions Tab */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Session Card 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          <Video className="h-3 w-3 mr-1" />
                          Video
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          60 min
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=SJ"
                          alt="Sarah Johnson"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold">Sarah Johnson, M.Ed.</h3>
                        <p className="text-sm text-gray-500">Senior Educational Consultant</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <CalendarIcon className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Thursday, May 10, 2025</p>
                          <p className="text-xs text-gray-500">10:00 AM - 11:00 AM (EST)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Info className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Initial Consultation</p>
                          <p className="text-xs text-gray-500">University selection strategy</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                        Join Session
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Reschedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Session Card 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Chat
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          30 min
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=RP"
                          alt="Robert Patel"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold">Robert Patel, Ph.D.</h3>
                        <p className="text-sm text-gray-500">STEM Programs Specialist</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <CalendarIcon className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Monday, May 14, 2025</p>
                          <p className="text-xs text-gray-500">2:00 PM - 2:30 PM (EST)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Info className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Document Review</p>
                          <p className="text-xs text-gray-500">Statement of Purpose feedback</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" disabled>
                        Join Session
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Confirm
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Schedule New Session Card */}
                <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                    <CalendarIcon className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Schedule a New Session</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Connect with an expert counselor for personalized guidance on your educational journey.
                    </p>
                    <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Past Sessions Tab */}
            <TabsContent value="past">
              <div className="space-y-6">
                {/* Past Session 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex items-start md:items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <Image
                            src="/placeholder.svg?height=48&width=48&text=SJ"
                            alt="Sarah Johnson"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-montserrat font-semibold">Sarah Johnson, M.Ed.</h3>
                          <div className="flex items-center">
                            <p className="text-sm text-gray-500 mr-2">Initial Consultation</p>
                            <Badge variant="outline">
                              <Video className="h-3 w-3 mr-1" />
                              Video
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center mb-1">
                          <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">April 25, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">10:00 AM - 11:00 AM (EST)</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Session Notes</h4>
                        <p className="text-sm text-gray-600">
                          Discussed university preferences and program options. Sarah recommended focusing on
                          universities with strong computer science programs and research opportunities. We identified
                          MIT, Stanford, and Carnegie Mellon as top choices based on my academic profile and career
                          goals.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Action Items</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm">Research the recommended universities</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm">Prepare draft of statement of purpose</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                            <span className="text-sm">Contact potential recommenders</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "text-yellow-400" : "text-gray-300"}`}
                              fill={star <= 5 ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">Excellent</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download Notes
                        </Button>
                        <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white" size="sm">
                          Schedule Follow-up
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Past Session 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex items-start md:items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <Image
                            src="/placeholder.svg?height=48&width=48&text=JL"
                            alt="Jennifer Lee"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-montserrat font-semibold">Jennifer Lee, MBA</h3>
                          <div className="flex items-center">
                            <p className="text-sm text-gray-500 mr-2">Application Strategy</p>
                            <Badge variant="outline">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              Chat
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center mb-1">
                          <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">April 18, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">3:00 PM - 4:00 PM (EST)</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Session Notes</h4>
                        <p className="text-sm text-gray-600">
                          Reviewed application timeline and strategy. Jennifer advised on how to highlight my research
                          experience and leadership roles in my applications. We discussed early decision vs. regular
                          decision strategies and created a submission schedule for each university.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Action Items</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm">Finalize application timeline</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm">Create list of achievements to highlight</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                            <span className="text-sm">Research early decision policies</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                              fill={star <= 4 ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">Very Good</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download Notes
                        </Button>
                        <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white" size="sm">
                          Schedule Follow-up
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Find Counselors Tab */}
            <TabsContent value="counselors">
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input placeholder="Search counselors..." className="pl-9" />
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Specializations</SelectItem>
                          <SelectItem value="stem">STEM Programs</SelectItem>
                          <SelectItem value="business">Business & MBA</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                          <SelectItem value="medicine">Medicine & Healthcare</SelectItem>
                          <SelectItem value="law">Law</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Time</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="week">This Week</SelectItem>
                          <SelectItem value="weekend">Weekend</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Counselor Card 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                        <Image
                          src="/placeholder.svg?height=80&width=80&text=SJ"
                          alt="Sarah Johnson"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-montserrat font-semibold">Sarah Johnson, M.Ed.</h3>
                      <p className="text-sm text-gray-500 mb-2">Senior Educational Consultant</p>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mb-3">250+ sessions completed</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <Badge variant="outline">Computer Science</Badge>
                      <Badge variant="outline">Engineering</Badge>
                      <Badge variant="outline">US Universities</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <GraduationCap className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Former Admissions Officer at MIT</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Globe className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Specializes in US, UK, and Canadian universities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">10+ years of experience in educational consulting</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                        Schedule Session
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Counselor Card 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                        <Image
                          src="/placeholder.svg?height=80&width=80&text=RP"
                          alt="Robert Patel"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-montserrat font-semibold">Robert Patel, Ph.D.</h3>
                      <p className="text-sm text-gray-500 mb-2">STEM Programs Specialist</p>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                            fill={star <= 4 ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mb-3">180+ sessions completed</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <Badge variant="outline">Computer Science</Badge>
                      <Badge variant="outline">Data Science</Badge>
                      <Badge variant="outline">AI/ML</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <GraduationCap className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Professor at Stanford University</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Globe className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Specializes in US and European technical programs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BookOpen className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Published researcher in computer science education</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                        Schedule Session
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Counselor Card 3 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                        <Image
                          src="/placeholder.svg?height=80&width=80&text=JL"
                          alt="Jennifer Lee"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-montserrat font-semibold">Jennifer Lee, MBA</h3>
                      <p className="text-sm text-gray-500 mb-2">Business Programs Advisor</p>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 5 ? "text-yellow-400" : "text-gray-300"}`}
                            fill={star <= 5 ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mb-3">210+ sessions completed</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <Badge variant="outline">MBA</Badge>
                      <Badge variant="outline">Business</Badge>
                      <Badge variant="outline">Finance</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <GraduationCap className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Harvard Business School Graduate</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Globe className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Specializes in top-tier MBA programs globally</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm">Former MBA admissions consultant at Wharton</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                        Schedule Session
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center mt-6">
                <Button variant="link" className="text-secondary-teal">
                  View All Counselors <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Schedule Session Form */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl font-montserrat">Schedule a New Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="sessionType">Session Type</Label>
                    <Select defaultValue="initial">
                      <SelectTrigger id="sessionType">
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="initial">Initial Consultation</SelectItem>
                        <SelectItem value="followup">Follow-up Session</SelectItem>
                        <SelectItem value="document">Document Review</SelectItem>
                        <SelectItem value="application">Application Strategy</SelectItem>
                        <SelectItem value="interview">Interview Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="counselor">Select Counselor</Label>
                    <Select>
                      <SelectTrigger id="counselor">
                        <SelectValue placeholder="Choose a counselor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarah">Sarah Johnson, M.Ed.</SelectItem>
                        <SelectItem value="robert">Robert Patel, Ph.D.</SelectItem>
                        <SelectItem value="jennifer">Jennifer Lee, MBA</SelectItem>
                        <SelectItem value="michael">Michael Chen, Ed.D.</SelectItem>
                        <SelectItem value="david">David Wilson, M.S.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <div className="relative">
                      <Input id="date" type="date" className="w-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM - 10:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="1pm">1:00 PM - 2:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM - 5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Session Duration</Label>
                    <RadioGroup defaultValue="60" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="30" id="r1" />
                        <Label htmlFor="r1">30 minutes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="60" id="r2" />
                        <Label htmlFor="r2">60 minutes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="90" id="r3" />
                        <Label htmlFor="r3">90 minutes</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="format">Session Format</Label>
                    <RadioGroup defaultValue="video" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="video" id="f1" />
                        <Label htmlFor="f1">Video Call</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="audio" id="f2" />
                        <Label htmlFor="f2">Audio Call</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="chat" id="f3" />
                        <Label htmlFor="f3">Chat</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topics">Topics to Discuss</Label>
                    <Textarea
                      id="topics"
                      placeholder="Please share what you'd like to discuss in this session..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Documents to Review (Optional)</Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <div className="flex flex-col items-center">
                        <Calendar className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                        <p className="text-xs text-gray-400">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information that might help the counselor prepare for your session..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8 gap-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">Schedule Session</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
