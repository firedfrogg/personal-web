/**
 * @copyright 2024 firedfrogg
 * @license Apache-2.0
 */

/**
 *
 * Node Modules
 */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from 'lenis/react';

/**
 *
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 *
 * Components
 */
import About from "./components/About";
import Contact from "./components/Contact";
import DatsciPorto from './components/DatsciPorto';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Footer from "./components/footer";


const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        console.log(elements);
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                },
                y:0,
                opacity:1,
                duration:1,
                ease: 'power2.out'
            })
        });
    })
    
    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <DatsciPorto />
                <Contact />
                <Footer />
            </main>
        </ReactLenis>
    )
}

export default App;