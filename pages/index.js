import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LiveLinx</title>
        <meta name="description" content="A Web App To Find Concerts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a className={styles.head_title}>
            LiveLinx
          </a>
          <div className={styles.center}>
            <a>Home</a>
            <a>Feed</a>
            <a>Featured</a>
          </div>
          <p className={styles.ibox}>
            Search
          </p>
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Card <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              some very cool card data ;) dont mind this.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
