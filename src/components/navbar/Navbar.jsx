import { useStore } from "@nanostores/react";
import { scrollToSection } from "../../helpers/Scroller.jsx";
import { contact, faq, howItWorks, pricing } from "../../helpers/ScrollStore.js";

const Navbar = () => {
    const steps = useStore(howItWorks);
    const pricingCards = useStore(pricing);
    const faqs = useStore(faq);
    const contactUs = useStore(contact);
    return (
        <nav className="hidden lg:flex lg:flex-row lg:justify-around lg:pt-4 lg:pb-2 lg:items-center">
            <h3 className=" text-gray-700 font-bold text-2xl">UniCraft</h3>
            <ul className="basis-1/4 flex flex-row justify-between">
                <li onClick={() => scrollToSection(steps)} className="text-gray-700 text-lg font-medium cursor-pointer hover:-translate-y-1 hover:text-purple-600 hover:ease-in hover:delay-100 hover:duration-100">How it works</li>
                <li onClick={() => scrollToSection(pricingCards)} className="text-gray-700 text-lg font-medium cursor-pointer hover:-translate-y-1 hover:text-purple-600 hover:ease-in hover:delay-100 hover:duration-100">Pricing</li>
                <li onClick={() => scrollToSection(faqs)} className="text-gray-700 text-lg font-medium cursor-pointer hover:-translate-y-1 hover:text-purple-600 hover:ease-in hover:delay-100 hover:duration-100">FAQ</li>
            </ul>
            <button onClick={() => scrollToSection(contactUs)} className="text-gray-600 text-lg font-bold border-gray-600 rounded-lg border-2 w-36 h-12 hover:-translate-y-1 hover:bg-gray-700 hover:text-gray-50 hover:ease-in hover:duration-100 hover:delay-100">Contact us</button>
        </nav>
    )
}

export default Navbar;