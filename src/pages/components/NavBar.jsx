import { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Login from "./LoginButton";
import { Link, useLocation } from "react-router-dom";

const routeList = Object.freeze([
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/services",
		label: "Services",
	},
	{
		href: "/contact",
		label: "Contact",
	}
])

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(() => window.scrollY);
	const { pathname } = useLocation();

	useEffect(() => {
		function updateScrollY() {
			setLastScrollY(window.scrollY)
		}
		window.addEventListener('scroll', updateScrollY);
		return () => { window.removeEventListener('scroll', updateScrollY) }
	}, []);

	const navbarClass = useMemo(() => {
		return (pathname === '/' && lastScrollY <= 130) ? 'bg-transparent' : 'bg-gray-800';
	}, [pathname, lastScrollY]);

	return (
		<header className={`fixed top-0 right-0 left-0 mx-auto z-10 w-full ${navbarClass}`}>
			<NavigationMenu>
				<NavigationMenuList className="h-20 flex w-screen justify-between px-8">
					<NavigationMenuItem className="font-bold flex bg-inherit">
						<Link to="/" className="flex bg-white">
							<img src="/logo.png" alt="logo" width={100} height={100} className="hover:scale-110 transition-all duration-300" />
						</Link>
					</NavigationMenuItem>
					{/* Mobileview sidebar */}
					<span className="flex md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className="px-2">
								<Menu className="flex md:hidden h-5 w-5 hover:scale-110 transition-all duration-300 text-white" onClick={() => setIsOpen(true)}>
									<span className="sr-only">Menu Icon</span>
								</Menu>
							</SheetTrigger>
							<SheetContent side={"left"}>
								<SheetHeader>
									<SheetTitle className="flex justify-center items-center h-14">
										<Link rel="noreferrer noopener" to="/">
											<img src="/logo.png" alt="logo" className="scale-50" />
										</Link>
									</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col justify-center items-center gap-2 mt-4">
									{routeList.map(({ href, label }) => (
										<Link
											rel="noreferrer noopener"
											key={label}
											to={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({ variant: "ghost" })}
										>
											{label}
										</Link>
									))}
									{/* <Link
										rel="noreferrer noopener"
										href="/login"
										className={`w-[110px] border ${buttonVariants({
											variant: "secondary",
										})}`}
									>
										Login
									</Link> */}
								</nav>
							</SheetContent>
						</Sheet>
					</span>
					{/* Desktop view */}
					<nav className="hidden md:flex gap-2">
						{routeList.map((route, i) => (
							<div key={i} className="flex flex-col items-center">
								<Link
									to={route.href}
									className='text-[18px] px-4 py-2 rounded hover:scale-110 transition-all duration-200 text-white'
								>
									{route.label}
								</Link>
							</div>
						))}
						{/* <Login /> */}
					</nav>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};