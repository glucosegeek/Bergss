import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, company }) => {
  return (
    <div className="group relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative">
        <div className="absolute -top-4 -left-2">
          <Quote className="w-8 h-8 text-indigo-400/40 group-hover:text-indigo-400/60 transition-colors duration-300" />
        </div>
        
        <blockquote className="text-blue-100/90 mb-6 mt-4 leading-relaxed">
          "{quote}"
        </blockquote>
        
        <div className="border-t border-white/10 pt-4">
          <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-colors duration-300">
            {author}
          </div>
          <div className="text-sm text-blue-200/70">{role}</div>
          <div className="text-sm text-indigo-400">{company}</div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;