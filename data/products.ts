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
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cda3a00?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558171813-01e44ee0a689?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499336315816-097655525f44?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524511751214-b0a384dd9f58?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1477884213360-7e9d7dcc8f9b?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1558929996-da64ba858215?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494947665470-20322015e3a8?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=600&fit=crop&q=80',
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
