import {  superChargeFont } from '@/fonts/fontsExport';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingSteps = [
    { text: 'Initializing...', duration: 800 },
    { text: 'Loading workspace...', duration: 1200 },
    { text: 'Preparing canvas...', duration: 900 },
    { text: 'Setting up tools...', duration: 700 },
    { text: 'Almost ready...', duration: 600 }
  ];

  useEffect(() => {
    let currentStep = 0;
    let progressInterval: NodeJS.Timeout | undefined;
    let textTimeout: NodeJS.Timeout | undefined;

    const updateLoadingState = () => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        
        const stepProgress = (currentStep + 1) / loadingSteps.length * 100;
        
        progressInterval = setInterval(() => {
          setProgress(prev => {
            const increment = stepProgress / (loadingSteps[currentStep].duration / 50);
            return Math.min(prev + increment, stepProgress);
          });
        }, 50);

        textTimeout = setTimeout(() => {
          clearInterval(progressInterval);
          currentStep++;
          updateLoadingState();
        }, loadingSteps[currentStep].duration);
      }
    };

    updateLoadingState();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(textTimeout);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400 relative overflow-hidden">


      <div className="relative z-10 flex flex-col items-center space-y-8">
        

        <div className="relative">

          <div className="w-24 h-24 border-4 border-slate-200 rounded-full animate-spin relative">
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
          </div>
          

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center animate-pulse shadow-lg">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" /> 
            </div>
          </div>
        </div>


        <div className="flex items-center space-x-2">
          <h1 className={`text-5xl font-bold  ${superChargeFont.className}`}>
            Desyn
          </h1>
          <div className="w-0.5 h-8 bg-blue-500 animate-pulse"></div>
        </div>


        <div className="w-80 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-medium text-white">{loadingText}</span>
            <span className="text-xl font-bold text-slate-800">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>


        <div className="flex space-x-6 mt-8">
          {[
            { icon: "M4 6h16M4 12h16M4 18h16", delay: "0s" },
            { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", delay: "0.5s" },
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", delay: "1s" },
            { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4", delay: "1.5s" }
          ].map((item, index) => (
            <div 
              key={index}
              className="w-8 h-8 text-white opacity-0 animate-bounce"
              style={{ 
                animationDelay: item.delay,
                animationDuration: '2s',
                animationFillMode: 'forwards',
                opacity: 1 
              }}
            >
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
            </div>
          ))}
        </div>


        <p className={`text-5xl  text-white font-medium tracking-wide opacity-70 animate-fade-in ${superChargeFont.className}`}>
          Design • Collaborate • Create
        </p>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 0.7; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Loader;