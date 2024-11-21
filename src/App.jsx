import React, { useState } from 'react';
import Content from './comp/content';
import Footer from './comp/footer';
import Side from './comp/side';
import Translate from './comp/translate';
import Header from './comp/header';
import GlobalFooter from './comp/globalfooter';
import './App.css'

// Research guides data
const allGuides = {
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
      languages: 4
    },
    {
      id: 'medicine',
      title: 'Medicine and Healthcare',
      type: 'Combined',
      format: 'PDF',
      description: 'Medical resources and healthcare documentation'
    }
  ],
  archives: [
    {
      id: 'ww1-az',
      title: 'LHCMA World War One A-Z listing',
      type: 'LHCMA',
      format: 'Online'
    },
    {
      category: 'World War Two',
      guides: [
        { id: 'far-east', title: 'Far East', type: 'LHCMA', format: 'PDF' },
        { id: 'high-command', title: 'High Command', type: 'LHCMA', format: 'PDF' },
        { id: 'north-africa', title: 'North Africa', type: 'LHCMA', format: 'PDF' },
        { id: 'nw-europe', title: 'North West Europe', type: 'LHCMA', format: 'PDF' },
        { id: 'special-forces', title: 'Special Forces', type: 'LHCMA', format: 'PDF' }
      ]
    },
    {
      category: 'Combined LHCMA and College',
      guides: [
        { id: 'south-asia', title: 'South Asia', format: 'PDF' },
        { id: 'africa', title: 'Africa', format: 'PDF' },
        { id: 'family-history', title: 'Family History', format: 'PDF' },
        { id: 'middle-east', title: 'Middle East', format: 'PDF' },
        { id: 'china', title: 'China', format: 'PDF' }
      ]
    }
  ]
};

// Guide title bar component
const GuideTitleBar = ({ currentGuide, onBack }) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="mx-auto max-w-7xl py-4 px-4">
        {currentGuide ? (
          <div className="flex items-center">
            <button onClick={onBack} className="text-[#4666E5] hover:text-[#D11242] mr-4">
              ← Back to Research Guides
            </button>
            <h1 className="text-2xl">{currentGuide.title}</h1>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl">Research Guides</h1>
            <p className="text-gray-600 mt-2">Using the collections</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Guide list component
const GuideList = ({ onSelectGuide }) => {
  return (
    <div className="py-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Combined Research Guides</h2>
        <p className="mb-4">The following Research Guides combine the resources of the College Archives, the Liddell Hart Centre for Military Archives and the Foyle Special Collections Library.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allGuides.combined.map(guide => (
            <div
              key={guide.id}
              className="border rounded-lg p-6 hover:shadow-lg cursor-pointer bg-white"
              onClick={() => onSelectGuide(guide)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl">{guide.title}</h3>
                <span className="text-sm text-gray-500">{guide.format}</span>
              </div>
              {guide.description && <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>}
              {guide.period && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Period</div>
                    <div>{guide.period}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Collections</div>
                    <div>~{guide.collections}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Institutions</div>
                    <div>{guide.institutions}+</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Languages</div>
                    <div>{guide.languages}+</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Archives Research Guides</h2>
        <p className="mb-4">Materials available specifically from King's College London Archives for a range of popular research topics, both from the Liddell Hart Centre for Military Archives and the College Archive collections, are highlighted in the following guides:</p>

        <div className="space-y-6">
          {/* Individual LHCMA guides */}
          <div className="space-y-2">
            {allGuides.archives.slice(0, 1).map(guide => (
              <div
                key={guide.id}
                className="flex justify-between items-center p-3 bg-white rounded hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectGuide(guide)}
              >
                <span>{guide.title}</span>
                <span className="text-sm text-gray-500">{guide.format}</span>
              </div>
            ))}
          </div>

          {/* World War Two category */}
          {allGuides.archives.slice(1).map((category, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium">{category.category}</h3>
              {category.guides.map(guide => (
                <div
                  key={guide.id}
                  className="flex justify-between items-center p-3 bg-white rounded hover:bg-gray-50 cursor-pointer"
                  onClick={() => onSelectGuide(guide)}
                >
                  <span>{guide.title}</span>
                  <span className="text-sm text-gray-500">{guide.format}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-8">© All research guides are the copyright of King's College London and are supplied for private research only.</p>
    </div>
  );
};

// Main App component
export default function App() {
  const [currentGuide, setCurrentGuide] = useState(null);

  return (
    <div>
      <Header />
      <GuideTitleBar
        currentGuide={currentGuide}
        onBack={() => setCurrentGuide(null)}
      />
      <div className="mx-auto max-w-7xl px-4">
        {currentGuide ? (
          <div className="relative">
            <div className="flex">
              <div className="w-96 flex-shrink-0 mr-10">
                <Side />
              </div>
              <div className="flex-1">
                <Content />
                <Footer />
              </div>
            </div>
            <div className="mt-4 w-full">
              <br />
              <hr />
              <br />
              <Translate />
            </div>
          </div>
        ) : (
          <GuideList onSelectGuide={setCurrentGuide} />
        )}
      </div>
      <GlobalFooter />
    </div>
  );
}