import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ResetConfirmation() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-md">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="font-montserrat font-semibold text-3xl text-primary-deep">
                Check Your Email
              </CardTitle>
              <CardDescription className="text-base mt-2">
                We've sent password reset instructions to <span className="font-medium">example@email.com</span>. Please
                check your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-8 text-center">
                If you don't see the email within a few minutes, check your spam folder or request another reset.
              </p>

              <div className="space-y-4">
                <Button variant="outline" className="w-full" disabled>
                  Resend Email (59s)
                </Button>

                <Link href="/sign-in" className="block">
                  <Button variant="link" className="w-full text-secondary-teal">
                    Back to Sign In
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
