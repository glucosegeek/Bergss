import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, imageUrl, slug }) => {
  return (
    <article className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-blue-100/80 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 group/link"
        >
          Czytaj więcej
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;