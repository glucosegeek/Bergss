import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogPosts = {
  'przyszlosc-ai-sprzedaz-2024': {
    title: "Przyszłość AI w Sprzedaży: Trendy 2024",
    content: `
      <h2>Wprowadzenie</h2>
      <p>Sztuczna inteligencja rewolucjonizuje sposób, w jaki firmy podchodzą do sprzedaży. W 2024 roku obserwujemy przełomowe trendy, które kształtują przyszłość branży sprzedażowej.</p>

      <h2>Kluczowe Trendy</h2>
      <ul>
        <li>Personalizacja na niespotykaną dotąd skalę</li>
        <li>Automatyzacja procesów sprzedażowych</li>
        <li>Predykcyjna analityka w czasie rzeczywistym</li>
        <li>Inteligentne chatboty i asystenci sprzedaży</li>
      </ul>

      <h2>Wpływ na Biznes</h2>
      <p>Implementacja rozwiązań AI w sprzedaży prowadzi do znaczącego wzrostu efektywności, redukcji kosztów i poprawy doświadczeń klientów.</p>
    `,
    author: "Anna Kowalska",
    date: "2024-03-15",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  'chatboty-ai-obsluga-klienta': {
    title: "5 Sposobów, w Jakie Chatboty AI Transformują Obsługę Klienta",
    content: `
      <h2>Rewolucja w Obsłudze Klienta</h2>
      <p>Chatboty AI zmieniają sposób, w jaki firmy komunikują się z klientami, oferując natychmiastową, spersonalizowaną obsługę 24/7.</p>

      <h2>Kluczowe Korzyści</h2>
      <ul>
        <li>Natychmiastowa odpowiedź na zapytania klientów</li>
        <li>Redukcja kosztów obsługi klienta</li>
        <li>Zwiększona satysfakcja klientów</li>
        <li>Skalowalność obsługi</li>
      </ul>

      <h2>Przyszłość Obsługi Klienta</h2>
      <p>Wraz z rozwojem AI, chatboty stają się coraz bardziej zaawansowane, oferując jeszcze lepsze doświadczenia użytkowników.</p>
    `,
    author: "Piotr Nowak",
    date: "2024-03-10",
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
  },
  'wdrazanie-ai-strategia-sprzedazy': {
    title: "Wdrażanie AI w Strategii Sprzedaży: Przewodnik",
    content: `
      <h2>Skuteczne Wdrożenie AI</h2>
      <p>Poznaj sprawdzone metody implementacji rozwiązań AI w procesach sprzedażowych Twojej firmy.</p>

      <h2>Krok po Kroku</h2>
      <ul>
        <li>Analiza obecnych procesów</li>
        <li>Wybór odpowiednich narzędzi AI</li>
        <li>Integracja z istniejącymi systemami</li>
        <li>Szkolenie zespołu</li>
      </ul>

      <h2>Mierzenie Sukcesu</h2>
      <p>Dowiedz się, jak mierzyć efektywność wdrożonych rozwiązań AI i optymalizować je dla lepszych wyników.</p>
    `,
    author: "Magdalena Wiśniewska",
    date: "2024-03-05",
    imageUrl: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg"
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-indigo-950 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post nie został znaleziony</h1>
            <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-indigo-950 py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Wróć do bloga
        </Link>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-blue-100/80 mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
            </div>

            <div 
              className="prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;