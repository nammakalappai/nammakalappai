// ==============================
// 1. Product Data
// ==============================
const products = [
{
  name:'Wild Forest Honey - 500g',
  ta:'காடு செறிந்த தேன் - 500கிராம்',
  price:'₹999',
  img:'images/wildhoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> Sourced directly from forest beehives, this honey is unprocessed and retains all natural enzymes and pollen.<br>
<strong>Ingredients:</strong> 100% Pure Forest Nectar.<br>
<strong>Health Benefits:</strong> Boosts immunity, treats cough and cold, rich in antioxidants, natural energy booster.`,
  descTa:`<strong>விளக்கம்:</strong> காடுகளில் உள்ள தேன்கூடுகளில் இருந்து நேரடியாக எடுக்கப்படும் சுத்தமான தேன்; எந்த விதமான சுத்திகரிப்புக்கும் உட்படுத்தப்படாதது.<br>
<strong>பொருட்கள்:</strong> 100% தூய காட்டு மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, இருமல் மற்றும் சளியை குணப்படுத்துகிறது, இயற்கையான ஆற்றலை வழங்குகிறது.`,
  insta:'https://www.instagram.com/reel/DJeJ8F4ymt-/?igsh=MXgwMG1ja2xleGtvbg=='
},
{
  name:'Multi Floral Honey - 500g',
  ta:'பல மலர் தேன் - 500கிராம்',
  price:'₹449',
  img:'images/mfhoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> Collected by bees from a variety of seasonal wildflowers, offering a complex flavor profile and diverse nutrients.<br>
<strong>Ingredients:</strong> Nectar from various wildflowers.<br>
<strong>Health Benefits:</strong> Aids digestion, improves skin health, provides seasonal allergy relief.`,
  descTa:`<strong>விளக்கம்:</strong> பல்வேறு வகையான பருவகால காட்டுப்பூக்களில் இருந்து தேனீக்களால் சேகரிக்கப்படும் தேன்; இது தனித்துவமான சுவை கொண்டது.<br>
<strong>பொருட்கள்:</strong> பல்வேறு மலர்களின் தேன் துளிகள்.<br>
<strong>நன்மைகள்:</strong> செரிமானத்திற்கு உதவுகிறது, சரும ஆரோக்கியத்தை மேம்படுத்துகிறது, ஒவ்வாமையை குறைக்கிறது.`,
  insta:'https://www.instagram.com/reel/DKkAxWTyqzy/?igsh=NTQybHp0aGVscm0x'
},
{
  name:'Fennel Honey - 500g',
  ta:'சோம்பு தேன் - 500கிராம்',
  price:'₹599',
  img:'images/fennelhoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> Honey produced by bees that primarily forage on fennel flowers, carrying a distinct aromatic flavor.<br>
<strong>Ingredients:</strong> Fennel flower nectar.<br>
<strong>Health Benefits:</strong> Relieves bloating, improves digestion, freshens breath, reduces menstrual cramps.`,
  descTa:`<strong>விளக்கம்:</strong> சோம்பு மலர்களில் இருந்து தேனீக்களால் சேகரிக்கப்படும் தேன்; இது ஒரு தனித்துவமான நறுமணம் கொண்டது.<br>
<strong>பொருட்கள்:</strong> சோம்பு மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> வயிற்று உப்பசத்தை குறைக்கிறது, செரிமானத்தை தூண்டுகிறது, மாதவிடாய் வலியை குறைக்கிறது.`,
  insta:'https://www.instagram.com/reel/DQMSv6NElYV/?igsh=MTdiazlxdnFwcjR1ag=='
},
{
  name:'Tulsi Honey - 500g',
  ta:'துளசி தேன் - 500கிராம்',
  price:'₹599',
  img:'images/tulsihoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> Honey infused with the essence of Holy Basil (Tulsi), widely used in Ayurvedic remedies.<br>
<strong>Ingredients:</strong> Tulsi flower nectar / Tulsi extract.<br>
<strong>Health Benefits:</strong> Relieves stress, treats respiratory issues, antibacterial properties, strengthens heart.`,
  descTa:`<strong>விளக்கம்:</strong> துளசி மலர்களின் சாறு நிறைந்த தேன்; இது ஆயுர்வேத மருத்துவத்தில் முக்கிய பங்கு வகிக்கிறது.<br>
<strong>பொருட்கள்:</strong> துளசி மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> மன அழுத்தத்தை குறைக்கிறது, சுவாச கோளாறுகளை நீக்குகிறது, இதயத்தை பலப்படுத்துகிறது.`,
  insta:'https://www.instagram.com/reel/DQT7pYCDBYO/?igsh=MTV2dmdqMWdkc25tdQ=='
},
{
  name:'Kashmiri Aqua Honey - 500g',
  ta:'காஷ்மீர் அக்வா தேன் - 500கிராம்',
  price:'₹599',
  img:'images/kashmirihoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> A premium, light-colored honey collected from the pristine valleys of Kashmir, known for its purity and mild taste.<br>
<strong>Ingredients:</strong> Nectar from Himalayan wildflowers (Acacia/Sulai).<br>
<strong>Health Benefits:</strong> Blood purifier, improves skin glow, rich in enzymes, natural sleep aid.`,
  descTa:`<strong>விளக்கம்:</strong> காஷ்மீர் பள்ளத்தாக்குகளில் இருந்து சேகரிக்கப்படும் பிரீமியம் வகை தேன்; இது மிகவும் வெண்மையாகவும் சுவையாகவும் இருக்கும்.<br>
<strong>பொருட்கள்:</strong> இமயமலை மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> ரத்தத்தை சுத்திகரிக்கிறது, சரும பொலிவை தருகிறது, தூக்கமின்மையை போக்க உதவுகிறது.`,
  insta:'https://www.instagram.com/reel/DQmC2IoEh_d/?igsh=MXdiOXByMmhkZmkyNg=='
},
{
  name:'Neem Honey - 500g',
  ta:'வேம்பு தேன் - 500கிராம்',
  price:'₹699',
  img:'images/neemhoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> A dark, medicinal honey collected from Neem flowers, valued for its high therapeutic properties.<br>
<strong>Ingredients:</strong> Neem flower nectar.<br>
<strong>Health Benefits:</strong> Natural antiseptic, treats skin allergies, supports liver health, helps in deworming.`,
  descTa:`<strong>விளக்கம்:</strong> வேப்பம் பூக்களில் இருந்து எடுக்கப்படும் மருத்துவ குணம் நிறைந்த தேன்; இது சற்று கசப்பு கலந்த சுவை கொண்டது.<br>
<strong>பொருட்கள்:</strong> வேப்பம் பூ தேன்.<br>
<strong>நன்மைகள்:</strong> சிறந்த கிருமிநாசினி, தோல் ஒவ்வாமையை நீக்குகிறது, கல்லீரல் ஆரோக்கியத்தை மேம்படுத்துகிறது.`,
  insta:'https://www.instagram.com/reel/DQbtC7ujApT/?igsh=b2x4cGNyamV2bWtv'
},
{
  name:'Moringa Honey - 500g',
  ta:'முருங்கை தேன் - 500கிராம்',
  price:'₹999',
  img:'images/mhoney.jpg',
  category:'honey',
  descEn:`<strong>Description:</strong> A premium medicinal honey collected from the nectar of moringa (drumstick) flowers, combining the power of moringa with raw honey.<br>
<strong>Ingredients:</strong> Raw moringa flower honey.<br>
<strong>Health Benefits:</strong> Increases immunity, treats anemia, boosts energy, improves skin health, supports bone strength.`,
  descTa:`<strong>விளக்கம்:</strong> முருங்கை பூக்களின் தேனிலிருந்து சேகரிக்கப்படும் இந்தத் தேன் மருத்துவ குணங்கள் நிறைந்தது; இது முருங்கை மரத்தின் சத்துக்களையும் தேனின் நன்மைகளையும் ஒருசேர வழங்குகிறது.<br>
<strong>பொருட்கள்:</strong> சுத்தமான முருங்கைத் தேன்.<br>
<strong>நன்மைகள்:</strong> நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, இரத்த சோகையை குணப்படுத்துகிறது, உடனடி ஆற்றலைத் தருகிறது, சரும ஆரோக்கியத்தை மேம்படுத்துகிறது மற்றும் எலும்புகளை வலுவாக்குகிறது.`,
  insta:'https://www.instagram.com/reel/DOAh-7yAKCh/?igsh=OTVyM2hydXVtN2d3'
},
{
  name:'Pomegranate Honey - 500g',
  ta:'மாதுளை தேன் - 500கிராம்',
  price:'₹999',
  img:'images/pomh.jpeg',
  category:'honey',
  descEn:`<strong>Description:</strong> Premium honey infused with the essence of Pomegranate, combining antioxidant power with raw honey.<br>
<strong>Ingredients:</strong> Pure Honey blended with Pomegranate extract / nectar.<br>
<strong>Health Benefits:</strong> Rich in antioxidants, improves blood circulation, supports heart health, enhances skin glow.`,
  descTa:`<strong>விளக்கம்:</strong> மாதுளை சாறு கலந்த உயர்தர தேன்; இது தேனின் நன்மைகளையும் மாதுளையின் சக்தியையும் ஒருசேர வழங்குகிறது.<br>
<strong>பொருட்கள்:</strong> தூய தேன், மாதுளை சாறு / சாரம்.<br>
<strong>நன்மைகள்:</strong> ஆன்டிஆக்ஸிடன்ட் நிறைந்தது, ரத்த ஓட்டத்தை மேம்படுத்துகிறது, இதய ஆரோக்கியத்திற்கு உதவுகிறது.`
},
{
  name:'Little Bee (Kombu) Honey - 500g',
  ta:'சிறு தேனீ (கொம்பு) தேன் - 500கிராம்',
  price:'₹999',
  img:'images/lbeeh.jpeg',
  category:'honey',
  descEn:`<strong>Description:</strong> Rare and highly medicinal honey collected from Little Bees (Kombu Then), traditionally valued for its potency.<br>
<strong>Ingredients:</strong> Raw Honey from Little Bee hives.<br>
<strong>Health Benefits:</strong> Powerful immunity booster, helps control diabetes, improves digestion, supports joint health.`,
  descTa:`<strong>விளக்கம்:</strong> சிறு தேனீக்களால் சேகரிக்கப்படும் அரிய மற்றும் மருத்துவ குணம் நிறைந்த கொம்பு தேன்.<br>
<strong>பொருட்கள்:</strong> சிறு தேனீக்களின் கூண்டிலிருந்து பெறப்பட்ட தூய தேன்.<br>
<strong>நன்மைகள்:</strong> நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, சர்க்கரை அளவை கட்டுப்படுத்த உதவுகிறது, செரிமானத்தை மேம்படுத்துகிறது.`
},
{
  name:'Cavity Honey - 500g',
  ta:'பல் பாதுகாப்பு தேன் - 500கிராம்',
  price:'₹449',
  img:'images/cs.jpg',
  category:'cs',
  descEn:`<strong>Description:</strong> A specially prepared honey known for its antibacterial properties that help maintain oral hygiene and dental health.<br>
<strong>Ingredients:</strong> Natural Honey enriched with medicinal floral nectar.<br>
<strong>Health Benefits:</strong> Helps prevent cavities, reduces oral bacteria, supports gum health, freshens breath.`,
  descTa:`<strong>விளக்கம்:</strong> பல் மற்றும் வாய்ப்பகுதி ஆரோக்கியத்திற்கு உதவும் கிருமிநாசினி தன்மை கொண்ட சிறப்பு தேன்.<br>
<strong>பொருட்கள்:</strong> மருத்துவ குணம் கொண்ட மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> பல் துளைகளைத் தடுக்கும், வாயில் கிருமிகளை குறைக்கும், ஈறுகளை பாதுகாக்கும்.`
},
{
  name:'Multi Millet Health Mix - 500g',
  ta:'பல சிறுதானிய சத்துமாவு - 500கிராம்',
  price:'₹349',
  img:'images/mmhx.jpg',
  category:'mix',
  descEn:`<strong>Description:</strong> A nutrient-dense blend of various millets and pulses, ideal as a breakfast meal for all ages.<br>
<strong>Ingredients:</strong> Ragi, Bajra, Jowar, Foxtail Millet, Little Millet, Roasted Gram, Cardamom.<br>
<strong>Health Benefits:</strong> High in fiber, controls blood sugar, weight management, rich in minerals.`,
  descTa:`<strong>விளக்கம்:</strong> பல்வேறு சிறுதானியங்கள் மற்றும் பருப்பு வகைகளின் கலவை; இது அனைத்து வயதினருக்கும் ஏற்ற காலை உணவு.<br>
<strong>பொருட்கள்:</strong> ராகி, கம்பு, சோளம், தினை, சாமை, பொட்டுகடலை, ஏலக்காய்.<br>
<strong>நன்மைகள்:</strong> நார்ச்சத்து அதிகம், சர்க்கரை அளவை கட்டுப்படுத்துகிறது, உடல் எடையை சீராக வைக்கிறது.`,
  insta:'https://www.instagram.com/reel/DTAqoSbkjKi/?igsh=YnhkeHplM3hpbXcw'
},
{
  name:'Sprouted Health Mix - 250g',
  ta:'முளைகட்டிய சத்துமாவு - 250கிராம்',
  price:'₹175',
  img:'images/shmix.jpg',
  category:'mix',
  descEn:`<strong>Description:</strong> Made from sprouted grains which enhances nutrient absorption and digestion.<br>
<strong>Ingredients:</strong> Sprouted Ragi, Sprouted Green Gram, Sprouted Wheat, Sprouted Bajra, Almonds, Cashews.<br>
<strong>Health Benefits:</strong> Maximum nutrient absorption, protein-rich, boosts growth in children, high iron content.`,
  descTa:`<strong>விளக்கம்:</strong> முளைகட்டிய தானியங்களால் தயாரிக்கப்பட்டது; இது ஊட்டச்சத்துக்களை உடல் எளிதில் உறிஞ்ச உதவுகிறது.<br>
<strong>பொருட்கள்:</strong> முளைகட்டிய ராகி, பச்சைப்பயறு, கோதுமை, கம்பு, பாதாம், முந்திரி.<br>
<strong>நன்மைகள்:</strong> புரதச்சத்து நிறைந்தது, குழந்தைகளின் வளர்ச்சிக்கு உதவுகிறது, ரத்த சோகையை தடுக்கிறது.`,
  insta:'https://www.instagram.com/reel/DNIetWISdHk/?igsh=dm1tbTF5bjhpbnJp'
},
{
  name:'ABC Malt - 180g',
  ta:'ABC மால்ட் - 180கிராம்',
  price:'₹249',
  img:'images/abcmalt.jpg',
  category:'mix',
  descEn:`<strong>Description:</strong> A healthy powdered drink mix made from Apple, Beetroot, and Carrot, often called the “Miracle Drink.”<br>
<strong>Ingredients:</strong> Dried Apple, Beetroot, Carrot, Almonds, Country Sugar/Jaggery.<br>
<strong>Health Benefits:</strong> Increases hemoglobin, glows skin, detoxifies the body, improves eyesight.`,
  descTa:`<strong>விளக்கம்:</strong> ஆப்பிள், பீட்ரூட் மற்றும் கேரட் கொண்டு தயாரிக்கப்படும் ஒரு சத்தான பானம்; இது “அதிசய பானம்” என அழைக்கப்படுகிறது.<br>
<strong>பொருட்கள்:</strong> ஆப்பிள், பீட்ரூட், கேரட், பாதாம், நாட்டுச்சர்க்கரை.<br>
<strong>நன்மைகள்:</strong> ரத்த சிவப்பணுக்களை அதிகரிக்கிறது, உடலை நச்சு நீக்கம் செய்கிறது, கண் பார்வையை மேம்படுத்துகிறது.`,
  insta:'https://www.instagram.com/reel/DPBqp0LkryZ/?igsh=aW1pZXpqbzBxem0w'
},
{
  name:'Ulundhu Kanji Mix - 250g',
  ta:'உளுந்து கஞ்சி மாவு - 250கிராம்',
  price:'₹199',
  img:'images/ukmix.jpeg',
  category:'mix',
  descEn:`<strong>Description:</strong> A traditional and nutritious porridge mix made primarily from Black Gram (Ulundhu), commonly consumed for strength and recovery.<br>
<strong>Ingredients:</strong> Black Gram (Ulundhu), Rice, Jeera, Pepper, Dry Ginger.<br>
<strong>Health Benefits:</strong> Strengthens bones, improves digestion, boosts energy, highly recommended for postnatal care and general wellness.`,
  descTa:`<strong>விளக்கம்:</strong> உளுந்தை முக்கியமாகக் கொண்டு தயாரிக்கப்படும் பாரம்பரிய மற்றும் சத்தான கஞ்சி மாவு; இது உடல் வலிமையை அதிகரிக்க உதவுகிறது.<br>
<strong>பொருட்கள்:</strong> உளுந்து, அரிசி, சீரகம், மிளகு, சுக்கு.<br>
<strong>நன்மைகள்:</strong> எலும்புகளை வலுப்படுத்துகிறது, செரிமானத்தை மேம்படுத்துகிறது, உடலுக்கு ஆற்றலை வழங்குகிறது, பிரசவத்திற்குப் பிந்தைய பராமரிப்பிற்கு ஏற்றது.`
},
{
  name:'A1 Ghee - 500ml',
  ta:'A1 நெய் - 500மி.லி',
  price:'₹449',
  img:'images/a1.jpg',
  category:'ghee',
  descEn:`<strong>Description:</strong> Prepared from the milk of hybrid cow breeds, commonly used for everyday cooking and deep frying.<br>
<strong>Ingredients:</strong> Milk fat from hybrid cow breeds (HF/Jersey).<br>
<strong>Health Benefits:</strong> Source of fat-soluble vitamins, provides essential calories, enhances food flavor.`,
  descTa:`<strong>விளக்கம்:</strong> கலப்பின பசுக்களின் பாலில் இருந்து தயாரிக்கப்படும் நெய்; இது அன்றாட சமையலுக்கு பயன்படுத்தப்படுகிறது.<br>
<strong>பொருட்கள்:</strong> கலப்பின பசுவின் பால் கொழுப்பு.<br>
<strong>நன்மைகள்:</strong> வைட்டமின்கள் நிறைந்தது, உடலுக்குத் தேவையான கலோரிகளை வழங்குகிறது.`,
  insta:'https://www.instagram.com/reel/DMh7X8UyNr8/?igsh=aXdnOWp0NmNibGll'
},
{
  name:'A2 Ghee - 500ml',
  ta:'A2 நாட்டுமாட்டு நெய் - 500மி.லி',
  price:'₹799',
  img:'images/a2.jpg',
  category:'ghee',
  descEn:`<strong>Description:</strong> Hand-churned using the traditional Bilona method from the milk of indigenous (Desi) cows.<br>
<strong>Ingredients:</strong> Pure A2 Cow Milk Fat.<br>
<strong>Health Benefits:</strong> Easy to digest, improves brain health, strengthens bones, promotes heart health.`,
  descTa:`<strong>விளக்கம்:</strong> நாட்டுப் பசுக்களின் பாலில் இருந்து பாரம்பரிய பிலோனா முறையில் தயாரிக்கப்படும் உயர்தர நெய்.<br>
<strong>பொருட்கள்:</strong> தூய A2 நாட்டுப் பசுவின் பால் கொழுப்பு.<br>
<strong>நன்மைகள்:</strong> எளிதில் செரிமானமாகும், மூளை வளர்ச்சியை மேம்படுத்தும், எலும்புகளை வலுவாக்கும்.`,
  insta:'https://www.instagram.com/reel/DLZ6MU1y49R/?igsh=MWhhdjIwZmRkdTU2Zg=='
},
{
  name:'Palm Sugar - 250g',
  ta:'பனங்கற்கண்டு - 250கிராம்',
  price:'₹175',
  img:'images/psugar.jpg',
  category:'sugar',
  descEn:`<strong>Description:</strong> A natural sweetener extracted from the sap of palm trees, known for its cooling properties.<br>
<strong>Ingredients:</strong> Palm Tree Sap (Neera).<br>
<strong>Health Benefits:</strong> Cleanses respiratory tract, rich in iron, low glycemic index, treats sore throat.`,
  descTa:`<strong>விளக்கம்:</strong> பனை மரத்தின் பதநீரில் இருந்து எடுக்கப்படும் இயற்கை இனிப்பு; இது உடலுக்கு குளிர்ச்சியைத் தரும்.<br>
<strong>பொருட்கள்:</strong> பனை பதநீர்.<br>
<strong>நன்மைகள்:</strong> சுவாசப்பாதையை சுத்தப்படுத்துகிறது, இரும்புச்சத்து நிறைந்தது, தொண்டை புண்ணை குணமாக்கும்.`,
  insta:'https://www.instagram.com/reel/DM0LrgyS4yC/?igsh=dDIxMW4zdDhob3Bw'
},
{
  name:'Coconut Sugar - 250g',
  ta:'தேங்காய் சர்க்கரை - 250கிராம்',
  price:'₹150',
  img:'images/csugar.jpg',
  category:'sugar',
  descEn:`<strong>Description:</strong> Produced from the sap of coconut palm blossoms, a healthy alternative to refined white sugar.<br>
<strong>Ingredients:</strong> Coconut Blossom Nectar.<br>
<strong>Health Benefits:</strong> Contains electrolytes, supports gut health, provides stable energy, rich in Zinc and Potassium.`,
  descTa:`<strong>விளக்கம்:</strong> தென்னை மர பூக்களின் சாற்றில் இருந்து தயாரிக்கப்படும் சர்க்கரை; இது வெள்ளை சர்க்கரைக்கு சிறந்த மாற்றாகும்.<br>
<strong>பொருட்கள்:</strong> தென்னை மலர் சாறு.<br>
<strong>நன்மைகள்:</strong> தாதுக்கள் நிறைந்தது, குடல் ஆரோக்கியத்தை மேம்படுத்துகிறது, உடனடி ஆற்றலைத் தருகிறது.`,
  insta:'https://www.instagram.com/reel/DM0LrgyS4yC/?igsh=dDIxMW4zdDhob3Bw'
},
{
  name:'Finger Millet Biscuit - 80g',
  ta:'ராகி பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/fmb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Crunchy and nutritious biscuits made from Finger Millet (Ragi), ideal for healthy snacking.<br>
<strong>Ingredients:</strong> Finger Millet (Ragi), Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Rich in calcium, strengthens bones, supports digestion, suitable for all age groups.`,
  descTa:`<strong>விளக்கம்:</strong> ராகியால் தயாரிக்கப்பட்ட சத்தான மற்றும் சுவையான பிஸ்கட்கள்; ஆரோக்கியமான சிற்றுண்டிக்கு சிறந்தது.<br>
<strong>பொருட்கள்:</strong> ராகி, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> கால்சியம் நிறைந்தது, எலும்புகளை வலுப்படுத்துகிறது, செரிமானத்திற்கு உதவுகிறது.`
},
{
  name:'Black Rice Biscuit - 80g',
  ta:'கருப்பு கவுனி பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/brb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Healthy biscuits prepared using antioxidant-rich Black Rice, offering a unique flavor and crunch.<br>
<strong>Ingredients:</strong> Black Rice Flour, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> High antioxidants, improves heart health, boosts immunity.`,
  descTa:`<strong>விளக்கம்:</strong> கருப்பு கவுனி அரிசியால் தயாரிக்கப்பட்ட ஆரோக்கிய பிஸ்கட்கள்; தனித்துவமான சுவை கொண்டது.<br>
<strong>பொருட்கள்:</strong> கருப்பு கவுனி மாவு, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> ஆன்டிஆக்ஸிடன்ட் அதிகம், இதய ஆரோக்கியத்தை மேம்படுத்துகிறது.`
},
{
  name:'Pearl Millet Biscuit - 80g',
  ta:'கம்பு பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/pmb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Tasty biscuits made from Pearl Millet (Bajra), perfect for everyday healthy snacking.<br>
<strong>Ingredients:</strong> Pearl Millet (Bajra), Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Improves digestion, controls blood sugar, high fiber.`,
  descTa:`<strong>விளக்கம்:</strong> கம்பு கொண்டு தயாரிக்கப்பட்ட சத்தான பிஸ்கட்கள்; தினசரி உபயோகத்திற்கு ஏற்றது.<br>
<strong>பொருட்கள்:</strong> கம்பு, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> நார்ச்சத்து அதிகம், சர்க்கரை அளவை கட்டுப்படுத்துகிறது.`
},
{
  name:'Barnyard Millet Biscuit - 80g',
  ta:'குதிரைவாலி பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/bm.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Light and crispy biscuits made from Barnyard Millet, suitable for diabetic-friendly diets.<br>
<strong>Ingredients:</strong> Barnyard Millet, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Low glycemic index, supports weight management.`,
  descTa:`<strong>விளக்கம்:</strong> குதிரைவாலி கொண்டு தயாரிக்கப்பட்ட இலகுவான பிஸ்கட்கள்; சர்க்கரை நோயாளிகளுக்கும் ஏற்றது.<br>
<strong>பொருட்கள்:</strong> குதிரைவாலி, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> குறைந்த கிளைசெமிக் குறியீடு, உடல் எடை கட்டுப்பாட்டிற்கு உதவுகிறது.`
},
{
  name:'Little Millet Biscuit - 80g',
  ta:'சாமை பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/lmb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Wholesome biscuits prepared from Little Millet, offering balanced nutrition.<br>
<strong>Ingredients:</strong> Little Millet, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Improves metabolism, rich in fiber and minerals.`,
  descTa:`<strong>விளக்கம்:</strong> சாமை கொண்டு தயாரிக்கப்பட்ட ஊட்டச்சத்து நிறைந்த பிஸ்கட்கள்.<br>
<strong>பொருட்கள்:</strong> சாமை, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> உடல் மாற்றுச்செயலை மேம்படுத்துகிறது, நார்ச்சத்து அதிகம்.`
},
{
  name:'Multi Grain Biscuit - 80g',
  ta:'நவதானிய பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/mgb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Biscuits made from a blend of multiple grains for complete nutrition.<br>
<strong>Ingredients:</strong> Mixed Millets, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Balanced nutrients, boosts energy, supports digestion.`,
  descTa:`<strong>விளக்கம்:</strong> பல தானியங்களின் கலவையால் தயாரிக்கப்பட்ட முழுமையான ஊட்டச்சத்து பிஸ்கட்கள்.<br>
<strong>பொருட்கள்:</strong> சிறுதானிய கலவை, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> சக்தியை அதிகரிக்கிறது, செரிமானத்திற்கு உதவுகிறது.`
},
{
  name:'Moringa Leaf Biscuit - 80g',
  ta:'முருங்கை இலை பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/mfb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Herbal biscuits enriched with Moringa leaves for daily nutrition.<br>
<strong>Ingredients:</strong> Moringa Leaf Powder, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Boosts immunity, rich in iron and vitamins.`,
  descTa:`<strong>விளக்கம்:</strong> முருங்கை இலைகள் சேர்க்கப்பட்ட மூலிகை பிஸ்கட்கள்.<br>
<strong>பொருட்கள்:</strong> முருங்கை இலை பொடி, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, இரும்புச்சத்து நிறைந்தது.`
},
{
  name:'Tulsi Biscuit - 80g',
  ta:'துளசி பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/tmb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Biscuits infused with Tulsi, known for its medicinal properties.<br>
<strong>Ingredients:</strong> Tulsi Powder, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Improves respiratory health, boosts immunity.`,
  descTa:`<strong>விளக்கம்:</strong> துளசி சேர்க்கப்பட்ட மருத்துவ குணம் நிறைந்த பிஸ்கட்கள்.<br>
<strong>பொருட்கள்:</strong> துளசி பொடி, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> சுவாச ஆரோக்கியத்தை மேம்படுத்துகிறது, நோய் எதிர்ப்பு சக்தி அதிகரிப்பு.`
},
{
  name:'Hibiscus Biscuit - 80g',
  ta:'செம்பருத்தி பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/hb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Herbal biscuits made with Hibiscus flowers, offering a mild tangy taste.<br>
<strong>Ingredients:</strong> Hibiscus Powder, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Supports hair health, rich in antioxidants.`,
  descTa:`<strong>விளக்கம்:</strong> செம்பருத்தி பூக்கள் சேர்க்கப்பட்ட மூலிகை பிஸ்கட்கள்.<br>
<strong>பொருட்கள்:</strong> செம்பருத்தி பொடி, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> முடி ஆரோக்கியத்தை மேம்படுத்துகிறது, ஆன்டிஆக்ஸிடன்ட் நிறைந்தது.`
},
{
  name:'Amla Biscuit - 80g',
  ta:'நெல்லிக்காய் பிஸ்கட் - 80கிராம்',
  price:'₹49',
  img:'images/amb.jpeg',
  category:'millet',
  descEn:`<strong>Description:</strong> Nutritious biscuits enriched with Amla for daily wellness.<br>
<strong>Ingredients:</strong> Amla Powder, Wheat Flour, Country Sugar, Edible Oil.<br>
<strong>Health Benefits:</strong> Improves digestion, boosts immunity, rich in Vitamin C.`,
  descTa:`<strong>விளக்கம்:</strong> நெல்லிக்காய் சேர்க்கப்பட்ட சத்தான பிஸ்கட்கள்.<br>
<strong>பொருட்கள்:</strong> நெல்லிக்காய் பொடி, கோதுமை மாவு, நாட்டுச் சர்க்கரை, சமையல் எண்ணெய்.<br>
<strong>நன்மைகள்:</strong> செரிமானத்தை மேம்படுத்துகிறது, வைட்டமின் C அதிகம்.`
},
];

// ==============================
// 2. Variables
// ==============================
const grid = document.getElementById('productGrid');
const modal = new bootstrap.Modal(document.getElementById('productModal'));
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const instaBtn = document.getElementById('instaBtn');

let lang = 'en';
let currentProduct = null;

// ==============================
// 3. Render Products
// ==============================
function renderProducts() {
  grid.innerHTML = '';

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = p.category;

    const title = (lang === 'ta') ? p.ta : p.name;
    const sub = (lang === 'ta') ? p.name : p.ta;

    card.innerHTML = `
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <div class="mt-2 text-center">
        <div class="fw-bold">${title}</div>
        <div class="small text-muted">${sub}</div>
        <div class="price fw-bold">${p.price}</div>
      </div>
    `;

    card.onclick = () => openProduct(p);
    grid.appendChild(card);
  });
}

// ==============================
// 4. Modal Logic
// ==============================
function openProduct(p) {
  currentProduct = p;
  modalTitle.textContent = (lang === 'ta') ? p.ta : p.name;
  modalImage.src = p.img;
  modalPrice.textContent = p.price;

  modalDesc.innerHTML = `
    <button class="btn btn-sm mb-3" style="background:#2f7a3e;color:white;border-radius:20px"
      onclick="toggleModalLang()">
      ${lang === 'en' ? 'தமிழ்' : 'English'}
    </button>
    <div>${lang === 'ta' ? p.descTa : p.descEn}</div>
  `;

  instaBtn.href = p.insta;
  instaBtn.style.display = p.insta ? 'inline-block' : 'none';

  modal.show();
}

// ==============================
// 5. Language Toggle
// ==============================
function toggleModalLang() {
  lang = (lang === 'en') ? 'ta' : 'en';
  if (currentProduct) openProduct(currentProduct);
  renderProducts();
}

// ==============================
// 6. Category Filter
// ==============================
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  const tabs = document.querySelectorAll('.shop-tabs .tab');

  // Reset active state
  tabs.forEach(tab => tab.classList.remove('active'));

  // Activate clicked tab
  tabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.classList.add('active');
    }
  });

  // Filter products
  cards.forEach(card => {
    const cat = card.dataset.category;
    card.style.display =
      category === 'all' || cat === category ? '' : 'none';
  });
}
// Category tab click handling
document.querySelectorAll('.shop-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    filterProducts(tab.dataset.category);
  });
});


// ==============================
// 7. Initial Load
// ==============================
document.addEventListener('DOMContentLoaded', renderProducts);

