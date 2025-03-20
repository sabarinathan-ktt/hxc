import { useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Wrench, ClipboardList, PieChart, UserCog, Fuel } from "lucide-react";

const VesselManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Fleet Operations",
      description:
        "Optimize day-to-day vessel operations with cutting-edge tools and real-time monitoring, ensuring efficiency and reliability.",
      icon: <Anchor className="w-8 h-8 text-primary" />,
    },
    {
      title: "Maintenance Planning",
      description:
        "Implement proactive maintenance schedules to reduce downtime and extend the lifecycle of your fleet.",
      icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
      title: "Regulatory Compliance",
      description:
        "Stay ahead of international maritime regulations with automated compliance tracking and updates.",
      icon: <ClipboardList className="w-8 h-8 text-primary" />,
    },
    {
      title: "Performance Analytics",
      description:
        "Leverage advanced analytics to monitor and improve vessel performance across key metrics.",
      icon: <PieChart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Crew Management",
      description:
        "Efficiently manage crew assignments, certifications, and schedules to ensure smooth operations.",
      icon: <UserCog className="w-8 h-8 text-primary" />,
    },
    {
      title: "Fuel Optimization",
      description:
        "Reduce operational costs and carbon footprint with intelligent fuel management systems.",
      icon: <Fuel className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-20 mt-10 mb-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center p-4">
          <Link to="/services">
            <Button variant="outline" size="icon">
              <Anchor className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground flex-1">
            Vessel Management
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Why Choose HarbourXchange Vessel Management?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Integrated solutions tailored for marine operations</li>
              <li>Proactive tools to minimize downtime and maximize efficiency</li>
              <li>Real-time analytics for actionable insights</li>
              <li>Comprehensive compliance and regulatory support</li>
              <li>Expert support available 24/7</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Enhance Your Vessel Management with HarbourXchange
          </h2>
          <Link to="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VesselManagement;
