import React from 'react';
import { Globe } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center">
      <div className="flex items-center">
        <Globe className="h-8 w-8 text-white" />
        <span className="ml-2 text-xl font-bold">BHUMI</span>
        <span className="text-xs ml-1 mt-1">ATR/BPN</span>
      </div>
    </a>
  );
};

export default Logo;