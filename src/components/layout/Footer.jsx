import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div>
                    <p className="footer-text" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                        Zahveeth Service LLC
                    </p>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>Email: <a href="mailto:contact@zahveethservice.online">contact@zahveethservice.online</a></p>
                        <p>Location: Silicon City, CA</p>
                    </div>
                    <p className="footer-text">
                        &copy; {currentYear} Zahveeth Service LLC. All rights reserved.
                    </p>
                </div>

                <ul className="footer-links">
                    <li><Link to="/privacy" className="footer-text nav-link">Privacy Policy</Link></li>
                    <li><Link to="/contact" className="footer-text nav-link">Contact</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
