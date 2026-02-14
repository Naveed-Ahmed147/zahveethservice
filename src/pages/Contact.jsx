import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you soon.");
    };

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: 'var(--spacing-xxl)' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Get in Touch</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    Have a project in mind or want to learn more about our services? We'd love to hear from you.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xxl)' }}>
                {/* Contact Info */}
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)' }}>Contact Information</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Mail size={20} color="var(--accent-blue)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h3>
                                <a href="mailto:contact@zahveethservice.com" style={{ color: 'var(--text-secondary)' }}>contact@zahveethservice.com</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <MapPin size={20} color="var(--accent-blue)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Location</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>City, Country</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-xl)', borderRadius: '24px' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Name</label>
                            <input type="text" id="name" required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white' }} />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email</label>
                            <input type="email" id="email" required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white' }} />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
                            <textarea id="message" rows="4" required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white', resize: 'vertical' }}></textarea>
                        </div>
                        <button type="submit" style={{
                            background: 'var(--accent-blue)',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '980px',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            marginTop: 'var(--spacing-sm)'
                        }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
