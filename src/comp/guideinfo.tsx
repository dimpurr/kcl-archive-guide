import React, { useState } from 'react';
import { FileText, BookOpen, BookOpenText, Globe, Users, Calendar, Search, ChevronRight, Building, Book } from 'lucide-react';
import TerminologyView from './terminology-view';

export const allGuides = {
  combined: [
    {
      id: 'ww1',
      title: 'World War One',
      type: 'Combined',
      format: 'PDF',
      description: 'Exploring the military, diplomatic and political documentation leading up to World War One',
      period: '1870-1949',
      collections: 200,
      institutions: 7,
      languages: 4,
          coverImage: 'https://cloud10.todocoleccion.online/libros-segunda-mano/tc/2022/07/10/21/349464304.jpg',
      tags: ['Military History', 'Politics', 'Diplomacy'],
      highlightItems: [
        'Field Marshal Robertson papers',
        'Anglo-French liaison documents',
        'Training manuals (1870-1914)',
        'Press cuttings and diplomatic notes'
      ]
    },
    {
      id: 'medicine',
      title: 'Medicine and Healthcare',
      type: 'Combined',
      format: 'PDF',
      description: 'Medical resources and healthcare documentation from the College Archives and Special Collections',
        coverImage: 'https://intouch-archive.kcl.ac.uk/wp-content/uploads/2023/11/into_the_archives-new.jpg',
      tags: ['Medicine', 'Healthcare', 'Science'],
      period: '1800-1950',
      collections: 150,
      institutions: 5,
      languages: 3,
      highlightItems: [
        'Hospital records',
        'Medical school documents',
        'Research papers',
        'Clinical photographs'
      ]
    }
  ],
  archives: [
    {
      id: 'ww1-az',
      title: 'LHCMA World War One A-Z listing',
      type: 'LHCMA',
      format: 'Online',
      coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
      description: 'Comprehensive alphabetical listing of World War One resources'
    },
    {
      category: 'World War Two',
      description: 'Detailed guides covering various aspects of World War Two from military operations to strategic planning',
      guides: [
        {
          id: 'far-east',
          title: 'Far East',
          type: 'LHCMA',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Documentation of military operations in the Pacific Theatre'
        },
        {
          id: 'high-command',
          title: 'High Command',
          type: 'LHCMA',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Strategic decisions and military leadership'
        },
        {
          id: 'north-africa',
          title: 'North Africa',
          type: 'LHCMA',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Desert warfare and campaigns in North Africa'
        },
        {
          id: 'nw-europe',
          title: 'North West Europe',
          type: 'LHCMA',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'D-Day and subsequent operations'
        },
        {
          id: 'special-forces',
          title: 'Special Forces',
          type: 'LHCMA',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Special operations and covert warfare'
        }
      ]
    },
    {
      category: 'Combined LHCMA and College',
      description: 'Guides that draw from both the Liddell Hart Centre and College Archives',
      guides: [
        {
          id: 'south-asia',
          title: 'South Asia',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Colonial administration and military operations'
        },
        {
          id: 'africa',
          title: 'Africa',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'African campaigns and colonial history'
        },
        {
          id: 'family-history',
          title: 'Family History',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Genealogical research resources'
        },
        {
          id: 'middle-east',
          title: 'Middle East',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Middle Eastern operations and politics'
        },
        {
          id: 'china',
          title: 'China',
          format: 'PDF',
          coverImage: 'https://www.kcl.ac.uk/departmentalimages/library/ascww1thumb.x5cb9d5d4.jpg?f=webp',
          description: 'Sino-British relations and military presence'
        }
      ]
    }
  ]
};


