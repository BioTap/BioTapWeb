"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
// internal
import menu_data from "../../../data/MenuData";

const MobileMenus = ({ setIsActive }: any) => {
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: any) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: any) => {
        return currentRoute === subMenuLink;
    };

    const closeSidebar = () => {
        setIsActive(false);
    };


    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <ul className="navigation" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menu_data.filter((items) => items.page === "nav_1").map((menu, i) => (
                <React.Fragment key={i}>
                    {menu.has_dropdown && (
                        <li className="menu-item-has-children" style={{ marginBottom: '8px' }}>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                padding: '12px 16px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                marginBottom: '4px'
                            }}>
                                <Link 
                                    href={menu.link} 
                                    onClick={closeSidebar}
                                    className={`mobile-menu-link ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        flex: 1
                                    }}
                                >
                                    {menu.title}
                                </Link>
                                <div
                                    className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                                    onClick={() => openMobileMenu(menu.title)}
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        color: '#fff',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <i className={`${navTitle === menu.title ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                                </div>
                            </div>
                            {menu.sub_menus && menu.sub_menus.length > 0 && (
                                <ul className="sub-menu" style={{ 
                                    display: navTitle === menu.title ? "block" : "none",
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    marginLeft: '20px'
                                }}>
                                    {menu.sub_menus.map((sub, index) => (
                                        <li key={index} style={{ marginBottom: '4px' }}>
                                            <Link 
                                                href={sub.link} 
                                                onClick={closeSidebar}
                                                className={sub.link && isSubMenuItemActive(sub.link) ? "active" : ""}
                                                style={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    textDecoration: 'none',
                                                    fontSize: '14px',
                                                    padding: '8px 16px',
                                                    display: 'block',
                                                    borderRadius: '6px',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )}
                    {!menu.has_dropdown && (
                        <li className="menu-item-has-children" style={{ marginBottom: '8px' }}>
                            <Link 
                                onClick={closeSidebar} 
                                href={menu.link} 
                                className={`mobile-menu-link ${currentRoute === menu.link ? "active" : ""}`}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    padding: '12px 16px',
                                    display: 'block',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {menu.title}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}

export default MobileMenus;
