import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          yeetdogs
          <div className={styles.thirteen}>
            <Image
              src="https://raw.githubusercontent.com/kreynolds2/Yeetdogs.com/main/Smite_wallpaper.v1%20(1).png"
              alt="pog"
              width={140}
              height={101}
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}
