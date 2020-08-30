import Layout from "../components/layout";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Date from '../components/date'


const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps() {
    const { blogPosts } = await graphcms.request(
      `
      query MyQuery() {
        blogPosts {
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

<section className="text-gray-700 blog body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
          <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">MAGAZINE</h1>
          <p className="w-full text-base leading-relaxed lg:w-1/2">
          People thrive when you empower them to shape their own story</p>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">

        {blogPosts.map((post) => {
          return (
            <Link key={post.id} as={`/post/${post.slug}`} href="/post/[slug]">
              <a className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto mb-6 md:w-1/3 md:mb-0 blog-card">
              
                  <img className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md image-box" src={post.image.url}
                      title={post.title}
                      loading='lazy'
                      />

                  <div className="z-10 inline-block p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg text-box">
                    
                    <div className="inline-flex header-content ">
                      <div className="flex-1 w-4 h-4 m-1 bg-blue-100 rounded-full category-badge m">
                        <div className="w-2 h-2 m-1 bg-blue-500 rounded-full " ></div>
                      </div>
                      {post.categories.map((category) => {
                          return (
                            <span key={category} className='flex items-center justify-center flex-1 h-auto mx-1 text-xs leading-none category-title'>#{category}</span>
                        );
                        })}
                    </div>
                    <div className="h-12 font-medium title-post">{post.title}</div>

                    <p className="h-20 overflow-y-scroll leading-relaxed md:text-xs lg:text-sm summary-post">{post.summary}</p>
                    <div className='flex flex-row justify-between mt-4'>
                      <span className='flex flex-col'>
                        <p className="inline-block text-xs text-gray-600 border-b-2 border-blue-500 w-fit-content">{post.author ? post.author.name : `anonymous`}</p>
                        <p className="text-xs text-gray-500 "><Date dateString={post.date} /></p>
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