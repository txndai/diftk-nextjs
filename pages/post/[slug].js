import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Date from '../../components/date'
import ReactMarkdown from 'react-markdown/with-html'
import Layout from "../../components/layout";




const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps({ params }) {
  const { blogPost } = await graphcms.request(
    `
    query Post($slug: String!) {
      blogPost(where: { slug: $slug }) {
        id
        title
        content
        slug
        image {
          id
          url
        }
        author {
          id
          name
        }
        date
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      blogPost,
    },
  };
}

export async function getStaticPaths() {
  const { blogPosts } = await graphcms.request(`
    {
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
  `);

  return {
    paths: blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const blogPost = ({ blogPost }) => {
    console.log(blogPost)
  return (
    <Layout>
        <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto mb-16 rounded-lg ">
            <div
            className="flex-none h-48 overflow-hidden text-center bg-center bg-cover rounded-t"
            style={{ backgroundImage: `url(${blogPost.image.url})` }}
            title={blogPost.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
            <div className="mb-8">
                <div className="my-4 text-4xl font-bold text-center text-gray-800 underline-custom">
                {blogPost.title}
                </div>
                <span className='flex items-center justify-center'>
                  <article className="prose lg:prose-xl">
                      <ReactMarkdown source={blogPost.content} escapeHtml={false}/>
                  </article>
                </span>
            </div>
            <div className="flex items-center justify-center">
                <div className="inline-block text-sm">
                <p className="leading-none text-center text-gray-900">{blogPost.author.name}</p>
                <p className="text-center text-gray-600"><Date dateString={blogPost.date} /></p>
                </div>
            </div>
            </div>
        </div>
        <div className="flex items-center justify-center max-w-lg mx-auto">
            <Link href="/magazine">
            <a>Back to Magazine</a>
            </Link>
        </div>
        </div>
    </Layout>
  );
};

export default blogPost;