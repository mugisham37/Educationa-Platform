import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

export default function PreferencesGoals() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep">
                Your Preferences & Goals
              </CardTitle>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step 5 of 5</span>
                  <span>100% Complete</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-200" />
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="careerGoals">Career Goals</Label>
                    <Textarea
                      id="careerGoals"
                      placeholder="Describe your short and long-term career aspirations"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="academicInterests">Academic Interests</Label>
                    <Select>
                      <SelectTrigger id="academicInterests">
                        <SelectValue placeholder="Select interests (you can select multiple)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                        <SelectItem value="dataScience">Data Science</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sustainability">Sustainability</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="arts">Arts & Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>University Preferences</Label>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Location</span>
                          <span>Urban vs. Rural</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Urban</span>
                          <span>Suburban</span>
                          <span>Rural</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Size</span>
                          <span>Small vs. Large</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Research Focus</span>
                          <span>Teaching vs. Research</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Teaching</span>
                          <span>Balanced</span>
                          <span>Research</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Program Structure</span>
                          <span>Coursework vs. Thesis</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Coursework</span>
                          <span>Mixed</span>
                          <span>Thesis</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="extracurricular">Extracurricular Interests</Label>
                    <Select>
                      <SelectTrigger id="extracurricular">
                        <SelectValue placeholder="Select interests (you can select multiple)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="volunteering">Volunteering</SelectItem>
                        <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                        <SelectItem value="studentGovernment">Student Government</SelectItem>
                        <SelectItem value="culturalClubs">Cultural Clubs</SelectItem>
                        <SelectItem value="outdoorActivities">Outdoor Activities</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialCircumstances">Special Circumstances</Label>
                    <Textarea
                      id="specialCircumstances"
                      placeholder="Any additional information you'd like us to consider"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-montserrat font-semibold text-lg">Services Needed</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "University Selection Guidance",
                        "Application Document Preparation",
                        "Visa Application Support",
                        "Scholarship Application Help",
                        "Test Preparation",
                        "Interview Coaching",
                        "Post-Admission Services",
                      ].map((service) => (
                        <div key={service} className="flex items-start space-x-2">
                          <Checkbox id={`service-${service.toLowerCase().replace(/\s+/g, "-")}`} />
                          <label
                            htmlFor={`service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <Link href="/onboarding/personal-information">
                    <Button variant="outline">Back</Button>
                  </Link>
                  <Link href="/onboarding/completion">
                    <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                      Complete Profile
                    </Button>
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
