import Layout from "../components/layout";
import SEO from '../components/seo'


const hero = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1598555739372-7cb6a91c6006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'
}

function IndexPage() {
  return (
    <>
      <SEO
        title='DIFTK'
        description=' Home of Do It For The Kids Zimbabwe'
        url='doit4thekidz.org'
      />
      <Layout>
        <section id='hero' className="body-font">
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1598893177325-7e066969fc72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80"/>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 className="mb-4 text-3xl font-bold title-font sm:text-6xl">DO IT FOR THE KIDS</h1>
              <p className="mb-8 leading-relaxed">Assisting in alleviating the plight of underprivileged children through enthusiastic service.</p>
              <div className="flex justify-center">
                <button className="button-secondary ">Button</button>
              </div>
            </div>
          </div>
        </section>

        <section id='howww' className=" body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto">
            <h2 className="mb-2 text-2xl font-medium sm:text-3xl title-font md:w-2/5">HOW DID DIFTK COME ABOUT?</h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="text-base leading-relaxed">
                The organisation as a registered entity was initiated year beginning 2016, by a group of 3 post high school students who, whilst waiting to further their studies, were volunteering at an orphanage in the Bulawayo, Zimbabwe area, and felt a need regardless of larger existing organisations, to care for the underprivileged children in the home and others in similar or even more unfortunate conditions. As the outreach visits to the orphanage became more frequent, our numbers began to increase as well-wishers heard of the work we were doing. Eventually, volunteers began working together in a structured group with different individuals, some of whom were distinctly leaders and others administrators. Hence in this manner was the organisation birthed to glorify the Lord through service.
              </p>
              <div className="flex mt-6 md:mt-4">
                <button className="button-secondary">About Us</button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default IndexPage;
