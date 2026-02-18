// import BASE_URL from "../pages/config";

const products = [
  // SB herbals product
    // Ayurvedic Syrups, Drops & Malth
    {
    // 1
    productId: "Apt_Act_syrup",
    name: "Apt-Act syrup",
    // price: 60,
    // image: "/Images/SBherbals/EZYDAY-PD.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Apt-Act syrup/Apt-Act syrup.jpg",
    description: `
      Appetizer & Digestive
      भूख बढ़ाने व पाचन में उपयोगी

      Compostion:
      Each 5 ml. contains:
      Pudina 100 mg, Sonth 100mg, Harad 50 mg, Amla 50 mg, Ajwain 50 mg, Chitrak 50 mg, Jeera 50 mg, Nagar Motha 50 mg, Vidang 50 mg, Pippli 50 mg, Saunf 50 mg, Navsar 25 mg, Saindha Namak 20 mg, Piplamool 10 mg, kappor 5 mg, Loh Bhasam 2 mg, Syrup Base q.s., Preservatives q.s.

      Indications:
      For Stomach Troubles like Indigestion, Acitidy,
      Constipation, Loss of Appetite, Dyspepsia, Chest
      burn & Short of Abdominal Pains.
    `,
    slug: "Apt_Act_syrup",
    variants: [
      { size: 200, unit: "ml", price: 145 },
    ]
  },

  {
    // 2
    productId: "Asthma_Act_Syrup",
    name: "Asthma Act Syrup",
    // price: 50,
    // image: "/Images/SBherbals/Oesto-flex.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Asthama act syrup/Asthma Act Syrup.jpg",
    description: `
    Advanced Formula For Respiratory Support
    दमा तथा एलेर्जी में लाभकारी

    Each 10ml contains:
    Somlata (Ephedra vulgaris)  150 mg
    Vasaka (Adhatoda vasica)  200 mg
    Tulsi (Ocimum sanctum)  150 mg
    Yashtimadhu (Glycyrrhiza glabra)  150 mg
    Haridra (Curcuma longa) 100 mg
    Kantakari (Solanum xanthocarpum) 120 mg
    Bharangi (Clerodendrum serratum) 120 mg
    Shunthi (Zingiber officinale) 100 mg
    Pippali (Piper longum) 80 mg
    Trikatu (Pippali + Maricha + Shunthi) 80 mg
    Talispatra (Ables webbiana) 80 mg
    Banafsha (Viola odorata)  80 mg

    Useful in:
    • Asthama • Bronchitis • Sinusitis • Cough • Allergies
    • Chronic respiratory issues • Running nose • Wheezing cold
    `,
    slug: "Asthma_Act_Syrup",
    variants: [
      { size: 200, unit: "ml", price: 170 },
    ]
  },

  {
    // 3
    productId: "Cyst_yog_syrup",
    name: "Cyst-yog syrup",
    // price: 80,
    // image: "/Images/SBherbals/CYST_YOG-600x600-2.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Cyst-yog syrup/Cyst-yog syrup.jpg",
    description: `
    SPECIALLY FORMULATED FOR DISSOLVING ANY TYPE OF CYST IN OVARY, BREAST, UTERUS.

गर्भाशय में गांठ और स्तन की सूजन तथा गांठ में उपयोगी

Each 10ml syrup contains aqua extracts of :

Ushba (Sariva) – Hemidesmus indicus – Rt – 800 mg
Dhamasa – Fagonia arabica – W.P. – 400 mg
Kachnar – Bauhinia variegate – Bk – 400 mg
Majishta – Rubia cordifolia – Rt – 400 mg
Saunf – Foeniculum vulgara – Sd – 200 mg
Unnab – Zizyphus jujuba – Frt – 250 mg
Sapistan – Cordiamyxa – Frt – 125 mg
Hansraj – Adiantum innulatum – W.P. – 100 mg
Gajwan – Onosmabracteatum – W.P. – 100 mg

Useful in :
Benign tumors, Cysts in overy, Breast, Uterus Cysts in men, Lipoma, Fibroid and Breast Swelling etc.
    `,
    slug: "Cyst_yog_syrup",
    variants: [
      { size: 200, unit: "ml", price: 210 },
    ]
  },

  {
    // 4
    productId: "Ezyday_pd",
    name: "Ezyday pd",
    // price: 90,
    // image: "/Images/SBherbals/dentoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Ezyday pd/Ezyday pd.jpg",
    description: `
TONIC FOR KIDS

LAXATIVE & DIGESTIVE TONIC FOR KIDS
बच्चों में कब्ज एवं
अपच में लाभदायक

Each 5ml. contains aqua extracts of :
Mullethi 125 mg, Amaltas 125 mg, Munabka 125 mg,
Katuki 125 mg, Amla 125 mg, Harad 125 mg,
Bahera 125 mg, Patol 125 mg,
Preservative : Sodium Benzoate 0.5%,
MPS 0.2%, PPS 0.02%

Indications :
• Improves concentration
• Enhances memory
• Strengthens the mind`,
    slug: "Ezyday_pd",
    variants: [
      { size: 100, unit: "ml", price: 85 },
    ]
  },

  {
    // 5
    productId: "Gripvon_grip_water",
    name: "Gripvon grip water",
    // price: 80,
    // image: "/Images/SBherbals/Ibs set.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Gripvob grip water/Gripvon grip water.jpg",
    description: `
GIVES INSTANT RELIEF TO INFANTS AND BABIES CRYING DUE TO GRIPE AND STOMACH PAIN CAUSED BY GAS, ACIDITY AND INDIGESTION.

ग्राइप वाटर

Composition:
Each 5 ml contains: 50 mg
Sodium bicarbonate – 5 mg
Foeniculum vulgare – 3 mg
Glycyrrhiza glabra – 5 mg
Mentha piperita – 3 mg
Anethum graveolens – q.s.
Syrup base

Indications: Indigestion, Abdominal Pain, Acidity, Loss of Appetite, Helps in flatulence disorder of the bowels, Vomiting and diarrhoea at the time of teething and other complaints, Keeps baby healthy and growing.`,
    slug: "Gripvon_grip_water",
    variants: [
      { size: 150, unit: "ml", price: 150 }
    ]
  },

  {
    // 6
    productId: "Mediliv_Drops",
    name: "Mediliv Drops",
    // price: 80,
    // image: "/Images/SBherbals/CYST_YOG-600x600-2.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Mediliv Drops/Mediliv Drops.jpg",
    description: `
LIVER PROTECTOR DROPS

बच्चों में लिवर रोग, हेपेटाइटिस,
भूख न लगने में उपयोगी

Each 1 ml. contains aqua extracts of :
Kutki 16 mg, Punarnava 16 mg, Bhrungraj 16 mg,
Bhumiamalaki 16 mg, Yashtimadhuk 16 mg,
Guduchi 16 mg, Daruharidra 8 mg, Kakmachi 8 mg,
Sharpunkha 8 mg, Sunthi 8 mg, Marica 8 mg,
Pippali 8 mg, Trifla 20 mg, Henna 8 mg,
Indian Sorrel 8 mg, Nisoth 8 mg, Arjuna 16 mg

Indications :
Loss of appetite, Jaundice, Viral Hepatitis.`,
    slug: "Mediliv_Drops",
    variants: [
      { size: 30, unit: "ml", price: 65 }
    ]
  },

  {
    // 7
    productId: "Medliv_plus",
    name: "Medliv plus",
    // price: 90,
    // image: "/Images/SBherbals/dentoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Medliv plus/Medliv plus.jpg",
    description: `
FOR HEALTHY LIVER & ENZYME FUNCTION

लिवर विकार, अपच, पीलिया और
खून की कमी में उपयोगी

Composition:
Each 10ml contains:

Bhringraj – 400 mg
Sharpunkha – 400 mg
Rohitaka – 400 mg
Arjun – 400 mg
Ashwagandha – 300 mg
Chirayata – 300 mg
Kalmegh – 200 mg
Makol – 200 mg
Vavding – 200 mg
Pitt Papda – 200 mg
Bhumi Amla – 200 mg
Pappaya – 200 mg
Daru Haldi – 100 mg

Punkha – 100 mg
Tulsi – 100 mg
Kasni – 100 mg
Giloy – 100 mg
Harhar – 100 mg
Baheda – 100 mg
Amla – 100 mg
Kutki – 100 mg
Godanti – 100 mg
Chitrak Mool – 100 mg
Elaichi – 50 mg

Flavoured Syrupy Base – q.s.
Approved Preservatives added

Indications:
Loss of appetite, Jaundice, Viral Hepatitis.

`,
    slug: "Medliv_plus",
    variants: [
      { size: 200, unit: "ml", price: 160 }
    ]
  },
  
  {
    // 8
    productId: "Medliv_DS_Liver_Tonic",
    name: "Medliv-DS Liver Tonic",
    // price: 60,
    // image: "/Images/SBherbals/EZYDAY-PD.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Medliv-DS Liver Tonic/Medliv-DS Liver Tonic.jpg",
    description: `
FORMULA FOR ENLARGED LIVER, LIVER DISORDER

पीलिया, लीवर के विकारों में उपयोगी,
लीवर में जैव रासायनिक स्थिति को सामान्य
करने के लिए उत्तम औषधी

Each 10 ml contains :

Bhumyamalaki 750 mg,
Bhringraj 750 mg,
Kasni 600 mg,
Punarnava 450 mg,
Kalmegh 300 mg,
Guduchi 300 mg,
Rakta Rohida 300 mg,
Revandchini 200 mg,
Pitpapara 200 mg,
Daruhaldi 200 mg,
Haritaki 150 mg,
Vidang 150 mg,
Chitrak 150 mg,
Sharpunkha 120 mg,
Tulsi 100 mg,
Neem Chhal 100 mg,
Katuka 100 mg,
Kachur 100 mg,
Nishoth 100 mg,
Makoi 80 mg,
Gokhru 70 mg,
Kumari 50 mg,
Amalaki 50 mg,
Yashtimadhu 50 mg,
Arni 50 mg,
Arjuna 20 mg,
BiranjasiPha 20 mg,
Jhau 20 mg,
Saunf 20 mg,
Kasondi 20 mg

Usage and Benefits :

• Increases Bile Flow
• Reduces Bilirubin Level
• Reverses Hepatic Cell Damage
• Improves Cell Function & Immunity

`,
    slug: "Medliv_DS_Liver_Tonic",
    variants: [
      { size: 200, unit: "ml", price: 170 }
    ]
  },

  {
    // 9
    productId: "Nefrawin_kft_syrup",
    name: "Nefrawin kft syrup",
    // price: 150,
    // image: "/Images/SBherbals/WARTCURE.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Nefrawin kst syrup/Nefrawin kft syrup.jpg",
    description: `
A COMPLETE KIDNEY CARE SYRUP

स्वस्थ गुर्दे, मूत्र प्रणाली को मजबूत बनाये
एवं पीठ के निचले हिस्से के दर्द में उपयोगी

Each 10ml syrup contains :

Punernava 1000 mg,
Kasni 1000 mg,
Makoya 600 mg,
Guduchi 500 mg,
Kamal Kakdi 500 mg,
Palash 400 mg,
Gokhru 300 mg,
Kamal 300 mg,
Sirisa 200 mg,
Netrabala 200 mg,
Haridra 200 mg,
Sigru 300 mg,
Ushira 200 mg,
Anantmool 150 mg,
Dhania 150 mg,
Varun 100 mg,
Chaulai 100 mg,
Revand Chini 100 mg,
Kakri Beej 100 mg,
Papita Jad 100 mg,
Papita 50 mg,
Panchtrin Mool 50 mg,
Sheetal Chini 90 mg,
Pine Apple 0.5 ml,
Lauki 0.5 ml,
Dhania 0.5 ml,
Amla 0.5 ml,
Swet Prapati 100 mg

Indications :

Nephritis, Nephropathy, Impaired GFR, Poor Renal Function, Anasarca, Odema & Other Urinary Disorders.`,
    slug: "Nefrawin_kft_syrup",
    variants: [
      { size: 200, unit: "ml", price: 295 }
    ]
  },

  {
    // 10
    productId: "Otiherb_ear_drops",
    name: "Otiherb ear drops",
    // price: 90,
    // image: "/Images/SBherbals/dentoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Otiherb ear drops/Otiherb ear drops.jpg",
    description: `
NATURAL REMEDY FOR EAR CARE
ओटीहर्ब कान की ड्राप

Each ml Drop Contains:-
Gangeruki (Grewia populifolia) St. Bk. – 3.50 %
Kelamool (Musa acuminate) Rt. – 3.50 %
Baelgiri (Aegle marmelos) Fr. – 3.50 %
Jalkumbhi (Pistia stratiotes) Rt. – 5.00 %
Sahajan mool (Moringa oleifera) Rt. – 5.00 %
Tulsi Oil (Ocimum sanctum) Wh. Pl. – 5.00 %
Tejbal Oil (Zanthoxylum armatum) St. Bk. – 5.00 %
Sonth Oil (Zingiber officinale) Rz. – 5.00 %
Sathra Oil (Origanum Vulgare) – 5.00 %
Kalaunji Oil (Nigella sativa) Sd. – 5.00 %
Cajuput Oil (Melaleuca cajuputi) – 6.00 %
Neem Oil (Azadirachta Indica) Lf. – 6.00 %
Til oil (Sesamum indicum) – q.s

Indications: Ear Ache, Ear Infection and Congested Ear`,
    slug: "Otiherb_ear_drops",
    variants: [
      { size: 15, unit: "ml", price: 95 }
    ]
  },

  {
    // 11
    productId: "Brain_o_herb_malt",
    name: "Brain-o-herb malt",
    // price: 70,
    // image: "/Images/SBherbals/prostoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Brain-o-herb malt/Brain-o-herb malt.jpg",
    description: `
SHARPENS MEMORY & MIND FOR ALL AGE GROUP
मस्तिष्क की दुर्बलता और याददाश्त की कमजोरी दूर करने में सहायक

Each 10 gm contains extracts equivalent to :

Ashwagandha Root (Withania somifera dunal) – 500 mg
Shankhpushpi Root (Convulvulus pluricantis) – 400 mg
Brahmi Root (Centella asiatica) – 400 mg
Bhringraj (Faant) Root (Eclipta alba) – 400 mg
Jatamansi Root (Nardostachys jatamansi) – 300 mg
Chandan Wood (Santalum album) – 25 mg
Sugandhbala Root (Valeriana wallichii) – 25 mg
Shuddha Shilajeet (Asphaltum punjabinum) – 10 mg
Mishri – q.s.
Malt Base – q.s.

Benefits :

• Strengthens the mind and builds mental immunity
• Improves learning power & retention abilities
• Helps boost memory, concentration and mental clarity
• Fights stress and anxiety
• Helps in treating age related memory loss
• Helps reduces mental stress and effective in treating insomnia
• Powerful brain and nerve vitalizer
• Useful for problems of short term memory loss`,
    slug: "Brain_o_herb_malt",
    variants: [
      { size: 400, unit: "gm", price: 375 }
    ]
  },

  {
    // 12
    productId: "SuperAct_Vital",
    name: "SuperAct Vital",
    // price: 80,
    // image: "/Images/SBherbals/CYST_YOG-600x600-2.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/SuperAct Vital/SuperAct Vital.jpg",
    description: `
AYURVEDIC TASTEFUL MALT
ENRICHED WITH ASHWAGANDHA SHILAJIT

IMPROVES APPETITE •
USEFUL IN ANAEMIA •
GENERAL DEBILITY •
INCREASES IMMUNITY •

रोग प्रतिरोधक क्षमता को बढ़ाने, तनाव,
खून की कमी और शारीरिक कमजोरी
को दूर करने में उपयोगी

Each 10 gm contains :

Soyabeej – 100 mg.
Ashwagandha – 100 mg.
Shatavar – 100 mg.
Vidarikand – 100 mg.
Munnaka – 300 mg.
Safed Musli – 50 mg.
Amla – 150 mg.
Kaunch Beej – 30 mg.
Sounth – 40 mg.
Mulethi – 100 mg.

Shankhpushpi – 50 mg.
Akada – 30 mg.
Bael – 50 mg.
Giloy – 20 mg.
Arjuna – 100 mg.
Shilajit Shudha – 10 mg.
Gokhru – 30 mg.
Liquid Glucose Base – Q.S.

EXCIPIENTS: SOD. BENZOATE M.P.S. & P.P.S. FLAVOUR`,
    slug: "SuperAct_Vital",
    variants: [
      { size: 400, unit: "gm", price: 340 }
    ]
  },

  {
    // 13
    productId: "Shilajit_malt",
    name: "Shilajit malt",
    // price: 150,
    // image: "/Images/SBherbals/WARTCURE.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Shilajit malt/Shilajit malt.jpg",
    description: `
शिलाजीत माल्ट

Each 5g contains :
Shilajit 500 mg, Soyabean 200 mg, Ashwagandha 200 mg,
Shatavari 200 mg, Vidhayar 200 mg, Bidarikand 200 mg,
Safed Musli 100 mg, Amla 200 mg, Sounth 100 mg,
Mulethi 200 mg, Shank Pushpi 100 mg,
Kharak 100 mg, Gangeran 200 mg,
Gokhru 200 mg, Amruta 40 mg,
Malt ext 100 mg, Base Liquid Glucose & Malt ext`,
    slug: "Shilajit_malt",
    variants: [
      { size: 400, unit: "gm", price: 380 }
    ]
  },

  {
    // 20 
    productId: "Kidset_drops",
    name: "Kidset drops",
    // price: 60,
    // image: "/Images/SBherbals/STONEACT.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Kidset drops/Kidset drops.jpg",
    description: `
DIGESTIVE TONIC

TONIC FOR HEALTHY GROWTH
पाचन को बढ़ाता है, दस्त, कब्ज और पेट दर्द में राहत, दांतों के निकलने में सहायक

Composition :
Each 1 ml contains extracts of :
Aswagandha 30 mg, Anjeer ext. 30 mg, Sowa ext. 30 mg,
Nagarmoth ext. 20 mg, Khubkalan ext. 20 mg,
Mulethi ext. 20 mg, Varahikand ext. 20 mg,
Vidarikand ext. 20 mg, Jeera ext. 10 mg,
Katad ext. 10 mg, Vach ext. 10 mg, Elaichi ext. q.s.
Flavoured Syrupy base
Colour : Ponceau 4R

Indications :
Abdominal Pain, Colic and griping Pain,
Growth Failure, Indigestion, Anorexia.`,
    slug: "Kidset_drops",
    variants: [
      { size: 30, unit: "gm", price: 52 }
    ]
  },

  {
    // 22
    productId: "Leucoset_syrup",
    name: "Leucoset syrup",
    // price: 60,
    // image: "/Images/SBherbals/Apple cider vinegar.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Leucoset Syrup/Leucoset syrup.jpg",
    description: `
र में उपयोगी

Each 10 ml contains extract from :
Ashok 800 mg, Lodhar 500 mg, Dhaiphool 500 mg,
Shatavar 400 mg, Amla 400 mg, Gokhru 200 mg,
Ashwagandha 200 mg, Daruhaldi 100 mg,
Jatamansi 100 mg

Usage and Benefits :
Leucoset is an ayurvedic herbal product with no side effects. It cures and prevents the leucorrhoea and symptoms associated with it. It cures backache, burning sensation and keeps your energy level high.`,
    slug: "Leucoset_syrup",
    // unit: "ml", // unit type
    variants: [
      { size: 200, unit: "ml", price: 145 }
    ]
  },

  {
    // 36
    productId: "Pregbless_syrup",
    name: "Pregbless syrup",
    // price: 80,
    // image: "/Images/SBherbals/Ibs set.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Pregbless syrup/Pregbless syrup.jpg",
    description: `
FOR MAINTAINING HEALTHY PREGNANCY
स्वस्थ गर्भावस्था बनाए रखने में उपयोगी

Each 10ml. contains aqua extracts of :

Bhadra — Aerva lanata — Wh. Plant — 200mg
Punarnava — Boerhavia diffusa — Root — 200mg
Bala — Sida cordifolia — Root — 200mg
Draksha — Vitis vinifera — Fruit — 200mg
Gokshura — Tribulus terrestris — Fruit — 200mg
Jeeraka — Cuminum cyminum — Fruit — 200mg
Ashwagandha — Withania somnifera — Root — 100mg
Shatavari — Asparagus racemosus — Root — 100mg
Mulethi — Glycyrrhiza glabra — Root — 100mg
Parushaka (Phalsa) — Grewia asiatica — Fruit — 100mg
Brahmi — Bacopa monnieri — Wh. Plant — 100mg

Indication :
Pregbless Womb Nourishing Syrup is thoughtfully crafted to provide holistic support to expecting mothers, promoting the well-being of both mother and child. It contains a perfect blend of herbal ingredients known for their nourishing properties, ensuring the right balance of nutrients for the mother and growing baby.`,
    slug: "Pregbless_syrup",
    variants: [
      { size: 200, unit: "ml", price: 360 }
    ]
  },

{
    // 39
    productId: "Sbron_syrup",
    name: "Sbron syrup",
    // price: 70,
    // image: "/Images/SBherbals/prostoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Sbron syrup/Sbron syrup.jpg",
    description: `
TONIC WITH CALCIUM & IRON
आयरन एवं कैलियम की कमी और विभिन्न प्रकार के एनीमिया में उपयोगी

Composition:
Each 10ml contains extracts from:
Bansa (Adhatoda vasica) 500 mg,
Jeera (Cuminum cyminum) 300 mg,
Saunf (Foeniculum vulgare) 300 mg,
Sowa (Anethum sowa) 300 mg,
Ashwagandha ext. (Withania somnifera) 200 mg,
Khubkalan (Sisymbrium irio) 200 mg,
Anantmool (Hemidesmus indicus) 100 mg,
Manjistha (Rubia cordifolia) 100 mg,
Navsar 50 mg,
Satva Nimbu 20 mg,
Lohasav 2 ml,
Lime Water 2 ml,
Sugar q.s.,
Flavour Syrupy base q.s.

Indications:
Weakness, Anaemia due to iron, Calcium Deficiency and Lack of appetite.`,
    slug: "Sbron_syrup",
    variants: [
      { size: 200, unit: "ml", price: 145 }
    ]
  },

  // Ayurvedic Juices
  {
    // 14
    productId: "Alovera_juice",
    name: "Alovera juice",
    // price: 60,
    // image: "/Images/SBherbals/Apple cider vinegar.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Alovera_juice/Alovera_juice.jpg",
    description: `
COMPLETE DIGESTIVE TONIC

Each 100ml contains:
Ghrit Kumari (Aloe barbadensis) Lv. 98%
Excipients q.s.

Benefits:
• Soothes arthritis pain
• Hydrates the skin
• Reduces high blood pressure & cholesterol
• Lubricates the digestive tracts
• Helpful in curing eczema, burns, inflammation & wounds
• Detoxifies the body
• Stabilizes blood sugar
• Supports immune system
• Boosts physical endurance`,
    slug: "Alovera_juice",
    // unit: "ml", // unit type
    variants: [
      { size: 500, unit: "ml", price: 240 },
    ]
  },
  

  {
    // 15
    productId: "Apple_cider_vinegar_sugar_free",
    name: "Apple cider vinegar - sugar free",
    // price: 90,
    // image: "/Images/SBherbals/dentoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Apple cider vinegar - sugar free/Apple cider vinegar - sugar free.jpg",
    description: `
WITH GINGER AND GARLIC

Each 10ml contains:
Seb Sheet Ras Sidhu — Frt 8 ml
(Apple Cider Vinegar) (Pyrus malus)
Garlic (Allium sativum) — Blb 1 ml
Ginger (Zingiber officinale) — Rzm 1 ml

Useful in:
• Helps Burn Excess Fat
• Helps Boost Immunity
• Helps Improve Skin Health`,
    slug: "Apple_cider_vinegar_sugar_free",
    variants: [
      { size: 500, unit: "ml", price: 520 }
    ]
  },

  {
    // 16
    productId: "Amla_juice",
    name: "Amla juice",
    // price: 80,
    // image: "/Images/SBherbals/CYST_YOG-600x600-2.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Amla juice/Amla juice.jpg",
    description: `
• GOOD FOR IMMUNITY
• EFFECTIVE ANTIOXIDANT

INGREDIENTS :
Pure Amla Juice (Fr.) – 99.8%
(Embelica officinalis)
Preservatives – 0.2%

Benefits
• Prevents premature greying and anti-hairfall
• Improves eye sight • Excellent blood purifier
• Rich in Vitamin C and acts as a power booster
• Strengthens the liver and increases appetite
• Anti ageing • Keeps blood pressure under control
• Makes body slim and smart
• Increases haemoglobin levels
• Effective in skin diseases`,
    slug: "Amla_juice",
    variants: [
      { size: 500, unit: "ml", price: 240 }
    ]
  },

  {
    // 6
    productId: "Arjun_Aswarganda_ras",
    name: "Arjun Aswarganda ras",
    // price: 110,
    // image: "/Images/SBherbals/NervoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Arjun Ashwarganda raj/Arjun Aswarganda ras.jpg",
    description: `
KEEP YOUR HEART & BODY HEALTHY
ह्रदय एवं शरीर को शक्ति वर्धक एवं बलदायक बनाने में सहायक

Composition :
Each 10ml contains aqueous extracts of :
Ashwagandha (Withania somnifera) 5 g
Arjuna (Terminalia arjuna) 5 g

Benefits of Arjuna
• Helps in removal of heart blockage
• Helps maintain healthy cholesterol and Tryglycerides levels
• Helps maintain healthy heart function and blood pressure
• Purifies blood and improves skin glow
• Helps improve body energy levels
• Helps boost immunity
• Helps in relieving mental stress
• Helps overcome weakness and lethargy
• Helps in promoting long lasting stamina`,
    slug: "Arjun_Aswarganda_ras",
    variants: [
      { size: 500, unit: "ml", price: 260 }
    ]
  },

  {
    // 17
    productId: "Giloy_juice",
    name: "Giloy juice",
    // price: 60,
    // image: "/Images/SBherbals/EZYDAY-PD.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Giloy juice/Giloy juice.jpg",
    description: `
NATURAL HEALING JUICE

COMPOSITION :-
Each 10 ml contains water extract of :-
गिलोय – Tinospora cordifolia – 1000 mg – Stem – API
घृतकुमारी – Aloe barbadensis – 500 mg – Pulp – API
हरड़ – Terminalia chebula – 500 mg – Fruit – API
अश्वगंधा – Withania somnifera – 200 mg – Root – API
शतावरी – Asparagus racemosus – 50 mg – Root – API

Colour :- Natural                            – q.s.
Approved preservatives used

Diabetes, Chronic Fever, Typhoid, Dengue Fever, Generalised Tonic`,
    slug: "Giloy_juice",
    variants: [
      { size: 500, unit: "ml", price: 240 }
    ]
  },

  {
    // 18
    productId: "Neem_karela_jamun",
    name: "Neem karela jamun",
    // price: 50,
    // image: "/Images/SBherbals/Oesto-flex.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Neem Karela Jamun/Neem karela jamun.jpg",
    description: `
SKIN CARE, CHOLESTEROL & DIABETIC SPECIAL

Ingredients
Each 10ml. Contains liquid Ext OF:
Neem (Azadirachta indica) – It. 20 mg
Karela (Momordia charantia) – Ft. 100 mg
Jamun (Syzygium cumini) – Ft. 500 mg
Ashwagandha (Withania somnifera) – Rs: 100 mg
Gudmar (Gymnema sylvestre) – It. 200 mg
Preservative added – q.s.

Benefits
• Controls blood sugar level.
• Enhance the body defence mechanism.
• Helps in digestion and strengthens the digestive system.
• It is useful in constipated stools and disease like hemorrhoids (piles).
• It helps in destroying worms present in gastro intestinal tract.
• It works as an appetizer.`,
    slug: "Neem_karela_jamun",
    variants: [
      { size: 500, unit: "ml", price: 240 }
    ]
  },

  {
    // 19
    productId: "Noni_juice",
    name: "Noni juice",
    // price: 80,
    // image: "/Images/SBherbals/CYST_YOG-600x600-2.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Noni juice/Noni juice.jpg",
    description: `
WITH THE BENEFITS OF GARCINIA & WHEATGRASS


Composition Latin Name        Part Used

Noni Ras (Morinda citrifolia) Fr. 95%
Vrikshamla Ras (Garcinia cambogia) Fr. 3%
Wheatgrass Ras (Triticum aestibum) Lf. 2%

Benefits Of Vrikshamla
• Powerful appetite suppressant
• Excellent metabolism booster
• Reduces stomach acidity
• Stops lipid cellular damages
• Improves serotonin levels
• Positive stimulant for brain

Benefits Of Noni Fruit
• Aids in reducing risk of Type-II diabetes
• Stimulates release of digestive enzymes
• Prevents cerebral ischemic stress
• Speeds up healing of wounds
• Improves cerebral blood flow & memory functions
• Protects against cancer & liver diseases`,
    slug: "Noni_juice",
    variants: [
      { size: 500, unit: "ml", price: 330 } 
    ]
  },

  {
    // 32
    productId: "Nirgundi_ras",
    name: "Nirgundi ras",
    // price: 60,
    // image: "/Images/SBherbals/Apple cider vinegar.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Juices/Nirgundi ras/Nirgundi ras.jpg",
    description: `
NATURALLY HELPS REDUCE BODY AND JOINT PAINS (BACK PAIN, SHOULDER PAIN, KNEE PAIN, HANDS AND LEG PAIN , MUSCLE CRAMPS)

वात - व्याधि नाशक एवं दर्द निवारक

Composition :
Each 10ml. Contains extract derived from :

Latin Name                Part Used

Nirgundi (Vites Nigundo) — 1700 mg.
Haldi (Curcuma Longa) — 400 mg.
Harsinger (Nyctanthes arbor tritis) — 400 mg.
Tulsi (Ocimum Sanctum) — 300 mg.

Benefits of Nirgundi
• Naturally helps reduce body and joint pains (back pain, shoulder pain, knee pain, hands and leg pain , muscle cramps)
• Rich in anti inflammatory properties, subdues swelling and inflammation
• Helps control burning sensation in hands and feet
• Helps strengthen bones and muscles`,
    slug: "Nirgundi_ras",
    // unit: "ml", // unit type
    variants: [
      { size: 500, unit: "ml", price: 240 }
    ]
  },

  // Ayurvedic Capsules
  {
    // 20
    productId: "Cyst_yog_capsule",
    name: "Cyst-yog capsule",
    // price: 60,
    // image: "/Images/SBherbals/Apple cider vinegar.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Cyst-yog capsule/Cyst-yog capsule.jpg",
    description: `
SPECIALLY FORMULATED FOR DISSOLVING ANY TYPE OF CYST IN OVARY, BREAST, UTERUS.

गर्भाशय में गांठ और स्तन की सूजन तथा गांठ में उपयोगी

Each capsule contains :
Guggulu (Commiphora mukul) Rsn 240 mg, Kanchanara (Bauhinia variegate) Bk 60 mg, Haritaki (Terminalia chebula) Frt, Vibhitaki (Terminalia bellerica) Frt, Amalaki (Emblica officinalis) Frt 20 mg each, Ginger (Zingiber officinale) Rhz, Maricha (Piper nigrum) Frt, Long pepper (Piper longum) Frt 14 mg each, Varuna (Crataeva nurvala) St Bk 6 mg, Ela (Elettaria cardamomum) Frt, Twak (Cinnamomum zeylanicum) St Bt, Patra (Cinnamomum tamala) Lv 1.5 mg each, Shuddha parad, Shudh Gandhak, Loh Bhasma, Vanga Bhasma, Tamra Bhasma, Kansya Bhasma, Hartal Bhasma, Shankh Bhasma, Kapardak (Kapardika) Bhasma, Chavya (Piper retrofractum) St, Kachur (Curcuma zedoaria) Rz, Val Vidang (Embelia ribes) Frt, Vidhara Beej (Argyreia speciosa) Sd, Pipla Mool (Piper longum) Rt, Patha (Cissampelos pareira) Rt, Hauber (Juniperus communis) Fr, Vach (Acorus calamus) Rz, Elaichi (Elettaria cardamomum) Sd, Devdaru (Cedrus deodara) Ht. Wd., Samudar Namak, Sendha Namak, Sambhar Namak, Vida Namak, Kala Namak 8 mg each.

Useful in :
Benign tumors, Cysts in overy, Breast, Uterus Cysts in men, Lipoma, Fibroid and Breast Swelling etc`,
    slug: "Cyst_yog_capsule",
    // unit: "ml", // unit type
    variants: [
      { size: 30, unit: "capsule", price: 450 }
    ]
  },

  {
    // 21
    productId: "IBS_set",
    name: "IBS set",
    // price: 50,
    // image: "/Images/SBherbals/Oesto-flex.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/IBS set/IBS set.jpg",
    description: `
CAPSULE FOR IRRITABLE BOWEL SYNDROME
इरिटेबल बाउल सिंड्रोम, आंतो के रोग, पेट दर्द, पेट फूलना, इरिटेबल बाउल सिंड्रोम की वजह से होने वाले कब्ज या दस्त में सहायक।

Each capsule contains extract from :
Kutaja (Holarrhena antidysenterica) 1 g
Bilwa (Aegle marmelos) 500 mg
Mustak (C. rotundus) 1 g
Dadima (P. granatum) 1 g
Dhaniya (C. sativum) 250 mg

Indications :
Support health digestion
promotes easy daily bowel movement`,
    slug: "IBS_set",
    variants: [
      { size: 30, unit: "capsule", price: 450 }
    ]
  },

  

  {
    // 22
    productId: "Migraset_capsule",
    name: "Migraset capsule",
    // price: 80,
    // image: "/Images/SBherbals/Ibs set.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Migraset capsule/Migraset capsule.jpg",
    description: `
NATURAL HERBS FOR MIGRAINE & STRESS
माइग्रेन के दर्द में उपयोगी

Composition :
Each 500 mg Capsule contain:
Jatamansi (Nardostachys jatamansi) 80 mg
Tagar (Valeriana wallichii) 50 mg
Guduchi (Tinospora cordifolia) 50 mg
Brahmi (Bacopa monnieri) 50 mg
Shankpushpi (Convolvulus pluricaulis) 50 mg
Sarpagandh (Rauvolfia serpentina) 50 mg
Pippali (Piper longum) 20 mg
Triphala (Emblica officinalis) 10 mg
Kiratatikta (Swertia chirata) 10 mg
Haldi (Curcuma longa) 10 mg
Neem Azadirachta indica) 10 mg
Sonth (Zingiber officinale) 10 mg
Godanti Bhasam (Calcium Sulfate) 40 mg

Useful in :
Migraine, Stress & Headache`,
    slug: "Migraset_capsule",
    variants: [
      { size: 30, unit: "capsule", price: 360 }
    ]
  },

  {
    // 23
    productId: "YouSlim_weight_loss_capsule",
    name: "YouSlim - weight loss capsule",
    // price: 60,
    // image: "/Images/SBherbals/STONEACT.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Youslim - weight loss capsule/YouSlim - weight loss capsule.jpg",
    description: `
WEIGHT LOSS CAPSULES
शरीर के बढ़े हुए वजन को कम करने में सहायक

Each capsule contains :
Vrikshmala 75 mg, Gurmar 50 mg,
Green Tea 50 mg, Guggul 75 mg,
Triphala 150 mg, Kuki 50 mg,
Haridra 50 mg

Indications :
• Weight Reduction
• Helps Burn Fat
• Skin, Blood & Tissue Health`,
    slug: "YouSlim_weight_loss_capsule",
    variants: [
      { size: 60, unit: "capsule", price: 1200 }
    ]
  },

  {
    // 35
    productId: "Pcodset",
    name: "Pcodset",
    // price: 60,
    // image: "/Images/SBherbals/EZYDAY-PD.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Pcodset/Pcodset.jpg",
    description: `
MEDICINE FOR IRREGULAR PERIODS
असामान्य पीरियड्स में लाभकारी

Each capsule contains :-
Ashoka 150 mg, Shatayari 125 mg, Lodhra 100 mg
Sunthi 75 mg, Udumbara 50 mg

Usage and Benefits :
PCODSET capsules are made from a mixture of herbs like Ashoka, Shatayari and Lodhra which support uterine health and controls discomforts associated with menstruation. Due to its antioxidant activity and ability to modulate the cellular response to stress, assists women to combat physical and emotional discomfort during menstruation.`,
    slug: "Pcodset",
    variants: [
      { size: 30, unit: "capsule", price: 360 }
    ]
  },

  {
    // 38
    productId: "SBFLAM_ESR",
    name: "SBFLAM-ESR",
    // price: 50,
    // image: "/Images/SBherbals/Oesto-flex.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/SBFLAM-ESR/SBFLAM-ESR.jpg",
    description: `
ANTI-INFLAMMATORY
REDUCES ESR
PROTECTS BODY CELLS
सूजन रोधी एवं शरीर से ESR-स्तर को कम करने में सहायक

Composition :
Each 500mg cap contains :
Shudh Gandhak (Pure brumstone) – 50 mg
Neem (Azadirachta indica) – 100 mg
Sacred Fig (Ficus religiosa) – 100 mg
Guduchi (Tinospora cordifolia) – 200 mg
Ashwagandha (Withania somnifera) – 25 mg
Gum Arobic (Vachellia nilotica) – 25 mg

Indication :
Increases anti-body forming cells, anti-inflammatory & body resistance to infection, reduces ESR.`,
    slug: "SBFLAM_ESR",
    variants: [
      { size: 30, unit: "capsule", price: 390 }
    ]
  },

   {
    // 44
    productId: "Uricset_capsules",
    name: "Uricset capsules",
    // price: 60,
    // image: "/Images/SBherbals/EZYDAY-PD.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Uricset capsules/Uricset capsules.jpg",
    description: `
URIC ACID MANAGEMENT
शरीर में बढ़े हुए यूरिक एसिड के स्तर को कम करने में सहायक

Each 500 mg contains extracts of :
Punerva 100 mg
Gugul 100 mg
Musta 80 mg
Varuna 70 mg
Giloy 50 mg
Turmeric 50 mg
Shunthi 50 mg

Benefits :
• Supports Healthy Uric Acid Levels
• Promotes Normal Kidney Function`,
    slug: "Uricset_capsules",
    variants: [
      { size: 30, unit: "capsule", price: 285 }
    ]
  },

  {
    // 45
    productId: "Varicoset",
    name: "Varicoset",
    // price: 80,
    // image: "/Images/SBherbals/Ibs set.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Varicoset/Varicoset.jpg",
    description: `
RELIEVES SWELLING & PAIN
IMPROVES BLOOD CIRCULATION
TREATS VARICOSE & SPIDER VEINS

वैरिकोस वेन्स (नसों की सूजन) में उपयोगी

Composition :
Each 500mg capsule contains :
Manjishta – Rubia cordifolia Fr. – 50 mg
Punarnava – Boerhavia diffusa Rt. – 50 mg
Guduchi – Tinospora cordifolia Bk. – 50 mg
Adrak – Zingiber officinale Rz. – 50 mg
Behra – Terminalia balerica Fr. – 50 mg
Draksha – Vitis vinifera Fr. – 50 mg
Neem – Azadirachta indica Lf. – 50 mg
Amla – Emblica officinale Fr. – 50 mg
Harar – Aesculus indica coleber Rt. – 50 mg
Akol – Terminalia chebula Fr. – 25 mg
Manduk Parni – Centella asiatica Sd. – 25 mg

Indications :
Varicose & Spider Veins, Swelling, Pain &
Improves Blood Circulation.`,
    slug: "Varicoset",
    variants: [
      { size: 30, unit: "capsule", price: 390 }
    ]
  },

  {
    // 46
    productId: "Ovumset_capsule_for_women",
    name: "Ovumset - capsule for women",
    // price: 110,
    // image: "/Images/SBherbals/NervoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Capsules/Ovumset - capsule for women/Ovumset - capsule for women.jpg",
    description: `
Helps Improve egg growth & quality
अंडा कोशिकाएं एवं गुणवत्ता वर्धक

Each capsule contains :
Jiyopota (Putranjiva roxburghii) Sd – 100mg
Dashmul (Dashmoola) Rt – 75mg
Shatavari (Asparagus racemosus) Rt – 75mg
Ashwagandha (Withania somnifera) Rt – 50mg
Jeevanti (Leptadenia reticulata) Rt – 50mg
Nagkeshar (Mesua ferrea) Sta – 50mg
Ashoka (Saraca asoca) St Bk – 20 mg
Lodhra (Symplocos raemosa) St Bk – 20mg
Amalaki (Phyllanthus emblica) Frt – 20mg
Daruharidra (Berberis aristata) Rt – 20mg
Jethimadh (Glycyrrhiza glabra) Rt – 20mg

Indications :
Helps improve egg growth and quality,
helps achieve natural pregnancy,
supports timely ovulation and helps
strengthen reproductive system.`,
    slug: "Ovumset_capsule_for_women",
    variants: [
      { size: 30, unit: "capsule", price: 540 }
    ]
  },
  
  // Ayurvedic Tablets

  {
    // 24
    productId: "Mindease_Tablet",
    name: "Mindease Tablet",
    // price: 110,
    // image: "/Images/SBherbals/NervoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Tablets/MindEase Tablet/Mindease Tablet.jpg",
    description: `
STRESS RELIEF TABLET
मानसिक तनाव, चिंता एवं बेचैनी में सहायक

Composition :
Each tablet contains :
Brahmi 50 mg
Malkangni 80 mg
Sarpagandha 100 mg
Jatamansi 80 mg
Vacha 50 mg
Ashwagandha 50 mg
Shankhapushpi 50 mg
Tagar 40 mg

Useful in :
• Helps to relieve stress & anxiety
• Helps in mood enhancer
• Helps to fight mental fatigue`,
    slug: "Mindease_Tablet",
    variants: [
      { size: "10 x 10" ,unit: "Tablets", price: 540 }
    ]
  },

  {
    // 25
    productId: "SuperAct_99_senior_with_shudh_shilajit",
    name: "SuperAct-99 senior with shudh shilajit",
    // price: 90,
    // image: "/Images/SBherbals/dentoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Tablets/SuperAct-99 senior with shudh shilajit/SuperAct-99 senior with shudh shilajit.jpg",
    description: `
SUPPORTS PERFORMANCE, VITALITY & STAMINA

Composition : Each 1000 mg Tablet contains :
Kali Musli 100 mg
Safed Musli 125 mg
Vidarikand 90 mg
Kooth 75 mg
Shudh Shilajit 75 mg
Makardhwaj 20 mg
Swarn Vang 18 mg
Pipplamool 35 mg
Javitri 25 mg
Khaskhas 50 mg
Kaunch 60 mg
Lawang 30 mg
Saffron 2 mg
Sonth 25 mg
Ashwagandha 100 mg
Mundi 100 mg
Shankhpushpi 70 mg

Indications :
Loss of Libido, Psychic Sexual Disturbance, Erectile dysfunction, Loss of Vigour, Vitality, Sexual debility & General Weakness.`,
    slug: "SuperAct_99_senior_with_shudh_shilajit",
    variants: [
      { size: 30, unit: "Tablets", price: 960 },
      { size: 60, unit: "Tablets", price: 1920 }
    ]
  },

  {
    // 37 yeh nhi mila
    productId: "Rasraj_ras_with_gold",
    name: "Rasraj ras with gold",
    // price: 110,
    // image: "/Images/SBherbals/NervoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Tablets/Rasraj ras witgold/Rasraj ras with gold.jpg",
    description: `
Uses & Benefits:
• Improves digestion and gut health
• Helps relieve constipation and acidity
• Detoxifies the body naturally
• Supports healthy skin and immunity

Hindi – उपयोग व फायदे:
• पाचन क्रिया को बेहतर बनाता है
• कब्ज और एसिडिटी में लाभकारी
• शरीर को प्राकृतिक रूप से डिटॉक्स करता है
• त्वचा व रोग प्रतिरोधक क्षमता को मजबूत करता है`,
    slug: "Rasraj_ras_with_gold",
  },

  {
    // 40
    productId: "Sciavin",
    name: "Sciavin",
    // price: 60,
    // image: "/Images/SBherbals/STONEACT.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Tablets/Sciavin/Sciavin Tablets.jpg",
    description: `
TABLET FOR SCIATICA

FOR PAIN IN THE LOWER BACK, HIPS & LEGS
सायटिका (Pinched Nerve) और कमर दर्द में उपयोगी

Each tablet contains :
Ashwagandha (Withania somnifera) Root – 100 mg
Salakai (Boswellia serrata) Resin – 100 mg
Nirgundi (Vitex negundo) Leaves – 90 mg
Suranjan (Colchicum luteum) Rhizome – 60 mg
Saunth (Zingiber officinale) Rhizome – 50 mg
Rasna (Pluchea lanceolata) Leaves – 50 mg
Parijat (Nyctanthes arbortristis) Leaves – 50 mg
Shilajit (Asphaltum punjabium) Resin – 40 mg
Guggal (Commiphora mukul) Resin – 30 mg
Haldi (Curcuma longa) Rhizome – 20 mg
Punarnava (Boerhavia diffusa) Root – 20 mg
Brahmi (Bacopa monnieri) Panchang – 20 mg
Amla (Emblica officinalis) Fruit – 10 mg
Dalchini (Cinnamomum zeylanicum) Bark – 40 mg
Excipients – q.s.

Indications :
Low Back Ache (Pain), Pain in the hips, thighs & flanks, Arthritis conditions, Muscle twitches and stiffness, Sciatica, IVDP, Lumbar Spondylosis, Muscular & Nervous degenerative conditions and Hemiplegia or paraplegia.`,
    slug: "Sciavin_Tablets_for_sciatica",
    variants: [
      { size: 30, unit: "Tablets", price: 270 },
    ]
  },

  // Ayurvedic Softgel Capsules
  {
    // 17
    productId: "Heelset",
    name: "Heelset",
    // price: 110,
    // image: "/Images/SBherbals/NervoAct.webp",
    image: "/uploads/products/sbherbals/Ayurvedic Softgel Capsules/Heelset/Heelset.jpg",
    description: `
SOFTGEL CAPSULE

एड़ी एवं तलवे का दर्द, प्लांटर फोसिटिस का दर्द एवं सूजन के लिए

Each 625mg Soft Gelatin Capsules Prepared Out Of:
Payasam (Cow milk) 650ml
Tila Thailam (Sesamum indicum seed oil) 300.000mg
Gandharva Thailam (Ricinus communis seed oil) 025.000mg
Shunthi (Zingiber officinale -rz) 045.250mg
Eranda/shweta (Ricinus communis -rt) 045.250mg
Punarnava/rakta (Boerhaavia diffusa -rt) 045.250mg
Rasna (Alpinia galanga -lf) 045.250mg
Nirgundi (Vitex nirgundo -sd) 040.225mg
Devdar (Cedrus deodar -hd.wd) 040.225mg
Laksha (Laccifer lacca -ex) 040.225mg
Yugapatraka (Bauhinia variegata -bk) 040.225mg
Vajralata (Cissus quadrangularis -st) 040.225mg
Balamoolam (Sida Cordifolia -rt) 025.225mg
Sahachara (Strobilanthes heyinianus -lf) 025.225mg
Guggulu (Commiphora mukul -ex) 025.225mg
Haridra (Curcuma longa -rz) 010.125mg
Chinchan (Tamarindus indica -lf) 010.125mg

Ashwagandha (Withania somnifera -rt) 010.125mg
Sallaki (Boswellia serrata -ex) 010.125mg
Anantamoola (Hemidesmus indicus -rt) 010.125mg
Parijat (Nyctanthes arbor tristis -lf) 010.125mg
Shalaparni (Desmodium gangeticum -rt) 010.125mg
Gokshuru (Tribulus terrestris -rt) 010.125mg
Prushniparni (Uraria picta -rt) 010.125mg
Bruhati (Solanum indicum -rt) 010.125mg
Kantakari (Solanum xanthocarpum -rt) 010.125mg
Bilwa (Aegle marmelos -rt) 010.125mg
Agnimantha (Premna integrifolia -rt) 010.100mg
Gambhari (Gmelina arborea -rt) 010.100mg
Shyonak (Oroxylum indicum -rt) 010.100mg
Patala (Stereospermum suaveolens) 10.100mg
Pipali (Piper longum -frt) 010.100mg
Guduchi (Tinospora cordifolia -st) 010.100mg
Ushira (Vetiveria zizanioides -rt) 010.100mg

Benefits :
• Helps to cure heel pain
• Pain due to plantar fasciitis
• Helps reduce swelling`,
    slug: "Heelset",
    variants: [
      { size: "10 x 1 x 10 ", unit: "capsule", price: 1200 },
    ]
  },

  // Powder/Grnules & Sachets
  {
    // 26
    productId: "Weight_gain_management_powder",
    name: "Weight gain management powder",
    // price: 50,
    // image: "/Images/SBherbals/Oesto-flex.webp",
    image: "/uploads/products/sbherbals/PowderGrnules & Sachets/Weight gain management powder/Weight gain management powder.jpg",
    description: `
HERBAL FORMULA FOR WEIGHT MANAGEMENT
वजन बढ़ाने में सहायक

Each 10 g powder contains :
Ashwaganda Withania somnifera Rt 1.25g
Shatavri Asparagus racemosus Rt 1.25g
Vidarikand Pueraria tuberosa Rt 1.25g
Bala Sida cordifolia WP 1.25g
Jeeraka Cuminum cyminum Frt 200 mg
Kalanamak Sodium chloride Pdr 200 mg
Sugar Candy q.s.

Usage :
• Supports weight gain
• Supports muscle growth
• Improves strength`,
    slug: "Weight_gain_management_powder",
    variants: [
      { size: "135 gm (30 sachets x 4.5 g)", unit: "Pack", price: 900 },
    ]
  },
  
  {
    // 27
    productId: "Aratavin_alopecia_areta_spray",
    name: "Aratavin alopecia areta spray",
    // price: 80,
    // image: "/Images/SBherbals/Ibs set.webp",
    image: "/uploads/products/sbherbals/PowderGrnules & Sachets/Aratavin alopecia areta spray/Aratavin alopecia areta spray.jpg",
    description: `
FOR ALOPECIA AREATA
(PATCHY HAIR LOSS)
एलोपेसिया एरिटा (बालखोरा) में उपयोगी

Each ml contains :-
Palasha 2.5 mg, Spear Mint 2.5 mg, Mirchya 2.5 mg,
Prasanna q.s.

Indications :
Alopecia (Baldness)
Processed with lemon (Citrus limon) to give refreshing Lemon Flavour and to promote hair health and growth.`,
    slug: "Aratavin_alopecia_areta_spray",
    variants: [
      { size: 100, unit: "ml", price: 495 }
    ]
  },

  {
    // 21
    productId: "Lactoadd_grandnules",
    name: "Lactoadd grandnules",
    // price: 150,
    // image: "/Images/SBherbals/WARTCURE.webp",
    image: "/uploads/products/sbherbals/PowderGrnules & Sachets/Lacktoadd grandnules/Lactoadd grandnules.jpg",
    description: `
FOR BREASTFEEDING MOTHERS
स्तनपान करवाने वाली महिलाओं में मां के दूध की मात्रा को बढ़ाने में सहायक

Composition :
Each 10gm granules contains :
Methi Ext. 800 mg, Shatavar Ext. 800 mg,
Vidarikand Ext. 800 mg, Kamal beej Ext. 400 mg,
Fennel Ext. 400 mg, Alfalfa Ext. 400 mg,
Raspberry Ext. 400 mg, Stinging nettle Ext. 300 mg,
Jeera Ext. 100 mg, Kalaunji Ext. 100 mg,
Sucrose q.s.

INDICATION : Beneficial for breastfeeding mothers,
Promotes the production of breast milk,
Helps to balance hormonal changes,
Helps to normalize the uterus.`,
    slug: "Lactoadd_grandnules",
    variants: [
      { size: 200, unit: "gm", price: 298 }
    ]
  },


  // Herbal Cosmetics
  {
    // 28
    productId: "Charcoal_facewash",
    name: "Charcoal facewash",
    // price: 60,
    // image: "/Images/SBherbals/STONEACT.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/Charcoal facewash/Charcoal facewash.jpg",
    description: `
DEEP CLEAN FACEWASH

REJUVENATING & REMOVES EXCESS OIL

Composition : Each 100 gm contains :
Activated Charcoal 2%, Aloevera (Aloe barbadensis) 3%,
Haldi Ext. (Curcuma longa) 2%, Tulsi Ext. (Ocimum sanctum) 2%,
Neem Ext. (Azadirachta indica) 2%, Papaya Ext.
(Carica papaya) 2%, Base q.s.

CHARCOAL FACEWASH evacuates excessive oil and purified skin

• It wipes out bacteria, dirt, impurities, toxins caused due to excessive exposure of pollution
• It helps in opening up the clogged pores and removing whiteheads.`,
    slug: "Charcoal_facewash",
    variants: [
      { size: 100, unit: "ml", price: 180 }
    ]
  },

  {
    // 10
    productId: "Charcoal_soap",
    name: "Charcoal soap",
    // price: 150,
    // image: "/Images/SBherbals/WARTCURE.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/Charcoal soap/Charcoal soap.jpg",
    description: `
Uses & Benefits:
• Deeply cleans skin pores
• Removes dirt, oil & toxins
• Helps reduce acne and pimples
• Removes dead skin cells

उपयोग व फायदे:
• त्वचा की गहराई से सफाई करता है
• गंदगी, तेल व विषैले तत्व हटाता है
• पिंपल्स व मुहांसे कम करने में सहायक
• मृत त्वचा कोशिकाएं हटाता है`,
    slug: "Charcoal_soap",
  },

  {
    // 29
    productId: "DentoAct_herbal_tothpaste",
    name: "DentoAct herbal tothpaste",
    // price: 90,
    // image: "/Images/SBherbals/dentoAct.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/DentoAct herbal tothpaste/DentoAct herbal tothpaste.jpg",
    description: `
NATURAL PROTECTION FOR STRONG TEETH & HEALTHY GUMS
मसूड़ों में खून, पायोरिया, दांत दर्द, ठंडा गर्म लगने में उपयोगी

DentoAct Toothpaste is enriched with extracts of effective natural herbs like Neem, Babul, Pilu etc. which helps fight germs & prevents toothache, bleeding gums, cavities, plague & giving clean mouth and long lasting fresh breath.

Each 100 g contains :
Anar Ext. 0.257 g, Tumburoo Ext. 0.180 g, Babool Ext. 0.171 g, Nirgundi Ext. 0.114 g
Vayvidang Ext. 0.171 g, Triphala Ext. 0.171 g, Pilu 0.500 g, Durgandh Khair 0.600 g,
Kattha 0.800 g, Moulsiri 0.400 g, Neem 0.144 g, Ajmoda 0.100 g, Clove Oil 0.100 g
Vaikranta Bhasma 0.200 g, Excipients q.s. Ref: Bhavpraksha

Benefits :
• Protection from harmful germs
• Helps remove plaque • Long lasting fresh breath • Refreshing taste • Helps reduce bleeding gum and prevents inflammation
• Helps prevent toothache and decay`,
    slug: "DentoAct_herbal_tothpaste",
    variants: [
      { size: 100, unit: "gm", price: 125 }
    ]
  },

  {
    // 30
    productId: "Kesh_101",
    name: "Kesh 101",
    // price: 70,
    // image: "/Images/SBherbals/prostoAct.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/Kesh 101/Kesh 101.jpg",
    description: `
HAIR OIL

ANTI HAIR FALL HAIR OIL
बालों को झड़ने एवं रूसी से बचाये,
नये बाल उगाने में उपयोगी

INGREDIENTS :
Canaka 100 mg,
Tulsi 100 mg,
Palasha 25 mg,
Bhringraja 25 mg,
Yashtimadhu 25 mg,
Amalaki 20 mg,
Bibhitaka 20 mg,
Haritaki 20 mg,
Narikela 200 mg,
Til Oil q.s.`,
    slug: "Kesh_101",
    variants: [
      { size: 120, unit: "ml", price: 210 }
    ]
  },
  

  {
    // 31
    productId: "Neem_tulsi_alovera",
    name: "Neem tulsi alovera",
    // price: 60,
    // image: "/Images/SBherbals/STONEACT.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/Neem tulsi alvovera/Neem tulsi alovera.jpg",
    description: `
ACNE & OIL CONTROL FACEWASH

Composition : Each 100 gm contains :
Yashtimadhu (Glycyrrhiza glabra) 3g,
Orange (Citrus sinensis) 1.5 g,
Neem (Azadirachta indica) 0.25 g,
Amalaki (Emblica officinalis) 0.30 g,
Haridra (Curcuma longa) 1 g,
Tulsi (Ocimum sanctum) 0.20 g,
KhasKhas (Vetiveriaziz anioides) 0.25 g,
Aloevera (Aloe barbadensis) 0.25 g,
Tea Tree Oil 0.05 ml,
Gulab Arka (Rosa centifolia) 2 ml,
Base q.s.

SBHERBALS NEEM TULSI ALOEVERA FACEWASH is an excellent skin cleanser, removes excess oil, anti-bacterial, anti-septic, anti-inflammatory, treats acne, boils & ulcers. Improves general skin health & immunity.`,
    slug: "Neem_tulsi_alovera",
    variants: [
      { size: 100, unit: "ml", price: 170 }
    ]
  },

  {
    // 29
    productId: "Neem_tulsi_alovera_soap",
    name: "Neem tulsi alovera soap",
    // price: 70,
    // image: "/Images/SBherbals/prostoAct.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/Neem tulsi alover - soap/Neem tulsi alovera soap.jpg",
    description: `
Uses & Benefits:
• Improves digestion and gut health
• Helps relieve constipation and acidity
• Detoxifies the body naturally
• Supports healthy skin and immunity

Hindi – उपयोग व फायदे:
• पाचन क्रिया को बेहतर बनाता है
• कब्ज और एसिडिटी में लाभकारी
• शरीर को प्राकृतिक रूप से डिटॉक्स करता है
• त्वचा व रोग प्रतिरोधक क्षमता को मजबूत करता है`,
    slug: "Neem_tulsi_alovera_soap",
  },

  {
    // 32
    productId: "Youshine",
    name: "Youshine",
    // price: 70,
    // image: "/Images/SBherbals/prostoAct.webp",
    image: "/uploads/products/sbherbals/Herbal Cosmetics/Youshine/Youshine.jpg",
    description: `
UBTAN FACEWASH

HELPS CLEANSES & CLARIFY COMPLEXION
त्वचा को मुलायम एवं रंग साफ करने में उपयोगी

YouShine Face Wash is a skin clarifying face wash that contains haldi chandan extract, pea sprout extract which helps to draw out impurities and give your skin a smooth texture. It also helps to removes dirt without disturbing your skin’s natural oil balance and brightens skin, restores natural radiance of the skin. The face wash help to manage your skin health, and prevents pollutants and free radicals from your skin.`,
    slug: "Youshine",
    variants: [
      { size: 100, unit: "ml", price: 170 }
    ]
  },

  // Wilson Drugs product
  //   {
  //     // 1
  //     productId: "Deflan-syrup",
  //     name: "Deflan-syrup",
  //     price: 60,
  //     // image: "/Images/wilson drugs/Deflan-syrup.webp",
  //     image: "/uploads/products/wilson drugs/Deflan-syrup.webp",
  //     description: "Helps burn extra fat.",
  //     slug: "Deflan-syrup",
  //   },
  //   {
  //     // 2
  //     productId: "Deflan-Tablet",
  //     name: "Deflan-Tablet",
  //     price: 80,
  //     // image: "/Images/wilson drugs/Deflan-Tablet.webp",
  //     image: "/uploads/products/wilson drugs/Deflan-Tablet.webp",
  //     description: "Helps in hormonal balance.",
  //     slug: "Deflan-Tabletr",
  //   },
  //   {
  //     // 3
  //     productId: "Derment-Ointment",
  //     name: "Derment-Ointment",
  //     price: 90,
  //     // image: "/Images/wilson drugs/Derment-Ointment.webp",
  //     image: "/uploads/products/wilson drugs/Derment-Ointment.webp",
  //     description: "Maintains oral hygiene.",
  //     slug: "Derment-Ointmen",
  //   },

  //   {
  //     // 4
  //     productId: "Kasanil-Syrup",
  //     name: "Kasanil-Syrup",
  //     price: 60,
  //     // image: "/Images/wilson drugs/Kasanil-Syrup.webp",
  //     image: "/uploads/products/wilson drugs/Kasanil-Syrup.webp",
  //     description: "Helps burn extra fat.",
  //     slug: "Kasanil-Syrup",
  //   },
  //   {
  //     // 5
  //     productId: "Livopick-Capsules",
  //     name: "Livopick-Capsules",
  //     price: 80,
  //     // image: "/Images/wilson drugs/Livopick-Capsules.webp",
  //     image: "/uploads/products/wilson drugs/Livopick-Capsules.webp",
  //     description: "Helps in hormonal balance.",
  //     slug: "Livopick-Capsules",
  //   },
  //   {
  //     // 6
  //     productId: "Livopick-D.S-Syrup",
  //     name: "Livopick-D.S-Syrup",
  //     price: 110,
  //     // image: "/Images/wilson drugs/Livopick-D.S-Syrup.webp",
  //     image: "/uploads/products/wilson drugs/Livopick-D.S-Syrup.webp",
  //     description: "Maintains oral hygiene.",
  //     slug: "Livopick-D.S-Syrup",
  //   },

  //   {
  //     // 7
  //     productId: "Livopick-Syrup",
  //     name: "Livopick-Syrup",
  //     price: 50,
  //     // image: "/Images/wilson drugs/Livopick-Syrup.webp",
  //     image: "/uploads/products/wilson drugs/Livopick-Syrup.webp",
  //     description: "Helps burn extra fat.",
  //     slug: "Livopick-Syrup",
  //   },
  //   {
  //     // 8
  //     productId: "Neurel-Tablet",
  //     name: "Neurel-Tablet",
  //     price: 70,
  //     // image: "/Images/wilson drugs/Neurel-Tablet.webp",
  //     image: "/uploads/products/wilson drugs/Neurel-Tablet.webp",
  //     description: "Helps in hormonal balance.",
  //     slug: "Neurel-Tablet",
  //   },
  //   {
  //     // 9
  //     productId: "Vatorine-Capsule",
  //     name: "Vatorine-Capsule",
  //     price: 60,
  //     // image: "/Images/wilson drugs/Vatorine-Capsule.webp",
  //     image: "/uploads/products/wilson drugs/Vatorine-Capsule.webp",
  //     description: "Maintains oral hygiene.",
  //     slug: "Vatorine-Capsule",
  //   },

  //   {
  //     // 10
  //     productId: "Wilsoplex-Syrup",
  //     name: "Wilsoplex-Syrup",
  //     price: 150,
  //     // image: "/Images/wilson drugs/Wilsoplex-Syrup.webp",
  //     image: "/uploads/products/wilson drugs/Wilsoplex-Syrup.webp",
  //     description: "Maintains oral hygiene.",
  //     slug: "Wilsoplex-Syrup",
  //   }

];

export default products;

