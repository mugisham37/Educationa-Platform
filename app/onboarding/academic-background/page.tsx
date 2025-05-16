import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AcademicBackground() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep">
                Your Academic Journey
              </CardTitle>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step 1 of 5</span>
                  <span>20% Complete</span>
                </div>
                <Progress value={20} className="h-2 bg-gray-200" />
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="institution">Current/Most Recent Institution</Label>
                      <Input id="institution" placeholder="Enter institution name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="degreeLevel">Degree Level</Label>
                      <Select>
                        <SelectTrigger id="degreeLevel">
                          <SelectValue placeholder="Select degree level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">Bachelor's</SelectItem>
                          <SelectItem value="master">Master's</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fieldOfStudy">Field of Study</Label>
                      <Input id="fieldOfStudy" placeholder="Enter your field of study" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gpa">GPA</Label>
                      <div className="flex gap-4">
                        <Input
                          id="gpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="4"
                          placeholder="0.00"
                          className="flex-1"
                        />
                        <Select defaultValue="4.0">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="Scale" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="4.0">/ 4.0</SelectItem>
                            <SelectItem value="5.0">/ 5.0</SelectItem>
                            <SelectItem value="10.0">/ 10.0</SelectItem>
                            <SelectItem value="100">/ 100</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="graduationDate">Graduation Date</Label>
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
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <Button type="button" variant="outline" className="mb-6">
                    + Add Another Degree
                  </Button>

                  <div className="space-y-4">
                    <h3 className="font-montserrat font-semibold text-lg">Standardized Tests</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {["GRE", "GMAT", "TOEFL", "IELTS", "Other"].map((test) => (
                        <div key={test} className="flex items-center space-x-2">
                          <Checkbox id={`test-${test.toLowerCase()}`} />
                          <label
                            htmlFor={`test-${test.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {test}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* This would be conditionally shown based on selected tests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 border p-4 rounded-md">
                      <div className="space-y-2">
                        <Label htmlFor="greScore">GRE Score</Label>
                        <Input id="greScore" placeholder="Enter your score" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="greDate">Test Date</Label>
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
                              {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 4 + i).map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <Link href="/onboarding/welcome">
                    <Button variant="outline">Back</Button>
                  </Link>
                  <Link href="/onboarding/target-education">
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
