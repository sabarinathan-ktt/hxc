import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Ship, Waves, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Map, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import basicmapstyle from '../data/basicmapstyle.json';

const locations = [
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "Delhi", coordinates: [77.2090, 28.6139] },
  { name: "Bengaluru", coordinates: [77.5946, 12.9716] },
  { name: "Kolkata", coordinates: [88.3639, 22.5726] },
  { name: "Chennai", coordinates: [80.2785, 13.0827] },
  { name: "Hyderabad", coordinates: [78.4867, 17.3850] },
  { name: "Pune", coordinates: [73.8567, 18.5204] },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225] },
  { name: "Jaipur", coordinates: [75.7873, 26.9124] },
  { name: "Surat", coordinates: [72.8311, 21.1702] }
];

const MapSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          We Are Available At
        </h2>

        {/* Map Component */}
        <div className="relative w-full h-96">
          <Map
            initialViewState={{
              longitude: 78.9629,  // Longitude for the center of India
              latitude: 20.5937,   // Latitude for the center of India
              zoom: 4              // Adjust zoom level to show India
            }}
            style={{ width: "100%", height: "40vh" }}
            mapStyle={basicmapstyle}
          >
            {locations.map((location, index) => (
              <Marker key={index} longitude={location.coordinates[0]} latitude={location.coordinates[1]}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path>
                </svg>
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About HarbourXChange
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Revolutionizing the marine industry with real-time monitoring, connectivity, and a centralized platform for
            informed decision-making.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="flex items-center gap-2" onClick={() => { navigate('/services') }}>
              <Anchor className="w-5 h-5" />
              Explore Our Services
            </Button>
            <Button variant="outline" onClick={() => { navigate('/contact') }}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                HarbourXChange was founded by <strong>Mr. Shrey Tayal</strong>, following his successful establishment
                of the <strong>Riverine Group</strong>, a leading marine company operating a diverse fleet on the
                National Waterway and Coastal Shipping.
              </p>
              <p className="text-lg text-muted-foreground">
                With expertise in marine services, HarbourXChange was conceived as a centralized platform to enable
                real-time monitoring and connectivity for marine assets and service providers. Our innovative
                geo-location-based marketplace facilitates informed decision-making, making us a trusted SaaS platform
                for the marine industry.
              </p>
            </div>

            <div className="relative h-64 md:h-full">
              <motion.img
                src="/vessel.png"
                alt="HarbourXChange"
                width={600}
                height={400}
                className="object-cover w-full h-full shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>


          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground text-center">
            The Problem We Solve
          </h2>
          <Card className="p-6">
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">
                The marine industry operates as a semi-organized sector, characterized by diverse asset classes and a
                wide range of operators, from individual owners to large enterprises. Traditionally, connections have
                relied on intermediaries, leading to a lack of visibility regarding asset locations and pertinent
                information, which hampers timely decision-making for project stakeholders.
              </p>
              <p className="text-lg text-muted-foreground">
                Real-time monitoring has often depended on crew availability, limiting access to critical operational
                data.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Why Choose HarbourXChange?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Ship className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">
                Track marine assets in real-time with our advanced geo-location technology.
              </p>
            </div>
            <div className="text-center">
              <Waves className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Centralized Platform</h3>
              <p className="text-muted-foreground">
                A single platform for all marine operations, ensuring seamless connectivity.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Timely Decisions</h3>
              <p className="text-muted-foreground">
                Make informed decisions with access to critical operational data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <MapSection />

    </main>
  );
}