export interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
  color: string;
  description?: string;
  story?: string;
  releaseDate?: string;
  bpm?: number;
}

export const tracks: Track[] = [
  {
    id: 1,
    title: "Cherry Blossom Dreams",
    artist: "Rollie",
    genre: "Anime OST",
    duration: "3:42",
    cover: "https://images.unsplash.com/photo-1761058782504-9727fce7b753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    color: "bg-pink-100",
    description: "A gentle, floating melody that captures the fleeting beauty of spring.",
    story: "I wrote this track while watching the petals fall during a trip to Kyoto. The piano melody represents the wind, while the strings allow the listener to drift away.",
    releaseDate: "2023-04-12",
    bpm: 95
  },
  {
    id: 2,
    title: "Midnight in Manila",
    artist: "Rollie",
    genre: "OPM / Lofi",
    duration: "4:05",
    cover: "https://images.unsplash.com/photo-1617460237920-ea0b1bad4b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    color: "bg-indigo-100",
    description: "A nostalgic lo-fi track blending city sounds with traditional kundiman progressions.",
    story: "Inspired by late-night jeepney rides and the quiet chaos of the city at night. I sampled actual street ambience from EDSA for the background texture.",
    releaseDate: "2023-08-20",
    bpm: 80
  },
  {
    id: 3,
    title: "Symphony No. 7 (Remix)",
    artist: "Rollie",
    genre: "Classical Fusion",
    duration: "2:58",
    cover: "https://images.unsplash.com/photo-1657458891294-7380eb30d0a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    color: "bg-blue-100",
    description: "Beethoven meets modern trap beats in this high-energy fusion.",
    story: "I've always loved the grandeur of classical music but wanted to make it hit harder for modern listeners. This is my attempt to bridge the gap between 1800s Vienna and 2024 Tokyo.",
    releaseDate: "2023-11-05",
    bpm: 140
  },
  {
    id: 4,
    title: "School Rooftop",
    artist: "Rollie",
    genre: "Anime Opening",
    duration: "1:30",
    cover: "https://images.unsplash.com/photo-1632242219454-74c9948ed11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    color: "bg-orange-100",
    description: "An upbeat, guitar-driven track perfect for a slice-of-life anime opening.",
    story: "Imagine the protagonist running late for school with toast in their mouth. That's the energy I wanted to capture here. Pure youth and limitless potential.",
    releaseDate: "2024-01-15",
    bpm: 170
  },
  {
    id: 5,
    title: "Neon Tokyo",
    artist: "Rollie",
    genre: "Synthwave",
    duration: "3:15",
    cover: "https://images.unsplash.com/photo-1570610159825-f903255cdf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    color: "bg-purple-100",
    description: "A retro-futuristic drive through a cyberpunk cityscape.",
    story: "Created using only analog synth emulations to get that authentic 80s warmth with a modern punch.",
    releaseDate: "2024-02-01",
    bpm: 120
  },
  {
    id: 6,
    title: "Rainy Cafe",
    artist: "Rollie",
    genre: "Jazz Hop",
    duration: "2:45",
    cover: "https://images.unsplash.com/photo-1515533846663-8a3c8a987d93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    color: "bg-amber-100",
    description: "Cozy vibes with brushed drums and a sleepy saxophone.",
    story: "Written on a rainy Sunday afternoon. The goal was to make the musical equivalent of a warm latte.",
    releaseDate: "2023-10-30",
    bpm: 75
  }
];
