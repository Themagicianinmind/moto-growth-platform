// service-pages.ts — Types and data for all 13 service pages
// Content sourced from service-pages/*.md files

import { ShopId } from './shops';

export interface ServicePageFeature {
  fr: string;
  en: string;
  detailFr: string;
  detailEn: string;
}

export interface ServicePageFAQ {
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
}

export interface ServicePageData {
  shopId: ShopId;
  slug: string; // e.g. 'repair', 'atv-utv'
  meta: {
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
  };
  hero: {
    eyebrowFr: string;
    eyebrowEn: string;
    headingFr: string;
    headingEn: string;
    subFr: string;
    subEn: string;
  };
  features: ServicePageFeature[];
  faq: ServicePageFAQ[];
  cta: {
    labelFr: string;
    labelEn: string;
    phone: string;
  };
}

// ─── DYNAMIK SERVICE PAGES ──────────────────────────────────────────────────

export const dynamikRepair: ServicePageData = {
  shopId: 'dynamik',
  slug: 'repair',
  meta: {
    titleFr: 'Réparation moto Gatineau | Dynamik Performance — Depuis 1999',
    titleEn: 'Motorcycle Repair Gatineau | Dynamik Performance — Since 1999',
    descriptionFr: 'Réparation experte de motos et scooters à Gatineau. Diagnostic complet, mécanique, électronique — toutes marques. Concessionnaire Vespa & Piaggio. Depuis 1999.',
    descriptionEn: 'Expert motorcycle and scooter repair in Gatineau. Full diagnostics, mechanical, electronic — all brands. Vespa & Piaggio dealer. Since 1999.',
  },
  hero: {
    eyebrowFr: 'Réparation moto',
    eyebrowEn: 'Motorcycle repair',
    headingFr: 'Votre moto mérite un expert.',
    headingEn: 'Your motorcycle deserves an expert.',
    subFr: 'Diagnostic complet, réparation mécanique et électronique pour toutes les marques. Plus de 27 ans d\'expertise à Gatineau.',
    subEn: 'Complete diagnostics, mechanical and electronic repair for all brands. Over 27 years of expertise in Gatineau.',
  },
  features: [
    { fr: 'Diagnostic complet', en: 'Complete diagnostics', detailFr: 'Inspection visuelle, lecture des codes d\'erreur, test des systèmes électriques et mécaniques.', detailEn: 'Visual inspection, error code reading, electrical and mechanical systems testing.' },
    { fr: 'Réparation mécanique', en: 'Mechanical repair', detailFr: 'Moteur, transmission, freins, suspension, embrayage — travail méticuleux garanti.', detailEn: 'Engine, transmission, brakes, suspension, clutch — meticulous work guaranteed.' },
    { fr: 'Réparation électronique', en: 'Electronic repair', detailFr: 'Système d\'injection, ABS, tableau de bord, éclairage et câblage.', detailEn: 'Injection system, ABS, dashboard, lighting and wiring.' },
    { fr: 'Pièces d\'origine', en: 'OEM parts', detailFr: 'Pièces OEM Vespa, Piaggio et aftermarket de qualité pour toutes marques.', detailEn: 'OEM Vespa, Piaggio parts and quality aftermarket parts for all brands.' },
    { fr: 'Garantie sur le travail', en: 'Work guarantee', detailFr: 'Chaque réparation est garantie. Nous répondons de notre travail.', detailEn: 'Every repair is guaranteed. We stand behind our work.' },
  ],
  faq: [
    { questionFr: 'Combien de temps prend une réparation typique?', questionEn: 'How long does a typical repair take?', answerFr: 'La plupart des réparations sont complétées en 2 à 5 jours ouvrables, selon la disponibilité des pièces. Les urgences peuvent être traitées plus rapidement — appelez-nous.', answerEn: 'Most repairs are completed within 2 to 5 business days, depending on parts availability. Emergencies can be handled faster — call us.' },
    { questionFr: 'Réparez-vous toutes les marques de moto?', questionEn: 'Do you repair all motorcycle brands?', answerFr: 'Oui. Nous sommes spécialistes Vespa et Piaggio, mais nous réparons toutes les marques — Honda, Yamaha, Kawasaki, Suzuki, Harley-Davidson et plus.', answerEn: 'Yes. We specialize in Vespa and Piaggio, but we repair all brands — Honda, Yamaha, Kawasaki, Suzuki, Harley-Davidson and more.' },
    { questionFr: 'Dois-je prendre rendez-vous?', questionEn: 'Do I need an appointment?', answerFr: 'Un rendez-vous est recommandé pour garantir la disponibilité. Appelez le 819-772-9444 ou utilisez notre formulaire en ligne.', answerEn: 'An appointment is recommended to ensure availability. Call 819-772-9444 or use our online form.' },
    { questionFr: 'Offrez-vous un service de remorquage?', questionEn: 'Do you offer towing?', answerFr: 'Oui, nous offrons un service de remorquage moto dans la région de Gatineau-Ottawa. Voir notre page remorquage.', answerEn: 'Yes, we offer motorcycle towing in the Gatineau-Ottawa region. See our towing page.' },
  ],
  cta: { labelFr: 'Réserver une réparation', labelEn: 'Book a repair', phone: '819-772-9444' },
};

