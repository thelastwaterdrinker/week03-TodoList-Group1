import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcAmex,
  FaCcMastercard,
  FaCcJcb,
  FaCcApplePay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flexCenter bg-gray-100" style={{ margin: 10 }}>
      <div className="flex flex-col justify-center gap-[10%] p-10">
        {/* Company Logo */}
        <div className="flexCenter">
          <Link href="/" className="mb-10">
            <Image src="wb-logo.svg" alt="logo" width={85} height={35} />
          </Link>
        </div>
        <div className="container-sm md:container-md lg:container-lg padding-container text-lg md:text-xl lg:text-3xl text-center">
          Discover the perfect companion for your journey and elevate every
          monent with your handpicked selection. Your journey, your style, your
          bag.
        </div>
        {/* Email */}
        <p className="font-bold pb-10 pt-10 text-lg md:text-xl lg:text-3xl">
          Connect
        </p>
        <p className="font-bold text-md md:text-lg lg:text-xl">
          Please enter your email
        </p>
        <div className="flex items-center border border-gray-700 p-4 pl-10 pr-10 mt-2 w-full text-lg md:text-xl lg:text-2xl">
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Email address"
          />
          <div className="ml-auto text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        {/* Explore and Quick Links and their Sub-sections */}
        <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 pt-10">
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title}>
              <ul className="flex flex-col flexBetween sm:justify-between md:flex-1 text-black">
                {columns.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
        {/* Copyright */}
        <div className="border bg-gray-20" />
        <p
          className="w-full text-center text-gray-30 text-lg md:text-xl lg:text-2xl"
          style={{ marginTop: 16 }}
        >
          &copy; 2024 Tugba Dogan Webb | All Rights Reserved. Terms, Privacy &
          Accessibility.
        </p>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <FaCcVisa size={48} />
          <FaCcPaypal size={48} />
          <FaCcAmex size={48} />
          <FaCcMastercard size={48} />
          <FaCcJcb size={48} />
          <FaCcApplePay size={48} />
        </div>
      </div>
    </footer>
  );
};
  /* Explore and Quick Links */
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-row flexBetween">
      <div>
        <p className="font-bold text-lg md:text-xl lg:text-2xl text-black pb-5">
          {title}
        </p>
        <div className="text-lg md:text-xl lg:text-2xl flex flex-col">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="cursor-pointer">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
