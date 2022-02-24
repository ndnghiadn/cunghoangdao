import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Page404 from './404.js'
import styles from '../styles/CungComponent.module.css'
import { Collapse } from 'antd'
const { Panel } = Collapse
import { ArrowLeftOutlined } from '@ant-design/icons'
import Particles from 'react-tsparticles'

export default function CungComponent({ data }) {
    const [targetCung, setTargetCung] = useState()

    useEffect(() => {
        setTargetCung(data)
    }, [])

    return targetCung ? (
        <div className={styles.container}>
            <Head>
                <title>Cung Hoàng Đạo - {targetCung.name}</title>
                        <meta name="robots" content="index,follow" />
                        <meta name="revisit-after" content="1days" />
                        <meta name="robots" content="noarchive" />

                        <meta property="og:image" content="https://cunghoangdao.site/banner.jpg" />
                        <meta name="description" content="CUNGHOANGDAO.SITE TRA CỨU THÔNG TIN CUNG HOÀNG ĐẠO" />
                        <meta name="keywords" content="cung hoang dao, hoang dao, thong tin cung hoang dao, thông tin cung hoàng đạo, cung hoàng đạo, bạch dương, kim ngưu, song tử, cự giải, sư tử, xử nữ, thiên bình, bò cạp, nhân mã, ma kết, bảo bình, song ngư" />
                        <meta property="og:url" content="https://cunghoangdao.site/"/>
                        <meta property="og:title" content={`THÔNG TIN CUNG HOÀNG ĐẠO - ${targetCung.name}`} />
                        <meta property="og:description" content="CUNGHOANGDAO.SITE TRA CỨU THÔNG TIN CUNG HOÀNG ĐẠO" />
                        <meta property="og:type" content="website" />
            </Head>
            <Particles
                className={styles.background}
                options={{
                    background: {
                      color: {
                        value: "#232741",
                      },
                    },
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "grab",
                        },
                        resize: true,
                      },
                      modes: {
                        bubble: {
                          distance: 250,
                          duration: 2,
                          opacity: 0,
                          size: 0,
                        },
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 400,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 400,
                        },
                        value: 20,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 5,
                      },
                    },
                    detectRetina: true,
                  }}
            />
            <div>
                <ArrowLeftOutlined className={styles.arrow} onClick={() => Router.back()}/>
                <h1 className={styles.name}>{targetCung.name}</h1>
            </div>
            <img src={targetCung.image} alt={targetCung.name} className={styles.image}/>
            <Collapse
                className={styles.collapse}
                defaultActiveKey="1"
                expandIconPosition={'left'}
            >
                <Panel header="Tính cách" key="1">
                    { targetCung.personality?.map((paragraph, index) => <div key={index} className={styles.paragraph}>{paragraph}</div>) }
                </Panel>
                <Panel header="Tình cảm" key="2">
                    { targetCung.love?.map((paragraph, index) => <div key={index} className={styles.paragraph}>{paragraph}</div>) }
                </Panel>
                <Panel header="Gia đình" key="3">
                    { targetCung.family?.map((paragraph, index) => <div key={index} className={styles.paragraph}>{paragraph}</div>) }
                </Panel>
                <Panel header="Sự nghiệp" key="4">
                    { targetCung.career?.map((paragraph, index) => <div key={index} className={styles.paragraph}>{paragraph}</div>) }
                </Panel>
                <Panel header="Tài chính" key="5">
                    { targetCung.finance?.map((paragraph, index) => <div key={index} className={styles.paragraph}>{paragraph}</div>) }
                </Panel>
                <Panel header="Fun fact" key="6">
                    { targetCung.fact?.map((paragraph, index) => <div key={index} className={styles.paragraph}>{paragraph}</div>) }
                </Panel>
            </Collapse>
        </div>
    ) : <Page404 />
}

export async function getServerSideProps(context) {
    try {
      const { Cung } = context.query
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/Cung/${Cung}`)
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