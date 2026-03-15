// shops.ts — Business data for Dynamik Performance and Radikal Motosport
// All data is real and verified. Never invent facts.

export type ShopId = 'dynamik' | 'radikal';

export interface Service {
  id: string;
  nameFr: string;
  nameEn: string;
  descFr: string;
  descEn: string;
  color: string; // hex background for icon square
  icon: string;  // emoji icon
  href?: string; // link to service page (Phase 1: #booking anchor)
}

export interface Stat {
  number: string;  // e.g. "27+", "5.0 ★", "100%"
  labelFr: string;
  labelEn: string;
}

export interface Review {
  name: string;
  stars: number;
  textFr: string;
  textEn: string;
}

export interface VespaModel {
  id: string;
  nameFr: string;
  nameEn: string;
  taglineFr: string;
  taglineEn: string;
  // Real imagery from vespa.com to be linked in production
  // Placeholder: elegant cream CSS treatment with model name
}

export interface Shop {
  id: ShopId;
  nameFr: string;
  nameEn: string;
  taglineFr: string;
  taglineEn: string;
  phone: string;
  address: string;
  addressShort: string; // for utility bar
  mapsUrl: string;
  accentColor: string;
  ctaLabelFr: string; // "Réserver" or "Soumission"
  ctaLabelEn: string; // "Book Now" or "Get a Quote"
  services: Service[];
  stats: Stat[];
  trust: string[];
  reviews: Review[];
  ownerName: string;
  ownerBioFr: string;
  ownerBioEn: string;
  ownerQuoteFr: string;
  ownerQuoteEn: string;
  showPoliceTrust: boolean;
  vespaModels?: VespaModel[]; // Dynamik only
}

