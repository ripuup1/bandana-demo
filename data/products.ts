export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  longDescription: string;
  tags: ('human' | 'dog' | 'waterproof' | 'bundle')[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  materials: string;
  careInstructions: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  category: 'human' | 'dog' | 'bundle';
};

export const products: Product[] = [
  {
    id: 'classic',
    name: 'The Classic',
    slug: 'the-classic',
    price: 28,
    description: 'Our signature bandana. 100% cotton, built to last.',
    longDescription: 'The one that started it all. Our Classic bandana is crafted from premium 100% American cotton with a soft hand feel and durable construction. Whether you\'re hitting the trail, heading to brunch, or just need to look effortlessly cool — The Classic has you covered. Preshrunk and ready to roll right out of the package.',
    tags: ['human'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Sand', hex: '#D4C5A9' },
    ],
    sizes: ['One Size', 'Grande (27" x 27")'],
    images: [
      'https://placehold.co/600x600/1a1a1a/ffffff?text=Classic+Front',
      'https://placehold.co/600x600/2a2a2a/ffffff?text=Classic+Detail',
      'https://placehold.co/600x600/3a3a3a/ffffff?text=Classic+Lifestyle',
      'https://placehold.co/600x600/1a1a1a/e8dcc8?text=Classic+Flat',
    ],
    materials: '100% premium American cotton. 22" x 22" standard, 27" x 27" Grande. Weight: 3.2oz. Double-stitched rolled hem for durability.',
    careInstructions: 'Machine wash cold with like colors. Tumble dry low or hang dry. Iron on low if needed. Do not bleach.',
    rating: 4.8,
    reviewCount: 147,
    featured: true,
    category: 'human',
  },
  {
    id: 'dry-shield',
    name: 'The Dry Shield',
    slug: 'the-dry-shield',
    price: 36,
    description: 'Waterproof. Satin-lined. Hair protection that performs.',
    longDescription: 'Keep your hair in place and protected. The Dry Shield puts a protective spin on a favorite accessory with its waterproof exterior and satin-lined interior that reduces friction and static to prevent breakage. From trail runs to rainy commutes — your hair stays perfect. The outer shell repels water while the inner satin layer glides smoothly against your hair.',
    tags: ['human', 'waterproof'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Burnt Orange', hex: '#D4622B' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Olive', hex: '#4A5D3A' },
    ],
    sizes: ['One Size', 'Grande (27" x 27")'],
    images: [
      'https://placehold.co/600x600/D4622B/ffffff?text=Dry+Shield+Front',
      'https://placehold.co/600x600/c4521b/ffffff?text=Dry+Shield+Detail',
      'https://placehold.co/600x600/b4420b/ffffff?text=Dry+Shield+Interior',
      'https://placehold.co/600x600/D4622B/e8dcc8?text=Dry+Shield+Flat',
    ],
    materials: 'Outer: Waterproof polyester shell. Inner: 100% satin lining. 22" x 22" standard. Weight: 2.8oz. Sealed seams for full water protection.',
    careInstructions: 'Hand wash cold recommended. Lay flat to dry. Do not iron directly on waterproof coating. Do not bleach or dry clean.',
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    category: 'human',
  },
  {
    id: 'trail-runner',
    name: 'The Trail Runner',
    slug: 'the-trail-runner',
    price: 32,
    description: 'Moisture-wicking, breathable, four-way stretch.',
    longDescription: 'Built for movement. The Trail Runner features our proprietary moisture-wicking fabric with four-way stretch that moves with you on every climb, descent, and sprint. The breathable mesh panels keep airflow high while the quick-dry technology means you\'re never weighed down by sweat. From dawn patrols to summit pushes — this is your performance bandana.',
    tags: ['human'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Burnt Orange', hex: '#D4622B' },
      { name: 'Sand', hex: '#D4C5A9' },
    ],
    sizes: ['One Size', 'Grande (27" x 27")'],
    images: [
      'https://placehold.co/600x600/4A5D3A/ffffff?text=Trail+Runner+Front',
      'https://placehold.co/600x600/3A4D2A/ffffff?text=Trail+Runner+Detail',
      'https://placehold.co/600x600/5A6D4A/ffffff?text=Trail+Runner+Stretch',
      'https://placehold.co/600x600/4A5D3A/e8dcc8?text=Trail+Runner+Flat',
    ],
    materials: '92% polyester, 8% spandex. Four-way stretch. Moisture-wicking finish. UPF 30+ sun protection. 22" x 22" standard. Weight: 2.4oz.',
    careInstructions: 'Machine wash cold. Do not use fabric softener (degrades wicking). Tumble dry low. Do not iron.',
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    category: 'human',
  },
  {
    id: 'weekender',
    name: 'The Weekender',
    slug: 'the-weekender',
    price: 28,
    description: 'Lightweight cotton for lazy Saturdays and spontaneous adventures.',
    longDescription: 'Not everything has to be high-performance. The Weekender is our softest, most relaxed bandana — lightweight cotton that gets better with every wash. Perfect for farmers markets, coffee runs, beach days, and all the in-between moments that make life good. Sometimes the best adventure is no adventure at all.',
    tags: ['human'],
    colors: [
      { name: 'Sand', hex: '#D4C5A9' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['One Size', 'Grande (27" x 27")'],
    images: [
      'https://placehold.co/600x600/D4C5A9/1a1a1a?text=Weekender+Front',
      'https://placehold.co/600x600/C4B599/1a1a1a?text=Weekender+Detail',
      'https://placehold.co/600x600/E4D5B9/1a1a1a?text=Weekender+Lifestyle',
      'https://placehold.co/600x600/D4C5A9/444444?text=Weekender+Flat',
    ],
    materials: '100% lightweight cotton voile. Garment-washed for softness. 22" x 22" standard. Weight: 2.0oz. Gets softer with every wash.',
    careInstructions: 'Machine wash warm. Tumble dry low. Embrace the wrinkles — they add character.',
    rating: 4.6,
    reviewCount: 64,
    featured: false,
    category: 'human',
  },
  {
    id: 'night-shift',
    name: 'The Night Shift',
    slug: 'the-night-shift',
    price: 30,
    description: 'Reflective details for dawn patrols and evening runs.',
    longDescription: 'Be seen, stay safe, look good. The Night Shift features strategic reflective detailing that catches headlights and streetlights without sacrificing style. Built with the same moisture-wicking performance fabric as The Trail Runner, plus added visibility for early morning and late evening adventures. Because your run schedule doesn\'t care about the sun\'s schedule.',
    tags: ['human'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['One Size', 'Grande (27" x 27")'],
    images: [
      'https://placehold.co/600x600/1B2A4A/ffffff?text=Night+Shift+Front',
      'https://placehold.co/600x600/0B1A3A/ffffff?text=Night+Shift+Reflective',
      'https://placehold.co/600x600/2B3A5A/ffffff?text=Night+Shift+Detail',
      'https://placehold.co/600x600/1B2A4A/e8dcc8?text=Night+Shift+Flat',
    ],
    materials: '92% polyester, 8% spandex. 3M reflective thread detailing. Moisture-wicking. UPF 30+. 22" x 22" standard. Weight: 2.6oz.',
    careInstructions: 'Machine wash cold inside out to protect reflective details. Tumble dry low. Do not iron over reflective areas.',
    rating: 4.5,
    reviewCount: 42,
    featured: false,
    category: 'human',
  },
  {
    id: 'good-boy',
    name: 'The Good Boy',
    slug: 'the-good-boy',
    price: 24,
    description: 'For your best friend. Quick-dry, breathable, seamless fit.',
    longDescription: 'Your dog deserves better than a triangle of leftover fabric. The Good Boy is engineered for dogs — quick-dry fabric that handles water, mud, and whatever else your pup gets into. The four-way stretch means easy on, easy off with no fuss. Adjustable snap closure fits necks of all sizes. Because every good boy deserves a great bandana.',
    tags: ['dog'],
    colors: [
      { name: 'Burnt Orange', hex: '#D4622B' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    sizes: ['S (small breeds)', 'M (medium breeds)', 'L (large breeds)'],
    images: [
      'https://placehold.co/600x600/D4622B/ffffff?text=Good+Boy+Front',
      'https://placehold.co/600x600/c4521b/ffffff?text=Good+Boy+On+Dog',
      'https://placehold.co/600x600/e4723b/ffffff?text=Good+Boy+Detail',
      'https://placehold.co/600x600/D4622B/e8dcc8?text=Good+Boy+Flat',
    ],
    materials: '90% polyester, 10% spandex. Quick-dry moisture-wicking. Adjustable snap closure. S: 10-14" neck, M: 14-20" neck, L: 20-28" neck.',
    careInstructions: 'Machine wash cold. Tumble dry low. Built to handle whatever your dog throws at it (literally).',
    rating: 4.9,
    reviewCount: 312,
    featured: false,
    category: 'dog',
  },
  {
    id: 'good-girl',
    name: 'The Good Girl',
    slug: 'the-good-girl',
    price: 24,
    description: 'Same great fit. New colorways for the fashionable pup.',
    longDescription: 'Same legendary fit and function as The Good Boy, with colorways designed for the fashion-forward pup. Quick-dry fabric, four-way stretch, and an adjustable snap closure that makes dressing your dog actually enjoyable. Whether she\'s hiking the trails or strutting through the park — she\'ll be the best-dressed dog there.',
    tags: ['dog'],
    colors: [
      { name: 'Sand', hex: '#D4C5A9' },
      { name: 'Burnt Orange', hex: '#D4622B' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    sizes: ['S (small breeds)', 'M (medium breeds)', 'L (large breeds)'],
    images: [
      'https://placehold.co/600x600/D4C5A9/1a1a1a?text=Good+Girl+Front',
      'https://placehold.co/600x600/C4B599/1a1a1a?text=Good+Girl+On+Dog',
      'https://placehold.co/600x600/E4D5B9/1a1a1a?text=Good+Girl+Detail',
      'https://placehold.co/600x600/D4C5A9/444444?text=Good+Girl+Flat',
    ],
    materials: '90% polyester, 10% spandex. Quick-dry moisture-wicking. Adjustable snap closure. S: 10-14" neck, M: 14-20" neck, L: 20-28" neck.',
    careInstructions: 'Machine wash cold. Tumble dry low. She\'ll still look fabulous.',
    rating: 4.8,
    reviewCount: 276,
    featured: false,
    category: 'dog',
  },
  {
    id: 'muddy-paws',
    name: 'The Muddy Paws',
    slug: 'the-muddy-paws',
    price: 26,
    description: 'Water-resistant and stain-proof. For dogs who live large.',
    longDescription: 'For the dog who treats every puddle like a swimming pool and every mud pit like a spa. The Muddy Paws features a waterproof exterior and stain-resistant coating that shrugs off whatever nature throws at it. Wipe clean in seconds. Quick-dry interior keeps your pup comfortable even after the muddiest adventures.',
    tags: ['dog', 'waterproof'],
    colors: [
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['S (small breeds)', 'M (medium breeds)', 'L (large breeds)'],
    images: [
      'https://placehold.co/600x600/4A5D3A/ffffff?text=Muddy+Paws+Front',
      'https://placehold.co/600x600/3A4D2A/ffffff?text=Muddy+Paws+On+Dog',
      'https://placehold.co/600x600/5A6D4A/ffffff?text=Muddy+Paws+Detail',
      'https://placehold.co/600x600/4A5D3A/e8dcc8?text=Muddy+Paws+Flat',
    ],
    materials: 'Outer: Waterproof polyester with DWR coating. Inner: Quick-dry mesh. Adjustable snap closure. S: 10-14" neck, M: 14-20" neck, L: 20-28" neck.',
    careInstructions: 'Wipe clean with damp cloth. Machine wash cold for deep clean. Hang dry to maintain waterproof coating.',
    rating: 4.7,
    reviewCount: 158,
    featured: false,
    category: 'dog',
  },
  {
    id: 'adventure-pack',
    name: 'The Adventure Pack',
    slug: 'the-adventure-pack',
    price: 52,
    description: 'One for you. One for the dog. Save $10.',
    longDescription: 'The ultimate matching set. Pick one human bandana and one dog bandana — we\'ll make sure you and your best friend are coordinated for every adventure. The Adventure Pack saves you $10 compared to buying individually, because adventures are better when you match. Includes one Classic (human) and one Good Boy/Girl (dog) in your choice of coordinating colors.',
    tags: ['bundle'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Burnt Orange', hex: '#D4622B' },
      { name: 'Sand', hex: '#D4C5A9' },
    ],
    sizes: ['One Size Human + S Dog', 'One Size Human + M Dog', 'One Size Human + L Dog'],
    images: [
      'https://placehold.co/600x600/1a1a1a/D4622B?text=Adventure+Pack',
      'https://placehold.co/600x600/2a2a2a/D4622B?text=Pack+Contents',
      'https://placehold.co/600x600/3a3a3a/D4622B?text=Pack+Lifestyle',
      'https://placehold.co/600x600/1a1a1a/e8dcc8?text=Pack+Flat+Lay',
    ],
    materials: 'Includes: 1x The Classic (100% cotton) + 1x The Good Boy/Girl (90% polyester, 10% spandex). See individual product pages for full specs.',
    careInstructions: 'Follow care instructions for each individual item. The human bandana and dog bandana have different care requirements.',
    rating: 4.9,
    reviewCount: 87,
    featured: false,
    category: 'bundle',
  },
  {
    id: 'full-send',
    name: 'The Full Send',
    slug: 'the-full-send',
    price: 88,
    description: 'Three bandanas of your choice. Best value.',
    longDescription: 'Go all in. The Full Send lets you pick any three bandanas from our collection — human, dog, or mix and match. It\'s our best value bundle, saving you up to $16 compared to buying individually. Stock up on colors, grab one for every occasion, or outfit the whole family (dogs included). Because commitment looks good on you.',
    tags: ['bundle'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Burnt Orange', hex: '#D4622B' },
      { name: 'Olive', hex: '#4A5D3A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['Mix & Match Any 3'],
    images: [
      'https://placehold.co/600x600/D4622B/ffffff?text=Full+Send+Bundle',
      'https://placehold.co/600x600/c4521b/ffffff?text=Full+Send+Contents',
      'https://placehold.co/600x600/e4723b/ffffff?text=Full+Send+Spread',
      'https://placehold.co/600x600/D4622B/e8dcc8?text=Full+Send+Flat',
    ],
    materials: 'Choose any 3 bandanas from our full collection. Mix human and dog styles. See individual product pages for full material specs.',
    careInstructions: 'Follow care instructions for each individual item included in your bundle.',
    rating: 4.9,
    reviewCount: 53,
    featured: false,
    category: 'bundle',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByTag(tag: string): Product[] {
  if (tag === 'all') return products;
  return products.filter(p => p.tags.includes(tag as Product['tags'][number]));
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return products.slice(0, limit);
  return products
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
