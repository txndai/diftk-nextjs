import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { Sun, Moon, Facebook, Twitter, Instagram } from 'react-feather'


const NavLinks = () => {
  return (
    <>
          {[
            { title: "Magazine", route: "/magazine" },
            { title: "Projects", route: "/projects" },
            { title: "About", route: "/about" }
          ].map(navigationItem => (
              <Link href={navigationItem.route} key={navigationItem.title}>
                <a className="mx-2 font-bold ">{navigationItem.title}</a>
              </Link>
          ))}
        </>
  )
}


function Header() {
  const onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME')
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(onLoadTheme)

  const switchTheme = () => {
    const setTo = theme === 'dark' ? 'light' : 'dark'
    setTheme(setTo)
  }

  useEffect(() => {
    if (onLoadTheme) return

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem('BLOG_THEME', theme)

    setMounted(true)
  }, [theme])

  if (!mounted) return <div />

  return (
    <header className="">
      <div className="flex flex-col flex-wrap items-center px-5 mx-auto md:max-w-3xl lg:max-w-4xl md:flex-row md:justify-between">
        <span className='mb-2 bullseye'>
          <Link href="/">
            <a className="flex items-center font-medium title-font md:mb-0">
              <img src="/icons8-jake.svg" alt="" className="w-16 h-16 p-2 pb-3 text-white"/>
            </a>
          </Link>
            <Facebook size={18}  className='mx-1 '/>
            <Twitter size={18}  className='mx-1 '/>
            <Instagram  size={18} className='mx-1 '/>
        </span>
        
        <nav className="flex flex-wrap items-center justify-center text-base mx:auto">
          <NavLinks />
        </nav>
        <span>
          <button className="my-4 button-primary">Get Involved</button>
          <button className="theme-switch-button bullseye" onClick={() => switchTheme()}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
