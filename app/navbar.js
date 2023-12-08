import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#0A0A0A] p-3">
      <div className="flex items-center justify-between">
        <div className="pl-12 pt-14">
          <img src="/fampay.png" alt="Logo" className="h-8" />
        </div>

        <ul className="flex items-center space-x-20 text-1xl pt-14 pr-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Blog</Link>
          </li>
          <li>
            <button className="rounded-full bg-[#F8A239] text-white px-4 py-2">
              Download App
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
