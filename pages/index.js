import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import * as DATA from '../data.json'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Cung Hoàng Đạo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cung Hoàng Đạo
        </h1>

        <p className={styles.description}>
          Tìm hiểu thêm tại{' '}
          <code className={styles.code}><a href="https://vi.wikipedia.org/wiki/Cung_Ho%C3%A0ng_%C4%90%E1%BA%A1o">đây</a></code>
        </p>

        <div className={styles.grid}>
          {
            DATA.map(item => (
              <Link href={item.query} key={item.query}>
                <a className={styles.card}>
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.date}</p>
                  </div>
                  <img className={styles.image} src={item.image} alt={item.name} />
                </a>
              </Link>
            ))
          }

        </div>
      </main>

      <footer className={styles.footer}>
        <div
        >
          <p style={{color: 'black'}}>Powered by{' '}</p>
          <img src="/signature.png" alt="Nghia" className={styles.logo} />
          <p style={{color: 'black'}}>All licences belong to MBbank MobileApp.{' '} Created with love ❤</p>
        </div>
      </footer>
    </div>
  )
}
