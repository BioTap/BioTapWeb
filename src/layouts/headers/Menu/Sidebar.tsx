"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

import logo_1 from "@/assets/img/logo/logo.png";

const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={`mobile-menu-overlay ${isActive ? "mobile-menu-visible" : ""}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            display: isActive ? 'block' : 'none'
        }}>
            <div className="mobile-menu" style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '320px',
                height: '100%',
                backgroundColor: '#1a1a1a',
                transform: isActive ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                zIndex: 10000,
                overflowY: 'auto'
            }}>
                <nav className="menu-box" style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Header with close button and logo */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginBottom: '30px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div className="nav-logo">
                            <Link href="/" onClick={() => setIsActive(false)}>
                                <div className="mobile-logo-container" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    padding: '8px'
                                }}>
                                    <Image 
                                        src={logo_1} 
                                        alt="BioTap" 
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            objectFit: 'contain',
                                            filter: 'brightness(0) invert(1)'
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div 
                            onClick={() => setIsActive(false)} 
                            className="close-btn" 
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                color: '#fff',
                                fontSize: '18px'
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="menu-outer" style={{ flex: 1, marginBottom: '30px' }}>
                        <MobileMenu setIsActive={setIsActive} />
                    </div>

                    {/* Social Links */}
                    <div className="social-links" style={{ 
                        paddingTop: '20px', 
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        marginTop: 'auto'
                    }}>
                        <p style={{ 
                            color: '#fff', 
                            marginBottom: '15px', 
                            fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            Follow Us
                        </p>
                        <ul className="clearfix list-wrap" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px',
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            <li>
                                <a href="https://facebook.com/" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div 
                onClick={() => setIsActive(false)} 
                className="menu-backdrop" 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 9998
                }}
            ></div>
        </div>
    )
}

export default Sidebar