import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import {
    FileText,
    BookOpen,
    CalendarDays,
    Users,
    Search,
    Globe
} from 'lucide-react';

const archiveStructure = {
    title: "World War One Research Guide",
    sections: [
        {
            title: "Prelude to war",
            page: 5,
            collections: [
                "Press cuttings and notes on political/diplomatic background",
                "Military training manuals (1870 onwards)",
                "Balkan correspondent scrapbooks (1903-13)",
                "Observer reports from Russo-Japanese war",
                "Military exercises reports (1906-9)"
            ]
        },
        {
            title: "High Command & strategy",
            page: 7,
            collections: [
                "Field Marshal Robertson papers",
                "Anglo-French liaison documents",
                "Gallipoli command documents",
                "Western Front strategy papers"
            ]
        },
        {
            title: "Propaganda",
            page: 9,
            collections: [
                "World War One recruitment posters",
                "Newspaper cartoons",
                "French postcards",
                "Press cuttings (1914-8)",
                "Society of Friends leaflets"
            ]
        },
        {
            title: "Military & naval campaigns",
            page: 11,
            collections: [
                "Western Front operations (1914-8)",
                "Eastern Front documents",
                "Gallipoli campaign records",
                "Balkans operations",
                "Naval warfare documents"
            ]
        },
        {
            title: "Technology of war",
            page: 18,
            collections: [
                "Air warfare documents",
                "Chemical warfare papers",
                "Tank development records",
                "Research work at King's"
            ]
        },
        {
            title: "Empire & dominions",
            page: 22,
            collections: [
                "Africa operations",
                "Asia campaigns",
                "Western Front colonial forces",
                "Empire contributions"
            ]
        },
        {
            title: "Health & welfare",
            page: 24,
            collections: [
                "Army medicine records",
                "Nursing collections",
                "Prisoner of war accounts",
                "Civilian welfare documents"
            ]
        },
        {
            title: "Aftermath",
            page: 27,
            collections: [
                "Armistice documents",
                "Peace treaties",
                "Plebiscites records",
                "Reparations documents"
            ]
        },
        {
            title: "Memorials",
            page: 30,
            collections: [
                "War memorials documentation",
                "Commemoration records",
                "Memorial photography",
                "Personal tributes"
            ]
        },
        {
            title: "Writing the war",
            page: 32,
            collections: [
                "Personal memoirs",
                "Official histories",
                "War literature",
                "Historical analysis"
            ]
        }
    ]
};

const documentTypes = [
    { name: 'Orders & Reports', value: 35, color: '#ef4444' },
    { name: 'Diaries & Letters', value: 42, color: '#3b82f6' },
    { name: 'Photographs & Maps', value: 28, color: '#22c55e' },
    { name: 'Telegrams & Logs', value: 25, color: '#f97316' },
    { name: 'Press & Posters', value: 30, color: '#8b5cf6' },
    { name: 'Memoranda', value: 20, color: '#ec4899' },
    { name: 'Memoirs', value: 15, color: '#14b8a6' }
];

const SectionNavigation = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Guide Sections
            </h3>
            <div className="grid grid-cols-1 gap-4">
                {archiveStructure.sections.map((section, index) => (
                    <a
                        key={index}
                        href={`#section-${section.page}`}
                        className="p-3 rounded-lg border hover:bg-red-50 hover:border-red-200 transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-medium">{section.title}</h4>
                                <p className="text-sm text-gray-500">
                                    {section.collections.length} collections
                                </p>
                            </div>
                            <span className="text-sm text-gray-400">p.{section.page}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

const CollectionDistribution = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="mr-2" />
                Document Type Distribution
            </h3>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={documentTypes}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {documentTypes.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const TimelineExplorer = () => {
    const timelineData = [
        { year: 1914, event: "War Outbreak", docs: "Orders, telegrams, reports" },
        { year: 1915, event: "Gallipoli Campaign", docs: "Hamilton papers, photographs" },
        { year: 1916, event: "Somme Offensive", docs: "Battle reports, letters" },
        { year: 1917, event: "Tank Deployment", docs: "Technical documents" },
        { year: 1918, event: "Armistice", docs: "Peace treaties, memoranda" }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CalendarDays className="mr-2" />
                Key Document Timeline
            </h3>
            <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-4 ml-8">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-8 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">
                                {item.year}
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <h4 className="font-medium text-sm">{item.event}</h4>
                                <p className="text-xs text-gray-600 mt-1">{item.docs}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ArchiveStats = () => {
    const stats = [
        { label: 'Total Collections', value: '~200', icon: FileText },
        { label: 'Institutions', value: '7+', icon: Users },
        { label: 'Date Range', value: '1870-1949', icon: CalendarDays },
        { label: 'Languages', value: '4+', icon: Globe }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                        <Icon className="h-6 w-6 text-red-600 mb-2" />
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default function ArchiveVisualizations() {
    return (
        <div className="max-w-screen-xl mx-auto p-4 space-y-4">
            <ArchiveStats />
            <SectionNavigation />
            <CollectionDistribution />
            <TimelineExplorer />
        </div>
    );
}