import React, { useState, useEffect } from 'react'
import styles from './Menu.module.css'
import MenuItem from './menuItem'

const menuItems = {
  welcome: 'Início',
  about: 'Sobre nós',
  products: 'Produtos',
  business: 'Clientes e Parceiros',
}

const Menu = () => {
  const [activeItem, setActiveItem] = useState('welcome');

  const menuList = Object.entries(menuItems).map((a, e) =>
    <MenuItem itemHref={a[0]} itemName={a[1]} key={`menuitem_${e}`} active={e === activeItem ? 'isActive' : ''} />
  )

  return (
    <nav className={`${styles.mainNav}`}>
        {menuList}
        <a href="mailto:contato@conectamr.com.br" className={`${styles.mainNavButton}`}>Fale Conosco</a>
    </nav>
  );
}

export default Menu