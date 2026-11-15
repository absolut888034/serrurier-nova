/**
 * Contenu enrichi pour chaque page de zone (commune).
 */

export interface ZoneQuartier {
  name: string
  note?: string
}

export interface ZoneFAQ {
  q: string
  a: string
}

export interface ZoneDetail {
  /** Phrase d'accroche du hero. */
  lead: string
  /** Paragraphes d'introduction. */
  intro: string[]
  /** Quartiers / lieux-dits typiques. */
  quartiers: ZoneQuartier[]
  /** Spécificités locales (type d'habitat, problématiques courantes). */
  specifics: { k: string; v: string }[]
  /** Questions fréquentes propres à la commune. */
  faqs: ZoneFAQ[]
  /** Phrase mise en avant ("le serrurier à [zone]"). */
  pitch: string
}

export const ZONE_DETAILS: Record<string, ZoneDetail> = {
  vernier: {
    lead: "Notre voisinage immédiat. Toute la commune et Châtelaine desservies, jour et nuit.",
    intro: [
      "Vernier est la commune dans laquelle nous sommes installés, sur le Chemin De-Maisonneuve à Châtelaine. C'est aussi la deuxième commune du canton par sa population, avec un tissu d'habitat très varié : immeubles des années 60 du Lignon, villas de l'Étang, petits collectifs d'Aïre, zone artisanale des Avanchets.",
      "Notre proximité immédiate facilite les interventions à Vernier — pour nos voisins, l'urgence n'est jamais qu'à un coup de fil. Le délai exact vous est confirmé au téléphone, en fonction de l'heure et de la situation.",
    ],
    quartiers: [
      { name: "Le Lignon", note: "Immeubles élevés, cylindres standard à haute sécurité" },
      { name: "Châtelaine", note: "Notre base — résidentiel + petits commerces" },
      { name: "Aïre", note: "Villas et petits collectifs" },
      { name: "Les Avanchets", note: "Mix résidentiel + artisanat" },
      { name: "L'Étang", note: "Nouveau quartier, cylindres récents" },
      { name: "Cointrin", note: "Proximité aéroport, accès rapide" },
    ],
    specifics: [
      { k: "Habitat dense", v: "Immeubles collectifs et grandes copropriétés — travail régulier avec les régies locales." },
      { k: "Cylindres standard", v: "Beaucoup de Kaba et Bricard d'origine. Stock permanent pour remplacement immédiat." },
      { k: "Voisinage immédiat", v: "Accès direct depuis Châtelaine — Vernier est la commune où nous intervenons le plus souvent." },
    ],
    faqs: [
      {
        q: "Vous intervenez aussi au Lignon le soir ?",
        a: "Bien sûr — c'est notre voisinage immédiat. Service 24h/24 et 7j/7, week-ends et jours fériés inclus. Le délai exact est confirmé au moment de l'appel.",
      },
      {
        q: "Travaillez-vous avec les régies de Vernier ?",
        a: "Oui, régulièrement. Mandats récurrents pour mises en sécurité, changements de serrure entre locataires, devis de remise en état après effraction.",
      },
    ],
    pitch: "Le serrurier de Vernier, dans Vernier.",
  },

  "grand-saconnex": {
    lead: "Le Grand-Saconnex desservi 24h/24. Quartier des organisations internationales, expatriés anglophones.",
    intro: [
      "Le Grand-Saconnex est traversé tous les jours par le personnel des organisations internationales — ONU, OMS, OMC, OIM. C'est un quartier à fort taux d'expatriés, où les serrures connectées et les copies de clés en haute sécurité sont plus fréquentes qu'ailleurs.",
      "Notre serrurier parle français et anglais. Les locations courtes (mandats ONU de quelques mois) et les arrivées-départs réguliers font du changement de cylindre une intervention courante.",
    ],
    quartiers: [
      { name: "Pomier", note: "Résidentiel calme, villas" },
      { name: "Le Pommier", note: "Petits immeubles + commerces" },
      { name: "Pré-Bois", note: "Proximité aéroport, hôtels" },
      { name: "Le Jonc", note: "Résidentiel + missions diplomatiques" },
    ],
    specifics: [
      { k: "Anglophones", v: "Conversation directe en anglais avec l'artisan — bienvenue aux nouveaux arrivants ONU/OMC." },
      { k: "Cylindres haute sécurité", v: "Kaba expert et Mul-T-Lock très répandus dans le quartier diplomatique." },
      { k: "Changements fréquents", v: "Locations courtes des organisations internationales — cylindre changé à chaque rotation." },
    ],
    faqs: [
      {
        q: "Do you speak English?",
        a: "Yes, fluent English. Many of our clients are UN, WHO, or WTO staff and we handle the whole intervention without translation.",
      },
      {
        q: "Vous intervenez dans le quartier diplomatique ?",
        a: "Oui — résidences privées, appartements de mission, locations longues durée. Discrétion et professionnalisme garantis.",
      },
    ],
    pitch: "Locksmith for the international community.",
  },

  meyrin: {
    lead: "Meyrin desservi 24h/24. Cité-Meyrin, Mategnin, Meyrin-Village — tout le territoire de la commune.",
    intro: [
      "Meyrin est la commune des grands immeubles de la Cité-Meyrin, des villas de Mategnin et de l'écosystème scientifique du CERN. Habitat très hétérogène : barres d'immeubles des années 70 avec serrures d'origine à remplacer, lotissements neufs avec cylindres haute sécurité, locaux professionnels du Vortex.",
      "Notre serrurier intervient à Meyrin plusieurs fois par semaine — les portes claquées dans les immeubles à interphone et les changements de cylindre entre locataires sont les interventions les plus fréquentes.",
    ],
    quartiers: [
      { name: "Cité-Meyrin", note: "Grands immeubles, ascenseurs, codes interphone" },
      { name: "Meyrin-Village", note: "Cœur historique, petits collectifs" },
      { name: "Mategnin", note: "Villas + petits immeubles" },
      { name: "Cointrin", note: "Mixte résidentiel + aéroport" },
      { name: "CERN", note: "Quartier des chercheurs, locations courtes fréquentes" },
    ],
    specifics: [
      { k: "Grands immeubles", v: "Beaucoup de portes en série avec serrures Kaba ou Bricard d'origine. Stock permanent." },
      { k: "CERN", v: "Communauté scientifique multilingue (français + anglais), changements de cylindre réguliers." },
      { k: "Régies", v: "Travail régulier avec les principales régies — facturation conforme aux exigences." },
    ],
    faqs: [
      {
        q: "Vous intervenez à Meyrin la nuit et le week-end ?",
        a: "Oui, 24h/24 et 7j/7 — y compris à la Cité-Meyrin. Le délai exact dépend du trafic et de votre adresse ; il est confirmé au moment de l'appel, sans surprise une fois sur place.",
      },
      {
        q: "Vous intervenez dans la zone du CERN ?",
        a: "Oui — résidences privées et logements de service. Nous parlons français et anglais, ce qui simplifie pour la communauté scientifique.",
      },
    ],
    pitch: "Le serrurier qui connaît les serrures de la Cité-Meyrin.",
  },

  lancy: {
    lead: "Lancy desservi 24h/24. Petit-Lancy, Grand-Lancy, Pont-Rouge — tout l'écosystème de la nouvelle gare.",
    intro: [
      "Lancy est en pleine transformation avec le Pont-Rouge et les nouvelles tours du PAV. À côté, les quartiers anciens du Petit-Lancy et du Grand-Lancy restent très résidentiels, avec un mix de villas et de petits immeubles des années 50-70.",
      "Les interventions à Lancy se répartissent à parts égales entre urgences résidentielles (portes claquées en immeuble) et changements de serrure planifiés dans les nouvelles constructions du PAV où les standards de sécurité sont plus élevés.",
    ],
    quartiers: [
      { name: "Petit-Lancy", note: "Résidentiel ancien, villas" },
      { name: "Grand-Lancy", note: "Immeubles, écoles, commerces" },
      { name: "Pont-Rouge", note: "Nouvelles tours, serrures connectées fréquentes" },
      { name: "La Praille", note: "Mixte commercial + résidentiel" },
      { name: "Plateau de Saint-Georges", note: "Villas et petits collectifs" },
    ],
    specifics: [
      { k: "Anciens immeubles", v: "Serrures d'origine souvent obsolètes — opportunité de passage en haute sécurité." },
      { k: "PAV neuf", v: "Standards modernes, serrures connectées et cylindres certifiés en sortie de chantier." },
      { k: "Commerces", v: "Rideaux métalliques et serrures professionnelles — interventions hors heures d'ouverture." },
    ],
    faqs: [
      {
        q: "Vous intervenez dans les nouvelles tours du Pont-Rouge ?",
        a: "Oui — ouverture de porte, changement de cylindre, dépannage après tentative d'effraction. Beaucoup de portes y sont équipées de cylindres haute sécurité, dont nous gérons le remplacement.",
      },
      {
        q: "Quel chemin prenez-vous depuis Vernier pour rejoindre le Grand-Lancy ?",
        a: "Le plus court passe en général par le pont Butin, plus rapide que la rade aux heures de pointe. Le délai exact dépend du trafic — il est annoncé au téléphone, avant de partir.",
      },
    ],
    pitch: "Le serrurier du Pont-Rouge comme du vieux Grand-Lancy.",
  },

  geneve: {
    lead: "Genève centre desservie 24h/24. Cité, Plainpalais, Eaux-Vives, Pâquis — tous les quartiers.",
    intro: [
      "Le centre de Genève concentre une diversité énorme de portes : portes cochères du Vieux-Carouge, immeubles haussmanniens des Eaux-Vives, immeubles des années 70 des Pâquis, lofts industriels des Acacias. Aucune intervention ne se ressemble.",
      "Le centre est aussi la zone la plus exposée aux effractions opportunistes — rez-de-chaussée mal sécurisés des Pâquis, accès terrasses à Champel. Une partie significative de nos interventions urgentes vient de ce périmètre.",
    ],
    quartiers: [
      { name: "Plainpalais", note: "Mixte étudiants + résidentiel, fortes urgences" },
      { name: "Eaux-Vives", note: "Haussmannien, portes cochères, hautes sécurité" },
      { name: "Pâquis", note: "Hétérogène, urgences nocturnes fréquentes" },
      { name: "Cité (Vieille-Ville)", note: "Portes anciennes, contraintes patrimoniales" },
      { name: "Acacias", note: "Industriel reconverti, lofts, serrures haute sécurité" },
      { name: "Champel", note: "Résidentiel cossu, portes blindées fréquentes" },
      { name: "Servette", note: "Familial, beaucoup d'immeubles années 60-70" },
      { name: "Jonction", note: "Étudiants + jeunes actifs" },
    ],
    specifics: [
      { k: "Diversité", v: "Du XVIIe siècle (Vieille-Ville) aux serrures connectées (PAV) — toutes les époques techniques." },
      { k: "Urgences nocturnes", v: "Pâquis et Plainpalais concentrent les portes claquées de fin de soirée." },
      { k: "Patrimoine", v: "Vieille-Ville : interventions respectueuses du bâti, avec accord du service du patrimoine si nécessaire." },
    ],
    faqs: [
      {
        q: "Vous intervenez à Plainpalais le soir et la nuit ?",
        a: "Oui, 24h/24 et 7j/7 — Plainpalais et Pâquis figurent parmi nos zones d'intervention les plus régulières la nuit. Le trafic et l'heure influencent le délai ; il est annoncé au téléphone.",
      },
      {
        q: "Vous intervenez en Vieille-Ville malgré les portes anciennes ?",
        a: "Oui. Nous adaptons l'outillage pour préserver les serrures anciennes et les boiseries d'époque. Si une intervention plus lourde est nécessaire, nous coordonnons avec le service du patrimoine.",
      },
      {
        q: "Que faire si je rentre tard aux Pâquis et que ma porte est claquée ?",
        a: "Appelez le 022 557 65 59. Le serrurier vous répond directement, vous donne un délai et un prix avant de partir. Aucune majoration nocturne.",
      },
    ],
    pitch: "Du Vieux-Carouge aux Pâquis, le serrurier de tout Genève.",
  },

  onex: {
    lead: "Onex desservi 24h/24. Cité-Nouvelle, Onex-Village, Confignon.",
    intro: [
      "Onex est une commune contrastée : la Cité-Nouvelle des années 60-70 avec ses immeubles uniformes, et Onex-Village et Confignon avec un tissu plus résidentiel. Les interventions sont à 80 % en immeubles collectifs.",
      "Beaucoup d'immeubles ont encore leurs serrures d'origine — c'est l'occasion de passer en haute sécurité lors d'un changement, surtout pour les rez-de-chaussée et premiers étages.",
    ],
    quartiers: [
      { name: "Cité-Nouvelle", note: "Grands immeubles uniformes, serrures standard" },
      { name: "Onex-Village", note: "Plus résidentiel, villas et petits collectifs" },
      { name: "Confignon", note: "Villages traditionnels" },
    ],
    specifics: [
      { k: "Grands immeubles", v: "Beaucoup de Kaba d'origine — stock permanent pour remplacement immédiat." },
      { k: "Rez-de-chaussée", v: "Souvent exposés — opportunité de passage à A2P★★ à coût modéré." },
    ],
    faqs: [
      {
        q: "Vous intervenez à la Cité-Nouvelle de jour comme de nuit ?",
        a: "Oui, 24h/24 et 7j/7. Le délai exact dépend du trafic et de l'heure — il est confirmé au téléphone, avant que nous prenions la route.",
      },
    ],
    pitch: "Le serrurier qui dépanne la Cité-Nouvelle.",
  },

  versoix: {
    lead: "Versoix desservi 24h/24. Bourg, Bord du lac, Genthod limitrophe.",
    intro: [
      "Versoix est l'une des communes les plus éloignées de notre base — depuis Vernier, le trajet est plus long que pour le centre du canton. C'est un mélange de villas cossues le long du lac et d'un bourg plus dense autour de la gare.",
      "Les interventions sont plus rares à Versoix — l'éloignement joue. Ouverture de porte, changement de cylindre haute sécurité, dépannage après tentative d'effraction : on s'y déplace 24h/24, avec un délai annoncé honnêtement au téléphone.",
    ],
    quartiers: [
      { name: "Bourg de Versoix", note: "Centre dense, commerces" },
      { name: "Bord du lac", note: "Villas, serrures haute sécurité" },
      { name: "Bossy", note: "Résidentiel" },
    ],
    specifics: [
      { k: "Villas du lac", v: "Cylindres haute sécurité fréquents. Changement de serrure souvent planifié plutôt qu'en urgence." },
      { k: "Plus éloigné", v: "Plus long que pour le centre du canton — bien anticiper si possible." },
    ],
    faqs: [
      {
        q: "Vous montez jusqu'à Versoix ?",
        a: "Bien sûr — c'est l'une de nos communes les plus éloignées, mais nous y intervenons 24h/24. Le délai exact est annoncé au téléphone.",
      },
    ],
    pitch: "Le serrurier qui monte jusqu'au lac.",
  },

  carouge: {
    lead: "Carouge desservi 24h/24. Vieux-Carouge, Marché, Acacias limitrophe.",
    intro: [
      "Carouge est une commune au caractère propre, avec son Vieux-Carouge piétonnier, ses immeubles XVIIIe et son tissu artisanal toujours vivant. Les portes y sont souvent anciennes, parfois patrimoniales, et exigent une intervention respectueuse du bâti.",
      "À côté, le secteur du Marché et la frange des Acacias offrent un habitat plus moderne avec des serrures contemporaines. Nous intervenons régulièrement dans tout le périmètre.",
    ],
    quartiers: [
      { name: "Vieux-Carouge", note: "XVIIIe, portes anciennes, contraintes patrimoniales" },
      { name: "Place du Marché", note: "Centre piéton, commerces" },
      { name: "Acacias (frange)", note: "Industriel reconverti, lofts" },
      { name: "Praille", note: "Mixte, professionnels et résidentiel" },
      { name: "Plateau de Pinchat", note: "Résidentiel cossu" },
    ],
    specifics: [
      { k: "Portes anciennes", v: "Outillage adapté pour préserver les boiseries XVIIIe et les serrures d'origine." },
      { k: "Commerces", v: "Rideaux métalliques, serrures de boutique — interventions hors heures." },
      { k: "Régies locales", v: "Mandats récurrents pour la rotation locataires en Vieux-Carouge." },
    ],
    faqs: [
      {
        q: "Vous intervenez sur les portes anciennes du Vieux-Carouge ?",
        a: "Oui — c'est notre spécialité de respecter les bâtis anciens. Outils non destructifs en priorité, et coordination avec le service du patrimoine si une intervention plus lourde est nécessaire.",
      },
      {
        q: "L'accès à la Place du Marché est piéton — comment faites-vous ?",
        a: "Stationnement à la périphérie du piéton et accès à pied avec l'outillage. Le délai est annoncé au téléphone en tenant compte de cette contrainte.",
      },
    ],
    pitch: "Le serrurier qui respecte les portes du Vieux-Carouge.",
  },

  "plan-les-ouates": {
    lead: "Plan-les-Ouates desservi 24h/24. ZIPLO, Saconnex-d'Arve, Croisette.",
    intro: [
      "Plan-les-Ouates accueille la zone industrielle ZIPLO (horlogerie, biotech, finance) et des quartiers résidentiels familiaux. Les interventions sont moitié professionnelles (serrures de coffres, portes sécurisées d'ateliers), moitié résidentielles classiques.",
      "Les villas de la Croisette ont fréquemment des installations haut de gamme — nous y intervenons surtout pour des changements de cylindre haute sécurité et des dépannages après tentative d'effraction.",
    ],
    quartiers: [
      { name: "ZIPLO", note: "Zone industrielle, horlogerie haut de gamme, biotech" },
      { name: "Saconnex-d'Arve", note: "Résidentiel" },
      { name: "Plan-les-Ouates Village", note: "Centre commercial + civique" },
      { name: "Croisette", note: "Villas cossues, cylindres haute sécurité" },
    ],
    specifics: [
      { k: "ZIPLO", v: "Serrures professionnelles de précision — interventions hors heures sur demande." },
      { k: "Villas", v: "Cylindres A2P haute sécurité — maintenance et changement planifiés." },
    ],
    faqs: [
      {
        q: "Vous intervenez dans les ateliers horlogers de la ZIPLO ?",
        a: "Oui. Discrétion absolue, devis sur mesure, interventions hors horaires de production sur demande.",
      },
    ],
    pitch: "Le serrurier des horlogers et des familles de Plan-les-Ouates.",
  },

  "chene-bougeries": {
    lead: "Chêne-Bougeries desservi 24h/24. Pré-l'Évêque, Conches, Vandœuvres limitrophe.",
    intro: [
      "Chêne-Bougeries est une commune résidentielle cossue avec un tissu de villas et de petits immeubles haut de gamme. Les serrures haute sécurité sont plus fréquentes qu'ailleurs dans le canton.",
      "Les interventions sont rarement urgentes — surtout planifiées : changement de cylindres haute sécurité, ouverture de porte sur des bâtis haut de gamme à manipuler avec soin, dépannage après tentative d'effraction.",
    ],
    quartiers: [
      { name: "Pré-l'Évêque", note: "Centre, commerces" },
      { name: "Conches", note: "Villas cossues" },
      { name: "Grange-Canal", note: "Résidentiel moyen" },
    ],
    specifics: [
      { k: "Haut de gamme", v: "Cylindres haute sécurité (Kaba expert, Mul-T-Lock, Fichet) très répandus." },
      { k: "Planifié", v: "La majorité des interventions sont sur rendez-vous, pas en urgence." },
    ],
    faqs: [
      {
        q: "Quelle serrure choisir pour une villa à Conches ?",
        a: "Un cylindre A2P★★ ou ★★★ associé à une gâche renforcée couvre la grande majorité des cas. On vient diagnostiquer votre porte existante avant de proposer — sans bias commercial.",
      },
    ],
    pitch: "Le serrurier des résidences de Chêne-Bougeries.",
  },

  thonex: {
    lead: "Thônex desservi 24h/24. Belle-Idée, Marcelly, Saint-Pierre.",
    intro: [
      "Thônex est une commune résidentielle avec un cœur dense autour de la rue de Genève et des quartiers plus calmes vers la frontière française. Les interventions sont majoritairement résidentielles avec une part importante de petits immeubles.",
      "La proximité de la frontière française (Annemasse) explique parfois des installations d'origine française (Bricard, Vachette, Picard) plutôt que suisse (Kaba). Nous travaillons avec les deux écosystèmes.",
    ],
    quartiers: [
      { name: "Centre Thônex", note: "Commerces + immeubles" },
      { name: "Belle-Idée", note: "Établissement hospitalier" },
      { name: "Marcelly", note: "Résidentiel" },
    ],
    specifics: [
      { k: "Marques françaises", v: "Bricard, Vachette, Picard très présents — notre stock couvre les deux pays." },
      { k: "Frontalier", v: "Habitat mixte CH/FR avec parfois des spécificités douanières (clés transportées)." },
    ],
    faqs: [
      {
        q: "Vous intervenez si je travaille en France et habite Thônex ?",
        a: "Bien sûr. La résidence est en Suisse — donc même service que partout dans le canton, 24h/24. Le délai exact est confirmé au téléphone.",
      },
    ],
    pitch: "Le serrurier du Thônex frontalier.",
  },

  "chene-bourg": {
    lead: "Chêne-Bourg desservi 24h/24. Place Favre, gare CEVA, Grange-Falquet.",
    intro: [
      "Chêne-Bourg a connu un développement notable avec la gare CEVA — densification autour du nouveau quartier, mais le tissu historique de petits immeubles et villas reste dominant. La commune est à la marge de notre rayon habituel mais bien desservie.",
      "Les interventions sont équilibrées entre urgences résidentielles classiques et changements de cylindre planifiés. Le quartier de la gare voit une augmentation de demandes de serrures connectées dans les nouvelles constructions.",
    ],
    quartiers: [
      { name: "Place Favre", note: "Centre, commerces" },
      { name: "Gare CEVA", note: "Nouveau quartier, immeubles modernes" },
      { name: "Grange-Falquet", note: "Résidentiel ancien" },
    ],
    specifics: [
      { k: "Densification CEVA", v: "Beaucoup de constructions récentes avec serrures connectées." },
      { k: "Plus éloigné", v: "L'une des communes les plus éloignées du canton — anticiper quand c'est possible." },
    ],
    faqs: [
      {
        q: "Vous intervenez à Chêne-Bourg malgré la distance ?",
        a: "Oui, 24h/24. C'est l'une des communes les plus éloignées de notre base, mais elle reste dans notre périmètre. Le délai exact est annoncé au téléphone.",
      },
    ],
    pitch: "Le serrurier qui va jusqu'à Chêne-Bourg.",
  },

  bernex: {
    lead: "Bernex desservi 24h/24. Lully, Sézenove, frontière française toute proche.",
    intro: [
      "Bernex est une commune en pleine transformation avec le développement du TPG Bernex et de nouveaux quartiers résidentiels. À côté, le village historique et les hameaux de Lully et Sézenove gardent un caractère rural.",
      "Les interventions sont majoritairement résidentielles classiques. Nous y avons développé une bonne connaissance des nouveaux ensembles et des contraintes spécifiques au bâti récent (cylindres d'origine standardisés à la livraison).",
    ],
    quartiers: [
      { name: "Bernex Village", note: "Centre historique" },
      { name: "Lully", note: "Hameau, villas, vignes" },
      { name: "Sézenove", note: "Rural, fermes reconverties" },
      { name: "Cressy", note: "Nouveaux quartiers résidentiels" },
    ],
    specifics: [
      { k: "Constructions neuves", v: "Beaucoup de cylindres standard d'origine — opportunité de mise à niveau." },
      { k: "Rural à la marge", v: "Lully et Sézenove ont des contraintes spécifiques (cours fermées, accès)." },
    ],
    faqs: [
      {
        q: "Vous intervenez à Bernex 24h/24 ?",
        a: "Oui, comme partout dans le canton. Le chemin le plus rapide depuis Vernier passe par la route de Chancy. Le délai exact est confirmé au téléphone, avant déplacement.",
      },
      {
        q: "Vous intervenez sur les vieilles serrures de Lully ?",
        a: "Oui. Les fermes reconverties ont parfois des serrures anciennes — outillage adapté pour les préserver.",
      },
    ],
    pitch: "Le serrurier de Bernex et de Lully.",
  },

  veyrier: {
    lead: "Veyrier desservi 24h/24. Vessy, Pinchat, Grand-Salève — sud du canton.",
    intro: [
      "Veyrier est une commune résidentielle du sud du canton, adossée au Salève. L'habitat mélange villas haut de gamme sur les hauteurs (Pinchat, Grand-Salève) et petits immeubles plus denses autour du centre et de Vessy.",
      "La proximité de la frontière française et l'isolement relatif de certains hameaux font de Veyrier une commune où la sécurisation des portes est prise au sérieux : cylindres haute sécurité, mise à niveau de serrures et dépannage après tentative d'effraction reviennent souvent en demande.",
    ],
    quartiers: [
      { name: "Vessy", note: "Centre, commerces, petits immeubles" },
      { name: "Pinchat", note: "Villas cossues, sécurité renforcée" },
      { name: "Grand-Salève", note: "Résidentiel haut, frontière française" },
    ],
    specifics: [
      { k: "Sécurité renforcée", v: "Cylindres Kaba / Mul-T-Lock haute sécurité fréquents sur les hauteurs." },
      { k: "Plus éloigné", v: "Sud du canton — délai annoncé au téléphone avant déplacement." },
    ],
    faqs: [
      {
        q: "Vous intervenez à Veyrier de nuit ?",
        a: "Oui, 24h/24. Veyrier est un peu plus éloigné de notre base à Vernier — le délai exact est annoncé au téléphone avant tout déplacement. Aucune majoration nocturne.",
      },
      {
        q: "Changement de cylindre haute sécurité à Pinchat, vous vous déplacez pour le devis ?",
        a: "Oui. Le diagnostic est fait sur place pour vérifier la serrure existante, l'état du dormant et conseiller le bon niveau A2P. Devis annoncé avant intervention, sans engagement.",
      },
    ],
    pitch: "Le serrurier des hauteurs de Veyrier.",
  },

  troinex: {
    lead: "Troinex desservi 24h/24. Petite commune résidentielle au sud, frontière française.",
    intro: [
      "Troinex est une petite commune résidentielle entre Carouge et la frontière française, à dominante villas et petits immeubles. Le tissu est calme, à mi-chemin entre rural et péri-urbain.",
      "Les interventions y sont équilibrées entre urgences résidentielles classiques (porte claquée, perte de clés) et changements de cylindre planifiés sur villas. Une part importante des installations utilise des marques françaises (Bricard, Picard) du fait de la proximité.",
    ],
    quartiers: [
      { name: "Centre Troinex", note: "Église, mairie, commerces" },
      { name: "Pierre-Grand", note: "Résidentiel, villas" },
      { name: "Route de Drize", note: "Axe Carouge–France, mixte" },
    ],
    specifics: [
      { k: "Marques françaises", v: "Bricard, Vachette, Picard fréquents — notre stock couvre les deux écosystèmes CH/FR." },
      { k: "Plus éloigné", v: "Sud-ouest du canton — délai annoncé au téléphone." },
    ],
    faqs: [
      {
        q: "Vous intervenez à Troinex malgré la petite taille de la commune ?",
        a: "Oui. Aucune commune du canton n'est exclue — Troinex est dans notre périmètre 24h/24. Le délai est confirmé à l'appel, avec le prix annoncé avant déplacement.",
      },
    ],
    pitch: "Le serrurier de Troinex et du sud du canton.",
  },
}
