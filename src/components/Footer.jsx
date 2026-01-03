export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#EDF0EB',
            padding: '32px 24px',
            borderTop: '1px solid #D1D5D0'
        }}>
            <div style={{
                maxWidth: '1152px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
            }}>
                
                {/* Left - Copyright */}
                <p style={{
                    color: '#2C2C2C',
                    fontSize: '14px',
                    margin: 0
                }}>
                    © 2025 Caleb Studdie. All rights reserved.
                </p>

                {/* Right - Social Links */}
                <div style={{
                    display: 'flex',
                    gap: '24px',
                    fontSize: '14px'
                }}>
                    <a 
                        href="https://github.com/cstuddie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://linkedin.com/in/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="mailto:calebstuddie@gmail.com"
                        className="social-link"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}