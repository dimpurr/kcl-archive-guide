import React, { useState } from 'react';
import { FileText, ExternalLink, X, Download } from 'lucide-react';

const MetadataPopup = ({ metadata, onClose }) => (
    <div className="absolute top-[40px] right-0 mt-2 w-[450px] bg-white shadow-lg rounded-lg z-50 border">
        <div className="p-4">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">{metadata.title}</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X className="h-4 w-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Creator</h4>
                    <p className="text-sm">{metadata.creator}</p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Description</h4>
                    <p className="text-sm text-gray-700">{metadata.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Date</h4>
                        <p className="text-sm">{metadata.date}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Reference Code</h4>
                        <p className="text-sm">{metadata.identifier}</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Repository</h4>
                    <p className="text-sm">Liddell Hart Centre for Military Archives</p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Available Metadata Formats</h4>
                    <div className="flex gap-2 mt-1">
                        <a href="#" className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                            Dublin Core
                        </a>
                        <a href="#" className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                            EAD
                        </a>
                        <a href="#" className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                            MODS
                        </a>
                    </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t">
                    <a
                        href={metadata.catalogueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-[#4666E5] hover:text-[#D11242]"
                    >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View in Catalogue
                    </a>
                    <button className="flex items-center text-sm text-[#4666E5] hover:text-[#D11242]">
                        <Download className="h-4 w-4 mr-1" />
                        Export Metadata
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const DocumentPreview = ({ document }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMetadata, setShowMetadata] = useState(false);

    // Sample metadata record using Dublin Core standard
    const metadata = {
        title: document.title,
        creator: document.creator || "Hart, Sir Basil Henry Liddell, 1895-1970, Knight, Captain, military historian",
        description: document.content,
        date: document.date,
        identifier: document.referenceCode || "LIDDELL HART 15/8/92",
        catalogueUrl: "https://archives.kingscollections.org/index.php/liddell-hart-15-8-92",
        type: "Text",
        format: "Document",
        language: "eng",
        rights: "© King's College London Archives"
    };

    return (
        <div className="bg-gray-50 rounded-lg p-4 relative">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-red-600" />
                </div>

                <div className="flex-grow">
                    <div className="flex items-start justify-between">
                        <h4 className="font-medium">{document.title}</h4>
                        <button
                            onClick={() => setShowMetadata(!showMetadata)}
                            className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 bg-gray-100 rounded"
                        >
                            View Metadata
                        </button>
                    </div>

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

            {showMetadata && (
                <MetadataPopup
                    metadata={metadata}
                    onClose={() => setShowMetadata(false)}
                />
            )}
        </div>
    );
};

export default DocumentPreview;