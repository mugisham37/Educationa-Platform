import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GraduationCap,
  FileText,
  StampIcon as Passport,
  Award,
  Calendar,
  Users,
  CheckCircle,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
          <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6 max-w-4xl">
              Your Global Education Journey Starts Here
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-light-blue mb-10 max-w-3xl">
              Personalized guidance for international students seeking advanced degrees and career opportunities abroad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                className="bg-secondary-teal hover:bg-secondary-teal/90 text-white font-montserrat font-semibold"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-montserrat"
              >
                Schedule a Free Consultation
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <Card className="bg-white/10 backdrop-blur border-none text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="rounded-full bg-accent-gold/20 p-3">
                    <Award className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-xl">95%</p>
                    <p className="text-light-blue text-sm">Admission Success</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-none text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="rounded-full bg-secondary-teal/20 p-3">
                    <Users className="h-6 w-6 text-secondary-teal" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-xl">2000+</p>
                    <p className="text-light-blue text-sm">Universities Connected</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-none text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="rounded-full bg-blue-400/20 p-3">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-xl">75+</p>
                    <p className="text-light-blue text-sm">Countries Served</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary-deep text-center mb-16">
              Comprehensive Support for Your Educational Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="rounded-full bg-secondary-teal/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <GraduationCap className="h-8 w-8 text-secondary-teal" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-primary-deep mb-4">
                    Expert Educational Consulting
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get matched with specialized counselors who understand your unique goals and guide you to the right
                    programs.
                  </p>
                  <Link href="#" className="text-secondary-teal font-medium flex items-center hover:underline">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="rounded-full bg-secondary-teal/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-secondary-teal" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-primary-deep mb-4">
                    Document Preparation Support
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Craft compelling applications with our collaborative tools and expert feedback system.
                  </p>
                  <Link href="#" className="text-secondary-teal font-medium flex items-center hover:underline">
                    Explore Our Tools <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="rounded-full bg-secondary-teal/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <Passport className="h-8 w-8 text-secondary-teal" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-primary-deep mb-4">
                    Visa & Immigration Guidance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Navigate complex visa processes with country-specific support and preparation resources.
                  </p>
                  <Link href="#" className="text-secondary-teal font-medium flex items-center hover:underline">
                    View Services <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Carousel */}
        <section className="py-20 bg-soft-gray">
          <div className="container">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary-deep text-center mb-16">
              Student Success Stories
            </h2>
            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="min-w-[300px] md:min-w-[400px] snap-center">
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                            <Image
                              src={`/placeholder.svg?height=64&width=64&text=Student${item}`}
                              alt={`Student ${item}`}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-montserrat font-semibold">Sarah Johnson</p>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600">United States</span>
                              <Image
                                src="/placeholder.svg?height=16&width=24&text=🇺🇸"
                                alt="USA flag"
                                width={24}
                                height={16}
                                className="ml-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <Image
                            src="/placeholder.svg?height=40&width=120&text=University"
                            alt="University logo"
                            width={120}
                            height={40}
                            className="mb-2"
                          />
                          <p className="text-sm text-gray-600">Master's in Computer Science</p>
                        </div>
                        <p className="italic text-gray-700 mb-4">
                          "YMGrad transformed my application journey. Their counselors provided personalized guidance
                          that helped me secure admission to my dream program with a scholarship."
                        </p>
                        <p className="text-secondary-teal font-medium">Now working at Google</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6 gap-2">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <button
                    key={dot}
                    className={`w-3 h-3 rounded-full ${dot === 1 ? "bg-secondary-teal" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${dot}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* University Partners Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary-deep text-center mb-6">
              Our University Network
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
              Access opportunities at top institutions worldwide through our established partnerships.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=University${i + 1}`}
                    alt={`University ${i + 1}`}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="#"
                className="text-secondary-teal font-medium flex items-center justify-center hover:underline"
              >
                View All Partner Universities <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-soft-gray">
          <div className="container">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary-deep text-center mb-16">
              Your Path to Success
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    icon: <Users className="h-8 w-8 text-white" />,
                    title: "Create Your Profile",
                    description: "Complete your academic profile and define your educational goals.",
                  },
                  {
                    icon: <Calendar className="h-8 w-8 text-white" />,
                    title: "Meet Your Counselor",
                    description: "Schedule a personalized consultation with an expert in your field.",
                  },
                  {
                    icon: <FileText className="h-8 w-8 text-white" />,
                    title: "Develop Your Application",
                    description: "Collaborate on documents and prepare a competitive application.",
                  },
                  {
                    icon: <GraduationCap className="h-8 w-8 text-white" />,
                    title: "Achieve Your Goals",
                    description: "Receive acceptances and support through to program completion.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-secondary-teal p-4 w-16 h-16 flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-primary-deep mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-secondary-teal hover:bg-secondary-teal/90 text-white font-montserrat font-semibold"
              >
                Begin Your Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary-deep text-center mb-16">
              Comprehensive Services
            </h2>
            <Tabs defaultValue="educational" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
                <TabsTrigger value="educational">Educational Consulting</TabsTrigger>
                <TabsTrigger value="document">Document Preparation</TabsTrigger>
                <TabsTrigger value="visa">Visa Application</TabsTrigger>
                <TabsTrigger value="academic">Academic Enhancement</TabsTrigger>
                <TabsTrigger value="immigration">Immigration Pathways</TabsTrigger>
                <TabsTrigger value="post">Post-Admission</TabsTrigger>
                <TabsTrigger value="career">Career Services</TabsTrigger>
              </TabsList>
              <TabsContent value="educational" className="p-6 bg-soft-gray rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Educational+Consulting"
                      alt="Educational Consulting"
                      width={500}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-primary-deep mb-4">
                      Expert Educational Guidance
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Personalized university selection based on your profile</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>One-on-one sessions with specialized counselors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Application strategy development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Profile strength analysis and enhancement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>Scholarship opportunity identification</span>
                      </li>
                    </ul>
                    <Button className="bg-secondary-teal hover:bg-secondary-teal/90 text-white">Learn More</Button>
                  </div>
                </div>
              </TabsContent>
              {/* Other tab contents would follow the same pattern */}
              <TabsContent value="document" className="p-6 bg-soft-gray rounded-lg">
                {/* Document Preparation content */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-soft-gray">
          <div className="container">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary-deep text-center mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
              Flexible options designed to support your educational journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-montserrat font-semibold text-2xl text-primary-deep mb-2">Basic</h3>
                  <p className="text-3xl font-bold mb-6">
                    $XXX <span className="text-sm font-normal text-gray-500">/month</span>
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "University shortlisting",
                      "Basic document review",
                      "Email support",
                      "Application tracking",
                      "Resource library access",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                    Choose Basic
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border-none shadow-xl relative">
                <div className="absolute top-0 right-0 bg-accent-gold text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
                <CardContent className="p-8">
                  <h3 className="font-montserrat font-semibold text-2xl text-primary-deep mb-2">Premium</h3>
                  <p className="text-3xl font-bold mb-6">
                    $XXX <span className="text-sm font-normal text-gray-500">/month</span>
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "All Basic features",
                      "Dedicated counselor",
                      "Comprehensive document editing",
                      "Interview preparation",
                      "Priority support",
                      "Visa application guidance",
                      "Scholarship application support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent-gold hover:bg-accent-gold/90 text-white">Choose Premium</Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-montserrat font-semibold text-2xl text-primary-deep mb-2">Enterprise</h3>
                  <p className="text-3xl font-bold mb-6">
                    $XXX <span className="text-sm font-normal text-gray-500">/month</span>
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "All Premium features",
                      "VIP counselor access",
                      "Unlimited consultations",
                      "Complete application management",
                      "Post-admission support",
                      "Housing assistance",
                      "Career placement services",
                      "Networking opportunities",
                      "Personalized academic planning",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-secondary-teal hover:bg-secondary-teal/90 text-white">
                    Choose Enterprise
                  </Button>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-gray-600 mt-8">
              Custom plans available for institutional partners.{" "}
              <Link href="#" className="text-secondary-teal hover:underline">
                Contact us
              </Link>{" "}
              for details.
            </p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-primary-deep text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1600')] opacity-10 bg-cover bg-center"></div>
          <div className="container relative text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Educational Future?
            </h2>
            <p className="font-open-sans text-lg text-light-blue mb-10 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their international education goals with YMGrad.
            </p>
            <Button
              size="lg"
              className="bg-accent-gold hover:bg-accent-gold/90 text-white font-montserrat font-semibold mb-6"
            >
              Get Started Now
            </Button>
            <p className="text-sm text-white/80">No commitment required. Free initial consultation.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
