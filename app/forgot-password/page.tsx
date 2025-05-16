import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-20 bg-soft-gray">
        <div className="container max-w-md">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-montserrat font-semibold text-3xl text-primary-deep">
                Reset Your Password
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Enter your email address and we'll send you instructions to reset your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-2 mb-6">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white font-montserrat font-semibold"
                >
                  Send Reset Link
                </Button>

                <div className="mt-6 text-center">
                  <Link href="/sign-in" className="text-secondary-teal hover:underline">
                    Back to Sign In
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