export const GuideTitleBar = ({ currentGuide, onBack, onToggleTerminology }) => {
    const [showTerminology, setShowTerminology] = useState(false);

    const handleTerminologyClick = () => {
        setShowTerminology(!showTerminology);
        if (onToggleTerminology) {
            onToggleTerminology(!showTerminology);
        }
    };

    return (
        <div className="w-full bg-[#F8F9FA] border-b">
            <div className="mx-auto max-w-7xl py-6 px-4">
                {currentGuide ? (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button onClick={onBack} className="text-[#4666E5] hover:text-[#D11242] mr-4 flex items-center">
                                    <ChevronRight className="h-4 w-4 transform rotate-180 mr-1" />
                                    Back to Research Guides
                                </button>&nbsp;&nbsp;&nbsp;
                                <h1 className="text-2xl font-medium">{currentGuide.title}</h1>
                            </div>
                            <button
                                onClick={handleTerminologyClick}
                                className="flex items-center px-3 py-2 text-sm border rounded hover:bg-gray-50"
                            >
                                <BookOpenText className="h-4 w-4 mr-2" />
                                {showTerminology ? 'Hide Terminology' : 'Show Terminology'}
                            </button>
                        </div>
                        {showTerminology && (
                            <div className="mt-4">
                                <TerminologyView />
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <BookOpen className="h-6 w-6 text-[#D11242]" />
                                    <h1 className="text-2xl font-medium">Research Guides</h1>
                                </div>
                                <p className="text-gray-600">Explore our comprehensive collection guides and research resources</p>
                            </div>
                            <button
                                onClick={handleTerminologyClick}
                                className="flex items-center px-3 py-2 text-sm border rounded hover:bg-gray-50"
                            >
                                <BookOpenText className="h-4 w-4 mr-2" />
                                {showTerminology ? 'Hide Terminology' : 'Show Terminology'}
                            </button>
                        </div>
                        {showTerminology && (
                            <div className="mt-4">
                                <TerminologyView />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export const GuideCard = ({ guide, onClick }) => (
  <div
    className="border rounded-lg overflow-hidden hover:shadow-lg cursor-pointer bg-white transition-all duration-200 hover:border-[#D11242]"
    onClick={onClick}
  >
    <img
      src={guide.coverImage}
      alt={guide.title}
            className="w-full h-[408px] object-cover"
            style={{ height: '308px' }}
    />
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-medium">{guide.title}</h3>
        <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">{guide.format}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
      {guide.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {guide.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-[#F8F9FA] text-gray-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      {guide.period && (
        <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
            <div>
              <div className="text-gray-600">Period</div>
              <div>{guide.period}</div>
            </div>
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 text-gray-400 mr-2" />
            <div>
              <div className="text-gray-600">Collections</div>
              <div>~{guide.collections}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Building className="h-4 w-4 text-gray-400 mr-2" />
            <div>
              <div className="text-gray-600">Institutions</div>
              <div>{guide.institutions}+</div>
            </div>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 text-gray-400 mr-2" />
            <div>
              <div className="text-gray-600">Languages</div>
              <div>{guide.languages}+</div>
            </div>
          </div>
        </div>
      )}
      {guide.highlightItems && (
        <div className="border-t pt-4 mt-4">
          <h4 className="text-sm font-medium mb-2">Featured Content</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {guide.highlightItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <Book className="h-3 w-3 text-gray-400 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export const CompactGuideCard = ({ guide, onClick }) => (
  <div
    className="flex items-center space-x-4 p-4 bg-white rounded-lg border hover:shadow-md cursor-pointer hover:border-[#D11242] transition-all duration-200"
    onClick={onClick}
  >
    <img
      src={guide.coverImage}
      alt={guide.title}
      className="w-16 h-16 object-cover rounded"
    />
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{guide.title}</h3>
        <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">{guide.format}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{guide.description}</p>
    </div>
  </div>
);

export const GuideList = ({ onSelectGuide }) => {
  return (
    <div className="py-8">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-medium mb-2">Combined Research Guides</h2>
            <p className="text-gray-600">Resources combining the College Archives, Liddell Hart Centre, and Special Collections</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">7+ Contributing institutions</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          {allGuides.combined.map(guide => (
            <GuideCard
              key={guide.id}
              guide={guide}
              onClick={() => onSelectGuide(guide)}
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-medium mb-2">Archives Research Guides</h2>
            <p className="text-gray-600">Specialized guides from the College Archives and LHCMA collections</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Individual LHCMA guides */}
          <div className="space-y-4">
            {allGuides.archives.slice(0, 1).map(guide => (
              <CompactGuideCard
                key={guide.id}
                guide={guide}
                onClick={() => onSelectGuide(guide)}
              />
            ))}
          </div>

                  {/* Categorized guides */} 
                  {/* 2 col */}
                  <div className='grid grid-cols-2 gap-8'>
          {allGuides.archives.slice(1).map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">{category.category}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.guides.map(guide => (
                  <CompactGuideCard
                    key={guide.id}
                    guide={guide}
                    onClick={() => onSelectGuide(guide)}
                  />
                ))}
              </div>
            </div>
          ))}</div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-8 pb-8 border-t pt-8">
        © All research guides are the copyright of King's College London and are supplied for private research only.
      </p>
    </div>
  );
};
