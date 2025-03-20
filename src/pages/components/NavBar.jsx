import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Login from "./LoginButton";
import { useLocation } from "react-router-dom";


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
	const { pathname } = useLocation();

	return (
			<header className={`absolute top-0 right-0 left-0 mx-auto z-10 w-full h-18 ${pathname === '/' ? 'bg-white/20' : 'bg-gray-300'}`}>			<NavigationMenu>
				<NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
					<NavigationMenuItem className="font-bold flex bg-inherit">
						<a rel="noreferrer noopener" href="/" className="flex">
							<img src="/logo.png" alt="logo" width={200} height={100} className="hover:scale-110 transition-all duration-300" />
						</a>
					</NavigationMenuItem>

					<span className="flex md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className="px-2">
								<Menu className="flex md:hidden h-5 w-5 hover:scale-110 transition-all duration-300" onClick={() => setIsOpen(true)}>
									<span className="sr-only">Menu Icon</span>
								</Menu>
							</SheetTrigger>

							<SheetContent side={"left"}>
								<SheetHeader>
									<SheetTitle className="flex justify-center items-center h-14">
										<a rel="noreferrer noopener" href="/">
											<img src="/logo.png" alt="logo" className="scale-50" />
										</a>
									</SheetTitle>
								</SheetHeader>

								<nav className="flex flex-col justify-center items-center gap-2 mt-4">
									{routeList.map(({ href, label }) => (
										<a
											rel="noreferrer noopener"
											key={label}
											href={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({ variant: "ghost" })}
										>
											{label}
										</a>
									))}
									{/* <a
										rel="noreferrer noopener"
										href="/login"
										className={`w-[110px] border ${buttonVariants({
											variant: "secondary",
										})}`}
									>
										Login
									</a> */}
								</nav>
							</SheetContent>
						</Sheet>
					</span>

					<nav className="hidden md:flex gap-2">
						{routeList.map((route, i) => (
							<div key={i} className="flex flex-col items-center">
								<a
									rel="noreferrer noopener"
									href={route.href}
									className={`text-[16px] text-white px-4 py-2 rounded hover:scale-110 transition-all duration-200 font-semibold}`}
								>
									{route.label}
								</a>
							</div>
						))}
						{/* <Login /> */}
					</nav>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};