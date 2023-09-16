
import Image from 'next/image'
import { config,urlFor } from '../lib/sanityClient'
import { Post } from '../../typings'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import BannerBottom from '@/components/BannerBottom'



interface Props{
  posts:[Post]
}

export default async function Home() {
  // const data = await getServerSideProps()
  // console.log("adeel khalid: ",data)
  return (
    <div>
      
      <Header/>
      <Banner/>
      <div className='max-w-7xl mx-auto h-60 relative'> 
      <BannerBottom/>
      </div>
      <div className='max-w-7xl mx-auto py-20 px-4'>Post will go here</div>
      <Footer/>
    </div>
  )

}




// export const getServerSideProps = async () => {
//   const query = `*[_type == "post"]{
//     _id,title,author -> {
//       name,image
//     },
//       description,
//       mainImage,
//       slug
//   }`
//   const posts = await config.fetch(query)
//   return posts
// }