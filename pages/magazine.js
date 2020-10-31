import Layout from "../components/layout";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Date from '../components/date'
import Image from 'next/image'


const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps() {
    const { blogPosts } = await graphcms.request(
      `
      query MyQuery() {
        blogPosts(orderBy: createdAt_DESC) {
          id
          title
          summary
          slug
          image {
            url
            id
          }
          date
          author {
            name
          }
          categories
        }
      }
    `
    );
  
    return {
      props: {
        blogPosts,
      },
    };
}


function Magazine({ og, blogPosts }) {
    console.log(blogPosts)

    return (
    <Layout>

<section className=" blog body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
          <h1 className="mb-2 text-2xl font-medium sm:text-3xl title-font">MAGAZINE</h1>
          <p className="w-full text-base leading-relaxed lg:w-1/2">
          People thrive when you empower them to shape their own story</p>
        </div>
        <div className="flex flex-wrap mb-4 -mx-4 sm:-m-4">

        {blogPosts.map((post) => {
          return (
            <Link key={post.id} as={`/post/${post.slug}`} href="/post/[slug]">
              <a className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto mb-6 md:w-1/3 md:mb-8 blog-card">
              
                  <Image 
                    className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md image-box" 
                    src={post.image.url}
                    alt={post.title}
                    unsized={true}
                    title={post.title}
                  />

                  <div className="z-10 inline-block min-w-full p-5 -mt-10 overflow-hidden rounded-lg shadow-sm bg-secondary text-box">
                    
                    <div className="inline-flex header-content ">
                      {post.categories.map((category) => {
                          return (
                            <span key={category} className='flex items-center justify-center flex-1 h-auto mx-1 text-xs leading-none text-highlight category-title'>#{category}</span>
                        );
                        })}
                    </div>
                    <h2 className="h-16 text-xl font-medium title-post">{post.title}</h2>

                    <p className="h-20 overflow-y-scroll leading-relaxed md:text-xs lg:text-sm summary-post">{post.summary}</p>
                    <div className='flex flex-row justify-between mt-4'>
                      <span className='flex flex-col'>
                        <p className="inline-block text-xs border-b-2 border-primary w-fit-content">{post.author ? post.author.name : `anonymous`}</p>
                        <p className="text-xs "><Date dateString={post.date} /></p>
                      </span>
                    </div>
                  </div>
                  
            </a>
          </Link>
        );
      })}

      </div>
      </div>
    </section>
    </Layout>


  );
}

export default Magazine;

// Magazine.getInitialProps = () => {
//   return {
//     data: {
//       og: {
//         description: "What Telmo uses on a daily basis.",
//         image: "https://telmo.im/og/uses.png"
//       }
//     }
//   }
// }