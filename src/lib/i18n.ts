// i18n.ts — All FR/EN translation strings
// French is ALWAYS the default (OQLF / Bill 96 compliance)
// Every user-facing string must have both fr and en keys

export type Lang = 'fr' | 'en';

export const t = {
  // ============================
  // NAVIGATION / GLOBAL
  // ============================
  langToggle: { fr: 'EN', en: 'FR' },
  listen: { fr: 'Écouter', en: 'Listen' },
  stop: { fr: 'Arrêter', en: 'Stop' },
  audioOn: { fr: '🔊 Audio', en: '🔊 Audio' },
  audioOff: { fr: '🔇 Muet', en: '🔇 Muted' },
  backToHome: { fr: '← Retour', en: '← Back' },

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
  // SHOP HERO
  // ============================
  callNow: { fr: 'Appeler maintenant', en: 'Call Now' },
  bookService: { fr: 'Réserver un service', en: 'Book a Service' },
  getDirections: { fr: 'Itinéraire', en: 'Get Directions' },
  since: { fr: 'Depuis', en: 'Since' },
  yearsOfService: { fr: "ans de service de confiance", en: "years of trusted service" },

  // ============================
  // SERVICE GRID
  // ============================
  ourServices: { fr: 'NOS SERVICES', en: 'OUR SERVICES' },
  whatWeOffer: { fr: 'Ce que nous offrons', en: 'What We Offer' },

  // ============================
  // REVIEWS
  // ============================
  reviewsLabel: { fr: 'TÉMOIGNAGES', en: 'TESTIMONIALS' },
  reviewsHeading: { fr: 'Ce que disent nos clients', en: 'What Our Customers Say' },
  verifiedCustomer: { fr: 'Client vérifié', en: 'Verified Customer' },

  // ============================
  // ABOUT OWNER
  // ============================
  aboutLabel: { fr: 'À PROPOS', en: 'ABOUT' },
  aboutHeading: { fr: 'Rencontrez le propriétaire', en: 'Meet the Owner' },

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
  hours: { fr: 'Heures d\'ouverture', en: 'Hours' },
  hoursValue: { fr: 'Lun–Ven 8h–17h · Sam 9h–14h', en: 'Mon–Fri 8am–5pm · Sat 9am–2pm' },
  copyright: { fr: '© 2026 Possibilities IN MIND™', en: '© 2026 Possibilities IN MIND™' },

  // ============================
  // EXAM APP
  // ============================
  examTitle: { fr: 'Préparation à l\'examen moto', en: 'Motorcycle Exam Prep' },
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

  // Score
  scoreLabel: { fr: 'RÉSULTAT', en: 'RESULTS' },
  yourScore: { fr: 'Votre score', en: 'Your Score' },
  passed: { fr: 'Réussi ! Vous êtes prêt pour l\'examen.', en: 'Passed! You are ready for the exam.' },
  failed: { fr: 'À réviser. Continuez à pratiquer.', en: 'Keep practicing. Review weak areas.' },
  weakAreas: { fr: 'Points à améliorer', en: 'Areas to Improve' },
  passThreshold: { fr: 'Seuil de réussite : 80%', en: 'Pass threshold: 80%' },

  // Gear checklist
  gearLabel: { fr: 'ÉQUIPEMENT', en: 'GEAR' },
  gearHeading: { fr: 'Équipement essentiel', en: 'Essential Riding Gear' },
  critical: { fr: 'Obligatoire', en: 'Required' },
  optional: { fr: 'Recommandé', en: 'Recommended' },

  // Licensing steps
  licensingLabel: { fr: 'PERMIS', en: 'LICENSING' },
  licensingHeading: { fr: 'Étapes pour votre permis moto', en: 'Steps to Get Your Motorcycle License' },
  step: { fr: 'Étape', en: 'Step' },

  // Lead capture
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
