import {  useState } from "react"
import Logo from "../assets/Logo.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import MenuIcon from "../assets/menu-icon.svg"
import CloseIcon from "../assets/close-icon.svg"

const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-100" : ""}
    hover:text-primary-100 transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopOfPage  ? "" : "";

  
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 text-white`}>
     <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={Logo} alt="logo" />
        {/* DESKTOP NAV */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-montserrat text-sm font-semibold">
            <Link page="Home"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Skills"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Projects"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Testimonials"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <button>Contact</button>
          </div>
        ):(<button className="rounded-full bg-primary-100 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <img src={MenuIcon} alt="menu-icon" />
        </button>)}
        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-primary-300 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src={CloseIcon} alt="close-icon" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-primary-500">
              <Link page="Home"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Skills"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Projects"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Testimonials"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
          </div>
        )}
     </div>
            
    </nav>
  )
}

export default Navbar