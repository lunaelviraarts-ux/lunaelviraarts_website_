import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [email, setEmail] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const aboutRef = useIntersectionObserver(() => {
    aboutRef.current?.classList.add('fade-in-up');
  });
  const featuredRef = useIntersectionObserver(() => {
    featuredRef.current?.classList.add('fade-in-up');
  });
  const storyRef = useIntersectionObserver(() => {
    storyRef.current?.classList.add('fade-in-up');
  });
  const signupRef = useIntersectionObserver(() => {
    signupRef.current?.classList.add('fade-in-up');
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupMessage('Thank you for subscribing');
    setEmail('');
    setTimeout(() => setSignupMessage(''), 3000);
  };

  return (
    <div>
      <section className="relative w-full h-screen bg-[#FAF8F4] flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-sm text-[#2D4A2D]/60 mb-12 tracking-wide font-light">
            Hand-drawn illustrations from our UK studio
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2D4A2D] mb-8 leading-tight font-light">
            Illustrations drawn with love, designed to be kept.
          </h1>

          <p className="text-[#2D4A2D]/70 text-base sm:text-lg md:text-xl font-light mb-12 leading-relaxed">
            Original hand-drawn cards and art prints, made in England.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://lunaelviraartsstudio.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2D4A2D] text-[#FAF8F4] font-medium transition-all hover:bg-[#A8C5A0] hover:text-[#2D4A2D]"
            >
              Shop on Etsy ↗
            </a>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 border border-[#2D4A2D] text-[#2D4A2D] font-medium transition-all hover:bg-[#2D4A2D] hover:text-[#FAF8F4]"
            >
              Our Story
            </button>
          </div>

          <div className="h-px bg-[#A8C5A0]/30 max-w-xs mx-auto" />
        </div>
      </section>

      <section ref={aboutRef} className="bg-[#FAF8F4] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            <div className="space-y-4">
              <div className="w-6 h-6 text-[#A8C5A0]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg text-[#2D4A2D] font-medium">Hand-drawn originals</h3>
              <p className="text-[#2D4A2D]/70 text-sm leading-relaxed font-light">
                Every piece begins on paper. No templates, no shortcuts.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-6 h-6 text-[#A8C5A0]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg text-[#2D4A2D] font-medium">Made to be kept</h3>
              <p className="text-[#2D4A2D]/70 text-sm leading-relaxed font-light">
                Cards and prints for the moments that matter and the people who mean it.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-6 h-6 text-[#A8C5A0]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg text-[#2D4A2D] font-medium">Independent UK studio</h3>
              <p className="text-[#2D4A2D]/70 text-sm leading-relaxed font-light">
                Small batch. Thoughtfully made. Sent with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuredRef} className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2D4A2D] mb-4 font-light">Recent work</h2>
            <p className="text-[#2D4A2D]/60 font-light">A selection of recent illustrations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">
            <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer">
              <img
                src="/IMG_1473_Small.jpeg"
                alt="Mushroom illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-[#FAF8F4] opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
            </div>

            <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer">
              <img
                src="/IMG_1472_Small.jpeg"
                alt="Gothic cat skull"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-[#FAF8F4] opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
            </div>

            <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer">
              <img
                src="/IMG_1474_Small.jpeg"
                alt="Skull with rose"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-[#FAF8F4] opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
            </div>

            <div className="aspect-[4/5] relative group overflow-hidden cursor-pointer">
              <img
                src="/IMG_1475_Small.jpeg"
                alt="Pumpkin illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-[#FAF8F4] opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://lunaelviraartsstudio.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D4A2D] hover:text-[#A8C5A0] transition-colors font-light text-sm"
            >
              View all prints and cards on Etsy ↗
            </a>
          </div>
        </div>
      </section>

      <section ref={storyRef} className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#2D4A2D] py-16 md:py-32 px-6 flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-[#FAF8F4] text-center max-w-lg leading-relaxed font-light">
            Every piece begins life as a hand-drawn original, full of character and care.
          </p>
        </div>

        <div className="bg-[#FAF8F4] py-16 md:py-32 px-6 md:px-12 flex flex-col justify-center">
          <p className="text-[#2D4A2D]/80 leading-relaxed mb-6 font-light text-sm">
            Luna Elvira Illustrations was built on a simple belief — that in a world full of mass-produced cards, the ones people actually keep are the ones that feel genuinely made. We create cards and prints for the moments that matter and the people who mean it. We're a small independent UK studio. Every order is packed with care, sent with intention, and made to mean something.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="text-[#2D4A2D] hover:text-[#A8C5A0] transition-colors font-light text-sm self-start"
          >
            Read more about us →
          </button>
        </div>
      </section>

      <section ref={signupRef} className="bg-[#2D4A2D] py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#FAF8F4] mb-4 font-light">Stay close</h2>
          <p className="text-[#FAF8F4]/70 font-light mb-12 text-sm">
            New illustrations, first looks and quiet updates — straight to your inbox.
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 bg-[#FAF8F4] text-[#2D4A2D] placeholder-[#2D4A2D]/40 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#FAF8F4] text-[#2D4A2D] font-medium hover:bg-[#A8C5A0] hover:text-[#FAF8F4] transition-all text-sm"
              >
                Join
              </button>
            </div>
            {signupMessage && (
              <p className="text-[#A8C5A0] text-xs font-light">{signupMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
