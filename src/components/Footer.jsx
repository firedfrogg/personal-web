/**
 * @copyright 2024 firedfrogg
 * @license Apache-2.0
 */

/**
 *
 * Node Modules
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Datsci Portos',
        href: '#datsciskill'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/firedfrogg'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/julian-a-621916245/'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/julian_lex23'
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                        href="mailto:firedfrog23gmail.com"
                        label="Start Contacting"
                        icon="chevron_right"
                        classes="reveal-up"/>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div className="">
                            <p className="mb-2">
                                Sitemap
                            </p>
                            <ul>
                                {sitemap.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a
                                        href={href}
                                        className="block text-sm
                                        text-zinc-400 py-1 transition-colors
                                        hover:text-zinc-200 reveal-up">
                                            {label }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="">
                                Socials
                            </p>
                            <ul>
                                {socials.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a
                                        href={href}
                                        target="_blank"
                                        className="block text-sm
                                        text-zinc-400 py-1 transition-colors
                                        hover:text-zinc-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className="logo reveal-up">
                        <img
                        src="/images/logo.svg"
                        width={40}
                        height={40}
                        alt="logo" />
                    </a>

                    <p
                    className="text-zinc-500 text-sm reveal-up ">
                        &copy; 2024 <span className="text-zinc-200">firedfrogg</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer