import Logo from "../assets/Logo.png"
import Social1 from "../assets/social1.png"
import Social2 from "../assets/social2.png"
import Social3 from "../assets/social3.png"

const Footer = () => {
  return (
    <section id="footer" className="flex md:flex-row flex-col md:gap-0 gap-6 md:items-center items-start justify-between py-10">
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col items-start gap-y-2 ">
            <p className="text-white text-xl">Contact</p>
            <button className="text-primary-500 hover:text-white transition duration-500 text-sm">Our Team</button>
            <button className="text-primary-500 hover:text-white transition duration-500 text-sm">Our Works</button>
        </div>
        <div className="flex flex-col items-start gap-y-2">
            <p className="text-white text-xl">More</p>
            <button className="text-primary-500 hover:text-white transition duration-500 text-sm">About Us</button>
            <button className="text-primary-500 hover:text-white transition duration-500 text-sm">Location</button>
        </div>
        <div className="flex flex-col items-start gap-y-2">
            <p className="text-white text-xl">Legal</p>
            <button className="text-primary-500 hover:text-white transition duration-500 text-sm">Privacy Policy</button>
            <button className="text-primary-500 hover:text-white transition duration-500 text-sm">Security</button>
        </div>
        <div className="flex gap-4">
            <img src={Social1} alt="" />
            <img src={Social2} alt="" />
            <img src={Social3} alt="" />
        </div>
    </section>
  )
}

export default Footer