import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gray-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <img
            src="https://images.vexels.com/media/users/3/152650/isolated/lists/dc67bc351ada9cb55254534c2a35f57d-spacex-spacecraft-icon.png"
            className="w-10 mr-3 text-white"
          />

          <Link href="/">
            <a className="text-xl font-bold text-white">Space Explorers</a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Roadster Information", route: "/" },
            { title: "Space X Launches", route: "/launches" },
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-white">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
