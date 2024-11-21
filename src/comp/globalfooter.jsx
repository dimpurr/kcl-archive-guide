import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const GlobalFooter = () => {
    return (
        <footer className="footer w-full font-['Kings_Bureau_Grotesque']">
            {/* Social Media Section */}
            <div className="w-full bg-[#1A2E55] text-white py-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-2xl">Connect with Libraries & Collections</h2>
                        <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-[#1A2E55]">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-[#1A2E55]">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-[#1A2E55]">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="w-full bg-[#4C5667] text-white py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-5 gap-8">
                        {/* Study at King's */}
                        <div>
                            <h3 className="text-xl mb-4">Study at King's</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Degree courses</a></li>
                                <li><a href="#" className="hover:underline">Postgraduate taught</a></li>
                                <li><a href="#" className="hover:underline">Postgraduate research</a></li>
                                <li><a href="#" className="hover:underline">International students</a></li>
                                <li><a href="#" className="hover:underline">Summer schools</a></li>
                                <li><a href="#" className="hover:underline">Student experience</a></li>
                            </ul>
                        </div>

                        {/* Information for */}
                        <div>
                            <h3 className="text-xl mb-4">Information for</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">New students</a></li>
                                <li><a href="#" className="hover:underline">Staff</a></li>
                                <li><a href="#" className="hover:underline">Alumni</a></li>
                            </ul>
                        </div>

                        {/* Facilities */}
                        <div>
                            <h3 className="text-xl mb-4">Facilities</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Libraries & Collections</a></li>
                                <li><a href="#" className="hover:underline">Accommodation</a></li>
                                <li><a href="#" className="hover:underline">IT</a></li>
                            </ul>
                        </div>

                        {/* Discover King's */}
                        <div>
                            <h3 className="text-xl mb-4">Discover King's</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">News Centre</a></li>
                                <li><a href="#" className="hover:underline">Events</a></li>
                                <li><a href="#" className="hover:underline">Students union</a></li>
                                <li><a href="#" className="hover:underline">Visit King's</a></li>
                                <li><a href="#" className="hover:underline">Job opportunities</a></li>
                            </ul>
                        </div>

                        {/* Contact us */}
                        <div>
                            <h3 className="text-xl mb-4">Contact us</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">+44 (0)20 7836 5454</a></li>
                                <li>King's College London</li>
                                <li>Strand</li>
                                <li>London</li>
                                <li>WC2R 2LS</li>
                                <li>United Kingdom</li>
                            </ul>
                            <img
                                src="https://www.kcl.ac.uk/SiteElements/2017/images/kcl-logo.svg"
                                alt="King's College London"
                                className="mt-4 w-[160px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="w-[full] bg-[#3B444F] text-white py-4">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-6">
                            <a href="#" className="hover:underline">Terms & conditions</a>
                            <a href="#" className="hover:underline">Privacy policy</a>
                            <a href="#" className="hover:underline">Modern slavery statement</a>
                            <a href="#" className="hover:underline">Accessibility</a>
                            <a href="#" className="hover:underline">Cookies</a>
                        </div>
                        <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
                            Download app
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default GlobalFooter;