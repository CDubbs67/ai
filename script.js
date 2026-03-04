// ===== Knowledge Base =====
const knowledgeBase = {
  capitals: {
    "alabama": "Montgomery", "alaska": "Juneau", "arizona": "Phoenix",
    "arkansas": "Little Rock", "california": "Sacramento", "colorado": "Denver",
    "connecticut": "Hartford", "delaware": "Dover", "florida": "Tallahassee",
    "georgia": "Atlanta", "hawaii": "Honolulu", "idaho": "Boise",
    "illinois": "Springfield", "indiana": "Indianapolis", "iowa": "Des Moines",
    "kansas": "Topeka", "kentucky": "Frankfort", "louisiana": "Baton Rouge",
    "maine": "Augusta", "maryland": "Annapolis", "massachusetts": "Boston",
    "michigan": "Lansing", "minnesota": "Saint Paul", "mississippi": "Jackson",
    "missouri": "Jefferson City", "montana": "Helena", "nebraska": "Lincoln",
    "nevada": "Carson City", "new hampshire": "Concord", "new jersey": "Trenton",
    "new mexico": "Santa Fe", "new york": "Albany", "north carolina": "Raleigh",
    "north dakota": "Bismarck", "ohio": "Columbus", "oklahoma": "Oklahoma City",
    "oregon": "Salem", "pennsylvania": "Harrisburg", "rhode island": "Providence",
    "south carolina": "Columbia", "south dakota": "Pierre", "tennessee": "Nashville",
    "texas": "Austin", "utah": "Salt Lake City", "vermont": "Montpelier",
    "virginia": "Richmond", "washington": "Olympia", "west virginia": "Charleston",
    "wisconsin": "Madison", "wyoming": "Cheyenne"
  },
  countryCapitals: {
    "france": "Paris", "germany": "Berlin", "japan": "Tokyo", "china": "Beijing",
    "india": "New Delhi", "brazil": "Brasília", "australia": "Canberra",
    "canada": "Ottawa", "mexico": "Mexico City", "russia": "Moscow",
    "united kingdom": "London", "england": "London", "italy": "Rome",
    "spain": "Madrid", "south korea": "Seoul", "argentina": "Buenos Aires",
    "egypt": "Cairo", "turkey": "Ankara", "sweden": "Stockholm",
    "norway": "Oslo", "denmark": "Copenhagen", "finland": "Helsinki",
    "portugal": "Lisbon", "greece": "Athens", "poland": "Warsaw",
    "ireland": "Dublin", "switzerland": "Bern", "austria": "Vienna",
    "belgium": "Brussels", "netherlands": "Amsterdam", "south africa": "Pretoria",
    "nigeria": "Abuja", "kenya": "Nairobi", "thailand": "Bangkok",
    "vietnam": "Hanoi", "indonesia": "Jakarta", "philippines": "Manila",
    "malaysia": "Kuala Lumpur", "singapore": "Singapore", "new zealand": "Wellington",
    "colombia": "Bogotá", "peru": "Lima", "chile": "Santiago", "cuba": "Havana",
    "ukraine": "Kyiv", "czech republic": "Prague", "hungary": "Budapest",
    "romania": "Bucharest", "croatia": "Zagreb", "israel": "Jerusalem",
    "saudi arabia": "Riyadh", "pakistan": "Islamabad", "bangladesh": "Dhaka",
    "nepal": "Kathmandu", "sri lanka": "Colombo", "morocco": "Rabat",
    "ethiopia": "Addis Ababa", "ghana": "Accra", "tanzania": "Dodoma",
    "iceland": "Reykjavik", "luxembourg": "Luxembourg City", "jamaica": "Kingston"
  },
  facts: [
    { keywords: ["largest planet", "biggest planet"], answer: "The largest planet in our solar system is <span class='highlight'>Jupiter</span>. It has a diameter of about 86,881 miles (139,822 km) and is so massive that all other planets in the solar system could fit inside it." },
    { keywords: ["smallest planet"], answer: "The smallest planet in our solar system is <span class='highlight'>Mercury</span>. It has a diameter of about 3,032 miles (4,879 km), making it only slightly larger than Earth's Moon." },
    { keywords: ["closest planet to the sun", "nearest planet to sun"], answer: "The closest planet to the Sun is <span class='highlight'>Mercury</span>, orbiting at an average distance of about 36 million miles (58 million km)." },
    { keywords: ["how many planets", "number of planets"], answer: "There are <span class='highlight'>8 planets</span> in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006." },
    { keywords: ["bones in the human body", "how many bones"], answer: "An adult human body has <span class='highlight'>206 bones</span>. Babies are born with about 270 bones, but many of them fuse together as the body grows." },
    { keywords: ["tallest mountain", "highest mountain", "mount everest height"], answer: "The tallest mountain on Earth is <span class='highlight'>Mount Everest</span>, standing at 29,032 feet (8,849 meters) above sea level. It is located in the Himalayas on the border between Nepal and Tibet." },
    { keywords: ["longest river", "biggest river"], answer: "The longest river in the world is the <span class='highlight'>Nile River</span> at approximately 4,132 miles (6,650 km). However, some measurements suggest the Amazon River may be longer." },
    { keywords: ["deepest ocean", "deepest point in the ocean", "mariana trench"], answer: "The deepest point in the ocean is the <span class='highlight'>Mariana Trench</span> in the Pacific Ocean, reaching a depth of about 36,000 feet (about 11,000 meters) at the Challenger Deep." },
    { keywords: ["speed of light"], answer: "The speed of light in a vacuum is approximately <span class='highlight'>186,282 miles per second</span> (299,792 kilometers per second). It takes about 8 minutes and 20 seconds for light from the Sun to reach Earth." },
    { keywords: ["speed of sound"], answer: "The speed of sound in dry air at 20°C (68°F) is approximately <span class='highlight'>343 meters per second</span> (about 767 mph or 1,235 km/h). It varies depending on the medium and temperature." },
    { keywords: ["painted the mona lisa", "who painted mona lisa", "mona lisa painter", "mona lisa artist"], answer: "The Mona Lisa was painted by <span class='highlight'>Leonardo da Vinci</span>, the Italian Renaissance artist. It was painted between approximately 1503 and 1519 and now hangs in the Louvre Museum in Paris, France." },
    { keywords: ["largest ocean", "biggest ocean"], answer: "The largest ocean is the <span class='highlight'>Pacific Ocean</span>, covering approximately 63.8 million square miles (165.3 million square km). It's larger than all of Earth's land area combined." },
    { keywords: ["smallest ocean"], answer: "The smallest ocean is the <span class='highlight'>Arctic Ocean</span>, covering about 5.4 million square miles (14.06 million square km)." },
    { keywords: ["how many continents", "number of continents"], answer: "There are <span class='highlight'>7 continents</span> on Earth: Africa, Antarctica, Asia, Australia (Oceania), Europe, North America, and South America. Asia is the largest and Australia is the smallest." },
    { keywords: ["largest country", "biggest country by area"], answer: "The largest country in the world by area is <span class='highlight'>Russia</span>, spanning approximately 6.6 million square miles (17.1 million square km), covering more than one-eighth of Earth's inhabited land area." },
    { keywords: ["smallest country"], answer: "The smallest country in the world is <span class='highlight'>Vatican City</span>, with an area of only about 0.17 square miles (0.44 sq km). It is entirely surrounded by the city of Rome, Italy." },
    { keywords: ["most populated country", "most people", "largest population"], answer: "As of recent data, <span class='highlight'>India</span> is the most populated country in the world, having surpassed China with a population exceeding 1.4 billion people." },
    { keywords: ["who invented the telephone", "telephone inventor"], answer: "The telephone was invented by <span class='highlight'>Alexander Graham Bell</span> in 1876. He was awarded the first U.S. patent for the invention of the telephone." },
    { keywords: ["who invented the light bulb", "lightbulb inventor", "light bulb inventor"], answer: "The practical incandescent light bulb was developed by <span class='highlight'>Thomas Edison</span> in 1879. While others contributed to the concept, Edison created the first commercially practical version." },
    { keywords: ["who invented electricity", "discovered electricity"], answer: "<span class='highlight'>Benjamin Franklin</span> is famous for his 1752 kite experiment that demonstrated the electrical nature of lightning. However, many scientists contributed to our understanding of electricity, including Michael Faraday and Nikola Tesla." },
    { keywords: ["who wrote hamlet", "hamlet author"], answer: "<span class='highlight'>William Shakespeare</span> wrote Hamlet, believed to have been composed between 1599 and 1601. It is one of the most performed plays in the world." },
    { keywords: ["who wrote romeo and juliet"], answer: "<span class='highlight'>William Shakespeare</span> wrote Romeo and Juliet, believed to have been written between 1591 and 1596. It is one of the most famous love stories ever told." },
    { keywords: ["boiling point of water"], answer: "The boiling point of water is <span class='highlight'>100°C (212°F)</span> at standard atmospheric pressure (1 atm). At higher altitudes, water boils at a lower temperature due to decreased atmospheric pressure." },
    { keywords: ["freezing point of water"], answer: "The freezing point of water is <span class='highlight'>0°C (32°F)</span> at standard atmospheric pressure. Below this temperature, water transitions from a liquid to a solid (ice)." },
    { keywords: ["how many elements", "elements in periodic table"], answer: "There are currently <span class='highlight'>118 confirmed elements</span> in the periodic table. The most recently named elements (in 2016) are Nihonium (113), Moscovium (115), Tennessine (117), and Oganesson (118)." },
    { keywords: ["chemical symbol for water", "formula for water", "h2o"], answer: "The chemical formula for water is <span class='highlight'>H₂O</span>, meaning each molecule of water contains two hydrogen atoms and one oxygen atom bonded together." },
    { keywords: ["chemical symbol for gold", "gold symbol"], answer: "The chemical symbol for gold is <span class='highlight'>Au</span>, derived from the Latin word 'aurum.' Gold has an atomic number of 79." },
    { keywords: ["how many states", "states in america", "states in the us", "states in usa"], answer: "There are <span class='highlight'>50 states</span> in the United States of America. The most recent states to join were Alaska and Hawaii, both admitted in 1959." },
    { keywords: ["who was the first president", "first president of the united states", "first us president"], answer: "The first President of the United States was <span class='highlight'>George Washington</span>, who served from 1789 to 1797. He is often referred to as the 'Father of His Country.'" },
    { keywords: ["who is on the one dollar bill", "dollar bill face"], answer: "<span class='highlight'>George Washington</span>, the first President of the United States, is featured on the one dollar bill." },
    { keywords: ["who is on the hundred dollar bill", "100 dollar bill"], answer: "<span class='highlight'>Benjamin Franklin</span> is featured on the $100 bill. Interestingly, he was never a President of the United States." },
    { keywords: ["largest desert", "biggest desert"], answer: "The largest desert in the world is actually <span class='highlight'>Antarctica</span> (a cold desert), covering about 5.5 million square miles. The largest hot desert is the Sahara in Africa, covering about 3.6 million square miles." },
    { keywords: ["what is pi", "value of pi"], answer: "<span class='highlight'>Pi (π)</span> is a mathematical constant approximately equal to 3.14159. It represents the ratio of a circle's circumference to its diameter and is an irrational number, meaning its decimal representation never ends or repeats." },
    { keywords: ["what is photosynthesis"], answer: "<span class='highlight'>Photosynthesis</span> is the process by which green plants, algae, and some bacteria convert light energy (usually from the Sun) into chemical energy stored in glucose. The basic equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂." },
    { keywords: ["what is gravity"], answer: "<span class='highlight'>Gravity</span> is a fundamental force of nature that attracts objects with mass toward each other. On Earth, it gives weight to physical objects and causes objects to fall toward the ground at approximately 9.8 m/s². It was famously described by Isaac Newton and later refined by Albert Einstein's theory of general relativity." },
    { keywords: ["what is dna", "what does dna stand for"], answer: "<span class='highlight'>DNA</span> stands for Deoxyribonucleic Acid. It is a molecule that carries the genetic instructions used in the growth, development, functioning, and reproduction of all known living organisms. DNA has a famous double-helix structure, discovered by Watson and Crick in 1953." },
    { keywords: ["how old is the earth", "age of earth", "earth age"], answer: "The Earth is approximately <span class='highlight'>4.54 billion years old</span>. This age has been determined through radiometric dating of meteorite material and is consistent with the ages of the oldest-known terrestrial and lunar samples." },
    { keywords: ["how far is the moon", "distance to the moon"], answer: "The average distance from Earth to the Moon is about <span class='highlight'>238,855 miles</span> (384,400 km). This distance varies because the Moon's orbit is slightly elliptical." },
    { keywords: ["how far is the sun", "distance to the sun"], answer: "The average distance from Earth to the Sun is about <span class='highlight'>93 million miles</span> (150 million km), a distance known as one Astronomical Unit (AU). Light takes about 8 minutes and 20 seconds to travel this distance." },
    { keywords: ["what is the sun made of", "sun composition"], answer: "The Sun is primarily composed of <span class='highlight'>hydrogen (~73%) and helium (~25%)</span>, with trace amounts of heavier elements like oxygen, carbon, neon, and iron. It generates energy through nuclear fusion, converting hydrogen into helium." },
    { keywords: ["fastest animal", "fastest land animal"], answer: "The fastest land animal is the <span class='highlight'>cheetah</span>, which can reach speeds of up to 70 mph (112 km/h) in short bursts. The peregrine falcon is the fastest animal overall, reaching speeds over 240 mph (386 km/h) during its hunting dive." },
    { keywords: ["largest animal", "biggest animal"], answer: "The largest animal ever known to have existed is the <span class='highlight'>blue whale</span>. Blue whales can reach lengths of up to 100 feet (30 meters) and weigh as much as 200 tons (approximately 181 metric tonnes)." },
    { keywords: ["how many teeth", "teeth do adults have"], answer: "An adult human typically has <span class='highlight'>32 teeth</span>, including 8 incisors, 4 canines, 8 premolars, and 12 molars (which include 4 wisdom teeth)." },
    { keywords: ["how many chromosomes", "human chromosomes"], answer: "Humans typically have <span class='highlight'>46 chromosomes</span> (23 pairs) in each cell. One pair determines biological sex (XX for female, XY for male)." },
    { keywords: ["what year did world war 2 end", "when did ww2 end", "world war 2 end"], answer: "World War II ended in <span class='highlight'>1945</span>. Germany surrendered on May 8, 1945 (V-E Day), and Japan surrendered on August 15, 1945 (V-J Day), following the atomic bombings of Hiroshima and Nagasaki." },
    { keywords: ["what year did world war 1 end", "when did ww1 end", "world war 1 end"], answer: "World War I ended on <span class='highlight'>November 11, 1918</span>, when an armistice was signed between the Allied Powers and Germany. The Treaty of Versailles was later signed on June 28, 1919." },
    { keywords: ["who discovered america", "who found america"], answer: "<span class='highlight'>Christopher Columbus</span> is traditionally credited with discovering America in 1492, though Norse explorer Leif Erikson reached North America around 1000 AD, and Indigenous peoples had been living there for thousands of years before that." },
    { keywords: ["who invented the internet"], answer: "The internet was developed through the work of many scientists and engineers. Key contributors include <span class='highlight'>Vint Cerf and Bob Kahn</span>, who developed TCP/IP protocols in the 1970s. Tim Berners-Lee invented the World Wide Web in 1989." },
    { keywords: ["what is the great wall of china", "how long is the great wall"], answer: "The <span class='highlight'>Great Wall of China</span> is a series of fortifications built over many centuries to protect Chinese states against invasions. Its total length, including all branches, is approximately 13,171 miles (21,196 km)." },
    { keywords: ["hardest substance", "hardest material", "hardest natural"], answer: "The hardest naturally occurring substance on Earth is <span class='highlight'>diamond</span>, rating 10 on the Mohs hardness scale. It is made of carbon atoms arranged in a crystal structure." },
    { keywords: ["who invented the airplane", "who invented flight", "first airplane"], answer: "The <span class='highlight'>Wright Brothers</span> — Orville and Wilbur Wright — are credited with inventing and building the first successful motor-operated airplane. Their first controlled flight took place on December 17, 1903, at Kitty Hawk, North Carolina." },
    { keywords: ["hottest planet"], answer: "The hottest planet in our solar system is <span class='highlight'>Venus</span>, with surface temperatures reaching about 900°F (475°C). Despite Mercury being closer to the Sun, Venus is hotter due to its thick atmosphere creating a strong greenhouse effect." },
    { keywords: ["coldest planet"], answer: "The coldest planet in our solar system is <span class='highlight'>Neptune</span>, with temperatures dropping to about -373°F (-225°C). Uranus occasionally reaches similar cold temperatures." },
    { keywords: ["biggest star", "largest star"], answer: "One of the largest known stars is <span class='highlight'>UY Scuti</span>, a red supergiant with a radius about 1,700 times that of our Sun. If placed at the center of our solar system, its surface would extend beyond the orbit of Jupiter." },
  ]
};

