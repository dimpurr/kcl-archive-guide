import React, { useState } from 'react';
import {
    BookOpen,
    FileText,
    Image,
    Calendar,
    Globe,
    ChevronRight,
    ExternalLink,
    Play,
    Pause
} from 'lucide-react';

// Sidebar floating content component
const FloatingContent = ({ children, align = 'right' }) => (
    <div className={`md:float-${align} my-6 md:m-4 bg-white rounded-lg shadow-lg overflow-hidden`}>
        {children}
    </div>
);

// Timeline tooltip component
const TimelineTooltip = ({ year, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="inline-block relative cursor-help border-b-2 border-dotted border-red-300"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span className="text-red-600 font-medium">{year}</span>
            {isOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 bg-white shadow-lg rounded-lg z-10">
                    <h4 className="font-medium mb-1">{title}</h4>
                    <p className="text-sm text-gray-600">{content}</p>
                    <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
                </div>
            )}
        </div>
    );
};

// Image gallery component
const ImageGallery = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    React.useEffect(() => {
        if (isPlaying) {
            const timer = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % images.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isPlaying, images.length]);

    return (
        <div className="relative">
            <img
                src={images[activeIndex].url}
                alt={images[activeIndex].caption}
                className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm">{images[activeIndex].caption}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 hover:bg-gray-200 rounded"
                    >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <div className="text-sm text-gray-600">
                        {activeIndex + 1} / {images.length}
                    </div>
                </div>
                <div className="flex gap-2 overflow-auto">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 
                ${activeIndex === index ? 'border-red-600' : 'border-transparent'}`}
                        >
                            <img
                                src={image.url}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Document preview component
const DocumentPreview = ({ document }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-grow">
                    <h4 className="font-medium">{document.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{document.date}</p>
                    <p className={`text-gray-600 ${!isExpanded && 'line-clamp-3'}`}>
                        {document.content}
                    </p>
                    {document.content.length > 150 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-red-600 text-sm mt-2 hover:underline"
                        >
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main article component
export default function PreludeToWar() {
    // Sample gallery images
    const galleryImages = [
        {
            url: 'https://cdn.britannica.com/49/135149-050-D6B8878A/troops-British-trench-Western-Front-World-War.jpg',
            caption: 'General Sir Ian Hamilton with Field Marshal Lord Roberts and other British and German officers, Hotel Bellevue, Dresden, 1910'
        },
        {
            url: 'https://cdn.britannica.com/49/135149-050-D6B8878A/troops-British-trench-Western-Front-World-War.jpg',
             caption: 'Military exercises and manoeuvres documentation from 1906-1909'
        },
        {
            url: 'https://cdn.britannica.com/49/135149-050-D6B8878A/troops-British-trench-Western-Front-World-War.jpg',
             caption: 'Balkan correspondent scrapbooks covering the period 1903-1913'
        }
    ];

    // Sample key documents
    const keyDocuments = [
        {
            title: "Field Service Regulations 1909",
            date: "1909",
            content: "Operations, organisation and administration documents from military training manuals collected by Captain Sir Basil Liddell Hart. These materials provide crucial insight into military preparation and thinking before the outbreak of war."
        },
        {
            title: "Russo-Japanese War Observations",
            date: "1904-1905",
            content: "General Sir Ian Hamilton's detailed diaries, notes, photographs, maps and letters home from his service as military attaché to the First Japanese Army in Manchuria. These observations would later form the basis of his influential work 'A Staff Officer's scrap-book during the Russo-Japanese war'."
        }
    ];

    return (
        <article className="max-w-4xl mx-auto prose prose-lg prose-red">
            {/* Hero section */}
            <div className="relative h-96 -mx-8 mb-12">
                <img
                    src="https://assets.editorial.aetnd.com/uploads/2009/10/world-war-one-gettyimages-90007631.jpg"
                    alt="WWI Prelude"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h1 className="text-4xl font-bold mb-4">Prelude to War</h1>
                    <p className="text-xl opacity-90">
                        Exploring the military, diplomatic and political documentation leading up to World War One
                    </p>
                </div>
            </div>

            {/* Introduction */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Calendar className="h-4 w-4" />
                <span>1870-1914</span>
                <span className="mx-2">•</span>
                <Globe className="h-4 w-4" />
                <span>Europe, Asia & The Balkans</span>
                <span className="mx-2">•</span>
                <FileText className="h-4 w-4" />
                <span>Multiple Collections</span>
            </div>

            <FloatingContent align="right">
                <ImageGallery images={galleryImages} />
            </FloatingContent>

            <p className="lead">
                The Liddell Hart Centre for Military Archives holds extensive collections documenting
                the build-up to World War One, including press cuttings, military training manuals,
                and crucial correspondence between key military figures.
            </p>

            <p>
                Captain Sir Basil Liddell Hart's reference collection provides insight into the political
                and diplomatic background through press cuttings and notes from the period. His collection
                also includes military training manuals published from <TimelineTooltip
                    year="1870"
                    title="Military Documentation"
                    content="The earliest military training manuals in the collection, marking the beginning of modern military doctrine development."
                /> &nbsp;onwards.
            </p>

            <FloatingContent align="left">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Key Documents</h3>
                    <div className="space-y-4">
                        {keyDocuments.map((doc, index) => (
                            <DocumentPreview key={index} document={doc} />
                        ))}
                    </div>
                </div>
            </FloatingContent>

            <p>
                Brigadier General Philip Howell's papers offer unique perspectives on pre-war tensions
                through his scrapbooks as The Times' Balkan correspondent. His reporting covered Albania,
                Bulgaria, Turkey, Greece, and also Lebanon and Mesopotamia from <TimelineTooltip
                    year="1903-1913"
                    title="Balkan Correspondence"
                    content="Howell's extensive coverage of growing tensions in the Balkans region, which would later become the spark for war."
                />.
            </p>

            <br /><h2 className='text-2xl'>Military Observations & Exercises</h2><br />

            <p>
                General Sir Ian Hamilton served as one of the European official observers during the
                Russo-Japanese war of <TimelineTooltip
                    year="1904-1905"
                    title="Military Observation"
                    content="Hamilton's observations of modern warfare techniques would influence British military thinking leading up to WWI."
                />. His detailed accounts include photographs, maps and correspondence that would later
                inform his influential publication "A Staff Officer's scrap-book during the Russo-Japanese war".
            </p>

            {/* Collection highlight box */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-6 my-8">
                <h3 className="flex items-center text-red-800 font-semibold mb-4">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Collection Highlight
                </h3>
                <p className="text-red-900">
                    Hamilton's papers also include his detailed reports for the War Office (1906-9) on military
                    exercises and manoeuvres by the German, Russian and Austro-Hungarian armies, providing
                    crucial intelligence on potential future adversaries.
                </p>
            </div>

            <p>
                A particularly notable document in Admiral Sir Alexander Bethell's papers illustrates the
                complex web of European royal relationships: the printed order of ceremony for Edward VII's
                state funeral in <TimelineTooltip
                    year="1910"
                    title="Royal Funeral"
                    content="An extraordinary gathering of rulers who would be at war just four years later, including Kaiser Wilhelm II and Archduke Franz Ferdinand."
                /> gathered together rulers who would soon find themselves on opposing sides of the
                coming conflict.
            </p>

            {/* Navigation footer */}
            {/* <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        Section 1 of 10
                    </span>
                    <a href="#next-section" className="flex items-center text-red-600 hover:text-red-700">
                        Next: High Command & Strategy
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                </div>
            </div> */}
            <br></br>
        </article>
    );
}