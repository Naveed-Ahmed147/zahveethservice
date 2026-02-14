import { ArrowRight, Cpu, Globe, Smartphone, ShieldCheck, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at 50% 50%, #F5F5F7 0%, #FFFFFF 100%)' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
                        Zahveeth Service LLC
                    </h1>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
                        Building intelligent software powered by AI. We verify and legitimize digital innovation.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
                        <Link to="/contact" style={{
                            background: 'var(--text-primary)',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '980px',
                            fontWeight: 500,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            Get in Touch <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            padding: '12px 24px',
                            borderRadius: '980px',
                            fontWeight: 500
                        }}>
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust / Legitimacy Section */}
            <section className="section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
                        <div className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                            <ShieldCheck size={24} color="var(--accent-blue)" />
                            <span style={{ fontWeight: 600 }}>Apple Developer Organization</span>
                        </div>
                        <div className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                            <Zap size={24} color="var(--accent-blue)" />
                            <span style={{ fontWeight: 600 }}>Fast & Secure</span>
                        </div>
                        <div className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                            <Layers size={24} color="var(--accent-blue)" />
                            <span style={{ fontWeight: 600 }}>Scalable Solutions</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Our Expertise</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Comprehensive technology solutions for modern businesses.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
                        <ServiceCard
                            icon={<Cpu size={40} strokeWidth={1.5} />}
                            title="AI & Machine Learning"
                            description="Intelligent algorithms that optimize processes and create new value."
                        />
                        <ServiceCard
                            icon={<Smartphone size={40} strokeWidth={1.5} />}
                            title="Mobile App Development"
                            description="Native and cross-platform mobile applications designed for user engagement."
                        />
                        <ServiceCard
                            icon={<Globe size={40} strokeWidth={1.5} />}
                            title="Web Platforms"
                            description="Scalable, responsive web applications built on modern frameworks."
                        />
                    </div>
                </div>
            </section>

            {/* Products / Apps Teaser */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Innovation at Core</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>Discover our suite of intelligent products.</p>
                        </div>
                        <Link to="/products" style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
                            View All Apps <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div style={{ background: 'white', borderRadius: '24px', padding: 'var(--spacing-xl)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>AI-Powered Solutions</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                            We are currently developing a range of consumer-facing applications that leverage the power of artificial intelligence to simplify daily tasks.
                        </p>
                        <div style={{ display: 'inline-flex', gap: 'var(--spacing-sm)' }}>
                            <span style={{ padding: '6px 12px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Coming Soon</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ServiceCard = ({ icon, title, description }) => (
    <div style={{
        padding: 'var(--spacing-xl)',
        borderRadius: '24px',
        background: 'var(--bg-secondary)',
        transition: 'transform 0.2s ease',
        cursor: 'default'
    }}>
        <div style={{ color: 'var(--accent-blue)', marginBottom: 'var(--spacing-md)' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
    </div>
);

export default Home;
