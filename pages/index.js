import Layout from "../components/layout";

const hero = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1598555739372-7cb6a91c6006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'
}

function IndexPage() {
  return (
    <Layout>
      <section style={hero} className="text-white body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-200 title-font sm:text-4xl">DO IT FOR THE KIDS</h1>
            <p className="mb-8 leading-relaxed">"Assisting in alleviating the plight of underprivileged children through enthusiastic service."</p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-yellow-500 border-2 border-yellow-500 rounded focus:outline-none hover:bg-yellow-500 hover:text-white">Learn More</button>
            </div>
          </div>
        </div>
    </section>
    </Layout>
  );
}

export default IndexPage;
