import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav style={{
            position:'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#F9FAF8',
            padding: '20px 24px',
            borderBottom: '1px solid #EDF0EB',
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <div style={{
                maxWidth: '1152px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                
                {/* Left - Your Name */}
                <a 
                   href="#home"
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#2C2C2C',
                        textDecoration: 'none'
                    }}
                >
                    CALEB STUDDIE
                </a>

                {/* Right - Navigation Links */}
                <div style={{
                    display: 'flex',
                    gap: '32px',
                    fontSize: '16px'
                }}>
                     <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}