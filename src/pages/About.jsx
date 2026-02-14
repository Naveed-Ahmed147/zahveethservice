const About = () => {
    return (
        <>
            <div className="container section text-center">
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>About Us</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                    Zahveeth Service LLC is a technology company focused on building AI-powered mobile and web applications.
                </p>
            </div>

            <div className="container section" style={{ paddingTop: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xxl)' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Our mission is to democratize access to intelligent technology. We believe that AI and machine learning should be accessible, usable, and beneficial to everyone, enhancing everyday experiences through intuitive software solutions.
                        </p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Our Vision</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            We envision a future where technology seamlessly integrates into daily life, solving complex problems with elegance and simplicity. We strive to be at the forefront of this transformation, setting new standards for digital innovation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>Leadership</h2>
                    <div style={{
                        background: 'white',
                        borderRadius: '24px',
                        padding: 'var(--spacing-xl)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        textAlign: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#eee', margin: '0 auto var(--spacing-md)' }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Founder Name</h3>
                        <p style={{ color: 'var(--accent-blue)', fontWeight: 500, marginBottom: 'var(--spacing-md)' }}>Founder & CEO</p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Dedicated to driving innovation in the software industry and leading Zahveeth Service LLC towards technological excellence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
