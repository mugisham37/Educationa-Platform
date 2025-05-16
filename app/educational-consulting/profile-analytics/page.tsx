import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import {
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Share2,
  ChevronUp,
  ChevronDown,
  Info,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  Users,
  Briefcase,
  FileText,
  Lightbulb,
} from "lucide-react"

export default function ProfileAnalytics() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 bg-soft-gray">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep mb-2">
                Profile Analytics
              </h1>
              <p className="text-gray-500">Analyze your profile and improve your chances of admission</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                <FileText className="h-4 w-4 mr-2" />
                Update Profile
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Profile Strength Overview */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-secondary-teal/20 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-secondary-teal flex items-center justify-center text-white font-bold text-3xl">
                          78%
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mt-4">Overall Profile Strength</h3>
                  <p className="text-sm text-gray-500">Strong profile with room for improvement</p>
                </div>

                <div className="md:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Academic Credentials</span>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Extracurricular Activities</span>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <span className="text-sm font-medium">70%</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Research Experience</span>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Test Scores</span>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Leadership Experience</span>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Letters of Recommendation</span>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <span className="text-sm font-medium">80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-green-50 border-green-100">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="bg-green-100 rounded-full p-2 mr-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Strengths</h4>
                            <p className="text-xs text-gray-600">Strong academic record and test scores</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-yellow-50 border-yellow-100">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="bg-yellow-100 rounded-full p-2 mr-3">
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Areas for Improvement</h4>
                            <p className="text-xs text-gray-600">Research experience and extracurriculars</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-2 mr-3">
                            <Lightbulb className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Recommendations</h4>
                            <p className="text-xs text-gray-600">Pursue research opportunities in your field</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Profile Overview</TabsTrigger>
              <TabsTrigger value="comparison">Peer Comparison</TabsTrigger>
              <TabsTrigger value="chances">Admission Chances</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            {/* Profile Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Academic Profile */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-montserrat flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-secondary-teal" />
                      Academic Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">GPA</h3>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">3.85/4.0</span>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Top 10%</Badge>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Test Scores</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>GRE</span>
                            <div className="flex items-center">
                              <span className="font-semibold">328</span>
                              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Top 15%</Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>TOEFL</span>
                            <div className="flex items-center">
                              <span className="font-semibold">112</span>
                              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Top 5%</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Academic Achievements</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Award className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                            <span>Dean's List (6 semesters)</span>
                          </li>
                          <li className="flex items-start">
                            <Award className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                            <span>Department Honors in Computer Science</span>
                          </li>
                          <li className="flex items-start">
                            <Award className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                            <span>Outstanding Junior Award</span>
                          </li>
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Coursework Highlights</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">Data Structures</Badge>
                          <Badge variant="outline">Algorithms</Badge>
                          <Badge variant="outline">Machine Learning</Badge>
                          <Badge variant="outline">Database Systems</Badge>
                          <Badge variant="outline">Computer Networks</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Research & Projects */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-montserrat flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-secondary-teal" />
                      Research & Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Research Experience</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-sm">Undergraduate Research Assistant</p>
                            <p className="text-xs text-gray-500">AI Research Lab, 2023-Present</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Worked on natural language processing models for sentiment analysis
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Summer Research Intern</p>
                            <p className="text-xs text-gray-500">Tech Innovation Center, Summer 2022</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Developed algorithms for efficient data processing in IoT devices
                            </p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Projects</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-sm">Smart Campus Navigation System</p>
                            <p className="text-xs text-gray-500">Capstone Project, 2023</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <Badge variant="outline" className="text-xs">
                                React
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Node.js
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                MongoDB
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Healthcare Data Analytics Platform</p>
                            <p className="text-xs text-gray-500">Course Project, 2022</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <Badge variant="outline" className="text-xs">
                                Python
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                TensorFlow
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                SQL
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Publications & Presentations</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <FileText className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                            <span>Co-author on 1 conference paper (regional)</span>
                          </li>
                          <li className="flex items-start">
                            <FileText className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                            <span>2 poster presentations at undergraduate symposiums</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Extracurricular & Leadership */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-montserrat flex items-center">
                      <Users className="h-5 w-5 mr-2 text-secondary-teal" />
                      Extracurricular & Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Leadership Roles</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-sm">Vice President</p>
                            <p className="text-xs text-gray-500">Computer Science Student Association, 2022-2023</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Organized tech talks, hackathons, and networking events
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Team Lead</p>
                            <p className="text-xs text-gray-500">Competitive Programming Team, 2021-2022</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Led a team of 5 students in regional coding competitions
                            </p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Extracurricular Activities</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-sm">Volunteer Tutor</p>
                            <p className="text-xs text-gray-500">Community Learning Center, 2021-Present</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Tutored high school students in math and computer science
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Member</p>
                            <p className="text-xs text-gray-500">University Robotics Club, 2020-Present</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Participated in robot design and programming competitions
                            </p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Work Experience</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-sm">Software Engineering Intern</p>
                            <p className="text-xs text-gray-500">Tech Solutions Inc., Summer 2023</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Developed and tested features for a web application
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Teaching Assistant</p>
                            <p className="text-xs text-gray-500">University CS Department, 2022-2023</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Assisted in Data Structures and Algorithms courses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Skills & Competencies */}
              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-secondary-teal" />
                    Skills & Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Technical Skills</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Programming Languages</span>
                            <span>Advanced</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Web Development</span>
                            <span>Intermediate</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Data Science</span>
                            <span>Intermediate</span>
                          </div>
                          <Progress value={70} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Cloud Computing</span>
                            <span>Basic</span>
                          </div>
                          <Progress value={50} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Soft Skills</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Communication</span>
                            <span>Strong</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Teamwork</span>
                            <span>Strong</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Problem Solving</span>
                            <span>Very Strong</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Leadership</span>
                            <span>Moderate</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Languages</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>English</span>
                            <span>Native/Fluent</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Spanish</span>
                            <span>Intermediate</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Mandarin</span>
                            <span>Basic</span>
                          </div>
                          <Progress value={30} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>French</span>
                            <span>Basic</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Peer Comparison Tab */}
            <TabsContent value="comparison">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-montserrat flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-secondary-teal" />
                      Academic Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-sm font-medium">GPA Comparison</h3>
                          <Select defaultValue="cs">
                            <SelectTrigger className="h-8 w-[180px]">
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cs">Computer Science</SelectItem>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="all">All Programs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                          <div className="text-center">
                            <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">GPA Distribution Chart</p>
                            <p className="text-xs text-gray-400">(Visualization would appear here)</p>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                          <div>
                            <p className="text-gray-500">Your GPA</p>
                            <p className="font-semibold">3.85</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Peer Average</p>
                            <p className="font-semibold">3.65</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Percentile</p>
                            <p className="font-semibold text-green-600">85th</p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium mb-3">Test Score Comparison</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Your GRE (328)</span>
                              <span className="text-green-600">80th percentile</span>
                            </div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                                <div className="bg-secondary-teal h-full w-[80%]"></div>
                                <div className="absolute left-[75%] top-0 h-2 w-1 bg-black"></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>300</span>
                                <span>320</span>
                                <span>340</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Your TOEFL (112)</span>
                              <span className="text-green-600">90th percentile</span>
                            </div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                                <div className="bg-secondary-teal h-full w-[90%]"></div>
                                <div className="absolute left-[85%] top-0 h-2 w-1 bg-black"></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>80</span>
                                <span>100</span>
                                <span>120</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-montserrat flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-secondary-teal" />
                      Experience Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-sm font-medium">Research Experience</h3>
                          <Select defaultValue="admitted">
                            <SelectTrigger className="h-8 w-[180px]">
                              <SelectValue placeholder="Select comparison" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admitted">Admitted Students</SelectItem>
                              <SelectItem value="all">All Applicants</SelectItem>
                              <SelectItem value="top">Top Schools</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                          <div className="text-center">
                            <PieChart className="h-16 w-16 text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">Research Experience Distribution</p>
                            <p className="text-xs text-gray-400">(Visualization would appear here)</p>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">No Research Experience</span>
                            <span className="text-sm">15%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Course Projects Only</span>
                            <span className="text-sm">30%</span>
                          </div>
                          <div className="flex justify-between items-center bg-gray-100 p-1 rounded">
                            <span className="text-sm font-medium">Your Level: Research Assistant</span>
                            <span className="text-sm font-medium">40%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Publications/Advanced Research</span>
                            <span className="text-sm">15%</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium mb-3">Extracurricular Comparison</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Leadership Roles</span>
                            <div className="flex items-center">
                              <span className="text-sm mr-2">You: 2</span>
                              <span className="text-sm text-gray-500">Avg: 1.5</span>
                              <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Volunteer Experience</span>
                            <div className="flex items-center">
                              <span className="text-sm mr-2">You: 1</span>
                              <span className="text-sm text-gray-500">Avg: 1.2</span>
                              <TrendingDown className="h-4 w-4 text-red-500 ml-1" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Internships</span>
                            <div className="flex items-center">
                              <span className="text-sm mr-2">You: 1</span>
                              <span className="text-sm text-gray-500">Avg: 0.8</span>
                              <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Technical Projects</span>
                            <div className="flex items-center">
                              <span className="text-sm mr-2">You: 3</span>
                              <span className="text-sm text-gray-500">Avg: 2.5</span>
                              <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-secondary-teal" />
                    Competitive Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-sm font-medium">How You Compare to Admitted Students</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Select defaultValue="mit">
                          <SelectTrigger className="h-8 w-[180px]">
                            <SelectValue placeholder="Select university" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mit">MIT</SelectItem>
                            <SelectItem value="stanford">Stanford</SelectItem>
                            <SelectItem value="harvard">Harvard</SelectItem>
                            <SelectItem value="cmu">Carnegie Mellon</SelectItem>
                            <SelectItem value="berkeley">UC Berkeley</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <LineChart className="h-16 w-16 text-gray-300 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Competitive Analysis Radar Chart</p>
                        <p className="text-xs text-gray-400">(Visualization would appear here)</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <Card className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm">Academic Metrics</h4>
                            <Badge className="bg-yellow-100 text-yellow-800">Competitive</Badge>
                          </div>
                          <p className="text-xs text-gray-600">
                            Your GPA and test scores are competitive but slightly below the average for admitted
                            students at MIT.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm">Research Experience</h4>
                            <Badge className="bg-red-100 text-red-800">Below Average</Badge>
                          </div>
                          <p className="text-xs text-gray-600">
                            Most admitted students have more substantial research experience or publications in their
                            field.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm">Extracurricular Profile</h4>
                            <Badge className="bg-green-100 text-green-800">Strong</Badge>
                          </div>
                          <p className="text-xs text-gray-600">
                            Your leadership roles and technical projects are above average compared to admitted
                            students.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Admission Chances Tab */}
            <TabsContent value="chances">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Admission Probability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                          <div className="flex items-center">
                            <h3 className="text-sm font-medium">Estimated Admission Chances</h3>
                            <Info className="h-4 w-4 text-gray-400 ml-1" />
                          </div>
                          <div className="flex items-center mt-2 md:mt-0">
                            <Select defaultValue="cs">
                              <SelectTrigger className="h-8 w-[180px]">
                                <SelectValue placeholder="Select program" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cs">Computer Science</SelectItem>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="all">All Programs</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                                <Image
                                  src="/placeholder.svg?height=40&width=40&text=MIT"
                                  alt="MIT"
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">Massachusetts Institute of Technology</p>
                                <p className="text-xs text-gray-500">Computer Science, MS</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center">
                                <span className="font-semibold text-yellow-600 mr-2">35%</span>
                                <Badge className="bg-yellow-100 text-yellow-800">Reach</Badge>
                              </div>
                              <p className="text-xs text-gray-500">Acceptance rate: 4%</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                                <Image
                                  src="/placeholder.svg?height=40&width=40&text=CMU"
                                  alt="CMU"
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">Carnegie Mellon University</p>
                                <p className="text-xs text-gray-500">Computer Science, MS</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center">
                                <span className="font-semibold text-yellow-600 mr-2">40%</span>
                                <Badge className="bg-yellow-100 text-yellow-800">Reach</Badge>
                              </div>
                              <p className="text-xs text-gray-500">Acceptance rate: 5%</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                                <Image
                                  src="/placeholder.svg?height=40&width=40&text=UIUC"
                                  alt="UIUC"
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">University of Illinois Urbana-Champaign</p>
                                <p className="text-xs text-gray-500">Computer Science, MS</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center">
                                <span className="font-semibold text-blue-600 mr-2">65%</span>
                                <Badge className="bg-blue-100 text-blue-800">Target</Badge>
                              </div>
                              <p className="text-xs text-gray-500">Acceptance rate: 15%</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                                <Image
                                  src="/placeholder.svg?height=40&width=40&text=UW"
                                  alt="UW"
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">University of Washington</p>
                                <p className="text-xs text-gray-500">Computer Science, MS</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center">
                                <span className="font-semibold text-blue-600 mr-2">70%</span>
                                <Badge className="bg-blue-100 text-blue-800">Target</Badge>
                              </div>
                              <p className="text-xs text-gray-500">Acceptance rate: 18%</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                                <Image
                                  src="/placeholder.svg?height=40&width=40&text=ASU"
                                  alt="ASU"
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">Arizona State University</p>
                                <p className="text-xs text-gray-500">Computer Science, MS</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center">
                                <span className="font-semibold text-green-600 mr-2">90%</span>
                                <Badge className="bg-green-100 text-green-800">Safety</Badge>
                              </div>
                              <p className="text-xs text-gray-500">Acceptance rate: 85%</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button variant="outline">View More Universities</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="mb-6">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Admission Factors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">What's Helping You</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <ChevronUp className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm">Strong GPA and test scores</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronUp className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm">Leadership experience in student organizations</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronUp className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm">Relevant internship experience</span>
                            </li>
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">What's Hurting You</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <ChevronDown className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                              <span className="text-sm">Limited research experience</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronDown className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                              <span className="text-sm">No publications in academic journals</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronDown className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                              <span className="text-sm">Limited international experience</span>
                            </li>
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">Application Strategy</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Based on your profile, we recommend applying to a mix of reach, target, and safety schools:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Badge className="bg-yellow-100 text-yellow-800 mr-2">Reach</Badge>
                              <span className="text-sm">2-3 highly competitive programs</span>
                            </li>
                            <li className="flex items-start">
                              <Badge className="bg-blue-100 text-blue-800 mr-2">Target</Badge>
                              <span className="text-sm">3-4 programs where you're competitive</span>
                            </li>
                            <li className="flex items-start">
                              <Badge className="bg-green-100 text-green-800 mr-2">Safety</Badge>
                              <span className="text-sm">1-2 programs where you're highly likely to be admitted</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Our counselors can help you improve your profile and maximize your chances of admission.
                      </p>
                      <div className="space-y-3">
                        <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                          Schedule a Consultation
                        </Button>
                        <Button variant="outline" className="w-full">
                          Review My School List
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-secondary-teal" />
                        Academic Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Pursue Research Opportunities</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Your profile would benefit significantly from more substantial research experience.
                              Consider reaching out to professors in your department for research assistant positions.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">High Priority</Badge>
                              <Badge variant="outline">3-6 months</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Take Advanced Coursework</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Consider taking 1-2 graduate-level courses as electives to demonstrate your ability to
                              handle advanced material. Focus on courses relevant to your intended specialization.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Medium Priority</Badge>
                              <Badge variant="outline">Next Semester</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Develop a Research Project</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Work on an independent research project that could potentially lead to a publication or
                              conference presentation. This would significantly strengthen your application.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">High Priority</Badge>
                              <Badge variant="outline">6-12 months</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat flex items-center">
                        <Users className="h-5 w-5 mr-2 text-secondary-teal" />
                        Extracurricular Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Participate in Hackathons or Coding Competitions</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Join hackathons or competitive programming contests to demonstrate your technical skills
                              and problem-solving abilities. These events also provide networking opportunities.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Medium Priority</Badge>
                              <Badge variant="outline">3-6 months</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Expand Leadership Experience</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Take on more leadership responsibilities in your current organizations or join a new club
                              where you can quickly move into a leadership role. Focus on initiatives with measurable
                              impact.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">High Priority</Badge>
                              <Badge variant="outline">Immediate</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Volunteer for Technical Community Service</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Find opportunities to use your technical skills for community service, such as teaching
                              coding to underserved communities or developing applications for non-profit organizations.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Medium Priority</Badge>
                              <Badge variant="outline">Ongoing</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-secondary-teal" />
                        Application Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Refine Your Statement of Purpose</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Focus on clearly articulating your research interests and career goals. Highlight how your
                              background has prepared you for graduate study and what unique perspectives you bring.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">High Priority</Badge>
                              <Badge variant="outline">1-2 months</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Secure Strong Letters of Recommendation</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Approach professors who know your work well and can speak specifically about your
                              abilities. Provide them with your resume, statement of purpose, and specific
                              accomplishments to mention.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">High Priority</Badge>
                              <Badge variant="outline">3-4 months before deadlines</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-full p-2 mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Tailor Applications to Each Program</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Customize your application materials for each university. Research faculty members whose
                              work aligns with your interests and mention them specifically in your statement of
                              purpose.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Medium Priority</Badge>
                              <Badge variant="outline">2-3 months before deadlines</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Action Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">Immediate Actions (0-1 month)</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Contact professors about research opportunities</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Begin drafting statement of purpose</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Identify potential recommenders</span>
                            </li>
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">Short-term Goals (1-3 months)</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Register for and participate in a hackathon</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Finalize list of target universities</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Begin research project with faculty mentor</span>
                            </li>
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">Long-term Goals (3-6 months)</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Complete research project with potential for publication</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Finalize all application materials</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                              <span className="text-sm">Submit applications ahead of deadlines</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start p-3 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                            <FileText className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-sm">Statement of Purpose Guide</p>
                            <p className="text-xs text-gray-500 mb-1">
                              Comprehensive guide to writing an effective SOP
                            </p>
                            <Button variant="link" className="h-auto p-0 text-xs text-secondary-teal">
                              View Guide
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start p-3 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                            <BookOpen className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-sm">Research Opportunities Database</p>
                            <p className="text-xs text-gray-500 mb-1">Directory of research positions and projects</p>
                            <Button variant="link" className="h-auto p-0 text-xs text-secondary-teal">
                              Browse Opportunities
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start p-3 bg-gray-50 rounded-md">
                          <div className="bg-secondary-teal/10 rounded-md p-2 flex-shrink-0">
                            <Globe className="h-5 w-5 text-secondary-teal" />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-sm">University Program Comparison Tool</p>
                            <p className="text-xs text-gray-500 mb-1">Compare programs across different universities</p>
                            <Button variant="link" className="h-auto p-0 text-xs text-secondary-teal">
                              Use Tool
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                          Schedule Counselor Session
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