export const dynamikMaintenance: ServicePageData = {
  shopId: 'dynamik',
  slug: 'maintenance',
  meta: {
    titleFr: 'Entretien moto Gatineau | Dynamik Performance — Révision complète',
    titleEn: 'Motorcycle Maintenance Gatineau | Dynamik Performance — Full Tune-Up',
    descriptionFr: 'Entretien préventif, mise au point saisonnière et révision complète pour motos et scooters à Gatineau. Protégez votre investissement.',
    descriptionEn: 'Preventive maintenance, seasonal tune-ups and complete overhaul for motorcycles and scooters in Gatineau. Protect your investment.',
  },
  hero: {
    eyebrowFr: 'Entretien & révision',
    eyebrowEn: 'Maintenance & tune-up',
    headingFr: 'Prévenez les problèmes avant qu\'ils n\'arrivent.',
    headingEn: 'Prevent problems before they happen.',
    subFr: 'Un entretien régulier prolonge la vie de votre moto et vous garde en sécurité sur la route.',
    subEn: 'Regular maintenance extends your motorcycle\'s life and keeps you safe on the road.',
  },
  features: [
    { fr: 'Vidange d\'huile et filtres', en: 'Oil change and filters', detailFr: 'Huile moteur, filtre à huile, filtre à air — selon les spécifications du fabricant.', detailEn: 'Engine oil, oil filter, air filter — per manufacturer specifications.' },
    { fr: 'Inspection des freins', en: 'Brake inspection', detailFr: 'Plaquettes, disques, liquide de frein, durites — vérification complète.', detailEn: 'Pads, rotors, brake fluid, lines — complete check.' },
    { fr: 'Chaîne et pneus', en: 'Chain and tires', detailFr: 'Tension de chaîne, lubrification, état des pneus, pression.', detailEn: 'Chain tension, lubrication, tire condition, pressure.' },
    { fr: 'Système électrique', en: 'Electrical system', detailFr: 'Batterie, éclairage, clignotants, système de charge.', detailEn: 'Battery, lighting, turn signals, charging system.' },
    { fr: 'Mise au point saisonnière', en: 'Seasonal tune-up', detailFr: 'Préparation printemps ou automne — remise en route ou entreposage.', detailEn: 'Spring or fall preparation — restart or storage.' },
  ],
  faq: [
    { questionFr: 'À quelle fréquence dois-je faire un entretien?', questionEn: 'How often should I get maintenance?', answerFr: 'En général, tous les 5 000 à 10 000 km ou une fois par an. Consultez le manuel de votre véhicule ou demandez-nous.', answerEn: 'Generally every 5,000 to 10,000 km or once a year. Check your vehicle manual or ask us.' },
    { questionFr: 'Combien coûte un entretien de base?', questionEn: 'How much does a basic maintenance cost?', answerFr: 'Le prix varie selon le véhicule et les services requis. Appelez-nous pour une estimation gratuite.', answerEn: 'Price varies by vehicle and required services. Call us for a free estimate.' },
    { questionFr: 'Faites-vous la mise au point printanière?', questionEn: 'Do you do spring tune-ups?', answerFr: 'Oui! C\'est notre service le plus populaire au printemps. Réservez tôt — les places partent vite.', answerEn: 'Yes! It\'s our most popular spring service. Book early — spots fill up fast.' },
  ],
  cta: { labelFr: 'Réserver un entretien', labelEn: 'Book maintenance', phone: '819-772-9444' },
};

export const dynamikVespaSales: ServicePageData = {
  shopId: 'dynamik',
  slug: 'vespa-sales',
  meta: {
    titleFr: 'Concessionnaire Vespa & Piaggio Gatineau | Dynamik Performance',
    titleEn: 'Vespa & Piaggio Dealer Gatineau | Dynamik Performance',
    descriptionFr: 'Seul concessionnaire officiel Vespa & Piaggio en Outaouais. Modèles neufs, pièces OEM, financement disponible. Depuis 1999 à Gatineau.',
    descriptionEn: 'Only authorized Vespa & Piaggio dealer in Outaouais. New models, OEM parts, financing available. Since 1999 in Gatineau.',
  },
  hero: {
    eyebrowFr: 'Concessionnaire officiel',
    eyebrowEn: 'Authorized dealer',
    headingFr: 'L\'élégance italienne, à Gatineau.',
    headingEn: 'Italian elegance, in Gatineau.',
    subFr: 'Seul concessionnaire Vespa & Piaggio autorisé en Outaouais. Modèles neufs, pièces d\'origine et service complet.',
    subEn: 'Only authorized Vespa & Piaggio dealer in Outaouais. New models, OEM parts and full service.',
  },
  features: [
    { fr: 'Gamme complète Vespa', en: 'Full Vespa range', detailFr: 'Sprint, Primavera, GTS — tous les modèles disponibles. Essai sur rendez-vous.', detailEn: 'Sprint, Primavera, GTS — all models available. Test ride by appointment.' },
    { fr: 'Gamme Piaggio', en: 'Piaggio range', detailFr: 'Liberty, Beverly, MP3 — mobilité urbaine italienne.', detailEn: 'Liberty, Beverly, MP3 — Italian urban mobility.' },
    { fr: 'Pièces OEM garanties', en: 'Guaranteed OEM parts', detailFr: 'Pièces d\'origine Vespa et Piaggio. Garantie constructeur.', detailEn: 'Original Vespa and Piaggio parts. Manufacturer warranty.' },
    { fr: 'Financement disponible', en: 'Financing available', detailFr: 'Options flexibles via TD Financement Auto, Desjardins et LendCare.', detailEn: 'Flexible options through TD Auto Finance, Desjardins and LendCare.' },
    { fr: 'Service après-vente à vie', en: 'Lifetime after-sales service', detailFr: 'Entretien, réparation et pièces — nous sommes là pour la vie de votre véhicule.', detailEn: 'Maintenance, repair and parts — we\'re here for the life of your vehicle.' },
  ],
  faq: [
    { questionFr: 'Puis-je essayer une Vespa avant d\'acheter?', questionEn: 'Can I test ride a Vespa before buying?', answerFr: 'Oui. Contactez-nous pour planifier un essai routier. Permis de conduire valide requis.', answerEn: 'Yes. Contact us to schedule a test ride. Valid driver\'s license required.' },
    { questionFr: 'Quels modèles Vespa avez-vous en stock?', questionEn: 'Which Vespa models do you have in stock?', answerFr: 'Notre inventaire change régulièrement. Appelez le 819-772-9444 pour vérifier la disponibilité des modèles et couleurs.', answerEn: 'Our inventory changes regularly. Call 819-772-9444 to check model and color availability.' },
    { questionFr: 'Offrez-vous du financement?', questionEn: 'Do you offer financing?', answerFr: 'Oui. Nous offrons des options de financement via TD Financement Auto, Desjardins et LendCare. Taux promotionnels disponibles sur certains modèles.', answerEn: 'Yes. We offer financing through TD Auto Finance, Desjardins and LendCare. Promotional rates available on select models.' },
    { questionFr: 'Faut-il un permis spécial pour conduire une Vespa?', questionEn: 'Do I need a special license to ride a Vespa?', answerFr: 'Au Québec, les modèles 50cc peuvent être conduits avec un permis classe 5 (auto). Les modèles 125cc+ nécessitent un permis classe 6A. Consultez la SAAQ pour les détails.', answerEn: 'In Quebec, 50cc models can be driven with a Class 5 (car) license. 125cc+ models require a Class 6A license. Check SAAQ for details.' },
  ],
  cta: { labelFr: 'Demander de l\'information', labelEn: 'Request information', phone: '819-772-9444' },
};

