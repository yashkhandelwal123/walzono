import { useState, useEffect } from "react";
import {Scissors} from "lucide-react"

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Hide preloader after completion
          return 100;
        }
        return oldProgress + 15; // Increment progress
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"> 
      <p className="text-gray-700 text-lg font-semibold mb-3"> <span className="flex items-center"><Scissors className="h-8 w-8 text-black rounded-lg mr-2 " strokeWidth={2} />Welcome at GlamBook</span></p>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
