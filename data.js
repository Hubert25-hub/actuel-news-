/* ============================================================
   ACTUEL — Base d'articles (version temporaire)
   ------------------------------------------------------------
   Ces données remplissent le site en attendant le vrai contenu.
   Chaque objet correspondra plus tard à UNE LIGNE du Google
   Sheets prévu comme CMS :

     id | titre | categorie | extrait | image | auteur | date |
     duree | tags | contenu

   Colonnes Sheets prévues : A=id, B=titre, C=categorie,
   D=extrait, E=image (URL), F=auteur, G=date (AAAA-MM-JJ),
   H=duree (minutes), I=tags (séparés par des virgules),
   J=contenu (paragraphes séparés par une ligne vide).

   Champs :
   - image : "" = visuel dégradé CSS (à remplacer par une URL
     Unsplash/Pexels quand les vraies photos arrivent)
   - date  : format AAAA-MM-JJ
   - body  : paragraphes de l'article (remplissage temporaire,
     à remplacer par le vrai contenu rédactionnel)
   ============================================================ */

const CATEGORIES = {
  politique:     "Politique",
  economie:      "Économie",
  societe:       "Société",
  culture:       "Culture",
  sport:         "Sport",
  technologie:   "Technologie",
  international: "International",
  diaspora:      "Diaspora",
  sante:         "Santé"
};