export const dynamikModifications: ServicePageData = {
  shopId: 'dynamik',
  slug: 'modifications',
  meta: {
    titleFr: 'Modifications moto Gatineau | Dynamik Performance — Personnalisation',
    titleEn: 'Motorcycle Modifications Gatineau | Dynamik Performance — Customization',
    descriptionFr: 'Modifications et personnalisation de motos et scooters à Gatineau. Performance, esthétique et accessoires sur mesure. Depuis 1999.',
    descriptionEn: 'Motorcycle and scooter modifications and customization in Gatineau. Performance, aesthetics and custom accessories. Since 1999.',
  },
  hero: {
    eyebrowFr: 'Modifications',
    eyebrowEn: 'Modifications',
    headingFr: 'Votre moto, votre style.',
    headingEn: 'Your motorcycle, your style.',
    subFr: 'Améliorations de performance, personnalisation esthétique et installation d\'accessoires sur mesure.',
    subEn: 'Performance upgrades, aesthetic customization and custom accessory installation.',
  },
  features: [
    { fr: 'Améliorations de performance', en: 'Performance upgrades', detailFr: 'Échappement, admission d\'air, remapping ECU, suspensions sport.', detailEn: 'Exhaust, air intake, ECU remapping, sport suspension.' },
    { fr: 'Personnalisation esthétique', en: 'Aesthetic customization', detailFr: 'Carénages, selles, rétroviseurs, éclairage LED, peinture.', detailEn: 'Fairings, seats, mirrors, LED lighting, paint.' },
    { fr: 'Installation d\'accessoires', en: 'Accessory installation', detailFr: 'Coffres, pare-brise, poignées chauffantes, supports téléphone, GPS.', detailEn: 'Top cases, windshields, heated grips, phone mounts, GPS.' },
    { fr: 'Consultation personnalisée', en: 'Personal consultation', detailFr: 'Steve vous guide dans le choix des modifications adaptées à votre véhicule et votre style de conduite.', detailEn: 'Steve guides you in choosing modifications suited to your vehicle and riding style.' },
  ],
  faq: [
    { questionFr: 'Est-ce que les modifications annulent ma garantie?', questionEn: 'Do modifications void my warranty?', answerFr: 'Cela dépend de la modification et du fabricant. Nous vous conseillons sur les options qui préservent votre garantie.', answerEn: 'It depends on the modification and manufacturer. We advise you on options that preserve your warranty.' },
    { questionFr: 'Combien coûte une modification typique?', questionEn: 'How much does a typical modification cost?', answerFr: 'Les prix varient selon le travail. Appelez-nous pour une consultation gratuite et une estimation.', answerEn: 'Prices vary by the work involved. Call us for a free consultation and estimate.' },
    { questionFr: 'Pouvez-vous installer des pièces que j\'ai achetées ailleurs?', questionEn: 'Can you install parts I bought elsewhere?', answerFr: 'Oui, dans la plupart des cas. Nous vérifierons la compatibilité avant l\'installation.', answerEn: 'Yes, in most cases. We\'ll verify compatibility before installation.' },
  ],
  cta: { labelFr: 'Demander une consultation', labelEn: 'Request a consultation', phone: '819-772-9444' },
};

export const dynamikTowing: ServicePageData = {
  shopId: 'dynamik',
  slug: 'towing',
  meta: {
    titleFr: 'Remorquage moto Gatineau | Dynamik Performance',
    titleEn: 'Motorcycle Towing Gatineau | Dynamik Performance',
    descriptionFr: 'Service de remorquage moto et scooter à Gatineau et Ottawa. Rapide, sécuritaire, professionnel. Appelez le 819-772-9444.',
    descriptionEn: 'Motorcycle and scooter towing service in Gatineau and Ottawa. Fast, safe, professional. Call 819-772-9444.',
  },
  hero: {
    eyebrowFr: 'Remorquage',
    eyebrowEn: 'Towing',
    headingFr: 'En panne? On vient vous chercher.',
    headingEn: 'Broken down? We come to you.',
    subFr: 'Service de remorquage rapide et sécuritaire pour motos et scooters dans la région de Gatineau-Ottawa.',
    subEn: 'Fast and safe towing service for motorcycles and scooters in the Gatineau-Ottawa region.',
  },
  features: [
    { fr: 'Remorquage sécurisé', en: 'Secure towing', detailFr: 'Équipement spécialisé pour le transport de motos et scooters sans dommage.', detailEn: 'Specialized equipment for damage-free motorcycle and scooter transport.' },
    { fr: 'Région Gatineau-Ottawa', en: 'Gatineau-Ottawa region', detailFr: 'Service dans toute la région de l\'Outaouais et Ottawa.', detailEn: 'Service throughout the Outaouais and Ottawa region.' },
    { fr: 'Service rapide', en: 'Fast service', detailFr: 'Temps de réponse rapide. Appelez et nous sommes en route.', detailEn: 'Quick response time. Call and we\'re on our way.' },
    { fr: 'Directement à l\'atelier', en: 'Straight to the shop', detailFr: 'Votre moto est remorquée directement chez Dynamik pour diagnostic et réparation.', detailEn: 'Your motorcycle is towed directly to Dynamik for diagnostics and repair.' },
  ],
  faq: [
    { questionFr: 'Quel est votre rayon de service pour le remorquage?', questionEn: 'What is your towing service area?', answerFr: 'Nous couvrons Gatineau, Hull, Aylmer, Buckingham et la région d\'Ottawa. Appelez pour vérifier si votre emplacement est couvert.', answerEn: 'We cover Gatineau, Hull, Aylmer, Buckingham and the Ottawa area. Call to check if your location is covered.' },
    { questionFr: 'Combien coûte un remorquage?', questionEn: 'How much does towing cost?', answerFr: 'Le prix dépend de la distance. Appelez le 819-772-9444 pour un prix immédiat.', answerEn: 'Price depends on distance. Call 819-772-9444 for an immediate quote.' },
    { questionFr: 'Remorquez-vous les scooters et Vespa aussi?', questionEn: 'Do you tow scooters and Vespas too?', answerFr: 'Absolument. Notre équipement est adapté aux scooters, Vespa, motos et autres deux-roues.', answerEn: 'Absolutely. Our equipment is designed for scooters, Vespas, motorcycles and other two-wheelers.' },
  ],
  cta: { labelFr: 'Appeler maintenant', labelEn: 'Call now', phone: '819-772-9444' },
};

