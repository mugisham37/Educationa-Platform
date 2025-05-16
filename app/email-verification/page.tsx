import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function EmailVerification() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-md">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-secondary-teal" />
              </div>
              <CardTitle className="font-montserrat font-semibold text-3xl text-primary-deep">
                Verify Your Email
              </CardTitle>
              <CardDescription className="text-base mt-2">
                We've sent a verification link to <span className="font-medium">example@email.com</span>. Please check
                your inbox and verify your email to continue.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full" disabled>
                  Resend Verification Email (59s)
                </Button>

                <Button
                  className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white font-montserrat font-semibold"
                  disabled
                >
                  Continue to Profile Setup
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Having trouble? Contact{" "}
                  <a href="mailto:support@ymgrad.com" className="text-secondary-teal hover:underline">
                    support@ymgrad.com
                  </a>{" "}
                  for assistance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
