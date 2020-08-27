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
        <div className="max-w-lg mx-auto mb-16 rounded-lg shadow-lg">
            <div
            className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t"
            style={{ backgroundImage: `url(${blogPost.image.url})` }}
            title={blogPost.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
            <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                {blogPost.title}
                </div>
                <article className="prose lg:prose-xl">
                    <ReactMarkdown source={blogPost.content} escapeHtml={false}/>
                </article>
            </div>
            <div className="flex items-center">
                <div className="text-sm">
                <p className="leading-none text-gray-900">{blogPost.author.name}</p>
                <p className="text-gray-600"><Date dateString={blogPost.date} /></p>
                </div>
            </div>
            </div>
        </div>
        <div className="max-w-lg mx-auto">
            <Link href="/magazine">
            <a>Back to all blogPosts</a>
            </Link>
        </div>
        </div>
    </Layout>
  );
};

export default blogPost;