export const dynamikWinterStorage: ServicePageData = {
  shopId: 'dynamik',
  slug: 'winter-storage',
  meta: {
    titleFr: 'Entreposage hivernal moto Gatineau | Dynamik Performance',
    titleEn: 'Motorcycle Winter Storage Gatineau | Dynamik Performance',
    descriptionFr: 'Entreposage hivernal sécurisé pour motos et scooters à Gatineau. Préparation hivernale et remise en route printanière incluses.',
    descriptionEn: 'Secure winter storage for motorcycles and scooters in Gatineau. Winter preparation and spring startup included.',
  },
  hero: {
    eyebrowFr: 'Entreposage hivernal',
    eyebrowEn: 'Winter storage',
    headingFr: 'Protégez votre investissement cet hiver.',
    headingEn: 'Protect your investment this winter.',
    subFr: 'Entreposage sécurisé avec préparation hivernale complète et remise en route printanière.',
    subEn: 'Secure storage with complete winter preparation and spring startup.',
  },
  features: [
    { fr: 'Préparation hivernale', en: 'Winter preparation', detailFr: 'Stabilisant d\'essence, batterie débranchée, pneus vérifiés, fluides traités.', detailEn: 'Fuel stabilizer, battery disconnected, tires checked, fluids treated.' },
    { fr: 'Entreposage sécurisé', en: 'Secure storage', detailFr: 'Espace intérieur protégé, à l\'abri de l\'humidité et du gel.', detailEn: 'Protected indoor space, sheltered from moisture and freezing.' },
    { fr: 'Remise en route printanière', en: 'Spring startup', detailFr: 'Batterie rechargée, fluides vérifiés, pneus gonflés, prêt à rouler.', detailEn: 'Battery recharged, fluids checked, tires inflated, ready to ride.' },
    { fr: 'Inspection de printemps', en: 'Spring inspection', detailFr: 'Inspection de sécurité complète avant votre première sortie de la saison.', detailEn: 'Complete safety inspection before your first ride of the season.' },
    { fr: 'Places limitées', en: 'Limited spots', detailFr: 'Réservez tôt — nos places d\'entreposage se remplissent chaque automne.', detailEn: 'Book early — our storage spots fill up every fall.' },
  ],
  faq: [
    { questionFr: 'Quand dois-je réserver mon entreposage?', questionEn: 'When should I book storage?', answerFr: 'Idéalement en septembre ou octobre. Les places sont limitées et se remplissent vite.', answerEn: 'Ideally in September or October. Spots are limited and fill up fast.' },
    { questionFr: 'Quand puis-je récupérer ma moto au printemps?', questionEn: 'When can I pick up my motorcycle in spring?', answerFr: 'Habituellement à partir de mi-avril, selon la météo. Nous vous contactons quand votre moto est prête.', answerEn: 'Usually from mid-April, depending on weather. We contact you when your motorcycle is ready.' },
    { questionFr: 'Est-ce que l\'entreposage inclut l\'entretien?', questionEn: 'Does storage include maintenance?', answerFr: 'La préparation hivernale et la remise en route printanière de base sont incluses. Les réparations additionnelles sont facturées séparément.', answerEn: 'Basic winter preparation and spring startup are included. Additional repairs are billed separately.' },
  ],
  cta: { labelFr: 'Réserver ma place', labelEn: 'Reserve my spot', phone: '819-772-9444' },
};

// ─── RADIKAL SERVICE PAGES ──────────────────────────────────────────────────

