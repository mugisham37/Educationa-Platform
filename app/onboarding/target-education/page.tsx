import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function TargetEducation() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep">
                Your Educational Goals
              </CardTitle>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step 2 of 5</span>
                  <span>40% Complete</span>
                </div>
                <Progress value={40} className="h-2 bg-gray-200" />
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="desiredDegree">Desired Degree Level</Label>
                    <Select>
                      <SelectTrigger id="desiredDegree">
                        <SelectValue placeholder="Select degree level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="master">Master's</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fieldsOfInterest">Fields of Interest</Label>
                    <Select>
                      <SelectTrigger id="fieldsOfInterest">
                        <SelectValue placeholder="Select fields (you can select multiple)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computerScience">Computer Science</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                        <SelectItem value="science">Natural Sciences</SelectItem>
                        <SelectItem value="socialScience">Social Sciences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetStartDate">Target Start Date</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Season" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall">Fall</SelectItem>
                          <SelectItem value="spring">Spring</SelectItem>
                          <SelectItem value="summer">Summer</SelectItem>
                          <SelectItem value="winter">Winter</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 4 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredCountries">Preferred Countries</Label>
                    <Select>
                      <SelectTrigger id="preferredCountries">
                        <SelectValue placeholder="Select countries (you can select multiple)" />
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

                  <div className="space-y-4">
                    <Label>Budget Range (USD per year)</Label>
                    <Slider defaultValue={[30000]} max={100000} step={5000} />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$0</span>
                      <span>$50,000</span>
                      <span>$100,000+</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="scholarshipNeed">Scholarship Need</Label>
                      <Switch id="scholarshipNeed" />
                    </div>

                    {/* This would be conditionally shown based on scholarship toggle */}
                    <div className="space-y-2 pl-4 border-l-2 border-gray-200">
                      <Label>Scholarship Importance</Label>
                      <Slider defaultValue={[75]} max={100} step={5} />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Nice to have</span>
                        <span>Important</span>
                        <span>Essential</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="exploring" />
                    <label
                      htmlFor="exploring"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I'm still exploring options
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <Link href="/onboarding/academic-background">
                    <Button variant="outline">Back</Button>
                  </Link>
                  <Link href="/onboarding/professional-profile">
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