const ARTICLES = [
  /* ---- À la une (correspondent au hero codé en dur) ---- */
  {
    id: 1,
    title: "Le Togo lance un projet d'IA en langues nationales avec Zindi et Umbaji",
    category: "technologie",
    excerpt: "Une initiative inédite pour entraîner des modèles d'intelligence artificielle sur l'éwé, le kabiyè et d'autres langues nationales.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-14",
    readTime: 4,
    tags: ["IA", "Togo", "Innovation"],
    body: [
      "Le Togo franchit une étape décisive dans le domaine de l'intelligence artificielle avec le lancement d'un projet de traitement automatique des langues nationales, mené en partenariat avec les plateformes Zindi et Umbaji.",
      "L'objectif affiché est ambitieux : constituer des corpus de données en éwé, kabiyè et d'autres langues nationales afin d'entraîner des modèles d'IA capables de comprendre et de générer du texte dans ces langues.",
      "Pour les spécialistes, ce projet pourrait réduire la fracture numérique linguistique et ouvrir la voie à des services publics accessibles dans la langue de chaque citoyen.",
      "Les premiers résultats sont attendus dans les prochains mois, avec la publication de jeux de données ouverts à la communauté scientifique."
    ]
  },
  {
    id: 2,
    title: "Éliminatoires CAN 2027 : les Éperviers dans le groupe de l'Algérie et de la Zambie",
    category: "sport",
    excerpt: "Le tirage au sort place le Togo dans un groupe relevé pour les éliminatoires de la CAN 2027.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-13",
    readTime: 3,
    tags: ["CAN 2027", "Éperviers", "Football"],
    body: [
      "Le verdict est tombé : les Éperviers du Togo évolueront dans un groupe particulièrement relevé pour les éliminatoires de la Coupe d'Afrique des Nations 2027, aux côtés de l'Algérie et de la Zambie.",
      "Un tirage qui ne laisse aucune place au calcul pour les hommes du sélectionneur national, condamnés à réaliser un parcours quasi parfait pour espérer la qualification.",
      "Les supporters togolais, eux, restent mobilisés : les réseaux sociaux se sont enflammés dès l'annonce, avec des messages d'encouragement pour l'équipe nationale.",
      "Le calendrier des rencontres sera dévoilé dans les prochaines semaines par la Confédération africaine de football."
    ]
  },
  {
    id: 3,
    title: "Foire Made in Togo : la 7e édition ouverte à Lomé",
    category: "economie",
    excerpt: "Des centaines d'exposants mettent en avant le savoir-faire local au Centre togolais des expositions.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-12",
    readTime: 3,
    tags: ["Made in Togo", "Économie", "Lomé"],
    body: [
      "La 7e édition de la Foire Made in Togo a ouvert ses portes à Lomé, réunissant des centaines d'exposants venus présenter le meilleur du savoir-faire national.",
      "Agroalimentaire, cosmétiques, artisanat, textile : tous les secteurs de la production locale sont représentés, avec un accent particulier sur la transformation des produits agricoles.",
      "Les organisateurs espèrent dépasser les chiffres de fréquentation de l'an dernier et confirmer l'événement comme une vitrine incontournable du consommer local.",
      "La foire se poursuit jusqu'à la fin de la semaine, avec des animations et des rencontres d'affaires au programme."
    ]
  },
  {
    id: 4,
    title: "Rougeole-rubéole : plus de 2,2 millions d'enfants ciblés par la campagne",
    category: "sante",
    excerpt: "Le ministère de la Santé déploie une vaste campagne de vaccination sur tout le territoire.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-11",
    readTime: 4,
    tags: ["Vaccination", "Santé publique"],
    body: [
      "Le ministère de la Santé a lancé une campagne nationale de vaccination contre la rougeole et la rubéole, visant plus de 2,2 millions d'enfants à travers le pays.",
      "Des équipes mobiles sillonnent les régions, appuyées par les centres de santé communautaires, pour atteindre les zones les plus reculées.",
      "Les autorités sanitaires rappellent que la vaccination reste le moyen le plus efficace de prévenir ces maladies, et appellent les parents à faire vacciner leurs enfants.",
      "Un numéro vert a été mis en place pour répondre aux questions des familles sur le déroulement de la campagne."
    ]
  },
  {
    id: 5,
    title: "Rentrée scolaire 2026-2027 : le calendrier officiel fixé au 14 septembre",
    category: "societe",
    excerpt: "Le ministère de l'Éducation dévoile les dates clés de la nouvelle année scolaire.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-10",
    readTime: 3,
    tags: ["Éducation", "Rentrée"],
    body: [
      "Le ministère de l'Éducation a officialisé le calendrier de l'année scolaire 2026-2027, avec une rentrée fixée au 14 septembre pour l'ensemble du territoire.",
      "Les examens nationaux conservent leurs créneaux habituels, et le calendrier des congés a été légèrement ajusté pour tenir compte des fêtes religieuses.",
      "Les syndicats d'enseignants saluent la publication anticipée du calendrier, qui permet aux établissements de mieux préparer l'accueil des élèves.",
      "Reste la question des effectifs dans certaines zones rurales, où les autorités promettent des recrutements complémentaires avant la rentrée."
    ]
  },

  /* ---- Politique ---- */
  {
    id: 6,
    title: "Assemblée nationale : la session budgétaire s'ouvre sur fond de réformes",
    category: "politique",
    excerpt: "Les députés entament l'examen du projet de loi de finances dans un contexte de réformes institutionnelles.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-09",
    readTime: 5,
    tags: ["Assemblée", "Budget"],
    body: [
      "La session budgétaire de l'Assemblée nationale s'est ouverte cette semaine, avec à l'ordre du jour l'examen du projet de loi de finances pour l'exercice à venir.",
      "Les débats s'annoncent animés, l'opposition ayant déjà annoncé son intention de décortiquer chaque chapitre du document budgétaire.",
      "Au-delà des chiffres, cette session sera aussi l'occasion d'évaluer l'état d'avancement des réformes institutionnelles engagées ces derniers mois.",
      "Le vote final est attendu avant la fin de la session, conformément aux délais constitutionnels."
    ]
  },
  {
    id: 7,
    title: "Décentralisation : les nouvelles communes peaufinent leur feuille de route",
    category: "politique",
    excerpt: "Élus locaux et administration centrale se concertent sur le transfert des compétences.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-08",
    readTime: 4,
    tags: ["Décentralisation", "Communes"],
    body: [
      "Le processus de décentralisation entre dans une phase décisive, avec les nouvelles communes qui peaufinent leur feuille de route pour les mois à venir.",
      "La question du transfert effectif des compétences et des ressources reste au cœur des discussions entre élus locaux et administration centrale.",
      "Plusieurs maires plaident pour un accompagnement renforcé en matière de gestion budgétaire et de planification urbaine.",
      "Une feuille de route commune devrait être validée avant la fin de l'année."
    ]
  },

  /* ---- Économie ---- */
  {
    id: 8,
    title: "Port de Lomé : le trafic conteneurs en hausse sur les neuf premiers mois",
    category: "economie",
    excerpt: "La plateforme portuaire confirme son statut de hub régional avec des volumes en progression.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-07",
    readTime: 4,
    tags: ["Port", "Commerce"],
    body: [
      "Le Port autonome de Lomé affiche des résultats en nette progression, avec un trafic conteneurs en hausse sur les neuf premiers mois de l'année.",
      "Cette performance confirme le positionnement de la plateforme comme hub logistique majeur pour l'Afrique de l'Ouest.",
      "Les investissements récents dans les infrastructures de manutention et la digitalisation des procédures portent leurs fruits, avec des délais de traitement réduits.",
      "Les opérateurs tablent sur une fin d'année encore plus dynamique, portée par la saison des importations."
    ]
  },
  {
    id: 9,
    title: "Fintech : les paiements mobiles franchissent un nouveau cap au Togo",
    category: "economie",
    excerpt: "L'adoption du mobile money continue sa progression, portée par les services marchands.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-06",
    readTime: 3,
    tags: ["Fintech", "Mobile money"],
    body: [
      "Les paiements mobiles franchissent un nouveau cap au Togo, avec des volumes de transactions en forte croissance sur l'année écoulée.",
      "Au-delà des transferts entre particuliers, ce sont désormais les paiements marchands qui tirent la croissance du secteur.",
      "Les commerçants, y compris dans l'informel, adoptent massivement ces solutions qui simplifient les encaissements et sécurisent les fonds.",
      "Les régulateurs suivent de près cette expansion, avec un cadre qui évolue pour accompagner l'innovation tout en protégeant les usagers."
    ]
  },
  {
    id: 10,
    title: "Agriculture : la campagne cotonnière démarre sous de bons auspices",
    category: "economie",
    excerpt: "Les producteurs visent une récolte record après une saison des pluies favorable.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-05",
    readTime: 4,
    tags: ["Coton", "Agriculture"],
    body: [
      "La campagne cotonnière démarre sous de bons auspices, avec des producteurs qui visent une récolte record après une saison des pluies globalement favorable.",
      "Les intrants ont été distribués à temps dans la plupart des zones de production, un point que les organisations paysannes saluent.",
      "Le prix d'achat au producteur, fixé avant le démarrage de la campagne, est jugé encourageant par les faitières agricoles.",
      "Les premières estimations de production seront affinées dans les prochaines semaines, au fil des récoltes."
    ]
  },

  /* ---- Société ---- */
  {
    id: 11,
    title: "Lomé : les embouteillages au cœur d'un nouveau plan de circulation",
    category: "societe",
    excerpt: "La municipalité annonce des mesures pour fluidifier le trafic aux heures de pointe.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-04",
    readTime: 3,
    tags: ["Lomé", "Circulation"],
    body: [
      "Face à l'aggravation des embouteillages, la municipalité de Lomé annonce un nouveau plan de circulation pour fluidifier le trafic aux heures de pointe.",
      "Parmi les mesures envisagées : la réorganisation des carrefours les plus saturés et le renforcement de la présence des agents de régulation.",
      "Les usagers, eux, réclament des solutions structurelles, notamment le développement des transports en commun.",
      "Une phase de concertation avec les syndicats de transporteurs est prévue avant la mise en œuvre définitive."
    ]
  },
  {
    id: 12,
    title: "Eau potable : de nouveaux forages pour les quartiers périphériques",
    category: "societe",
    excerpt: "Le programme d'extension du réseau d'eau se poursuit dans le Grand Lomé.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-03",
    readTime: 3,
    tags: ["Eau", "Infrastructures"],
    body: [
      "Le programme d'extension du réseau d'eau potable se poursuit dans le Grand Lomé, avec la réalisation de nouveaux forages dans les quartiers périphériques.",
      "Ces infrastructures doivent améliorer l'accès à l'eau pour des milliers de ménages jusque-là mal desservis.",
      "Les travaux, financés dans le cadre d'un partenariat avec des bailleurs internationaux, devraient s'achever dans les prochains mois.",
      "Les associations de consommateurs restent vigilantes sur la qualité de l'eau distribuée et la régularité du service."
    ]
  },

  /* ---- Culture ---- */
  {
    id: 13,
    title: "Festival des Divinités Noires : Aného se prépare à accueillir le monde",
    category: "culture",
    excerpt: "La cité historique s'apprête à vibrer au rythme des traditions vaudou.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-02",
    readTime: 4,
    tags: ["Festival", "Traditions"],
    body: [
      "Aného se prépare à accueillir une nouvelle édition du Festival des Divinités Noires, rendez-vous majeur des traditions vaudou et du patrimoine culturel.",
      "Au programme : cérémonies rituelles, danses traditionnelles, expositions d'art et rencontres entre dignitaires coutumiers.",
      "L'événement attire chaque année des visiteurs venus de tout le continent et de la diaspora, curieux de découvrir ces pratiques ancestrales.",
      "Les organisateurs promettent une édition encore plus ambitieuse, avec un accent mis sur la transmission aux jeunes générations."
    ]
  },
  {
    id: 14,
    title: "Cinéma togolais : trois films sélectionnés dans des festivals internationaux",
    category: "culture",
    excerpt: "Le 7e art togolais gagne en visibilité sur la scène internationale.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-10-01",
    readTime: 3,
    tags: ["Cinéma", "Festivals"],
    body: [
      "Trois productions togolaises ont été sélectionnées dans des festivals internationaux de cinéma, une première qui témoigne de la vitalité du 7e art national.",
      "Ces sélections récompensent des années d'efforts de jeunes réalisateurs qui tournent souvent avec des moyens limités.",
      "Les professionnels du secteur y voient un signal fort pour attirer davantage de financements vers la production locale.",
      "Les dates de projection seront communiquées dans les prochaines semaines."
    ]
  },

  /* ---- Sport ---- */
  {
    id: 15,
    title: "Basketball : les championnats nationaux reprennent avec des ambitions",
    category: "sport",
    excerpt: "La nouvelle saison s'ouvre avec un plateau relevé et des clubs renforcés.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-30",
    readTime: 3,
    tags: ["Basketball"],
    body: [
      "Les championnats nationaux de basketball reprennent avec des ambitions affichées, des clubs renforcés et un plateau jugé relevé par les observateurs.",
      "La fédération mise sur une meilleure organisation et une médiatisation accrue pour attirer un public plus large dans les salles.",
      "Plusieurs jeunes talents, révélés lors des dernières compétitions de jeunes, sont attendus au tournant cette saison.",
      "Le coup d'envoi est prévu ce week-end, avec des affiches prometteuses dès la première journée."
    ]
  },

  /* ---- Technologie ---- */
  {
    id: 16,
    title: "Fibre optique : la couverture s'étend aux villes secondaires",
    category: "technologie",
    excerpt: "Les opérateurs accélèrent le déploiement de la fibre hors de Lomé.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-29",
    readTime: 3,
    tags: ["Fibre", "Internet"],
    body: [
      "La couverture en fibre optique s'étend désormais aux villes secondaires, les opérateurs accélérant le déploiement hors de la capitale.",
      "Cette extension doit réduire la fracture numérique territoriale et offrir un accès haut débit à des milliers de nouveaux foyers et entreprises.",
      "Les prix des abonnements restent toutefois un sujet de préoccupation pour les associations de consommateurs.",
      "Les autorités de régulation promettent de veiller à une concurrence saine sur ce marché en pleine expansion."
    ]
  },

  /* ---- International ---- */
  {
    id: 17,
    title: "CEDEAO : un sommet extraordinaire convoqué sur la situation régionale",
    category: "international",
    excerpt: "Les chefs d'État de la sous-région se réunissent pour examiner les dossiers sécuritaires.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-28",
    readTime: 4,
    tags: ["CEDEAO", "Diplomatie"],
    body: [
      "Un sommet extraordinaire de la CEDEAO a été convoqué pour examiner la situation sécuritaire et politique dans la sous-région.",
      "Les chefs d'État devront se prononcer sur plusieurs dossiers sensibles, dont la lutte contre le terrorisme et la situation humanitaire dans certaines zones.",
      "Les observateurs attendent des décisions concrètes, au-delà des déclarations d'intention habituelles.",
      "Le Togo, qui joue un rôle diplomatique actif dans la sous-région, devrait y défendre ses positions sur le dialogue et la médiation."
    ]
  },
  {
    id: 18,
    title: "Climat : l'Afrique de l'Ouest face à des pluies de plus en plus erratiques",
    category: "international",
    excerpt: "Les experts alertent sur l'impact du dérèglement climatique sur les récoltes.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-27",
    readTime: 4,
    tags: ["Climat", "Agriculture"],
    body: [
      "L'Afrique de l'Ouest fait face à des régimes de pluies de plus en plus erratiques, avec des conséquences directes sur les récoltes et la sécurité alimentaire.",
      "Les experts du climat appellent à accélérer l'adaptation de l'agriculture, notamment via des variétés résistantes et des systèmes d'alerte précoce.",
      "Les petits producteurs, les plus exposés, peinent à absorber ces chocs répétés sans filets de sécurité adaptés.",
      "La prochaine conférence climatique sera l'occasion pour les pays de la région de porter leurs revendications en matière de financement de l'adaptation."
    ]
  },

  /* ---- Diaspora ---- */
  {
    id: 19,
    title: "Diaspora : les transferts de fonds battent un nouveau record",
    category: "diaspora",
    excerpt: "Les envois des Togolais de l'étranger continuent de croître et soutiennent l'économie.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-26",
    readTime: 4,
    tags: ["Transferts", "Diaspora"],
    body: [
      "Les transferts de fonds de la diaspora togolaise battent un nouveau record, confirmant leur rôle de pilier de l'économie nationale.",
      "Ces envois financent aussi bien la consommation des ménages que des investissements dans l'immobilier et les petites entreprises.",
      "Les autorités multiplient les initiatives pour canaliser cette manne vers des projets productifs, avec des guichets dédiés aux investisseurs de la diaspora.",
      "Reste le coût des transferts, que les organisations de migrants jugent encore trop élevé sur certains corridors."
    ]
  },
  {
    id: 20,
    title: "Canada : la communauté togolaise de Vancouver se mobilise pour la rentrée",
    category: "diaspora",
    excerpt: "Associations et familles organisent la rentrée des nouveaux arrivants.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-25",
    readTime: 3,
    tags: ["Canada", "Communauté"],
    body: [
      "La communauté togolaise de Vancouver se mobilise pour accompagner la rentrée des nouveaux arrivants, entre accueil, orientation et aide à l'installation.",
      "Les associations communautaires organisent des rencontres d'information sur le logement, l'emploi et la scolarisation des enfants.",
      "Un réseau de parrainage met en relation les nouveaux venus avec des familles installées de longue date.",
      "Les organisateurs appellent les volontaires à se manifester pour renforcer les équipes d'accueil."
    ]
  },

  /* ---- Santé ---- */
  {
    id: 21,
    title: "Paludisme : la distribution de moustiquaires s'intensifie avant la saison des pluies",
    category: "sante",
    excerpt: "Les autorités sanitaires anticipent le pic saisonnier avec une campagne de masse.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-24",
    readTime: 3,
    tags: ["Paludisme", "Prévention"],
    body: [
      "À l'approche de la saison des pluies, les autorités sanitaires intensifient la distribution de moustiquaires imprégnées pour lutter contre le paludisme.",
      "Cette campagne de masse cible en priorité les femmes enceintes et les enfants de moins de cinq ans, les plus vulnérables.",
      "Les agents de santé communautaires sont mobilisés pour sensibiliser les ménages à l'utilisation correcte des moustiquaires.",
      "Les dernières données montrent une baisse encourageante des cas graves, mais les efforts doivent se poursuivre."
    ]
  },
  {
    id: 22,
    title: "Hôpitaux : un plan d'urgence pour réduire les délais d'attente",
    category: "sante",
    excerpt: "Le ministère annonce des mesures pour désengorger les services d'urgence.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-23",
    readTime: 4,
    tags: ["Hôpitaux", "Urgences"],
    body: [
      "Le ministère de la Santé annonce un plan d'urgence pour réduire les délais d'attente dans les services hospitaliers, en particulier aux urgences.",
      "Le plan prévoit le renforcement des équipes de garde, la réorganisation des circuits patients et l'ouverture de consultations avancées.",
      "Les syndicats du personnel soignant, consultés sur le dispositif, demandent des garanties sur les moyens humains et matériels.",
      "Un premier bilan sera dressé dans trois mois pour ajuster les mesures si nécessaire."
    ]
  },

  /* ---- Politique (suite) ---- */
  {
    id: 23,
    title: "Élections locales : le chronogramme électoral se précise",
    category: "politique",
    excerpt: "La commission électorale dévoile les grandes étapes du prochain scrutin local.",
    image: "",
    author: "Rédaction ACTUEL",
    date: "2026-09-22",
    readTime: 4,
    tags: ["Élections", "Communes"],
    body: [
      "La commission électorale a dévoilé les grandes étapes du chronogramme des prochaines élections locales, très attendues dans les communes.",
      "La révision des listes électorales ouvrira la séquence, suivie du dépôt des candidatures et de la campagne officielle.",
      "Les partis politiques sont invités à préparer leurs dossiers dans les délais pour éviter les contentieux de dernière minute.",
      "Les observateurs nationaux et internationaux seront conviés à suivre l'ensemble du processus."
    ]
  }
];
