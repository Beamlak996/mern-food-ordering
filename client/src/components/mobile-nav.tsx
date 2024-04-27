import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500 h-7 w-7" />
            </SheetTrigger>
            <SheetContent className="space-y-4" >
                <SheetTitle>Welcome to MernEats.com</SheetTitle>
                <Separator />
                <SheetDescription className="flex" >
                    <Button className="flex-1 font-bold bg-orange-500 hover:bg-orange-400 transition" >Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
} 