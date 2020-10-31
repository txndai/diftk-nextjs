import Layout from "../components/layout";
import SEO from '../components/seo'
import Link from "next/link";
import Image from 'next/image'
import { Smile, UserPlus, ExternalLink } from 'react-feather'




const hero = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)'
}
const volunteer = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80)'
}
const blog = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80)'
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
              <Image unsized={true} className="object-cover object-center rounded" alt="hero image" src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 className="mb-4 text-3xl font-bold title-font sm:text-6xl">DO IT FOR THE KIDS</h1>
              <p className="mb-8 leading-relaxed">Assisting in alleviating the plight of underprivileged children through enthusiastic service.</p>
              <div className="flex justify-center">
                <Link href="/projects"><button className="button-secondary ">Our Projects</button></Link>
              </div>
            </div>
          </div>
        </section>

        <section id='howww' className=" body-font">
          <div className="container flex flex-wrap items-center justify-center px-5 py-24 mx-auto">
            <div className="md:w-3/5 md:pl-6">
              <h2 className="mb-2 text-2xl font-medium sm:text-3xl">HOW DID DIFTK COME ABOUT?</h2>
              <p className="text-base leading-relaxed">
                The organisation as a registered entity was initiated year beginning 2016, by a group of 3 post high school students who, whilst waiting to further their studies, were volunteering at an orphanage in the Bulawayo, Zimbabwe area, and felt a need regardless of larger existing organisations, to care for the underprivileged children in the home and others in similar or even more unfortunate conditions. As the outreach visits to the orphanage became more frequent, our numbers began to increase as well-wishers heard of the work we were doing. Eventually, volunteers began working together in a structured group with different individuals, some of whom were distinctly leaders and others administrators. Hence in this manner was the organisation birthed to glorify the Lord through service.
              </p>
              <div className="flex mt-6 md:mt-4">
                <Link href='/about'><button className="button-secondary">About Us</button></Link>
              </div>
            </div>

            <div className='pt-20 md:py-5 md:w-2/5 md:bullseye'>
              <div class="p-4 md:w-4/5 sm:w-1/2 w-full bullseye mx-auto">
                <div className="px-4 py-6 rounded-lg shadow-sm bg-secondary">
                  <Smile className='mx-auto bullseye'/>
                  <h2 className="text-3xl font-medium text-center title-font">110</h2>
                  <p className="text-sm leading-relaxed">Active Volunteers</p>
                </div>
              </div>
              <div class="p-4 md:w-4/5 sm:w-1/2 w-full bullseye mx-auto">
                <div className="px-4 py-6 rounded-lg shadow-sm bg-secondary">
                  <UserPlus className='mx-auto bullseye'/>
                  <h2 className="text-3xl font-medium text-center title-font">19</h2>
                  <p className="text-sm leading-relaxed">Blog Contributors</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id='sponsors' className=" body-font">
          <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
              <h1 className='mb-2 text-3xl font-medium sm:text-3xl title-font'>Our Sponsors</h1>
                <div className='flex-col bullseye'>
                  {/* card start */}
                  <div class="max-w-md py-4 px-8 bg-secondary shadow-lg rounded-lg my-20">
                    <div className="flex justify-center -mt-16 md:justify-end">
                      <img className="object-contain w-20 h-20 border-2 rounded-full bg-primary border-writing" src="/fawcett.png"/>
                    </div>
                    <div>
                      <h2 className="text-3xl font-semibold ">Fawcett Security</h2>
                      <p className="mt-2 ">From their first donation of shoes and cash in 2016 to help children of Nyahombe Primary school who had to walk nearly 10km to school barefoot, Fawcetts has become a regular DIFTK sponsor. Having believed in DIFTK before we barely had a track record, they are worth special mention</p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <a target='_blank' href="https://www.fawcetts.co.zw/" className="text-xl font-medium text-highlight"><ExternalLink/></a>
                    </div>
                  </div>
                  {/* card end */}

                  {/* card start */}
                  <div class="max-w-md py-4 px-8 bg-secondary shadow-lg rounded-lg my-20">
                    <div className="flex justify-center -mt-16 md:justify-end">
                      <img className="object-contain w-20 h-20 border-2 rounded-full bg-background border-writing" src="/spa.jpg"/>
                    </div>
                    <div>
                      <h2 className="text-3xl font-semibold ">The Haven Spa</h2>
                      <p className="mt-2 ">The first time we encountered the warm, friendly and welcoming spa owners, we would never have imagined the extent of the support that they would eventually give us. Always ready to lend a hand and literally dish out massages and reflexology treatment for participants of our often-times physically grueling Amazing Race event, plus the very valuable prizes they have sponsored for winners over the years. A big hearty thank you to you!</p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <a target='_blank' href="https://www.facebook.com/HavenrSpaKhumalo/" className="text-xl font-medium text-highlight"><ExternalLink/></a>
                    </div>
                  </div>
                  {/* card end */}
                  <img title='Our Sponsors' className='w-full rounded banner' src="/banner.png" alt="our sponsors' logos"/>
                </div>
          </div>
        </section>

        <section id='help-me' className=" body-font">
          <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
              <h1 className='mb-2 text-3xl font-medium sm:text-3xl title-font'>How can you help?</h1>
              <div className="container px-6 mx-auto">
                <div className="mt-8 md:flex md:-mx-4">

                    <div className="w-full h-64 overflow-hidden bg-center bg-cover rounded-md md:mx-4 md:w-1/2" style={volunteer}>
                        <div className="flex items-center h-full bg-gray-900 bg-opacity-75">
                            <div className="h-full max-w-xl px-10 py-6">
                                <h2 className="text-2xl font-semibold text-white">Volunteer</h2>
                                <p className="mt-2 text-white">If you'd like to volunteer your time when DIFTK has fundraising events, or be notified of upcoming event, please [do action] and we would love to keep you in the loop of when we'll be doing it for the kids!</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-64 mt-8 overflow-hidden bg-center bg-cover rounded-md md:mx-4 md:mt-0 md:w-1/2" style={blog}>
                        <div className="flex items-center h-full bg-gray-900 bg-opacity-75">
                            <div className="h-full max-w-xl px-10 py-6">
                                <h2 className="text-2xl font-semibold text-white">Become a DIFTK blogger</h2>
                                <p className="mt-2 text-white">Contact Joseph on <a href="tel:+263778129377">+263 778 129 377</a> or email your article to <a href="mailto:doit4thekids@gmail.com">doit4thekids@gmail.com</a>. </p>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
              <Link href='/involved'><button title='Get Started - Volunteer/Donate' className="mt-10 button-primary">Get Started</button></Link>
            </div>
        </section>
      </Layout>
    </>
  );
}

export default IndexPage;
