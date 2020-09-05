import Layout from "../components/layout";
import Link from "next/link"


function Involved() {
  return (
    <Layout>
        <section id='sponsors' className=" body-font">
            <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
                <h2 className="mb-8 text-2xl font-medium sm:text-3xl title-font ">Get Involved</h2>

        <div class="main-images mb-8 ">
            <div class="images grid grid-cols-1 md:grid-cols-3 gap-8">

                <Link href="/volunteer">
                    <div class="image bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer">
                            <img src="/volunteer.jpg" alt="A volunteer in a red t-shirt" title="Become a DIFTK Volunteer"/>
                            <span class="text-center p-2  text-sm inline-block w-full">Volunteer</span>
                    </div>
                </Link>

                <Link href="/donate">
                    <div class="image bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer" title="Donate to DIFTK">
                            <img src="/donate.jpg" alt="A type writer with a paper written donations" />
                            <span class="text-center p-2  text-sm inline-block w-full">Donate</span>
                    </div>
                </Link>    

                <Link href="/blogger">
                    <div class="image bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <img src="/blogger.jpg" alt="laptop, phone, and coffee on a table" title="Become A DIFTK Blogger"/>
                        <span class="text-center p-2  text-sm inline-block w-full">Become A DIFTK Blogger</span>
                    </div>
                </Link>
            </div>
        </div>

    </div>

            {/* </div> */}
        </section>
    </Layout>
  );
}

export default Involved;

