import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    Zahveeth Service LLC
                </Link>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: 'var(--header-height)',
                        left: 0,
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderBottom: '1px solid var(--border-color)',
                        padding: 'var(--spacing-md) 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    <Link to="/about" className="nav-link" style={{ fontSize: '1.1rem' }}>About Us</Link>
                    <Link to="/services" className="nav-link" style={{ fontSize: '1.1rem' }}>Services</Link>
                    <Link to="/products" className="nav-link" style={{ fontSize: '1.1rem' }}>Products</Link>
                    <Link to="/contact" className="nav-link" style={{ fontSize: '1.1rem' }}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
