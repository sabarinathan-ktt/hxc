import { Map } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import mapStyle from '../../data/mapstyle.json';
import { ChevronsDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function HomeMap() {
	const [scrollButtonVisible, setScrollButtonVisible] = useState(true);

	const handleScrollDown = () => {
		const navHeader = document.getElementById('navHeader');
		window.scrollTo({
			top: navHeader?.clientHeight ? window.innerHeight - navHeader?.clientHeight : window.innerHeight,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setScrollButtonVisible(false);
			} else {
				setScrollButtonVisible(true);
			}
		};
		window.addEventListener('scroll', handleScroll);

		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='relative w-full h-[100dvh]'>
			<Map
				initialViewState={{
					longitude: 78.9629,  // Longitude for the center of India
					latitude: 20.5937,   // Latitude for the center of India
					zoom: 4              // Adjust zoom level to show India
				}}
				style={{ width: "100%", height: "100%" }}
				mapStyle={mapStyle}
				light={{ "anchor": "viewport", "color": "white", "intensity": 0.4 }}
			/>
			{/* Floating Action Button */}
			{scrollButtonVisible &&
				<button
					className="absolute bottom-10 right-2 bg-white text-black rounded-full p-2 text-2xl shadow-lg cursor-pointer transition-transform transform hover:scale-105"
					onClick={handleScrollDown}
				>
					<ChevronsDown />
				</button>
			}
		</div>
	);
}

export default HomeMap;