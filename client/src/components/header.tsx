import { Link } from "react-router-dom"
import { MobileNav } from "./mobile-nav"
import { Button } from "./ui/button"

export const Header = () => {
    return (
        <div className="border-b-2 border-b-orange-500 py-6" >
            <div className="container mx-auto flex justify-between items-center" > 
                <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500" >
                    MernEats.com
                </Link>
                <div className="md:hidden" >
                    <MobileNav />
                </div>
                <div className="hidden md:block" >
                    <Button variant="ghost" className="font-bold hover:text-orange-500 hover:bg-white transition" >
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    )
}