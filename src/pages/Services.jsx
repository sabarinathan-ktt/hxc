import { NavLink } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ship, Building, Package, ArrowRight, Globe, ThumbsUp, Settings } from "lucide-react"

const ServiceImages = Object.freeze([
	{
		label: 'Vessel Management',
		imageUrl: '/services-vessel-management.png',
		description: 'Optimize your fleet performance with real-time monitoring and advanced management systems.'
	},
	{
		label: 'Marketplace',
		imageUrl: '/services-market-place.png',
		description: 'Connect with maritime projects and services through our competitive bidding platform.'

	},
	{
		label: 'Service Providers',
		imageUrl: '/services-service-provider.jpeg',
		description: 'Providing maritime services: agency support, crew management, bunker supply, provisions, insurance, and shipyard maintenance'
	},
	{
		label: 'Cargo Movement',
		imageUrl: '/services-cargo-movement.jpeg',
		description: 'Efficient coastal and river transport solutions with real-time tracking and coordination.'
	},

]);

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

const Services = () => {
	return (
		<div className="min-h-screen bg-background mt-20 pt-4">
			<div className="container mx-auto max-w-6xl">
				<h1 className="text-4xl font-bold text-foreground my-8 text-center">Our Services</h1>	
				<div className='flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-8'>
					{
						ServiceImages.map(({ label, imageUrl, description }) => (
							<div key={label}>
								<div className="relative mx-3 sm:mx-0 transition-transform transform shadow-lg hover:scale-105">
									<img src={imageUrl} alt={imageUrl} className="w-full h-80 object-cover" />
									{/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-start text-2xl text-white font-semibold">
										<div className="p-8 flex flex-col gap-2">
											<p>{label}</p>
											<p className='text-sm'>{description}</p>
										</div>
									</div> */}
									<div className="flex h-32 flex-col gap-2 p-4 text-2xl font-semibold">										
										<p className="text-[#4f3890]">{label}</p>
										<p className='text-sm'>{description}</p>										
									</div>
								</div>
							</div>
						))
					}
				</div>
				<ServiceStats />
				<Testimonials />
				<CallToAction />
			</div>
		</div>
	)
}

const ServiceStats = () => (
	<div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
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
	<Card className="text-center border-4 border-green- mb-6">
		<CardContent className="pt-6">
			<h2 className="text-3xl font-bold text-foreground mb-6">Ready to Optimize Your Maritime Operations?</h2>
			<NavLink to="/contact">
				<Button size="lg">Contact Us</Button>
			</NavLink>
		</CardContent>
	</Card>
)



export default Services

