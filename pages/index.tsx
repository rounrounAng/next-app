import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';
import 'antd/dist/antd.css'
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import { render } from 'amis'
const Home = ({ data }: { data: any }) => {
  console.log(data);
  const renderPage = render(data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button type='primary'>按钮</Button>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  let data = {
    "type": "page",
    "title": "表单页面",
    "body": [
      {
        "type": "form",
        "mode": "horizontal",
        "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm",
        "body": [
          {
            "label": "Name",
            "type": "input-text",
            "name": "name"
          },
          {
            "label": "Email",
            "type": "input-email",
            "placeholder": "请输入邮箱地址",
            "name": "email"
          }
        ]
      }
    ]
  }
  // const data =  res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
