import './Footer.css';
import { iconData, HeaderIcon } from '../../data/HeaderIconData';
import { socialiconData } from '../../data/SocialIconData';
import { useEffect, useState } from 'react';

export const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vishnu Priyan J.</h1>

                <ul className="footer__list">
                    {iconData.map((link, index) => {
                        return(
                            <li key={index}>
                                <a href={`#${link.href}`} className="footer__link">
                                    {link.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='footer__social'>
                    {socialiconData.map((item, index) => {
                        return (
                            <a href={item.link} className="footer__social-link" target={"_blank"} key={index}>
                                <i className={`uil uil-${item.icon}`}></i>
                            </a>
                        )
                    })}
                </div>
                <span className="footer__copy">&#169; Vishnupriyan, All rights reserved</span>
            </div>
        </footer>
    );
};
