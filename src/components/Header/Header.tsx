import './Header.css';
import { HeaderIcon, iconData } from "../../data/HeaderIconData";
import { useRef, useState } from 'react';

export const Header = () => {

    const data: HeaderIcon[] = iconData;
    const [menu, setShowMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const headerRef = useRef<HTMLElement>(null);

    window.addEventListener('scroll', () => {
        const header = headerRef.current;
        if(window.scrollY >= 80) {
            header?.classList.add('scroll-header');
        } else {
            header?.classList.remove('scroll-header');
        }
    });

    return (
        <>
            <header className="header" ref={headerRef}>
                <nav className="nav container">
                    <a href="/" className="nav__logo">Vishnu Priyan</a>

                    <div className={menu ? "nav__menu show__menu" : "nav__menu"}>
                        <ul className="nav__list">
                            {data.map((item, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <a href={`#${item.href}`} className={activeNav === item.href ? "nav__link active__link" : "nav__link"} onClick={() => setActiveNav(item.href)}>
                                            <i className={`uil uil-${item.icon} nav__icon`}></i> {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <i className="uil uil-times nav__close" onClick={() => setShowMenu(!menu)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => setShowMenu(!menu)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}