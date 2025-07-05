import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ArrowLeft, Mail } from 'lucide-react';
import ConsultationButton from '../components/ui/ConsultationButton';
import NavigationButton from '../components/ui/NavigationButton';
import ScrollToTopLink from '../components/ui/ScrollToTopLink';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description: string;
  features: string[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title, description, features }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  // Placeholder video URL - replace with actual video URLs
  const videoUrl = `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;

  const togglePlay = () => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <div className="glass rounded-xl border border-slate-700/50 overflow-hidden group hover:border-slate-600/50 transition-all duration-300">
      {/* Video Container */}
      <div 
        className="relative aspect-video bg-black rounded-t-xl overflow-hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          id={videoId}
          className="w-full h-full object-cover"
          src={videoUrl}
          muted={isMuted}
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Video Controls Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-slate-800/20 backdrop-blur-sm hover:bg-slate-700/30 rounded-full p-4 transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-brand-white" />
              ) : (
                <Play className="w-8 h-8 text-brand-white ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-brand-white hover:text-accent-blue transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="text-brand-white hover:text-accent-blue transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              <button
                onClick={toggleFullscreen}
                className="text-brand-white hover:text-accent-blue transition-colors"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-brand-white text-sm font-medium">2:00</span>
        </div>
      </div>

      {/* Content */}
      <div className="spacing-responsive-lg">
        <h3 className="text-responsive-xl sm:text-responsive-2xl font-bold text-brand-white mb-3 sm:mb-4 group-hover:gradient-text-primary transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-responsive-base font-semibold text-accent-blue mb-3">
            Kluczowe funkcje:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-responsive-sm text-slate-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Demo = () => {
  const demoVideos = [
    {
      videoId: 'chatbot-demo',
      title: 'Chatbot AI',
      description: 'Zobacz jak nasz chatbot AI automatycznie odpowiada na pytania klientów, kwalifikuje leady i umawia spotkania. Demonstracja pokazuje naturalną konwersację z klientem zainteresowanym.',
      features: [
        'Naturalne rozmowy z klientami 24/7',
        'Automatyczne pozyskiwanie leadów',
        'Integracja z kalendarzem do umawiania spotkań',
        'Personalizowane odpowiedzi na podstawie kontekstu',
        'Przekazywanie skomplikowanych zapytań do zespołu'
      ]
    },
    {
      videoId: 'outreach-demo',
      title: 'Automatyczny Outreach AI',
      description: 'Prezentacja systemu automatycznego outreach\'u, który wysyła spersonalizowane wiadomości do potencjalnych klientów. Zobacz jak AI analizuje profile i tworzy unikalne wiadomości dla każdego odbiorcy.',
      features: [
        'Spersonalizowane cold maile na dużą skalę',
        'Analiza profili LinkedIn i firm',
        'Automatyczne follow-up wiadomości',
        'A/B testing różnych wersji wiadomości',
        'Raportowanie i analiza skuteczności kampanii'
      ]
    },
    {
      videoId: 'voice-demo',
      title: 'Rozmowy Telefoniczne AI',
      description: 'Demonstracja bota głosowego prowadzącego rozmowę sprzedażową. Usłyszysz jak AI naturalnie rozmawia z klientem, prezentuje ofertę i odpowiada na pytania w czasie rzeczywistym.',
      features: [
        'Naturalne rozmowy głosowe z klientami',
        'Prezentacja produktów i usług',
        'Odpowiadanie na pytania w czasie rzeczywistym',
        'Umawianie spotkań i demo',
        'Przekazywanie rozmów do konsultantów'
      ]
    },
    {
      videoId: 'website-demo',
      title: 'Strona Internetowa',
      description: 'Przegląd nowoczesnej strony internetowej zoptymalizowanej pod konwersję. Zobacz jak responsywny design, szybkie ładowanie i intuicyjna nawigacja przekładają się na lepsze wyniki sprzedażowe.',
      features: [
        'Responsywny design na wszystkich urządzeniach',
        'Optymalizacja pod konwersję (CRO)',
        'Integracja z systemami CRM',
        'Analityka i śledzenie konwersji'
      ]
    }
  ];

  return (
    <div className="min-h-screen gradient-secondary">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')] opacity-10"></div>
        
        <div className="container-responsive relative py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Back Button */}
          <div className="mb-6 sm:mb-8">
            <NavigationButton 
              to="/" 
              variant="home"
              ariaLabel="Powrót do strony głównej"
              className="text-slate-300 hover:text-brand-white bg-transparent hover:bg-slate-800/50 border-0 hover:border-slate-700/50 px-0 hover:px-4 shadow-none hover:shadow-lg"
            >
              Powrót do strony głównej
            </NavigationButton>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Play className="w-5 h-5 text-accent-blue" />
              <span className="text-brand-light font-medium text-responsive-sm">Demonstracje Produktów</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold mb-4 sm:mb-6 gradient-text-primary">
              Demo Rozwiązań AI
            </h1>
            
            <p className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Zobacz nasze rozwiązania AI w akcji. Każde demo trwa około 2 minut i pokazuje kluczowe funkcje oraz korzyści dla Twojego biznesu.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Videos Section */}
      <div className="container-responsive py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-brand-white mb-4 sm:mb-6">
              Produkty w Akcji
            </h2>
            <p className="text-responsive-base text-brand-light max-w-2xl mx-auto">
              Kliknij play, aby zobaczyć jak nasze rozwiązania AI mogą zrewolucjonizować Twój proces sprzedaży
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {demoVideos.map((video, index) => (
              <VideoPlayer
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
                description={video.description}
                features={video.features}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 rounded-xl spacing-responsive-lg border border-brand-primary/30 max-w-4xl mx-auto">
              <h3 className="text-responsive-xl sm:text-responsive-2xl font-bold text-brand-white mb-4 sm:mb-6">
                Gotowy na Wdrożenie?
              </h3>
              <p className="text-responsive-base text-brand-light mb-6 sm:mb-8 max-w-2xl mx-auto">
                Widziałeś jak działają nasze rozwiązania. Teraz porozmawiajmy o tym, jak możemy dostosować je do Twoich potrzeb biznesowych.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <ConsultationButton />
                <ScrollToTopLink 
                  to="/kontakt" 
                  className="btn-touch btn-secondary flex items-center gap-2 text-brand-white px-6 py-3 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Skontaktuj się z Nami
                </ScrollToTopLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;