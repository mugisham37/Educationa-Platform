import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Users,
  Calendar,
  GraduationCap,
  Building,
  Clock,
  Heart,
  Share2,
  Download,
  ChevronLeft,
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react"

export default function UniversityDetail({ params }: { params: { id: string } }) {
  // In a real application, you would fetch university data based on the ID
  const universityName =
    params.id === "mit"
      ? "Massachusetts Institute of Technology"
      : params.id === "stanford"
        ? "Stanford University"
        : "Harvard University"

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 bg-soft-gray">
        <div className="container">
          <div className="mb-6">
            <Link href="/educational-consulting/university-selection" className="flex items-center text-secondary-teal">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to University Selection
            </Link>
          </div>

          {/* University Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-md overflow-hidden mr-6">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=${params.id.toUpperCase()}`}
                      alt={universityName}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep mb-2">
                      {universityName}
                    </h1>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {params.id === "mit" || params.id === "harvard"
                        ? "Cambridge, Massachusetts, USA"
                        : "Stanford, California, USA"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Top 5</Badge>
                      <Badge variant="outline">Private</Badge>
                      <Badge variant="outline">Research</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Info
                  </Button>
                  <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">Apply Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="admissions">Admissions</TabsTrigger>
                  <TabsTrigger value="costs">Costs & Aid</TabsTrigger>
                  <TabsTrigger value="life">Campus Life</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">About {universityName}</h2>
                          <p className="text-gray-700 mb-4">
                            {universityName} is a world-renowned private research university located in
                            {params.id === "mit" || params.id === "harvard"
                              ? " Cambridge, Massachusetts"
                              : " Stanford, California"}
                            . Founded in
                            {params.id === "mit" ? " 1861" : params.id === "stanford" ? " 1885" : " 1636"}, it has been
                            at the forefront of innovation and academic excellence.
                          </p>
                          <p className="text-gray-700 mb-4">
                            The university is known for its rigorous academic programs, cutting-edge research, and
                            distinguished faculty. It consistently ranks among the top universities globally and has
                            produced numerous Nobel laureates, Fields Medalists, and industry leaders.
                          </p>
                          <p className="text-gray-700">
                            With a strong emphasis on science, engineering, and technology, {universityName} offers a
                            diverse range of undergraduate and graduate programs designed to prepare students for
                            leadership roles in various fields.
                          </p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          <div>
                            <h3 className="font-medium text-sm text-gray-500 mb-1">Founded</h3>
                            <p className="font-semibold flex items-center">
                              {params.id === "mit" ? "1861" : params.id === "stanford" ? "1885" : "1636"}
                              <Calendar className="h-4 w-4 text-gray-400 ml-2" />
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500 mb-1">Institution Type</h3>
                            <p className="font-semibold flex items-center">
                              Private Research
                              <Building className="h-4 w-4 text-gray-400 ml-2" />
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500 mb-1">Campus Size</h3>
                            <p className="font-semibold">
                              {params.id === "mit"
                                ? "168 acres"
                                : params.id === "stanford"
                                  ? "8,180 acres"
                                  : "5,076 acres"}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500 mb-1">Student Population</h3>
                            <p className="font-semibold flex items-center">
                              {params.id === "mit" ? "11,520" : params.id === "stanford" ? "16,937" : "21,887"}
                              <Users className="h-4 w-4 text-gray-400 ml-2" />
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500 mb-1">Student-Faculty Ratio</h3>
                            <p className="font-semibold">
                              {params.id === "mit" ? "3:1" : params.id === "stanford" ? "5:1" : "6:1"}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500 mb-1">Academic Calendar</h3>
                            <p className="font-semibold flex items-center">
                              Semester
                              <Clock className="h-4 w-4 text-gray-400 ml-2" />
                            </p>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Rankings</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium mb-3">QS World University Rankings</h3>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm">Global Rank</span>
                                  <Badge>#{params.id === "mit" ? "1" : params.id === "stanford" ? "3" : "5"}</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Subject Rank (Computer Science)</span>
                                  <Badge>#{params.id === "mit" ? "1" : params.id === "stanford" ? "2" : "4"}</Badge>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium mb-3">Times Higher Education</h3>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm">Global Rank</span>
                                  <Badge>#{params.id === "mit" ? "2" : params.id === "stanford" ? "4" : "2"}</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Subject Rank (Engineering)</span>
                                  <Badge>#{params.id === "mit" ? "1" : params.id === "stanford" ? "2" : "3"}</Badge>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Key Strengths</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>World-class research facilities and opportunities</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Strong industry connections and career placement</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Innovative curriculum and teaching methods</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Generous financial aid for international students</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Diverse and inclusive campus community</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Strong alumni network and global connections</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Programs Tab */}
                <TabsContent value="programs" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Academic Programs</h2>
                          <p className="text-gray-700 mb-4">
                            {universityName} offers a wide range of undergraduate and graduate programs across various
                            disciplines. The university is particularly renowned for its programs in engineering,
                            computer science, business, and natural sciences.
                          </p>
                        </div>

                        <Tabs defaultValue="undergraduate">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                            <TabsTrigger value="masters">Master's</TabsTrigger>
                            <TabsTrigger value="phd">PhD</TabsTrigger>
                          </TabsList>
                          <TabsContent value="undergraduate" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">School of Engineering</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Computer Science and Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Electrical Engineering and Computer Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Mechanical Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Aerospace Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Chemical Engineering</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">School of Science</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Physics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Mathematics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Chemistry</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Biology</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Earth, Atmospheric, and Planetary Sciences</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">School of Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Business Analytics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Finance</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Management</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Marketing</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">
                                    School of Humanities, Arts, and Social Sciences
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Economics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Political Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Linguistics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Philosophy</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </TabsContent>
                          <TabsContent value="masters" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">Master of Science Programs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Computer Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Artificial Intelligence</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Data Science and Machine Learning</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Electrical Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Mechanical Engineering</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">Master of Business Administration</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>MBA (Full-time)</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Executive MBA</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>MBA in Entrepreneurship</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>MBA in Finance</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>MBA in Technology Management</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">Master of Engineering</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Electrical Engineering and Computer Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Civil and Environmental Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Mechanical Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Biomedical Engineering</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">Other Master's Programs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Master of Architecture</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Master of Finance</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Master of Science in Management Studies</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Master of City Planning</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </TabsContent>
                          <TabsContent value="phd" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">PhD in Engineering</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Computer Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Electrical Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Mechanical Engineering</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Aeronautics and Astronautics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Materials Science and Engineering</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">PhD in Sciences</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Physics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Chemistry</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Biology</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Mathematics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Brain and Cognitive Sciences</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">PhD in Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Management Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Operations Research</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Finance</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Marketing</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Organizational Behavior</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>

                              <Card className="border border-gray-200">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">PhD in Humanities and Social Sciences</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Economics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Political Science</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Linguistics</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>Philosophy</span>
                                    </li>
                                    <li className="flex items-center">
                                      <GraduationCap className="h-4 w-4 text-secondary-teal mr-2" />
                                      <span>History</span>
                                    </li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </TabsContent>
                        </Tabs>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Program Features</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Interdisciplinary approach to education</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Hands-on research opportunities</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Industry partnerships and internships</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Global exchange programs</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Entrepreneurship initiatives</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Cutting-edge laboratories and facilities</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit University Website for Full Program List
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Admissions Tab */}
                <TabsContent value="admissions" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Admission Requirements</h2>
                          <p className="text-gray-700 mb-4">
                            Admission to {universityName} is highly competitive. The university seeks students who have
                            demonstrated academic excellence, leadership potential, and a passion for their field of
                            study.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Undergraduate Admission</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Academic Records</p>
                                    <p className="text-sm text-gray-600">
                                      High school transcripts with rigorous coursework
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Standardized Tests</p>
                                    <p className="text-sm text-gray-600">SAT/ACT scores (optional for 2023-2024)</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">English Proficiency</p>
                                    <p className="text-sm text-gray-600">
                                      TOEFL (100+), IELTS (7.5+), or Duolingo (125+)
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Essays</p>
                                    <p className="text-sm text-gray-600">Personal statement and supplemental essays</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Recommendations</p>
                                    <p className="text-sm text-gray-600">2-3 letters from teachers or mentors</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Extracurricular Activities</p>
                                    <p className="text-sm text-gray-600">
                                      Leadership, community service, research, etc.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Graduate Admission</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Academic Records</p>
                                    <p className="text-sm text-gray-600">
                                      Bachelor's degree with strong GPA (typically 3.5+)
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Standardized Tests</p>
                                    <p className="text-sm text-gray-600">GRE/GMAT (program-specific requirements)</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">English Proficiency</p>
                                    <p className="text-sm text-gray-600">
                                      TOEFL (100+), IELTS (7.5+), or Duolingo (125+)
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Statement of Purpose</p>
                                    <p className="text-sm text-gray-600">Research interests and career goals</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Recommendations</p>
                                    <p className="text-sm text-gray-600">3 letters from professors or professionals</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Resume/CV</p>
                                    <p className="text-sm text-gray-600">
                                      Research experience, publications, work history
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Application Deadlines</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border border-gray-200">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Undergraduate</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-3">
                                  <li className="flex justify-between items-center">
                                    <span>Early Action</span>
                                    <Badge>November 1</Badge>
                                  </li>
                                  <li className="flex justify-between items-center">
                                    <span>Regular Decision</span>
                                    <Badge>January 1</Badge>
                                  </li>
                                  <li className="flex justify-between items-center">
                                    <span>Transfer Applicants</span>
                                    <Badge>March 15</Badge>
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Graduate</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-3">
                                  <li className="flex justify-between items-center">
                                    <span>Fall Semester</span>
                                    <Badge>December 15</Badge>
                                  </li>
                                  <li className="flex justify-between items-center">
                                    <span>Spring Semester</span>
                                    <Badge>September 15</Badge>
                                  </li>
                                  <li className="flex justify-between items-center">
                                    <span>MBA Programs</span>
                                    <Badge>January 5 (Round 1)</Badge>
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Admission Statistics</h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium text-center mb-2">Acceptance Rate</h3>
                                <div className="flex justify-center mb-2">
                                  <div className="w-24 h-24 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-secondary-teal">
                                      {params.id === "mit" ? "4%" : params.id === "stanford" ? "4.3%" : "4.6%"}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-xs text-center text-gray-500">
                                  One of the most selective universities globally
                                </p>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium text-center mb-2">Average GPA</h3>
                                <div className="flex justify-center mb-2">
                                  <div className="w-24 h-24 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-secondary-teal">3.9+</span>
                                  </div>
                                </div>
                                <p className="text-xs text-center text-gray-500">
                                  Most admitted students are in the top 5% of their class
                                </p>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium text-center mb-2">Test Scores (Middle 50%)</h3>
                                <div className="space-y-2 mt-4">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm">SAT</span>
                                    <span className="font-medium">1500-1570</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm">ACT</span>
                                    <span className="font-medium">34-36</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm">GRE (Quant)</span>
                                    <span className="font-medium">167-170</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                            Start Your Application
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Costs & Aid Tab */}
                <TabsContent value="costs" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Tuition & Fees</h2>
                          <p className="text-gray-700 mb-4">
                            {universityName} is committed to making education accessible to qualified students
                            regardless of their financial circumstances. The university offers comprehensive financial
                            aid packages to help cover the cost of attendance.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Undergraduate Costs (2023-2024)</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex justify-between items-center">
                                  <span>Tuition</span>
                                  <span className="font-medium">$55,450</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Room & Board</span>
                                  <span className="font-medium">$18,100</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Books & Supplies</span>
                                  <span className="font-medium">$2,000</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Personal Expenses</span>
                                  <span className="font-medium">$2,500</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Health Insurance</span>
                                  <span className="font-medium">$3,500</span>
                                </li>
                                <Separator className="my-2" />
                                <li className="flex justify-between items-center font-semibold">
                                  <span>Total Cost of Attendance</span>
                                  <span>$81,550</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Graduate Costs (2023-2024)</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex justify-between items-center">
                                  <span>Tuition</span>
                                  <span className="font-medium">$58,800</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Housing (estimated)</span>
                                  <span className="font-medium">$19,500</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Books & Supplies</span>
                                  <span className="font-medium">$2,200</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Personal Expenses</span>
                                  <span className="font-medium">$3,000</span>
                                </li>
                                <li className="flex justify-between items-center">
                                  <span>Health Insurance</span>
                                  <span className="font-medium">$3,800</span>
                                </li>
                                <Separator className="my-2" />
                                <li className="flex justify-between items-center font-semibold">
                                  <span>Total Cost of Attendance</span>
                                  <span>$87,300</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Financial Aid & Scholarships</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border border-gray-200">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Need-Based Financial Aid</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-gray-700 mb-4">
                                  {universityName} is committed to meeting 100% of demonstrated financial need for all
                                  admitted students, both domestic and international.
                                </p>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium">Grants</p>
                                      <p className="text-sm text-gray-600">
                                        Need-based grants that don't need to be repaid
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium">Work-Study</p>
                                      <p className="text-sm text-gray-600">
                                        Part-time employment opportunities on campus
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium">Loans</p>
                                      <p className="text-sm text-gray-600">
                                        Low-interest loans with favorable repayment terms
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Merit Scholarships</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-gray-700 mb-4">
                                  In addition to need-based aid, {universityName} offers various merit-based
                                  scholarships to recognize exceptional academic achievement and potential.
                                </p>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium">Presidential Scholars</p>
                                      <p className="text-sm text-gray-600">
                                        Full-tuition scholarships for exceptional students
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium">Department Scholarships</p>
                                      <p className="text-sm text-gray-600">
                                        Field-specific awards for outstanding achievement
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium">Research Fellowships</p>
                                      <p className="text-sm text-gray-600">Funding for graduate research projects</p>
                                    </div>
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Financial Aid Statistics</h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium text-center mb-2">Students Receiving Aid</h3>
                                <div className="flex justify-center mb-2">
                                  <div className="w-24 h-24 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-secondary-teal">72%</span>
                                  </div>
                                </div>
                                <p className="text-xs text-center text-gray-500">
                                  Percentage of undergraduate students receiving some form of financial aid
                                </p>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium text-center mb-2">Average Aid Package</h3>
                                <div className="flex justify-center mb-2">
                                  <div className="w-24 h-24 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-secondary-teal">$53K</span>
                                  </div>
                                </div>
                                <p className="text-xs text-center text-gray-500">
                                  Average financial aid package for students with demonstrated need
                                </p>
                              </CardContent>
                            </Card>

                            <Card className="border border-gray-200">
                              <CardContent className="p-4">
                                <h3 className="font-medium text-center mb-2">Loan-Free Aid</h3>
                                <div className="flex justify-center mb-2">
                                  <div className="w-24 h-24 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-secondary-teal">Yes</span>
                                  </div>
                                </div>
                                <p className="text-xs text-center text-gray-500">
                                  For families with incomes below $90,000, aid packages include no loans
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                            Calculate Your Financial Aid
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Campus Life Tab */}
                <TabsContent value="life" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">
                            Campus Life & Student Experience
                          </h2>
                          <p className="text-gray-700 mb-4">
                            Life at {universityName} extends far beyond the classroom. The university offers a vibrant
                            campus community with numerous opportunities for personal growth, recreation, and social
                            engagement.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Housing & Dining</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Residence Halls</p>
                                    <p className="text-sm text-gray-600">
                                      {params.id === "mit"
                                        ? "11 undergraduate residence halls with unique cultures"
                                        : params.id === "stanford"
                                          ? "80 diverse housing facilities across campus"
                                          : "13 undergraduate houses with rich traditions"}
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Graduate Housing</p>
                                    <p className="text-sm text-gray-600">
                                      On-campus and off-campus options for graduate students
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Dining Options</p>
                                    <p className="text-sm text-gray-600">
                                      Multiple dining halls, cafes, and food courts across campus
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Meal Plans</p>
                                    <p className="text-sm text-gray-600">
                                      Flexible meal plans to accommodate different preferences
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Student Organizations</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Clubs & Organizations</p>
                                    <p className="text-sm text-gray-600">
                                      {params.id === "mit"
                                        ? "500+ student groups"
                                        : params.id === "stanford"
                                          ? "600+ student organizations"
                                          : "450+ student organizations"}
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Greek Life</p>
                                    <p className="text-sm text-gray-600">
                                      Fraternities, sororities, and co-ed organizations
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Student Government</p>
                                    <p className="text-sm text-gray-600">
                                      Active student representation and leadership opportunities
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Cultural Groups</p>
                                    <p className="text-sm text-gray-600">
                                      Diverse cultural and international student associations
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Athletics & Recreation</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Varsity Sports</p>
                                    <p className="text-sm text-gray-600">
                                      {params.id === "mit"
                                        ? "NCAA Division III with 33 varsity sports"
                                        : params.id === "stanford"
                                          ? "NCAA Division I with 36 varsity sports"
                                          : "NCAA Division I with 42 varsity sports"}
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Club Sports</p>
                                    <p className="text-sm text-gray-600">Competitive club teams in various sports</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Intramural Sports</p>
                                    <p className="text-sm text-gray-600">
                                      Recreational leagues for casual participation
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Fitness Facilities</p>
                                    <p className="text-sm text-gray-600">
                                      State-of-the-art gyms, pools, and recreation centers
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Arts & Culture</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Museums & Galleries</p>
                                    <p className="text-sm text-gray-600">World-class art collections and exhibitions</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Performing Arts</p>
                                    <p className="text-sm text-gray-600">Theater, dance, and music performances</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Student Productions</p>
                                    <p className="text-sm text-gray-600">Student-led performances and exhibitions</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Cultural Events</p>
                                    <p className="text-sm text-gray-600">
                                      Festivals, lectures, and cultural celebrations
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <Separator />

                        <div>
                          <h2 className="font-montserrat font-semibold text-xl mb-4">Student Support Services</h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Academic advising and tutoring</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Career services and job placement</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Mental health and counseling</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Disability services</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>International student support</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                              <span>Health and wellness programs</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Explore Campus Life
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Match Score Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Your Match Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-secondary-teal/20 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-secondary-teal flex items-center justify-center text-white font-bold text-2xl">
                            {params.id === "mit" ? "95%" : params.id === "stanford" ? "92%" : "88%"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-medium text-center mb-4">
                    {params.id === "mit" ? "Excellent Match" : params.id === "stanford" ? "Strong Match" : "Good Match"}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Academic Fit</span>
                        <span>{params.id === "mit" ? "98%" : params.id === "stanford" ? "95%" : "90%"}</span>
                      </div>
                      <Progress value={params.id === "mit" ? 98 : params.id === "stanford" ? 95 : 90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Financial Fit</span>
                        <span>{params.id === "mit" ? "90%" : params.id === "stanford" ? "85%" : "80%"}</span>
                      </div>
                      <Progress value={params.id === "mit" ? 90 : params.id === "stanford" ? 85 : 80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Social Fit</span>
                        <span>{params.id === "mit" ? "92%" : params.id === "stanford" ? "94%" : "90%"}</span>
                      </div>
                      <Progress value={params.id === "mit" ? 92 : params.id === "stanford" ? 94 : 90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Career Outcomes</span>
                        <span>{params.id === "mit" ? "97%" : params.id === "stanford" ? "96%" : "95%"}</span>
                      </div>
                      <Progress value={params.id === "mit" ? 97 : params.id === "stanford" ? 96 : 95} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                      Schedule Counselor Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Application Deadlines Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Key Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-red-100 rounded-md p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Early Action Deadline</p>
                        <p className="text-xs text-gray-500 mb-1">November 1, 2023</p>
                        <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                          30 days left
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-yellow-100 rounded-md p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Regular Decision Deadline</p>
                        <p className="text-xs text-gray-500 mb-1">January 1, 2024</p>
                        <Badge variant="outline" className="text-yellow-500 border-yellow-200 bg-yellow-50">
                          91 days left
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="bg-blue-100 rounded-md p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Financial Aid Deadline</p>
                        <p className="text-xs text-gray-500 mb-1">February 15, 2024</p>
                        <Badge variant="outline" className="text-blue-500 border-blue-200 bg-blue-50">
                          136 days left
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Universities Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Similar Universities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=40&width=40&text=Caltech"
                          alt="Caltech"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">California Institute of Technology</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-500">90% match</span>
                        </div>
                      </div>
                      <Link href="/educational-consulting/university-selection/caltech">
                        <Button size="sm" variant="ghost">
                          View
                        </Button>
                      </Link>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=40&width=40&text=Princeton"
                          alt="Princeton"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Princeton University</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-500">88% match</span>
                        </div>
                      </div>
                      <Link href="/educational-consulting/university-selection/princeton">
                        <Button size="sm" variant="ghost">
                          View
                        </Button>
                      </Link>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=40&width=40&text=Yale"
                          alt="Yale"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Yale University</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-500">85% match</span>
                        </div>
                      </div>
                      <Link href="/educational-consulting/university-selection/yale">
                        <Button size="sm" variant="ghost">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-montserrat">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about {universityName} or need assistance with your application? Our counselors are
                    here to help.
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                      Schedule a Consultation
                    </Button>
                    <Button variant="outline" className="w-full">
                      Chat with an Advisor
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