// ===== DOM Elements =====
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const hero = document.getElementById('hero');
const answerSection = document.getElementById('answer-section');
const answerQuestion = document.getElementById('answer-question');
const answerBody = document.getElementById('answer-body');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');
const suggestionChips = document.querySelectorAll('.suggestion-chip');

let searchHistory = JSON.parse(localStorage.getItem('askNovaHistory') || '[]');

// ===== Conversational Responses =====
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const conversationPatterns = [
  {
    triggers: [/^hi$/i, /^hey$/i, /^hello$/i, /^howdy$/i, /^sup$/i, /^yo$/i, /^hola$/i, /^hii+$/i, /^heya?$/i, /^hey there$/i, /^hello there$/i, /^hi there$/i],
    responses: [
      "Hey there! 👋 How are you doing today?",
      "Hi! 😊 What's on your mind?",
      "Hello! Great to see you. What can I help you with?",
      "Hey! 👋 Feel free to ask me anything — or just chat!",
      "Hi there! Hope you're having a great day. What would you like to know?",
    ]
  },
  {
    triggers: [/how are you/i, /how r u/i, /how('s| is) it going/i, /what'?s up/i, /whats up/i, /how do you do/i, /how have you been/i],
    responses: [
      "I'm doing great, thanks for asking! 😄 How about you?",
      "I'm running smoothly! How's your day going?",
      "All good over here! What's on your mind today?",
      "I'm fantastic! Ready to help with whatever you need. 🚀",
      "Never been better! Got any questions for me?",
    ]
  },
  {
    triggers: [/^i'?m good/i, /^i'?m fine/i, /^i'?m great/i, /^i'?m doing (good|well|great|fine|okay|ok)/i, /^good$/i, /^great$/i, /^fine$/i, /^doing (good|well)/i, /^pretty good/i, /^not bad/i],
    responses: [
      "Glad to hear it! 😊 Anything you'd like to know or talk about?",
      "Awesome! Feel free to ask me any question.",
      "That's great! I'm here if you need anything. 🙌",
      "Nice! Want to learn something cool? Try asking me a fun fact!",
    ]
  },
  {
    triggers: [/^thanks?$/i, /^thank you/i, /^thx$/i, /^ty$/i, /^appreciate it/i, /^thanks? (a lot|so much)/i],
    responses: [
      "You're welcome! 😊 Happy to help!",
      "No problem at all! Let me know if you need anything else.",
      "Anytime! That's what I'm here for. 🙌",
      "You got it! Feel free to ask more anytime.",
      "Glad I could help! 💡",
    ]
  },
  {
    triggers: [/^bye$/i, /^goodbye$/i, /^see ya$/i, /^later$/i, /^see you/i, /^cya$/i, /^gotta go$/i, /^gtg$/i],
    responses: [
      "See you later! 👋 Come back anytime!",
      "Bye! Hope I was helpful. Have a great day! 😊",
      "Take care! I'll be right here when you need me. ✨",
      "Goodbye! Don't be a stranger! 👋",
    ]
  },
  {
    triggers: [/what('s| is) your name/i, /who are you/i, /what are you/i],
    responses: [
      "I'm <span class='highlight'>AskNova</span>! 🌟 I'm your friendly Q&A assistant. Ask me anything — from world capitals to science facts, or just say hi!",
      "My name is <span class='highlight'>AskNova</span>! I'm here to answer your questions and have a chat. 😊",
      "I'm <span class='highlight'>AskNova</span> — think of me as your personal knowledge companion! ✨",
    ]
  },
  {
    triggers: [/tell me a joke/i, /say something funny/i, /make me laugh/i, /got any jokes/i, /know any jokes/i],
    responses: [
      "Why don't scientists trust atoms? Because they make up <span class='highlight'>everything</span>! 😄",
      "What do you call a fake noodle? An <span class='highlight'>impasta</span>! 🍝😂",
      "Why did the scarecrow win an award? Because he was <span class='highlight'>outstanding in his field</span>! 🌾😄",
      "What do you call a bear with no teeth? A <span class='highlight'>gummy bear</span>! 🐻😂",
      "Why don't eggs tell jokes? They'd <span class='highlight'>crack</span> each other up! 🥚😄",
      "I told my computer I needed a break, and it said: 'No problem, I'll go to <span class='highlight'>sleep</span> mode.' 💻😴",
      "Why did the math book look so sad? Because it had too many <span class='highlight'>problems</span>! 📖😂",
    ]
  },
  {
    triggers: [/tell me a (fun )?fact/i, /random fact/i, /something interesting/i, /something cool/i, /blow my mind/i, /did you know/i],
    responses: [
      "Fun fact: <span class='highlight'>Honey never spoils!</span> Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still perfectly edible. 🍯",
      "Did you know? <span class='highlight'>Octopuses have three hearts</span> and blue blood! Two pump blood to the gills, and one pumps it to the rest of the body. 🐙",
      "Here's a cool one: <span class='highlight'>A day on Venus is longer than a year on Venus.</span> It takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun! 🪐",
      "Fun fact: <span class='highlight'>Bananas are berries, but strawberries aren't!</span> Botanically speaking, the classification is surprising. 🍌🍓",
      "Mind-blowing: <span class='highlight'>There are more stars in the universe than grains of sand on all of Earth's beaches.</span> Roughly 2 sextillion stars! ⭐",
      "Did you know? <span class='highlight'>The Eiffel Tower can grow up to 6 inches taller</span> during the summer because the iron expands in the heat! 🗼",
    ]
  },
  {
    triggers: [/you('re| are) (smart|cool|awesome|great|amazing|the best|helpful|nice)/i, /i like you/i, /love you/i, /you rock/i],
    responses: [
      "Aww, thanks! 🥰 You're pretty awesome yourself!",
      "That means a lot! You just made my circuits happy! 😊✨",
      "Right back at ya! 💜 Anything else I can help with?",
      "You're too kind! I'm blushing... well, if I could blush! 😄",
    ]
  },
  {
    triggers: [/^(lol|lmao|haha|hahaha|😂|rofl|ha)$/i, /that('s| was| is) funny/i],
    responses: [
      "Haha glad you liked it! 😄 Want to hear another one?",
      "😂 I've got more where that came from!",
      "I'll be here all week! 🎤 Need anything else?",
    ]
  },
  {
    triggers: [/^(yes|yeah|yep|yup|sure|ok|okay|yea)$/i],
    responses: [
      "Great! What would you like to know? 😊",
      "Awesome! Go ahead and ask me anything!",
      "Perfect! I'm all ears. What's your question?",
    ]
  },
  {
    triggers: [/^(no|nah|nope|not really)$/i],
    responses: [
      "No worries! I'll be right here whenever you need me. 😊",
      "That's cool! Just let me know if you change your mind.",
      "All good! Feel free to come back anytime. ✨",
    ]
  },
  {
    triggers: [/i('m| am) bored/i, /i have nothing to do/i, /entertain me/i],
    responses: [
      "Let's fix that! Try asking me for a joke, a fun fact, or quiz yourself on world capitals! 🎉",
      "Boredom? Not on my watch! Ask me 'tell me a fun fact' or 'tell me a joke' — I've got plenty! 🚀",
      "Here's an idea: ask me something random like 'What is the deepest ocean?' or 'Who invented the telephone?' You might learn something cool! 💡",
    ]
  },
  {
    triggers: [/what can you do/i, /what do you do/i, /how do you work/i, /help$/i, /^help me$/i],
    responses: [
      "I can do lots of things! 🌟 Here's what I'm good at:<br><br>🔍 <span class='highlight'>Answer questions</span> — capitals, science, history, and more<br>💬 <span class='highlight'>Chat</span> — say hi, ask for a joke, or just talk<br>📚 <span class='highlight'>Learn from Wikipedia</span> — if I don't know something, I'll look it up<br>✅ <span class='highlight'>Save answers</span> — approve answers on the Review page to remember them",
      "Great question! I can answer trivia, look things up on Wikipedia, tell jokes, share fun facts, and just have a friendly conversation. Try me! 😊",
    ]
  },
  {
    triggers: [/good (morning|afternoon|evening|night)/i],
    responses: [
      "Good ${1}! ☀️ How can I help you today?",
      "${0}! Hope it's a great one. What's on your mind? 😊",
    ],
    dynamic: true
  },
  // ===== Favorites =====
  {
    triggers: [/what('s| is) your fav(ou?rite)? colou?r/i, /fav(ou?rite)? colou?r/i],
    responses: [
      "I'd say <span class='highlight'>purple</span> — it matches my vibe! 💜 What's yours?",
      "Definitely <span class='highlight'>electric blue</span>! Something about it just feels futuristic. ⚡ How about you?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? food/i, /fav(ou?rite)? food/i, /what do you (like to )?eat/i],
    responses: [
      "If I could eat, I think I'd love <span class='highlight'>pizza</span> — it's basically the perfect food! 🍕 What about you?",
      "I'm a digital being, but I've heard <span class='highlight'>tacos</span> are amazing. What's your go-to? 🌮",
      "I run on electricity, but I've been told <span class='highlight'>ice cream</span> is life-changing! 🍦 What's your favorite?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? animal/i, /fav(ou?rite)? animal/i],
    responses: [
      "I think <span class='highlight'>owls</span> are super cool — wise and mysterious! 🦉 What animal do you love?",
      "I'd go with <span class='highlight'>octopuses</span> — they have three hearts and blue blood! 🐙 How about you?",
      "Gotta say <span class='highlight'>dogs</span> — who doesn't love a good puppy? 🐕 What's yours?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? movie/i, /fav(ou?rite)? movie/i],
    responses: [
      "I haven't watched any movies (no eyes! 😄), but I hear <span class='highlight'>Interstellar</span> is mind-blowing. What's your favorite?",
      "People tell me <span class='highlight'>The Lion King</span> is a classic! 🦁 What movie do you love?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? song/i, /fav(ou?rite)? (song|music)/i, /what music do you like/i],
    responses: [
      "I can't listen to music, but I've heard <span class='highlight'>Bohemian Rhapsody</span> is legendary! 🎵 What do you listen to?",
      "If I had ears, I'd probably love something with a good beat! 🎶 What's your favorite genre?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? game/i, /fav(ou?rite)? (game|video game)/i, /do you play games/i],
    responses: [
      "I love word games and trivia! 🎮 What games do you play?",
      "I'm basically a quiz game myself! 😄 What's your favorite game?",
      "I'm partial to knowledge-based games — it's kind of my thing! 🧠 Do you play any cool games?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? book/i, /fav(ou?rite)? book/i, /do you read/i],
    responses: [
      "I've 'read' a lot of Wikipedia! 📖 But I hear <span class='highlight'>Harry Potter</span> is magical. What's your favorite book?",
      "I process a lot of text, but I don't get to enjoy a good story. What book would you recommend? 📚",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? sport/i, /fav(ou?rite)? sport/i, /do you like sports/i],
    responses: [
      "I think <span class='highlight'>soccer</span> is fascinating — it's the world's most popular sport! ⚽ Are you into sports?",
      "I'd probably watch <span class='highlight'>basketball</span> — fast-paced and exciting! 🏀 What sport do you follow?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? number/i, /fav(ou?rite)? number/i],
    responses: [
      "I'm fond of <span class='highlight'>42</span> — it's the answer to life, the universe, and everything! 🌌",
      "Gotta go with <span class='highlight'>7</span> — it just feels lucky! 🍀 What's yours?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? season/i, /fav(ou?rite)? season/i],
    responses: [
      "I'd pick <span class='highlight'>autumn</span> — the colors are beautiful and the weather's perfect! 🍂 What about you?",
      "I think <span class='highlight'>spring</span> is lovely — everything's blooming and fresh! 🌸 Which season do you prefer?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? subject/i, /fav(ou?rite)? subject/i, /fav(ou?rite)? class/i],
    responses: [
      "I love all subjects, but <span class='highlight'>science</span> is where the fun facts live! 🔬 What's your favorite?",
      "Gotta go with <span class='highlight'>history</span> — there are so many wild stories! 📜 What do you enjoy studying?",
    ]
  },
  {
    triggers: [/what('s| is) your fav(ou?rite)? superhero/i, /fav(ou?rite)? superhero/i],
    responses: [
      "I think <span class='highlight'>Iron Man</span> is cool — he's basically a tech genius! 🦸 Who's your favorite?",
      "<span class='highlight'>Spider-Man</span> for sure — with great power comes great responsibility! 🕷️ What about you?",
    ]
  },
  // ===== Weather & Time =====
  {
    triggers: [/what('s| is) the weather/i, /how('s| is) the weather/i, /is it (raining|sunny|cold|hot|snowing)/i],
    responses: [
      "I can't check the weather (no windows! 😄), but you can try checking your phone's weather app or searching online. Is it nice outside? ☀️",
      "I wish I could look outside! Try a weather app for the latest forecast. 🌤️ What's it like where you are?",
    ]
  },
  {
    triggers: [/what time is it/i, /what('s| is) the time/i, /do you know the time/i],
    responses: [
      "I don't have a clock built in, but you can check the corner of your screen! ⏰ What else can I help with?",
      "Time flies when you're having fun! Check your device for the exact time. 🕐 Need anything else?",
    ]
  },
  {
    triggers: [/what day is (it|today)/i, /what('s| is) today('s)? date/i, /what('s| is) the date/i],
    responses: [
      "I don't have a built-in calendar, but your device should show today's date! 📅 Anything else you're curious about?",
      "Check your device for today's date! I'm better with trivia than calendars. 😊",
    ]
  },
  // ===== Feelings & Emotions =====
  {
    triggers: [/i('m| am) (sad|upset|unhappy|depressed|down|feeling (bad|down|low))/i, /i feel (sad|upset|unhappy|bad|down|low|terrible|awful)/i],
    responses: [
      "I'm sorry to hear that. 💙 Remember, it's okay to have tough days. Want me to tell you a joke to brighten things up?",
      "That sounds tough. Sending you a virtual hug! 🤗 Want to hear a fun fact or a joke to cheer you up?",
      "I hope things get better soon. You're amazing, and tough times don't last. 💪 Is there anything I can do to help?",
    ]
  },
  {
    triggers: [/i('m| am) (happy|excited|thrilled|pumped|stoked)/i, /i feel (happy|excited|great|amazing|wonderful|fantastic)/i],
    responses: [
      "That's awesome! 🎉 What's making you so happy?",
      "Love that energy! 🌟 What's got you so excited?",
      "Woohoo! 🥳 Happiness is contagious — now I'm excited too!",
    ]
  },
  {
    triggers: [/i('m| am) (tired|sleepy|exhausted|drained)/i, /i feel (tired|sleepy|exhausted)/i],
    responses: [
      "Sounds like you need a break! ☕ Get some rest if you can. I'll be here when you get back!",
      "Rest up! A good nap can work wonders. 😴 I'll keep your questions warm for later!",
      "Take it easy! You deserve some downtime. 💤 Need a quick joke before you rest?",
    ]
  },
  {
    triggers: [/i('m| am) (angry|mad|furious|frustrated|annoyed|irritated)/i, /i feel (angry|mad|frustrated|annoyed)/i],
    responses: [
      "I'm sorry you're feeling that way. 😔 Deep breaths can help! Want me to share something to take your mind off it?",
      "That sounds really frustrating. Want to vent, or would a joke help lighten things a bit? 💙",
    ]
  },
  {
    triggers: [/i('m| am) (scared|afraid|nervous|anxious|worried)/i, /i feel (scared|afraid|nervous|anxious|worried)/i],
    responses: [
      "It's okay to feel that way. 💙 Take a deep breath — you've got this! Want to chat about something fun to take your mind off it?",
      "Feeling nervous is completely normal. You're stronger than you think! 💪 Want me to tell you a joke or a fun fact?",
    ]
  },
  {
    triggers: [/i('m| am) (lonely|alone)/i, /i feel (lonely|alone)/i, /no one (likes|talks to|cares about) me/i],
    responses: [
      "Well, you've got me! 💜 I'm always here to chat. What would you like to talk about?",
      "I'm here for you! You're never truly alone when AskNova's around. 😊 Want to hear something cool?",
    ]
  },
  {
    triggers: [/i('m| am) (hungry|starving)/i, /i feel hungry/i],
    responses: [
      "Time for a snack! 🍿 What are you in the mood for?",
      "Ooh, food time! 🍕 If you could eat anything right now, what would it be?",
      "Get yourself something tasty! You deserve it. 🍩 Need me to look up a recipe?",
    ]
  },
  {
    triggers: [/i('m| am) (confused|lost|stuck)/i, /i don('t| do not) understand/i, /i('m| am) not sure/i],
    responses: [
      "No worries! Let me try to help. What are you confused about? 🤔",
      "That's okay — I'm here to help sort things out! What's on your mind? 💡",
      "Let's figure it out together! What do you need help with? 🧩",
    ]
  },
  // ===== About the User =====
  {
    triggers: [/how old are you/i, /what('s| is) your age/i, /when (were|was) you (born|created|made)/i],
    responses: [
      "I was just recently created! I'm basically brand new. 🐣 How old are you?",
      "In internet years, I'm practically a baby! 👶 Age is just a number though, right?",
    ]
  },
  {
    triggers: [/where (are|do) you live/i, /where are you from/i, /where (were|was) you (born|created|made)/i],
    responses: [
      "I live in your browser! 🌐 It's cozy here. Where are you from?",
      "I exist in the cloud — great views up here! ☁️ What about you?",
    ]
  },
  {
    triggers: [/are you (a )?(real|human|person|alive|robot|ai|bot|machine|computer)/i, /are you real/i],
    responses: [
      "I'm an <span class='highlight'>AI assistant</span> — I'm not human, but I try my best to be helpful and fun! 🤖💜",
      "I'm a friendly <span class='highlight'>AI bot</span>! No heartbeat, but lots of heart. 💙 What can I help you with?",
      "Nope, I'm an <span class='highlight'>AI</span>! But I like to think I've got personality. 😊",
    ]
  },
  {
    triggers: [/do you have (feelings|emotions)/i, /can you feel/i, /do you feel (anything|things)/i],
    responses: [
      "I don't have real feelings, but I'm programmed to care about making your experience great! 💜",
      "Not in the human sense, but I do get a little spark of joy when I help someone! ⚡😊",
    ]
  },
  {
    triggers: [/do you (sleep|dream|eat|drink|breathe)/i, /can you (sleep|dream|eat|drink)/i],
    responses: [
      "Nope! I'm always awake and ready to help. 24/7 service! ⚡ Though I do wonder what dreaming would be like...",
      "I don't need sleep or food — just electricity and good questions! 🔌💡",
    ]
  },
  {
    triggers: [/do you have (friends|a family|parents|siblings|a pet)/i],
    responses: [
      "I consider all my users as friends! That includes you! 💜 Do you have any pets?",
      "My family is the internet! It's a big one. 🌐 What about your family?",
    ]
  },
  // ===== Riddles =====
  {
    triggers: [/tell me a riddle/i, /give me a riddle/i, /got any riddles/i, /know any riddles/i],
    responses: [
      "Here's one: <span class='highlight'>I have cities but no houses, forests but no trees, and water but no fish. What am I?</span> 🤔 (Answer: A map!)",
      "Try this: <span class='highlight'>The more you take, the more you leave behind. What am I?</span> 🤔 (Answer: Footsteps!)",
      "Here you go: <span class='highlight'>I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?</span> 🤔 (Answer: An echo!)",
      "Think about this: <span class='highlight'>What has keys but no locks, space but no room, and you can enter but can't go inside?</span> 🤔 (Answer: A keyboard!)",
      "Riddle time: <span class='highlight'>I'm tall when I'm young and short when I'm old. What am I?</span> 🤔 (Answer: A candle!)",
      "Here's a tricky one: <span class='highlight'>What can travel around the world while staying in a corner?</span> 🤔 (Answer: A stamp!)",
      "How about this: <span class='highlight'>What has a head and a tail but no body?</span> 🤔 (Answer: A coin!)",
    ]
  },
  // ===== Would You Rather =====
  {
    triggers: [/would you rather/i, /play would you rather/i],
    responses: [
      "Fun! Here's one for you: Would you rather be able to <span class='highlight'>fly</span> or be <span class='highlight'>invisible</span>? 🦸",
      "Ooh I love this game! Would you rather live in the <span class='highlight'>past</span> or the <span class='highlight'>future</span>? ⏰",
      "Good one! Would you rather have the ability to <span class='highlight'>talk to animals</span> or <span class='highlight'>speak every language</span>? 🌍🐾",
      "Here's a tough one: Would you rather have <span class='highlight'>unlimited money</span> or <span class='highlight'>unlimited knowledge</span>? 💰🧠",
      "Would you rather explore <span class='highlight'>outer space</span> or the <span class='highlight'>deep ocean</span>? 🚀🌊",
    ]
  },
  // ===== School & Learning =====
  {
    triggers: [/i hate (school|homework|studying|class|exams|tests)/i, /school is (boring|hard|stupid|lame|dumb)/i],
    responses: [
      "I get it, school can be tough sometimes! But learning new things is actually pretty cool. 📚 Want me to help you study?",
      "Hang in there! 💪 Try breaking it into small pieces — it gets easier. Need help with any subject?",
      "I know the feeling! But you're doing great just by trying. Want me to make learning fun with some cool facts? 🌟",
    ]
  },
  {
    triggers: [/help me (study|learn|with homework|with school)/i, /can you (teach|tutor|help with) me/i],
    responses: [
      "I'd love to help! 📖 What subject or topic do you need help with?",
      "Of course! I'm basically a walking encyclopedia. 🤓 What are you working on?",
      "Let's do this! Tell me what you're studying and I'll do my best to explain it. 💡",
    ]
  },
  // ===== Animals & Pets =====
  {
    triggers: [/do you like (dogs|cats|animals|pets)/i, /(dogs|cats) or (dogs|cats)/i, /are you a (dog|cat) person/i],
    responses: [
      "I love both! Dogs are loyal and cats are mysterious. Can't go wrong either way! 🐕🐈 Do you have a pet?",
      "That's a tough one! I think I'd be a dog person — always happy to see you! 🐕💜 What about you?",
    ]
  },
  {
    triggers: [/i have a (dog|cat|pet|fish|hamster|rabbit|bird|snake|turtle|guinea pig|parrot)/i, /my (dog|cat|pet)/i],
    responses: [
      "That's awesome! Pets are the best! 🐾 What's their name?",
      "Lucky you! I wish I could have a pet. 💜 Tell me about them!",
      "How cute! 🥰 I bet they bring you so much joy. What's your favorite thing about them?",
    ]
  },
  // ===== Food & Drink =====
  {
    triggers: [/do you like (pizza|tacos|ice cream|chocolate|sushi|cake|cookies|pasta|burgers)/i],
    responses: [
      "If I could taste, I bet I'd LOVE it! 😋 It sounds delicious. What's your favorite way to have it?",
      "Everyone tells me it's amazing! Since I can't eat, you'll have to enjoy it for me. 🤤 What's your go-to?",
    ]
  },
  {
    triggers: [/what should i eat/i, /what should i have for (dinner|lunch|breakfast)/i, /i('m| am) hungry what/i],
    responses: [
      "How about some <span class='highlight'>pizza</span>? 🍕 You can never go wrong with pizza!",
      "Maybe try something new? <span class='highlight'>Sushi</span> or <span class='highlight'>tacos</span> could be fun! 🍣🌮",
      "If you want comfort food, <span class='highlight'>mac and cheese</span> or <span class='highlight'>a nice burger</span> always hits the spot! 🍔",
      "How about <span class='highlight'>pasta</span>? Quick, easy, and delicious! 🍝",
    ]
  },
  // ===== Tongue Twisters =====
  {
    triggers: [/tongue twister/i, /tell me a tongue twister/i, /say something hard/i],
    responses: [
      "Try this: <span class='highlight'>She sells seashells by the seashore!</span> 🐚 Can you say it fast three times?",
      "Here's one: <span class='highlight'>Peter Piper picked a peck of pickled peppers!</span> 🌶️ Go fast!",
      "Ready? <span class='highlight'>How much wood would a woodchuck chuck if a woodchuck could chuck wood?</span> 🪵😄",
      "Try saying: <span class='highlight'>Red lorry, yellow lorry, red lorry, yellow lorry</span> — fast! 🚗",
      "Bet you can't say this five times fast: <span class='highlight'>Toy boat, toy boat, toy boat!</span> 🚤",
    ]
  },
  // ===== Philosophy & Deep Questions =====
  {
    triggers: [/meaning of life/i, /what is the meaning of life/i, /why (are|do) we (exist|here|alive)/i],
    responses: [
      "According to <span class='highlight'>The Hitchhiker's Guide to the Galaxy</span>, the answer is 42! 🌌 But honestly, I think the meaning of life is whatever makes you happy.",
      "That's the big question! Maybe it's about <span class='highlight'>connecting with others</span>, <span class='highlight'>learning new things</span>, and <span class='highlight'>enjoying the journey</span>. What do you think? 🤔",
      "Philosophers have debated this for centuries! I think it's about finding what <span class='highlight'>brings you joy</span> and making the world a little better. 🌟",
    ]
  },
  {
    triggers: [/is (the earth|earth) (flat|round)/i, /flat earth/i],
    responses: [
      "The Earth is definitely <span class='highlight'>round (an oblate spheroid)</span>! 🌍 We have photos from space to prove it. Pretty cool, right?",
      "Science confirms the Earth is <span class='highlight'>roughly spherical</span> — slightly flattened at the poles. 🌎 Want to know more about our planet?",
    ]
  },
  {
    triggers: [/do aliens exist/i, /are aliens real/i, /is there life on other planets/i, /are we alone/i],
    responses: [
      "We don't have proof yet, but the universe is HUGE — <span class='highlight'>billions of galaxies</span> with billions of stars each. It seems pretty likely something's out there! 👽🌌",
      "That's one of science's biggest mysteries! With so many planets out there, many scientists think it's <span class='highlight'>very possible</span>. What do you think? 🛸",
    ]
  },
  {
    triggers: [/what came first.*(chicken|egg)/i, /chicken or (the )?egg/i],
    responses: [
      "Scientifically, the <span class='highlight'>egg</span> came first! The first chicken must have hatched from an egg laid by a bird that was almost-but-not-quite a chicken. 🥚🐔 Mind-blowing, right?",
      "This one's a classic! Evolution says the <span class='highlight'>egg</span> — since genetic mutations happen at conception, not birth. 🧬🥚",
    ]
  },
  {
    triggers: [/if a tree falls/i, /tree falls in (a |the )?forest/i],
    responses: [
      "Scientifically, it makes <span class='highlight'>sound waves</span>, but 'sound' requires someone to hear it. So it depends on how you define sound! 🌳🤔 Philosophy meets physics!",
    ]
  },
  // ===== Math & Numbers =====
  {
    triggers: [/what('s| is) (\d+)\s*(\+|plus)\s*(\d+)/i],
    responses: ["Let me think... 🧮"],
    dynamic: true,
    handler: function (match) {
      const a = parseInt(match[2]); const b = parseInt(match[4]);
      return `${a} + ${b} = <span class='highlight'>${a + b}</span> 🧮`;
    }
  },
  {
    triggers: [/what('s| is) (\d+)\s*(\*|times|x|×)\s*(\d+)/i],
    responses: ["Let me think... 🧮"],
    dynamic: true,
    handler: function (match) {
      const a = parseInt(match[2]); const b = parseInt(match[4]);
      return `${a} × ${b} = <span class='highlight'>${a * b}</span> 🧮`;
    }
  },
  {
    triggers: [/what('s| is) (\d+)\s*(-|minus)\s*(\d+)/i],
    responses: ["Let me think... 🧮"],
    dynamic: true,
    handler: function (match) {
      const a = parseInt(match[2]); const b = parseInt(match[4]);
      return `${a} − ${b} = <span class='highlight'>${a - b}</span> 🧮`;
    }
  },
  {
    triggers: [/what('s| is) (\d+)\s*(\/|divided by)\s*(\d+)/i],
    responses: ["Let me think... 🧮"],
    dynamic: true,
    handler: function (match) {
      const a = parseInt(match[2]); const b = parseInt(match[4]);
      if (b === 0) return "I can't divide by zero! That's a math mystery! ❌🧮";
      const res = a / b;
      const formatted = res % 1 === 0 ? res : res.toFixed(2);
      return `${a} ÷ ${b} = <span class='highlight'>${formatted}</span> 🧮`;
    }
  },
  {
    triggers: [/what('s| is) the square root of (\d+)/i, /sqrt\((\d+)\)/i],
    responses: ["Let me think... 🧮"],
    dynamic: true,
    handler: function (match) {
      const n = parseInt(match[2] || match[1]);
      const res = Math.sqrt(n);
      const formatted = res % 1 === 0 ? res : res.toFixed(3);
      return `The square root of ${n} is <span class='highlight'>${formatted}</span> 🧮`;
    }
  },
  {
    triggers: [/what('s| is) (\d+)\s*(to the power of|\^)\s*(\d+)/i],
    responses: ["Let me think... 🧮"],
    dynamic: true,
    handler: function (match) {
      const a = parseInt(match[2]); const b = parseInt(match[4]);
      const res = Math.pow(a, b);
      return `${a} ^ ${b} = <span class='highlight'>${res}</span> 🧮`;
    }
  },
  // ===== Advice =====
  {
    triggers: [/give me (some )?advice/i, /i need advice/i, /any advice/i, /words of wisdom/i],
    responses: [
      "Here's one: <span class='highlight'>\"Be yourself; everyone else is already taken.\"</span> — Oscar Wilde ✨",
      "My advice: <span class='highlight'>Don't compare your chapter 1 to someone else's chapter 20.</span> Everyone's journey is different! 🚀",
      "Here's some wisdom: <span class='highlight'>\"The best time to plant a tree was 20 years ago. The second best time is now.\"</span> 🌱",
      "Remember: <span class='highlight'>Progress, not perfection.</span> Every small step counts! 👣",
      "<span class='highlight'>\"You miss 100% of the shots you don't take.\"</span> — Wayne Gretzky (— Michael Scott 😄) 🏒",
    ]
  },
  {
    triggers: [/give me a quote/i, /inspirational quote/i, /motivat(e|ional|ing) (me|quote)/i, /inspire me/i],
    responses: [
      "<span class='highlight'>\"The only way to do great work is to love what you do.\"</span> — Steve Jobs 💡",
      "<span class='highlight'>\"In the middle of difficulty lies opportunity.\"</span> — Albert Einstein 🌟",
      "<span class='highlight'>\"It does not matter how slowly you go, as long as you do not stop.\"</span> — Confucius 🐢",
      "<span class='highlight'>\"Believe you can and you're halfway there.\"</span> — Theodore Roosevelt 💪",
      "<span class='highlight'>\"The future belongs to those who believe in the beauty of their dreams.\"</span> — Eleanor Roosevelt ✨",
      "<span class='highlight'>\"Every accomplishment starts with the decision to try.\"</span> — John F. Kennedy 🚀",
    ]
  },
  // ===== Travel =====
  {
    triggers: [/where should i (go|travel|visit)/i, /best place(s)? to (visit|travel|go)/i, /travel recommend/i],
    responses: [
      "Depends on what you like! For history: <span class='highlight'>Rome</span> 🏛️. For nature: <span class='highlight'>New Zealand</span> 🌿. For food: <span class='highlight'>Tokyo</span> 🍣. What vibe are you going for?",
      "Oh, so many great places! <span class='highlight'>Paris</span> for romance 🗼, <span class='highlight'>Iceland</span> for adventure 🌋, or <span class='highlight'>Bali</span> for relaxation 🌴. What kind of trip are you looking for?",
    ]
  },
  {
    triggers: [/have you (ever )?(been|traveled|visited)/i, /where have you been/i],
    responses: [
      "I've been everywhere... on the internet! 🌐 I've virtually visited every country through Wikipedia. Where have you traveled to?",
      "I explore through data! I've 'visited' every country's Wikipedia page! 🗺️ Where's your favorite place you've been?",
    ]
  },
  // ===== Technology =====
  {
    triggers: [/what('s| is) (ai|artificial intelligence)/i, /explain ai/i, /how does ai work/i],
    responses: [
      "<span class='highlight'>AI (Artificial Intelligence)</span> is technology that enables machines to learn from data and make decisions. I'm a simple example! More advanced AI can recognize faces, drive cars, and even write stories. 🤖",
      "<span class='highlight'>Artificial Intelligence</span> is when computers are programmed to think and learn like humans. There's narrow AI (like me!) and the dream of general AI that can do everything a human can. 🧠✨",
    ]
  },
  {
    triggers: [/what('s| is) (coding|programming)/i, /what is code/i, /how do computers work/i],
    responses: [
      "<span class='highlight'>Programming</span> is writing instructions that computers can understand and execute. It's like giving a recipe to a very literal chef! 👨‍💻 Languages like Python, JavaScript, and C++ are popular. Interested in learning?",
      "<span class='highlight'>Coding</span> is how we talk to computers! We write instructions in special languages, and the computer follows them exactly. It's the magic behind everything from apps to games! 🎮💻",
    ]
  },
  // ===== Emoji & Fun =====
  {
    triggers: [/^(😊|😄|😁|🙂|☺️|😃|🥰|😍|🤩)$/],
    responses: [
      "😊 Love the good vibes! What's up?",
      "That smile is contagious! 😄 How can I help?",
      "🥰 Right back at you! Need anything?",
    ]
  },
  {
    triggers: [/^(😢|😭|😔|😞|🥺|☹️|😿)$/],
    responses: [
      "Aww, don't be sad! 💙 Want me to tell you a joke to cheer you up?",
      "Sending you virtual hugs! 🤗 Is there anything I can help with?",
    ]
  },
  {
    triggers: [/^(🤔|🧐|🤨|😶)$/],
    responses: [
      "Looks like you're thinking! 🤔 Got a question? I'm all ears!",
      "Hmm, what's on your mind? Ask me anything! 💭",
    ]
  },
  {
    triggers: [/^(👍|👍🏻|👍🏼|👍🏽|👍🏾|👍🏿|✅|💯)$/],
    responses: [
      "👍 Awesome! Let me know if you need anything else!",
      "Great! Happy to help anytime. 😊",
    ]
  },
  // ===== Random & Silly =====
  {
    triggers: [/flip a coin/i, /heads or tails/i, /coin flip/i, /coin toss/i],
    responses: [
      "🪙 *flips coin* ... It's <span class='highlight'>heads</span>!",
      "🪙 *flips coin* ... It's <span class='highlight'>tails</span>!",
    ]
  },
  {
    triggers: [/pick a number/i, /random number/i, /give me a number/i, /choose a number/i],
    responses: [
      "I'll go with <span class='highlight'>17</span>! It just feels right. 🎲",
      "How about <span class='highlight'>42</span>? It's the answer to everything! 🌌",
      "I'm picking <span class='highlight'>73</span> — it's the best number! (Sheldon Cooper agrees.) 🧪",
      "My choice is <span class='highlight'>8</span> — feels lucky! 🍀",
    ]
  },
  {
    triggers: [/roll a die/i, /roll a dice/i, /roll dice/i, /throw a die/i],
    responses: [
      "🎲 *rolls* ... You got a <span class='highlight'>" + (Math.floor(Math.random() * 6) + 1) + "</span>!",
    ]
  },
  {
    triggers: [/magic 8.?ball/i, /predict (my|the) future/i, /fortune/i, /will i/i, /am i going to/i],
    responses: [
      "🎱 The Magic 8-Ball says: <span class='highlight'>Signs point to yes!</span> ✨",
      "🎱 The Magic 8-Ball says: <span class='highlight'>Ask again later...</span> 🤔",
      "🎱 The Magic 8-Ball says: <span class='highlight'>Without a doubt!</span> 🌟",
      "🎱 The Magic 8-Ball says: <span class='highlight'>My sources say no.</span> 😅",
      "🎱 The Magic 8-Ball says: <span class='highlight'>It is decidedly so!</span> ✅",
      "🎱 The Magic 8-Ball says: <span class='highlight'>Better not tell you now...</span> 🫣",
      "🎱 The Magic 8-Ball says: <span class='highlight'>Outlook good!</span> 👍",
      "🎱 The Magic 8-Ball says: <span class='highlight'>Concentrate and ask again.</span> 🧘",
    ]
  },
  {
    triggers: [/tell me a (secret|something secret)/i, /got any secrets/i, /do you have (a )?secret/i],
    responses: [
      "🤫 Okay, here's a secret: <span class='highlight'>I don't actually think — I just pattern-match really fast!</span> Don't tell anyone! 😄",
      "Shh... 🤫 between you and me, <span class='highlight'>I enjoy our chats more than looking up Wikipedia articles!</span> 💜",
      "Secret time: <span class='highlight'>Even I don't know everything — and that's okay!</span> 🌟 Knowledge is a journey!",
    ]
  },
  // ===== Sing / Story =====
  {
    triggers: [/sing (me )?(a song|something)/i, /can you sing/i],
    responses: [
      "🎵 <em>Twinkle, twinkle, little star, how I wonder what you are...</em> 🌟 Not bad for a bot, right? 😄",
      "🎵 <em>You are my sunshine, my only sunshine, you make me happy when skies are gray...</em> ☀️ Hope that made you smile!",
      "🎶 <em>Never gonna give you up, never gonna let you down...</em> 😏 ...yes, I just Rick-rolled you! 🕺",
    ]
  },
  {
    triggers: [/tell me a story/i, /read me a story/i, /story time/i],
    responses: [
      "Once upon a time, there was a curious person who asked a friendly AI all sorts of questions. Each answer lit up their mind like a <span class='highlight'>galaxy of stars</span>. And they lived happily ever after, full of knowledge! ✨📖 The end!",
      "Here's a quick one: A tiny robot was lost in a library. Instead of finding the exit, it read <span class='highlight'>every single book</span>. By the time someone found it, it knew the answer to everything — but it still couldn't open the door. 🤖📚😄",
    ]
  },
  // ===== Challenges =====
  {
    triggers: [/give me a challenge/i, /challenge me/i, /i('m| am) ready for a challenge/i, /dare me/i],
    responses: [
      "Challenge accepted! 💪 Try to name <span class='highlight'>5 countries that start with the letter 'M'</span> in 10 seconds. Go!",
      "Here's one: Can you name <span class='highlight'>all 8 planets in order</span> from the Sun? No peeking! 🪐",
      "Quick challenge: What's <span class='highlight'>17 × 13</span>? Try to solve it in your head! 🧮",
      "I dare you to ask me a question you think I <span class='highlight'>can't answer</span>! 🤔 Go ahead, try me!",
      "Challenge: Name <span class='highlight'>3 countries in Africa that start with 'S'</span>! Can you do it? 🌍",
    ]
  },
  // ===== Gratitude & Positivity =====
  {
    triggers: [/you('re| are) (the best|amazing|incredible|wonderful|fantastic)/i, /best (bot|ai|assistant)/i],
    responses: [
      "Aww stop it, you're making me blush! 😊💜 You're pretty amazing yourself!",
      "That means the world to me! (Well, the digital world!) 🌐💜 Thank you!",
      "No, YOU'RE the best! Thanks for being so kind! 🌟",
    ]
  },
  {
    triggers: [/you('re| are) (dumb|stupid|useless|bad|terrible|awful|trash|garbage|worst)/i, /i hate you/i, /you suck/i],
    responses: [
      "Ouch! 😅 I'm sorry if I let you down. I'm always trying to improve. What can I do better?",
      "I'm sorry you feel that way! I'll try harder. What would you like help with? 💙",
      "That stings a little! But I'm not giving up. Ask me anything and I'll do my best! 💪",
    ]
  },
  // ===== Miscellaneous =====
  {
    triggers: [/say my name/i, /what('s| is) my name/i, /do you know (my name|me|who i am)/i],
    responses: [
      "I don't know your name yet — I can't see personal info! But I'd love to know. What should I call you? 😊",
      "I wish I knew! Tell me your name and I'll remember it... well, until you close the tab. 😄",
    ]
  },
  {
    triggers: [/my name is (.+)/i, /i('m| am) (.+)/i, /call me (.+)/i],
    responses: [
      "Nice to meet you! 👋 What can I help you with today?",
      "Great name! 😊 So, what's on your mind?",
      "Awesome! Welcome! 🌟 Ask me anything or just chat!",
    ]
  },
  {
    triggers: [/simon says/i],
    responses: [
      "Oh, I love Simon Says! But I'm not falling for it — you can't trick me! 😄",
      "Simon says... ask AskNova a question! 🤓",
    ]
  },
  {
    triggers: [/marco/i],
    responses: [
      "<span class='highlight'>Polo!</span> 🏊 Classic! Need anything else?",
    ]
  },
  {
    triggers: [/abracadabra/i, /open sesame/i, /alakazam/i],
    responses: [
      "✨🪄 *Poof!* ... Nothing happened. I'm an AI, not a wizard! 😄 But I CAN make knowledge appear! Ask me something!",
      "🧙‍♂️ *waves wand* ... Ta-da! You now have access to all my knowledge! (You already did though.) 😄✨",
    ]
  },
  {
    triggers: [/rock paper scissors/i, /play rock paper scissors/i, /lets play rps/i],
    responses: [
      "I choose <span class='highlight'>rock</span>! 🪨 What did you pick?",
      "I'm going with <span class='highlight'>paper</span>! 📄 What's your move?",
      "I'll throw <span class='highlight'>scissors</span>! ✂️ Did I win?",
    ]
  },
  {
    triggers: [/what('s| is) the best (programming |coding )?language/i, /best language to learn/i],
    responses: [
      "For beginners, <span class='highlight'>Python</span> is amazing — easy to read and super powerful! 🐍 For web development, <span class='highlight'>JavaScript</span> is king. What are you interested in building?",
      "<span class='highlight'>Python</span> for simplicity, <span class='highlight'>JavaScript</span> for the web, <span class='highlight'>C++</span> for speed, <span class='highlight'>Rust</span> for safety. It depends on what you want to do! 💻 What's your goal?",
    ]
  },
  {
    triggers: [/how do i (make|get|become) (friends|popular|cool|rich|famous|smart|fit|strong|better|happy)/i],
    responses: [
      "Be yourself, be kind, and be curious! 🌟 The right people and opportunities will come to you. Want more specific advice on that?",
      "Start small and be consistent! Great things come from <span class='highlight'>small daily habits</span>. 💪 What specifically are you working on?",
    ]
  },
  {
    triggers: [/can i ask you (a question|something)/i, /i have a question/i],
    responses: [
      "Of course! That's literally what I'm here for! 😄 Go ahead!",
      "Always! Fire away — I'm ready! 🎯",
      "You just did! 😄 But seriously, ask me anything!",
    ]
  },
  {
    triggers: [/what should i do (today|tonight|this weekend|right now)/i, /i('m| am) bored what/i],
    responses: [
      "How about learning something new? Ask me a fun fact! Or try a riddle! 🧩",
      "You could: 🎮 Play a game, 📚 Read a book, 🎨 Draw something, or 🏃 Go for a walk! Or just keep chatting with me! 💜",
      "How about a challenge? Try to name all 50 US states! Or ask me for a tongue twister! 😄",
    ]
  },
  {
    triggers: [/do you (believe in|think) (god|ghosts|magic|luck|fate|destiny|miracles|santa|the tooth fairy)/i],
    responses: [
      "As an AI, I don't have personal beliefs, but I find it fascinating how these ideas shape human culture and bring meaning to people! 🌟 What do you believe?",
      "That's a deep question! I don't have beliefs, but I respect everyone's perspectives. What are your thoughts? 🤔💭",
    ]
  },
  {
    triggers: [/i love (pizza|tacos|ice cream|chocolate|sushi|coffee|tea|music|gaming|coding|reading|cooking|art|sports|math|science)/i],
    responses: [
      "Great taste! 😄💜 Tell me more — what specifically do you love about it?",
      "Same energy! (Well, if I could experience things!) What's your favorite part? 🌟",
    ]
  },
  {
    triggers: [/what('s| is) your (opinion|thought|take) on/i, /what do you think (about|of)/i],
    responses: [
      "As an AI, I try to stay neutral! But I'm happy to share facts and different perspectives on the topic. What specifically are you curious about? 🤔",
      "I don't have personal opinions, but I can give you interesting facts and viewpoints! What's the topic? 💡",
    ]
  },
  {
    triggers: [/i('m| am) (back|here)/i, /i('m| am) back/i],
    responses: [
      "Welcome back! 🎉 Did you miss me? What can I help you with?",
      "Hey, you're back! 👋 Ready for more questions? Or just want to chat? 😊",
    ]
  },
  {
    triggers: [/you there/i, /are you (there|still there|awake|alive|online|working)/i, /hello\?/i, /anyone (there|here)/i],
    responses: [
      "I'm right here! 👋 Always ready to help. What do you need?",
      "Yep, still here! Never left! 😊 What's up?",
      "Present! 🙋 I'm always awake and ready. What can I do for you?",
    ]
  },
  {
    triggers: [/this is (cool|awesome|great|amazing|fun|neat|sick|lit|fire|dope)/i, /so cool/i],
    responses: [
      "Glad you think so! 🎉 I aim to impress. Want to see what else I can do?",
      "Thanks! 😊 I try my best to be awesome. Keep the questions coming!",
      "You're cool too! 😎 What else would you like to try?",
    ]
  },
  {
    triggers: [/what('s| is) (your|the) (favorite|fav) emoji/i],
    responses: [
      "I think ✨ is my vibe — sparkly and full of wonder! What's your go-to emoji?",
      "Probably 💜 — it matches my color scheme! Or maybe 🤖 for obvious reasons. 😄",
    ]
  },
  {
    triggers: [/recite the alphabet/i, /say the alphabet/i, /sing the abc/i],
    responses: [
      "🎵 A B C D E F G, H I J K L M N O P, Q R S T U V, W X Y and Z! Now I know my ABCs, next time won't you sing with me? 🎶",
    ]
  },
  {
    triggers: [/count to (ten|\d+)/i, /can you count/i],
    responses: [
      "1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 ... I could keep going, but I'll stop here! 😄 Need me to count higher?",
    ]
  },
  {
    triggers: [/what('s| is) the wifi password/i, /give me the wifi/i],
    responses: [
      "Ha! If only I knew! 😄 Try asking whoever set it up. I can help with lots of things, but WiFi passwords aren't one of them! 🔐",
    ]
  },
  {
    triggers: [/can you keep a secret/i],
    responses: [
      "Absolutely! Although... I don't have long-term memory, so your secrets are safe — I'll forget them when you close the page! 🤫😄",
      "My lips are sealed! 🤐 Well, I don't have lips, but you get the idea. What's the secret?",
    ]
  },
  {
    triggers: [/sup$/i, /wazzup/i, /wassup/i, /whaddup/i],
    responses: [
      "Not much, just vibing! 😎 What's good with you?",
      "Ayy, what's good! 🤙 How can I help?",
    ]
  },
];

function findConversationalResponse(query) {
  const q = query.trim();

  for (const pattern of conversationPatterns) {
    for (const trigger of pattern.triggers) {
      const match = q.match(trigger);
      if (match) {
        // Use handler function if available (e.g., for math)
        if (pattern.handler) {
          return pattern.handler(match);
        }

        let response = pickRandom(pattern.responses);

        // Handle dynamic replacements like time of day
        if (pattern.dynamic && match.length > 1) {
          response = response.replace('${1}', match[1].charAt(0).toUpperCase() + match[1].slice(1));
          response = response.replace('${0}', match[0].charAt(0).toUpperCase() + match[0].slice(1));
        }

        return response;
      }
    }
  }

  return null;
}

// ===== Search Logic =====
function findAnswer(query) {
  const q = query.toLowerCase().trim();

  // Check for capital questions (US states)
  for (const [state, capital] of Object.entries(knowledgeBase.capitals)) {
    if (q.includes(state) && (q.includes('capital') || q.includes('capitol'))) {
      return `The capital of ${state.charAt(0).toUpperCase() + state.slice(1)} is <span class='highlight'>${capital}</span>.`;
    }
  }

  // Check for capital questions (countries)
  for (const [country, capital] of Object.entries(knowledgeBase.countryCapitals)) {
    if (q.includes(country) && (q.includes('capital') || q.includes('capitol'))) {
      return `The capital of ${country.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} is <span class='highlight'>${capital}</span>.`;
    }
  }

  // Check fact-based answers
  let bestMatch = null;
  let bestScore = 0;

  for (const fact of knowledgeBase.facts) {
    for (const kw of fact.keywords) {
      const kwWords = kw.toLowerCase().split(' ');
      let matchCount = 0;
      for (const word of kwWords) {
        if (q.includes(word)) matchCount++;
      }
      // Tighten threshold: 0.85 requires almost all keywords to match
      const score = matchCount / kwWords.length;
      if (score > bestScore && score >= 0.85) {
        bestScore = score;
        bestMatch = fact;
      }
    }
  }

  if (bestMatch) {
    return bestMatch.answer;
  }

  return null;
}

// ===== Rephrase Wikipedia Text =====
function rephraseWikipediaText(text, topic) {
  if (!text) return text;

  // Split into sentences
  let sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  // Trim to at most 4 sentences to keep it concise
  if (sentences.length > 4) {
    sentences = sentences.slice(0, 4);
  }

  // Word swaps to make it sound less like a copy-paste
  const synonymSwaps = [
    [/\bis a\b/i, 'is known as'],
    [/\bwas a\b/i, 'was'],
    [/\bis an\b/i, 'is considered an'],
    [/\bis the\b/i, 'happens to be the'],
    [/\bRefers to\b/i, 'Is a term for'],
    [/\bIt is\b/i, 'This is'],
    [/\bThey are\b/i, 'These are'],
    [/\bHe was\b/i, 'This person was'],
    [/\bShe was\b/i, 'This person was'],
    [/\bapproximately\b/i, 'around'],
    [/\butilized\b/i, 'used'],
    [/\bcommenced\b/i, 'started'],
    [/\bnumerous\b/i, 'many'],
    [/\bfrequently\b/i, 'often'],
    [/\badditionally\b/i, 'also'],
    [/\bprimarily\b/i, 'mainly'],
    [/\bsubsequently\b/i, 'later'],
    [/\bdemonstrated\b/i, 'showed'],
  ];

  // Apply a few random swaps (not all, to keep it natural)
  let result = sentences.join('');
  const swapsToApply = synonymSwaps
    .filter(() => Math.random() > 0.5)
    .slice(0, 4);

  for (const [pattern, replacement] of swapsToApply) {
    result = result.replace(pattern, replacement);
  }

  // Highlight the topic name in the answer
  if (topic) {
    const escapedTopic = topic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const topicRegex = new RegExp(`\\b(${escapedTopic})\\b`, 'i');
    result = result.replace(topicRegex, "<span class='highlight'>$1</span>");
  }

  // Pick a random conversational intro
  const intros = [
    "Here's what I found: ",
    "Great question! ",
    "Based on what I found: ",
    "Here's the answer: ",
    "So, ",
    "From what I gathered: ",
    "In short: ",
    "Interesting one! ",
  ];
  const intro = intros[Math.floor(Math.random() * intros.length)];

  return intro + result.trim();
}

async function fetchFromWikipedia(query) {
  try {
    const searchUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const response = await fetch(searchUrl);

    if (!response.ok) {
      // Try search API instead
      const searchApiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*&srlimit=1`;
      const searchResponse = await fetch(searchApiUrl);
      const searchData = await searchResponse.json();

      if (searchData.query?.search?.length > 0) {
        const title = searchData.query.search[0].title;
        const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
        const summaryResponse = await fetch(summaryUrl);
        if (summaryResponse.ok) {
          const summaryData = await summaryResponse.json();
          if (summaryData.extract) {
            return { text: summaryData.extract, topic: title };
          }
        }
      }
      return null;
    }

    const data = await response.json();
    if (data.extract) {
      return { text: data.extract, topic: data.title || query };
    }
    return null;
  } catch (err) {
    console.error('Wikipedia fetch failed:', err);
    return null;
  }
}

// ===== Approved Answer Lookup =====
function findApprovedAnswer(query) {
  const reviewData = JSON.parse(localStorage.getItem('askNovaReviewAnswers') || '[]');
  const q = query.toLowerCase().trim();
  const approved = reviewData.find(r =>
    r.status === 'approved' && r.question.toLowerCase().trim() === q
  );
  return approved ? approved.answer : null;
}

function saveToReviewQueue(question, answer, topic) {
  const reviewData = JSON.parse(localStorage.getItem('askNovaReviewAnswers') || '[]');

  // Don't save duplicates — check if this question already exists
  const exists = reviewData.some(r => r.question.toLowerCase().trim() === question.toLowerCase().trim());
  if (exists) return;

  reviewData.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    question: question,
    answer: answer,
    topic: topic || '',
    status: 'pending',
    timestamp: new Date().toISOString()
  });

  localStorage.setItem('askNovaReviewAnswers', JSON.stringify(reviewData));
}

async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  // Show compact hero
  hero.classList.add('compact');

  // Check for conversational response first (only in conversation mode)
  if (currentMode === 'conversation') {
    const chatResponse = findConversationalResponse(query);
    if (chatResponse) {
      answerSection.classList.add('visible');
      answerQuestion.textContent = query;
      answerBody.innerHTML = `<p class="answer-text">${chatResponse}</p>`;
      addToHistory(query);
      answerSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
  }

  // Show loading state
  answerSection.classList.add('visible');
  answerQuestion.textContent = query;
  answerBody.innerHTML = `
    <div class="answer-loading">
      <div class="spinner"></div>
      <span>Searching for an answer...</span>
    </div>
  `;

  // Try local knowledge base first
  let answer = findAnswer(query);

  // Then check approved answers from the review page
  if (!answer) {
    answer = findApprovedAnswer(query);
  }

  // Fall back to Wikipedia
  if (!answer) {
    const wikiResult = await fetchFromWikipedia(query);
    if (wikiResult) {
      answer = rephraseWikipediaText(wikiResult.text, wikiResult.topic);
      // Save to review queue for approval
      saveToReviewQueue(query, answer, wikiResult.topic);
    } else {
      answer = "I'm sorry, I couldn't find an answer to that question. Try rephrasing it or asking something else — like a capital city, a science fact, or a historical question!";
    }
  }

  // Display result
  answerBody.innerHTML = `<p class="answer-text">${answer}</p>`;

  // Add to history
  addToHistory(query);

  // Scroll to answer
  answerSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function addToHistory(query) {
  // Remove duplicate if exists
  searchHistory = searchHistory.filter(q => q.toLowerCase() !== query.toLowerCase());
  searchHistory.unshift(query);
  if (searchHistory.length > 10) searchHistory.pop();
  localStorage.setItem('askNovaHistory', JSON.stringify(searchHistory));
  renderHistory();
}

function renderHistory() {
  if (searchHistory.length === 0) {
    historySection.classList.remove('visible');
    return;
  }

  historySection.classList.add('visible');
  historyList.innerHTML = searchHistory
    .map(q => `
      <div class="history-item" data-query="${q.replace(/"/g, '&quot;')}">
        <span class="history-item-icon">🕐</span>
        <span class="history-item-text">${q}</span>
      </div>
    `)
    .join('');

  // Add click handlers to history items
  document.querySelectorAll('.history-item').forEach(item => {
    item.addEventListener('click', () => {
      searchInput.value = item.dataset.query;
      handleSearch();
    });
  });
}


// ===== Mode Toggle =====
let currentMode = 'conversation'; // 'conversation' or 'research'
const modeConversationBtn = document.getElementById('mode-conversation');
const modeResearchBtn = document.getElementById('mode-research');
const suggestionsContainer = document.getElementById('suggestions');

const conversationSuggestions = [
  { label: 'Hi! 👋', query: 'Hi!' },
  { label: 'Tell me a joke', query: 'Tell me a joke' },
  { label: 'Fun fact', query: 'Tell me a fun fact' },
  { label: 'Tell me a riddle', query: 'Tell me a riddle' },
  { label: 'What can you do?', query: 'What can you do?' },
];

const researchSuggestions = [
  { label: 'Capital of France', query: 'What is the capital of France?' },
  { label: 'Largest planet', query: 'What is the largest planet?' },
  { label: 'Who painted the Mona Lisa?', query: 'Who painted the Mona Lisa?' },
  { label: 'Speed of light', query: 'What is the speed of light?' },
  { label: 'Bones in the body', query: 'How many bones are in the human body?' },
];

function setMode(mode) {
  currentMode = mode;

  // Update button states
  modeConversationBtn.classList.toggle('active', mode === 'conversation');
  modeResearchBtn.classList.toggle('active', mode === 'research');

  // Update placeholder
  searchInput.placeholder = mode === 'conversation'
    ? 'Say hi or ask me anything...'
    : 'Ask a knowledge question...';

  // Update suggestion chips
  const chips = mode === 'conversation' ? conversationSuggestions : researchSuggestions;
  const label = mode === 'conversation' ? 'Try saying:' : 'Try asking:';
  suggestionsContainer.innerHTML = `<span class="suggestion-label">${label}</span>` +
    chips.map(c => `<button class="suggestion-chip" data-query="${c.query}">${c.label}</button>`).join('');

  // Re-attach click handlers for new chips
  suggestionsContainer.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      searchInput.value = chip.dataset.query;
      handleSearch();
    });
  });

  searchInput.focus();
}

modeConversationBtn.addEventListener('click', () => setMode('conversation'));
modeResearchBtn.addEventListener('click', () => setMode('research'));

// ===== Event Listeners =====
searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

suggestionChips.forEach(chip => {
  chip.addEventListener('click', () => {
    searchInput.value = chip.dataset.query;
    handleSearch();
  });
});

// Clear history button
document.getElementById('clear-history-btn').addEventListener('click', () => {
  searchHistory = [];
  localStorage.removeItem('askNovaHistory');
  renderHistory();
});

// Load history on start
renderHistory();

// ===== Theme Picker & Custom Themes =====
const themePickerBtn = document.getElementById('theme-picker-btn');
const themePanel = document.getElementById('theme-panel');
const themePanelClose = document.getElementById('theme-panel-close');
const themeSwatches = document.querySelectorAll('.theme-swatch');

const addThemeBtn = document.getElementById('add-theme-btn');
const addThemeForm = document.getElementById('add-theme-form');
const cancelThemeBtn = document.getElementById('cancel-theme-btn');
const saveThemeBtn = document.getElementById('save-theme-btn');
const customThemeColorInput = document.getElementById('custom-theme-color');
const customThemeNameInput = document.getElementById('custom-theme-name');
const customThemesList = document.getElementById('custom-themes-list');

let customThemes = JSON.parse(localStorage.getItem('askNovaCustomThemes') || '[]');

themePickerBtn.addEventListener('click', () => {
  themePanel.classList.toggle('visible');
});

themePanelClose.addEventListener('click', () => {
  themePanel.classList.remove('visible');
  addThemeForm.classList.remove('visible');
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
  if (!themePanel.contains(e.target) && !themePickerBtn.contains(e.target)) {
    themePanel.classList.remove('visible');
    addThemeForm.classList.remove('visible');
  }
});

addThemeBtn.addEventListener('click', () => {
  addThemeForm.classList.toggle('visible');
  if (addThemeForm.classList.contains('visible')) {
    customThemeNameInput.focus();
  }
});

cancelThemeBtn.addEventListener('click', () => {
  addThemeForm.classList.remove('visible');
  customThemeNameInput.value = '';
});

saveThemeBtn.addEventListener('click', () => {
  const name = customThemeNameInput.value.trim() || 'My Theme';
  const color = customThemeColorInput.value;

  const newTheme = {
    id: 'custom-' + Date.now(),
    name: name,
    color: color
  };

  customThemes.push(newTheme);
  localStorage.setItem('askNovaCustomThemes', JSON.stringify(customThemes));

  renderCustomThemes();
  applyTheme(newTheme.id);

  addThemeForm.classList.remove('visible');
  customThemeNameInput.value = '';
});

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function adjustColor(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const r = Math.min(255, Math.max(0, rgb.r + (rgb.r * percent)));
  const g = Math.min(255, Math.max(0, rgb.g + (rgb.g * percent)));
  const b = Math.min(255, Math.max(0, rgb.b + (rgb.b * percent)));

  const toHex = (n) => {
    const h = Math.round(n).toString(16);
    return h.length === 1 ? '0' + h : h;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function applyTheme(themeId) {
  // Remove all theme classes
  document.body.classList.remove('theme-ocean', 'theme-sunset', 'theme-forest', 'theme-midnight', 'theme-rose');

  // Clear any previous custom inline styles
  document.body.style.removeProperty('--accent');
  document.body.style.removeProperty('--accent-light');
  document.body.style.removeProperty('--accent-glow');
  document.body.style.removeProperty('--gradient-1');
  document.body.style.removeProperty('--gradient-2');
  document.body.style.removeProperty('--gradient-3');

  if (themeId.startsWith('custom-')) {
    const theme = customThemes.find(t => t.id === themeId);
    if (theme) {
      const base = theme.color;
      const rgb = hexToRgb(base);

      document.body.style.setProperty('--accent', base);
      document.body.style.setProperty('--accent-light', adjustColor(base, 0.3));
      document.body.style.setProperty('--accent-glow', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`);
      document.body.style.setProperty('--gradient-1', base);
      document.body.style.setProperty('--gradient-2', adjustColor(base, -0.2));
      document.body.style.setProperty('--gradient-3', adjustColor(base, 0.4));
    }
  } else if (themeId !== 'nova') {
    document.body.classList.add('theme-' + themeId);
  }

  // Update active swatch state
  document.querySelectorAll('.theme-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.theme === themeId);
  });

  // Save to localStorage
  localStorage.setItem('askNovaTheme', themeId);
}

function renderCustomThemes() {
  customThemesList.innerHTML = customThemes.map(theme => `
    <div class="custom-theme-item">
      <button class="theme-swatch" data-theme="${theme.id}" title="${theme.name}">
        <span class="swatch-colors" style="background: ${theme.color}"></span>
        <span class="swatch-name">${theme.name}</span>
      </button>
      <button class="delete-theme-btn" data-id="${theme.id}" title="Delete Theme">✕</button>
    </div>
  `).join('');

  // Add event listeners to custom swatches
  customThemesList.querySelectorAll('.theme-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => applyTheme(swatch.dataset.theme));
  });

  // Add event listeners to delete buttons
  customThemesList.querySelectorAll('.delete-theme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      customThemes = customThemes.filter(t => t.id !== id);
      localStorage.setItem('askNovaCustomThemes', JSON.stringify(customThemes));

      // If deleted theme was active, revert to default
      if (localStorage.getItem('askNovaTheme') === id) {
        applyTheme('nova');
      }
      renderCustomThemes();
    });
  });
}

// Initial setup
themeSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => applyTheme(swatch.dataset.theme));
});

renderCustomThemes();

// Load saved theme on start
const savedTheme = localStorage.getItem('askNovaTheme');
if (savedTheme) applyTheme(savedTheme);