export const radikalMotorcycleRepair: ServicePageData = {
  shopId: 'radikal',
  slug: 'motorcycle-repair',
  meta: {
    titleFr: 'Réparation moto Gatineau | Radikal Motosport — Harley · Yamaha · Honda · Toutes marques',
    titleEn: 'Motorcycle Repair Gatineau | Radikal Motosport — Harley · Yamaha · Honda · All Brands',
    descriptionFr: 'Réparation experte de motos toutes marques à Gatineau. Harley-Davidson, Yamaha, Kawasaki, Honda, BMW, Ducati, KTM. Mandaté pour les Harley de la police.',
    descriptionEn: 'Expert motorcycle repair for all brands in Gatineau. Harley-Davidson, Yamaha, Kawasaki, Honda, BMW, Ducati, KTM. Contracted for police Harleys.',
  },
  hero: {
    eyebrowFr: 'Réparation moto — toutes marques',
    eyebrowEn: 'Motorcycle repair — all brands',
    headingFr: 'Assez fiable pour la police. Assez passionné pour vous.',
    headingEn: 'Trusted enough for the police. Passionate enough for you.',
    subFr: 'Réparation experte pour Harley-Davidson, Yamaha, Kawasaki, Honda, BMW, Ducati, KTM, Suzuki, Aprilia et plus. Mandaté pour l\'entretien des Harley-Davidson de la flotte policière.',
    subEn: 'Expert repair for Harley-Davidson, Yamaha, Kawasaki, Honda, BMW, Ducati, KTM, Suzuki, Aprilia and more. Contracted for police fleet Harley-Davidson maintenance.',
  },
  features: [
    { fr: 'Diagnostic complet', en: 'Complete diagnostics', detailFr: 'Analyse mécanique et électronique, lecture de codes, inspection visuelle multi-points.', detailEn: 'Mechanical and electronic analysis, code reading, multi-point visual inspection.' },
    { fr: 'Réparation toutes marques', en: 'All-brand repair', detailFr: 'Harley-Davidson, Yamaha, Kawasaki, Honda, Suzuki, BMW, Ducati, KTM, Polaris, Aprilia, BRP.', detailEn: 'Harley-Davidson, Yamaha, Kawasaki, Honda, Suzuki, BMW, Ducati, KTM, Polaris, Aprilia, BRP.' },
    { fr: 'Niveau professionnel', en: 'Professional-grade', detailFr: 'Même standard de qualité que pour les Harley-Davidson de la flotte policière.', detailEn: 'Same quality standard as for police fleet Harley-Davidsons.' },
    { fr: 'Pièces multi-marques', en: 'Multi-brand parts', detailFr: 'Accès à un vaste inventaire de pièces d\'origine et de performance.', detailEn: 'Access to extensive inventory of OEM and performance parts.' },
    { fr: 'Inspection gratuite', en: 'Free inspection', detailFr: 'Inspection moto gratuite de 30 points — sans obligation.', detailEn: 'Free 30-point motorcycle inspection — no obligation.' },
  ],
  faq: [
    { questionFr: 'Quelles marques de moto réparez-vous?', questionEn: 'What motorcycle brands do you repair?', answerFr: 'Toutes les grandes marques: Harley-Davidson, Yamaha, Kawasaki, Honda, Suzuki, BMW, Ducati, KTM, Polaris, Aprilia et BRP.', answerEn: 'All major brands: Harley-Davidson, Yamaha, Kawasaki, Honda, Suzuki, BMW, Ducati, KTM, Polaris, Aprilia and BRP.' },
    { questionFr: 'C\'est vrai que vous réparez les Harley de la police?', questionEn: 'Is it true you repair police Harleys?', answerFr: 'Oui. Radikal Motosport est le partenaire officiel pour l\'entretien et la réparation des Harley-Davidson de la flotte policière.', answerEn: 'Yes. Radikal Motosport is the official partner for police fleet Harley-Davidson maintenance and repair.' },
    { questionFr: 'Offrez-vous une inspection gratuite?', questionEn: 'Do you offer a free inspection?', answerFr: 'Oui. Nous offrons une inspection moto gratuite de 30 points, sans obligation. Appelez pour prendre rendez-vous.', answerEn: 'Yes. We offer a free 30-point motorcycle inspection, no obligation. Call to book.' },
    { questionFr: 'Dois-je prendre rendez-vous?', questionEn: 'Do I need an appointment?', answerFr: 'Recommandé. Appelez le 819-561-6686 ou remplissez notre formulaire de soumission en ligne.', answerEn: 'Recommended. Call 819-561-6686 or fill out our online quote form.' },
  ],
  cta: { labelFr: 'Obtenir une soumission', labelEn: 'Get a quote', phone: '819-561-6686' },
};

export const radikalAtvUtv: ServicePageData = {
  shopId: 'radikal',
  slug: 'atv-utv',
  meta: {
    titleFr: 'Réparation VTT & UTV Gatineau | Radikal Motosport — Pièces et service',
    titleEn: 'ATV & UTV Repair Gatineau | Radikal Motosport — Parts and Service',
    descriptionFr: 'Réparation, entretien et pièces pour VTT et UTV à Gatineau. Yamaha, Polaris, Honda, Can-Am, Kawasaki. Service expert powersports.',
    descriptionEn: 'ATV and UTV repair, maintenance and parts in Gatineau. Yamaha, Polaris, Honda, Can-Am, Kawasaki. Expert powersports service.',
  },
  hero: {
    eyebrowFr: 'VTT & UTV',
    eyebrowEn: 'ATV & UTV',
    headingFr: 'Vos sentiers n\'attendent pas.',
    headingEn: 'The trails won\'t wait.',
    subFr: 'Réparation, entretien et pièces pour VTT et UTV de toutes marques. Prêt pour le hors-route.',
    subEn: 'Repair, maintenance and parts for all-brand ATVs and UTVs. Ready for off-road.',
  },
  features: [
    { fr: 'Réparation complète VTT/UTV', en: 'Complete ATV/UTV repair', detailFr: 'Moteur, transmission, suspension, direction, freins — toutes marques.', detailEn: 'Engine, transmission, suspension, steering, brakes — all brands.' },
    { fr: 'Entretien saisonnier', en: 'Seasonal maintenance', detailFr: 'Préparation printemps/automne, vidange, filtres, courroie.', detailEn: 'Spring/fall preparation, oil change, filters, belt.' },
    { fr: 'Pièces et accessoires', en: 'Parts and accessories', detailFr: 'Vaste inventaire de pièces pour Yamaha, Polaris, Honda, Can-Am, Kawasaki.', detailEn: 'Extensive parts inventory for Yamaha, Polaris, Honda, Can-Am, Kawasaki.' },
    { fr: 'Treuils et accessoires hors-route', en: 'Winches and off-road accessories', detailFr: 'Installation de treuils, protections, attelages, éclairage LED.', detailEn: 'Winch installation, skid plates, hitches, LED lighting.' },
  ],
  faq: [
    { questionFr: 'Quelles marques de VTT servez-vous?', questionEn: 'What ATV brands do you service?', answerFr: 'Yamaha, Polaris, Honda, Can-Am (BRP), Kawasaki, Suzuki, Arctic Cat et plus.', answerEn: 'Yamaha, Polaris, Honda, Can-Am (BRP), Kawasaki, Suzuki, Arctic Cat and more.' },
    { questionFr: 'Faites-vous l\'entretien de mon UTV côte-à-côte?', questionEn: 'Do you service side-by-sides (UTVs)?', answerFr: 'Oui. Polaris RZR/Ranger, Can-Am Maverick/Defender, Yamaha Viking et plus.', answerEn: 'Yes. Polaris RZR/Ranger, Can-Am Maverick/Defender, Yamaha Viking and more.' },
    { questionFr: 'Avez-vous des pièces VTT en stock?', questionEn: 'Do you have ATV parts in stock?', answerFr: 'Oui, un inventaire multi-marques. Si nous n\'avons pas la pièce, nous la commandons rapidement.', answerEn: 'Yes, multi-brand inventory. If we don\'t have the part, we order it quickly.' },
  ],
  cta: { labelFr: 'Obtenir une soumission', labelEn: 'Get a quote', phone: '819-561-6686' },
};

