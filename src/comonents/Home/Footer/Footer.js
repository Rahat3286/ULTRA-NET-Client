import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterCard from '../FooterCard/FooterCard';

const Footer = () => {
    const noNamed = [
        { name: "Package 1", link: "/packages" },
        { name: "Package 2", link: "/packages" },
        { name: "Package 3", link: "/packages" },
        { name: "Package without features", link: "/packages" }
    ]
    const ContactWithUs = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" }

    ]
    const ourProducts = [
        { name: "Telsvision", link: "/television" },
        { name: "Internet", link: "/internet" },
        { name: "Phone", link: "/phone" },
        { name: "Security", link: "/security" },
        { name: "Business Service", link: "/Services" }
    ]
    const ImportantLinks = [
        { name: "Support", link: "/support" },
        { name: "Privacy & Policy", link: "/policy" },
        { name: "Terms & Conditions", link: "/terms" },
        { name: "Packages", link: "/packages" },
        { name: "Our Network", link: "/network" }
    ]
    return (
        <footer className="footer-area clear-both mt-5 pb-5" style={{ backgroundColor: 'rgb(37,31,86)' }}>
            <div className="container text-center pt-5">
                <div className="row py-5">
                    <FooterCard key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCard key={2} menuTitle="Important Links" menuItems={ImportantLinks} />
                    <FooterCard key={3} menuTitle="Our Products" menuItems={ourProducts} />
                    <FooterCard key={4} menuTitle="Contact with us" menuItems={ContactWithUs}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-info text-white"><FontAwesomeIcon icon={faPhone} /> +413-2619-789</button>
                        </div>
                    </FooterCard>
                </div>
                <div className="copyRight text-center">
                    <p className="text-white">Copyright {(new Date()).getFullYear()} || All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;