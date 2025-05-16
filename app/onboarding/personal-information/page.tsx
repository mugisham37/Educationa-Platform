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
import { Upload, Camera } from "lucide-react"

export default function PersonalInformation() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-2xl md:text-3xl text-primary-deep">
                Personal Information
              </CardTitle>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step 4 of 5</span>
                  <span>80% Complete</span>
                </div>
                <Progress value={80} className="h-2 bg-gray-200" />
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Label htmlFor="profilePhoto">Profile Photo</Label>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Camera className="h-8 w-8 text-gray-400" />
                        <span className="text-xs text-gray-500 mt-2">Upload Photo</span>
                      </div>
                      {/* This would show the uploaded image */}
                      {/* <Image src="/placeholder.svg" alt="Profile" fill className="object-cover" /> */}
                    </div>
                    <div className="flex gap-2">
                      <Button type="button" size="sm" variant="outline" className="text-xs">
                        <Upload className="h-3 w-3 mr-1" />
                        Upload
                      </Button>
                      <Button type="button" size="sm" variant="outline" className="text-xs text-red-500">
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Day" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                              <SelectItem key={day} value={day.toString()}>
                                {day}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                            ].map((month, index) => (
                              <SelectItem key={month} value={(index + 1).toString()}>
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
                            {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - 50 + i).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Select>
                        <SelectTrigger id="nationality">
                          <SelectValue placeholder="Select your nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="cn">China</SelectItem>
                          {/* More countries would be added here */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="languages">Languages Spoken</Label>
                    <Select>
                      <SelectTrigger id="languages">
                        <SelectValue placeholder="Select languages (you can select multiple)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                        <SelectItem value="ar">Arabic</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="pt">Portuguese</SelectItem>
                        <SelectItem value="ru">Russian</SelectItem>
                        <SelectItem value="ja">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <div className="flex">
                        <Select>
                          <SelectTrigger className="w-24 rounded-r-none">
                            <SelectValue placeholder="+1" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+86">+86</SelectItem>
                            <SelectItem value="+81">+81</SelectItem>
                            {/* More country codes would be added here */}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phoneNumber"
                          placeholder="Enter your phone number"
                          className="rounded-l-none flex-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Current Address</Label>
                    <div className="space-y-4">
                      <Input placeholder="Street Address" />
                      <Input placeholder="Apartment, suite, etc. (optional)" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input placeholder="City" />
                        <Input placeholder="State/Province" />
                        <Input placeholder="Postal Code" />
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="cn">China</SelectItem>
                          {/* More countries would be added here */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Emergency Contact</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Contact Name" />
                      <Input placeholder="Contact Phone Number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialNeeds">Special Accommodations/Needs (optional)</Label>
                    <Textarea
                      id="specialNeeds"
                      placeholder="Please let us know if you have any special needs or require accommodations"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-montserrat font-semibold text-lg">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="profileVisibility" className="text-sm">
                          Profile Visibility
                        </Label>
                        <Select defaultValue="private">
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="dataSharing" className="text-sm">
                          Share data with partner universities
                        </Label>
                        <Switch id="dataSharing" />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="marketingEmails" className="text-sm">
                          Receive marketing emails
                        </Label>
                        <Switch id="marketingEmails" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <Link href="/onboarding/professional-profile">
                    <Button variant="outline">Back</Button>
                  </Link>
                  <Link href="/onboarding/preferences-goals">
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
