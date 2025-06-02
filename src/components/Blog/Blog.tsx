import React from 'react';
import BlogCard from './BlogCard';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Przyszłość AI w Sprzedaży: Trendy 2024",
      excerpt: "Odkryj, jak sztuczna inteligencja rewolucjonizuje procesy sprzedaży i czego spodziewać się w nadchodzącym roku.",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      slug: "przyszlosc-ai-sprzedaz-2024"
    },
    {
      title: "5 Sposobów, w Jakie Chatboty AI Transformują Obsługę Klienta",
      excerpt: "Dowiedz się, jak chatboty oparte na AI poprawiają doświadczenia klientów i redukują koszty wsparcia.",
      imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      slug: "chatboty-ai-obsluga-klienta"
    },
    {
      title: "Wdrażanie AI w Strategii Sprzedaży: Przewodnik",
      excerpt: "Przewodnik krok po kroku do skutecznej integracji narzędzi AI w istniejących procesach sprzedaży.",
      imageUrl: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg",
      slug: "wdrazanie-ai-strategia-sprzedazy"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950/90 to-purple-950/90">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
            Wiedza i Zasoby AI
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Bądź na bieżąco z najnowszymi trendami i spostrzeżeniami w rozwiązaniach sprzedażowych opartych na AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;