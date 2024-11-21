import React, { useState } from 'react';
import { Languages, MessageSquare, Users, Heart, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';

const CrowdsourcingBanner = () => {
    const languages = [
        { code: 'en', name: 'English', progress: 85, contributors: 156 },
        { code: 'zh', name: 'Chinese', progress: 70, contributors: 89 },
        { code: 'fr', name: 'French', progress: 55, contributors: 45 },
        { code: 'de', name: 'German', progress: 30, contributors: 28 },
        { code: 'ru', name: 'Russian', progress: 25, contributors: 23 }
    ];

    const recentActivity = [
        {
            lang: 'ZH',
            title: 'North West Frontier Province',
            translation: '西北边境省',
            time: '2h ago',
            likes: 12,
            comments: 3
        },
        {
            lang: 'FR',
            title: 'Indian Mutiny papers',
            translation: 'Documents de la révolte des Cipayes',
            time: '3h ago',
            likes: 8,
            comments: 5
        }
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="grid grid-cols-3 gap-8">
                {/* Language Progress */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Languages className="h-5 w-5 mr-2" />
                        Translation Progress
                    </h3>
                    <div className="space-y-4">
                        {languages.map(lang => (
                            <div key={lang.code} className="flex items-center">
                                <div className="w-20 font-medium">{lang.name}</div>
                                <div className="flex-1 mx-4">
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-red-600 rounded-full transition-all duration-500"
                                            style={{ width: `${lang.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <span>{lang.progress}%</span>
                                    <span>·</span>
                                    <Users className="h-4 w-4" />
                                    <span>{lang.contributors}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {recentActivity.map((activity, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium px-2 py-1 bg-gray-200 rounded">
                                        {activity.lang}
                                    </span>
                                    <span className="text-sm text-gray-500">{activity.time}</span>
                                </div>
                                <p className="text-sm font-medium mb-1">{activity.title}</p>
                                <p className="text-sm text-gray-600 mb-2">{activity.translation}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <button className="flex items-center hover:text-red-600">
                                        <Heart className="h-4 w-4 mr-1" />
                                        {activity.likes}
                                    </button>
                                    <button className="flex items-center hover:text-red-600">
                                        <MessageCircle className="h-4 w-4 mr-1" />
                                        {activity.comments}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Join Translation Team
                    </h3>
                    <div className="bg-red-50 rounded-lg p-4 mb-4">
                        <p className="text-sm text-red-800 mb-4">
                            Help make historical documents accessible to researchers worldwide by contributing translations in your language.
                        </p>
                        <ul className="text-sm text-red-700 space-y-2 mb-4">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Earn recognition badges
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Connect with fellow historians
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Access exclusive resources
                            </li>
                        </ul>
                        <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center">
                            Start Contributing
                            <ArrowUpRight className="h-4 w-4 ml-2" />
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Already a contributor?</p>
                        <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                            Sign in to continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrowdsourcingBanner;