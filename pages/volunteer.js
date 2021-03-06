import Layout from "../components/layout";


const volunteer = () => {
    return (
        <Layout>
            <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto md:w-5/6">
                <h1 className="mt-4 text-5xl font-bold text-center underline-custom">
                    Volunteer
                </h1>
                <p className='prose lg:prose-lg'>Please fill in the form below & our Volunteer coordinator will reach out</p>

                <form className="p-8 mx-auto my-5 rounded lg:w-1/2 md:w-2/3 bg-secondary" name="volunteer" data-netlify="true" method='POST' data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="volunteer" />
                    <div className="flex flex-col">
                    <div className="w-2/3 p-2 mx-auto">
                        <input className="w-full p-2 m-1 text-sm appearance-none bg-background focus:outline-none focus:placeholder-background" placeholder="Name" type="text" name='name' ></input>
                    </div>
                    <div className="w-2/3 p-2 mx-auto">
                        <input className="w-full p-2 m-1 text-sm appearance-none bg-background focus:outline-none focus:placeholder-background" placeholder="Email" type="email" name='email' ></input>
                    </div>
                    <div className="w-2/3 p-2 mx-auto">
                        <input className="w-full p-2 m-1 text-sm appearance-none bg-background focus:outline-none focus:placeholder-background" placeholder="Phone Number" type="text" name='number' ></input>
                    </div>
                   
                    <div className="w-full p-2 bullseye">
                        <button className=" button-secondary" type='submit'>Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default volunteer
