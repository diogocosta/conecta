import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import logo from './conecta.svg'
import Menu from '../menu'

export const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) { setShow(false); 
      } else { setShow(true); }
  
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${show ? styles.headerVisibled : ''}`}>
            <div className={`${styles.headerContainer}`}>
                <div>
                    <a href="/"><Image src={logo} alt="Conecta" /></a>
                </div>

                <Menu />
            </div>
      </header>
    )
};