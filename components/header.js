import Link from "next/link";
import { useState } from "react";


const NavLinks = () => {
  return (
    <>
          {[
            { title: "Home", route: "/" },
            { title: "Magazine", route: "/magazine" },
            { title: "Projects", route: "/projects" },
            { title: "About", route: "/about" }
          ].map(navigationItem => (
              <Link href={navigationItem.route} key={navigationItem.title}>
                <a className="mx-2 hover:text-gray-900">{navigationItem.title}</a>
              </Link>
          ))}
        </>
  )
}


function Header() {
  const [isExpanded, toggleExpansion] = useState(false); 

  return (
    <header className="text-gray-700 body-font">
  <div className="container flex flex-col flex-wrap items-center px-5 mx-auto md:flex-row">
    <Link href="/">
      <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <img src="/icons8-jake.svg" alt="" className="w-16 h-16 p-2 pb-3 text-white"/>
      </a>
    </Link>
    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
      <NavLinks />
    </nav>
    <button className="inline-flex items-center px-3 py-1 my-4 text-base bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-500 ">Get Involved</button>
  </div>
</header>
  );
}

export default Header;
