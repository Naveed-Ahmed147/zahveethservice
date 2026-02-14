import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
    return (
        <>
            {/* Hero */}
            <div className="section hero-bg" style={{ textAlign: 'center', padding: '100px 0 60px' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '16px', display: 'block' }}>Who We Are</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: 'var(--spacing-lg)' }}>
                        Driving <span className="gradient-text">Digital Evolution</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                        Zahveeth Service LLC is a forward-thinking technology company dedicated to building intelligent solutions that empower businesses and individuals.
                    </p>
                </div>
            </div>

            <div className="container section" style={{ paddingTop: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
                    <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div style={{ padding: '12px', background: 'rgba(0,102,204,0.1)', borderRadius: '12px', color: 'var(--accent-blue)' }}>
                                <Target size={32} />
                            </div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>Our Mission</h2>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            To democratize access to intelligent technology. We believe that AI and machine learning should be accessible, usable, and beneficial to everyone, enhancing everyday experiences through intuitive software solutions.
                        </p>
                    </div>

                    <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div style={{ padding: '12px', background: 'rgba(0,102,204,0.1)', borderRadius: '12px', color: 'var(--accent-blue)' }}>
                                <Lightbulb size={32} />
                            </div>
                            <h2 style={{ fontSize: '2rem', margin: 0 }}>Our Vision</h2>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            We envision a future where technology seamlessly integrates into daily life, solving complex problems with elegance. We strive to be at the forefront of this transformation, setting new standards for innovation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Core Values</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>The principles that guide every product we build.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <ValueItem icon={<Users />} title="User First" desc="We design with empathy for the end-user." />
                        <ValueItem icon={<Award />} title="Excellence" desc="We never compromise on code quality." />
                        <ValueItem icon={<Lightbulb />} title="Innovation" desc="We constantly push boundaries." />
                        <ValueItem icon={<Target />} title="Integrity" desc="We build trust through transparency." />
                    </div>
                </div>
            </div>
        </>
    );
};

const ValueItem = ({ icon, title, desc }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{
            width: '60px',
            height: '60px',
            margin: '0 auto 20px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{desc}</p>
    </div>
);

export default About;
