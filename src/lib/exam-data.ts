// exam-data.ts — Original quiz questions for QC (SAAQ) and ON (MTO)
// Questions are ORIGINAL, inspired by official handbooks — NOT copied.
// Sources: SAAQ "Conduire une moto", MTO "Motorcycle Handbook"
// Disclaimer: Not affiliated with SAAQ or MTO. Educational purposes only.

export type Province = 'qc' | 'on';
export type Category = 'rules' | 'safety' | 'gear' | 'skills' | 'signs' | 'licensing';

export interface Question {
  id: string;
  province: Province;
  category: Category;
  questionFr: string;
  questionEn: string;
  options: { fr: string; en: string }[];
  correctIndex: number;
  explanationFr: string;
  explanationEn: string;
}

export const questions: Question[] = [
  // ============================
  // QUÉBEC (SAAQ) — 12 questions
  // ============================
  {
    id: 'qc-01',
    province: 'qc',
    category: 'licensing',
    questionFr: 'Quel est le nom du permis requis pour conduire une moto au Québec ?',
    questionEn: 'What is the name of the license required to ride a motorcycle in Quebec?',
    options: [
      { fr: 'Permis de classe 5', en: 'Class 5 license' },
      { fr: 'Permis de classe 6', en: 'Class 6 license' },
      { fr: 'Permis de classe 4', en: 'Class 4 license' },
      { fr: 'Permis de classe 8', en: 'Class 8 license' },
    ],
    correctIndex: 1,
    explanationFr: 'Au Québec, le permis de classe 6 est requis pour conduire une moto. Il comprend une période d\'apprentissage avec le permis probatoire.',
    explanationEn: 'In Quebec, a Class 6 license is required to ride a motorcycle. It includes a learning period with a probationary license.',
  },
  {
    id: 'qc-02',
    province: 'qc',
    category: 'rules',
    questionFr: 'Quelle est la durée minimale de la période d\'apprentissage pour le permis moto au Québec ?',
    questionEn: 'What is the minimum learning period for a motorcycle license in Quebec?',
    options: [
      { fr: '6 mois', en: '6 months' },
      { fr: '12 mois', en: '12 months' },
      { fr: '18 mois', en: '18 months' },
      { fr: '3 mois', en: '3 months' },
    ],
    correctIndex: 1,
    explanationFr: 'Au Québec, la période minimale d\'apprentissage est de 12 mois avec un permis probatoire de classe 6.',
    explanationEn: 'In Quebec, the minimum learning period is 12 months with a Class 6 probationary license.',
  },
  {
    id: 'qc-03',
    province: 'qc',
    category: 'safety',
    questionFr: 'Le port du casque est-il obligatoire au Québec pour les motocyclistes ?',
    questionEn: 'Is wearing a helmet mandatory in Quebec for motorcyclists?',
    options: [
      { fr: 'Oui, toujours', en: 'Yes, always' },
      { fr: 'Non, c\'est facultatif', en: 'No, it\'s optional' },
      { fr: 'Seulement sur autoroute', en: 'Only on highways' },
      { fr: 'Seulement pour les moins de 18 ans', en: 'Only for under 18' },
    ],
    correctIndex: 0,
    explanationFr: 'Le port du casque est obligatoire pour tous les motocyclistes et leurs passagers au Québec, en tout temps.',
    explanationEn: 'Wearing a helmet is mandatory for all motorcyclists and passengers in Quebec, at all times.',
  },
  {
    id: 'qc-04',
    province: 'qc',
    category: 'rules',
    questionFr: 'Combien de secondes de distance de suivi (espace tampon) doit maintenir un motocycliste derrière un véhicule ?',
    questionEn: 'How many seconds of following distance should a motorcyclist maintain behind a vehicle?',
    options: [
      { fr: '1 seconde', en: '1 second' },
      { fr: '2 secondes', en: '2 seconds' },
      { fr: 'Au moins 3 secondes', en: 'At least 3 seconds' },
      { fr: '5 secondes', en: '5 seconds' },
    ],
    correctIndex: 2,
    explanationFr: 'Les motocyclistes doivent maintenir un espace d\'au moins 3 secondes derrière le véhicule qui précède. En mauvaises conditions, augmenter à 4-5 secondes.',
    explanationEn: 'Motorcyclists must maintain a gap of at least 3 seconds behind the vehicle ahead. In poor conditions, increase to 4-5 seconds.',
  },
  {
    id: 'qc-05',
    province: 'qc',
    category: 'safety',
    questionFr: 'Quelle est la principale cause de collisions mortelles pour les motocyclistes ?',
    questionEn: 'What is the leading cause of fatal collisions for motorcyclists?',
    options: [
      { fr: 'Vitesse excessive', en: 'Excessive speed' },
      { fr: 'Alcool et drogues', en: 'Alcohol and drugs' },
      { fr: 'Manque de visibilité du conducteur', en: 'Driver lack of visibility' },
      { fr: 'Routes en mauvais état', en: 'Poor road conditions' },
    ],
    correctIndex: 0,
    explanationFr: 'La vitesse excessive est la principale cause de collisions mortelles impliquant des motocyclistes. Elle réduit le temps de réaction et amplifie les blessures.',
    explanationEn: 'Excessive speed is the leading cause of fatal collisions involving motorcyclists. It reduces reaction time and amplifies injuries.',
  },
  {
    id: 'qc-06',
    province: 'qc',
    category: 'skills',
    questionFr: 'Lors d\'un virage, où devrait idéalement se positionner le motocycliste dans la voie ?',
    questionEn: 'When cornering, where should the motorcyclist ideally position themselves in the lane?',
    options: [
      { fr: 'Toujours au centre de la voie', en: 'Always in the center of the lane' },
      { fr: 'Côté intérieur du virage', en: 'Inside edge of the curve' },
      { fr: 'Variable selon le virage pour maximiser la visibilité', en: 'Variable depending on the curve to maximize visibility' },
      { fr: 'Côté extérieur du virage', en: 'Outside edge of the curve' },
    ],
    correctIndex: 2,
    explanationFr: 'La position dans la voie doit varier selon le virage pour maximiser la visibilité. Pour un virage à droite, se positionner à gauche de la voie; pour un virage à gauche, à droite.',
    explanationEn: 'Lane position should vary based on the curve to maximize visibility. For a right curve, position left; for a left curve, position right.',
  },
  {
    id: 'qc-07',
    province: 'qc',
    category: 'gear',
    questionFr: 'Quel type de casque offre la meilleure protection globale ?',
    questionEn: 'Which type of helmet offers the best overall protection?',
    options: [
      { fr: 'Casque demi-jet (3/4)', en: 'Half-shell (3/4) helmet' },
      { fr: 'Casque jet (ouvert)', en: 'Open-face (jet) helmet' },
      { fr: 'Casque intégral', en: 'Full-face helmet' },
      { fr: 'Casque modulable', en: 'Modular helmet' },
    ],
    correctIndex: 2,
    explanationFr: 'Le casque intégral offre la meilleure protection car il couvre entièrement la tête et le menton. La majorité des impacts surviennent à la zone du menton.',
    explanationEn: 'A full-face helmet offers the best protection as it fully covers the head and chin. The majority of impacts occur in the chin area.',
  },
  {
    id: 'qc-08',
    province: 'qc',
    category: 'rules',
    questionFr: 'Est-il permis de conduire une moto entre deux voies de circulation (lane splitting) au Québec ?',
    questionEn: 'Is lane splitting (riding between two lanes) permitted in Quebec?',
    options: [
      { fr: 'Oui, à basse vitesse', en: 'Yes, at low speed' },
      { fr: 'Non, c\'est interdit', en: 'No, it is prohibited' },
      { fr: 'Oui, sur autoroute seulement', en: 'Yes, on highways only' },
      { fr: 'Oui, si la circulation est arrêtée', en: 'Yes, if traffic is stopped' },
    ],
    correctIndex: 1,
    explanationFr: 'Le lane splitting (circuler entre deux files de voitures) est strictement interdit au Québec. Chaque motocycliste doit occuper une voie complète.',
    explanationEn: 'Lane splitting (riding between two lanes of cars) is strictly prohibited in Quebec. Each motorcyclist must occupy a full lane.',
  },
  {
    id: 'qc-09',
    province: 'qc',
    category: 'safety',
    questionFr: 'Comment doit-on freiner en situation d\'urgence sur une moto ?',
    questionEn: 'How should you brake in an emergency situation on a motorcycle?',
    options: [
      { fr: 'Utiliser uniquement le frein avant', en: 'Use only the front brake' },
      { fr: 'Utiliser uniquement le frein arrière', en: 'Use only the rear brake' },
      { fr: 'Utiliser les deux freins progressivement', en: 'Apply both brakes progressively' },
      { fr: 'Couper l\'accélérateur seulement', en: 'Cut the throttle only' },
    ],
    correctIndex: 2,
    explanationFr: 'En urgence, appliquer les deux freins progressivement. Le frein avant fournit 70-80% de la puissance de freinage. Éviter de bloquer les roues.',
    explanationEn: 'In an emergency, apply both brakes progressively. The front brake provides 70-80% of braking power. Avoid locking the wheels.',
  },
  {
    id: 'qc-10',
    province: 'qc',
    category: 'signs',
    questionFr: 'Que signifie un panneau de signalisation jaune en losange sur la route ?',
    questionEn: 'What does a yellow diamond road sign mean?',
    options: [
      { fr: 'Interdiction', en: 'Prohibition' },
      { fr: 'Avertissement ou danger potentiel', en: 'Warning or potential hazard' },
      { fr: 'Indication d\'information', en: 'Information sign' },
      { fr: 'Obligation', en: 'Obligation' },
    ],
    correctIndex: 1,
    explanationFr: 'Les panneaux jaunes en losange sont des panneaux d\'avertissement. Ils signalent un danger potentiel à venir : virage, intersection, chaussée glissante, etc.',
    explanationEn: 'Yellow diamond signs are warning signs. They signal a potential hazard ahead: curve, intersection, slippery road, etc.',
  },
  {
    id: 'qc-11',
    province: 'qc',
    category: 'skills',
    questionFr: 'Quelle est la technique recommandée pour traverser des rails de tramway ou de train ?',
    questionEn: 'What is the recommended technique for crossing tram or train tracks?',
    options: [
      { fr: 'Croiser en parallèle aux rails', en: 'Cross parallel to the tracks' },
      { fr: 'Croiser à angle droit (90°) ou le plus perpendiculairement possible', en: 'Cross at a right angle (90°) or as perpendicular as possible' },
      { fr: 'Accélérer rapidement', en: 'Accelerate quickly' },
      { fr: 'Freiner fort avant les rails', en: 'Brake hard before the tracks' },
    ],
    correctIndex: 1,
    explanationFr: 'Pour traverser des rails, croiser à angle droit (90°) ou le plus perpendiculairement possible. Croiser en parallèle ou à faible angle peut faire glisser la roue.',
    explanationEn: 'To cross tracks, cross at a right angle (90°) or as perpendicular as possible. Crossing parallel or at a shallow angle can cause the wheel to slide.',
  },
  {
    id: 'qc-12',
    province: 'qc',
    category: 'rules',
    questionFr: 'À quelle vitesse maximale peut-on circuler sur une autoroute au Québec ?',
    questionEn: 'What is the maximum speed limit on a highway in Quebec?',
    options: [
      { fr: '90 km/h', en: '90 km/h' },
      { fr: '100 km/h', en: '100 km/h' },
      { fr: '110 km/h', en: '110 km/h' },
      { fr: '120 km/h', en: '120 km/h' },
    ],
    correctIndex: 1,
    explanationFr: 'La limite de vitesse maximale sur les autoroutes du Québec est de 100 km/h, sauf indication contraire.',
    explanationEn: 'The maximum speed limit on Quebec highways is 100 km/h, unless otherwise posted.',
  },

  // ============================
  // ONTARIO (MTO) — 6 questions
  // ============================
  {
    id: 'on-01',
    province: 'on',
    category: 'licensing',
    questionFr: 'Quelle est la première étape pour obtenir un permis moto en Ontario ?',
    questionEn: 'What is the first step to getting a motorcycle license in Ontario?',
    options: [
      { fr: 'Obtenir un permis M', en: 'Get an M license' },
      { fr: 'Obtenir un permis M1', en: 'Get an M1 license' },
      { fr: 'Réussir un cours de conduite', en: 'Pass a driving course' },
      { fr: 'Réussir le test routier', en: 'Pass the road test' },
    ],
    correctIndex: 1,
    explanationFr: 'En Ontario, la première étape est d\'obtenir le permis M1 en réussissant un examen écrit au bureau du MTO.',
    explanationEn: 'In Ontario, the first step is to get an M1 license by passing a written exam at an MTO office.',
  },
  {
    id: 'on-02',
    province: 'on',
    category: 'licensing',
    questionFr: 'Combien de temps est valide le permis M1 en Ontario ?',
    questionEn: 'How long is an Ontario M1 license valid for?',
    options: [
      { fr: '30 jours', en: '30 days' },
      { fr: '60 jours', en: '60 days' },
      { fr: '90 jours', en: '90 days' },
      { fr: '5 ans', en: '5 years' },
    ],
    correctIndex: 2,
    explanationFr: 'Le permis M1 est valide 90 jours. Durant cette période, vous pouvez pratiquer avec des restrictions comme ne pas conduire la nuit ou sur les autoroutes.',
    explanationEn: 'The M1 license is valid for 90 days. During this period, you can practice with restrictions such as no night riding or highway riding.',
  },
  {
    id: 'on-03',
    province: 'on',
    category: 'rules',
    questionFr: 'Avec un permis M1 en Ontario, est-il permis de circuler la nuit ?',
    questionEn: 'With an M1 license in Ontario, is it permitted to ride at night?',
    options: [
      { fr: 'Oui, sans restriction', en: 'Yes, without restriction' },
      { fr: 'Non, la conduite de nuit est interdite', en: 'No, night riding is prohibited' },
      { fr: 'Oui, mais seulement sur les routes secondaires', en: 'Yes, but only on secondary roads' },
      { fr: 'Oui, avec un accompagnateur expérimenté', en: 'Yes, with an experienced companion' },
    ],
    correctIndex: 1,
    explanationFr: 'Avec le permis M1, la conduite de nuit est interdite. Vous devez également éviter les autoroutes et la voie rapide.',
    explanationEn: 'With an M1 license, night riding is prohibited. You must also avoid expressways and freeways.',
  },
  {
    id: 'on-04',
    province: 'on',
    category: 'safety',
    questionFr: 'Quelle équipement est obligatoire pour les conducteurs de moto en Ontario ?',
    questionEn: 'What equipment is mandatory for motorcycle riders in Ontario?',
    options: [
      { fr: 'Casque approuvé et gants', en: 'Approved helmet and gloves' },
      { fr: 'Casque approuvé uniquement', en: 'Approved helmet only' },
      { fr: 'Casque approuvé et veste de protection', en: 'Approved helmet and protective jacket' },
      { fr: 'Aucun équipement obligatoire', en: 'No equipment mandatory' },
    ],
    correctIndex: 1,
    explanationFr: 'En Ontario, seul le port d\'un casque approuvé est obligatoire par la loi. Les autres équipements (gants, veste) sont fortement recommandés.',
    explanationEn: 'In Ontario, only wearing an approved helmet is mandatory by law. Other gear (gloves, jacket) is strongly recommended.',
  },
  {
    id: 'on-05',
    province: 'on',
    category: 'licensing',
    questionFr: 'Après combien de temps peut-on passer de M1 à M2 en Ontario ?',
    questionEn: 'After how long can you move from M1 to M2 in Ontario?',
    options: [
      { fr: '30 jours', en: '30 days' },
      { fr: '60 jours', en: '60 days' },
      { fr: 'Immédiatement après le cours MORES', en: 'Immediately after completing MORES course' },
      { fr: '90 jours ou après un cours approuvé', en: '90 days or after an approved course' },
    ],
    correctIndex: 3,
    explanationFr: 'On peut passer au M2 après 90 jours avec M1, ou immédiatement en complétant un cours de motocyclisme approuvé par le MTO.',
    explanationEn: 'You can move to M2 after 90 days with M1, or immediately by completing an MTO-approved motorcycle safety course.',
  },
  {
    id: 'on-06',
    province: 'on',
    category: 'rules',
    questionFr: 'En Ontario, un motocycliste peut-il transporter un passager avec un permis M2 ?',
    questionEn: 'In Ontario, can a motorcyclist carry a passenger with an M2 license?',
    options: [
      { fr: 'Oui, sans restriction', en: 'Yes, without restriction' },
      { fr: 'Non, c\'est interdit', en: 'No, it is prohibited' },
      { fr: 'Oui, après 6 mois de M2', en: 'Yes, after 6 months of M2' },
      { fr: 'Oui, mais seulement sur des routes locales', en: 'Yes, but only on local roads' },
    ],
    correctIndex: 0,
    explanationFr: 'Avec le permis M2, vous pouvez transporter des passagers. Les restrictions principales sont : pas d\'alcool (0,00%), pas la nuit sur certaines routes.',
    explanationEn: 'With an M2 license, you can carry passengers. Main restrictions are: no alcohol (0.00%), and some nighttime restrictions.',
  },
];

