import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'

const FirstPost = ({ data }: any) => {
  return (
    <Layout title='First Post | Next JS' metaDescription='Add description'>
      <h1>{ data.id } - { data.title }</h1>
      <p>{ data.body }</p>
      <Link href='/blog'><a>Go to Blog</a></Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataFetched = await res.json()
    const paths = dataFetched.map(({id}: any) => ({ params: { id: `${id}` }}))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({params}: any) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const dataFetched = await res.json()
    return {
      props: {
        data: dataFetched
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default FirstPost