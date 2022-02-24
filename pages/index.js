import Head from 'next/head'
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

                <meta property="og:image" content="https://haxpubg.com/banner.JPG" />
                <meta name="description" content="HAXPUBG.COM HACK MOBILE TENCENT, Hiển Thị Vị Trí Địch, AIMBOT, Ghìm Tâm, Nhìn Xuyên Tường, Hủy Diệt Trên Mọi Địa Hình" />
                <meta name="keywords" content="mp40 mãng xà , mp40 mới , mp40 vip , mp mãng xà, táo quân , tasoquan, taoquan, táo quân 2021, taoquan2021,lixi, nhanlixi,hái lixi, lixi đầu xuân ,hai lộc nhanqua,hái lộc ,ak rồng xanh , ak đẹp , ak vip , ak rồng ,Đăng Nhập Nhận Kim Cương Free Fire Miễn Phí,skyler, sontunghfreefire,tmpfreefire,mtpff,freefrirexsontung,sơn tùng mtp,sơn tùng mtp, hải tú,lqhaitu, tbt , thiều bảo trâm ,sontunghaitu , sơn tùng hải tú , trà xanh ,sơn tùng cắm sừng bảo trâm , bảo trâm, mtphatieuphu, hà tiều phu bị cắm sừng , hà tiều phu , top olar bị cắm sừng , top1 olaf, alice heavy  nộ clip nóng , alice heavy 18+ , clip alice heavy  ,alice heavy bị quay nén ,Tải Liên Minh Tốc Chiến Cho Adroi , IOS,Tải Liên Minh Tốc Chiến Cho Adroi , IOS  , Tải VPN , KiWi,tai lien minh tốc chiến , tai lien minh toc chien cho adroi , tai lien minh tốc chiên ios , tai lien minh tốc chiến tnao , tai kiwi, fake ip ,rikaki , shopriki, Shopnamlay , shopkellygaming , shopcuakid , shophungakira , shopchinhthuc , shopanhford , shopasmobile, shophamon , shopcutu ,  shopkhongtay , shopmollu , shoptingayto , shoppopitv , shopbechanhff , shopquy1nn, shopgamecuta , bussgaming , shopnhungdayy , shopgaobac , shopcongantv , shopluutrungmamixi,Free Fire,highlight free fire,gk mamixi,mamixi highlight,free fire viet nam,WAG,C4,C4 Gaming,Vô Lý,FunkyM,mamixi free fire,bac gấu gaming,Sỹ Kẹo,Cô Ngân,Gao Bạc,Kelly Gaming,Nhung Dayy,Garena FF,Lãi Gió,Gil gaming,Hải Đăng Gamer,As mobile,Cham Cân 5,Sam,Toàn Tây,Conan Gaming,Vô Lý ff,Nam Lầy,Hà Moon,Ha Moon,Virus,StarboyVn,3K,Phú Đại,V Gaming,Binxu,Hùng Akira,Rikaki,Riki,Bảo Hân Tv,Thanh Tv,Tingayto,Khongtaygaming,mollu tv" />
                <meta property="og:url" content="https://haxpubg.com"/>
                <meta property="og:title" content="TRANG CHỦ - THUÊ HACK&MUA HACK - HAXPUBG.COM - HACK GAME ONLIINE" />
                <meta property="og:description" content="HAXPUBG.COM HACK MOBILE TENCENT, Hiển Thị Vị Trí Địch, AIMBOT, Ghìm Tâm, Nhìn Xuyên Tường, Hủy Diệt Trên Mọi Địa Hình" />
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