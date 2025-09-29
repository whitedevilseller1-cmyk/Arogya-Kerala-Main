import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ur', label: 'Urdu', native: 'اردو' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'as', label: 'Assamese', native: 'অসমীয়া' },
    { code: 'or', label: 'Odia', native: 'ଓଡିଆ' },
    { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
];

// Helper to split into rows
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

const LanguageSelector = () => {
    const { setLanguage } = useLanguage();
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();

    const handleLanguageClick = (lang) => {
        setSelected(lang.code);
        setLanguage(lang.code);

        setTimeout(() => {
            navigate('/');
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
            {/* Header */}
            <header className="bg-white border-b-4 border-orange-500 shadow-md">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/images/logo.jpg"
                                alt="Arogya Kerala Logo"
                                className="w-16 h-16 object-contain"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="text-blue-900">
                                <div className="text-xl font-bold">AROGYA KERALA</div>
                                <div className="text-sm text-green-700">ആരോഗ്യ കേരള</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <img
                                src="/images/kerala.png"
                                alt="Kerala Government"
                                className="w-14 h-14 object-contain"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="text-right text-blue-900">
                                <div className="text-lg font-semibold">Health Ministry of Kerala</div>
                                <div className="text-xs text-blue-700">Government of India</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main className="container mx-auto px-6 py-8 flex-grow">
                <div className="text-center mb-8">
                    <p className="text-lg text-blue-800 mb-2 font-medium">
                        Please select your preferred language to continue
                    </p>
                    <p className="text-lg text-blue-800 font-medium">
                        कृपया जारी रखने के लिए अपनी पसंदीदा भाषा का चयन करें
                    </p>
                </div>

                {/* Language grid */}
                <div className="max-w-6xl mx-auto">
                    {chunkArray(languages, 4).map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-wrap justify-center gap-x-6 gap-y-6 mb-5"
                        >
                            {row.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageClick(lang)}
                                    className={`
                    w-48 md:w-56 lg:w-64
                    h-28
                    flex flex-col justify-center items-center
                    relative group p-4 rounded-lg border-2 transition-all duration-300
                    hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300
                    ${selected === lang.code
                                            ? 'border-orange-500 bg-orange-50 shadow-lg'
                                            : 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50'
                                        }
                  `}
                                >
                                    <div className="text-center">
                                        <div
                                            className={`text-base font-semibold mb-1 ${selected === lang.code ? 'text-orange-700' : 'text-blue-900'
                                                }`}
                                        >
                                            {lang.label}
                                        </div>
                                        <div
                                            className={`text-lg font-medium ${selected === lang.code ? 'text-orange-600' : 'text-blue-700'
                                                }`}
                                        >
                                            {lang.native}
                                        </div>
                                    </div>

                                    {/* Active Dot */}
                                    {selected === lang.code && (
                                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Redirect Notice */}
                {selected && (
                    <div className="text-center mt-10">
                        <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-300 rounded-lg">
                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mr-3"></div>
                            <span className="text-green-800 font-medium">
                                Redirecting to Kerala Health Portal...
                            </span>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div className="flex justify-center space-x-8 mb-4">
                            <div className="text-sm">
                                <div className="font-semibold">Ministry of Health</div>
                                <div className="text-blue-300">Government of Kerala</div>
                            </div>
                            <div className="text-sm">
                                <div className="font-semibold">स्वास्थ्य मंत्रालय</div>
                                <div className="text-blue-300">केरल सरकार</div>
                            </div>
                            <div className="text-sm">
                                <div className="font-semibold">ആരോഗ്യ മന്ത്രാലയം</div>
                                <div className="text-blue-300">കേരള സർക്കാർ</div>
                            </div>
                        </div>
                        <div className="text-xs text-blue-300">
                            © 2024 Government of Kerala. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LanguageSelector;
