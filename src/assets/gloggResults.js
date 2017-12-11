// Raw data
const data = [
  {
    glogg: 1,
    name: 'Skogsglögg',
    producer: 'Grythyttan',
    color: 'Vinröd, plommon',
    scent: 'Russin, äpple',
    expectedFlavor: 'Russin, kanel och citrus',
    actualFlavor: 'Syrligt, äpple, russin, plommon, citrus',
    comment: '',
    link:
      'https://www.systembolaget.se/dryck/aperitif-dessert/grythyttan-9646001',
    alc: 14.5,
    price: 93,
    scores: [3, 4, 3, 2, 4, 4, 2, 2, 1, 2, 3, 2, 3, 2, 3, 5, 3, 2]
  },
  {
    glogg: 2,
    name: 'Ekologisk vit vinglögg',
    producer: 'Saturnus',
    color: 'Flädersaft',
    scent: 'Blommigt, sött, fläder?',
    expectedFlavor: 'Äpple, fläder, citrus',
    actualFlavor:
      'Lite diskret, citron, grönt äpple, fläder, sött, mango, kardemumma',
    comment: '',
    link:
      'https://www.systembolaget.se/dryck/aperitif-dessert/saturnus-1893-9013701',
    alc: 12.5,
    price: 85,
    scores: [1, 5, 5, 3, 3, 3, 3, 1, 5, 4, 2, 3, 3, 1, 4, 3, 2, 3]
  },
  {
    glogg: 3,
    name: 'Old Delhi, smak av mango, spiskummin och chili',
    producer: 'Blossa',
    color: '',
    scent: 'Mango, ananas, banan',
    expectedFlavor: 'Mango, len, apelsin',
    actualFlavor:
      'Besk, sträv, citron. Eftersmak av ananas, aprikos och grapefrukt',
    comment: '',
    link:
      'https://www.systembolaget.se/dryck/aperitif-dessert/blossa-17-8658901',
    alc: 15,
    price: 109,
    scores: [2, 2, 4, 3, 3, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, undefined, 2, 3]
  },
  {
    glogg: 4,
    name: 'God Jul Glögg (Världens barn)',
    producer: 'Saturnus',
    color: 'Plommon-röd',
    scent: 'Granskott, körsbär, plommon',
    expectedFlavor: 'Körsbär, russin',
    actualFlavor: 'Äpple, körsbär, hallon. Eftersmak av jordgubbssylt',
    comment: 'Lite för söt',
    link:
      'https://www.systembolaget.se/dryck/alkoholfritt/god-jul-glogg-191701',
    alc: 0.3,
    price: 27,
    scores: [3, 4, 5, undefined, 1, 3, 3, 4, 5, 4, 4, 3, 4, 1, 4, 4, 2, 4, 5]
  },
  {
    glogg: 5,
    name: 'Glühwein',
    producer: 'Katzenhütte',
    color: 'Mörkröd',
    scent: 'Vin',
    expectedFlavor: 'Russin, körsbär',
    actualFlavor: 'Citrus, strävt, blåbär, kråkbär! Vin!',
    comment: '',
    link:
      'https://www.systembolaget.se/dryck/aperitif-dessert/katzenhutte-9012601',
    alc: 10,
    price: 59,
    scores: [2, 4, 1, 2, 3, 1, 2, 3, 3, 3, 2, 2, 2, 3, 2, 5, 2, 3, 3]
  },
  {
    glogg: 6,
    name: 'Äppelglögg',
    producer: 'Vinfabriken',
    color: 'Äppeljuice',
    scent: 'Äppelpaj, blomsteräng',
    expectedFlavor: 'Äpple, citronen, fläder, vanilj, kanel',
    actualFlavor: 'Äpple, kanel, vanilj, gosig, citron, russin',
    comment: 'Snäll, bra nybörjarglögg!',
    link:
      'https://www.systembolaget.se/dryck/aperitif-dessert/vinfabrikens-appelglogg-9015401',
    alc: 11,
    price: 85,
    scores: [4, 3, 3, 3, 3, 2, 5, 5, 4, 3, 4, 4, 3, 3, 3, 5, 3, 4, 4]
  },
  {
    glogg: 7,
    name: 'Starkvinsglögg Vit',
    producer: 'Blossa',
    color: '',
    scent: 'Äpple, nöt',
    expectedFlavor: 'Äpple, starkt, whiskey-toner',
    actualFlavor: 'Vanilj, äpple, nöt, syrlig, päron',
    comment: 'POW! Men sen en fin avslutning.',
    link:
      'https://www.systembolaget.se/dryck/aperitif-dessert/blossa-starkvinsglogg-9651901',
    alc: 15,
    price: 89,
    scores: [4, 5, 1, 3, 4, 3, 0, 2, 2, 2, 2, 3, 1, 3, 2, 1, 3, 3, 5]
  },
  {
    glogg: 8,
    name: 'Ekologisk Alkoholfri Glögg',
    producer: 'Blossa',
    color: 'Husets röda',
    scent: 'Rött',
    expectedFlavor: 'Skit',
    actualFlavor: 'Inte ett skit',
    comment: '',
    link: 'https://www.systembolaget.se/dryck/alkoholfritt/blossa-1192501',
    alc: 0.5,
    price: 39,
    scores: [undefined, 1, 2, undefined, 3, 3, 4, 4, 5, 3, 4, 4, 5, 2, 4, 4, 4, 5, 3]
  }
];

// Export result
export default data;
