import heroImg from "../assets/hero.png"


export const Hero = () => {
    return (
        <div>
            <img src={heroImg} alt="" className="w-full max-h-[600px] object-cover" />
        </div>
    )
}