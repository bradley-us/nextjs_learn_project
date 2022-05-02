import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Layout = ({children, title, metaDescription, home}:any) => {
    const name: string = 'Bradley'
    console.log(home)
  return (
    <div className={styles.container}>
        <Head>
            <link rel="" href="" />
            <title>{title}</title>
            <meta
            name='description'
            content={metaDescription}
            />
        </Head>

        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/one.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/one.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

        <nav>
          <Link href="/">
            <a>Inicio | </a>
          </Link>
          <Link href="/blog">
            <a>Blog | </a>
          </Link>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </nav>

        <main>
            { children }
        </main>

        <footer>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </footer>
    </div>
  )
}

Layout.defaultProps = {
    title: 'Next JS | My website',
    description: 'Description of my web'
}

export default Layout