import Layout from "../components/layout";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps() {
    const { teams } = await graphcms.request(
      `
      query MyQuery() {
        teams {
          name
          picture {
            url
          }
          quote
          role
        }
      }
    `
    );
  
    return {
      props: {
        teams,
      },
    };
}


function AboutPage({ teams }) {
  console.log(teams)
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <div className="space-y-6 md:w-1/2">
          
          {teams.map((member) => (
            <div key={member.name}>
              <h2 className="mb-3 text-xl font-bold">{member.name}</h2>
              <img className='w-10 h-10 rounded-full' src={member.picture.url} alt=""/>
              <p>{member.role}</p>
              <p>{member.quote}</p>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}

export default AboutPage;