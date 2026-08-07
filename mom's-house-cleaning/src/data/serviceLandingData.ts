export interface ScopeCategory {
  categoryTitle: string;
  categoryIconName: string;
  items: string[];
}

export interface ServiceReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceTag: string;
}

export interface ServiceLandingInfo {
  id: string;
  slug: string;
  serviceTitle: string;
  tagline: string;
  metaDescription: string;
  badgeText: string;
  heroHighlight: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  estimatedStartingPrice: string;
  scopeCategories: ScopeCategory[];
  seoHeading: string;
  seoParagraphs: string[];
  localKeywords: string[];
  reviews: ServiceReview[];
}

export const SERVICE_LANDING_DATA: Record<string, ServiceLandingInfo> = {
  'deep-kitchen': {
    id: 'deep-kitchen',
    slug: 'deep-kitchen-cleaning-san-antonio',
    serviceTitle: 'Deep Kitchen Cleaning in San Antonio',
    tagline: 'Eliminate grease, baked-on grime, and hidden food residue with San Antonio’s most trusted 100% W-2 cleaning team.',
    metaDescription: 'Professional Deep Kitchen Cleaning in San Antonio & Bexar County. Stove degreasing, oven interior, refrigerator sanitization, and polished granite countertops.',
    badgeText: 'Most Requested Kitchen Service in Stone Oak & San Antonio',
    heroHighlight: 'Heavy Degreasing & Sanitization',
    beforeImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Before: Heavy Grease & Built-Up Residue',
    afterLabel: 'After: Showroom-Quality Polish',
    estimatedStartingPrice: '$149',
    scopeCategories: [
      {
        categoryTitle: 'Stovetop, Range & Oven Deep Care',
        categoryIconName: 'Flame',
        items: [
          'Full degreasing of cooktop burner grates & gas caps',
          'Heavy-duty interior oven scrub & rack polish',
          'Stainless steel range hood exterior & filter degreasing',
          'Backsplash tile & grout steam sanitation'
        ]
      },
      {
        categoryTitle: 'Refrigerators & Appliance Exteriors',
        categoryIconName: 'Refrigerator',
        items: [
          'Interior fridge shelf washing & door seal sanitization',
          'Dishwasher exterior, trim & seal steam cleaning',
          'Microwave interior & glass turntable deep scrub',
          'Small appliance exterior polish (toaster, blender, coffee maker)'
        ]
      },
      {
        categoryTitle: 'Cabinets, Countertops & Sink',
        categoryIconName: 'Sparkles',
        items: [
          'Interior & exterior cabinet face wipe-down',
          'Granite, quartz, or marble surface food-safe sanitization',
          'Under-mount stainless steel or porcelain sink scrub & lime descaling',
          'Disposal deodorization & faucet chrome buffing'
        ]
      },
      {
        categoryTitle: 'Floors, Trim & High-Touch Detailing',
        categoryIconName: 'CheckCircle2',
        items: [
          'Hand-scrubbed baseboards & kitchen pantry shelving',
          'Grout scrub & high-temperature floor damp mop',
          'Switch plates, outlet covers & cabinet handles disinfected',
          'Trash receptacle wash, liner replacement & sanitization'
        ]
      }
    ],
    seoHeading: 'San Antonio’s #1 Rated Deep Kitchen Cleaning Service in Bexar County',
    seoParagraphs: [
      'At Mom’s House Cleaning, we understand that the kitchen is the heart of every San Antonio home. From historic homes in Alamo Heights to modern estates in Stone Oak and the Dominion, culinary spaces endure heavy oil splatter, hard water mineral scale, and daily wear.',
      'Our 100% W-2 employee team brings eco-friendly, food-safe cleaning agents specifically formulated to eliminate Texas hard water scale without etching fine natural stones like granite or quartz. Whether preparing your home in Bexar County for hosting, or needing a deep post-holiday reset, our speed-to-lead team responds within 60 seconds during business hours.',
      'We proudly service all neighborhoods across San Antonio including Stone Oak, Helotes, Castle Hills, Alamo Heights, Medical Center, Hollywood Park, and surrounding Bexar County communities with a 100% satisfaction guarantee.'
    ],
    localKeywords: [
      'San Antonio Kitchen Cleaning',
      'Stone Oak Deep Cleaning',
      'Bexar County Degreasing',
      'Alamo Heights Maid Service',
      'San Antonio Hard Water Stain Removal',
      'Dominion House Cleaning',
      'Helotes Eco-Friendly Cleaning'
    ],
    reviews: [
      {
        id: 'k1',
        name: 'Elena Rostova',
        location: 'Stone Oak, San Antonio, TX',
        rating: 5,
        date: '3 days ago',
        comment: 'My stove hood and oven interior look brand new! The Mom’s House Cleaning team removed years of baked-on grease in under 2 hours. Worth every penny!',
        serviceTag: 'Deep Kitchen Cleaning'
      },
      {
        id: 'k2',
        name: 'Marcus Vance',
        location: 'Alamo Heights, San Antonio, TX',
        rating: 5,
        date: '1 week ago',
        comment: 'Living in Bexar County, hard water around the kitchen sink was a nightmare until Glen & Lisa’s crew worked their magic. Unbelievable before and after results.',
        serviceTag: 'Deep Kitchen Cleaning'
      },
      {
        id: 'k3',
        name: 'Sophia Martinez',
        location: 'The Dominion, TX',
        rating: 5,
        date: '2 weeks ago',
        comment: '100% W-2 employees gave us total peace of mind. The granite countertop polish left zero streaks. I immediately signed up for bi-weekly kitchen visits!',
        serviceTag: 'Deep Kitchen Cleaning'
      }
    ]
  },
  'move-out': {
    id: 'move-out',
    slug: 'move-out-cleaning-stone-oak',
    serviceTitle: 'Move-Out & Make-Ready Clean in Stone Oak',
    tagline: 'Guarantee your full security deposit refund or prepare your property for sale with our comprehensive Bexar County make-ready standard.',
    metaDescription: '100% Guaranteed Move-Out and Make-Ready Cleaning in Stone Oak & San Antonio. Full interior cabinet, baseboard, appliance, and window frame detail.',
    badgeText: 'Landlord & Property Manager Approved Standard',
    heroHighlight: '100% Deposit Return Guarantee',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Before: Dusty & Vacated Space',
    afterLabel: 'After: Inspection-Ready Perfection',
    estimatedStartingPrice: '$219',
    scopeCategories: [
      {
        categoryTitle: 'Cabinets, Drawers & Closets',
        categoryIconName: 'FolderCheck',
        items: [
          'Vacuum & wet-wipe interior of all kitchen & bath cabinets',
          'Deep clean of all drawer slides, tracks & shelving',
          'Closet rod dusting & built-in shelf wash',
          'Pantry shelf sanitization & corner cobweb removal'
        ]
      },
      {
        categoryTitle: 'Full Appliance Interior & Exterior',
        categoryIconName: 'Sparkles',
        items: [
          'Oven interior, broiler pan & glass door degreasing',
          'Refrigerator interior defrost wipe-down & crisper drawer wash',
          'Microwave interior & exterior detail',
          'Washer/dryer drum wipe & lint trap housing vacuum'
        ]
      },
      {
        categoryTitle: 'Deep Fixture & Architectural Polish',
        categoryIconName: 'Home',
        items: [
          'Hand-scrubbed baseboards throughout entire property',
          'Light fixtures, ceiling fans & light switch disinfection',
          'Window sill, track & frame deep dust removal',
          'Interior doors, door frames & knob sanitation'
        ]
      },
      {
        categoryTitle: 'Floors, Grout & Sanitize Finish',
        categoryIconName: 'CheckCircle2',
        items: [
          'Edging vacuum along all carpet parameters & baseboards',
          'Tile grout steam scrub & hard floor neutralizer mop',
          'Garage entry & patio threshold sweep',
          'Final walkthrough quality checklist inspection'
        ]
      }
    ],
    seoHeading: 'Stone Oak & San Antonio Move-Out Make-Ready Specialists',
    seoParagraphs: [
      'Transitioning out of a home or apartment in Stone Oak, Sonterra, or greater San Antonio should be exciting—not exhausting. Property managers and landlords across Bexar County enforce strict move-out checklists before releasing security deposits.',
      'Mom’s House Cleaning has specialized in Stone Oak move-out cleans since 1999. Our staff is 100% W-2 employed, fully background-checked, insured, and trained on commercial landlord standards. We clean inside every drawer, behind appliances, and down every baseboard.',
      'If your landlord flags any cleaning item on your move-out inspection, our speed-to-lead team returns within 24 hours to re-clean the flagged area free of charge.'
    ],
    localKeywords: [
      'Stone Oak Move Out Cleaning',
      'San Antonio Make Ready Cleaning',
      'Bexar County Deposit Refund Clean',
      'Sonterra House Cleaning',
      'San Antonio Lease End Maid Service',
      'Shavano Park Move In Clean'
    ],
    reviews: [
      {
        id: 'm1',
        name: 'David Reynolds',
        location: 'Stone Oak, San Antonio, TX',
        rating: 5,
        date: '5 days ago',
        comment: 'Got 100% of my $2,200 security deposit back without a single complaint from the leasing office. Mom’s House Cleaning made moving stress-free!',
        serviceTag: 'Move-Out Cleaning'
      },
      {
        id: 'm2',
        name: 'Rachel Kincaid',
        location: 'Castle Hills, TX',
        rating: 5,
        date: '2 weeks ago',
        comment: 'We needed a same-day move-in clean for our home in Castle Hills. They responded within 60 seconds and sent a 3-person W-2 team that transformed the house.',
        serviceTag: 'Move-Out Cleaning'
      }
    ]
  },
  'whole-home': {
    id: 'whole-home',
    slug: 'recurring-maid-service-bexar-county',
    serviceTitle: 'Recurring Whole Home Maid Service in Bexar County',
    tagline: 'Maintain a pristine, healthy sanctuary with weekly, bi-weekly, or monthly visits backed by our 60-second speed-to-lead guarantee.',
    metaDescription: 'Top-Rated Recurring Maid Service in Bexar County, San Antonio, Stone Oak & Alamo Heights. Weekly, bi-weekly, monthly eco-friendly home care.',
    badgeText: 'Save Up To 20% On Recurring Schedules',
    heroHighlight: 'Same Dedicated Cleaning Crew',
    beforeImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Before: Daily Clutter & Dust Build-Up',
    afterLabel: 'After: Restorative Order & Freshness',
    estimatedStartingPrice: '$119/visit',
    scopeCategories: [
      {
        categoryTitle: 'Living Areas & Bedrooms',
        categoryIconName: 'Bed',
        items: [
          'Pillow fluffed & bed linen styling or replacement',
          'Dusting of all furniture, picture frames & media consoles',
          'Vacuuming under couch cushions & area rug grooming',
          'High & low cobweb removal along crown molding'
        ]
      },
      {
        categoryTitle: 'Bathrooms Disinfection',
        categoryIconName: 'ShowerHead',
        items: [
          'Showers, tubs & glass enclosures scrubbed streak-free',
          'Toilet bowl, tank, hinge & base disinfected',
          'Countertop vanity, sink & mirror polish',
          'Tile floor damp mop & bath mat shaking'
        ]
      },
      {
        categoryTitle: 'Kitchen & Dining Refresh',
        categoryIconName: 'Utensils',
        items: [
          'Countertop wipe-down & item reorganization',
          'Appliance exterior polish (fridge, stove, microwave)',
          'Sink scrub, rinse & faucet chrome buff',
          'Dining table & chair leg dust wipe'
        ]
      },
      {
        categoryTitle: 'Sanitation & Finishing Touches',
        categoryIconName: 'ShieldCheck',
        items: [
          'Emptying all trash cans & relining bags',
          'Disinfecting high-touch door handles & light switches',
          'Hardwood, laminate or tile floor vacuum & mop',
          'Signature room aroma refresh & quality checklist review'
        ]
      }
    ],
    seoHeading: 'Bexar County’s Preferred Recurring Home Care Team',
    seoParagraphs: [
      'Finding a consistent house cleaning service in Bexar County can feel challenging. Many companies rotate untrained contractors through your private home. At Mom’s House Cleaning, we do things differently.',
      'We assign a dedicated team of 100% W-2 employees to your home, so you see familiar, friendly faces every visit. Our eco-friendly cleaning supplies are tough on dirt yet safe for pets and children across San Antonio, Stone Oak, and Alamo Heights.',
      'Flexible scheduling with zero lock-in contracts: pause, reschedule, or adjust your recurring service frequency anytime via text or phone with our 24/7 client portal.'
    ],
    localKeywords: [
      'Bexar County Maid Service',
      'San Antonio Recurring Cleaning',
      'Stone Oak Housekeeping',
      'Alamo Heights Weekly Maid',
      'San Antonio Eco-Friendly Home Cleaning',
      'Helotes Bi-Weekly Cleaning'
    ],
    reviews: [
      {
        id: 'w1',
        name: 'Christina Thorne',
        location: 'San Antonio, TX',
        rating: 5,
        date: 'Yesterday',
        comment: 'Having the same crew come every two weeks gives me so much peace of mind. They know exactly how I like my master suite set up!',
        serviceTag: 'Recurring Maid Service'
      },
      {
        id: 'w2',
        name: 'Captain James Miller (Ret.)',
        location: 'Medical Center, San Antonio, TX',
        rating: 5,
        date: '4 days ago',
        comment: 'Military discount was applied instantly. The W-2 staff is punctual, respectful, and thorough. Highly recommended for San Antonio veterans!',
        serviceTag: 'Recurring Maid Service'
      }
    ]
  },
  'bathroom-sanitization': {
    id: 'bathroom-sanitization',
    slug: 'bathroom-disinfection-san-antonio',
    serviceTitle: 'Bathroom Disinfection & Polish in San Antonio',
    tagline: 'Deep steam descaling of hard water, soap scum removal, and germ-killing sanitization for sparkling spa-like bathrooms.',
    metaDescription: 'Professional Bathroom Disinfection and Steam Descaling in San Antonio & Bexar County. Soap scum, mold prevention, tile grout restoration.',
    badgeText: 'San Antonio Hard Water Scale Specialists',
    heroHighlight: 'Deep Steam & Hospital-Grade Disinfection',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Before: Heavy Soap Scum & Mineral Scale',
    afterLabel: 'After: Crystal Clear & Fully Sanitized',
    estimatedStartingPrice: '$99',
    scopeCategories: [
      {
        categoryTitle: 'Shower, Tub & Glass Enclosure',
        categoryIconName: 'ShowerHead',
        items: [
          'Hard water mineral deposit descaling on shower doors',
          'Soap scum buildup elimination from tile & fiberglass',
          'Grout scrub & mold/mildew preventative treatment',
          'Chrome fixture & shower head descaling'
        ]
      },
      {
        categoryTitle: 'Toilet & Hygiene Sanitation',
        categoryIconName: 'ShieldCheck',
        items: [
          'Interior bowl lime scale removal with eco-safe agents',
          'Exterior tank, porcelain base, hinges & behind-toilet floor disinfection',
          'Steam sanitization of toilet paper holder & flush handle',
          'Germicidal fogging for maximum hygiene'
        ]
      },
      {
        categoryTitle: 'Vanity, Sink & Mirrors',
        categoryIconName: 'Sparkles',
        items: [
          'Porcelain or stone basin scrub & drain ring removal',
          'Mirror streak-free glass polish',
          'Countertop organizer wipe-down & surface sanitation',
          'Cabinet face spot cleaning & handle disinfection'
        ]
      },
      {
        categoryTitle: 'Floors, Ventilation & Trim',
        categoryIconName: 'CheckCircle2',
        items: [
          'Vent fan cover vacuum & dust removal',
          'Baseboard scrub & moisture-resistant wipe',
          'Tile floor high-temperature mop & corners detail',
          'Trash removal & bin liner replacement'
        ]
      }
    ],
    seoHeading: 'San Antonio Bathroom Steam & Hard Water Descaling Experts',
    seoParagraphs: [
      'San Antonio water is notoriously hard, registering high mineral content that leaves stubborn white calcium crusts and orange rust stains on bathroom fixtures.',
      'Our specialized bathroom disinfection team uses eco-friendly, non-abrasive mineral solubilizers that dissolve hard water scale without scratching delicate glass or chrome. Servicing all of Bexar County including Stone Oak, Medical Center, and Alamo Heights.',
      'Restore your master bath or guest suites to showroom brilliance with our speed-to-lead booking guarantee.'
    ],
    localKeywords: [
      'San Antonio Bathroom Cleaning',
      'Hard Water Descaling San Antonio',
      'Bexar County Tile Grout Cleaning',
      'Stone Oak Bathroom Sanitization',
      'San Antonio Shower Door Scale Removal'
    ],
    reviews: [
      {
        id: 'b1',
        name: 'Dr. Anita Patel',
        location: 'Medical Center, San Antonio, TX',
        rating: 5,
        date: '1 week ago',
        comment: 'I thought my glass shower doors were permanently ruined by hard water. Mom’s House Cleaning made them literally invisible again! Simply incredible.',
        serviceTag: 'Bathroom Disinfection'
      }
    ]
  }
};
