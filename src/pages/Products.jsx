import { Smartphone, Layout, Zap, ArrowRight } from 'lucide-react';

const Products = () => {
    const products = [
        {
            title: "TaskMaster AI",
            category: "Productivity",
            description: "An intelligent task management app that organizes your day automatically.",
            status: "In Development",
            icon: <Layout size={32} color="white" />
        },
        {
            title: "HealthSync",
            category: "Health & Fitness",
            description: "AI-driven health monitoring and personalized wellness plans.",
            status: "Coming Soon",
            icon: <Zap size={32} color="white" />
        },
        {
            title: "EduLearn",
            category: "Education",
            description: "Adaptive learning platform for students of all ages.",
            status: "Concept",
            icon: <Smartphone size={32} color="white" />
        }
    ];

    return (
        <>
            <div className="container section text-center">
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Our Products</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                    Discover our suite of innovative applications designed to enhance your digital life.
                </p>
            </div>

            <div className="container section" style={{ paddingTop: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
                    {products.map((product, index) => (
                        <div key={index} style={{
                            background: 'white',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            border: '1px solid var(--border-color)',
                            transition: 'transform 0.3s ease',
                        }}>
                            <div style={{ padding: 'var(--spacing-xl)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
                                <div style={{ width: '80px', height: '80px', background: 'var(--accent-blue)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0,102,204,0.2)' }}>
                                    {product.icon}
                                </div>
                            </div>
                            <div style={{ padding: 'var(--spacing-xl)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.category}</span>
                                    <span style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'var(--bg-secondary)', borderRadius: '6px', color: 'var(--text-primary)' }}>{product.status}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{product.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>{product.description}</p>
                                <button style={{ color: 'var(--accent-blue)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    Learn More <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
