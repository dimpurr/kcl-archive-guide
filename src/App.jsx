import React, { useState } from 'react';
import Content from './comp/content';
import Footer from './comp/footer';
import Side from './comp/side';
import Translate from './comp/translate';
import Header from './comp/header';
import GlobalFooter from './comp/globalfooter';
import './App.css';
import { GuideList, GuideTitleBar } from './comp/guideinfo'
export default function App() {
  const [currentGuide, setCurrentGuide] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <GuideTitleBar
        currentGuide={currentGuide}
        onBack={() => setCurrentGuide(null)}
      />
      <div className="mx-auto max-w-7xl px-4">
        {currentGuide ? (
          <div className="relative py-8">
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