import Layout from "../components/layout";
import Link from "next/link"


function Involved() {
  return (
    <Layout>
        <section id='sponsors' className=" body-font">
            <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
                <h2 className="mb-2 text-2xl font-medium sm:text-3xl title-font ">Get Involved</h2>

        <div class="main-images mb-8 ">
            <div class="images grid grid-cols-1 md:grid-cols-3 gap-8">

                <div class="image bg-secondary rounded-lg shadow-lg overflow-hidden">
                    <a href="#">
                        <img src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg" alt="Contact with Customer support" title="Contact with Customer support"/>
                        <span class="text-center p-2  text-sm inline-block w-full">Volunteer</span>
                    </a>
                </div>

                <Link href="/donate">
                    <div class="image bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer" title="Donate to DIFTK">
                            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" alt="Send massage to support disk" />
                            <span class="text-center p-2  text-sm inline-block w-full">Donate</span>
                    </div>
                </Link>    

                <div class="image bg-secondary rounded-lg shadow-lg overflow-hidden">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3" alt="Write your feedback" title="Write your feedback"/>
                        <span class="text-center p-2  text-sm inline-block w-full">Become A DIFTK Blogger</span>
                    </a>                        
               </div>
            </div>
        </div>

    </div>

            {/* </div> */}
        </section>
    </Layout>
  );
}

export default Involved;