export const shops: Record<ShopId, Shop> = {
  dynamik: {
    id: 'dynamik',
    nameFr: 'Dynamik Performance',
    nameEn: 'Dynamik Performance',
    taglineFr: 'Réparation moto experte depuis 1999',
    taglineEn: 'Expert motorcycle repair since 1999',
    phone: '819-772-9444',
    address: '144 Ch. Freeman, Gatineau, QC J8Z 2B4',
    addressShort: '144 Ch. Freeman, Gatineau',
    mapsUrl: 'https://maps.google.com/?q=144+Ch+Freeman+Gatineau+QC+J8Z+2B4',
    accentColor: '#2563eb',
    ctaLabelFr: 'Réserver',
    ctaLabelEn: 'Book Now',
    services: [
      {
        id: 'repair',
        nameFr: 'Réparation moto',
        nameEn: 'Motorcycle Repair',
        descFr: 'Diagnostic complet, électronique, mécanique — toutes marques',
        descEn: 'Full diagnostic, electronics, mechanics — all brands',
        color: '#2563eb12',
        icon: '🔧',
        href: '#booking',
      },
      {
        id: 'maintenance',
        nameFr: 'Entretien & révision',
        nameEn: 'Maintenance & Service',
        descFr: 'Vidange, freins, pneus, chaîne, révision complète',
        descEn: 'Oil change, brakes, tires, chain, full tune-up',
        color: '#0d948812',
        icon: '⚙️',
        href: '#booking',
      },
      {
        id: 'vespa-sales',
        nameFr: 'Vente Vespa & Piaggio',
        nameEn: 'Vespa & Piaggio Sales',
        descFr: 'Concessionnaire officiel en Outaouais depuis 1999',
        descEn: 'Official dealer in Outaouais since 1999',
        color: '#16a34a12',
        icon: '🛵',
        href: '/dynamik/vespa',
      },
      {
        id: 'modifications',
        nameFr: 'Modifications',
        nameEn: 'Modifications',
        descFr: 'Personnalisation et performance sur mesure',
        descEn: 'Custom builds and performance upgrades',
        color: '#9e8a5a12',
        icon: '🏎️',
        href: '#booking',
      },
      {
        id: 'towing',
        nameFr: 'Remorquage',
        nameEn: 'Towing',
        descFr: 'Remorquage rapide et sécuritaire en Outaouais',
        descEn: 'Fast and safe towing in the Outaouais',
        color: '#64748b12',
        icon: '🚛',
        href: '#booking',
      },
      {
        id: 'winter-storage',
        nameFr: 'Entreposage hivernal',
        nameEn: 'Winter Storage',
        descFr: 'Stockage climatisé et sécurisé tout l\'hiver',
        descEn: 'Climate-controlled, secure storage all winter',
        color: '#1e3a5f12',
        icon: '❄️',
        href: '#booking',
      },
    ],
    stats: [
      { number: '27+', labelFr: 'ans de service', labelEn: 'years of service' },
      { number: '5.0 ★', labelFr: 'Avis Google', labelEn: 'Google Reviews' },
      { number: 'Vespa', labelFr: 'Concessionnaire officiel', labelEn: 'Official Dealer' },
      { number: '100%', labelFr: 'Satisfaction client', labelEn: 'Client Satisfaction' },
    ],
    trust: ['Piaggio / Vespa', 'Depuis 1999', 'AMO Moto'],
    reviews: [
      {
        name: 'J-R D.',
        stars: 5,
        textFr: 'Steve est le meilleur mécanicien moto de la région. Rapide, honnête et professionnel. Je ne vais nulle part ailleurs.',
        textEn: 'Steve is the best motorcycle mechanic in the region. Fast, honest and professional. I go nowhere else.',
      },
      {
        name: 'Janet S.',
        stars: 5,
        textFr: 'Mon Vespa roule comme neuf. Service impeccable, prix raisonnables. Très satisfaite !',
        textEn: 'My Vespa runs like new. Impeccable service, reasonable prices. Very satisfied!',
      },
      {
        name: 'Karl L.',
        stars: 5,
        textFr: "J'ai confiance à 100% en Steve pour l'entretien de mes motos. Il connaît son métier depuis des décennies.",
        textEn: 'I trust Steve 100% for the maintenance of my motorcycles. He has known his trade for decades.',
      },
    ],
    ownerName: 'Steve Jean-Baptiste',
    ownerBioFr: "Steve répare des motos depuis qu'il est adolescent. Avec plus de 27 ans de service de confiance à Gatineau, il est reconnu pour son honnêteté, sa précision et son amour du métier. Concessionnaire officiel Vespa & Piaggio, il est la référence moto de l'Outaouais.",
    ownerBioEn: 'Steve has been repairing motorcycles since he was a teenager. With over 27 years of trusted service in Gatineau, he is known for his honesty, precision and love of the trade. Official Vespa & Piaggio dealer, he is the go-to motorcycle expert in Outaouais.',
    ownerQuoteFr: "Chaque moto qui entre dans mon atelier repart mieux qu'elle n'est arrivée. C'est ma promesse depuis 1999.",
    ownerQuoteEn: "Every motorcycle that enters my shop leaves better than it arrived. That's my promise since 1999.",
    showPoliceTrust: false,
    vespaModels: [
      {
        id: 'sprint',
        nameFr: 'Vespa Sprint',
        nameEn: 'Vespa Sprint',
        taglineFr: 'Élégance compacte pour la ville',
        taglineEn: 'Compact elegance for the city',
      },
      {
        id: 'primavera',
        nameFr: 'Vespa Primavera',
        nameEn: 'Vespa Primavera',
        taglineFr: 'Légèreté et style au quotidien',
        taglineEn: 'Lightness and everyday style',
      },
      {
        id: 'gts',
        nameFr: 'Vespa GTS',
        nameEn: 'Vespa GTS',
        taglineFr: 'Le prestige à grande vitesse',
        taglineEn: 'Prestige at full speed',
      },
    ],
  },

  radikal: {
    id: 'radikal',
    nameFr: 'Radikal Motosport',
    nameEn: 'Radikal Motosport',
    taglineFr: "L'autorité powersports de Gatineau",
    taglineEn: "Gatineau's Powersports Authority",
    phone: '819-561-6686',
    address: '156 De Varennes, Gatineau, QC J8T 8G4',
    addressShort: '156 De Varennes, Gatineau',
    mapsUrl: 'https://maps.google.com/?q=156+De+Varennes+Gatineau+QC+J8T+8G4',
    accentColor: '#9e8a5a',
    ctaLabelFr: 'Soumission',
    ctaLabelEn: 'Get a Quote',
    services: [
      {
        id: 'moto-repair',
        nameFr: 'Motos & Harley-Davidson',
        nameEn: 'Motorcycles & Harley-Davidson',
        descFr: 'Toutes marques, spécialiste Harley-Davidson',
        descEn: 'All brands, Harley-Davidson specialist',
        color: '#2563eb12',
        icon: '🏍️',
        href: '#booking',
      },
      {
        id: 'atv-utv',
        nameFr: 'VTT & UTV',
        nameEn: 'ATV & UTV',
        descFr: 'VTT, UTV, tous terrains, toutes marques',
        descEn: 'ATV, UTV, all terrains, all brands',
        color: '#16a34a12',
        icon: '🚵',
        href: '#booking',
      },
      {
        id: 'motocross',
        nameFr: 'Motocross',
        nameEn: 'Motocross',
        descFr: 'Pièces, service et préparation circuit',
        descEn: 'Parts, service and track prep',
        color: '#9e8a5a12',
        icon: '🏁',
        href: '#booking',
      },
      {
        id: 'snowmobile',
        nameFr: 'Motoneige',
        nameEn: 'Snowmobile',
        descFr: 'Révision, réparation et entreposage motoneige',
        descEn: 'Tune-up, repair and snowmobile storage',
        color: '#0d948812',
        icon: '🌨️',
        href: '#booking',
      },
      {
        id: 'fox-racing',
        nameFr: 'Fox Racing & boutique',
        nameEn: 'Fox Racing & Boutique',
        descFr: 'Équipement, vêtements et accessoires Fox Racing',
        descEn: 'Fox Racing gear, apparel and accessories',
        color: '#c2410c12',
        icon: '🦊',
        href: '/radikal/fox-racing',
      },
      {
        id: 'inspection',
        nameFr: 'Inspection gratuite',
        nameEn: 'Free Inspection',
        descFr: 'Inspection complète gratuite — 30 points de contrôle',
        descEn: 'Free full inspection — 30 check points',
        color: '#64748b12',
        icon: '✅',
        href: '#booking',
      },
    ],
    stats: [
      { number: '11+', labelFr: 'marques servies', labelEn: 'brands serviced' },
      { number: '6', labelFr: 'types de véhicules', labelEn: 'vehicle types' },
      { number: 'Fox', labelFr: 'Équipementier officiel', labelEn: 'Official Dealer' },
      { number: '★ Free', labelFr: 'Inspection offerte', labelEn: 'Inspection Included' },
    ],
    trust: ['🚔 Police Harley-Davidson', 'Fox Racing', '11+ marques'],
    reviews: [
      {
        name: 'Marc T.',
        stars: 5,
        textFr: 'La meilleure boutique moto de la région. Équipe compétente, stock impressionnant de pièces Fox Racing. Je recommande fortement.',
        textEn: 'The best motorcycle shop in the region. Knowledgeable team, impressive Fox Racing parts stock. Highly recommend.',
      },
      {
        name: 'Dan R.',
        stars: 5,
        textFr: 'Eric et son équipe ont réparé mon Harley en un temps record. Service professionnel et prix honnêtes.',
        textEn: 'Eric and his team repaired my Harley in record time. Professional service and honest prices.',
      },
      {
        name: 'Sophie L.',
        stars: 5,
        textFr: 'Superbe sélection de vêtements et d\'équipement. Personnel très aidant. Je reviens chaque saison.',
        textEn: 'Great selection of clothing and equipment. Very helpful staff. I come back every season.',
      },
    ],
    ownerName: 'Eric Jean-Baptiste',
    ownerBioFr: "Eric est l'expert en qui la police fait confiance pour ses Harley-Davidson. Fort de nombreuses années dans l'industrie du powersports, il a bâti Radikal Motosport comme un centre de référence pour riders sérieux — motos, VTT, motocross, motoneige et marine.",
    ownerBioEn: "Eric is the expert the police trust with their Harley-Davidsons. With many years in the powersports industry, he built Radikal Motosport as a reference center for serious riders — motorcycles, ATV, motocross, snowmobiles and marine.",
    ownerQuoteFr: "La confiance, ça se bâtit une réparation à la fois. C'est pour ça que la police nous fait confiance.",
    ownerQuoteEn: "Trust is built one repair at a time. That's why the police trust us.",
    showPoliceTrust: true,
  },
};
