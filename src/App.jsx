import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./pages/components/NavBar"
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import VesselManagement from "./pages/Vessel"

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/services" element={<Services />} />
					<Route path="/vessel" element={<VesselManagement />} />
				</Routes>
				<Footer />
			</Router>
		</>
	)
}

export default App