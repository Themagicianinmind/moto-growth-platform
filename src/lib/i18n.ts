// i18n.ts — All FR/EN translation strings
// French is ALWAYS the default (OQLF / Bill 96 compliance)
// Every user-facing string must have both fr and en keys

export type Lang = 'fr' | 'en';

export const t = {

  // ============================
  // GLOBAL / NAV
  // ============================
  langToggle: { fr: 'EN', en: 'FR' },
  listen: { fr: 'Écouter', en: 'Listen' },
  stop: { fr: 'Arrêter', en: 'Stop' },
  audioOn: { fr: '🔊 Audio', en: '🔊 Audio' },
  audioOff: { fr: '🔇 Muet', en: '🔇 Muted' },
  backToHome: { fr: '← Retour', en: '← Back' },

  // ============================
  // MEGA-NAV
  // ============================
  navServices: { fr: 'Services', en: 'Services' },
  navVespa: { fr: 'Vespa & Piaggio', en: 'Vespa & Piaggio' },
  navParts: { fr: 'Pièces & Accessoires', en: 'Parts & Accessories' },
  navFoxRacing: { fr: 'Fox Racing', en: 'Fox Racing' },
  navMarketplace: { fr: 'Marketplace', en: 'Marketplace' },
  navAbout: { fr: 'À propos', en: 'About' },
  navContact: { fr: 'Contact', en: 'Contact' },
  navExam: { fr: 'Examen moto', en: 'Moto Exam' },
  navPromotions: { fr: 'Promotions', en: 'Promotions' },
  navBookNow: { fr: 'Réserver', en: 'Book Now' },
  navGetQuote: { fr: 'Soumission', en: 'Get a Quote' },

  // Nav dropdown — Services (Dynamik)
  navRepair: { fr: 'Réparation moto', en: 'Motorcycle Repair' },
  navRepairDesc: { fr: 'Diagnostic, électronique, mécanique', en: 'Diagnostics, electronics, mechanics' },
  navMaintenance: { fr: 'Entretien & révision', en: 'Maintenance & Service' },
  navMaintenanceDesc: { fr: 'Vidange, freins, pneus, chaîne', en: 'Oil change, brakes, tires, chain' },
  navModifications: { fr: 'Modifications', en: 'Modifications' },
  navModificationsDesc: { fr: 'Personnalisation experte', en: 'Expert customization' },
  navTowing: { fr: 'Remorquage', en: 'Towing' },
  navTowingDesc: { fr: 'Service disponible rapidement', en: 'Fast response service' },
  navStorage: { fr: 'Entreposage hivernal', en: 'Winter Storage' },
  navStorageDesc: { fr: "Stockage sécurisé tout l'hiver", en: 'Secure storage all winter' },
  navVespaSales: { fr: 'Vente Vespa & Piaggio', en: 'Vespa & Piaggio Sales' },
  navVespaSalesDesc: { fr: 'Concessionnaire officiel Outaouais', en: 'Official dealer Outaouais' },

  // Nav dropdown — Vespa (Dynamik)
  navVespaModels: { fr: 'Modèles Vespa', en: 'Vespa Models' },
  navPiaggioModels: { fr: 'Modèles Piaggio', en: 'Piaggio Models' },
  navAccessories: { fr: 'Accessoires', en: 'Accessories' },
  navOEMParts: { fr: 'Pièces OEM', en: 'OEM Parts' },
  navSeeAll: { fr: 'Voir tout →', en: 'See all →' },

  // Nav dropdown — Services (Radikal)
  navMotoRepair: { fr: 'Motos & Harley-Davidson', en: 'Motorcycles & Harley-Davidson' },
  navATV: { fr: 'VTT & UTV', en: 'ATV & UTV' },
  navMotocross: { fr: 'Motocross', en: 'Motocross' },
  navSnowmobile: { fr: 'Motoneige', en: 'Snowmobile' },
  navBoat: { fr: 'Marine', en: 'Marine' },
  navInspection: { fr: 'Inspection gratuite', en: 'Free Inspection' },
  navInspectionDesc: { fr: 'Diagnostic complet offert', en: 'Free full diagnostic' },

  // Utility bar
  navPromoSpring: { fr: '★ Inspection printanière offerte', en: '★ Free spring inspection' },

  // ============================
  // LANDING PAGE
  // ============================
  landingTitle: {
    fr: 'Votre destination moto à Gatineau',
    en: 'Your Motorcycle Destination in Gatineau',
  },
  landingSubtitle: {
    fr: 'Deux commerces, une passion. Réparation, pièces, vêtements et préparation aux examens.',
    en: 'Two shops, one passion. Repair, parts, gear and exam prep.',
  },
  visitDynamik: { fr: 'Visiter Dynamik Performance', en: 'Visit Dynamik Performance' },
  visitRadikal: { fr: 'Visiter Radikal Motosport', en: 'Visit Radikal Motosport' },
  startExam: { fr: 'Préparer mon examen moto', en: 'Start Motorcycle Exam Prep' },
  examCard: {
    fr: 'Préparez-vous à réussir du premier coup.',
    en: 'Prepare to pass on your first try.',
  },
  examCardSub: {
    fr: 'Quiz bilingue · QC (SAAQ) · ON (M1/M2/M) · Audio inclus',
    en: 'Bilingual quiz · QC (SAAQ) · ON (M1/M2/M) · Audio included',
  },

  // ============================
  // HERO
  // ============================
  heroEyebrow: { fr: 'DEPUIS 1999', en: 'SINCE 1999' },
  heroBadgeDealer: { fr: 'Concessionnaire officiel', en: 'Official Dealer' },
  heroBadgeAMO: { fr: 'Membre AMO Moto', en: 'AMO Moto Member' },
  heroBookNow: { fr: 'Réserver maintenant', en: 'Book Now' },
  heroExploreVespa: { fr: 'Explorer nos Vespa', en: 'Explore Our Vespa' },
  heroGetQuote: { fr: 'Obtenir une soumission', en: 'Get a Quote' },
  heroExploreServices: { fr: 'Nos services', en: 'Our Services' },
  callNow: { fr: 'Appeler maintenant', en: 'Call Now' },
  bookService: { fr: 'Réserver un service', en: 'Book a Service' },
  getDirections: { fr: 'Itinéraire', en: 'Get Directions' },
  since: { fr: 'Depuis', en: 'Since' },
  yearsOfService: { fr: 'ans de service de confiance', en: 'years of trusted service' },

  // ============================
  // STATS STRIP
  // ============================
  statsTitle: { fr: 'En chiffres', en: 'By the Numbers' },

  // ============================
  // SERVICE SECTION
  // ============================
  ourServices: { fr: 'NOS SERVICES', en: 'OUR SERVICES' },
  whatWeOffer: { fr: 'Ce que nous offrons', en: 'What We Offer' },
  serviceSubtitle: {
    fr: 'Réparation experte, entretien préventif et plus — pour toutes les marques.',
    en: 'Expert repair, preventive maintenance and more — for all brands.',
  },
  learnMore: { fr: 'En savoir plus', en: 'Learn More' },
  bookThisService: { fr: 'Réserver', en: 'Book' },

  // Service descriptions — Dynamik
  svcRepairDesc: { fr: 'Diagnostic complet, électronique, mécanique — toutes marques', en: 'Full diagnostic, electronics, mechanics — all brands' },
  svcMaintenanceDesc: { fr: 'Vidange, freins, pneus, chaîne, révision complète', en: 'Oil change, brakes, tires, chain, full tune-up' },
  svcVespaSalesDesc: { fr: 'Concessionnaire officiel Vespa & Piaggio en Outaouais', en: 'Official Vespa & Piaggio dealer in Outaouais' },
  svcModDesc: { fr: 'Personnalisation et performance sur mesure', en: 'Custom builds and performance upgrades' },
  svcTowingDesc: { fr: 'Remorquage rapide et sécuritaire en Outaouais', en: 'Fast and safe towing in the Outaouais' },
  svcStorageDesc: { fr: "Entreposage climatisé et sécurisé tout l'hiver", en: 'Climate-controlled, secure storage all winter' },

  // Service descriptions — Radikal
  svcMotoRepairDesc: { fr: 'Toutes marques, spécialiste Harley-Davidson', en: 'All brands, Harley-Davidson specialist' },
  svcATVDesc: { fr: 'VTT, UTV, tous terrains, toutes marques', en: 'ATV, UTV, all terrains, all brands' },
  svcMotocrossDesc: { fr: 'Pièces, service et préparation circuit', en: 'Parts, service and track prep' },
  svcSnowmobileDesc: { fr: 'Révision, réparation et entreposage motoneige', en: 'Tune-up, repair and snowmobile storage' },
  svcFoxDesc: { fr: 'Équipement, vêtements et accessoires Fox Racing', en: 'Fox Racing gear, apparel and accessories' },
  svcInspectionDesc: { fr: 'Inspection complète gratuite — 30 points de contrôle', en: 'Free full inspection — 30 check points' },

  // ============================
  // VESPA SECTION
  // ============================
  vespaSectionLabel: { fr: 'VESPA & PIAGGIO', en: 'VESPA & PIAGGIO' },
  vespaSectionHeading: { fr: 'La beauté italienne, à Gatineau', en: 'Italian Beauty, in Gatineau' },
  vespaSectionSubtitle: {
    fr: 'Concessionnaire officiel Vespa & Piaggio en Outaouais depuis 1999. Modèles neufs, pièces OEM et service complet.',
    en: 'Official Vespa & Piaggio dealer in Outaouais since 1999. New models, OEM parts and full service.',
  },
  vespaDiscover: { fr: 'Explorer ce modèle', en: 'Explore Model' },
  vespaRequestInfo: { fr: "Demander l'info", en: 'Request Info' },
  vespaSeeAll: { fr: 'Voir toute la gamme →', en: 'See All Models →' },
  vespaShowcaseLabel: { fr: 'ICÔNE ITALIENNE', en: 'ITALIAN ICON' },
  vespaShowcaseHeading: { fr: 'La gamme Vespa\nà Gatineau', en: 'The Vespa Range\nin Gatineau' },
  vespaShowcaseSubtitle: {
    fr: 'Style intemporel, fiabilité légendaire. Découvrez les modèles Sprint, Primavera et GTS.',
    en: 'Timeless style, legendary reliability. Discover the Sprint, Primavera and GTS models.',
  },
  vespaShowcaseCTA: { fr: 'Explorer la gamme', en: 'Explore the Range' },
  vespaOfficialDealer: { fr: '★ Concessionnaire officiel Outaouais', en: '★ Official Dealer Outaouais' },

  // ============================
  // ABOUT OWNER
  // ============================
  aboutLabel: { fr: 'À PROPOS', en: 'ABOUT' },
  aboutHeading: { fr: 'Rencontrez le propriétaire', en: 'Meet the Owner' },
  aboutSubtitle: {
    fr: 'Une passion qui dure depuis des décennies.',
    en: 'A passion that has lasted decades.',
  },
  aboutTrustTitle: { fr: 'Certifications & appartenance', en: 'Certifications & Memberships' },

  // ============================
  // BOOKING CTA SECTION
  // ============================
  bookingCTALabel: { fr: 'PRENDRE RENDEZ-VOUS', en: 'BOOK AN APPOINTMENT' },
  bookingCTAHeading: { fr: 'Prêt à rouler ?', en: 'Ready to Ride?' },
  bookingCTASubtitle: {
    fr: "Réservez votre service dès aujourd'hui. Réponse sous 24h, garantie.",
    en: 'Book your service today. Response within 24h, guaranteed.',
  },
  bookingCTAPhone: { fr: 'Appeler maintenant', en: 'Call Now' },
  bookingCTAForm: { fr: 'Formulaire en ligne', en: 'Online Form' },

  // ============================
  // BOOKING FORM
  // ============================
  bookingLabel: { fr: 'RÉSERVATION', en: 'BOOKING' },
  bookingHeading: { fr: 'Prendre rendez-vous', en: 'Book an Appointment' },
  bookingName: { fr: 'Votre nom', en: 'Your name' },
  bookingPhone: { fr: 'Numéro de téléphone', en: 'Phone number' },
  bookingService: { fr: 'Type de service', en: 'Service type' },
  bookingMessage: { fr: 'Message (optionnel)', en: 'Message (optional)' },
  bookingSubmit: { fr: 'Envoyer la demande', en: 'Send Request' },
  bookingSuccess: { fr: 'Demande envoyée ! Nous vous contacterons sous 24h.', en: 'Request sent! We will contact you within 24h.' },
  bookingError: { fr: 'Veuillez remplir les champs obligatoires.', en: 'Please fill in the required fields.' },
  selectService: { fr: '— Choisir un service —', en: '— Select a service —' },

  // ============================
  // REVIEWS
  // ============================
  reviewsLabel: { fr: 'TÉMOIGNAGES', en: 'TESTIMONIALS' },
  reviewsHeading: { fr: 'Ce que disent nos clients', en: 'What Our Customers Say' },
  reviewsSubtitle: {
    fr: 'Des centaines de clients satisfaits à Gatineau et en Outaouais.',
    en: 'Hundreds of satisfied customers in Gatineau and Outaouais.',
  },
  verifiedCustomer: { fr: 'Client vérifié', en: 'Verified Customer' },
  reviewOnGoogle: { fr: 'Laisser un avis →', en: 'Leave a Review →' },

  // ============================
  // POLICE TRUST (Radikal only)
  // ============================
  policeTrustLabel: { fr: 'CONFIANCE INSTITUTIONNELLE', en: 'INSTITUTIONAL TRUST' },
  policeTrustHeading: { fr: 'Assez fiable pour la police', en: 'Reliable Enough for the Police' },
  policeTrustBody: {
    fr: "Radikal Motosport est le partenaire officiel de la police pour l'entretien et la réparation des motos Harley-Davidson de flotte. Une confiance qui se mérite.",
    en: 'Radikal Motosport is the official police partner for maintenance and repair of fleet Harley-Davidson motorcycles. Trust that is earned.',
  },

  // ============================
  // FOOTER
  // ============================
  address: { fr: 'Adresse', en: 'Address' },
  phone: { fr: 'Téléphone', en: 'Phone' },
  hours: { fr: "Heures d'ouverture", en: 'Hours' },
  hoursValue: { fr: 'Lun–Ven 8h–17h · Sam 9h–14h', en: 'Mon–Fri 8am–5pm · Sat 9am–2pm' },
  copyright: { fr: '© 2026 Possibilities IN MIND™', en: '© 2026 Possibilities IN MIND™' },
  footerTagline: {
    fr: 'Votre partenaire moto de confiance en Outaouais.',
    en: 'Your trusted motorcycle partner in Outaouais.',
  },
  footerServicesCol: { fr: 'Services', en: 'Services' },
  footerProductsCol: { fr: 'Vespa & Piaggio', en: 'Vespa & Piaggio' },
  footerRadikalProductsCol: { fr: 'Pièces & Boutique', en: 'Parts & Boutique' },
  footerCompanyCol: { fr: 'Entreprise', en: 'Company' },
  footerAbout: { fr: 'À propos', en: 'About Us' },
  footerContact: { fr: 'Contact', en: 'Contact' },
  footerPromotions: { fr: 'Promotions', en: 'Promotions' },
  footerMarketplace: { fr: 'Marketplace', en: 'Marketplace' },
  footerExam: { fr: 'Préparation examen', en: 'Exam Prep' },
  footerPoweredBy: { fr: 'Conçu par Possibilities IN MIND™', en: 'Built by Possibilities IN MIND™' },
  footerDealerBadge: { fr: 'Concessionnaire officiel Vespa & Piaggio', en: 'Official Vespa & Piaggio Dealer' },
  footerMemberBadge: { fr: 'Membre AMO Moto', en: 'AMO Moto Member' },

  // ============================
  // EXAM APP
  // ============================
  examTitle: { fr: "Préparation à l'examen moto", en: 'Motorcycle Exam Prep' },
  examSubtitle: {
    fr: 'Questions officielles · QC (SAAQ) · ON (M1/M2/M)',
    en: 'Official questions · QC (SAAQ) · ON (M1/M2/M)',
  },
  examDisclaimer: {
    fr: "Cette application n'est pas affiliée à la SAAQ ni au MTO. À des fins éducatives seulement.",
    en: 'This app is not affiliated with SAAQ or MTO. For educational purposes only.',
  },
  selectProvince: { fr: 'Choisissez votre province', en: 'Choose Your Province' },
  selectProvinceLabel: { fr: 'PROVINCE', en: 'PROVINCE' },
  quebecLabel: { fr: 'Québec', en: 'Quebec' },
  quebecSub: { fr: 'SAAQ · Classe 6', en: 'SAAQ · Class 6' },
  ontarioLabel: { fr: 'Ontario', en: 'Ontario' },
  ontarioSub: { fr: 'MTO · M1/M2/M', en: 'MTO · M1/M2/M' },

  question: { fr: 'Question', en: 'Question' },
  of: { fr: 'de', en: 'of' },
  correct: { fr: 'Correct !', en: 'Correct!' },
  incorrect: { fr: 'Incorrect.', en: 'Incorrect.' },
  explanation: { fr: 'Explication :', en: 'Explanation:' },
  next: { fr: 'Question suivante', en: 'Next Question' },
  startQuiz: { fr: 'Commencer le quiz', en: 'Start Quiz' },
  restartQuiz: { fr: 'Recommencer', en: 'Restart Quiz' },

  scoreLabel: { fr: 'RÉSULTAT', en: 'RESULTS' },
  yourScore: { fr: 'Votre score', en: 'Your Score' },
  passed: { fr: "Réussi ! Vous êtes prêt pour l'examen.", en: 'Passed! You are ready for the exam.' },
  failed: { fr: 'À réviser. Continuez à pratiquer.', en: 'Keep practicing. Review weak areas.' },
  weakAreas: { fr: 'Points à améliorer', en: 'Areas to Improve' },
  passThreshold: { fr: 'Seuil de réussite : 80%', en: 'Pass threshold: 80%' },

  gearLabel: { fr: 'ÉQUIPEMENT', en: 'GEAR' },
  gearHeading: { fr: 'Équipement essentiel', en: 'Essential Riding Gear' },
  critical: { fr: 'Obligatoire', en: 'Required' },
  optional: { fr: 'Recommandé', en: 'Recommended' },

  licensingLabel: { fr: 'PERMIS', en: 'LICENSING' },
  licensingHeading: { fr: 'Étapes pour votre permis moto', en: 'Steps to Get Your Motorcycle License' },
  step: { fr: 'Étape', en: 'Step' },

  leadLabel: { fr: 'OFFRE EXCLUSIVE', en: 'EXCLUSIVE OFFER' },
  leadHeading: { fr: '15% de rabais sur votre premier casque', en: '15% Off Your First Helmet' },
  leadBody: {
    fr: 'Entrez votre courriel pour recevoir votre code de réduction chez Radikal Motosport.',
    en: 'Enter your email to receive your discount code at Radikal Motosport.',
  },
  leadEmail: { fr: 'Votre adresse courriel', en: 'Your email address' },
  leadSubmit: { fr: 'Obtenir mon rabais', en: 'Get My Discount' },
  leadSuccess: {
    fr: 'Merci ! Présentez-vous chez Radikal Motosport avec votre code : MOTO15',
    en: 'Thank you! Visit Radikal Motosport with your code: MOTO15',
  },
  leadAt: { fr: '156 De Varennes, Gatineau · 819-561-6686', en: '156 De Varennes, Gatineau · 819-561-6686' },
} as const;

export function tr(key: keyof typeof t, lang: Lang): string {
  return t[key][lang];
}
