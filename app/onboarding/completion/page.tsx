import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, FileText, School } from "lucide-react"

export default function OnboardingCompletion() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="font-montserrat font-bold text-4xl text-primary-deep">Profile Complete!</CardTitle>
              <CardDescription className="text-lg mt-2">
                You're all set to begin your educational journey with YMGrad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-secondary-teal/20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-secondary-teal flex items-center justify-center text-white font-bold text-2xl">
                        85%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-montserrat font-semibold text-xl text-center mb-6">
                Based on your profile, we recommend:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-secondary-teal/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-secondary-teal" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-lg mb-2">Schedule Consultation</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Meet with a counselor to discuss your educational goals and options.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-secondary-teal/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <School className="h-6 w-6 text-secondary-teal" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-lg mb-2">Explore Universities</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Browse our database of universities that match your profile and preferences.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Start Exploring
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-secondary-teal/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-secondary-teal" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-lg mb-2">Start Documents</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Begin preparing your application documents with our guided tools.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Begin Preparation
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-secondary-teal hover:bg-secondary-teal/90 text-white font-montserrat font-semibold"
                  >
                    Go to Dashboard
                  </Button>
                </Link>

                <Button size="lg" variant="outline">
                  Schedule Initial Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
