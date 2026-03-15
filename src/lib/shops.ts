// shops.ts — Business data for Dynamik Performance and Radikal Motosport
// All data is real and verified. Never invent facts.

export type ShopId = 'dynamik' | 'radikal';

export interface Service {
  nameFr: string;
  nameEn: string;
  color: string; // hex background for icon square
  icon: string;  // emoji icon
}

export interface Review {
  name: string;
  stars: number;
  textFr: string;
  textEn: string;
}

export interface Shop {
  id: ShopId;
  nameFr: string;
  nameEn: string;
  taglineFr: string;
  taglineEn: string;
  phone: string;
  address: string;
  mapsUrl: string;
  accentColor: string;
  services: Service[];
  trust: string[];
  reviews: Review[];
  ownerName: string;
  ownerBioFr: string;
  ownerBioEn: string;
  showPoliceTrust: boolean;
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
    mapsUrl: 'https://maps.google.com/?q=144+Ch+Freeman+Gatineau+QC+J8Z+2B4',
    accentColor: '#2563eb',
    services: [
      { nameFr: 'Réparation moto', nameEn: 'Motorcycle Repair', color: '#2563eb15', icon: '🔧' },
      { nameFr: 'Vente Vespa', nameEn: 'Vespa Sales', color: '#16a34a15', icon: '🛵' },
      { nameFr: 'Entretien & révision', nameEn: 'Maintenance & Service', color: '#0d948815', icon: '⚙️' },
      { nameFr: 'Modifications', nameEn: 'Modifications', color: '#D4AF3715', icon: '🏎️' },
      { nameFr: 'Remorquage', nameEn: 'Towing', color: '#64748b15', icon: '🚛' },
      { nameFr: 'Entreposage hivernal', nameEn: 'Winter Storage', color: '#1e3a5f20', icon: '❄️' },
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
        textFr: 'J\'ai confiance à 100% en Steve pour l\'entretien de mes motos. Il connaît son métier depuis des décennies.',
        textEn: 'I trust Steve 100% for the maintenance of my motorcycles. He has known his trade for decades.',
      },
    ],
    ownerName: 'Steve Jean-Baptiste',
    ownerBioFr: 'Steve répare des motos depuis qu\'il est adolescent. Avec plus de 25 ans de service de confiance à Gatineau, il est reconnu pour son honnêteté, sa précision et son amour du métier.',
    ownerBioEn: 'Steve has been repairing motorcycles since he was a teenager. With over 25 years of trusted service in Gatineau, he is known for his honesty, precision and love of the trade.',
    showPoliceTrust: false,
  },

  radikal: {
    id: 'radikal',
    nameFr: 'Radikal Motosport',
    nameEn: 'Radikal Motosport',
    taglineFr: 'L\'autorité powersports de Gatineau',
    taglineEn: 'Gatineau\'s Powersports Authority',
    phone: '819-561-6686',
    address: '156 De Varennes, Gatineau, QC J8T 8G4',
    mapsUrl: 'https://maps.google.com/?q=156+De+Varennes+Gatineau+QC+J8T+8G4',
    accentColor: '#9e8a5a',
    services: [
      { nameFr: 'Motos & Harley-Davidson', nameEn: 'Motorcycles & Harley-Davidson', color: '#2563eb15', icon: '🏍️' },
      { nameFr: 'VTT & UTV', nameEn: 'ATV & UTV', color: '#16a34a15', icon: '🚵' },
      { nameFr: 'Motocross', nameEn: 'Motocross', color: '#9e8a5a18', icon: '🏁' },
      { nameFr: 'Motoneige', nameEn: 'Snowmobile', color: '#0d948815', icon: '🌨️' },
      { nameFr: 'Fox Racing & boutique', nameEn: 'Fox Racing & Boutique', color: '#c2410c12', icon: '🦊' },
      { nameFr: 'Inspection gratuite', nameEn: 'Free Inspection', color: '#64748b15', icon: '✅' },
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
    ownerBioFr: 'Eric est l\'expert en qui la police fait confiance pour ses Harley-Davidson. Fort de nombreuses années dans l\'industrie du powersports, il a bâti Radikal Motosport comme un centre de référence pour riders sérieux.',
    ownerBioEn: 'Eric is the expert the police trust with their Harley-Davidsons. With many years in the powersports industry, he built Radikal Motosport as a reference center for serious riders.',
    showPoliceTrust: true,
  },
};
