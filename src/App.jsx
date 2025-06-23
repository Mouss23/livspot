import React, { useState, useEffect } from 'react';

// Composant FloatingModalButton
const FloatingModalButton = ({ formIsOpen = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (formIsOpen) {
    return null; // Masquer le bouton si le formulaire est ouvert
  }

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openModal}
          className="bg-suite-orange text-white px-4 py-3 md:px-6 md:py-4 rounded-lg font-oswald uppercase tracking-wider text-sm md:text-base font-bold shadow-lg hover:bg-black hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-suite-orange/50"
          aria-label="Découvrir la plateforme LIVSPOT"
          data-event="open_platform"
        >
          PLATEFORME
        </button>
      </div>

      {/* Modale */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-[600px] w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Titre */}
              <h2 className="font-oswald text-2xl md:text-3xl font-bold text-suite-orange uppercase tracking-wide mb-6 text-center">
                DÉCOUVRIR LA PLATEFORME
              </h2>

              {/* Texte explicatif */}
              <p className="font-space-grotesk text-base md:text-lg text-suite-black leading-relaxed mb-8 text-center">
                Explorez un espace pensé pour sublimer l’expérience client à travers des placements de produits naturels et cohérents.
              </p>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Bouton principal */}
                <a
                  href="https://pro.thesuiteescapes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-suite-orange text-white px-6 py-3 rounded-lg font-oswald uppercase tracking-wider font-bold hover:bg-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-suite-orange/50 shadow-lg text-center"
                >
                  Accéder à la plateforme
                </a>

                {/* Bouton secondaire */}
                <button
                  onClick={closeModal}
                  className="font-space-grotesk text-suite-black hover:text-suite-orange transition-colors duration-300 px-6 py-3 font-medium"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const partnerData = [
    { 
      name: "&Tradition", 
      image: "/images/photo_partenaires/&Tradition.png",
      logo: "/images/logo_partenaires/logo_&tradition.png"
    },
    { 
      name: "Atma", 
      image: "/images/photo_partenaires/Atma.png",
      logo: "/images/logo_partenaires/logo_atma.png"
    },
    { 
      name: "Babybjorn", 
      image: "/images/photo_partenaires/Babybjorn.png",
      logo: "/images/logo_partenaires/logo_babybjorn.png"
    },
    { 
      name: "Edone", 
      image: "/images/photo_partenaires/Edone.png",
      logo: "/images/logo_partenaires/logo_edone.png"
    },
    { 
      name: "Jaune", 
      image: "/images/photo_partenaires/jaune.png",
      logo: "/images/logo_partenaires/logo_Jaune.png"
    },
    { 
      name: "Jolibois", 
      image: "/images/photo_partenaires/Jolibois.png",
      logo: "/images/logo_partenaires/logo_jolibois.png"
    },
    { 
      name: "MPC", 
      image: "/images/photo_partenaires/MPC.png",
      logo: "/images/logo_partenaires/logo_mpc.png"
    },
    { 
      name: "Tediber", 
      image: "/images/photo_partenaires/Tediber.png",
      logo: "/images/logo_partenaires/logo_tediber.png"
    }
  ];

  return (
    <div className="min-h-screen bg-suite-beige font-space-grotesk">
      {/* Header */}
      <header className="bg-suite-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-oswald text-white uppercase tracking-wider">
                <span className="font-normal">LIV</span><span className="font-bold">SPOT</span>
              </h1>
            </div>
            
            {/* Navigation Desktop */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                <li>
                  <a 
                    href="#adresses" 
                    className="font-oswald text-white hover:text-suite-orange hover:underline hover:underline-offset-4 transition-all duration-300 font-medium tracking-wide"
                    tabIndex="0"
                  >
                    Adresses
                  </a>
                </li>
                <li>
                  <a 
                    href="#marques" 
                    className="font-oswald text-white hover:text-suite-orange hover:underline hover:underline-offset-4 transition-all duration-300 font-medium tracking-wide"
                    tabIndex="0"
                  >
                    Marques
                  </a>
                </li>
                <li>
                  <a 
                    href="#qui-sommes-nous" 
                    className="font-oswald text-white hover:text-suite-orange hover:underline hover:underline-offset-4 transition-all duration-300 font-medium tracking-wide"
                    tabIndex="0"
                  >
                    Qui sommes nous ?
                  </a>
                </li>
                <li>
                  <a 
                    href="#partenaires" 
                    className="font-oswald text-white hover:text-suite-orange hover:underline hover:underline-offset-4 transition-all duration-300 font-medium tracking-wide"
                    tabIndex="0"
                  >
                    Partenaires
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-suite-orange focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
                aria-label="Ouvrir le menu de navigation"
                tabIndex="0"
              >
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a 
                  href="#adresses" 
                  className="block px-3 py-2 font-oswald text-white hover:text-suite-orange hover:bg-white/10 rounded-md transition-all duration-300 font-medium tracking-wide"
                >
                  Adresses
                </a>
                <a 
                  href="#marques" 
                  className="block px-3 py-2 font-oswald text-white hover:text-suite-orange hover:bg-white/10 rounded-md transition-all duration-300 font-medium tracking-wide"
                >
                  Marques
                </a>
                <a 
                  href="#qui-sommes-nous" 
                  className="block px-3 py-2 font-oswald text-white hover:text-suite-orange hover:bg-white/10 rounded-md transition-all duration-300 font-medium tracking-wide"
                >
                  Qui sommes nous ?
                </a>
                <a 
                  href="#partenaires" 
                  className="block px-3 py-2 font-oswald text-white hover:text-suite-orange hover:bg-white/10 rounded-md transition-all duration-300 font-medium tracking-wide"
                >
                  Partenaires
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-suite-beige">
        {/* Background Image avec effet parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 md:bg-fixed"
          style={{
            backgroundImage: "url('/images/APOTICARI27.JPG')"
          }}
        ></div>
        
        {/* Hero Content avec z-index pour passer au-dessus de l'image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center lg:text-left">
            {/* Main Title */}
            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-suite-black mb-8 leading-snug max-w-5xl uppercase tracking-wide">
            ESSAYEZ, APPRÉCIEZ, ADOPTEZ. <br />
            </h1>

            
            {/* Subtitle */}
            <h2 className="font-space-grotesk text-xl sm:text-2xl lg:text-3xl text-suite-black/90 mb-12 leading-extra-relaxed max-w-4xl lg:max-w-3xl font-normal">
              LIVSPOT sublime vos lieux et revèle vos marques.
            </h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start">
              <button 
                data-event="open_form" 
                className="popup-trigger inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-suite-orange rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-suite-black focus:outline-none focus:ring-4 focus:ring-suite-orange/50 shadow-xl font-oswald uppercase tracking-wider w-full sm:w-auto"
                aria-label="Accéder à la plateforme LIVSPOT pour les hébergements"
                tabIndex="0"
                data-tally-open="wLqLyJ"
                data-tally-width="600"
                data-tally-overlay="1"
              >
                Vous êtes un lieu
              </button>
              
              <a 
                href="https://calendly.com/contact-livspot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-suite-orange rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-suite-black focus:outline-none focus:ring-4 focus:ring-suite-orange/50 shadow-xl font-oswald uppercase tracking-wider w-full sm:w-auto"
                aria-label="Accéder à la plateforme LIVSPOT pour les marques"
                tabIndex="0"
                data-event="open_calendly"
              >
                Vous êtes une marque
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white">
        {/* Section 1: Pour les adresses */}
        <section className="py-24" id="adresses">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="font-oswald text-base uppercase tracking-widest text-[#9a06c6] mb-4">
                  Pour les lieux
                </p>
                <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight uppercase tracking-wide">
                  <span className="text-suite-orange">CHAMBRES, MAISON D'HÔTES, CONCIERGERIES ?</span><br />
                  <span className="text-suite-black">NOTRE SERVICE DE PLACEMENT DE PRODUIT.</span>
                </h2>
                
                <p className="text-lg md:text-xl font-space-grotesk text-suite-black leading-extra-relaxed mb-10">
                  Enrichissez l'expérience voyageur dans votre établissement et offrez de la visibilité à votre adresse sans effort.
                </p>

                <button 
                  data-event="open_form"
                  className="popup-trigger bg-[#9a06c6] text-white px-10 py-4 rounded-lg font-bold font-oswald uppercase tracking-wider hover:bg-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#9a06c6]/50 shadow-lg"
                  aria-label="Contacter LIVSPOT pour votre hébergement"
                  tabIndex="0"
                  data-tally-open="wLqLyJ"
                  data-tally-width="600"
                  data-tally-overlay="1"
                >
                  Contactez-nous
                </button>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/images/DSCF1015.JPG" 
                  alt="Chambre d'hôtel élégante avec décoration moderne"
                  className="rounded-lg shadow-2xl w-full h-auto max-h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi rejoindre LIVSPOT */}
        <section className="py-24 bg-suite-beige" id="pourquoi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-suite-black mb-16 text-center uppercase tracking-wide">
              POURQUOI REJOINDRE LIVSPOT ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-12">
              {/* Carte 1 */}
              <div className="relative rounded-lg shadow-lg p-6 md:p-8 bg-white hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                <div className="flex flex-col items-center text-center">
                  <svg className="w-8 h-8 text-suite-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <h3 className="font-oswald text-suite-black text-lg sm:text-xl font-bold uppercase text-center mb-4">
                    DES MARQUES BELLES & UTILES À TARIFS PRÉFÉRENTIELS
                  </h3>
                  <p className="font-space-grotesk text-center text-[#333] text-base">
                    Accédez aux plus belles marques du marché avec des conditions préférentielles négociées pour vous.
                  </p>
                </div>
              </div>

              {/* Carte 2 */}
              <div className="relative rounded-lg shadow-lg p-6 md:p-8 bg-white hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                <div className="flex flex-col items-center text-center">
                  <svg className="w-8 h-8 text-suite-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <h3 className="font-oswald text-suite-black text-lg sm:text-xl font-bold uppercase text-center mb-4">
                    DES COLLABORATIONS VALORISANTES POUR VOTRE IMAGE
                  </h3>
                  <p className="font-space-grotesk text-center text-[#333] text-base">
                    Renforcez votre positionnement premium en vous associant aux marques les plus désirables.
                  </p>
                </div>
              </div>

              {/* Carte 4 */}
              <div className="relative rounded-lg shadow-lg p-6 md:p-8 bg-white hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                <div className="flex flex-col items-center text-center">
                  <svg className="w-8 h-8 text-suite-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="font-oswald text-suite-black text-lg sm:text-xl font-bold uppercase text-center mb-4">
                    UNE ÉQUIPE DÉDIÉE POUR VOUS ACCOMPAGNER
                  </h3>
                  <p className="font-space-grotesk text-center text-suite-black text-base">
                    Bénéficiez d'un accompagnement personnalisé tout au long de vos collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Comment ça marche */}
        <section className="py-24 bg-white" id="comment-ca-marche">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-suite-black mb-6 text-center uppercase tracking-wide">
                COMMENT ÇA MARCHE ?
              </h2>
              <p className="font-space-grotesk text-xl text-suite-black/70 max-w-4xl mx-auto">
                Trois étapes simples pour enrichir l'expérience de vos voyageurs et trouver les meilleurs partenaires
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {/* Carte 1 */}
              <div className="relative rounded-lg shadow-lg p-6 md:p-8 bg-suite-beige hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                <div className="absolute top-4 right-4 bg-suite-orange text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  1
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg className="w-8 h-8 text-suite-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <h3 className="font-oswald text-suite-black text-lg sm:text-xl font-bold uppercase text-center mb-4">
                    REJOIGNEZ LIVSPOT
                  </h3>
                  <p className="font-space-grotesk text-center text-suite-black text-base">
                    Créez votre compte gratuitement et accédez à notre sélection de marques partenaires.
                  </p>
                </div>
              </div>

              {/* Carte 2 */}
              <div className="relative rounded-lg shadow-lg p-6 md:p-8 bg-suite-beige hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                <div className="absolute top-4 right-4 bg-suite-orange text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  2
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg className="w-8 h-8 text-suite-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <h3 className="font-oswald text-suite-black text-lg sm:text-xl font-bold uppercase text-center mb-4">
                    PROFITEZ D'AVANTAGES EXCLUSIFS
                  </h3>
                  <p className="font-space-grotesk text-center text-suite-black text-base">
                    Accédez aux plus jolies marques à prix préférentiels. Faites la différence auprès de vos clients en vous équipant avec des produits beaux et fonctionnels.
                  </p>
                </div>
              </div>

              {/* Carte 3 */}
              <div className="relative rounded-lg shadow-lg p-6 md:p-8 bg-suite-beige hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                <div className="absolute top-4 right-4 bg-suite-orange text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  3
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg className="w-8 h-8 text-suite-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <h3 className="font-oswald text-suite-black text-lg sm:text-xl font-bold uppercase text-center mb-4">
                    BOOSTEZ VOTRE VISIBILITÉ
                  </h3>
                  <p className="font-space-grotesk text-center text-suite-black text-base">
                    Collaborez avec nos marques partenaires en candidatant à des campagnes de placement de produit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pour les marques */}
        <section className="py-24 bg-suite-beige" id="marques">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/images/MoulinMoulinXDomaineJolibois_14.jpg" 
                  alt="Produits de luxe et objets design pour marques premium"
                  className="rounded-lg shadow-2xl w-full h-auto max-h-[600px] object-cover"
                />
              </div>

              <div className="space-y-8 order-2">
                <p className="font-oswald text-base uppercase tracking-widest text-[#9a06c6] mb-4">
                  Pour les marques
                </p>
                <h2 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-suite-black mb-4 leading-tight uppercase tracking-wide">
                  <span className="text-suite-orange">MARQUES,</span><br />
                  <span className="text-suite-black">EXPOSEZ VOS PRODUITS AVEC LIVSPOT</span>
                </h2>
                
                <p className="text-lg md:text-xl font-space-grotesk text-suite-black leading-extra-relaxed mb-10">
                  Diffusez votre marque à travers des lieux d'hospitalité d'exception, et laissez l'expérience utilisateur devenir votre meilleur ambassadeur.
                </p>

                <button  
                  href="https://calendly.com/contact-livspot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9a06c6] text-white px-10 py-4 rounded-lg font-bold font-oswald uppercase tracking-wider hover:bg-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#9a06c6]/50 shadow-lg"
                  aria-label="Prendre rendez-vous avec LIVSPOT pour votre marque"
                  tabIndex="0"
                  data-event="open_calendly"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Preuve sociale */}
        <section className="py-24 bg-white" id="partenaires">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-suite-black mb-4 uppercase tracking-wide">
                ILS NOUS FONT CONFIANCE
              </h2>
              <p className="font-space-grotesk text-xl text-suite-black/70">
                Découvrez quelques-unes de nos marques partenaires
              </p>
            </div>

            {/* Carrousel de cartes partenaires fluide - Toute largeur */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8">
              <div className="partners-container relative overflow-hidden h-96 md:h-[28rem] flex items-center bg-white/30 backdrop-blur-sm">
                <div className="partners-scroll flex items-center">
                  {/* Premier set de cartes */}
                  {partnerData.map((partner, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 mx-6 md:mx-8">
                      <div className="flex flex-col items-center justify-start w-60 md:w-72 h-78 md:h-90 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300" aria-hidden="true">
                        {/* Image de collaboration */}
                        <div className="w-full h-48 md:h-54 mb-6 overflow-hidden rounded-md bg-gray-100">
                          <img 
                            src={partner.image} 
                            alt={`Collaboration avec ${partner.name}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Logo de la marque */}
                        <div className="flex items-center justify-center flex-1">
                          <img 
                            src={partner.logo} 
                            alt={`Logo ${partner.name}`}
                            className="h-20 md:h-28 w-auto opacity-70"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplication pour boucle continue sans coupure */}
                  {partnerData.map((partner, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 mx-6 md:mx-8">
                      <div className="flex flex-col items-center justify-start w-60 md:w-72 h-78 md:h-90 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300" aria-hidden="true">
                        {/* Image de collaboration */}
                        <div className="w-full h-48 md:h-54 mb-6 overflow-hidden rounded-md bg-gray-100">
                          <img 
                            src={partner.image} 
                            alt={`Collaboration avec ${partner.name}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Logo de la marque */}
                        <div className="flex items-center justify-center flex-1">
                          <img 
                            src={partner.logo} 
                            alt={`Logo ${partner.name}`}
                            className="h-20 md:h-28 w-auto opacity-70"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="font-space-grotesk text-xl text-suite-black/90 mb-8 font-bold">
              + DE 2000 LIEUX SÉLECTIONNÉS PAR NOS SOINS ET 50 MARQUES PARTENAIRES
              </p>
            </div>
          </div>
        </section>

        {/* Section Qui sommes-nous */}
        <section className="py-24 bg-suite-beige" id="qui-sommes-nous">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-suite-black mb-16 text-center uppercase tracking-wide">
              QUI SOMMES-NOUS ?
            </h2>
            
            {/* Layout deux colonnes */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Texte de présentation - à gauche */}
              <div className="flex-1 max-w-2xl space-y-4">
              <strong className="font-space-grotesk text-lg md:text-xl text-suite-orange leading-relaxed text-left">Une séléction fine pour chaque collaboration marque/lieu</strong><br />
                <p className="font-space-grotesk text-lg md:text-xl text-suite-black leading-relaxed text-left">                  
                  Chaque placement est le fruit d'un matching intelligent basé sur des critères précis (type de lieu, saison, ambiance, clientèle) et d'une curation manuelle par notre équipe, pour garantir la cohérence et l'impact de chaque campagne.</p>
                               
                <p className="font-oswald text-xl md:text-2xl text-[#9a06c6] font-bold mt-8 tracking-wide text-left">
                  Clémence & Aurore
                </p>
              </div>
              
              {/* Image des créatrices - à droite */}
              <div className="flex-shrink-0">
                <img 
                  src="/images/fondatrices.jpg" 
                  alt="Portrait des fondatrices de Livspot, Clémence et Aurore"
                  className="rounded-lg shadow-md mx-auto md:mx-0 max-w-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>



        {/* CTA Secondaire */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-suite-black mb-6 uppercase tracking-wide">
              REJOIGNEZ LE RÉSEAU <span className="text-suite-orange font-bold">LIVSPOT</span>
            </h2>
            <p className="font-space-grotesk text-xl text-suite-black/70 mb-10 leading-extra-relaxed">
              Vous possédez un lieu d'exception ? Offrez à vos visiteurs une expérience enrichie grâce à des placements de produits élégants, adaptés à votre univers.
            </p>
            <button 
              data-event="open_form"
              className="popup-trigger bg-suite-purple text-white px-12 py-5 rounded-lg font-bold font-oswald uppercase tracking-wider hover:bg-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-suite-purple/50 shadow-xl text-lg"
              aria-label="Rejoindre le réseau LIVSPOT"
              tabIndex="0"
              data-tally-open="wLqLyJ"
              data-tally-width="600"
              data-tally-overlay="1"
            >
              Rejoindre le réseau
            </button>
          </div>
        </section>

      </main>

      {/* Bouton flottant avec modale */}
      <FloatingModalButton formIsOpen={formIsOpen} />

      {/* Footer */}
      <footer className="bg-suite-purple text-white border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Logo et description */}
            <div className="w-full md:w-1/2">
              <h3 className="font-oswald text-2xl md:text-3xl uppercase tracking-wider mb-4">
                <span className="font-normal">LIV</span><span className="font-bold">SPOT</span>
              </h3>
              <p className="text-purple-200 mb-6 font-space-grotesk text-base md:text-lg leading-relaxed">
                La plateforme B2B qui révolutionne le placement de produit dans l'hospitalité premium. 
                Connectons vos marques aux plus beaux lieux de séjour.
              </p>
              {/* Réseaux sociaux */}
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/the_suite_escapes" 
                  target="_blank"
                  className="text-purple-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur Instagram"
                  tabIndex="0"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://fr.pinterest.com/thesuiteescapes/" 
                  target="_blank"
                  className="text-purple-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur Pinterest"
                  tabIndex="0"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-4.492 1.407-4.492s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/TheSuiteEscapes/" 
                  target="_blank"
                  className="text-purple-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur Facebook"
                  tabIndex="0"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.367-12 11.987c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/the-suite-escapes/" 
                  target="_blank"
                  className="text-purple-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur LinkedIn"
                  tabIndex="0"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Informations légales */}
            <div className="w-full md:w-1/2 ">
              <h4 className="font-oswald text-lg font-semibold mb-4 uppercase tracking-wider">Légal</h4>
              <ul className="space-y-2 font-space-grotesk">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" tabIndex="0">Mentions légales</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" tabIndex="0">Politique de confidentialité</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" tabIndex="0">Préférences cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-600 mt-6 pt-4 text-center">
            <p className="text-purple-200 font-space-grotesk text-sm">
              © 2025 LIVSPOT. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 