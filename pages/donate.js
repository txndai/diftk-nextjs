import Layout from "../components/layout";


function Donate() {
  return (
    <Layout>
        <section id='sponsors' className=" body-font">
            <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
                <h2 className="mb-2 text-2xl font-medium sm:text-3xl title-font ">Donate/Sponsor</h2>
                <div className="prose md:w-3/5 md:pl-6 lg:prose-xl">
                    <blockquote>You can make a difference today. It starts with believing things can change.</blockquote>
                    <p>DO IT FOR THE KIDS up to date has already been able to support children in vulnerable situations with food, clothes, first aid kits, and most importantly love, as a result of the kind generosity shown by you, the donors.</p>
                    <p>We understand that not everyone can afford to donate their time either as a result of geographical barriers or just being committed to many other causes! However with a donation of any amount, you would assist in providing financial resources to assist out of school children, assist in the development of a library for children and adults living with Down-syndrome, and support other worthy causes such as the development of a re-usable sanitary pads project!</p>
                    <p>As a voluntary organisation,DIFTK is proud of the fact that ALL donated funds go towards the implementation of projects, with all personal, including ‘the Team’ serving the organisation on a voluntary basis without monetary compensation.</p>
                    <p>DIFTK is a verified Paynow merchant. Please press the image below to continue to the Paynow website. All payments are deposited directly in to the DIFTK Trust Account, which you may also deposit directly to should you wish.</p>
                    <p className='leading-6'>
                        Bank: Ecobank<br/>
                        Branch: Parkade Centre <br/>
                        Account name: DO IT FOR THE KIDS<br/>
                        Account type: ZWL/RTGS<br/>
                        Account number: 0061097609154801
                    </p>
                    <p>For Eco-Cash transfers, please use the following merchant number: <a href="tel:*151*2*2*117329#">117329</a></p>
                    <p>Please do not hesitate to contact us directly at <a href="mailto:admin@doit4thekidz.org">admin@doit4thekidz.org</a> to request a receipt or to specify what you wish the funds to be used for.</p>
                    <div className="flex mt-6 md:mt-4">
                        <button className="inline-flex px-4 py-1 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Paynow Merchant</button>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
}

export default Donate;

