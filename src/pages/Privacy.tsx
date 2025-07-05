import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      id: 'dane-osobowe',
      title: 'Dane osobowe',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: [
        {
          subtitle: 'Administrator danych',
          text: 'Administratorem danych osobowych Użytkowników serwisu jest firma Bergss działająca pod inkubatorem przedsiębiorczości Fundacja Rozwoju Przedsiębiorczości „Twój StartUp", ul. Żurawia 6/12, lok. 766, 00-503 Warszawa, NIP: 5213641211.'
        },
        {
          subtitle: 'Dane kontaktowe',
          text: 'Bergss\ntel: 530 639 369\ne‑mail: kontakt@bergss.pl'
        }
      ]
    },
    {
      id: 'pozyskiwanie-informacji',
      title: 'Pozyskiwanie informacji o Użytkownikach',
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: [
        {
          subtitle: 'Cel przetwarzania',
          text: 'Przetwarzanie danych osobowych użytkowników serwisu jest niezbędne w celach podjęcia działań na żądanie osoby, której dane dotyczą przed zawarciem umowy, jak również do późniejszego wykonania umowy, a w szczególności: odpowiadania na pytania użytkowników serwisu, spełniania prośby użytkownika, kontaktu z Użytkownikiem lub zarządzania interaktywnymi programami (chatbot w obrębie Serwisu) dla klientów.'
        },
        {
          subtitle: 'Newsletter i komunikacja',
          text: 'W przypadku wyrażenia przez użytkownika dobrowolnej zgody na otrzymywanie informacji handlowych w formie newslettera lub bezpośredniej wiadomości od przedstawiciela Bergss, dane osobowe użytkowników będą przetwarzane w celu przesyłania tychże informacji. Dotyczy również korzystania z formularzy elektronicznych dostępnych w Serwisie.'
        },
        {
          subtitle: 'Obsługa zamówień',
          text: 'Po złożeniu przez użytkownika zamówienia lub zapytania na określony produkt, usługę lub przesłaniu określonej zawartości do tej witryny Administrator danych osobowych może skontaktować się z daną osobą w celu uzyskania dodatkowych informacji wymaganych do pełnej obsługi zamówienia lub prośby. W tym celu może zachodzić potrzeba zapytania o dane osobowe Użytkowników takie jak: imię i nazwisko, adres, adres poczty elektronicznej i numer telefonu Użytkownika.'
        }
      ]
    },
    {
      id: 'prawa-uzytkownika',
      title: 'Prawa Użytkownika',
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: [
        {
          subtitle: 'Dostęp do danych',
          text: 'Osoba, której dane dotyczą, jest uprawniona do uzyskania potwierdzenia, czy przetwarzane są dane osobowe jej dotyczące, a jeśli ma to miejsce, jest uprawniona do uzyskania dostępu do nich. Administrator dostarczy użytkownikom serwisu na ich żądanie kopię danych osobowych podlegających przetwarzaniu.'
        },
        {
          subtitle: 'Sprostowanie danych',
          text: 'Użytkownicy serwisu mają prawo do sprostowania danych osobowych, które ich dotyczą, a które są nieprawidłowe lub uległy zmianie. Z uwzględnieniem celów przetwarzania, użytkownicy serwisu mają prawo żądania uzupełnienia niekompletnych danych osobowych.'
        },
        {
          subtitle: 'Usunięcie danych ("prawo do bycia zapomnianym")',
          text: 'Użytkownicy serwisu mają prawo żądania, o ile zachodzą okoliczności przewidziane prawem, niezwłocznego usunięcia dotyczących ich danych osobowych, a Administrator ma obowiązek bez zbędnej zwłoki usunąć takie dane osobowe.'
        },
        {
          subtitle: 'Ograniczenie przetwarzania',
          text: 'W takim przypadku, Administrator wskaże na żądanie użytkownika serwisu takie dane osobowe, a ich przetwarzanie może zostać ograniczone tylko i wyłącznie do określonych celów.'
        },
        {
          subtitle: 'Przenoszenie danych',
          text: 'Pod pewnymi warunkami Użytkownicy serwisu mają prawo otrzymać w ustrukturyzowanym, powszechnie używanym formacie, nadającym się do odczytu maszynowego dane osobowe ich dotyczące, przetwarzane przez Administratora oraz mają prawo przesłać te dane osobowe innemu podmiotowi.'
        },
        {
          subtitle: 'Sprzeciw',
          text: 'W pewnych okolicznościach użytkownicy serwisu mają prawo w dowolnym momencie wnieść sprzeciw – z przyczyn związanych ze szczególną sytuacją Użytkowników serwisu – wobec przetwarzania dotyczących danych osobowych Użytkowników serwisu.'
        },
        {
          subtitle: 'Wycofanie zgody',
          text: 'Wszelkie prawa mogą być egzekwowane przez Użytkowników serwisu za pomocą wiadomości wysłanej na adres Administratora danych osobowych lub na adres e‑mail Inspektora Ochrony Danych.'
        }
      ]
    },
    {
      id: 'przetwarzanie-danych',
      title: 'Przetwarzanie danych osobowych',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: [
        {
          subtitle: 'Zabezpieczenia techniczne',
          text: 'Administrator oraz podmioty przetwarzające dane zapewnią odpowiednie technologiczne, fizyczne, administracyjne i proceduralne środki ochrony danych, odpowiadające standardom rynkowym w celu ochrony i zapewnienia poufności, poprawności i dostępności przetwarzanych danych osobowych.'
        },
        {
          subtitle: 'Ujawnienie danych',
          text: 'Dane osobowe mogą zostać ujawnione właściwym organom, upoważnionym zgodnie z obowiązującym prawem.'
        },
        {
          subtitle: 'Odbiorcy danych',
          text: 'Następujące kategorie odbiorców mogą uzyskać dostęp do danych osobowych: upoważnieni pracownicy i przedstawiciele administratora, i podmioty przetwarzające dane osobowe na podstawie umów powierzenia przetwarzania danych osobowych.'
        },
        {
          subtitle: 'Okres przechowywania',
          text: 'Dane osobowe będą przetwarzane w okresie, w jakim jest to niezbędne dla celów przedstawionych powyżej, jednakże nie dłużej niż 5 lat od dnia zakończenia działań na żądanie osoby, której dane dotyczą. Po upływie wskazanego okresu dane osobowe zostaną trwale usunięte.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen gradient-secondary">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')] opacity-10"></div>
        
        <div className="container-responsive relative py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Shield className="w-5 h-5 text-accent-blue" />
              <span className="text-brand-light font-medium text-responsive-sm">Ochrona Prywatności</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold mb-4 sm:mb-6 gradient-text-primary">
              Polityka Prywatności
            </h1>
            
            <p className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Niniejszy dokument ma zastosowanie do serwisu www.bergss.pl. Otwieranie i przeglądanie witryny jest równoznaczne z zaakceptowaniem zasad poufności.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-responsive py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50 mb-6 sm:mb-8 lg:mb-12">
            <div className="text-center">
              <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-brand-white mb-4 sm:mb-6">
                Wprowadzenie
              </h2>
              <p className="text-responsive-base text-brand-light leading-relaxed max-w-3xl mx-auto">
                Firma Bergss dba o ochronę prywatności osób odwiedzających jej witrynę internetową. 
                Zbierane automatycznie informacje nie mają charakteru danych osobowych. Dokładamy 
                wszelkich starań, aby dane dotyczące osób odwiedzających Serwis pozostawały prywatne.
              </p>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className="glass rounded-xl spacing-responsive-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="gradient-primary rounded-lg p-2 sm:p-3">
                    {section.icon}
                  </div>
                  <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold text-brand-white">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-brand-primary/30 pl-4 sm:pl-6">
                      <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-accent-blue mb-2 sm:mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cookies Section */}
          <div className="glass-dark rounded-xl spacing-responsive-lg border border-slate-700/50 mt-6 sm:mt-8 lg:mt-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg p-2 sm:p-3">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold text-brand-white">
                Pliki cookies
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-2 border-accent-purple/30 pl-4 sm:pl-6">
                <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-accent-purple mb-2 sm:mb-3">
                  Wykorzystanie cookies
                </h3>
                <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed">
                  W serwisie używane są pliki „cookies". Pliki cookies są danymi informatycznymi, 
                  które są zapisywane oraz przechowywane na urządzeniach końcowych Użytkowników.
                </p>
              </div>

              <div className="border-l-2 border-accent-purple/30 pl-4 sm:pl-6">
                <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-accent-purple mb-2 sm:mb-3">
                  Cel wykorzystania
                </h3>
                <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed">
                  Pliki cookies pozwalają na optymalizację zawartości Serwisu do preferencji Użytkowników. 
                  Dzięki nim zbierane są dane statystyczne, co pozwala dokonywać ulepszeń zawartości Serwisu.
                </p>
              </div>

              <div className="border-l-2 border-accent-purple/30 pl-4 sm:pl-6">
                <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-accent-purple mb-2 sm:mb-3">
                  Zarządzanie cookies
                </h3>
                <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed">
                  Użytkownik w każdej chwili może zmienić ustawienia dotyczące plików cookies dzięki 
                  konfiguracji ustawień wykorzystywanej przeglądarki internetowej. Może to jednak 
                  wpłynąć na niektóre funkcjonalności dostępne w Serwisie.
                </p>
              </div>
            </div>
          </div>

          {/* Final Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 lg:mt-12">
            <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
              <h2 className="text-responsive-lg sm:text-responsive-xl font-bold text-brand-white mb-4 sm:mb-6">
                Zmiany polityki prywatności
              </h2>
              <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed">
                Firma Bergss zastrzega sobie prawo do zmiany treści niniejszej polityki prywatności. 
                Wynika to z możliwości wprowadzania zmian, modyfikacji oraz wycofywania zawartości 
                Serwisu bez uprzedzenia Użytkowników.
              </p>
            </div>

            <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
              <h2 className="text-responsive-lg sm:text-responsive-xl font-bold text-brand-white mb-4 sm:mb-6">
                Akceptacja polityki prywatności
              </h2>
              <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed">
                Korzystanie z Serwisu przez Użytkownika jest równoznaczne z akceptacją polityki 
                prywatności. W razie braku zgody, osoby te są proszone o niekorzystanie z Serwisu.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 rounded-xl spacing-responsive-lg border border-brand-primary/30 mt-6 sm:mt-8 lg:mt-12">
            <div className="text-center">
              <h2 className="text-responsive-lg sm:text-responsive-xl font-bold text-brand-white mb-4 sm:mb-6">
                Masz pytania dotyczące prywatności?
              </h2>
              <p className="text-responsive-sm sm:text-responsive-base text-brand-light mb-4 sm:mb-6">
                Skontaktuj się z nami, jeśli masz pytania dotyczące przetwarzania danych osobowych
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:kontakt@bergss.pl"
                  className="btn-touch flex items-center gap-2 bg-brand-primary hover:bg-accent-purple text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-responsive-sm sm:text-responsive-base">kontakt@bergss.pl</span>
                </a>
                <a 
                  href="tel:+48530639369"
                  className="btn-touch flex items-center gap-2 bg-accent-purple hover:bg-accent-purple text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-responsive-sm sm:text-responsive-base">+48 530 639 369</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;