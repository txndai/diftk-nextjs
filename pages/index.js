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
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1598893177325-7e066969fc72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80"/>
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 title-font sm:text-6xl">DO IT FOR THE KIDS</h1>
            <p className="mb-8 leading-relaxed">Assisting in alleviating the plight of underprivileged children through enthusiastic service.</p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">Button</button>
            </div>
          </div>
        </div>
    </section>
      </Layout>
    </>
  );
}

export default IndexPage;