export const radikalMotocross: ServicePageData = {
  shopId: 'radikal',
  slug: 'motocross',
  meta: {
    titleFr: 'Motocross Gatineau | Radikal Motosport — Pièces, service et équipement Fox Racing',
    titleEn: 'Motocross Gatineau | Radikal Motosport — Parts, Service and Fox Racing Gear',
    descriptionFr: 'Pièces, réparation et équipement motocross à Gatineau. Concessionnaire Fox Racing autorisé. Casques, jerseys, protections, bottes.',
    descriptionEn: 'Motocross parts, repair and gear in Gatineau. Authorized Fox Racing dealer. Helmets, jerseys, protection, boots.',
  },
  hero: {
    eyebrowFr: 'Motocross',
    eyebrowEn: 'Motocross',
    headingFr: 'Équipé pour dominer.',
    headingEn: 'Geared to dominate.',
    subFr: 'Pièces de performance, réparation experte et équipement Fox Racing. Tout pour le motocross sous un même toit.',
    subEn: 'Performance parts, expert repair and Fox Racing gear. Everything for motocross under one roof.',
  },
  features: [
    { fr: 'Pièces de performance', en: 'Performance parts', detailFr: 'Filtres, chaînes, pignons, plaquettes, plastiques, échappement — multi-marques.', detailEn: 'Filters, chains, sprockets, pads, plastics, exhaust — multi-brand.' },
    { fr: 'Réparation motocross', en: 'Motocross repair', detailFr: 'Moteur, suspension, carburateur, embrayage — remise en état complète.', detailEn: 'Engine, suspension, carburetor, clutch — complete overhaul.' },
    { fr: 'Équipement Fox Racing', en: 'Fox Racing gear', detailFr: 'Casques, jerseys, gants, bottes, protections — concessionnaire autorisé.', detailEn: 'Helmets, jerseys, gloves, boots, protection — authorized dealer.' },
    { fr: 'Préparation course', en: 'Race preparation', detailFr: 'Mise au point moteur, suspension ajustée, inspection pré-course.', detailEn: 'Engine tuning, suspension adjustment, pre-race inspection.' },
  ],
  faq: [
    { questionFr: 'Avez-vous des pièces motocross en stock?', questionEn: 'Do you have motocross parts in stock?', answerFr: 'Oui — un large inventaire multi-marques. Pièces courantes en stock, commande rapide pour le reste.', answerEn: 'Yes — large multi-brand inventory. Common parts in stock, quick order for the rest.' },
    { questionFr: 'Vendez-vous de l\'équipement Fox Racing?', questionEn: 'Do you sell Fox Racing gear?', answerFr: 'Oui. Radikal est concessionnaire Fox Racing autorisé à Gatineau. Casques, maillots, gants, bottes et protections en boutique.', answerEn: 'Yes. Radikal is an authorized Fox Racing dealer in Gatineau. Helmets, jerseys, gloves, boots and protection in store.' },
    { questionFr: 'Réparez-vous les motos 2-temps et 4-temps?', questionEn: 'Do you repair 2-stroke and 4-stroke bikes?', answerFr: 'Oui, les deux. Reconstruction de moteur, haut-moteur, bas-moteur — on fait tout.', answerEn: 'Yes, both. Engine rebuilds, top-end, bottom-end — we do it all.' },
  ],
  cta: { labelFr: 'Obtenir une soumission', labelEn: 'Get a quote', phone: '819-561-6686' },
};

export const radikalSnowmobile: ServicePageData = {
  shopId: 'radikal',
  slug: 'snowmobile',
  meta: {
    titleFr: 'Réparation motoneige Gatineau | Radikal Motosport — Service et pièces',
    titleEn: 'Snowmobile Repair Gatineau | Radikal Motosport — Service and Parts',
    descriptionFr: 'Réparation et entretien de motoneiges à Gatineau. Ski-Doo, Polaris, Yamaha, Arctic Cat. Entreposage estival disponible.',
    descriptionEn: 'Snowmobile repair and maintenance in Gatineau. Ski-Doo, Polaris, Yamaha, Arctic Cat. Summer storage available.',
  },
  hero: {
    eyebrowFr: 'Motoneige',
    eyebrowEn: 'Snowmobile',
    headingFr: 'Prêt pour la neige.',
    headingEn: 'Ready for the snow.',
    subFr: 'Réparation, entretien et pièces pour motoneiges de toutes marques. Service saisonnier complet.',
    subEn: 'Repair, maintenance and parts for all-brand snowmobiles. Complete seasonal service.',
  },
  features: [
    { fr: 'Réparation motoneige', en: 'Snowmobile repair', detailFr: 'Moteur, chenille, suspension, embrayage, carburateur — toutes marques.', detailEn: 'Engine, track, suspension, clutch, carburetor — all brands.' },
    { fr: 'Préparation saisonnière', en: 'Seasonal preparation', detailFr: 'Mise au point avant-saison : fluides, courroie, bougies, chenille, suspension.', detailEn: 'Pre-season tune-up: fluids, belt, spark plugs, track, suspension.' },
    { fr: 'Pièces et accessoires', en: 'Parts and accessories', detailFr: 'Chenilles, skis, pare-brise, poignées chauffantes, sacs de rangement.', detailEn: 'Tracks, skis, windshields, heated grips, storage bags.' },
    { fr: 'Entreposage estival', en: 'Summer storage', detailFr: 'Entreposage sécurisé pendant l\'été avec préparation de remise en route à l\'automne.', detailEn: 'Secure summer storage with fall restart preparation.' },
  ],
  faq: [
    { questionFr: 'Quelles marques de motoneige servez-vous?', questionEn: 'What snowmobile brands do you service?', answerFr: 'Ski-Doo (BRP), Polaris, Yamaha, Arctic Cat et plus.', answerEn: 'Ski-Doo (BRP), Polaris, Yamaha, Arctic Cat and more.' },
    { questionFr: 'Quand dois-je faire préparer ma motoneige?', questionEn: 'When should I get my snowmobile prepared?', answerFr: 'Idéalement en octobre ou novembre, avant les premières neiges. Réservez tôt.', answerEn: 'Ideally in October or November, before the first snow. Book early.' },
    { questionFr: 'Offrez-vous l\'entreposage estival pour motoneiges?', questionEn: 'Do you offer summer storage for snowmobiles?', answerFr: 'Oui. Entreposage sécurisé avec préparation de remise en route incluse à l\'automne.', answerEn: 'Yes. Secure storage with fall restart preparation included.' },
  ],
  cta: { labelFr: 'Obtenir une soumission', labelEn: 'Get a quote', phone: '819-561-6686' },
};

