import Link from 'next/link'
import Layout from '../../components/Layout'

const Index = ({ data }: any) => {
  return (
    <Layout>
      <h1>Lista de Blog</h1>
      {
        data.map(({ id, title, body }: any) => (
          <div key={ id }>
            <h3><Link href={`/blog/${id}`}><a>{ id } - { title }</a></Link></h3>
            <p>{ body }</p>
          </div>
        ))
      }
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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

export default Index