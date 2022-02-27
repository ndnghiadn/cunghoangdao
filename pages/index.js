import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  
  return data ? (
    <div className={styles.container}>
      <Head>
        <title>Cung Hoàng Đạo</title>
        <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index,follow" />
                <meta name="revisit-after" content="1days" />
                <meta name="robots" content="noarchive" />

                <meta property="og:image" content="https://cunghoangdao.site/banner.jpg" />
                <meta name="description" content="CUNGHOANGDAO.SITE TRA CỨU THÔNG TIN CUNG HOÀNG ĐẠO" />
                <meta name="keywords" content="cung hoang dao, hoang dao, thong tin cung hoang dao, thông tin cung hoàng đạo, cung hoàng đạo, bạch dương, kim ngưu, song tử, cự giải, sư tử, xử nữ, thiên bình, bò cạp, nhân mã, ma kết, bảo bình, song ngư" />
                <meta property="og:url" content="https://cunghoangdao.site/"/>
                <meta property="og:title" content="TRANG CHỦ - THÔNG TIN CUNG HOÀNG ĐẠO - CUNGHOANGDAO.SITE" />
                <meta property="og:description" content="CUNGHOANGDAO.SITE TRA CỨU THÔNG TIN CUNG HOÀNG ĐẠO" />
                <meta property="og:type" content="website" />
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
            data.map(item => (
              <Link href={item.query} key={item.query}>
                <a className={styles.card}>
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.date}</p>
                  </div>
                  <Image src={item.image} alt={item.name} width="45vw" height="30vh" />
                </a>
              </Link>
            ))
          }

        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by ndnghia (♋)<br /> All licences belong to MBbank MobileApp. Created with love ❤</p>
      </footer>
    </div>
  ) : null
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/Cung`)
    const data = await res.json()
    return {
      props: {
        data
      },
  }
  } catch (error) {
    return {
      props: {}
    }
  }
}