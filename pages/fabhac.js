import Layout from "../components/layout";

function fabhac  (){
    return (
        <Layout>
            <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto mb-16 rounded-lg ">
            {/* <div
            className="flex-none h-48 overflow-hidden text-center bg-center bg-cover rounded-t"
            style={{ backgroundImage: `url(${blogPost.image.url})` }}
            title={blogPost.title}
            /> */}
            <div className="flex flex-col justify-between p-4 leading-normal rounded-b lg:rounded-b-none lg:rounded-r">
            <div className="mb-8">
                <h1 className="my-4 text-5xl font-bold text-center underline-custom">
                FABHAC
                </h1>

                <span className='flex items-center justify-center'>
                    <article className="prose lg:prose-xl">
                        <h3>Find A Book, Help A Child</h3>
                        <p>Started in 2015, FABHAC is an acronym for “FIND A BOOK HELP A CHILD.” It is an initiative aimed at improving the plight of children and adults living with a disability, and more particularly with down-syndrome. Due to the costs involved in joining libraries, many literate people living with disabilties are denied the right to access books.Through FABHAC, Our goal is to develop a “free” library for this marginalised group of people as we are firm advocates of the slogan, “Disabilty is not Inabilty.”</p>
                        <p>Up to date, through generous donations from the following institutions and numerous individuals, we’ve mobilised over a 1000 books for the library!</p>
                        <ul>
                            <li>Whitestone Chapel, Byo, Zimbabwe.​</li>
                            <li>Rotaract Club of Belmont, Byo, Zimbabwe.​​</li>
                            <li>Girls College, Byo, Zimbabwe</li>
                            <li>Petra High School, Byo, Zimbabwe.​</li>
                            <li>Petra Primary School, Byo, Zimbabwe.​</li>
                        </ul>
                        <p>We’d also like to thank the Zimbabwe Down-Syndrome Association (ZDSA) that has availed a room that will operate as the library.</p>
                        <p>However there’s several costs involved in making a library operational and absolutely cost free for it’s beneficiaries. It’s in this light we kindly ask for support in the form of monetary donations for the cause. If you have a non-monetary donation that you think may be of assistance, please contact Terry Nesu (contact at footer).</p>
                        <blockquote ><p className='underline '>A big thank you to those who have bought “I’m an ambassador for change” wristbands, as $1 from the proceeds of each wristband go towards this cause.</p></blockquote>
                    </article>
                </span>

                      <div id='fabhac-gallery' className="flex flex-wrap py-5 -m-4">
                        <div className="h-64 p-4 lg:w-1/3 sm:w-1/2 md:w-1/3">
                            <div className="relative flex h-full">
                            <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full rounded" src="/terry.png"/>
                            <div className="relative z-10 w-full px-8 py-10 opacity-0 bg-secondary hover:opacity-100">
                                <p className="text-sm">Nesu Kandiado, getting involved in the “International Day of Persons with Disabilities” celebrations which are held annually on the 3rd of December</p>
                            </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4 md:w-1/3 h-65">
                            <div className="relative flex h-full">
                            <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full rounded" src="/fabhac.png"/>
                            <div className="relative z-10 w-full h-full px-8 py-10 opacity-0 bg-secondary hover:opacity-100">
                                <p className="text-sm bg-secondary">Nesu Kandiado with Will Brunsdon and his young fans from The Armidale School, Australia. Notice the young ambassador wearing 2 bands!!</p>
                            </div>
                            </div>
                        </div>
                        <div className="h-64 p-4 lg:w-1/3 sm:w-1/2 md:w-1/3">
                            <div className="relative flex h-full">
                            <img alt="gallery" className="absolute inset-0 object-cover w-full h-full rounded" src="/will.png"/>
                            <div class="px-8 py-10 relative z-10 w-full bg-secondary opacity-0 hover:opacity-100">
                                <p className="text-sm">Will Brunsdon donning his “I’m an ambassador for change” wristband.</p>
                            </div>
                            </div>
                        </div>
                        </div>
            
            <span className='flex items-center justify-center'>
                <article className="prose lg:prose-xl">
                    <p>Will Brunsdon (pictured above), is the personification of “Disability is not Inability.” Will’s disability is down-syndrome, and as he spoke to children from The Armidale School, he shared how he’s not only risen above the challenge of living with down syndrome, but persevered, trained hard, and gone on to break up to 32 WORLD RECORDS in various World Down Syndrome Swimming Championships! DO IT FOR THE KIDS is very proud to have Will as an ambassador as he wears his wristband in support of others living with down syndrome half way across the globe in Zimbabwe. We commend Will on showing the greatness people of all abilities are capable of with the right support structure from local communities and of course, personal “will” power.</p>
                    <p><a href="http://keepingupwithds.blogspot.com.au/2008/12/4th-international-down-syndrome.html" rel="nofollow">Click here</a> to see Will’s great haul of medals from the 4th International Down Syndrome Swimming Championships held in Portugal.</p>
                    <p><a href="https://ds-int.org/outreach/life-zimbabwe" rel="nofollow">Click here</a> to read an article by the Zimbabwe Down-Syndrome Association that explains the plight of people living with down-syndrome in Zimbabwe.</p>
                    <blockquote>
                        <p className='underline'>“to enhance the livelihoods of persons with Down syndrome and their families.” – ZDSA</p>
                    </blockquote>
                    <h3>INCLUSION MATTERS!</h3>
                </article>
            </span>

            </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}

export default fabhac
