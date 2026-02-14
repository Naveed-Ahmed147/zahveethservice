import { ArrowRight, Cpu, Globe, Smartphone, ShieldCheck, Zap, Layers, BarChart, Code, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';
import innovationImg from '../assets/innovation.jpg';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="section hero-bg" style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container text-center">
                    <div className="animate-float" style={{ marginBottom: 'var(--spacing-md)', display: 'inline-block', padding: '8px 16px', background: 'rgba(0, 102, 204, 0.1)', borderRadius: '20px', color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', backdropFilter: 'blur(5px)' }}>
                        Next-Gen Technology Solutions
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-2px', marginBottom: 'var(--spacing-md)', lineHeight: 1.1 }}>
                        Innovating for a <br />
                        <span className="gradient-text">Smarter Future</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)', lineHeight: 1.6, fontWeight: 500 }}>
                        Zahveeth Service LLC empowers businesses with cutting-edge AI, mobile, and web technologies. We turn complex challenges into elegant, intelligent solutions.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
                        <Link to="/contact" style={{
                            background: 'var(--text-primary)',
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '980px',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'transform 0.2s ease',
                            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.2)'
                        }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                        <Link to="/services" style={{
                            background: 'rgba(255,255,255,0.8)',
                            color: 'var(--text-primary)',
                            padding: '16px 32px',
                            borderRadius: '980px',
                            fontWeight: 600,
                            border: '1px solid var(--border-color)',
                            transition: 'background 0.2s ease',
                            backdropFilter: 'blur(5px)'
                        }}
                            onMouseOver={(e) => e.target.style.background = 'white'}
                            onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.8)'}
                        >
                            Explore Services
                        </Link>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-xxl)', display: 'flex', justifyContent: 'center', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '150px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>98%</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Client Satisfaction</span>
                        </div>
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '150px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>50+</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects Delivered</span>
                        </div>
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '150px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>24/7</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Support & Maint.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust / Features Grid */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Why Choose Us</span>
                        <h2 style={{ fontSize: '3rem', marginTop: 'var(--spacing-sm)' }}>Engineered for Excellence</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        <FeatureCard
                            icon={<ShieldCheck size={32} />}
                            title="Secure & Reliable"
                            desc="Enterprise-grade security protocols integrated into every layer of our applications."
                        />
                        <FeatureCard
                            icon={<Zap size={32} />}
                            title="High Performance"
                            desc="Optimized for speed and efficiency, ensuring minimal load times and smooth interactions."
                        />
                        <FeatureCard
                            icon={<Layers size={32} />}
                            title="Scalable Architecture"
                            desc="Built to grow with your business, handling increased loads without compromising stability."
                        />
                        <FeatureCard
                            icon={<Code size={32} />}
                            title="Clean Code"
                            desc="Maintainable, well-documented codebases that follow industry best practices."
                        />
                        <FeatureCard
                            icon={<Users size={32} />}
                            title="User-Centric Design"
                            desc="Interfaces designed with the end-user in mind, prioritizing intuitive navigation."
                        />
                        <FeatureCard
                            icon={<BarChart size={32} />}
                            title="Data-Driven Insights"
                            desc="Integrated analytics to help you make informed business decisions."
                        />
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section" style={{ background: 'var(--text-primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-xxl)', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>End-to-End <br /><span style={{ color: 'var(--accent-blue)' }}>Development</span></h2>
                            <p style={{ fontSize: '1.2rem', color: '#86868b', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                                From initial concept to final deployment, we handle every aspect of the software development lifecycle. Our team of experts works closely with you to bring your vision to life.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                    Custom Software Solutions
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                    Cloud Infrastructure & DevOps
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                    UI/UX Design & Prototyping
                                </li>
                            </ul>
                            <Link to="/services" style={{ color: 'var(--accent-blue)', fontSize: '1.1rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                View All Services <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                paddingBottom: '75%',
                                backgroundImage: `url(${innovationImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '30px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                                <div style={{ position: 'absolute', bottom: '30px', left: '30px' }}>
                                    <span style={{ background: 'var(--accent-blue)', color: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>AI Powered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section text-center" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Ready to Transform Your Business?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
                        Let's discuss how we can help you achieve your goals with our innovative technology solutions.
                    </p>
                    <Link to="/contact" style={{
                        background: 'var(--accent-blue)',
                        color: 'white',
                        padding: '16px 40px',
                        borderRadius: '980px',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        display: 'inline-block',
                        boxShadow: '0 10px 20px rgba(0, 102, 204, 0.2)'
                    }}>
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="glass-card" style={{
        padding: '30px',
        borderRadius: '24px',
        background: 'white',
        border: '1px solid var(--border-color)',
        transition: 'all 0.3s ease'
    }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.07)'; }}
    >
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'var(--bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue)',
            marginBottom: 'var(--spacing-lg)'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
    </div>
);

export default Home;
