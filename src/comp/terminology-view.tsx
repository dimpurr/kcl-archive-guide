import React, { useState } from 'react';
import { Book, Globe, Search } from 'lucide-react';

export default function TerminologyView() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('historical');

    const terms = [
        {
            id: 1,
            historical: "Assam",
            modern: "Nagaland, India",
            category: "geography",
            period: "1874-1947",
            description: "A region in northeastern British India, significant for tea plantations and frontier administration.",
            links: ["North East India Guide", "Colonial Administration"]
        },
        {
            id: 2,
            historical: "Bombay",
            modern: "Mumbai",
            category: "geography",
            period: "1800-1947",
            description: "Major port city and administrative center of British India's western presidency.",
            links: ["India Guide", "Colonial Records"]
        },
        {
            id: 3,
            historical: "Baluchistan",
            modern: "Balochistan",
            category: "geography",
            period: "1876-1947",
            description: "A strategic region spanning modern Pakistan and Iran, important for British frontier policy.",
            links: ["South Asia Guide", "Military Operations"]
        },
        {
            id: 4,
            historical: "Ceylon",
            modern: "Sri Lanka",
            category: "geography",
            period: "1815-1948",
            description: "Island nation and British Crown Colony in South Asia.",
            links: ["Maritime Trade", "Colonial Administration"]
        },
        {
            id: 5,
            historical: "Dacca",
            modern: "Dhaka, Bangladesh",
            category: "geography",
            period: "1905-1947",
            description: "Major administrative center in Eastern Bengal.",
            links: ["Bengal Collections", "Urban History"]
        },
        {
            id: 6,
            historical: "Mesopotamia",
            modern: "Iraq",
            category: "geography",
            period: "1914-1932",
            description: "Region between Tigris and Euphrates rivers, site of British military operations.",
            links: ["Middle East Guide", "Military History"]
        },
        {
            id: 7,
            historical: "LHCMA",
            modern: "Liddell Hart Centre for Military Archives",
            category: "organizations",
            period: "1964-present",
            description: "Archive center holding military records, personal papers and photographs.",
            links: ["Archive Guide", "Military Collections"]
        },
        {
            id: 8,
            historical: "Rangoon",
            modern: "Yangon, Myanmar",
            category: "geography",
            period: "1852-1947",
            description: "Capital city of British Burma and major port.",
            links: ["Burma Collections", "Colonial Records"]
        }
    ];

    const categories = [
        { id: 'all', label: 'All Terms' },
        { id: 'geography', label: 'Place Names' },
        { id: 'military', label: 'Military Terms' },
        { id: 'organizations', label: 'Organizations' }
    ];

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'zh', name: 'Chinese' }
    ];

    const filteredTerms = terms.filter(term => {
        if (activeCategory !== 'all' && term.category !== activeCategory) return false;
        if (searchTerm && !term.historical.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !term.modern.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    return (
        <div className="w-full bg-white">
            <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl flex items-center">
                        <Book className="w-5 h-5 mr-2 text-[#D11242]" />
                        Terminology Glossary
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <select className="form-select text-sm border rounded p-1">
                            {languages.map(lang => (
                                <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="   Search terms..."
                            className="w-full pl-10 pr-4 py-2 border rounded"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="form-select border rounded p-2"
                        onChange={e => setActiveCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto" style={{ maxHeight: 400, overflowY: 'auto' }}>
                <div className="p-4 grid grid-cols-3 gap-4">
                    {filteredTerms.map(term => (
                        <div key={term.id} className="border rounded p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">{term.historical}</h3>
                                <span className="text-sm text-gray-500">{term.category}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">Modern name: {term.modern}</p>
                            <p className="text-sm text-gray-600 mb-1">{term.description}</p>
                            <p className="text-sm text-gray-600 mb-2">Historical period: {term.period}</p>
                            <div className="flex flex-wrap gap-2">
                                {term.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        // radius border
                                        className="text-sm text-[#4666E5] hover:text-[#D11242] border border-[#4666E5] rounded p-2"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t p-4">
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Showing {filteredTerms.length} of {terms.length} terms</span>
                    <div className="flex items-center space-x-2">
                        <span>Sort by:</span>
                        <select
                            className="border rounded p-1"
                            onChange={e => setSortOrder(e.target.value)}
                        >
                            <option value="historical">Historical Period</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="category">Category</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}