// Gear checklist items
export interface GearItem {
  id: string;
  critical: boolean;
  nameFr: string;
  nameEn: string;
  descFr: string;
  descEn: string;
  icon: string;
}

export const gearItems: GearItem[] = [
  {
    id: 'helmet',
    critical: true,
    nameFr: 'Casque intégral homologué',
    nameEn: 'Approved Full-Face Helmet',
    descFr: 'Obligatoire par la loi. Le casque intégral protège la tête et le menton. Recherchez les certifications DOT, ECE 22.06 ou SNELL.',
    descEn: 'Mandatory by law. A full-face helmet protects the head and chin. Look for DOT, ECE 22.06 or SNELL certifications.',
    icon: '🪖',
  },
  {
    id: 'jacket',
    critical: true,
    nameFr: 'Veste de moto avec armures',
    nameEn: 'Motorcycle Jacket with Armor',
    descFr: 'Cuir ou textile avec armures aux épaules, coudes et dos. Protège contre l\'abrasion et les chocs en cas de chute.',
    descEn: 'Leather or textile with armor at shoulders, elbows and back. Protects against abrasion and impact in a fall.',
    icon: '🧥',
  },
  {
    id: 'gloves',
    critical: true,
    nameFr: 'Gants de moto',
    nameEn: 'Motorcycle Gloves',
    descFr: 'Les mains sont la première chose qu\'on tend lors d\'une chute. Gants avec armures aux paumes et articulations.',
    descEn: 'Hands are the first thing we extend in a fall. Gloves with palm and knuckle armor.',
    icon: '🧤',
  },
  {
    id: 'boots',
    critical: true,
    nameFr: 'Bottes de moto',
    nameEn: 'Motorcycle Boots',
    descFr: 'Protègent les chevilles et les pieds. Semelle antidérapante, renforts aux malléoles, fermeture sécurisée.',
    descEn: 'Protect ankles and feet. Non-slip sole, ankle reinforcements, secure closure.',
    icon: '👢',
  },
  {
    id: 'pants',
    critical: false,
    nameFr: 'Pantalon de moto avec armures',
    nameEn: 'Motorcycle Pants with Armor',
    descFr: 'Armures aux genoux et hanches. Cuir ou textile renforcé. Fortement recommandé pour protéger le bas du corps.',
    descEn: 'Knee and hip armor. Leather or reinforced textile. Highly recommended to protect the lower body.',
    icon: '👖',
  },
  {
    id: 'eyewear',
    critical: false,
    nameFr: 'Protection oculaire (lunettes/visière)',
    nameEn: 'Eye Protection (goggles/visor)',
    descFr: 'Requis si le casque est ouvert. Protège contre le vent, les insectes, les débris. Visière anti-UV recommandée.',
    descEn: 'Required if helmet is open-face. Protects against wind, insects, debris. Anti-UV visor recommended.',
    icon: '🥽',
  },
  {
    id: 'hiviz',
    critical: false,
    nameFr: 'Gilet ou vêtements haute visibilité',
    nameEn: 'High-Visibility Vest or Clothing',
    descFr: 'Améliore considérablement votre visibilité pour les autres conducteurs, surtout la nuit ou par mauvais temps.',
    descEn: 'Significantly improves your visibility to other drivers, especially at night or in bad weather.',
    icon: '🦺',
  },
  {
    id: 'earplugs',
    critical: false,
    nameFr: 'Bouchons d\'oreilles',
    nameEn: 'Ear Plugs',
    descFr: 'Le bruit du vent à haute vitesse peut causer des dommages auditifs permanents. Les bouchons réduisent la fatigue.',
    descEn: 'Wind noise at high speed can cause permanent hearing damage. Ear plugs reduce fatigue.',
    icon: '🔇',
  },
];

