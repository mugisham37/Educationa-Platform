import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  Download,
  Upload,
  Save,
  CheckCircle,
  AlertTriangle,
  Info,
  Edit,
  Copy,
  Trash2,
  Plus,
  MessageSquare,
  Calendar,
  Clock,
  ChevronRight,
  Lightbulb,
} from "lucide-react"

export default function StatementOfPurpose() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 bg-soft-gray">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep mb-2">
                Statement of Purpose
              </h1>
              <p className="text-gray-500">Craft a compelling statement that showcases your goals and qualifications</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="editor" className="mb-8">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                </TabsList>

                {/* Editor Tab */}
                <TabsContent value="editor">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-montserrat">Document Editor</CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>Last saved: 10 minutes ago</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="university">Target University</Label>
                          <Select defaultValue="mit">
                            <SelectTrigger id="university">
                              <SelectValue placeholder="Select university" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mit">Massachusetts Institute of Technology</SelectItem>
                              <SelectItem value="stanford">Stanford University</SelectItem>
                              <SelectItem value="harvard">Harvard University</SelectItem>
                              <SelectItem value="cmu">Carnegie Mellon University</SelectItem>
                              <SelectItem value="berkeley">UC Berkeley</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="program">Program</Label>
                          <Select defaultValue="cs">
                            <SelectTrigger id="program">
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cs">Master of Science in Computer Science</SelectItem>
                              <SelectItem value="ai">Master of Science in Artificial Intelligence</SelectItem>
                              <SelectItem value="ds">Master of Science in Data Science</SelectItem>
                              <SelectItem value="ee">Master of Science in Electrical Engineering</SelectItem>
                              <SelectItem value="me">Master of Science in Mechanical Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label htmlFor="title">Document Title</Label>
                            <span className="text-xs text-gray-500">Required</span>
                          </div>
                          <Input
                            id="title"
                            placeholder="Enter a title for your statement"
                            defaultValue="Statement of Purpose - MIT MSCS Application"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label htmlFor="content">Statement Content</Label>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>Word Count: 547/1000</span>
                            </div>
                          </div>
                          <Textarea
                            id="content"
                            placeholder="Write your statement of purpose here..."
                            className="min-h-[400px] font-sans"
                            defaultValue={`My journey in computer science began during my sophomore year of high school when I first discovered the power of programming to solve real-world problems. What started as curiosity quickly evolved into passion as I delved deeper into algorithms, data structures, and software development. Now, as I approach the completion of my undergraduate studies in Computer Science at the University of California, Berkeley, I am eager to pursue advanced study at MIT's renowned Computer Science program.

Throughout my undergraduate career, I have maintained a strong academic record with a 3.85 GPA while actively engaging in research and practical applications of computer science. Under the guidance of Professor Sarah Chen, I contributed to a research project focused on optimizing machine learning algorithms for resource-constrained environments. This experience not only enhanced my technical skills but also sparked my interest in the intersection of efficient computing and artificial intelligence.

My professional experience includes a software engineering internship at Tech Solutions Inc., where I developed and implemented features for a web application serving over 10,000 users. This role taught me valuable lessons about scalability, user experience design, and collaborative development in a fast-paced environment.

My academic and professional experiences have converged to shape my research interests in distributed systems and their applications in machine learning. At MIT, I hope to explore how distributed computing paradigms can enhance the efficiency and scalability of machine learning models, particularly in edge computing scenarios. I am especially interested in the work being conducted by Professor James Wilson on federated learning systems and Professor Emily Rodriguez on distributed optimization algorithms.

Beyond technical pursuits, I have demonstrated leadership as the Vice President of the Computer Science Student Association, where I organized tech talks, hackathons, and networking events that enhanced the learning experience for over 200 students. I believe these experiences have prepared me to contribute meaningfully to MIT's collaborative and innovative community.

The MS in Computer Science program at MIT aligns perfectly with my academic and career goals. The program's emphasis on cutting-edge research, interdisciplinary collaboration, and technical excellence provides the ideal environment for me to grow as a computer scientist and researcher. After completing the program, I aim to pursue a career in research and development, focusing on creating distributed systems that make advanced computing capabilities more accessible and efficient.

I am confident that my academic background, research experience, and passion for computer science make me a strong candidate for MIT's MS program. I look forward to the opportunity to contribute to and learn from the exceptional community at MIT.`}
                          />
                        </div>

                        <div className="flex justify-between">
                          <Button variant="outline">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Discard Changes
                          </Button>
                          <div className="flex gap-2">
                            <Button variant="outline">
                              <Copy className="h-4 w-4 mr-2" />
                              Copy to Clipboard
                            </Button>
                            <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                              <Save className="h-4 w-4 mr-2" />
                              Save Draft
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Examples Tab */}
                <TabsContent value="examples">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Sample Statements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Label htmlFor="exampleType" className="mr-2">
                              Filter by:
                            </Label>
                            <Select defaultValue="cs">
                              <SelectTrigger id="exampleType" className="w-[200px]">
                                <SelectValue placeholder="Select field" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cs">Computer Science</SelectItem>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="arts">Arts & Humanities</SelectItem>
                                <SelectItem value="science">Sciences</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center">
                            <Label htmlFor="exampleLevel" className="mr-2">
                              Degree:
                            </Label>
                            <Select defaultValue="masters">
                              <SelectTrigger id="exampleLevel" className="w-[150px]">
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bachelors">Bachelor's</SelectItem>
                                <SelectItem value="masters">Master's</SelectItem>
                                <SelectItem value="phd">PhD</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="border rounded-md overflow-hidden">
                            <div className="bg-gray-50 p-4 flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">Computer Science MS - MIT (Admitted)</h3>
                                <p className="text-sm text-gray-500">Focus: Machine Learning & AI</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Copy className="h-4 w-4 mr-1" />
                                  Copy
                                </Button>
                                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                                  <FileText className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                              </div>
                            </div>
                            <div className="p-4">
                              <p className="text-sm text-gray-600 line-clamp-3">
                                My fascination with artificial intelligence began during my undergraduate research at
                                Stanford University, where I developed neural networks for natural language processing.
                                This experience, combined with my internship at Google AI, has prepared me to contribute
                                to MIT's pioneering research in machine learning...
                              </p>
                            </div>
                          </div>

                          <div className="border rounded-md overflow-hidden">
                            <div className="bg-gray-50 p-4 flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">Computer Science MS - Stanford (Admitted)</h3>
                                <p className="text-sm text-gray-500">Focus: Distributed Systems</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Copy className="h-4 w-4 mr-1" />
                                  Copy
                                </Button>
                                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                                  <FileText className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                              </div>
                            </div>
                            <div className="p-4">
                              <p className="text-sm text-gray-600 line-clamp-3">
                                The challenge of designing systems that can efficiently process and analyze massive
                                datasets across distributed networks has been the focus of my academic and professional
                                journey. At UC Berkeley, I worked on optimizing distributed database systems, which led
                                to my internship at Amazon Web Services...
                              </p>
                            </div>
                          </div>

                          <div className="border rounded-md overflow-hidden">
                            <div className="bg-gray-50 p-4 flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">Computer Science MS - CMU (Admitted)</h3>
                                <p className="text-sm text-gray-500">Focus: Human-Computer Interaction</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Copy className="h-4 w-4 mr-1" />
                                  Copy
                                </Button>
                                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                                  <FileText className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                              </div>
                            </div>
                            <div className="p-4">
                              <p className="text-sm text-gray-600 line-clamp-3">
                                My interest in how humans interact with technology began when I designed a mobile
                                application for elderly users as part of my senior project. The challenges of creating
                                intuitive interfaces for users with varying technical abilities inspired me to pursue
                                further research in accessibility and user experience design...
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button variant="link" className="text-secondary-teal">
                            View More Examples <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Feedback Tab */}
                <TabsContent value="feedback">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-montserrat">Feedback History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-gray-50 p-4 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="bg-secondary-teal/10 rounded-full p-2 mr-3">
                                <MessageSquare className="h-5 w-5 text-secondary-teal" />
                              </div>
                              <div>
                                <h3 className="font-medium">Counselor Feedback</h3>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span className="mr-3">May 2, 2025</span>
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>10:30 AM</span>
                                </div>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Reviewed</Badge>
                          </div>
                          <div className="p-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium text-sm mb-1">Overall Assessment</h4>
                                <p className="text-sm text-gray-600">
                                  Your statement effectively communicates your background, interests, and goals. The
                                  narrative flows well and provides a clear picture of your journey in computer science.
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">Strengths</h4>
                                <ul className="space-y-1">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Clear articulation of research interests and their development
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Good connection between past experiences and future goals
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Specific mention of faculty members and their research
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">Areas for Improvement</h4>
                                <ul className="space-y-1">
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Consider providing more specific examples of your technical projects
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Expand on how your unique perspective will contribute to MIT's community
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Be more specific about your long-term career goals
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">Suggested Edits</h4>
                                <p className="text-sm text-gray-600">
                                  In paragraph 3, consider adding a brief description of a specific feature you
                                  implemented during your internship and its impact. In paragraph 4, elaborate on how
                                  your research interests align with MIT's current initiatives in distributed systems.
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-end mt-4">
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-gray-50 p-4 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="bg-secondary-teal/10 rounded-full p-2 mr-3">
                                <MessageSquare className="h-5 w-5 text-secondary-teal" />
                              </div>
                              <div>
                                <h3 className="font-medium">AI Analysis</h3>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span className="mr-3">April 28, 2025</span>
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>3:45 PM</span>
                                </div>
                              </div>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Automated</Badge>
                          </div>
                          <div className="p-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium text-sm mb-1">Content Analysis</h4>
                                <div className="space-y-2">
                                  <div>
                                    <div className="flex justify-between text-sm mb-1">
                                      <span>Clarity</span>
                                      <span>85%</span>
                                    </div>
                                    <Progress value={85} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-sm mb-1">
                                      <span>Relevance</span>
                                      <span>90%</span>
                                    </div>
                                    <Progress value={90} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-sm mb-1">
                                      <span>Specificity</span>
                                      <span>75%</span>
                                    </div>
                                    <Progress value={75} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-sm mb-1">
                                      <span>Coherence</span>
                                      <span>88%</span>
                                    </div>
                                    <Progress value={88} className="h-2" />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">Language & Style</h4>
                                <ul className="space-y-1">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">No grammatical errors detected</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Professional tone maintained throughout
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Consider reducing sentence length in paragraph 2
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">Recommendations</h4>
                                <ul className="space-y-1">
                                  <li className="flex items-start">
                                    <Lightbulb className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Add 1-2 sentences about specific technical challenges you've overcome
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <Lightbulb className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Include metrics or quantifiable achievements where possible
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <Lightbulb className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      Consider adding a brief concluding paragraph to reinforce your fit for MIT
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="flex justify-end mt-4">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Apply Suggestions
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Request New Feedback
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Document Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completion</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Introduction</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Academic Background</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Research Experience</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="text-sm">Career Goals</span>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Needs Work</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Info className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm">Conclusion</span>
                        </div>
                        <Badge variant="outline">In Progress</Badge>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Complete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">MIT Statement of Purpose</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Info className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Length: 500-1000 words</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Focus on research interests and career goals</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Explain why MIT is the right fit for you</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Mention specific faculty members and research groups</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium mb-2">Key Components</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Introduction: Hook and brief overview</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Academic background and achievements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Research experience and interests</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Why this program and university</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Future goals and career plans</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary-teal mr-2 mt-0.5" />
                          <span>Conclusion: Restate fit and readiness</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        View Full Guidelines
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Document Versions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div>
                        <p className="font-medium text-sm">Version 3 (Current)</p>
                        <p className="text-xs text-gray-500">May 5, 2025 • 2:30 PM</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-md">
                      <div>
                        <p className="font-medium text-sm">Version 2</p>
                        <p className="text-xs text-gray-500">May 3, 2025 • 11:15 AM</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-md">
                      <div>
                        <p className="font-medium text-sm">Version 1</p>
                        <p className="text-xs text-gray-500">April 28, 2025 • 9:45 AM</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Version
                      </Button>
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
                    Get expert guidance on crafting a compelling statement of purpose.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Request Counselor Review
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Consultation
                    </Button>
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
