import { CheckCircle } from 'lucide-react';

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
        },
        {
            title: "Digital Innovation Consulting",
            description: "Strategic guidance to help you leverage the latest technologies and stay ahead of the curve.",
            features: ["Tech Stack Advisory", "Digital Transformation", "Product Strategy"]
        }
    ];

    return (
        <>
            <div className="container section text-center">
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Our Services</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                    We provide cutting-edge technology services designed to help your business grow and innovate.
                </p>
            </div>

            <div className="container section" style={{ paddingTop: 0 }}>
                <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            padding: 'var(--spacing-xl)',
                            background: 'var(--bg-secondary)',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)'
                        }}>
                            <h2 style={{ fontSize: '1.75rem' }}>{service.title}</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{service.description}</p>
                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-sm)' }}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', padding: '8px 16px', borderRadius: '12px' }}>
                                        <CheckCircle size={16} color="var(--accent-blue)" />
                                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
