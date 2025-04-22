import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Ship, Waves, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import 'maplibre-gl/dist/maplibre-gl.css';

const websiteContent = Object.freeze({
	aboutUs: 'Revolutionizing the marine industry with real-time monitoring, connectivity, and a centralized platform for informed decision-making.',
	ourStory: 'HarbourXChange was founded in 2025 by Mr. Shrey Tayal, building upon his successful establishment of Riverine Infra Logistics, a prominent marine asset owner and operator of a diverse fleet across National Waterways and Coastal Shipping routes. Drawing upon extensive expertise encompassing bulk/liquid project cargo transportation, marine spread for infrastructure projects, salvage operations, towage, surveys, jetty operation, and crew services, Mr. Tayal identified key operational gaps within the marine sector.',
	additionalStory: 'This insight spurred the development of HarbourXChange, a centralized SaaS platform for the marine industry, Decentralized Sector designed to facilitate real-time monitoring of and connectivity among marine assets and service providers. Its innovative geo-location-based marketplace empowers users with accurate, timely data, thereby enhancing operational efficiency and informed decision-making.'
})

const locations = [
	{ name: "Mumbai", coordinates: [72.8777, 19.0760] },
	{ name: "Kerala", coordinates: [76.2711, 10.8505] },      // Using general Kerala coordinates
	{ name: "Goa", coordinates: [74.1240, 15.2993] },
	{ name: "Kakinada", coordinates: [82.2475, 16.9891] },
	{ name: "Kolkata", coordinates: [88.3639, 22.5726] }
];

const MapSection = () => {
	return (
		<section className="py-16 px-4 md:px-8 lg:px-16 bg-muted">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
					We Are Available At
				</h2>
				<div className='w-full flex justify-center items-center'>
					<div className="flex flex-col">
						<div className='p-4 flex flex-wrap gap-2 justify-center items-center'>
							{
								locations?.map(city => (
									<div key={city.name} className='py-2 px-4 flex justify-center items-center gap-2 bg-white rounded'>
										<MapPin className="h-4 w-4" />
										<p>{city?.name}</p>
									</div>
								))
							}
						</div>
						<div className="w-full max-w-[600px] px-4">
							<img
								src="/staticmap.jpg"
								alt="Map"
								className="w-full h-auto object-cover rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default function About() {
	const navigate = useNavigate();
	return (
		<main className="flex flex-col min-h-screen mt-20">
			{/* Hero Section */}
			<section>
				<div className="max-w-6xl mx-auto my-8 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
						About HarbourXchange
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						{websiteContent.aboutUs}
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
			<section className="py-8 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
					Our Story
				</h2>
				<div className="grid md:grid-cols-1 gap-12 items-start">
					<p className="text-lg text-muted-foreground text-center">
						HarbourXChange was founded in 2025 by <strong>Mr. Shrey Tayal</strong>, building upon his successful establishment of <strong>Riverine Infra Logistics</strong>, a prominent marine asset owner and operator of a diverse fleet across National Waterways and Coastal Shipping routes. Drawing upon extensive expertise encompassing bulk/liquid project cargo transportation, marine spread for infrastructure projects, salvage operations, towage, surveys, jetty operation, and crew services, Mr. Tayal identified key operational gaps within the marine sector.
					</p>
					<p className="text-lg text-muted-foreground text-center">
						{websiteContent.additionalStory}
					</p>
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
							<p className="text-lg text-muted-foreground mb-4 text-justify">
								The marine industry operates as a semi-organized sector, characterized by diverse asset classes and a
								wide range of operators, from individual owners to large enterprises. Traditionally, connections have
								relied on intermediaries, leading to a lack of visibility regarding asset locations and pertinent
								information, which hampers timely decision-making for project stakeholders.
							</p>
							<p className="text-lg text-muted-foreground text-justify">
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
						Choose HarbourXchange
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<Ship className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2 text-foreground">Real-Time Visibility</h3>
							<p className="text-muted-foreground">
								Track marine assets in real-time with our advanced geo-location technology.
							</p>
						</div>
						<div className="text-center">
							<Waves className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2 text-foreground">Seamlessly Integrated Operations</h3>
							<p className="text-muted-foreground">
								A single platform for all marine operations, ensuring seamless connectivity.
							</p>
						</div>
						<div className="text-center">
							<Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2 text-foreground">Data-Driven Decision</h3>
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