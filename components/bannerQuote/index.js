import React from 'react'
import styles from './BannerQuote.module.css'

export default function BannerQuote() {
    return (
      <div className={`${styles.bannerQuote}`}>
        <div className={`${styles.bannerQuoteContainer}`}>
            <p>Probabo, inquit, modo ista sis aequitate, quam nihil ut alterum aspernandum sentiamus alii autem</p>
        </div>
      </div>
    )
  }