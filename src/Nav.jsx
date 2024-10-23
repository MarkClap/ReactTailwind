import "./index.css";

export default function Nav() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-cyan-400 shadow sm:items-baseline w-full">
      <div className="sm:mb-0">
        <a
          href="#"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          LOGO
        </a>
      </div>
      <div className="mb-2 sm:mb-0">
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 mr-3 font-medium"
        >
          Sign in
        </a>
      </div>
    </nav>
  );
}
