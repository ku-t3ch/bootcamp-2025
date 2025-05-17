"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { GoArrowUpRight } from 'react-icons/go'

interface NavbarData {
  logoPic?: string;
}

const Navbar: React.FC<NavbarData> = ({ logoPic = '/assets/images/logo.png' }) => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-transparent text-white h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 z-10'>
      <div className='flex items-center'>
        <img src={logoPic} alt="Logo" className="h-20 w-auto mr-4" />
      </div>
      <div className='hidden md:flex space-x-10'>
        <Link href="#bootcamp-info" className='hover:text-gray-300'>
          Boot Camp คืออะไร?
        </Link>
        <Link href="/timeline" className='hover:text-gray-300'>
          ไทม์ไลน์
        </Link>
        <Link href="/our-camp" className='hover:text-gray-300'>
          ค่ายของเรา
        </Link>
        <Link href="/sponsors" className='hover:text-gray-300'>
          ผู้สนับสนุน
        </Link>
        <Link href="/contact" className='hover:text-gray-300'>
          ติดต่อเรา
        </Link>
      </div>

      <div className='hidden md:flex space-x-10'>
        <Button className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-Fuchsia-blue hover:bg-violet-700 w-40 h-10 text-white rounded-full">
            Team Ranking
            <GoArrowUpRight className="w-5 h-5" style={{ color: 'white' }} />
        </Button>
        <Button className='inline-flex items-center rounded-full text-sm px-4 py-2 bg-Indigo hover:bg-violet-700 w-28 h-10 text-white'>
            Login
            <GoArrowUpRight className="w-5 h-5" style={{ color: 'white' }} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;