import Layout from "../components/layout";
import Link from "next/link"
import { Link2 } from 'react-feather'
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps() {
    const { projects } = await graphcms.request(
      `
      query MyQuery() {
        projects {
          name
          summary
          icon {
            url
          }
        }
      }
    `
    );
  
    return {
      props: {
        projects,
      },
    };
}

function Projects({ projects }) {
  return (
    <Layout>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap mb-4 -mx-4 sm:-m-4">

        <div id="fabhac-project-card" class="max-w-md py-4 px-8 bg-secondary shadow-lg rounded-lg my-20 mx-auto">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img className="object-cover w-20 h-20 border-2 rounded-full border-writing" src="/fabhac.png"/>
            </div>
            <div>
              <h2 className="text-3xl font-semibold ">Find A Book, Help A Child</h2>
              <p className="mt-2 ">Started in 2015, FABHAC is an acronym for “FIND A BOOK HELP A CHILD.” It is an initiative aimed at improving the plight of children and adults living with a disability, and more particularly with down-syndrome. Due to the costs involved in joining libraries, many literate people living with disabilties are denied the right to access books.</p>
            </div>
            <div className="flex justify-end mt-4">
              <Link  href="/fabhac"><a title='read more' className="text-xl font-medium text-highlight"><Link2/></a></Link>
            </div>
          </div>

        {projects.map(project => (
            <div key={project.name} class="max-w-md py-4 px-8 bg-secondary shadow-lg rounded-lg my-20 mx-auto">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img className="object-cover w-20 h-20 border-2 rounded-full border-writing" src={project.icon.url}/>
            </div>
            <div>
              <h2 className="text-3xl font-semibold ">{project.name}</h2>
              <p className="mt-2 ">{project.summary}</p>
            </div>
            {/* <div className="flex justify-end mt-4">
              <a target='_blank' href="https://www.fawcetts.co.zw/" className="text-xl font-medium text-highlight"><ExternalLink/></a>
            </div> */}
          </div>
          ))}
        </div>

        
      </div>
    </Layout>
  );
}

export default Projects;