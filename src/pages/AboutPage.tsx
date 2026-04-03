export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      <section className="bg-[#F5F0E8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-[#D6CFC4]" />
            <div>
              <h1 className="italic-serif text-4xl md:text-5xl text-[#2D4A2D] mb-8">About Luna Elvira Illustrations</h1>
              <p className="text-[#2D4A2D]/80 leading-relaxed mb-6 font-light">
                Every piece begins life as a hand-drawn original, full of character and care. Luna Elvira Illustrations was built on a simple belief — that in a world full of mass-produced cards, the ones people actually keep are the ones that feel genuinely made.
              </p>
              <p className="text-[#2D4A2D]/80 leading-relaxed mb-6 font-light">
                We create cards and prints for the moments that matter and the people who mean it. We're a small independent UK studio. Every order is packed with care, sent with intention, and made to mean something.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="italic-serif text-3xl md:text-4xl text-[#2D4A2D] mb-16 text-center">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="italic-serif text-xl text-[#2D4A2D]">Hand-drawn originals</h3>
              <p className="text-[#2D4A2D]/70 font-light leading-relaxed">
                Every design is created by hand using traditional techniques. We take our time to ensure each piece is something we're truly proud of.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="italic-serif text-xl text-[#2D4A2D]">Personal and thoughtful</h3>
              <p className="text-[#2D4A2D]/70 font-light leading-relaxed">
                We pour thought and emotion into every design, creating cards and prints that say exactly what you want them to say.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="italic-serif text-xl text-[#2D4A2D]">Sustainably packaged</h3>
              <p className="text-[#2D4A2D]/70 font-light leading-relaxed">
                We use recycled paper, plant-based inks, and compostable packaging. Every order arrives plastic-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="italic-serif text-3xl md:text-4xl text-[#2D4A2D] mb-12">Follow the creative journey</h2>
          <p className="text-[#2D4A2D]/60 font-light mb-12">
            Behind-the-scenes peeks, new designs, and everyday moments from our studio
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://instagram.com/lunaelvira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D4A2D] hover:text-[#A8C5A0] transition-colors font-light"
            >
              Instagram ↗
            </a>
            <a
              href="https://tiktok.com/@lunaelviraarts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D4A2D] hover:text-[#A8C5A0] transition-colors font-light"
            >
              TikTok ↗
            </a>
            <a
              href="https://pinterest.com/lunaelvira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D4A2D] hover:text-[#A8C5A0] transition-colors font-light"
            >
              Pinterest ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
