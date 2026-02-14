import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you soon.");
    };

    return (
        <div className="section hero-bg" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '16px', display: 'block' }}>Contact Us</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px' }}>
                        Let's Start a <span className="gradient-text">Conversation</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Contact Information</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <ContactInfoItem
                                icon={<Mail size={24} />}
                                title="Email Us"
                                content="contact@zahveethservice.online"
                                link="mailto:contact@zahveethservice.online"
                            />
                            <ContactInfoItem
                                icon={<MapPin size={24} />}
                                title="Visit Us"
                                content="123 Tech Avenue, Silicon City, CA 94000"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send a Message</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Name</label>
                                <input type="text" id="name" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.8)', fontSize: '1rem', transition: 'border-color 0.2s' }} placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                                <input type="email" id="email" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.8)', fontSize: '1rem', transition: 'border-color 0.2s' }} placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                                <textarea id="message" rows="5" required style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.8)', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit' }} placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" style={{
                                background: 'var(--accent-blue)',
                                color: 'white',
                                padding: '16px 24px',
                                borderRadius: '980px',
                                fontWeight: 600,
                                fontSize: '1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                marginTop: '10px',
                                boxShadow: '0 4px 12px rgba(0, 102, 204, 0.3)',
                                transition: 'transform 0.2s'
                            }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactInfoItem = ({ icon, title, content, link }) => (
    <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: 'var(--accent-blue)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
        }}>
            {icon}
        </div>
        <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{title}</h3>
            {link ? (
                <a href={link} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>{content}</a>
            ) : (
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{content}</p>
            )}
        </div>
    </div>
);

export default Contact;
