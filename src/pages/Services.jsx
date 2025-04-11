import { NavLink } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ship, Building, Package, ArrowRight, Globe, ThumbsUp, Settings } from "lucide-react"

const Services = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 mt-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            title="Vessel Management"
            description="Optimize your fleet performance with real-time monitoring and advanced management systems."
            icon={<Ship className="w-8 h-8" />}
            // link="/vessel"
          />
          <ServiceCard
            title="Marketplace"
            description="Connect with maritime projects and services through our competitive bidding platform."
            icon={<Building className="w-8 h-8" />}
            // link="/market"
          />
          <ServiceCard
            title="Service Providers"
            description="Offering maritime services: agency support, crew management, bunker supply, provisions, insurance, and shipyard maintenance for smooth operations."
            icon={<Settings className="w-8 h-8" />}
            // link="/cargo"
          />
          <ServiceCard
            title="Cargo Movement"
            description="Efficient coastal and river transport solutions with real-time tracking and coordination."
            icon={<Package className="w-8 h-8" />}
            // link="/cargo"
          />
        </div>
        <ServiceStats />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  )
}

const ServiceCard = ({ title, description, icon, link }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center space-x-4">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <NavLink to={link}>
        <Button variant="outline">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </NavLink>
    </CardContent>
  </Card>
)

const ServiceStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
    <StatItem icon={<Ship />} number="500+" label="Vessels Managed" />
    <StatItem icon={<Package />} number="50M+" label="Tons of Cargo Moved" />
    <StatItem icon={<Globe />} number="30+" label="Countries Served" />
    <StatItem icon={<ThumbsUp />} number="95%" label="Client Satisfaction" />
  </div>
)

const StatItem = ({ icon, number, label }) => (
  <Card>
    <CardContent className="flex flex-col items-center pt-6">
      <div className="mb-2">{icon}</div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-muted-foreground text-center">{label}</div>
    </CardContent>
  </Card>
)

const Testimonials = () => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
            <p className="font-semibold">{testimonial.author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)

const CallToAction = () => (
  <Card className="text-center">
    <CardContent className="pt-6">
      <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Optimize Your Maritime Operations?</h2>
      <NavLink to="/contact">
        <Button size="lg">Contact Us</Button>
      </NavLink>
    </CardContent>
  </Card>
)

const testimonials = [
  {
    quote: "Their vessel management services have significantly improved our operational efficiency.",
    author: "John Doe, Fleet Manager at OceanCorp",
  },
  {
    quote: "The marketplace feature helped us find the perfect towage services for our needs.",
    author: "Jane Smith, Operations Director at SeaTrade Ltd.",
  },
  {
    quote: "Their cargo movement solutions have streamlined our coastal shipping processes.",
    author: "Mike Johnson, Logistics Manager at RiverFreight Inc.",
  },
]

export default Services