// Licensing steps by province
export interface LicensingStep {
  id: string;
  province: Province;
  stepNumber: number;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}

export const licensingSteps: LicensingStep[] = [
  // Quebec steps
  {
    id: 'qc-step-1',
    province: 'qc',
    stepNumber: 1,
    titleFr: 'Réussir l\'examen théorique SAAQ',
    titleEn: 'Pass the SAAQ Theory Exam',
    descFr: 'Rendez-vous dans un point de service SAAQ. Étudiez le guide "Conduire une moto". Réussissez l\'examen de connaissance pour obtenir le permis apprenti conducteur de classe 6.',
    descEn: 'Visit a SAAQ service point. Study the "Operating a Motorcycle" guide. Pass the knowledge test to get the Class 6 learner\'s license.',
  },
  {
    id: 'qc-step-2',
    province: 'qc',
    stepNumber: 2,
    titleFr: 'Compléter un cours de conduite reconnu',
    titleEn: 'Complete an Approved Riding Course',
    descFr: 'Suivez un cours de conduite moto dans une école reconnue par la SAAQ (ex: Tecnic). Cela inclut la théorie, les manœuvres en espace fermé et la conduite sur route.',
    descEn: 'Complete a motorcycle course at a SAAQ-recognized school (e.g., Tecnic). This includes theory, closed-space maneuvers and road riding.',
  },
  {
    id: 'qc-step-3',
    province: 'qc',
    stepNumber: 3,
    titleFr: 'Période d\'apprentissage de 12 mois',
    titleEn: '12-Month Learning Period',
    descFr: 'Conduisez avec votre permis probatoire pendant au moins 12 mois. Respectez les restrictions : taux d\'alcool 0,00%, pas de passager les 6 premiers mois.',
    descEn: 'Ride with your probationary license for at least 12 months. Follow restrictions: 0.00% blood alcohol, no passenger for the first 6 months.',
  },
  {
    id: 'qc-step-4',
    province: 'qc',
    stepNumber: 4,
    titleFr: 'Examen de conduite sur route',
    titleEn: 'On-Road Driving Exam',
    descFr: 'Après 12 mois, prenez rendez-vous pour l\'examen de conduite sur route avec un examinateur SAAQ. Pratiquez les manœuvres d\'urgence et les virages.',
    descEn: 'After 12 months, schedule your on-road exam with a SAAQ examiner. Practice emergency maneuvers and cornering.',
  },
  {
    id: 'qc-step-5',
    province: 'qc',
    stepNumber: 5,
    titleFr: 'Obtenir le permis de classe 6 régulier',
    titleEn: 'Get Your Regular Class 6 License',
    descFr: 'Après avoir réussi l\'examen de conduite, vous obtenez le permis de classe 6 régulier. Bienvenue dans le monde des motocyclistes !',
    descEn: 'After passing the road test, you receive your regular Class 6 license. Welcome to the world of motorcyclists!',
  },
  // Ontario steps
  {
    id: 'on-step-1',
    province: 'on',
    stepNumber: 1,
    titleFr: 'Réussir le test écrit M1 au MTO',
    titleEn: 'Pass the M1 Written Test at MTO',
    descFr: 'Rendez-vous dans un centre DriveTest. Étudiez le Manuel du motocycliste de l\'Ontario. Réussissez l\'examen de vision et le test écrit pour obtenir le M1.',
    descEn: 'Visit a DriveTest centre. Study the Ontario Motorcycle Handbook. Pass the vision exam and written test to get your M1.',
  },
  {
    id: 'on-step-2',
    province: 'on',
    stepNumber: 2,
    titleFr: 'Pratiquer avec le permis M1 (90 jours)',
    titleEn: 'Practice with M1 License (90 Days)',
    descFr: 'Avec le M1, pratiquez pendant au moins 60 jours. Restrictions : pas de nuit, pas d\'autoroute, alcool 0,00%. Idéalement, suivez un cours de sécurité approuvé.',
    descEn: 'With M1, practice for at least 60 days. Restrictions: no night riding, no expressways, 0.00% alcohol. Ideally, take an approved safety course.',
  },
  {
    id: 'on-step-3',
    province: 'on',
    stepNumber: 3,
    titleFr: 'Passer le test M2 (conduite sur route)',
    titleEn: 'Take the M2 Road Test',
    descFr: 'Après 60 jours de M1, prenez rendez-vous pour le test M2. Les compétences testées incluent : démarrage, arrêts, virages, changements de voie, distance de suivi.',
    descEn: 'After 60 days of M1, schedule your M2 road test. Skills tested: starting, stopping, turning, lane changes, following distance.',
  },
  {
    id: 'on-step-4',
    province: 'on',
    stepNumber: 4,
    titleFr: 'Période M2 — 22 mois minimum',
    titleEn: 'M2 Period — Minimum 22 Months',
    descFr: 'Conduisez avec le M2 pendant au moins 22 mois (ou 12 mois si vous avez suivi un cours approuvé). Alcool 0,00% requis.',
    descEn: 'Ride with M2 for at least 22 months (or 12 months if you completed an approved course). 0.00% alcohol required.',
  },
  {
    id: 'on-step-5',
    province: 'on',
    stepNumber: 5,
    titleFr: 'Passer le test final M — Permis complet',
    titleEn: 'Pass the Final M Test — Full License',
    descFr: 'Le test M final est plus exigeant : il inclut des manœuvres d\'urgence, freinage d\'urgence, et conduite sur route à vitesse normale. Réussissez pour obtenir le M complet.',
    descEn: 'The final M test is more demanding: it includes emergency maneuvers, emergency braking, and road riding at normal speeds. Pass to get your full M license.',
  },
];
