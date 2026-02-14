import { Smartphone, Layout, Zap, ArrowRight, Star } from 'lucide-react';

const Products = () => {
    const products = [
        {
            title: "TaskMaster AI",
            category: "Productivity",
            description: "An intelligent task management app that partially automates your daily workflow using predictive algorithms.",
            status: "In Development",
            icon: <Layout size={32} color="white" />,
            rating: "4.8"
        },
        {
            title: "HealthSync",
            category: "Health & Fitness",
            description: "AI-driven health monitoring that integrates with wearable devices to provide personalized wellness plans.",
            status: "Coming Soon",
            icon: <Zap size={32} color="white" />,
            rating: "4.9"
        },
        {
            title: "EduLearn",
            category: "Education",
            description: "Adaptive learning platform that personalizes curriculum based on student performance and learning style.",
            status: "Concept",
            icon: <Smartphone size={32} color="white" />,
            rating: "4.7"
        }
    ];

    return (
        <>
            <div className="section hero-bg" style={{ textAlign: 'center', padding: '80px 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '16px', display: 'block' }}>Innovation</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px' }}>
                        Our <span className="gradient-text">Products</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        Discover our suite of innovative applications designed to simplify complexity and enhance your digital life.
                    </p>
                </div>
            </div>

            <div className="container section" style={{ paddingTop: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {products.map((product, index) => (
                        <div key={index} className="glass-card" style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ padding: '40px', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, #fff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '220px', position: 'relative' }}>
                                <div style={{ width: '80px', height: '80px', background: 'var(--accent-blue)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,102,204,0.3)', zIndex: 2 }}>
                                    {product.icon}
                                </div>
                                {/* Decorative Elements */}
                                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.5)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>
                                    {product.status}
                                </div>
                            </div>

                            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.category}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}>
                                        <Star size={14} fill="#FFD700" stroke="#FFD700" /> {product.rating}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>{product.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1, lineHeight: 1.6 }}>{product.description}</p>
                                <div style={{ marginTop: 'auto' }}>
                                    <button style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', padding: '0', transition: 'gap 0.2s ease' }}
                                        onMouseOver={(e) => e.target.style.gap = '12px'}
                                        onMouseOut={(e) => e.target.style.gap = '8px'}
                                    >
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
