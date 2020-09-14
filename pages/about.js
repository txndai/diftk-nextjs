import Layout from "../components/layout";
import { GraphQLClient } from "graphql-request";
import { Info } from 'react-feather'
import Link from "next/link"
import { Link2 } from 'react-feather'



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
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto md:w-5/6">
        <article id='aboutUsText' className='max-w-3xl text-center'>
          <h1 className="mt-4 text-5xl font-bold text-center underline-custom">
              Our Mission
          </h1>
          <p className='pb-10 mx-auto prose lg:prose-lg'>To assist in alleviating the plight of the underprivileged children in the Zimbabwean community through enthusiastic service.</p>
          <h1 className="mt-4 text-5xl font-bold text-center underline-custom">
              Our Vision
          </h1>
          <p className='pb-10 mx-auto prose lg:prose-lg'>To become a youth organisation recognised both nationally and internationally, as one which puts the basic needs of children first, and one which has a positive impact in ably assisting children realise their goals through its active and innovative participation.</p>
          <h1 className="mt-4 text-5xl font-bold text-center underline-custom">
              Our Objectives
          </h1>
          <p className='pb-10 mx-auto prose lg:prose-lg'>
            <ol>
              <li>To aid in transforming communities by inspiring people throughout Zimbabwe to open their hearts, accept and include disadvantaged children and thereby any child who is perceived as different.</li>
              <li>Raise funds to assist underprivileged children in accessing basic amenities, nutrition, and support them to access appropriate education.</li>
              <li>As an organisation, to visit children in institutions, such as orphanages, based in local communities on a regular basis and spend time with them and help them feel cared for and loved.</li>
              <li>Raise awareness through mediums such as social platforms to highlight the current living conditions of children in child care institutions in the Zimbabwean community.</li>
            </ol>
          </p>
          <h1 className="mt-4 text-5xl font-bold text-center underline-custom">
              Purpose & Goals
          </h1>
          <p className='pb-10 mx-auto prose lg:prose-lg'>The Do it for the Kids Organisation shall exist to both educate and garner support from the Zimbabwean community and the world at large on issues and needs relating to the condition of underprivileged children around the country, and specifically relating these issues to the work of raising the brand of philanthropy and more importantly service for the glory of God.</p>
          <h1 className="mt-4 text-5xl font-bold text-center underline-custom">
              Is DIFTK a real organisation
          </h1>
          <p className='pb-10 mx-auto prose lg:prose-lg'>Yes, DIFTK is a real non-profit organisation that is registered as a Provincial Youth Association in the Advocacy, Education and Training with the Zimbabwe Youth Council as of 1 July 2016.</p>
        </article>

        <div id="in-the-media" class="max-w-md py-4 px-8 bg-secondary shadow-lg rounded-lg my-20 mx-auto">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img className="object-cover w-20 h-20 border-2 rounded-full border-writing" src="/media.png"/>
            </div>
            <div>
              <h2 className="text-3xl font-semibold ">In The Media</h2>
              <p className="mt-2 ">Snippets of the moments where the media has both acknowledged and supported the work of Do It For The Kids!</p>
            </div>
            <div className="flex justify-end mt-4">
              <Link  href="/media"><a title='read more' className="text-xl font-medium text-highlight"><Link2/></a></Link>
            </div>
          </div>

        <div id="team" className=''>
          <h1 className="my-4 text-5xl font-bold text-center underline-custom">
              Our Team
          </h1>
          <div className="grid grid-cols-1 gap-6 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 ">
            
        
            {teams.map((member) => (
          
              <div key={member.name} className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-secondary">
              <img className="object-cover object-center w-full h-56" src={member.picture.url} alt="avatar"/>

              <div className="flex items-center px-6 py-3 bg-hrtoby">
                  <Info/>

                  <h1 class="mx-3 font-semibold text-lg">{member.role}</h1>
              </div>

              <div class="py-4 px-6">
                  <h1 className="text-xl font-semibold">{member.name}</h1>

                  <p className="py-2 text-sm ">{member.quote}</p>
              </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default AboutPage;