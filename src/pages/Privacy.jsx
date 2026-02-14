const Privacy = () => {
    return (
        <div className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>Last updated: 2026</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>1. Introduction</h2>
                        <p>Your privacy is important to us. It is Zahveeth Service LLC's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://zahveethservice.online">https://zahveethservice.online</a>, and other sites we own and operate.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>2. Information We Collect</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            We may collect information you provide directly to us, such as when you fill out a form, request support, or communicate with us. This may include your name, email address, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>3. How We Use Your Information</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information such as updates and support messages.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>4. Contact Us</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@zahveethservice.online" style={{ color: 'var(--accent-blue)' }}>contact@zahveethservice.online</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
