import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: "AI Application Development",
            description: "Custom AI solutions tailored to your business needs, from predictive analytics to natural language processing.",
            features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision Integration"]
        },
        {
            title: "Mobile App Development",
            description: "State-of-the-art iOS and Android applications built with performance and user experience in mind.",
            features: ["Native iOS & Android", "Cross-Platform (React Native)", "App Store Optimization"]
        },
        {
            title: "Web Platform Development",
            description: "Robust, scalable, and secure web applications that power modern businesses and startups.",
            features: ["Modern Frontend Frameworks", "Secure Backend Systems", "Cloud Infrastructure"]
        },
        {
            title: "SaaS Product Development",
            description: "End-to-end development of Software as a Service products, from ideation to deployment.",
            features: ["MVP Development", "Scalable Architecture", "Subscription Management"]
        }
    ];

    return (
        <>
            <div className="section hero-bg" style={{ padding: '80px 0' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px' }}>
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        We provide cutting-edge technology services designed to help your business grow and innovate in a rapidly evolving digital landscape.
                    </p>
                </div>
            </div>

            <div className="container section" style={{ paddingTop: 0 }}>
                <div style={{ display: 'grid', gap: '30px' }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '40px',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                                <div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{service.title}</h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>{service.description}</p>
                                </div>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {index + 1}
                                </div>
                            </div>

                            <div style={{ width: '100%', height: '1px', background: 'var(--border-color)', opacity: 0.5 }}></div>

                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: 'rgba(255,255,255,0.8)',
                                        border: '1px solid var(--border-color)',
                                        padding: '8px 16px',
                                        borderRadius: '100px'
                                    }}>
                                        <CheckCircle size={16} color="var(--accent-blue)" />
                                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Need something specific?</h3>
                    <Link to="/contact" style={{
                        color: 'var(--accent-blue)',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Contact us for a custom consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Services;
