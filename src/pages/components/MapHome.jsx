// "use client"

// import { useState } from "react"
// import a from "next/a"
// import { Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import Map from "react-map-gl"

// export default function Page() {
//   const [viewState, setViewState] = useState({
//     latitude: 40,
//     longitude: -100,
//     zoom: 3,
//   })

//   return (
//     <div className="flex min-h-screen flex-col bg-black text-white">
//       {/* Navigation */}
//       <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur">
//         <div className="container flex h-16 items-center justify-between px-4">
//           <div className="flex items-center gap-6">
//             <a href="/" className="text-xl font-bold">
//               STARa
//             </a>
//             <nav className="hidden lg:flex items-center gap-6">
//               <a href="#" className="text-sm font-medium hover:text-gray-300">
//                 RESIDENTIAL
//               </a>
//               <a href="#" className="text-sm font-medium hover:text-gray-300">
//                 ROAM
//               </a>
//             </nav>
//           </div>

//           <div className="flex items-center gap-4">
//             <nav className="hidden lg:flex items-center gap-6">
//               <a href="#" className="text-sm font-medium hover:text-gray-300">
//                 PERSONAL
//               </a>
//               <a href="#" className="text-sm font-medium hover:text-gray-300">
//                 BUSINESS
//               </a>
//             </nav>

//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="lg:hidden">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="bg-black/95 text-white">
//                 <div className="flex flex-col gap-4">
//                   <a href="#" className="text-lg font-medium hover:text-gray-300">
//                     RESIDENTIAL
//                   </a>
//                   <a href="#" className="text-lg font-medium hover:text-gray-300">
//                     ROAM
//                   </a>
//                   <a href="#" className="text-lg font-medium hover:text-gray-300">
//                     PERSONAL
//                   </a>
//                   <a href="#" className="text-lg font-medium hover:text-gray-300">
//                     BUSINESS
//                   </a>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </header>

//       {/* Map Section */}
//       <main className="flex-1 pt-16">
//         <div className="relative h-[calc(100vh-4rem)]">
//           <Map
//             {...viewState}
//             onMove={(evt) => setViewState(evt.viewState)}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//           >
//             {/* Availability Legend */}
//             <div className="absolute left-4 top-4 z-10 rounded-lg bg-black/80 p-4 backdrop-blur">
//               <h3 className="mb-2 text-sm font-medium">AVAILABILITY</h3>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full bg-blue-500" />
//                   <span className="text-xs">AVAILABLE</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full bg-gray-500" />
//                   <span className="text-xs">WAITLIST</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full bg-yellow-500" />
//                   <span className="text-xs">COMING SOON</span>
//                 </div>
//               </div>
//             </div>
//           </Map>

//           {/* Service Address Input */}
//           <div className="absolute bottom-8 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 px-4">
//             <div className="flex gap-2 rounded-lg bg-black/80 p-4 backdrop-blur">
//               <div className="flex-1">
//                 <label htmlFor="address" className="mb-1 block text-sm">
//                   Service Address
//                 </label>
//                 <Input id="address" placeholder="TYPE AND SELECT" className="bg-gray-800 border-gray-700" />
//               </div>
//               <Button className="self-end bg-white text-black hover:bg-gray-200">ORDER NOW</Button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }



import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import maplibregl from "maplibre-gl"
import { Map, NavigationControl } from "react-map-gl/maplibre" // Import from react-map-gl/maplibre

export default function Page() {
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
  })

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <a href="/" className="text-xl font-bold">
              STARa
            </a>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                RESIDENTIAL
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                ROAM
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                PERSONAL
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-300">
                BUSINESS
              </a>
            </nav>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 text-white">
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-lg font-medium hover:text-gray-300">
                    RESIDENTIAL
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-gray-300">
                    ROAM
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-gray-300">
                    PERSONAL
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-gray-300">
                    BUSINESS
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Map Section */}
      <main className="flex-1 pt-16">
        <div className="relative h-[calc(100vh-4rem)]">
          <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="https://demotiles.maplibre.org/style.json" // Use a MapLibre style
            style={{ width: "100%", height: "100%" }}
          >
            {/* Navigation Control */}
            <NavigationControl position="top-right" />

            {/* Availability Legend */}
            <div className="absolute left-4 top-4 z-10 rounded-lg bg-black/80 p-4 backdrop-blur">
              <h3 className="mb-2 text-sm font-medium">AVAILABILITY</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-xs">AVAILABLE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-500" />
                  <span className="text-xs">WAITLIST</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="text-xs">COMING SOON</span>
                </div>
              </div>
            </div>
          </Map>

          {/* Service Address Input */}
          <div className="absolute bottom-8 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 px-4">
            <div className="flex gap-2 rounded-lg bg-black/80 p-4 backdrop-blur">
              <div className="flex-1">
                <label htmlFor="address" className="mb-1 block text-sm">
                  Service Address
                </label>
                <Input id="address" placeholder="TYPE AND SELECT" className="bg-gray-800 border-gray-700" />
              </div>
              <Button className="self-end bg-white text-black hover:bg-gray-200">ORDER NOW</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}