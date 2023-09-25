import Container from "./container";
import Button from "./button";
import Link from "next/link";

const Header = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <header className="py-10 border-b dark:border-neutral-600 bg-slate-950 dark:bg-neutral-900">
      <Container className="flex flex-row items-center gap-5 px-5">
        <div className="flex-1">
          <h1>
            <Link href={baseUrl} className="flex flex-row items-center gap-5">
              <img
                className="block w-56"
                src="https://uploads-ssl.webflow.com/62a8755be8bcc86e6307def8/6329b27b3fc044f886326c4e_mindsDB-full%20logo.svg"
              />
              <span className="text-3xl font-semibold text-white">Blog</span>
            </Link>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end col-span-1 gap-5 text-slate-300">
          <nav>
            <ul className="flex flex-row items-center gap-2">
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </nav>
          <Button type="primary" label="Book a demo" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
