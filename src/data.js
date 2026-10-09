export const IMG = {
  hills: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85",
  greenHills: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1400&q=85",
  gorilla: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=85",
  gorillaog: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIdgFKQwyZEEIqdPS1N8ojvp3vwYAcqmxmtZldtQt9w&s=10",
  safari: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85",
  kivu: "https://images.pexels.com/photos/31850571/pexels-photo-31850571/free-photo-of-scenic-view-of-lake-kivu-from-gisenyi-rwanda.jpeg?auto=compress&cs=tinysrgb&w=1600",
  kigali: "https://media.istockphoto.com/id/1132673374/photo/kigali-skyline-of-business-district-with-flag-rwanda.jpg?b=1&s=170667a&w=0&k=20&c=_TieALbN1bRN6TNRgW-34xrtVTLrU6fs64R9qcwmDrY=",
  food: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  culture: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1400&q=85",
  nyungwe: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85",
  mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
  forest: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85",
  savannah: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85",
  wildlife: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1400&q=85",
  lake: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
  water: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt10ikTNdtvwDpTvUrAcVbkAlVDw5x2BlS-rHdSiUMpQ&s=10",
  city: "https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg"
};

export const tours = [
  {
    id: "gorilla",
    slug: "into-the-mist",
    category: "wildlife",
    index: "01 / WILDLIFE",
    title: "Into the mist",
    placeName: "Volcanoes National Park",
    location: "Volcanoes National Park",
    duration: "3 days / 2 nights",
    usd: 680,
    image: IMG.gorilla,
    alt: "Mountain gorilla in a green forest",
    description: "Meet the mountain gorillas in their misty forest home, then spend slow afternoons around Musanze with local food, craft and mountain views.",
    placeOverview: "In Rwanda's north-west, Volcanoes National Park protects part of the Virunga mountain range. The area is known for its forested volcanic slopes and the chance to join a guided mountain-gorilla trek. Nearby Musanze makes a useful base for exploring the region.",
    interest: "Gorillas & mountains",
    bestFor: "Wildlife lovers, first-time Rwanda visitors and photographers",
    highlights: [
      { title: "Mountain gorilla trekking", text: "Join an authorised guided trek in the forest. The route and time needed can vary with the gorilla group's location and trail conditions." },
      { title: "Volcanic landscapes", text: "Take in the dramatic green slopes and mountain scenery that define Rwanda's northern highlands." },
      { title: "Musanze moments", text: "Leave time for local food, craft experiences and a slower introduction to the area around the park." }
    ],
    gallery: [
      { image: IMG.gorilla, alt: "Mountain gorilla in its forest habitat", caption: "Mountain gorilla habitat" },
      { image: IMG.mountain, alt: "High mountain peaks beneath a wide sky", caption: "Mountain scenery" },
      { image: IMG.gorillaog, alt: "Layered green hills in Rwanda", caption: "The northern gorillas" },
      { image: IMG.forest, alt: "Tall trees and dense green forest", caption: "Forest atmosphere" }
    ],
    bestTime: "Trekking is possible year-round, but trail conditions and weather change. We will help you check current conditions and permit availability for your dates.",
    travelTips: ["A gorilla trekking permit is required and should be checked before travel is confirmed.", "Bring sturdy walking shoes, a light rain layer and clothing suitable for a forest walk.", "Trek duration and difficulty depend on the gorilla group's location and conditions on the day."],
    itinerary: [
      "Arrival and a relaxed introduction to Musanze",
      "Gorilla trekking day with an authorised park guide",
      "Mountain views, local experiences and departure"
    ],
    includes: ["Private trip planning", "Local guide coordination", "Accommodation planning", "Ground transport planning"],
    note: "Gorilla permits and final accommodation costs are confirmed separately because availability and official pricing can change."
  },
  {
    id: "safari",
    slug: "wild-at-heart",
    category: "wildlife",
    index: "02 / WILDLIFE",
    title: "Wild at heart",
    placeName: "Akagera National Park",
    location: "Akagera National Park",
    duration: "2 days / 1 night",
    usd: 390,
    image: IMG.safari,
    alt: "African safari landscape with wildlife",
    description: "Sunrise drives, open savannah, lakes and a full day in one of Rwanda's most rewarding wildlife landscapes.",
    placeOverview: "In eastern Rwanda, Akagera is a varied landscape of open plains, woodland, wetlands and lakes. A guided game drive offers a chance to look for wildlife while learning about the park's habitats. Sightings are never guaranteed, which is part of the unpredictability of a safari.",
    interest: "Safari & wildlife",
    bestFor: "Families, wildlife lovers and travellers with limited time",
    highlights: [
      { title: "Game drives", text: "Explore the park with a guide and look for wildlife across different habitats. What you see depends on the day, season and animal movement." },
      { title: "Lakes and wetlands", text: "Discover the quieter water landscapes that make Akagera more than open savannah." },
      { title: "Sunrise in the park", text: "Start early when the landscape is changing with the light and wildlife activity may be easier to observe." }
    ],
    gallery: [
      { image: IMG.safari, alt: "Safari vehicle travelling through African grassland", caption: "Safari country" },
      { image: IMG.savannah, alt: "Green African landscape with open vegetation", caption: "Open landscapes" },
      { image: IMG.wildlife, alt: "African wildlife in a natural setting", caption: "Wildlife encounters" },
      { image: IMG.lake, alt: "Wide natural water landscape", caption: "Water and wetlands" }
    ],
    bestTime: "Akagera can be visited throughout the year. Road and wildlife-viewing conditions vary with the seasons, so we will plan around your travel dates.",
    travelTips: ["Wildlife sightings are not guaranteed; allow time and enjoy the wider landscape too.", "Bring sun protection, drinking water and comfortable clothing for an early start.", "Park fees, guide arrangements and accommodation should be confirmed before the trip."],
    itinerary: [
      "Transfer to Akagera and afternoon exploration",
      "Early wildlife drive, lakes and return towards Kigali",
      "Flexible timing around your flight or next destination"
    ],
    includes: ["Route design", "Local guide coordination", "Park visit planning", "Transport planning"],
    note: "Safari availability, park fees and accommodation are confirmed with the final itinerary."
  },
  {
    id: "kivu",
    slug: "by-the-blue",
    category: "nature",
    index: "03 / NATURE",
    title: "By the blue",
    placeName: "Lake Kivu",
    location: "Lake Kivu",
    duration: "3 days / 2 nights",
    usd: 460,
    image: IMG.kivu,
    alt: "Lake Kivu and surrounding hills",
    description: "A restorative escape along the lake — boat rides, village walks, warm evenings and space to simply be.",
    placeOverview: "Lake Kivu sits along Rwanda's western edge, with lakeside towns, green hills and wide views across the water. The trip can be shaped around gentle walks, time by the shore and locally available boat or water-based experiences.",
    interest: "Lake Kivu & relaxation",
    bestFor: "Couples, friends and slow-travel seekers",
    highlights: [
      { title: "Lakeside time", text: "Slow down by the water, enjoy the changing light and take in the hills that frame the shoreline." },
      { title: "Boat experiences", text: "Ask about locally available boat trips and lake activities, selected around weather and operator availability." },
      { title: "Small-town discovery", text: "Make space for lakeside walks, local food and unhurried time in the communities along the shore." }
    ],
    gallery: [
      { image: IMG.kivu, alt: "View across Lake Kivu towards the green hills", caption: "Lake Kivu views" },
      { image: IMG.lake, alt: "Calm blue water and a natural shoreline", caption: "Time by the water" },
      { image: IMG.water, alt: "Close view of sunlight on water", caption: "Blue horizons" },
      { image: IMG.greenHills, alt: "Green hills and valleys", caption: "The lakeside hills" }
    ],
    bestTime: "Lake Kivu is a year-round destination. Weather can affect boat activities, so water-based plans should remain flexible.",
    travelTips: ["Choose your lakeside base according to the kind of stay you prefer.", "Confirm boat operators, safety arrangements and weather before any water activity.", "Allow time for the scenic journey between destinations."],
    itinerary: [
      "Scenic transfer and lakeside check-in",
      "Boat or lakeside activity chosen around your interests",
      "Slow morning and onward travel"
    ],
    includes: ["Trip design", "Activity planning", "Accommodation suggestions", "Ground transport planning"],
    note: "Lake activities and accommodation are selected around your dates and preferred pace."
  },
  {
    id: "culture",
    slug: "kigali-in-colour",
    category: "culture",
    index: "04 / CULTURE",
    title: "Kigali in colour",
    placeName: "Kigali",
    location: "Kigali",
    duration: "2 days / 1 night",
    usd: 280,
    image: IMG.kigali,
    alt: "Kigali city skyline",
    description: "Discover Kigali through food, art, local stories and the everyday rhythm of the city.",
    placeOverview: "Kigali is Rwanda's lively capital, spread across a landscape of hills and neighbourhoods. A thoughtful city visit can bring together history, food, creative spaces and everyday city life, with the exact stops chosen around your interests.",
    interest: "Kigali & culture",
    bestFor: "Curious travellers, food lovers and short city breaks",
    highlights: [
      { title: "City viewpoints", text: "See how Kigali's neighbourhoods and green hills fit together from selected viewpoints around the city." },
      { title: "Food and markets", text: "Explore local flavours and market life with time to ask questions and discover ingredients and dishes." },
      { title: "Art and local stories", text: "Include cultural spaces and historical sites that help you understand the city and the country." }
    ],
    gallery: [
      { image: IMG.kigali, alt: "Kigali skyline and city buildings", caption: "Kigali city views" },
      { image: IMG.city, alt: "Modern city buildings at dusk", caption: "City atmosphere" },
      { image: IMG.food, alt: "A colourful meal prepared with fresh ingredients", caption: "Food and flavour" },
      { image: IMG.culture, alt: "Green landscape in Rwanda", caption: "Green Kigali surroundings" }
    ],
    bestTime: "Kigali can be explored throughout the year. We can arrange the route around your arrival time, interests and other travel plans.",
    travelTips: ["Wear comfortable shoes for walking between selected stops.", "Some museums and cultural sites have specific opening days or hours; check before setting the route.", "Tell us if you prefer food, history, art, shopping or a balanced introduction."],
    itinerary: [
      "City orientation and neighbourhood exploration",
      "Food, art and local culture chosen around your interests",
      "Flexible final morning before departure"
    ],
    includes: ["Local experience planning", "Restaurant suggestions", "City transport planning", "Flexible itinerary design"],
    note: "Experience availability is confirmed with the final itinerary and your preferred dates."
  }
];

