import React, { useState } from 'react';
import {
    LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis,
    Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { Globe, Map, ZoomIn, ZoomOut, Layers, Share2 } from 'lucide-react';

// Campaign Timeline Visualization
const CampaignTimeline = () => {
    const data = [
        { date: '1914', battles: 12, casualties: 180000, victories: 5 },
        { date: '1915', battles: 24, casualties: 320000, victories: 8 },
        { date: '1916', battles: 35, casualties: 580000, victories: 12 },
        { date: '1917', battles: 28, casualties: 420000, victories: 9 },
        { date: '1918', battles: 42, casualties: 680000, victories: 15 },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Campaign Statistics Over Time</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="battles" stroke="#ef4444" name="Major Battles" />
                        <Line type="monotone" dataKey="victories" stroke="#22c55e" name="Allied Victories" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

// Force Distribution Map 
const BattlefieldMap = () => {
    const [zoom, setZoom] = useState(1);
    const [activeLayers, setActiveLayers] = useState(['terrain', 'forces', 'battles']);

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Western Front - 1916</h3>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setZoom(z => Math.min(z + 0.2, 2))}
                        className="p-2 hover:bg-gray-100 rounded"
                    >
                        <ZoomIn className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))}
                        className="p-2 hover:bg-gray-100 rounded"
                    >
                        <ZoomOut className="h-5 w-5" />
                    </button>
                    <div className="border-l mx-2 h-6"></div>
                    <div className="flex space-x-1">
                        {['terrain', 'forces', 'battles', 'supply'].map(layer => (
                            <button
                                key={layer}
                                onClick={() => setActiveLayers(prev =>
                                    prev.includes(layer)
                                        ? prev.filter(l => l !== layer)
                                        : [...prev, layer]
                                )}
                                className={`px-3 py-1 rounded text-sm ${activeLayers.includes(layer)
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-600'
                                    }`}
                            >
                                {layer.charAt(0).toUpperCase() + layer.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative h-[600px] overflow-hidden">
                <div
                    style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: 'center center'
                    }}
                    className="w-full h-full bg-gray-100 relative"
                >
                    <img
                        src="/api/placeholder/1200/800"
                        alt="Historical map"
                        className="w-full h-full object-cover"
                    />
                    {activeLayers.includes('battles') && (
                        <>
                            <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
                            <div className="absolute top-1/2 left-2/3 w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
                        </>
                    )}
                    {activeLayers.includes('forces') && (
                        <>
                            <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-blue-600 rounded-lg"></div>
                            <div className="absolute top-2/3 left-1/2 w-8 h-8 border-2 border-red-600 rounded-lg"></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// Casualties Analytics
const CasualtiesAnalytics = () => {
    const data = [
        { name: 'Britain', value: 885138 },
        { name: 'France', value: 1357800 },
        { name: 'Germany', value: 1773700 },
        { name: 'Russia', value: 1700000 },
        { name: 'Austria-Hungary', value: 1200000 },
    ];

    const COLORS = ['#ef4444', '#3b82f6', '#a855f7', '#22c55e', '#f97316'];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Military Casualties by Nation</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

// Resources Dashboard
const ResourcesDashboard = () => {
    const data = [
        { type: 'Artillery', allied: 12000, central: 11000 },
        { type: 'Aircraft', allied: 4500, central: 3800 },
        { type: 'Tanks', allied: 800, central: 100 },
        { type: 'Ships', allied: 600, central: 400 },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Military Resources Comparison</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="allied" name="Allied Forces" fill="#ef4444" />
                        <Bar dataKey="central" name="Central Powers" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default function VisualizationDashboard() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <CampaignTimeline />
                <CasualtiesAnalytics />
            </div>

            <BattlefieldMap />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <ResourcesDashboard />
            </div>
        </div>
    );
}