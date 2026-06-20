import { useState, useRef, useEffect } from "react";

const destinations = [
  {
    id: 1,
    name: "Achievement",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80",
  },
  {
    id: 2,
    name: "Bus Stations",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80",
  },
  {
    id: 3,
    name: "Maharashtra Government official website",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  },
  {
    id: 4,
    name: "Maharashtra Tourism Department",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 5,
    name: "Parcel Service",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
  },
    {
    id: 5,
    name: "Tours and Travels",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
  },
  {
    id: 6,
    name: "महामंडळाचा वार्षिक प्रशासन अहवाल",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
  }
];

const CARD_WIDTH = 185;
const GAP = 14;
const STEP = CARD_WIDTH + GAP;

// const StarIcon = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD04A" aria-hidden="true">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// );

// const PinIcon = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="#e53e3e" aria-hidden="true">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//   </svg>
// );

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const DestinationCard = ({ destination }) => (
  <div
    style={{
      width: CARD_WIDTH,
      minWidth: CARD_WIDTH,
      height: 220,
      borderRadius: 16,
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
      cursor: "pointer",
    }}
  >
    {/* Photo */}
    <img
      src={destination.image}
      alt={destination.name}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
    {/* Dark gradient overlay */}
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)" }} />

    {/* Price badge top-right */}
    {/* <div style={{
      position: "absolute", top: 10, right: 10,
      background: "rgba(255,255,255,0.22)",
      backdropFilter: "blur(6px)",
      borderRadius: 20, padding: "3px 9px",
      fontSize: 10, color: "#fff", fontWeight: 500,
    }}>
      starts at {destination.price}
    </div> */}

    {/* Bottom info */}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px" }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 1 }}>{destination.name}</div>
      {/* <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>{destination.subtitle}</div> */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {/* <StarIcon /> */}
        {/* <span style={{ fontSize: 11, color: "#fff", fontWeight: 500 }}>{destination.rating}</span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.65)" }}>({destination.reviews})</span> */}
        {/* <span style={{ marginLeft: 2 }}><PinIcon /></span> */}
        {/* <span style={{ fontSize: 10, color: "rgba(255,255,255,0.75)" }}>{destination.location}</span> */}
      </div>
    </div>
  </div>
);

export default function TopDestinations() {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        const w = wrapperRef.current.offsetWidth - 48; // subtract section padding
        const count = Math.floor((w + GAP) / STEP);
        setVisible(Math.max(1, count));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  const max = Math.max(0, destinations.length - visible);
  const safeIndex = Math.min(index, max);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <div style={{ padding: "32px 24px", boxSizing: "border-box", width: "100%" }}>
    <div
      ref={wrapperRef}
      style={{
        background: "#f0f0f0",
        borderRadius: 20,
        padding: "24px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: "2rem" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#111" }}>Top Destinations</h2>
        <p style={{ fontSize: 13, color: "#666", maxWidth: 300, margin: 0, lineHeight: 1.5 }}>
          From island escapes to cool mountain towns, discover where your next journey will take you.
        </p>
      </div>

      {/* Carousel */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: GAP,
            transform: `translateX(-${safeIndex * STEP}px)`,
            transition: "transform 0.4s ease",
          }}
        >
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>

      {/* Footer row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
        {/* View more button */}
        <button
          style={{
            fontSize: 13, fontWeight: 600,
            color: "#fff", background: "#1a1a2e",
            border: "none", borderRadius: 24,
            padding: "8px 20px", cursor: "pointer",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#2d2d4e"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a2e"; }}
        >
          View more
        </button>

        {/* Nav arrows */}
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { fn: prev, disabled: safeIndex === 0, label: "Previous", icon: <ChevronLeft /> },
            { fn: next, disabled: safeIndex >= max, label: "Next", icon: <ChevronRight /> },
          ].map(({ fn, disabled, label, icon }) => (
            <button
              key={label}
              onClick={fn}
              disabled={disabled}
              aria-label={label}
              style={{
                width: 34, height: 34, borderRadius: "50%",
                border: "1.5px solid #ccc",
                background: "#fff",
                cursor: disabled ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: disabled ? "#ccc" : "#333",
                opacity: disabled ? 0.4 : 1,
                transition: "background 0.15s",
                padding: 0,
              }}
              onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = "#f0f0f0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}