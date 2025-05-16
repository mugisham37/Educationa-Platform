import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function OnboardingWelcome() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-montserrat font-bold text-4xl text-primary-deep">
                Welcome to YMGrad, John!
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Let's set up your profile to customize your educational journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step 1 of 5</span>
                  <span>20% Complete</span>
                </div>
                <Progress value={20} className="h-2 bg-gray-200" />
              </div>

              <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
                Completing your profile helps us match you with the right programs and counselors. This will take about
                10-15 minutes to complete.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/onboarding/academic-background">
                  <Button
                    size="lg"
                    className="bg-secondary-teal hover:bg-secondary-teal/90 text-white font-montserrat font-semibold"
                  >
                    Begin Profile Setup
                  </Button>
                </Link>

                <Link href="/dashboard">
                  <Button size="lg" variant="link" className="text-gray-500">
                    I'll do this later
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
