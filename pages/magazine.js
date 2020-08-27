import Layout from "../components/layout";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";

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
      {blogPosts.map((post) => {
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
                  <p className="text-base text-gray-700">{post.excerpt}</p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="leading-none text-gray-900">
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.date}</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
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