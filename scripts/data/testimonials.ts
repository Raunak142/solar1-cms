export interface Testimonial {
  id: number;
  name: string;
  location: string;
  systemSize: string;
  rating: number;
  quote: string;
  video?: string;
  poster?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Sharma",
    location: "Rajpur Road, Dehradun",
    systemSize: "5 kW",
    rating: 5,
    quote:
      "SolarX made the entire process simple and affordable. My electricity bill is almost zero now.",
    video: "/blog1.mp4",
    poster: "/images/hero-house.png",
  },
  {
    id: 2,
    name: "Priya Gupta",
    location: "Vasant Vihar, Dehradun",
    systemSize: "3 kW",
    rating: 5,
    quote:
      "The team explained everything clearly. Very professional installation.",
    video: "/blog1.mp4",
    poster: "/images/about-team.png",
  },
  {
    id: 3,
    name: "Anil Thakur",
    location: "Selaqui, Dehradun",
    systemSize: "10 kW",
    rating: 5,
    quote:
      "My factory's power bill dropped by ₹40,000 per month. Best investment ever.",
    video: "/blog1.mp4",
    poster: "/images/hero-farm.png",
  },
  {
    id: 4,
    name: "Sunita Rawat",
    location: "Mussoorie",
    systemSize: "4 kW",
    rating: 5,
    quote: "Living off-grid in the hills was a dream. SolarX made it happen.",
    video: "/blog1.mp4",
    poster: "/images/feature-wind.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Clement Town, Dehradun",
    systemSize: "6 kW",
    rating: 5,
    quote:
      "No more power cuts during summers. My family is very happy with SolarX.",
    video: "/blog1.mp4",
    poster: "/images/hero-house.png",
  },
];
