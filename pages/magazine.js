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

{/* <!-- component -->
<style>
  .w-70 {
    width: 20rem;
	}
</style> */}

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
              <a className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto mb-6 md:w-1/3 md:mb-0">
              
                  <div className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${post.image.url})` }}
                      title={post.title}></div>

                  <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg w-70">
                    
                    <div className="inline-flex header-content ">
                      <div className="flex-1 w-4 h-4 m-1 bg-purple-100 rounded-full category-badge m">
                        <div className="w-2 h-2 m-1 bg-purple-500 rounded-full " ></div>
                      </div>
                      <div className="flex-1 text-sm category-title"> PHP</div>
                    </div>
                    <div className="h-12 font-medium title-post">{post.title}</div>

                    <div className="h-20 overflow-hidden leading-relaxed md:text-xs lg:text-sm summary-post ">{post.summary}
                    </div>
                      <button className="block p-2 mt-4 text-sm text-blue-500 bg-blue-100 rounded read-more"><span className="">Read more</span></button>
                  
                  </div>
                  
            </a>
          </Link>
        );
      })}

      </div>
      </div>
    </section>

      {/* {blogPosts.map((post) => {
        return (
          <Link key={post.id} as={`/post/${post.slug}`} href="/post/[slug]">
            <a className="flex max-w-lg mx-auto mb-16 rounded-lg shadow-lg">
              <div
                className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                style={{ backgroundImage: `url(${post.image.url})` }}
                title={post.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
                <div className="mb-8">
                  <div className="mb-2 text-xl font-bold text-gray-900">
                    {post.title}
                  </div>
                  <p className="text-base text-gray-700">{post.summary}</p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="leading-none text-gray-900">
                      {post.author.name}
                    </p>
                    <p className="text-gray-600"><Date dateString={post.date} /></p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })} */}
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