import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const socialMedia = Object.freeze({
	twitter: 'https://x.com/HarbourExchange?t=6pcEOWpLEd8E2mJ0PpwWIQ&s=35',
	facebook: 'https://www.facebook.com/profile.php?id=100091439589547&mibextid=rS40aB7S9Ucbxw6v',
	instagram: 'https://www.instagram.com/harbourxchange?igsh=M3oydHphdTF3OGlu'
})

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0 text-[12px]">
						<p>&copy; 2025 HarbourXchange. All rights reserved.</p>
					</div>
					<div className="flex space-x-4">
						<Link
							to={socialMedia.facebook}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white hover:scale-110">
							<Facebook size={24} />
						</Link>
						<Link
							to={socialMedia.twitter}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white hover:scale-110">
							<Twitter size={24} />
						</Link>
						<Link
							to={socialMedia.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white hover:scale-110">
							<Instagram size={24} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;