import Layout from "../components/layout";
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
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <div className="flex flex-wrap w-full mx-auto">
        {projects.map(project => (
            <div key={project.name} class="max-w-md py-4 px-8 bg-secondary shadow-lg rounded-lg my-20">
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