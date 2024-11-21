import React, { useState } from 'react';
import {
    CheckCircle,
    XCircle,
    Globe,
    MapPin,
    Flag,
    Clock,
    Users,
    Bookmark,
    ArrowRight,
    Medal,
    RefreshCw
} from 'lucide-react';

// Interactive map component showing pre-war alliances
const AllianceMap = () => {
    const [selectedAlliance, setSelectedAlliance] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const alliances = {
        tripleAlliance: {
            name: 'Triple Alliance',
            countries: ['Germany', 'Austria-Hungary', 'Italy'],
            color: '#ef4444',
            year: '1882'
        },
        tripleEntente: {
            name: 'Triple Entente',
            countries: ['Britain', 'France', 'Russia'],
            color: '#3b82f6',
            year: '1907'
        }
    };

    const handlePinHover = (alliance, event) => {
        const rect = event.target.getBoundingClientRect();
        setTooltipPos({ x: rect.left, y: rect.bottom });
        setSelectedAlliance(alliance);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-4 flex items-center">
                <Globe className="mr-2" />
                Pre-War European Alliances
            </h3>

            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src="https://study.com/cimages/multimages/16/europe4106862974457330407.png"
                    alt="Europe map"
                    className="w-full h-full object-cover"
                />

                {/* Map pins */}
                {Object.entries(alliances).map(([key, alliance]) => (
                    <div key={key} className="absolute" style={{
                        top: key === 'tripleAlliance' ? '40%' : '30%',
                        left: key === 'tripleAlliance' ? '45%' : '35%'
                    }}>
                        <button
                            onMouseEnter={(e) => handlePinHover(alliance, e)}
                            onMouseLeave={() => setSelectedAlliance(null)}
                            className={`w-6 h-6 rounded-full border-2 bg-white
                ${key === 'tripleAlliance' ? 'border-red-500' : 'border-blue-500'}`}
                        >
                            <Flag className="w-4 h-4 mx-auto" />
                        </button>
                    </div>
                ))}

                {/* Tooltip */}
                {selectedAlliance && (
                    <div
                        className="absolute z-10 bg-white p-4 rounded-lg shadow-lg"
                        style={{
                            top: tooltipPos.y + 10,
                            left: tooltipPos.x - 100,
                            width: '200px'
                        }}
                    >
                        <h4 className="font-medium mb-2">{selectedAlliance.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">Formed in {selectedAlliance.year}</p>
                        <ul className="text-sm">
                            {selectedAlliance.countries.map(country => (
                                <li key={country} className="flex items-center">
                                    <Flag className="w-3 h-3 mr-1" />
                                    {country}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

// Interactive timeline quiz
const TimelineQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questions = [
        {
            question: "When was the Triple Alliance formed?",
            options: ["1879", "1882", "1907", "1914"],
            correct: 1
        },
        {
            question: "Who was the military attaché to the First Japanese Army in Manchuria?",
            options: ["Sir Ian Hamilton", "Lord Kitchener", "Sir Douglas Haig", "Sir John French"],
            correct: 0
        },
        {
            question: "Which future adversaries met at Edward VII's funeral in 1910?",
            options: [
                "Wilhelm II & George V",
                "Franz Ferdinand & Nicholas II",
                "Wilhelm II & Franz Ferdinand",
                "All of the above"
            ],
            correct: 3
        }
    ];

    const handleAnswer = (answerIndex) => {
        setSelectedAnswer(answerIndex);
        if (answerIndex === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-4 flex items-center">
                <Clock className="mr-2" />
                Test Your Knowledge
            </h3>

            {!showResult ? (
                <div>
                    <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">
                            Question {currentQuestion + 1} of {questions.length}
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-2 bg-red-600 rounded-full transition-all"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <p className="font-medium mb-4">
                        {questions[currentQuestion].question}
                    </p>

                    <div className="space-y-2">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                disabled={selectedAnswer !== null}
                                className={`w-full p-3 text-left rounded-lg border transition-colors
                  ${selectedAnswer === index
                                        ? (index === questions[currentQuestion].correct
                                            ? 'bg-green-100 border-green-500'
                                            : 'bg-red-100 border-red-500')
                                        : 'hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center">
                                    {selectedAnswer === index && (
                                        index === questions[currentQuestion].correct
                                            ? <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                            : <XCircle className="w-5 h-5 text-red-500 mr-2" />
                                    )}
                                    {option}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                        {score}/{questions.length}
                    </div>
                    <p className="text-gray-600 mb-4">
                        {score === questions.length
                            ? "Perfect! You're a WWI history expert!"
                            : "Good try! Review the content and try again."}
                    </p>
                    <button
                        onClick={resetQuiz}
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
};

// Document sorting mini-game
const DocumentSortingGame = () => {
    const [documents, setDocuments] = useState([
        { id: 1, type: 'Military', title: 'Field Service Regulations', year: 1909 },
        { id: 2, type: 'Diplomatic', title: 'Balkan Correspondence', year: 1913 },
        { id: 3, type: 'Military', title: 'Musketry Regulations', year: 1910 },
        { id: 4, type: 'Diplomatic', title: 'State Funeral Order', year: 1910 },
        { id: 5, type: 'Military', title: 'Map Reading Manual', year: 1912 }
    ]);

    const [draggedItem, setDraggedItem] = useState(null);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);

    const handleDragStart = (document) => {
        setDraggedItem(document);
    };

    const handleDrop = (targetType) => {
        if (draggedItem.type === targetType) {
            setScore(score + 1);
        }
        setAttempts(attempts + 1);
        setDocuments(documents.filter(doc => doc.id !== draggedItem.id));
        setDraggedItem(null);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-4 flex items-center">
                <Users className="mr-2" />
                Sort the Documents
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Drop zones */}
                <div
                    className="h-40 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop('Military')}
                >
                    <Medal className="w-8 h-8 mb-2 text-red-600" />
                    <span>Military Documents</span>
                </div>

                <div
                    className="h-40 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop('Diplomatic')}
                >
                    <Globe className="w-8 h-8 mb-2 text-blue-600" />
                    <span>Diplomatic Documents</span>
                </div>
            </div>

            {/* Draggable documents */}
            <div className="space-y-2">
                {documents.map(doc => (
                    <div
                        key={doc.id}
                        draggable
                        onDragStart={() => handleDragStart(doc)}
                        className="p-3 bg-gray-50 rounded-lg cursor-move hover:bg-gray-100"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">{doc.title}</h4>
                                <p className="text-sm text-gray-500">{doc.year}</p>
                            </div>
                            <Bookmark className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>

            {documents.length === 0 && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-center text-green-800">
                        Game Complete! Score: {score}/{attempts}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-2 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

// Main content section continued
export default function PreludeToWarContinued() {
    return (
        <article className="max-w-4xl mx-auto">
            {/* Strategic alliances section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Strategic Alliances</h2>
                <p className="mb-6">
                    The complex web of European alliances that would eventually draw nations into
                    conflict began taking shape in the late 19th century. Our collections provide
                    detailed documentation of these diplomatic relationships and military agreements.
                </p>

                <AllianceMap />
            </section>

            {/* Interactive learning section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Test Your Understanding</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <TimelineQuiz />
                    <DocumentSortingGame />
                </div>
            </section>

            {/* Navigation footer */}
            <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                    <a href="#previous" className="text-gray-600 hover:text-gray-800">
                        ← Return to Introduction
                    </a>
                    <a href="#next-section" className="inline-flex items-center text-red-600 hover:text-red-700">
                        Continue to High Command & Strategy
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </article>
    );
}