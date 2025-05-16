import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Users, DollarSign, Star, BookOpen, Heart, Share2, Info, Download, Save } from "lucide-react"

export default function UniversitySelection() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 bg-soft-gray">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep mb-2">
                University Selection
              </h1>
              <p className="text-gray-500">Find the perfect university match for your academic goals</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Shortlist
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Results
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-montserrat">Filters</CardTitle>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Reset All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Search */}
                  <div className="space-y-2">
                    <Label htmlFor="search">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input id="search" placeholder="Search universities..." className="pl-9" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select countries" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="nl">Netherlands</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Program Type */}
                  <div className="space-y-2">
                    <Label>Program Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Bachelor's", "Master's", "PhD", "Diploma"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`program-${type.toLowerCase()}`} />
                          <label
                            htmlFor={`program-${type.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Field of Study */}
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                        <SelectItem value="science">Natural Sciences</SelectItem>
                        <SelectItem value="social">Social Sciences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tuition Range */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Tuition Range (USD/year)</Label>
                      <span className="text-xs text-gray-500">$10k - $50k+</span>
                    </div>
                    <Slider defaultValue={[10000, 50000]} min={0} max={100000} step={1000} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$0</span>
                      <span>$50k</span>
                      <span>$100k+</span>
                    </div>
                  </div>

                  {/* University Size */}
                  <div className="space-y-2">
                    <Label>University Size</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Small", "Medium", "Large"].map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox id={`size-${size.toLowerCase()}`} />
                          <label
                            htmlFor={`size-${size.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* University Type */}
                  <div className="space-y-2">
                    <Label>University Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Public", "Private"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type.toLowerCase()}`} />
                          <label
                            htmlFor={`type-${type.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ranking */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Ranking</Label>
                      <span className="text-xs text-gray-500">Top 1-200</span>
                    </div>
                    <Slider defaultValue={[200]} min={1} max={500} step={1} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Top 1</span>
                      <span>Top 250</span>
                      <span>Top 500</span>
                    </div>
                  </div>

                  {/* Acceptance Rate */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Acceptance Rate</Label>
                      <span className="text-xs text-gray-500">Up to 50%</span>
                    </div>
                    <Slider defaultValue={[50]} min={1} max={100} step={1} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Additional Filters */}
                  <div className="space-y-3">
                    <Label>Additional Filters</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="scholarship" className="text-sm">
                          Scholarship Available
                        </Label>
                        <Switch id="scholarship" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="internship" className="text-sm">
                          Internship Opportunities
                        </Label>
                        <Switch id="internship" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="accommodation" className="text-sm">
                          On-campus Accommodation
                        </Label>
                        <Switch id="accommodation" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="workPermit" className="text-sm">
                          Post-study Work Permit
                        </Label>
                        <Switch id="workPermit" />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* University Results */}
            <div className="lg:col-span-3">
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">125 universities found</span>
                      <Badge variant="outline" className="mr-2 flex items-center gap-1">
                        USA <button className="ml-1 text-xs">×</button>
                      </Badge>
                      <Badge variant="outline" className="mr-2 flex items-center gap-1">
                        Computer Science <button className="ml-1 text-xs">×</button>
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label htmlFor="sort" className="text-sm whitespace-nowrap">
                        Sort by:
                      </Label>
                      <Select defaultValue="rank">
                        <SelectTrigger id="sort" className="w-[180px]">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rank">Ranking (High to Low)</SelectItem>
                          <SelectItem value="rankAsc">Ranking (Low to High)</SelectItem>
                          <SelectItem value="tuitionDesc">Tuition (High to Low)</SelectItem>
                          <SelectItem value="tuitionAsc">Tuition (Low to High)</SelectItem>
                          <SelectItem value="acceptanceDesc">Acceptance Rate (High to Low)</SelectItem>
                          <SelectItem value="acceptanceAsc">Acceptance Rate (Low to High)</SelectItem>
                          <SelectItem value="match">Match Score</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="list" className="mb-6">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                </TabsList>
                <TabsContent value="list" className="space-y-6">
                  {/* University Card 1 */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                                <Image
                                  src="/placeholder.svg?height=64&width=64&text=MIT"
                                  alt="MIT"
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-montserrat font-semibold text-lg">
                                  Massachusetts Institute of Technology
                                </h3>
                                <div className="flex items-center text-sm text-gray-500">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  Cambridge, Massachusetts, USA
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-gray-400 hover:text-red-500">
                                <Heart className="h-5 w-5" />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Share2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">Top 5</Badge>
                            <Badge variant="outline">Private</Badge>
                            <Badge variant="outline">Research</Badge>
                          </div>
                          <div className="mt-auto">
                            <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">95% Match with your profile</span>
                            </div>
                            <div className="flex gap-2">
                              <Link href="/educational-consulting/university-selection/mit">
                                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                                  View Details
                                </Button>
                              </Link>
                              <Button size="sm" variant="outline">
                                Add to Shortlist
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3 bg-gray-50 p-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Ranking</p>
                              <p className="font-semibold flex items-center">
                                #1 <Info className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Acceptance Rate</p>
                              <p className="font-semibold">4%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Tuition (International)</p>
                              <p className="font-semibold">$55,450/year</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Student Body</p>
                              <p className="font-semibold flex items-center">
                                11,520 <Users className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Programs</p>
                              <p className="font-semibold flex items-center">
                                50+ <BookOpen className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Financial Aid</p>
                              <p className="font-semibold flex items-center">
                                Available <DollarSign className="h-3 w-3 text-green-500 ml-1" />
                              </p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div>
                            <h4 className="font-medium mb-2">Popular Programs</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Computer Science</Badge>
                              <Badge variant="outline">Electrical Engineering</Badge>
                              <Badge variant="outline">Mechanical Engineering</Badge>
                              <Badge variant="outline">Physics</Badge>
                              <Badge variant="outline">Business Analytics</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* University Card 2 */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                                <Image
                                  src="/placeholder.svg?height=64&width=64&text=Stanford"
                                  alt="Stanford"
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-montserrat font-semibold text-lg">Stanford University</h3>
                                <div className="flex items-center text-sm text-gray-500">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  Stanford, California, USA
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-gray-400 hover:text-red-500">
                                <Heart className="h-5 w-5" />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Share2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">Top 5</Badge>
                            <Badge variant="outline">Private</Badge>
                            <Badge variant="outline">Research</Badge>
                          </div>
                          <div className="mt-auto">
                            <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">92% Match with your profile</span>
                            </div>
                            <div className="flex gap-2">
                              <Link href="/educational-consulting/university-selection/stanford">
                                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                                  View Details
                                </Button>
                              </Link>
                              <Button size="sm" variant="outline">
                                Add to Shortlist
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3 bg-gray-50 p-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Ranking</p>
                              <p className="font-semibold flex items-center">
                                #3 <Info className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Acceptance Rate</p>
                              <p className="font-semibold">4.3%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Tuition (International)</p>
                              <p className="font-semibold">$56,169/year</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Student Body</p>
                              <p className="font-semibold flex items-center">
                                16,937 <Users className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Programs</p>
                              <p className="font-semibold flex items-center">
                                65+ <BookOpen className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Financial Aid</p>
                              <p className="font-semibold flex items-center">
                                Available <DollarSign className="h-3 w-3 text-green-500 ml-1" />
                              </p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div>
                            <h4 className="font-medium mb-2">Popular Programs</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Computer Science</Badge>
                              <Badge variant="outline">Business</Badge>
                              <Badge variant="outline">Engineering</Badge>
                              <Badge variant="outline">Psychology</Badge>
                              <Badge variant="outline">Biology</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* University Card 3 */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                                <Image
                                  src="/placeholder.svg?height=64&width=64&text=Harvard"
                                  alt="Harvard"
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-montserrat font-semibold text-lg">Harvard University</h3>
                                <div className="flex items-center text-sm text-gray-500">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  Cambridge, Massachusetts, USA
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-gray-400 hover:text-red-500">
                                <Heart className="h-5 w-5" />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Share2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">Top 5</Badge>
                            <Badge variant="outline">Private</Badge>
                            <Badge variant="outline">Research</Badge>
                          </div>
                          <div className="mt-auto">
                            <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">88% Match with your profile</span>
                            </div>
                            <div className="flex gap-2">
                              <Link href="/educational-consulting/university-selection/harvard">
                                <Button size="sm" className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                                  View Details
                                </Button>
                              </Link>
                              <Button size="sm" variant="outline">
                                Add to Shortlist
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3 bg-gray-50 p-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Ranking</p>
                              <p className="font-semibold flex items-center">
                                #5 <Info className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Acceptance Rate</p>
                              <p className="font-semibold">4.6%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Tuition (International)</p>
                              <p className="font-semibold">$54,768/year</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Student Body</p>
                              <p className="font-semibold flex items-center">
                                21,887 <Users className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Programs</p>
                              <p className="font-semibold flex items-center">
                                80+ <BookOpen className="h-3 w-3 text-gray-400 ml-1" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Financial Aid</p>
                              <p className="font-semibold flex items-center">
                                Available <DollarSign className="h-3 w-3 text-green-500 ml-1" />
                              </p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div>
                            <h4 className="font-medium mb-2">Popular Programs</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Business</Badge>
                              <Badge variant="outline">Law</Badge>
                              <Badge variant="outline">Medicine</Badge>
                              <Badge variant="outline">Computer Science</Badge>
                              <Badge variant="outline">Economics</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <Button variant="outline" className="mr-2">
                      Previous
                    </Button>
                    <Button variant="outline" className="mx-1">
                      1
                    </Button>
                    <Button variant="outline" className="mx-1 bg-secondary-teal text-white">
                      2
                    </Button>
                    <Button variant="outline" className="mx-1">
                      3
                    </Button>
                    <Button variant="outline" className="mx-1">
                      ...
                    </Button>
                    <Button variant="outline" className="mx-1">
                      10
                    </Button>
                    <Button variant="outline" className="ml-2">
                      Next
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="grid" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Grid Card 1 */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64&text=MIT"
                              alt="MIT"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="text-gray-400 hover:text-red-500">
                              <Heart className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-montserrat font-semibold text-lg mb-1">
                          Massachusetts Institute of Technology
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="h-3 w-3 mr-1" />
                          Cambridge, MA, USA
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">Top 5</Badge>
                          <Badge variant="outline">Private</Badge>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Ranking:</span>
                            <span className="text-sm font-medium">#1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Acceptance:</span>
                            <span className="text-sm font-medium">4%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Tuition:</span>
                            <span className="text-sm font-medium">$55,450/year</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">95% Match</span>
                        </div>
                        <div className="flex gap-2">
                          <Link href="/educational-consulting/university-selection/mit">
                            <Button
                              size="sm"
                              className="bg-secondary-teal hover:bg-secondary-teal/90 text-white w-full"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Grid Card 2 */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64&text=Stanford"
                              alt="Stanford"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="text-gray-400 hover:text-red-500">
                              <Heart className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-montserrat font-semibold text-lg mb-1">Stanford University</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="h-3 w-3 mr-1" />
                          Stanford, CA, USA
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">Top 5</Badge>
                          <Badge variant="outline">Private</Badge>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Ranking:</span>
                            <span className="text-sm font-medium">#3</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Acceptance:</span>
                            <span className="text-sm font-medium">4.3%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Tuition:</span>
                            <span className="text-sm font-medium">$56,169/year</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">92% Match</span>
                        </div>
                        <div className="flex gap-2">
                          <Link href="/educational-consulting/university-selection/stanford">
                            <Button
                              size="sm"
                              className="bg-secondary-teal hover:bg-secondary-teal/90 text-white w-full"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Grid Card 3 */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64&text=Harvard"
                              alt="Harvard"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="text-gray-400 hover:text-red-500">
                              <Heart className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-montserrat font-semibold text-lg mb-1">Harvard University</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="h-3 w-3 mr-1" />
                          Cambridge, MA, USA
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">Top 5</Badge>
                          <Badge variant="outline">Private</Badge>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Ranking:</span>
                            <span className="text-sm font-medium">#5</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Acceptance:</span>
                            <span className="text-sm font-medium">4.6%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Tuition:</span>
                            <span className="text-sm font-medium">$54,768/year</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">88% Match</span>
                        </div>
                        <div className="flex gap-2">
                          <Link href="/educational-consulting/university-selection/harvard">
                            <Button
                              size="sm"
                              className="bg-secondary-teal hover:bg-secondary-teal/90 text-white w-full"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    {/* More grid cards would be added here */}
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" className="mr-2">
                      Previous
                    </Button>
                    <Button variant="outline" className="mx-1">
                      1
                    </Button>
                    <Button variant="outline" className="mx-1 bg-secondary-teal text-white">
                      2
                    </Button>
                    <Button variant="outline" className="mx-1">
                      3
                    </Button>
                    <Button variant="outline" className="mx-1">
                      ...
                    </Button>
                    <Button variant="outline" className="mx-1">
                      10
                    </Button>
                    <Button variant="outline" className="ml-2">
                      Next
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
