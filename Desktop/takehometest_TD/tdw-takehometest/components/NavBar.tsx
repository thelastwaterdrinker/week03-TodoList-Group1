import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="top-section w-full bg-black text-white text-center align-text-bottom pb-3 pt-10 text-md md:text-lg lg:text-xl">
        <p>Free shipping for $50 and more purchases</p>
      </div>

      {/* Navbar and sub-categories */}
      <nav className="flexBetween max-container padding-container relative z-30 text-lg md:text-xl lg:text-2xl">
        <div className="flex justify-around">
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden mx-5"
          />

          <Image
            src="search.svg"
            alt="search"
            width={40}
            height={40}
            className="inline-block cursor-pointer lg:hidden mx-5"
          />
        </div>

        <Link href="/">
          <Image src="/wb-logo.svg" alt="logo" width={124} height={40} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button type="button" title="Login" variant="btn_dark_green" />
        </div>
        <div className="flex justify-around">
          <Image
            src="user.svg"
            alt="user"
            width={40}
            height={40}
            className="inline-block cursor-pointer lg:hidden mx-5"
          />

          <Image
            src="shopping.svg"
            alt="shopping"
            width={40}
            height={40}
            className="inline-block cursor-pointer lg:hidden mx-5"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