export const destinations = [
  { id: "volcanoes", title: "Volcanoes", region: "NORTH", image: IMG.gorilla, description: "Mountain air, bamboo forest, volcanic peaks and gorilla country.", detail: "The north is Rwanda at its most dramatic: volcanoes rise above Musanze and the landscape invites slow exploration.", tours: ["gorilla"] },
  { id: "akagera", title: "Akagera", region: "EAST", image: IMG.safari, description: "Open plains, lakes and wildlife.", detail: "Akagera brings a different rhythm — broad savannah, wetlands and wildlife drives framed by the eastern hills.", tours: ["safari"] },
  { id: "kivu", title: "Lake Kivu", region: "WEST", image: IMG.kivu, description: "Blue horizons and unhurried days.", detail: "Lake Kivu is made for breathing room: lakeside walks, boat experiences, warm evenings and long views.", tours: ["kivu"] },
  { id: "nyungwe", title: "Nyungwe", region: "SOUTH-WEST", image: IMG.nyungwe, description: "Ancient forest, canopy walks and deep green.", detail: "Nyungwe offers dense rainforest, trails and a quieter sense of adventure for travellers who want to go deeper into nature.", tours: [] }
];

export const journalPosts = [
  { slug: "slower-kigali", category: "KIGALI", number: "01", title: "A slower way to see the city.", image: IMG.kigali, excerpt: "Kigali rewards the traveller who leaves some space in the day. Walk a little farther. Sit a little longer.", body: ["Kigali is easiest to understand when you leave some space between the landmarks. The city is made of neighbourhoods, cafés, galleries, markets and everyday moments that are easy to miss when a schedule is too full.", "A slower day might mean starting with coffee, walking through a local neighbourhood, visiting an art space and leaving the afternoon open. The point is not to see everything. It is to notice more."] },
  { slug: "five-flavors", category: "CULTURE", number: "02", title: "Five flavors that feel like home", image: IMG.food, excerpt: "Food is memory, hospitality and geography on one plate.", body: ["Rwandan food is deeply connected to place and hospitality. A meal can be a way into a conversation, a family story or a local routine.", "When planning a food-focused day, we prefer a mix of familiar staples and opportunities to taste something you have never tried before. Ask questions, eat slowly and let the meal become part of the journey."] },
  { slug: "hills-change-everything", category: "LANDSCAPE", number: "03", title: "Why the hills change everything", image: IMG.kivu, excerpt: "The terrain shapes routes, routines and the way communities connect.", body: ["Rwanda's hills are more than scenery. They influence roads, farming, viewpoints and the pace of a journey.", "That is why a good itinerary leaves room for the road itself. A short distance on a map can become a beautiful part of the experience when the route is designed with time to stop and look."] },
  { slug: "into-the-green", category: "NATURE", number: "04", title: "Into the green", image: IMG.nyungwe, excerpt: "A quiet introduction to Rwanda's deep forests and the life within them.", body: ["Forest travel rewards patience. The deeper you go, the more the journey becomes about sounds, textures, trails and small discoveries.", "For travellers heading into Rwanda's forests, comfortable pacing and good local guidance make the experience more enjoyable and responsible."] }
];

export const interests = [
  "Choose a direction",
  "Gorillas & mountains",
  "Safari & wildlife",
  "Lake Kivu & relaxation",
  "Kigali & culture",
  "Nyungwe & forest",
  "A little of everything"
];