export const radikalBoat: ServicePageData = {
  shopId: 'radikal',
  slug: 'boat',
  meta: {
    titleFr: 'Réparation moteur bateau Gatineau | Radikal Motosport — Mécanique marine',
    titleEn: 'Boat Engine Repair Gatineau | Radikal Motosport — Marine Mechanics',
    descriptionFr: 'Réparation et entretien de moteurs marins à Gatineau. Moteurs hors-bord et semi-hors-bord. Service saisonnier complet.',
    descriptionEn: 'Marine engine repair and maintenance in Gatineau. Outboard and sterndrive engines. Complete seasonal service.',
  },
  hero: {
    eyebrowFr: 'Mécanique marine',
    eyebrowEn: 'Marine mechanics',
    headingFr: 'Sur l\'eau en toute confiance.',
    headingEn: 'On the water with confidence.',
    subFr: 'Réparation et entretien de moteurs marins. Service saisonnier, hivernisation et remise à l\'eau.',
    subEn: 'Marine engine repair and maintenance. Seasonal service, winterization and spring launch.',
  },
  features: [
    { fr: 'Réparation moteur marin', en: 'Marine engine repair', detailFr: 'Moteurs hors-bord et semi-hors-bord. Diagnostic, réparation et remise en état.', detailEn: 'Outboard and sterndrive engines. Diagnostics, repair and overhaul.' },
    { fr: 'Entretien saisonnier', en: 'Seasonal maintenance', detailFr: 'Vidange, anodes, hélice, impeller, système de carburant.', detailEn: 'Oil change, anodes, propeller, impeller, fuel system.' },
    { fr: 'Hivernisation', en: 'Winterization', detailFr: 'Protection complète du moteur contre le gel et l\'humidité hivernale.', detailEn: 'Complete engine protection against freezing and winter moisture.' },
    { fr: 'Remise à l\'eau', en: 'Spring launch', detailFr: 'Inspection, mise en marche et vérification de tous les systèmes au printemps.', detailEn: 'Inspection, startup and all systems check in spring.' },
  ],
  faq: [
    { questionFr: 'Quels types de moteurs marins réparez-vous?', questionEn: 'What types of marine engines do you repair?', answerFr: 'Moteurs hors-bord et semi-hors-bord de toutes marques. Appelez pour vérifier la compatibilité.', answerEn: 'Outboard and sterndrive engines of all brands. Call to verify compatibility.' },
    { questionFr: 'Faites-vous l\'hivernisation de bateaux?', questionEn: 'Do you winterize boats?', answerFr: 'Oui. Service complet d\'hivernisation pour protéger votre moteur pendant l\'hiver québécois.', answerEn: 'Yes. Complete winterization service to protect your engine during Quebec winters.' },
    { questionFr: 'Offrez-vous l\'entreposage de bateaux?', questionEn: 'Do you offer boat storage?', answerFr: 'Contactez-nous pour discuter des options d\'entreposage. Le service dépend de la taille du véhicule.', answerEn: 'Contact us to discuss storage options. Service depends on vehicle size.' },
  ],
  cta: { labelFr: 'Obtenir une soumission', labelEn: 'Get a quote', phone: '819-561-6686' },
};

