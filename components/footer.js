function Footer() {
  return (
    <footer className="bg-gray-500">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
        <li>
          Created by{" "}
          <a href="https://yorda.dev" target="_blank" className="font-bold">
            Yorda
          </a>
        </li>

        <li>
          <a
            href="https://github.com/yordadev"
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
