export default function BotanicalSVG({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1000 1200"
      className="absolute inset-0 w-full h-full"
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#F5F0E8" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 100 400 Q 150 350 180 300 Q 200 250 210 180" />
        <path d="M 180 300 L 200 280 M 180 300 L 160 280" />
        <path d="M 210 180 L 230 160 M 210 180 L 190 160" />

        <path d="M 250 500 Q 280 420 300 350 Q 310 300 320 240" />
        <path d="M 300 350 L 325 340 M 300 350 L 285 335" />
        <path d="M 320 240 Q 330 190 340 150" />
        <path d="M 340 150 L 360 140 M 340 150 L 330 130" />

        <path d="M 800 350 Q 750 400 720 480 Q 700 540 690 620" />
        <path d="M 720 480 L 700 475 M 720 480 L 715 460" />
        <path d="M 690 620 L 670 640 M 690 620 L 680 600" />

        <path d="M 900 200 Q 870 280 850 380 Q 840 450 830 520" />
        <path d="M 850 380 L 830 375 M 850 380 L 835 365" />

        <path d="M 150 700 Q 180 750 200 820" />
        <path d="M 200 820 L 190 840 M 200 820 L 220 835" />

        <path d="M 550 800 Q 520 850 500 920" />
        <path d="M 500 920 L 480 930 M 500 920 L 510 945" />

        <path d="M 750 900 Q 780 950 800 1020" />
        <path d="M 800 1020 L 820 1040 M 800 1020 L 790 1050" />
      </g>
    </svg>
  );
}
