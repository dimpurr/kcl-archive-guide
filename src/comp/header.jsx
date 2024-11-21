import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SpaceEvenlyVerticallyIcon } from '@radix-ui/react-icons';

const Header = () => {
    return (
        <div className="w-full header">
            {/* Top navigation */}
            <div className="bg-[#4C5667]">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-[60px]">
                        {/* Logo */}
                        <div className="w-40 bg-[#D11242] p-0 relative top-[30px]">
                            <img src="https://www.kcl.ac.uk/SiteElements/2017/images/kcl-logo.svg" alt="King's College London" className="w-full" />
                        </div>

                        {/* Main navigation */}
                        <div className="flex space-x-6 text-white">
                            <span className="flex items-center px-3 py-6 hover:bg-[#595F6D] aria-[current=page]:bg-[#595F6D]">
                                Study <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                            <span className="flex items-center px-3 py-6 hover:bg-[#595F6D]">
                                Student services <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                            <span className="flex items-center px-3 py-6 hover:bg-[#595F6D]">
                                Research & Innovation <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                            <span className="flex items-center px-3 py-6 hover:bg-[#595F6D]">
                                Our faculties <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                            <span className="flex items-center px-3 py-6 hover:bg-[#595F6D]">
                                About <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                        </div>

                        {/* Right navigation */}
                        <div className="flex items-center space-x-4 text-white">
                            <span className="px-3 py-2 hover:bg-gray-600">Students</span>
                            <span className="px-3 py-2 hover:bg-gray-600">Staff</span>
                            <span className="px-3 py-2 hover:bg-gray-600">Alumni</span>
                            <span className="bg-red-600 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Secondary navigation */}
            <div className="w-full bg-[#F2F3F4]">
                <div className="mx-auto max-w-7xl">
                    <div className="py-6">
                        <br /><br />
                        <h1 className="text-2xl">Libraries & Collections</h1>
                        <div className="mt-4 flex space-x-4 text-[#4C5667]">
                            <a href="#" className="text-[#4666E5] hover:text-[#D11242]">Libraries</a>
                            <span>|</span>
                            <a href="#" className="text-[#4666E5] hover:text-[#D11242]">Collections</a>
                            <span>|</span>
                            <a href="#" className="text-[#4666E5] hover:text-[#D11242]">Research support</a>
                            <span>|</span>
                            <a href="#" className="text-[#4666E5] hover:text-[#D11242]">Further support</a>
                            <span>|</span>
                            <a href="#" className="text-[#4666E5] hover:text-[#D11242]">About</a>
                            <span>|</span>
                            <a href="#" className="text-[#4666E5] hover:text-[#D11242]">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tertiary navigation */}
            <div className="w-full border-b-4 border-[#2E1852] bg-[#F2F3F4]">
                <div className="mx-auto max-w-7xl">
                    <div className="flex space-x-6 py-2">
                        <a href="#" className="text-[#4C5667] hover:text-[#D11242]">Eresources</a>
                        <a href="#" className="rounded bg-[#E6E7E9] px-4 py-1 text-[#4C5667] hover:text-[#D11242] mt-[-4px]" aria-current="page">Archives</a>
                        <a href="#" className="text-[#4C5667] hover:text-[#D11242]">Special Collections</a>
                        <a href="#" className="text-[#4C5667] hover:text-[#D11242]">Exhibitions</a>
                        <a href="#" className="text-[#4C5667] hover:text-[#D11242]">Image library</a>
                        <a href="#" className="text-[#4C5667] hover:text-[#D11242]">Digital Scholarship</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;