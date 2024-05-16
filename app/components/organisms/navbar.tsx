'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../molecules/button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 lg:mx-20">
            <div className="flex items-center flex-shrink-0 text-black font-extrabold mr-6 lg:mr-72">
                rebase code camp
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    {isOpen ? (<FaTimes />) : (<FaBars />)}
                </button>
            </div>
            <div
                className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-base lg:flex mr-32 space-x-10">
                    <Link href="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        About Us
                    </Link>
                    <Link href="/programs" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Programs
                    </Link>
                    <Link href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Blog
                    </Link>
                    <Link href="/contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Contact Us
                    </Link>
                </div>
                <div>
                    <Link href="/dashboard">
                        <Button className='text-purple text-sm bg-transparent border-4 border-purple' type='button'>Apply Now</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}