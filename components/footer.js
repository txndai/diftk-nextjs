function Footer() {
  return (
    <footer className="bg-secondary">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <li>
          Created by{" "}
          <a href="https://goosebumps.co.zw" target="_blank" className="font-bold">
            Goosebumps Collective
          </a>
        </li>

        <li>
          <a
            href="https://github.com/txndai/diftk-nextjs/"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
