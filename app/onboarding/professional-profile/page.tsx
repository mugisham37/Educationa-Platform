import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function ProfessionalProfile() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep">
                Your Professional Experience
              </CardTitle>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step 3 of 5</span>
                  <span>60% Complete</span>
                </div>
                <Progress value={60} className="h-2 bg-gray-200" />
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="workExperience" className="text-base font-medium">
                      Work Experience
                    </Label>
                    <Switch id="workExperience" />
                  </div>

                  {/* Work Experience Section - Would be conditionally shown */}
                  <div className="space-y-6 pl-4 border-l-2 border-gray-200">
                    <div className="space-y-4 p-4 border border-gray-200 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input id="company" placeholder="Enter company name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position Title</Label>
                          <Input id="position" placeholder="Enter your position" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="startDate">Start Date</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Month" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  "January",
                                  "February",
                                  "March",
                                  "April",
                                  "May",
                                  "June",
                                  "July",
                                  "August",
                                  "September",
                                  "October",
                                  "November",
                                  "December",
                                ].map((month) => (
                                  <SelectItem key={month} value={month.toLowerCase()}>
                                    {month}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Year" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - 19 + i).map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate">End Date</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Month" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  "January",
                                  "February",
                                  "March",
                                  "April",
                                  "May",
                                  "June",
                                  "July",
                                  "August",
                                  "September",
                                  "October",
                                  "November",
                                  "December",
                                ].map((month) => (
                                  <SelectItem key={month} value={month.toLowerCase()}>
                                    {month}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Year" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - 19 + i).map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="jobDescription">Description</Label>
                        <Textarea
                          id="jobDescription"
                          placeholder="Describe your responsibilities and achievements"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="relevantPosition" />
                        <Label htmlFor="relevantPosition" className="text-sm">
                          This position is relevant to my academic goals
                        </Label>
                      </div>
                    </div>

                    <Button type="button" variant="outline" className="w-full">
                      + Add Another Position
                    </Button>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <Label htmlFor="researchExperience" className="text-base font-medium">
                      Research Experience
                    </Label>
                    <Switch id="researchExperience" />
                  </div>

                  {/* Research Experience Section - Would be conditionally shown */}
                  <div className="space-y-6 pl-4 border-l-2 border-gray-200">
                    <div className="space-y-4 p-4 border border-gray-200 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="researchTopic">Topic/Project Name</Label>
                          <Input id="researchTopic" placeholder="Enter research topic" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="researchInstitution">Institution/Organization</Label>
                          <Input id="researchInstitution" placeholder="Enter institution name" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="researchRole">Role</Label>
                          <Input id="researchRole" placeholder="Enter your role" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="researchDuration">Duration</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="From" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 9 + i).map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="To" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 9 + i).map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="researchDescription">Description</Label>
                        <Textarea id="researchDescription" placeholder="Describe your research and findings" rows={4} />
                      </div>
                    </div>

                    <Button type="button" variant="outline" className="w-full">
                      + Add Another Research
                    </Button>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <Label htmlFor="publications" className="text-base font-medium">
                      Publications
                    </Label>
                    <Switch id="publications" />
                  </div>

                  {/* Publications Section - Would be conditionally shown */}
                  <div className="space-y-6 pl-4 border-l-2 border-gray-200">
                    <div className="space-y-4 p-4 border border-gray-200 rounded-md">
                      <div className="space-y-2">
                        <Label htmlFor="citation">Citation</Label>
                        <Textarea
                          id="citation"
                          placeholder="Enter full citation (e.g., Author, A. A., & Author, B. B. (Year). Title of article. Title of Journal, volume(issue), page range.)"
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button type="button" variant="outline" className="w-full">
                      + Add Another Publication
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <Link href="/onboarding/target-education">
                    <Button variant="outline">Back</Button>
                  </Link>
                  <Link href="/onboarding/personal-information">
                    <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">Save & Continue</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
