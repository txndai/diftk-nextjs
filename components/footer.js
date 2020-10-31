function Footer() {
  return (
    <footer className="flex justify-center px-4 bg-secondary">
        <div className="container py-6">
            <h1 className="text-lg font-bold text-center lg:text-2xl">
                Stay up to date with all things DIFTK, <br/>Magazine articles, projects and more.
            </h1>

            <form name="email subscribers" className="flex justify-center mt-6" data-netlify="true" method='POST' data-netlify-honeypot="bot-field" >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="email subscribers" value="email subscribers" />
                <div className="rounded-md bg-background">
                    <div className="flex flex-wrap justify-between md:flex-row">
                        <input type="email" className="p-2 m-1 text-sm text-gray-700 appearance-none bg-background focus:outline-none focus:placeholder-background" placeholder="Enter your email" name="email"/>
                        <button type='submit' className="w-full p-2 m-1 text-sm font-semibold uppercase rounded lg:w-auto button-secondary"><span className='w-full text-center'>subscribe</span></button>
                    </div>
                </div>
            </form>
            <span className='bullseye'>
                <hr className="w-1/5 h-1 mt-6 border-none bg-highlight" />
            </span>

            <div className="flex flex-col items-center justify-between mt-6 text-sm md:flex-row">
                <div>
                    Crafted with ❤️ by{" "}
                    <a title='Goosebumps Collective' href="https://goosebumps.co.zw" target="_blank" className="font-bold">
                      Goosebumps Collective
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;