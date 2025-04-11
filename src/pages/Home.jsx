import HomeMap from "./components/HomeMap";
import { motion } from 'framer-motion';
import { Anchor, ChartNoAxesCombined, CloudOff, Handshake, Sailboat, ShipWheel } from "lucide-react";

const cardData = [
	{
		title: "Vessel Management",
		subtitle: "FUEL | RPM | HOUR | CCTV | MAINTAINCE",
		additionalSubtitle: "CREW | DOCUMENT | INVENTORY",
		imageSrc: "/vessel-management.png",
	},
	{
		title: "Marketplace",
		subtitle: "PROJECT CHARTER | TOWAGE",
		imageSrc: "/vessel-market-place.png",
	},
	{
		title: "Cargo Movement",
		subtitle: "COASTAL | INLAND WATERWAYS",
		imageSrc: "/vessel-movement.png",
	},	
	{
		title: "Service Providers",
		subtitle: "AGENCY | CREW | BUNKER | PROVISION | INSURANCE | SHIPYARD",
		imageSrc: "/vessel-service.jpeg",
	}
];

const keyFeatures = [
	{
		title: "Cargo Movement",
		description: "Efficient tracking and management of cargo across various transport modes",
		icon: <Sailboat className="w-8 h-8" />,
	},
	{
		title: "Enhancing Efficiency",
		description: "Optimizing maritime operations for better performance and reduced costs",
		icon: <ChartNoAxesCombined className="w-8 h-8" />,
	},
	{
		title: "Maritime Decarbonization",
		description: "Transitioning to cleaner, sustainable maritime practices to reduce carbon emissions",
		icon: <CloudOff className="w-8 h-8" />,
	},
	{
		title: "Marine Project",
		description: "End-to-end management of marine-based infrastructure and projects",
		icon: <Anchor className="w-8 h-8" />,
	},
	{
		title: "Service Provider",
		description: "Connecting service providers with clients for efficient maritime operations",
		icon: <Handshake className="w-8 h-8" />,
	},
	{
		title: "Towage",
		description: "Towage services for safe and efficient maritime vessel operations",
		icon: <ShipWheel className="w-8 h-8" />,
	},
];

const sortIntro = {
	mainContent: 'HarbourXchange is transforming the global marine marketplace by seamlessly connecting Charterers with Vessel Owners, matching marine assets with project requirements. Our proprietary maritime network intelligence empowers stakeholders with data-driven insights for informed decision-making, thereby enhancing the operational efficiency and supporting maritime decarbonisation of marine assets across diverse project types.',
	additionalContent: 'Through HarbourXchange Vessel owners and managers gain access to real-time data and actionable insights, enabling them to monitor fleet performance, optimise asset utilisation and maintenance, geolocation of service providers and make informed operational and strategic decisions with greater efficiency and confidence.'
}

const FeatureItem = ({ feature }) => (
	<motion.div
		className="flex-shrink-0 w-64 sm:w-72 p-6 mx-2 border-2 border-gray-200 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
	>
		<div className="text-[#4F3890] mb-4">{feature?.icon}</div>
		<h3 className="text-xl font-semibold mb-2 text-[#4F3890]">{feature?.title}</h3>
		<p className="text-sm text-gray-600">{feature?.description}</p>
	</motion.div>
);

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<HomeMap />
			<section className="py-16 px-4 md:px-8 lg:px-16">
				<div className="mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4F3890] ">
						<span>Revolutionizing</span> the Indian Marine Marketplace
					</h2>
					<div className="text-lg md:text-xl">
						<p>{sortIntro?.mainContent}</p>
						<br />
						<p>{sortIntro?.additionalContent}</p>
					</div>
				</div>
			</section>
			<section className="py-16 px-4 md:px-8 lg:px-16">
				<motion.h2
					className="text-3xl md:text-4xl font-bold text-center mb-12"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Our Comprehensive Maritime Solutions
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{cardData.map(({ title, subtitle, imageSrc, additionalSubtitle='' }, index) => (
						<motion.div
							key={index}
							className="relative overflow-hidden"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							viewport={{ once: true }}
						>
							<div className="relative overflow-hidden">
								{/* Image */}
								<img src={imageSrc} alt={title} className="w-full" />
								{/* Overlay for Details */}
								<div className="absolute inset-0 bg-black/10 flex flex-col justify-start p-6">
									<div className="p-0">
										<h3 className="text-white text-xl font-bold">{title}</h3>
										<p className="text-white/80 font-semibold">{subtitle}</p>
										{additionalSubtitle && <p className="text-white/80 font-semibold">{additionalSubtitle}</p>}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>
			<div className="w-full overflow-hidden relative p-8">
				<motion.div
					className="flex space-x-6"
					animate={{ x: ["0%", "-100%"] }}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 20,
							ease: "linear", // Smooth scroll
						},
					}}
				>
					{keyFeatures?.map((feature, index) => (
						<FeatureItem key={index} feature={feature} />
					))}
				</motion.div>
			</div>
		</main>
	)
}