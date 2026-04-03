interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1A2E1A] text-[#FAF8F4]">
      <div className="max-w-full px-8 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="text-sm font-light text-[#FAF8F4]">Luna Elvira Arts</p>
              <p className="text-xs text-[#FAF8F4]/70 mt-2 font-light">Made with love in England</p>
            </div>

            <div className="text-sm space-y-2">
              <div>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#A8C5A0] transition-colors font-light text-xs"
                >
                  Home
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#A8C5A0] transition-colors font-light text-xs"
                >
                  About
                </button>
              </div>
              <div>
                <a
                  href="https://lunaelviraartsstudio.etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A8C5A0] transition-colors font-light text-xs"
                >
                  Find Us on Etsy
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <a
                href="https://instagram.com/lunaelvira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAF8F4]/70 hover:text-[#A8C5A0] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.981-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com/lunaelvira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAF8F4]/70 hover:text-[#A8C5A0] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@lunaelviraarts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAF8F4]/70 hover:text-[#A8C5A0] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.283 10.24c-.464.263-.94.42-1.42.451v4.26c0 2.088-1.696 3.784-3.784 3.784-2.088 0-3.784-1.696-3.784-3.784 0-.416.066-.816.19-1.2h-1.76c-.14.816-.216 1.644-.216 2.4 0 3.76 3.024 6.784 6.784 6.784 3.76 0 6.784-3.024 6.784-6.784v-2.88c1.24.912 2.752 1.464 4.368 1.536v-1.76c-1.528-.072-2.912-.608-3.968-1.452z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-[#FAF8F4]/10 pt-12">
            <div className="text-xs text-[#FAF8F4]/60 font-light leading-relaxed space-y-4 mb-12">
              <div>
                <h3 className="font-medium text-[#FAF8F4]/80 mb-3 text-xs">Privacy Policy</h3>
                <p className="mb-2">We respect your privacy and are committed to protecting your personal information.</p>
                <p className="mb-2">When you place an order or contact us, we collect details such as your name, email address, and delivery information to process your order and provide customer support. Payments are handled securely through trusted third-party providers.</p>
                <p className="mb-2">We only share your information where necessary, such as with delivery services or payment processors. We do not sell or trade your personal data.</p>
                <p className="mb-2">Your information is stored securely and retained only as long as required for legal and operational purposes.</p>
                <p className="mb-2">You have the right to access, update, or request deletion of your personal data at any time.</p>
                <p>For any privacy-related enquiries, please contact us at: <a href="mailto:lunaelviraarts@gmail.com" className="hover:text-[#A8C5A0] transition-colors">lunaelviraarts@gmail.com</a></p>
              </div>
            </div>

            <div className="border-t border-[#FAF8F4]/10 pt-8 text-center text-xs text-[#FAF8F4]/40 font-light">
              <p>© 2025 Luna Elvira Arts · All rights reserved · Independent trader</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