export const radikalInspection: ServicePageData = {
  shopId: 'radikal',
  slug: 'inspection',
  meta: {
    titleFr: 'Inspection moto GRATUITE Gatineau | Radikal Motosport — 30 points de contrôle',
    titleEn: 'FREE Motorcycle Inspection Gatineau | Radikal Motosport — 30-Point Check',
    descriptionFr: 'Inspection moto gratuite de 30 points à Gatineau. Sans obligation. Vérification complète de la sécurité de votre moto par les experts Radikal.',
    descriptionEn: 'Free 30-point motorcycle inspection in Gatineau. No obligation. Complete safety check by Radikal experts.',
  },
  hero: {
    eyebrowFr: 'Inspection gratuite',
    eyebrowEn: 'Free inspection',
    headingFr: '30 points vérifiés. Zéro frais.',
    headingEn: '30 points checked. Zero charge.',
    subFr: 'Inspection de sécurité complète de votre moto — gratuite et sans obligation. Roulez l\'esprit tranquille.',
    subEn: 'Complete safety inspection of your motorcycle — free and no obligation. Ride with peace of mind.',
  },
  features: [
    { fr: 'Freins', en: 'Brakes', detailFr: 'Plaquettes, disques, liquide, durites, levier — avant et arrière.', detailEn: 'Pads, rotors, fluid, lines, lever — front and rear.' },
    { fr: 'Pneus et roues', en: 'Tires and wheels', detailFr: 'Usure, pression, fissures, jantes, roulements.', detailEn: 'Wear, pressure, cracks, rims, bearings.' },
    { fr: 'Système électrique', en: 'Electrical system', detailFr: 'Batterie, éclairage, clignotants, klaxon, système de charge.', detailEn: 'Battery, lighting, turn signals, horn, charging system.' },
    { fr: 'Suspension et direction', en: 'Suspension and steering', detailFr: 'Fourche, amortisseurs, roulements de direction, jeu.', detailEn: 'Fork, shocks, steering bearings, play.' },
    { fr: 'Moteur et transmission', en: 'Engine and transmission', detailFr: 'Fuites, niveaux, chaîne/courroie, embrayage.', detailEn: 'Leaks, levels, chain/belt, clutch.' },
  ],
  faq: [
    { questionFr: 'L\'inspection est vraiment gratuite?', questionEn: 'Is the inspection really free?', answerFr: 'Oui, 100% gratuite et sans obligation. Si nous trouvons quelque chose, nous vous informons — vous décidez.', answerEn: 'Yes, 100% free and no obligation. If we find something, we inform you — you decide.' },
    { questionFr: 'Combien de temps dure l\'inspection?', questionEn: 'How long does the inspection take?', answerFr: 'Environ 30 à 45 minutes. Prenez rendez-vous pour éviter l\'attente.', answerEn: 'About 30 to 45 minutes. Book an appointment to avoid waiting.' },
    { questionFr: 'Inspectez-vous tous les types de véhicules?', questionEn: 'Do you inspect all vehicle types?', answerFr: 'L\'inspection gratuite est pour les motos. Pour VTT, motoneiges et autres véhicules, appelez-nous pour un devis.', answerEn: 'The free inspection is for motorcycles. For ATVs, snowmobiles and other vehicles, call us for a quote.' },
    { questionFr: 'Quand devrais-je faire inspecter ma moto?', questionEn: 'When should I get my motorcycle inspected?', answerFr: 'Au printemps avant la première sortie, avant un long voyage, ou si vous achetez une moto usagée.', answerEn: 'In spring before your first ride, before a long trip, or if you\'re buying a used motorcycle.' },
  ],
  cta: { labelFr: 'Réserver mon inspection gratuite', labelEn: 'Book my free inspection', phone: '819-561-6686' },
};

export const radikalWinterStorage: ServicePageData = {
  shopId: 'radikal',
  slug: 'winter-storage',
  meta: {
    titleFr: 'Entreposage hivernal Gatineau | Radikal Motosport — Motos, VTT, motoneiges',
    titleEn: 'Winter Storage Gatineau | Radikal Motosport — Motorcycles, ATVs, Snowmobiles',
    descriptionFr: 'Entreposage hivernal sécurisé pour motos, VTT et motoneiges à Gatineau. Préparation hivernale et remise en route incluses.',
    descriptionEn: 'Secure winter storage for motorcycles, ATVs and snowmobiles in Gatineau. Winter preparation and spring startup included.',
  },
  hero: {
    eyebrowFr: 'Entreposage hivernal',
    eyebrowEn: 'Winter storage',
    headingFr: 'Votre véhicule, protégé tout l\'hiver.',
    headingEn: 'Your vehicle, protected all winter.',
    subFr: 'Entreposage sécurisé avec préparation hivernale et remise en route pour motos, VTT et motoneiges.',
    subEn: 'Secure storage with winter preparation and spring startup for motorcycles, ATVs and snowmobiles.',
  },
  features: [
    { fr: 'Préparation hivernale', en: 'Winter preparation', detailFr: 'Stabilisant d\'essence, batterie débranchée, pneus vérifiés, fluides traités.', detailEn: 'Fuel stabilizer, battery disconnected, tires checked, fluids treated.' },
    { fr: 'Entreposage sécurisé', en: 'Secure storage', detailFr: 'Espace intérieur protégé, à l\'abri de l\'humidité et du gel.', detailEn: 'Protected indoor space, sheltered from moisture and freezing.' },
    { fr: 'Remise en route printanière', en: 'Spring startup', detailFr: 'Batterie rechargée, fluides vérifiés, pneus gonflés, prêt à rouler.', detailEn: 'Battery recharged, fluids checked, tires inflated, ready to ride.' },
    { fr: 'Tous véhicules powersports', en: 'All powersports vehicles', detailFr: 'Motos, VTT, UTV, motoneiges — entreposage pour tous vos véhicules.', detailEn: 'Motorcycles, ATVs, UTVs, snowmobiles — storage for all your vehicles.' },
  ],
  faq: [
    { questionFr: 'Quand dois-je réserver mon entreposage?', questionEn: 'When should I book storage?', answerFr: 'Idéalement en septembre ou octobre. Les places sont limitées et se remplissent vite.', answerEn: 'Ideally in September or October. Spots are limited and fill up fast.' },
    { questionFr: 'Quels véhicules acceptez-vous?', questionEn: 'What vehicles do you accept?', answerFr: 'Motos, VTT, UTV, motoneiges. Contactez-nous pour les véhicules plus grands.', answerEn: 'Motorcycles, ATVs, UTVs, snowmobiles. Contact us for larger vehicles.' },
    { questionFr: 'L\'entreposage inclut-il la remise en route?', questionEn: 'Does storage include startup?', answerFr: 'Oui. La préparation hivernale et la remise en route printanière de base sont incluses.', answerEn: 'Yes. Basic winter preparation and spring startup are included.' },
  ],
  cta: { labelFr: 'Réserver ma place', labelEn: 'Reserve my spot', phone: '819-561-6686' },
};

// ─── ALL PAGES INDEX ────────────────────────────────────────────────────────

export const allServicePages: ServicePageData[] = [
  dynamikRepair,
  dynamikMaintenance,
  dynamikVespaSales,
  dynamikModifications,
  dynamikTowing,
  dynamikWinterStorage,
  radikalMotorcycleRepair,
  radikalAtvUtv,
  radikalMotocross,
  radikalSnowmobile,
  radikalBoat,
  radikalInspection,
  radikalWinterStorage,
];
