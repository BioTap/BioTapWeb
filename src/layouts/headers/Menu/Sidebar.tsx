"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LanguageToggle from "@/components/LanguageToggle";

import logo_1 from "@/assets/img/logo/logo.png";

const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={`mobile-menu-overlay ${isActive ? "mobile-menu-visible" : ""}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999
        }}>
            <div className="mobile-menu" style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '75%',
                maxWidth: '320px',
                height: '100%',
                backgroundColor: '#1a1a1a',
                transform: isActive ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                zIndex: 10000,
                overflowY: 'auto',
                boxShadow: isActive ? '-10px 0 30px rgba(0, 0, 0, 0.3)' : 'none'
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
                                <Image 
                                    src={logo_1} 
                                    alt="BioTap" 
                                    style={{
                                        height: '40px',
                                        width: 'auto',
                                        objectFit: 'contain',
                                        filter: 'brightness(0) invert(1)'
                                    }}
                                />
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

                    {/* Language Toggle */}
                    <div style={{ 
                        marginBottom: '20px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <LanguageToggle />
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
                                <a href="https://twitter.com/Biotapservices" style={{
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
                                <a href="https://www.instagram.com/Biotap_services" style={{
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
                                <a href="https://www.linkedin.com/in/Biotapservices" style={{
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
                    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
                    transition: 'background-color 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    zIndex: 9998,
                    backdropFilter: isActive ? 'blur(4px)' : 'blur(0px)',
                    WebkitBackdropFilter: isActive ? 'blur(4px)' : 'blur(0px)'
                }}
            ></div>
        </div>
    )
}

export default Sidebar