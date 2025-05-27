"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { GoArrowUpRight } from "react-icons/go";
import { HiMenu as MenuIcon } from "react-icons/hi";
import { HiOutlineXMark as XIcon } from "react-icons/hi2";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scroll = useScroll();

  const isTop = scroll.y <= 0;

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 text-white min-h-24 flex items-center justify-between px-4 md:px-8 lg:px-16 z-999 border-gray-700 transition-colors bg-transparent ${!isTop && "bg-[rgba(0,0,0,0.4)] backdrop-blur border-b"}`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={160}
          height={130}
          className="w-30 h-auto -translate-y-1"
        />
      </Link>

      <div className="lg:flex hidden items-center justify-between gap-14">
        <div className="hidden lg:flex space-x-10">
          <Link href="/#bootcamp-info" className="hover:text-gray-300">
            Boot Camp คืออะไร?
          </Link>
          <Link href="/#timeline" className="hover:text-gray-300">
            ไทม์ไลน์
          </Link>
          <Link href="/#ourcamp" className="hover:text-gray-300">
            ค่ายของเรา
          </Link>
          <Link href="/#sponsors" className="hover:text-gray-300">
            ผู้สนับสนุน
          </Link>
          <Link href="/#contact" className="hover:text-gray-300">
            ติดต่อเรา
          </Link>
        </div>
        <div className="hidden lg:flex space-x-7">
          <Button
            as={Link}
            href="/leaderboard"
            className="inline-flex items-center gap-2 text-base px-4 py-2 bg-Fuchsia-blue hover:bg-violet-700 w-40 h-12 text-white rounded-full"
          >
            Team Ranking
            <GoArrowUpRight
              className="size-5"
              style={{ color: "white", strokeWidth: 2 }}
            />
          </Button>
          <Button
            as={Link}
            href="/login"
            className="inline-flex items-center rounded-full text-base px-4 py-2 bg-Indigo hover:bg-violet-700 w-28 h-12 text-white"
          >
            Log in
            <GoArrowUpRight
              className="size-5"
              style={{ color: "white", strokeWidth: 2 }}
            />
          </Button>
        </div>
      </div>

      {/* Mobile Nav  */}

      <div className="lg:hidden absolute top-6 right-10 p-4 z-999">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? (
            <XIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6 cursor-pointer" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-18 right-15 w-64 bg-[#111828] border-gray-700 border text-white rounded-xl shadow-lg flex flex-col py-4 px-6 space-y-4 z-999 *:hover:text-gray-500 *:transition-colors">
          <Link href="/#bootcamp-info" onClick={handleClick}>
            Boot Camp คืออะไร?
          </Link>
          <Link href="/#timeline" onClick={handleClick}>
            ไทม์ไลน์
          </Link>
          <Link href="/#ourcamp" onClick={handleClick}>
            ค่ายของเรา
          </Link>
          <Link href="/#sponsors" onClick={handleClick}>
            ผู้สนับสนุน
          </Link>
          <Link href="/#contact" onClick={handleClick}>
            ติดต่อเรา
          </Link>
          <Link
            href="/leaderboard"
            onClick={handleClick}
            className="flex items-center gap-1"
          >
            Team Ranking
            <GoArrowUpRight
              className="size-5"
              style={{ color: "white", strokeWidth: 2 }}
            />
          </Link>
          <Link
            href="/login"
            onClick={handleClick}
            className="flex items-center gap-1"
          >
            Log in
            <GoArrowUpRight
              className="size-5"
              style={{ color: "white", strokeWidth: 2 }}
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
