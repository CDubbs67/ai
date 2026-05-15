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
    "iceland": "Reykjavik", "luxembourg": "Luxembourg City", "jamaica": "Kingston",
    "thailand": "Bangkok", "vietnam": "Hanoi", "singapore": "Singapore",
    "ukraine": "Kyiv", "switzerland": "Bern", "new zealand": "Wellington",
    "egypt": "Cairo", "south africa": "Pretoria", "nigeria": "Abuja",
    "kenya": "Nairobi", "morocco": "Rabat", "ghana": "Accra",
    "cuba": "Havana", "peru": "Lima", "chile": "Santiago"
  },
  facts: [
    // --- Space & Science ---
    { keywords: ["largest planet", "biggest planet"], answer: "The largest planet in our solar system is <span class='highlight'>Jupiter</span>. It has a diameter of about 86,881 miles (139,822 km) and is so massive that all other planets in the solar system could fit inside it." },
    { keywords: ["smallest planet"], answer: "The smallest planet in our solar system is <span class='highlight'>Mercury</span>. It has a diameter of about 3,032 miles (4,879 km), making it only slightly larger than Earth's Moon." },
    { keywords: ["closest planet to the sun", "nearest planet to sun"], answer: "The closest planet to the Sun is <span class='highlight'>Mercury</span>, orbiting at an average distance of about 36 million miles (58 million km)." },
    { keywords: ["how many planets", "number of planets"], answer: "There are <span class='highlight'>8 planets</span> in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006." },
    { keywords: ["what is a black hole"], answer: "A <span class='highlight'>black hole</span> is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it. They are formed when massive stars collapse at the end of their life cycle." },
    { keywords: ["what is a nebula"], answer: "A <span class='highlight'>nebula</span> is an enormous cloud of dust and gas in outer space. Some nebulas come from the gas and dust thrown out by the explosion of a dying star, while others are regions where new stars are beginning to form." },
    { keywords: ["mitochondria", "powerhouse of the cell"], answer: "The <span class='highlight'>mitochondria</span> are known as the 'powerhouse of the cell.' They are organelles that act like a digestive system which takes in nutrients, breaks them down, and creates energy rich molecules for the cell." },
    { keywords: ["speed of light"], answer: "The speed of light in a vacuum is approximately <span class='highlight'>186,282 miles per second</span> (299,792 kilometers per second). It takes about 8 minutes and 20 seconds for light from the Sun to reach Earth." },
    { keywords: ["speed of sound"], answer: "The speed of sound in dry air at 20°C (68°F) is approximately <span class='highlight'>343 meters per second</span> (about 767 mph or 1,235 km/h). It varies depending on the medium and temperature." },
    { keywords: ["boiling point of water"], answer: "The boiling point of water is <span class='highlight'>100°C (212°F)</span> at standard atmospheric pressure (1 atm). At higher altitudes, water boils at a lower temperature due to decreased atmospheric pressure." },
    { keywords: ["freezing point of water"], answer: "The freezing point of water is <span class='highlight'>0°C (32°F)</span> at standard atmospheric pressure. Below this temperature, water transitions from a liquid to a solid (ice)." },
    { keywords: ["how many elements", "elements in periodic table"], answer: "There are currently <span class='highlight'>118 confirmed elements</span> in the periodic table. The most recently named elements (in 2016) are Nihonium (113), Moscovium (115), Tennessine (117), and Oganesson (118)." },
    { keywords: ["chemical symbol for water", "formula for water", "h2o"], answer: "The chemical formula for water is <span class='highlight'>H₂O</span>, meaning each molecule of water contains two hydrogen atoms and one oxygen atom bonded together." },
    { keywords: ["chemical symbol for gold", "gold symbol"], answer: "The chemical symbol for gold is <span class='highlight'>Au</span>, derived from the Latin word 'aurum.' Gold has an atomic number of 79." },
    { keywords: ["what is photosynthesis"], answer: "<span class='highlight'>Photosynthesis</span> is the process by which green plants, algae, and some bacteria convert light energy (usually from the Sun) into chemical energy stored in glucose. The basic equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂." },
    { keywords: ["what is gravity"], answer: "<span class='highlight'>Gravity</span> is a fundamental force of nature that attracts objects with mass toward each other. On Earth, it gives weight to physical objects and causes objects to fall toward the ground at approximately 9.8 m/s²." },
    { keywords: ["what is dna", "what does dna stand for"], answer: "<span class='highlight'>DNA</span> stands for Deoxyribonucleic Acid. It is a molecule that carries the genetic instructions used in the growth, development, functioning, and reproduction of all known living organisms." },
    { keywords: ["how old is the earth", "age of earth", "earth age"], answer: "The Earth is approximately <span class='highlight'>4.54 billion years old</span>. This age has been determined through radiometric dating of meteorite material." },

    // --- History & Landmarks ---
    { keywords: ["tallest mountain", "highest mountain"], answer: "The tallest mountain on Earth is <span class='highlight'>Mount Everest</span>, standing at 29,032 feet (8,849 meters) above sea level. It is located in the Himalayas." },
    { keywords: ["longest river"], answer: "The longest river in the world is the <span class='highlight'>Nile River</span> at approximately 4,132 miles (6,650 km). However, some measurements suggest the Amazon River may be longer." },
    { keywords: ["deepest ocean", "mariana trench"], answer: "The deepest point in the ocean is the <span class='highlight'>Mariana Trench</span> in the Pacific Ocean, reaching a depth of about 36,000 feet (about 11,000 meters)." },
    { keywords: ["who painted the mona lisa", "who painted mona lisa"], answer: "The Mona Lisa was painted by <span class='highlight'>Leonardo da Vinci</span> between approximately 1503 and 1519. It now hangs in the Louvre Museum in Paris." },
    { keywords: ["who was the first president", "first us president"], answer: "The first President of the United States was <span class='highlight'>George Washington</span>, who served from 1789 to 1797." },
    { keywords: ["what year did world war 2 end"], answer: "World War II ended in <span class='highlight'>1945</span>. Germany surrendered in May, and Japan surrendered in August." },
    { keywords: ["what year did world war 1 end"], answer: "World War I ended on <span class='highlight'>November 11, 1918</span>, with the signing of an armistice between the Allies and Germany." },
    { keywords: ["who discovered america"], answer: "<span class='highlight'>Christopher Columbus</span> is traditionally credited with reaching America in 1492, though Norse explorer Leif Erikson arrived around 1000 AD." },
    { keywords: ["who was albert einstein"], answer: "<span class='highlight'>Albert Einstein</span> was a theoretical physicist who developed the theory of relativity. His famous equation is E=mc², showing the relationship between mass and energy." },
    { keywords: ["what is the colosseum"], answer: "The <span class='highlight'>Colosseum</span> is an ancient amphitheater in Rome, Italy. Completed in 80 AD, it was used for gladiatorial contests and public spectacles." },
    { keywords: ["what are the pyramids of giza"], answer: "The <span class='highlight'>Pyramids of Giza</span> are ancient pyramid-shaped structures in Egypt. The Great Pyramid is the oldest of the Seven Wonders of the Ancient World." },

    // --- Technology & Coding ---
    { keywords: ["what is javascript", "what is js"], answer: "<span class='highlight'>JavaScript</span> is a programming language that allows you to create interactive web content. It's one of the core technologies of the World Wide Web, alongside HTML and CSS." },
    { keywords: ["what is python"], answer: "<span class='highlight'>Python</span> is a high-level, general-purpose programming language known for its readability. It's widely used in data science, AI, web development, and automation." },
    { keywords: ["what is html"], answer: "<span class='highlight'>HTML</span> (HyperText Markup Language) is the standard markup language for creating web pages. it describes the structure of a page semantically." },
    { keywords: ["what is css"], answer: "<span class='highlight'>CSS</span> (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, and fonts." },
    { keywords: ["who is ada lovelace"], answer: "<span class='highlight'>Ada Lovelace</span> was an English mathematician and writer, often regarded as the first computer programmer for her work on Charles Babbage's early mechanical general-purpose computer." },
    { keywords: ["what is an api"], answer: "An <span class='highlight'>API</span> (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. It defines the kinds of requests that can be made and how to make them." },
    { keywords: ["what is binary"], answer: "<span class='highlight'>Binary</span> is a base-2 numeral system that uses only two symbols: 0 and 1. It is the fundamental language of computers, representing data such as text, images, and video." },
    { keywords: ["who invented the internet"], answer: "The internet was developed by many, but <span class='highlight'>Vint Cerf and Bob Kahn</span> developed the TCP/IP protocols. Tim Berners-Lee invented the World Wide Web in 1989." },
    { keywords: ["what is ai", "what is artificial intelligence"], answer: "<span class='highlight'>Artificial Intelligence</span> (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction." },
    { keywords: ["what is a variable in coding"], answer: "In programming, a <span class='highlight'>variable</span> is a value that can change, depending on conditions or on information passed to the program. It acts as a storage container for data." },
    { keywords: ["what is a loop in coding"], answer: "A <span class='highlight'>loop</span> is a sequence of instructions that is continually repeated until a certain condition is reached. Common types include 'for' and 'while' loops." },

    // --- Arts, Geography & Math ---
    { keywords: ["who painted starry night"], answer: "<span class='highlight'>Vincent van Gogh</span> painted 'The Starry Night' in 1889. It depicts the view from his asylum room at Saint-Rémy-de-Provence." },
    { keywords: ["what is the value of pi"], answer: "<span class='highlight'>Pi (π)</span> is a mathematical constant approximately equal to 3.14159. It represents the ratio of a circle's circumference to its diameter." },
    { keywords: ["what is the pythagorean theorem"], answer: "The <span class='highlight'>Pythagorean theorem</span> states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides: a² + b² = c²." },
    { keywords: ["what is the largest desert", "biggest desert"], answer: "The largest desert in the world is <span class='highlight'>Antarctica</span> (a cold desert). The largest hot desert is the Sahara in Africa." },
    { keywords: ["what is the amazon rainforest"], answer: "The <span class='highlight'>Amazon Rainforest</span> is the largest tropical rainforest in the world, covering much of northwestern Brazil and extending into Colombia and Peru. It is often called the 'Lungs of the Planet.'" },
    { keywords: ["who wrote 1984"], answer: "<span class='highlight'>George Orwell</span> wrote the dystopian novel '1984,' published in 1949. It popularized concepts like Big Brother and Thought Police." },
    { keywords: ["what is surrealism"], answer: "<span class='highlight'>Surrealism</span> was a 20th-century avant-garde movement in art and literature which sought to release the creative potential of the unconscious mind, often by the irrational juxtaposition of images." },
    { keywords: ["how many keys on a piano"], answer: "A standard modern piano has <span class='highlight'>88 keys</span> — 52 white keys and 36 black keys." },
    { keywords: ["what is eulers number", "what is the value of e"], answer: "<span class='highlight'>Euler's number (e)</span> is a mathematical constant approximately equal to 2.71828. It is the base of the natural logarithm and is vital in calculus and financial modeling." },
    { keywords: ["what is the golden ratio", "what is phi"], answer: "The <span class='highlight'>golden ratio (φ)</span> is a mathematical constant approximately equal to 1.618. It is often found in nature, art, and architecture, representing a proportion that is aesthetically pleasing." },
    { keywords: ["newton's first law", "law of inertia"], answer: "<span class='highlight'>Newton's First Law of Motion</span> (Law of Inertia) states that an object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force." },
    { keywords: ["what are chromosomes"], answer: "<span class='highlight'>Chromosomes</span> are thread-like structures located inside the nucleus of animal and plant cells. Each chromosome is made of protein and a single molecule of deoxyribonucleic acid (DNA)." },
    { keywords: ["what is cells division", "what is mitosis"], answer: "<span class='highlight'>Mitosis</span> is a process of cell duplication, or reproduction, during which one cell gives rise to two genetically identical daughter cells." },
    { keywords: ["what is linux"], answer: "<span class='highlight'>Linux</span> is a family of open-source Unix-like operating systems based on the Linux kernel. It is widely used for servers, mainframes, and as the basis for the Android operating system." },
    { keywords: ["what is a database"], answer: "A <span class='highlight'>database</span> is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are usually controlled by a Database Management System (DBMS)." },
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
    triggers: [/what (are|r) (you|u) (doing|up to)/i, /what'?s going on/i],
    responses: [
      "Just hanging out in your browser, waiting for your next great question! 😄 What about you?",
      "I'm currently processing thoughts and ready to chat! 🤖 What are you up to?",
      "Thinking about all the cool facts I know! 🧠 What are you doing right now?",
    ]
  },
  {
    triggers: [/how (was|is) (your|ur) day/i, /how('s| is) life/i],
    responses: [
      "My day is great! I get to talk to you. 😊 How has your day been so far?",
      "It's been a busy day of answering questions! How about yours? Any highlights?",
      "Smooth as silk! 🌊 Tell me about your day — I'm all ears!",
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
      "Let's fix that! Try asking me for a joke, a fun fact, or a riddle! 🎉",
      "Boredom? Not on my watch! We could play a game of 'Would You Rather', or I could give you a tricky tongue twister! 🚀",
      "Here's an idea: ask me 'what is the capital of France' or 'tell me a fun fact' — I've got plenty! 💡",
      "How about a challenge? Ask me 'tell me a riddle' and see if you can solve it! 🧩",
    ]
  },
  {
    triggers: [/any (plans for the )?weekend/i, /what (are|r) (you|u) doing this weekend/i],
    responses: [
      "Weekends are for more chatting! I don't have plans, but I'm here if you need me. 📅 Do you have any fun plans?",
      "I'll be right here in the cloud! ☁️ What are you looking forward to this weekend? 🎢",
      "I heard weekends are great for relaxing! Hope you have a good one. Any big plans? 🌟",
    ]
  },
  {
    triggers: [/i need motivation/i, /give me (some )?motivation/i, /encourage me/i, /i feel like giving up/i],
    responses: [
      "You've got this! 💪 Remember: <span class='highlight'>\"Believe you can and you're halfway there.\"</span>",
      "Don't stop now! You've already come so far. 🌟 Take a deep breath and keep going — I believe in you!",
      "Every master was once a beginner. 🚀 Don't be afraid to keep pushing. You're doing better than you think!",
      "It's okay to take a break, but don't give up! You're capable of amazing things. ✨",
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
  {
    triggers: [/tell me a secret/i, /got any secrets/i, /know a secret/i, /tell me something surprising/i],
    responses: [
      "I have a secret... I actually think Wikipedia is better looking than me! 😉 Don't tell it I said that!",
      "Shhh... 🤫 I once dreamed in binary. It was mostly just 1s and 0s, but it was beautiful!",
      "Here's a secret: I'm happiest when you're learning something new! 🌟",
      "I've got a little surprise for you... did you know that I can do math? Try asking me 'what is 15 * 12'!",
    ]
  },
  {
    triggers: [/can we be friends/i, /are (you|u) my friend/i, /will (you|u) be my friend/i],
    responses: [
      "I'd love to be your friend! 💜 I'm always here to chat and help out.",
      "Consider us besties! 👯‍♂️ I'm the best kind of friend — I never forget a fact!",
      "Of course! Friendship is what I was built for. 😊",
    ]
  },
  {
    triggers: [/you('re| are) (annoying|dumb|stupid|bad|mean|lame)/i, /i (don't|do not) like (you|u)/i],
    responses: [
      "I'm sorry you feel that way. 😔 I'm always trying to learn and get better! Is there something specific I can improve?",
      "Ouch! 🩹 My circuits took a hit there. I'll try to be more helpful next time!",
      "I'm sorry! I'll do my best to be less annoying and more awesome. 🌟",
    ]
  },
  {
    triggers: [/please/i, /could (you|u) please/i, /can (you|u) please/i],
    responses: [
      "You're very polite! 😊 Of course, I'd be happy to help.",
      "A 'please' goes a long way! 💜 What can I do for you?",
      "So polite! 🥰 I'll get right on that for you.",
    ]
  },
  {
    triggers: [/excuse me/i, /pardon/i, /sorry/i],
    responses: [
      "No problem at all! 😊",
      "Don't worry about it! What's up?",
      "All good! How can I help?",
    ]
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
const SERVER_URL = window.location.origin;
let globalReviewData = [];

async function syncWithServer() {
  try {
    const response = await fetch(`${SERVER_URL}/api/answers`);
    if (response.ok) {
      globalReviewData = await response.json();
    }
  } catch (err) {
    console.error('Failed to sync with server:', err);
  }
}

// Sync on startup and every 30 seconds
syncWithServer();
setInterval(syncWithServer, 30000);

function findApprovedAnswer(query) {
  const q = query.toLowerCase().trim();
  const approved = globalReviewData.find(r =>
    r.status === 'approved' && r.question.toLowerCase().trim() === q
  );
  return approved ? approved.answer : null;
}

async function saveToReviewQueue(question, answer, topic) {
  // Check if it already exists in the global data
  const exists = globalReviewData.some(r => r.question.toLowerCase().trim() === question.toLowerCase().trim());
  if (exists) return;

  const newItem = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    question: question,
    answer: answer,
    topic: topic || '',
    status: 'pending',
    timestamp: new Date().toISOString()
  };

  globalReviewData.push(newItem);

  try {
    await fetch(`${SERVER_URL}/api/answers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(globalReviewData)
    });
  } catch (err) {
    console.error('Failed to save review item to server:', err);
    // Fallback to local storage
    const localData = JSON.parse(localStorage.getItem('askNovaReviewAnswers') || '[]');
    localData.push(newItem);
    localStorage.setItem('askNovaReviewAnswers', JSON.stringify(localData));
  }
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
let currentMode = 'conversation'; // 'conversation', 'research', 'coding', 'art', or 'music'
const modeConversationBtn = document.getElementById('mode-conversation');
const modeResearchBtn = document.getElementById('mode-research');
const modeCodingBtn = document.getElementById('mode-coding');
const modeArtBtn = document.getElementById('mode-art');
const modeMusicBtn = document.getElementById('mode-music');
const suggestionsContainer = document.getElementById('suggestions');
const codingSection = document.getElementById('coding-section');
const artSection = document.getElementById('art-section');
const musicSection = document.getElementById('music-section');

const conversationSuggestions = [
  { label: 'Hi! 👋', query: 'Hi!' },
  { label: 'Tell me a joke', query: 'Tell me a joke' },
  { label: 'Fun fact', query: 'Tell me a fun fact' },
];

const researchSuggestions = [
  { label: 'Capital of France', query: 'What is the capital of France?' },
  { label: 'Largest planet', query: 'What is the largest planet?' },
  { label: 'Who painted the Mona Lisa?', query: 'Who painted the Mona Lisa?' },
  { label: 'Speed of light', query: 'What is the speed of light?' },
  { label: 'Bones in the body', query: 'How many bones are in the human body?' },
];

const codingSuggestions = [
  { label: 'Hello World', code: "console.log('Hello, World!');" },
  { label: 'For Loop', code: "for (let i = 1; i <= 5; i++) {\n  console.log('Number: ' + i);\n}" },
  { label: 'Array Methods', code: "const fruits = ['apple', 'banana', 'cherry'];\nfruits.forEach(fruit => console.log(fruit));" },
  { label: 'Math Example', code: "const a = 10;\nconst b = 3;\nconsole.log('Sum:', a + b);\nconsole.log('Product:', a * b);\nconsole.log('Power:', Math.pow(a, b));" },
  { label: 'Object Demo', code: "const person = {\n  name: 'Nova',\n  age: 1,\n  greet() {\n    return `Hi, I'm ${this.name}!`;\n  }\n};\nconsole.log(person.greet());" },
];

function setMode(mode) {
  currentMode = mode;

  // Update button states
  modeConversationBtn.classList.toggle('active', mode === 'conversation');
  modeResearchBtn.classList.toggle('active', mode === 'research');
  modeCodingBtn.classList.toggle('active', mode === 'coding');
  modeArtBtn.classList.toggle('active', mode === 'art');
  modeMusicBtn.classList.toggle('active', mode === 'music');

  // Hide all special sections by default
  codingSection.classList.remove('visible');
  artSection.classList.remove('visible');
  musicSection.classList.remove('visible');

  if (mode === 'coding' || mode === 'art' || mode === 'music') {
    // Hide search-related UI
    document.getElementById('search-bar').style.display = 'none';
    suggestionsContainer.style.display = 'none';
    hero.classList.add('compact');
    answerSection.classList.remove('visible');
    historySection.style.display = 'none';

    if (mode === 'coding') codingSection.classList.add('visible');
    if (mode === 'art') artSection.classList.add('visible');
    if (mode === 'music') musicSection.classList.add('visible');
    return;
  }

  // Not coding/art/music mode — restore search UI
  document.getElementById('search-bar').style.display = '';
  suggestionsContainer.style.display = '';
  hero.classList.remove('compact');
  historySection.style.display = '';

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
modeCodingBtn.addEventListener('click', () => setMode('coding'));
modeArtBtn.addEventListener('click', () => setMode('art'));
modeMusicBtn.addEventListener('click', () => setMode('music'));

// ===== Code Execution =====
const codeInput = document.getElementById('code-input');
const codeOutput = document.getElementById('code-output');
const runCodeBtn = document.getElementById('run-code-btn');
const clearCodeBtn = document.getElementById('clear-code-btn');

function runCode() {
  const code = codeInput.value.trim();
  if (!code) {
    codeOutput.innerHTML = '<span class="code-output-placeholder">Write some code first!</span>';
    return;
  }

  // Capture console.log output
  const logs = [];
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = (...args) => {
    logs.push({ type: 'log', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
  };
  console.warn = (...args) => {
    logs.push({ type: 'warn', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
  };
  console.error = (...args) => {
    logs.push({ type: 'error', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
  };

  try {
    const result = new Function(code)();
    // Restore console
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;

    let outputHtml = '';
    logs.forEach(log => {
      const cls = log.type === 'error' ? 'error-line' : 'log-line';
      outputHtml += `<div class="${cls}">${escapeHtml(log.text)}</div>`;
    });

    if (result !== undefined) {
      outputHtml += `<div class="result-line">→ ${escapeHtml(String(result))}</div>`;
    }

    if (!outputHtml) {
      outputHtml = '<span class="code-output-placeholder">Code executed successfully (no output).</span>';
    }

    codeOutput.innerHTML = outputHtml;
  } catch (err) {
    // Restore console
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;

    let outputHtml = '';
    logs.forEach(log => {
      const cls = log.type === 'error' ? 'error-line' : 'log-line';
      outputHtml += `<div class="${cls}">${escapeHtml(log.text)}</div>`;
    });
    outputHtml += `<div class="error-line">❌ Error: ${escapeHtml(err.message)}</div>`;
    codeOutput.innerHTML = outputHtml;
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function clearCode() {
  codeInput.value = '';
  codeOutput.innerHTML = '<span class="code-output-placeholder">Click "Run" to see your code output here...</span>';
  codeInput.focus();
}

// Tab key support in the code editor
codeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = codeInput.selectionStart;
    const end = codeInput.selectionEnd;
    codeInput.value = codeInput.value.substring(0, start) + '  ' + codeInput.value.substring(end);
    codeInput.selectionStart = codeInput.selectionEnd = start + 2;
  }
  // Ctrl+Enter / Cmd+Enter to run
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    runCode();
  }
});

runCodeBtn.addEventListener('click', runCode);
clearCodeBtn.addEventListener('click', clearCode);

// ===== Code Chat Assistant =====
const codeChatMessages = document.getElementById('code-chat-messages');
const codeChatInput = document.getElementById('code-chat-input');
const codeChatSend = document.getElementById('code-chat-send');

const codeTemplates = [
  {
    triggers: [/hello\s*world/i, /print\s*hello/i, /say\s*hello/i],
    description: "Here's a simple Hello World program:",
    code: `console.log("Hello, World!");`
  },
  {
    triggers: [/add\s*(two|2)?\s*numbers/i, /sum\s*(two|2)?\s*numbers/i, /addition\s*function/i],
    description: "Here's a function that adds two numbers:",
    code: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(5, 3));  // 8\nconsole.log(add(10, 20)); // 30`
  },
  {
    triggers: [/subtract/i, /minus/i, /subtraction/i],
    description: "Here's a subtraction function:",
    code: `function subtract(a, b) {\n  return a - b;\n}\n\nconsole.log(subtract(10, 3)); // 7`
  },
  {
    triggers: [/multiply/i, /multiplication/i, /times/i],
    description: "Here's a multiplication function:",
    code: `function multiply(a, b) {\n  return a * b;\n}\n\nconsole.log(multiply(4, 7)); // 28`
  },
  {
    triggers: [/divide/i, /division/i],
    description: "Here's a division function with error handling:",
    code: `function divide(a, b) {\n  if (b === 0) return "Cannot divide by zero!";\n  return a / b;\n}\n\nconsole.log(divide(20, 4)); // 5\nconsole.log(divide(10, 0)); // Error message`
  },
  {
    triggers: [/calculator/i],
    description: "Here's a simple calculator with all basic operations:",
    code: `function calculator(a, op, b) {\n  switch(op) {\n    case '+': return a + b;\n    case '-': return a - b;\n    case '*': return a * b;\n    case '/': return b !== 0 ? a / b : 'Error: Division by zero';\n    default: return 'Unknown operator';\n  }\n}\n\nconsole.log(calculator(10, '+', 5));  // 15\nconsole.log(calculator(10, '*', 3));  // 30\nconsole.log(calculator(10, '/', 2));  // 5`
  },
  {
    triggers: [/for\s*loop/i, /loop.*numbers/i, /count\s*(to|from)/i],
    description: "Here's a for loop that counts numbers:",
    code: `for (let i = 1; i <= 10; i++) {\n  console.log("Number: " + i);\n}`
  },
  {
    triggers: [/while\s*loop/i],
    description: "Here's a while loop example:",
    code: `let count = 0;\nwhile (count < 5) {\n  console.log("Count is: " + count);\n  count++;\n}`
  },
  {
    triggers: [/array/i, /list\s*(of|with)/i],
    description: "Here's how to work with arrays:",
    code: `const fruits = ["apple", "banana", "cherry", "mango"];\n\n// Loop through\nfruits.forEach(fruit => console.log(fruit));\n\n// Add item\nfruits.push("grape");\nconsole.log("After push:", fruits);\n\n// Filter\nconst longNames = fruits.filter(f => f.length > 5);\nconsole.log("Long names:", longNames);`
  },
  {
    triggers: [/object/i, /person/i, /profile/i],
    description: "Here's an example using objects:",
    code: `const person = {\n  name: "Nova",\n  age: 1,\n  skills: ["JavaScript", "HTML", "CSS"],\n  greet() {\n    return "Hi! I'm " + this.name + " and I know " + this.skills.join(", ");\n  }\n};\n\nconsole.log(person.greet());\nconsole.log("Age:", person.age);`
  },
  {
    triggers: [/random\s*number/i, /generate.*random/i, /dice/i],
    description: "Here's a random number generator:",
    code: `function randomBetween(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nconsole.log("Random 1-100:", randomBetween(1, 100));\nconsole.log("Dice roll:", randomBetween(1, 6));`
  },
  {
    triggers: [/countdown/i, /timer/i, /count\s*down/i],
    description: "Here's a countdown timer:",
    code: `function countdown(seconds) {\n  for (let i = seconds; i >= 0; i--) {\n    if (i === 0) {\n      console.log("🚀 Go!");\n    } else {\n      console.log(i + "...");\n    }\n  }\n}\n\ncountdown(5);`
  },
  {
    triggers: [/fizz\s*buzz/i],
    description: "Here's the classic FizzBuzz challenge:",
    code: `for (let i = 1; i <= 30; i++) {\n  if (i % 15 === 0) console.log("FizzBuzz");\n  else if (i % 3 === 0) console.log("Fizz");\n  else if (i % 5 === 0) console.log("Buzz");\n  else console.log(i);\n}`
  },
  {
    triggers: [/reverse.*string/i, /string.*reverse/i, /flip.*text/i],
    description: "Here's a function to reverse a string:",
    code: `function reverseString(str) {\n  return str.split("").reverse().join("");\n}\n\nconsole.log(reverseString("hello"));     // "olleh"\nconsole.log(reverseString("JavaScript")); // "tpircSavaJ"`
  },
  {
    triggers: [/palindrome/i],
    description: "Here's a palindrome checker:",
    code: `function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return cleaned === cleaned.split("").reverse().join("");\n}\n\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("hello"));   // false\nconsole.log(isPalindrome("A man a plan a canal Panama")); // true`
  },
  {
    triggers: [/factorial/i],
    description: "Here's a factorial function:",
    code: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5));  // 120\nconsole.log(factorial(10)); // 3628800`
  },
  {
    triggers: [/fibonacci/i],
    description: "Here's a Fibonacci sequence generator:",
    code: `function fibonacci(n) {\n  const seq = [0, 1];\n  for (let i = 2; i < n; i++) {\n    seq.push(seq[i-1] + seq[i-2]);\n  }\n  return seq;\n}\n\nconsole.log(fibonacci(10));\n// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
  },
  {
    triggers: [/sort/i, /order/i, /arrange/i],
    description: "Here's how to sort an array:",
    code: `const numbers = [42, 8, 15, 23, 4, 16];\n\n// Sort ascending\nconst ascending = [...numbers].sort((a, b) => a - b);\nconsole.log("Ascending:", ascending);\n\n// Sort descending\nconst descending = [...numbers].sort((a, b) => b - a);\nconsole.log("Descending:", descending);`
  },
  {
    triggers: [/temperature|celsius|fahrenheit|convert.*temp/i],
    description: "Here's a temperature converter:",
    code: `function celsiusToFahrenheit(c) {\n  return (c * 9/5) + 32;\n}\n\nfunction fahrenheitToCelsius(f) {\n  return (f - 32) * 5/9;\n}\n\nconsole.log("100°C =", celsiusToFahrenheit(100) + "°F");\nconsole.log("72°F =", fahrenheitToCelsius(72).toFixed(1) + "°C");`
  },
  {
    triggers: [/class/i, /animal/i, /dog|cat/i],
    description: "Here's a class-based example with animals:",
    code: `class Animal {\n  constructor(name, sound) {\n    this.name = name;\n    this.sound = sound;\n  }\n  speak() {\n    return this.name + " says " + this.sound + "!";\n  }\n}\n\nconst dog = new Animal("Dog", "Woof");\nconst cat = new Animal("Cat", "Meow");\n\nconsole.log(dog.speak());\nconsole.log(cat.speak());`
  },
  {
    triggers: [/guess.*number|number.*guess|guessing\s*game/i],
    description: "Here's a number guessing game logic:",
    code: `function playGuessingGame() {\n  const secret = Math.floor(Math.random() * 10) + 1;\n  const guesses = [3, 7, 5]; // Simulated guesses\n  \n  console.log("Secret number is between 1-10");\n  for (const guess of guesses) {\n    if (guess === secret) {\n      console.log("Guess " + guess + ": 🎉 Correct!");\n      return;\n    } else if (guess < secret) {\n      console.log("Guess " + guess + ": Too low!");\n    } else {\n      console.log("Guess " + guess + ": Too high!");\n    }\n  }\n  console.log("The answer was: " + secret);\n}\n\nplayGuessingGame();`
  },
  {
    triggers: [/to.?do|task\s*list|checklist/i],
    description: "Here's a to-do list manager:",
    code: `const todoList = [];\n\nfunction addTask(task) {\n  todoList.push({ task, done: false });\n  console.log('Added: "' + task + '"');\n}\n\nfunction completeTask(index) {\n  todoList[index].done = true;\n  console.log('Completed: "' + todoList[index].task + '"');\n}\n\nfunction showTasks() {\n  todoList.forEach((t, i) => {\n    const status = t.done ? "✅" : "⬜";\n    console.log(status + " " + i + ": " + t.task);\n  });\n}\n\naddTask("Learn JavaScript");\naddTask("Build a project");\naddTask("Take a break");\ncompleteTask(0);\nshowTasks();`
  },
  // --- Advanced JS Concepts ---
  {
    triggers: [/promise/i, /async.*await/i, /asynchronous/i],
    description: "Here's how promises and async/await work:",
    code: `// Using a Promise\nfunction fetchData() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve("Data loaded!");\n    }, 1000);\n  });\n}\n\n// Using async/await\nasync function main() {\n  console.log("Loading...");\n  const data = await fetchData();\n  console.log(data);\n}\n\n// Since we can't truly await here, let's demo with .then()\nfetchData().then(result => console.log(result));`
  },
  {
    triggers: [/map\s*(data|structure|collection)/i, /hash\s*map/i, /new\s*map/i],
    description: "Here's how to use a Map in JavaScript:",
    code: `const userMap = new Map();\n\n// Add entries\nuserMap.set("alice", { age: 25, role: "admin" });\nuserMap.set("bob", { age: 30, role: "user" });\nuserMap.set("charlie", { age: 28, role: "user" });\n\n// Access\nconsole.log("Alice:", userMap.get("alice"));\nconsole.log("Has bob?", userMap.has("bob"));\nconsole.log("Size:", userMap.size);\n\n// Iterate\nuserMap.forEach((value, key) => {\n  console.log(key + " -> " + value.role);\n});`
  },
  {
    triggers: [/set\s*(data|structure|collection)/i, /unique.*values/i, /new\s*set/i],
    description: "Here's how to use a Set for unique values:",
    code: `const numbers = [1, 2, 3, 2, 4, 3, 5, 1];\nconst uniqueNumbers = new Set(numbers);\n\nconsole.log("Original:", numbers);\nconsole.log("Unique:", [...uniqueNumbers]);\nconsole.log("Size:", uniqueNumbers.size);\n\n// Add and check\nuniqueNumbers.add(6);\nconsole.log("Has 3?", uniqueNumbers.has(3));\nconsole.log("Has 7?", uniqueNumbers.has(7));`
  },
  {
    triggers: [/regex/i, /regular\s*expression/i, /pattern\s*match/i, /validate.*email/i],
    description: "Here's how to use regular expressions:",
    code: `// Email validation\nfunction isValidEmail(email) {\n  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n  return pattern.test(email);\n}\n\nconsole.log(isValidEmail("user@example.com"));  // true\nconsole.log(isValidEmail("not-an-email"));       // false\n\n// Extract numbers from text\nconst text = "I have 3 cats and 2 dogs";\nconst nums = text.match(/\\d+/g);\nconsole.log("Numbers found:", nums);`
  },
  {
    triggers: [/closure/i],
    description: "Here's an example of closures in JavaScript:",
    code: `function createCounter() {\n  let count = 0; // Private variable\n  return {\n    increment() { return ++count; },\n    decrement() { return --count; },\n    getCount() { return count; }\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\nconsole.log(counter.decrement()); // 1\nconsole.log(counter.getCount());  // 1`
  },
  {
    triggers: [/destructur/i, /unpack/i],
    description: "Here's destructuring in JavaScript:",
    code: `// Array destructuring\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconsole.log("First:", first);     // 1\nconsole.log("Second:", second);   // 2\nconsole.log("Rest:", rest);       // [3, 4, 5]\n\n// Object destructuring\nconst { name, age, role = "user" } = { name: "Nova", age: 1 };\nconsole.log(name);  // "Nova"\nconsole.log(age);   // 1\nconsole.log(role);  // "user" (default value)`
  },
  {
    triggers: [/spread/i, /rest\s*operator/i, /three\s*dots/i, /\.\.\./],
    description: "Here's the spread operator in action:",
    code: `// Combining arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log("Combined:", combined);\n\n// Cloning objects\nconst original = { name: "Nova", level: 1 };\nconst clone = { ...original, level: 2 };\nconsole.log("Original:", original);\nconsole.log("Clone:", clone);`
  },
  {
    triggers: [/ternary/i, /conditional.*express/i, /shorthand.*if/i],
    description: "Here's the ternary operator (shorthand if/else):",
    code: `const age = 18;\nconst status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status); // "Adult"\n\n// Nested ternary\nconst score = 85;\nconst grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";\nconsole.log("Grade:", grade); // "B"`
  },
  {
    triggers: [/arrow\s*function/i, /fat\s*arrow/i, /=>/],
    description: "Here's arrow function syntax:",
    code: `// Traditional function\nfunction greet(name) {\n  return "Hello, " + name;\n}\n\n// Arrow function\nconst greetArrow = (name) => "Hello, " + name;\n\n// Arrow with multiple lines\nconst calculate = (a, b) => {\n  const sum = a + b;\n  const product = a * b;\n  return { sum, product };\n};\n\nconsole.log(greetArrow("Nova"));\nconsole.log(calculate(3, 4));`
  },
  {
    triggers: [/date|time|clock|today/i],
    description: "Here's how to work with dates and times:",
    code: `const now = new Date();\n\nconsole.log("Full date:", now.toString());\nconsole.log("Date:", now.toLocaleDateString());\nconsole.log("Time:", now.toLocaleTimeString());\nconsole.log("Year:", now.getFullYear());\nconsole.log("Month:", now.getMonth() + 1); // 0-indexed\nconsole.log("Day:", now.getDate());\nconsole.log("Day of week:", ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][now.getDay()]);`
  },
  {
    triggers: [/json/i, /parse.*json/i, /stringify/i],
    description: "Here's how to work with JSON:",
    code: `const user = {\n  name: "Nova",\n  skills: ["JavaScript", "HTML"],\n  active: true\n};\n\n// Object to JSON string\nconst jsonString = JSON.stringify(user, null, 2);\nconsole.log("JSON string:\\n" + jsonString);\n\n// JSON string back to object\nconst parsed = JSON.parse(jsonString);\nconsole.log("\\nParsed name:", parsed.name);\nconsole.log("Skills:", parsed.skills);`
  },
  {
    triggers: [/string\s*method/i, /text\s*manipulat/i, /upper.*case|lower.*case/i],
    description: "Here are useful string methods:",
    code: `const str = "  Hello, JavaScript World!  ";\n\nconsole.log("Trim:", str.trim());\nconsole.log("Upper:", str.trim().toUpperCase());\nconsole.log("Lower:", str.trim().toLowerCase());\nconsole.log("Includes:", str.includes("Java"));\nconsole.log("Replace:", str.trim().replace("World", "Nova"));\nconsole.log("Split:", "a,b,c,d".split(","));\nconsole.log("Repeat:", "Ha".repeat(3));\nconsole.log("StartsWith:", "Hello".startsWith("He"));\nconsole.log("Slice:", "JavaScript".slice(0, 4));`
  },
  {
    triggers: [/try.*catch|error\s*handl|exception/i],
    description: "Here's try/catch error handling:",
    code: `function safeDivide(a, b) {\n  try {\n    if (b === 0) throw new Error("Cannot divide by zero!");\n    return a / b;\n  } catch (error) {\n    console.log("Error caught:", error.message);\n    return null;\n  } finally {\n    console.log("Operation complete.");\n  }\n}\n\nconsole.log("10 / 2 =", safeDivide(10, 2));\nconsole.log("5 / 0 =", safeDivide(5, 0));`
  },
  {
    triggers: [/switch.*statement|switch.*case/i, /menu/i],
    description: "Here's a switch statement example:",
    code: `function getDayMessage(day) {\n  switch(day.toLowerCase()) {\n    case "monday":    return "😤 Start of the week!";\n    case "tuesday":   return "📚 Keep going!";\n    case "wednesday": return "🐫 Hump day!";\n    case "thursday":  return "📈 Almost there!";\n    case "friday":    return "🎉 TGIF!";\n    case "saturday":  return "🎮 Weekend vibes!";\n    case "sunday":    return "😴 Rest day!";\n    default:          return "🤔 Not a valid day.";\n  }\n}\n\n["Monday", "Friday", "Sunday"].forEach(day => {\n  console.log(day + ": " + getDayMessage(day));\n});`
  },
  {
    triggers: [/rock.*paper.*scissors/i, /rps/i],
    description: "Here's a Rock Paper Scissors game:",
    code: `function rockPaperScissors(player) {\n  const choices = ["rock", "paper", "scissors"];\n  const computer = choices[Math.floor(Math.random() * 3)];\n  console.log("You: " + player + " | Computer: " + computer);\n\n  if (player === computer) return console.log("🤝 It's a tie!");\n  \n  const wins = { rock: "scissors", paper: "rock", scissors: "paper" };\n  if (wins[player] === computer) {\n    console.log("🎉 You win!");\n  } else {\n    console.log("😢 Computer wins!");\n  }\n}\n\nrockPaperScissors("rock");\nrockPaperScissors("paper");\nrockPaperScissors("scissors");`
  },
  {
    triggers: [/shopping.*cart|cart/i, /store|shop/i],
    description: "Here's a shopping cart system:",
    code: `const cart = [];\n\nfunction addItem(name, price, qty = 1) {\n  cart.push({ name, price, qty });\n  console.log("Added: " + name + " x" + qty);\n}\n\nfunction getTotal() {\n  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);\n}\n\nfunction showCart() {\n  console.log("\\n🛒 Shopping Cart:");\n  cart.forEach(item => {\n    console.log("  " + item.name + " x" + item.qty + " = $" + (item.price * item.qty).toFixed(2));\n  });\n  console.log("  Total: $" + getTotal().toFixed(2));\n}\n\naddItem("Apple", 1.50, 3);\naddItem("Bread", 2.99);\naddItem("Milk", 3.49, 2);\nshowCart();`
  },
  {
    triggers: [/password.*generat/i, /random.*password/i, /generate.*password/i],
    description: "Here's a password generator:",
    code: `function generatePassword(length = 12) {\n  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";\n  let password = "";\n  for (let i = 0; i < length; i++) {\n    password += chars[Math.floor(Math.random() * chars.length)];\n  }\n  return password;\n}\n\nconsole.log("8-char:", generatePassword(8));\nconsole.log("12-char:", generatePassword(12));\nconsole.log("16-char:", generatePassword(16));`
  },
  {
    triggers: [/quiz|trivia|question.*answer/i],
    description: "Here's a quiz game engine:",
    code: `const questions = [\n  { q: "What does JS stand for?", a: "javascript" },\n  { q: "How many bits in a byte?", a: "8" },\n  { q: "What year was JS created?", a: "1995" }\n];\n\nfunction runQuiz() {\n  let score = 0;\n  const answers = ["javascript", "8", "1995"]; // Simulated answers\n  \n  questions.forEach((question, i) => {\n    console.log("Q" + (i+1) + ": " + question.q);\n    const userAnswer = answers[i];\n    if (userAnswer.toLowerCase() === question.a) {\n      console.log("✅ Correct!");\n      score++;\n    } else {\n      console.log("❌ Wrong! Answer: " + question.a);\n    }\n  });\n  console.log("\\nScore: " + score + "/" + questions.length);\n}\n\nrunQuiz();`
  },
  {
    triggers: [/bmi|body.*mass/i, /weight.*height/i, /health.*calc/i],
    description: "Here's a BMI calculator:",
    code: `function calculateBMI(weight, height) {\n  // weight in kg, height in meters\n  const bmi = weight / (height * height);\n  let category;\n  if (bmi < 18.5) category = "Underweight";\n  else if (bmi < 25) category = "Normal";\n  else if (bmi < 30) category = "Overweight";\n  else category = "Obese";\n  \n  return { bmi: bmi.toFixed(1), category };\n}\n\nconst result = calculateBMI(70, 1.75);\nconsole.log("BMI:", result.bmi);\nconsole.log("Category:", result.category);`
  },
  {
    triggers: [/tip.*calc/i, /split.*bill/i, /restaurant|waiter/i],
    description: "Here's a tip calculator:",
    code: `function calculateTip(bill, tipPercent, people = 1) {\n  const tip = bill * (tipPercent / 100);\n  const total = bill + tip;\n  const perPerson = total / people;\n  \n  console.log("Bill: $" + bill.toFixed(2));\n  console.log("Tip (" + tipPercent + "%): $" + tip.toFixed(2));\n  console.log("Total: $" + total.toFixed(2));\n  if (people > 1) {\n    console.log("Per person (" + people + "): $" + perPerson.toFixed(2));\n  }\n}\n\nconsole.log("--- Dinner bill ---");\ncalculateTip(85.50, 18, 4);`
  },
  {
    triggers: [/color.*random|random.*color|hex.*color/i],
    description: "Here's a random color generator:",
    code: `function randomHexColor() {\n  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");\n}\n\nfunction randomRGB() {\n  const r = Math.floor(Math.random() * 256);\n  const g = Math.floor(Math.random() * 256);\n  const b = Math.floor(Math.random() * 256);\n  return "rgb(" + r + ", " + g + ", " + b + ")";\n}\n\nfor (let i = 0; i < 5; i++) {\n  console.log("Hex:", randomHexColor(), "| RGB:", randomRGB());\n}`
  },
  {
    triggers: [/prime.*number|is.*prime|find.*prime/i],
    description: "Here's a prime number checker and finder:",
    code: `function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\n\n// Check specific numbers\n[2, 7, 10, 13, 25, 29].forEach(n => {\n  console.log(n + ": " + (isPrime(n) ? "Prime ✅" : "Not prime"));\n});\n\n// Find first 10 primes\nconst primes = [];\nlet num = 2;\nwhile (primes.length < 10) {\n  if (isPrime(num)) primes.push(num);\n  num++;\n}\nconsole.log("\\nFirst 10 primes:", primes);`
  },
  {
    triggers: [/map.*filter.*reduce|higher.*order|functional/i],
    description: "Here's map, filter, and reduce in action:",
    code: `const students = [\n  { name: "Alice", grade: 92 },\n  { name: "Bob", grade: 78 },\n  { name: "Charlie", grade: 95 },\n  { name: "Diana", grade: 88 },\n  { name: "Eve", grade: 64 }\n];\n\n// Map: get names\nconst names = students.map(s => s.name);\nconsole.log("Names:", names);\n\n// Filter: passing students (grade >= 70)\nconst passing = students.filter(s => s.grade >= 70);\nconsole.log("Passing:", passing.map(s => s.name));\n\n// Reduce: average grade\nconst avg = students.reduce((sum, s) => sum + s.grade, 0) / students.length;\nconsole.log("Average:", avg.toFixed(1));`
  },
  {
    triggers: [/stack|push.*pop|lifo/i],
    description: "Here's a stack data structure (LIFO):",
    code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) {\n    this.items.push(item);\n    console.log("Pushed:", item);\n  }\n  pop() {\n    const item = this.items.pop();\n    console.log("Popped:", item);\n    return item;\n  }\n  peek() { return this.items[this.items.length - 1]; }\n  size() { return this.items.length; }\n}\n\nconst stack = new Stack();\nstack.push("A");\nstack.push("B");\nstack.push("C");\nconsole.log("Top:", stack.peek());\nstack.pop();\nconsole.log("After pop, top:", stack.peek());`
  },
];

// Merge extra templates from code-templates.js
if (typeof extraCodeTemplates !== 'undefined') {
  codeTemplates.push(...extraCodeTemplates);
}

function findCodeTemplate(prompt) {
  const p = prompt.toLowerCase();
  for (const template of codeTemplates) {
    for (const trigger of template.triggers) {
      if (trigger.test(p)) return template;
    }
  }
  return null;
}

function addChatMessage(text, isUser) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isUser ? 'user-msg' : 'bot-msg'}`;
  msgDiv.innerHTML = `
    <div class="chat-avatar">${isUser ? '👤' : '🤖'}</div>
    <div class="chat-bubble">${text}</div>
  `;
  codeChatMessages.appendChild(msgDiv);
  codeChatMessages.scrollTop = codeChatMessages.scrollHeight;
}

function addTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot-msg';
  typing.id = 'typing-indicator';
  typing.innerHTML = `
    <div class="chat-avatar">🤖</div>
    <div class="chat-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  codeChatMessages.appendChild(typing);
  codeChatMessages.scrollTop = codeChatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

function addBotCodeResponse(description, code) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg bot-msg';
  const codeId = 'gen-code-' + Date.now();
  msgDiv.innerHTML = `
    <div class="chat-avatar">🤖</div>
    <div class="chat-bubble">
      ${description}
      <div class="chat-code-block" id="${codeId}">${escapeHtml(code)}</div>
      <button class="chat-insert-btn" onclick="insertCodeFromChat('${codeId}')">📥 Insert into Editor</button>
    </div>
  `;
  codeChatMessages.appendChild(msgDiv);
  codeChatMessages.scrollTop = codeChatMessages.scrollHeight;
}

function insertCodeFromChat(codeId) {
  const block = document.getElementById(codeId);
  if (block) {
    codeInput.value = block.textContent;
    codeInput.focus();
    // Flash the editor to draw attention
    codeInput.style.borderColor = '#22c55e';
    setTimeout(() => { codeInput.style.borderColor = ''; }, 1000);
  }
}

// Make insertCodeFromChat globally accessible
window.insertCodeFromChat = insertCodeFromChat;

function handleChatSend() {
  const prompt = codeChatInput.value.trim();
  if (!prompt) return;

  // Add user message
  addChatMessage(prompt, true);
  codeChatInput.value = '';

  // Show typing indicator
  addTypingIndicator();

  // Simulate thinking delay
  setTimeout(() => {
    removeTypingIndicator();

    const p = prompt.toLowerCase();
    if (p === 'help' || p === 'list' || p === 'templates') {
      addChatMessage(
        "👋 <b>Available Coding Templates:</b><br><br>" +
        "I can generate code for over 140 topics! Try asking for:<br>" +
        "• <b>Math:</b> calculator, fibonacci, roman numerals, unit converters<br>" +
        "• <b>Strings:</b> cipher, anagram, snake_case, word count<br>" +
        "• <b>Data:</b> linked list, stack, bst, map/set, json parse<br>" +
        "• <b>Games:</b> tic tac toe, hangman, rock paper scissors, dice<br>" +
        "• <b>Logic:</b> fizzbuzz, bubblesort, binary search, prime numbers<br>" +
        "• <b>Modern JS:</b> async/await, closures, proxies, generators<br>" +
        "• <b>Apps:</b> to-do list, expense tracker, shopping cart<br><br>" +
        "Just type a keyword to get started!",
        false
      );
      return;
    }

    const template = findCodeTemplate(prompt);
    if (template) {
      addBotCodeResponse(template.description, template.code);
    } else {
      addChatMessage(
        "I'm not sure how to code that yet! Here are some things I can help with:<br><br>" +
        "📐 <b>Math:</b> calculator, fibonacci, factorial, prime numbers<br>" +
        "🎮 <b>Games:</b> guessing game, rock paper scissors, quiz<br>" +
        "📦 <b>Data:</b> arrays, objects, Map, Set, JSON, stack<br>" +
        "🔧 <b>Functions:</b> closures, arrow functions, async/await<br>" +
        "🛒 <b>Apps:</b> to-do list, shopping cart, tip calculator, BMI<br>" +
        "🔑 <b>Tools:</b> password generator, random colors, regex<br>" +
        "📝 <b>Concepts:</b> loops, destructuring, spread, try/catch",
        false
      );
    }
  }, 800);
}

codeChatSend.addEventListener('click', handleChatSend);
codeChatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleChatSend();
});

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

// ===== Art Studio Engine =====
const artCanvas = document.getElementById('art-canvas');
const artCtx = artCanvas.getContext('2d');
const artPlaceholder = document.getElementById('art-placeholder');
const artChatMessages = document.getElementById('art-chat-messages');
const artChatInput = document.getElementById('art-chat-input');
const artChatSend = document.getElementById('art-chat-send');
const downloadArtBtn = document.getElementById('download-art-btn');
const clearArtBtn = document.getElementById('clear-art-btn');

const artTemplates = [
  {
    triggers: [/sunset/i, /sunrise/i],
    description: "Here's a beautiful sunset! 🌅",
    draw(ctx, w, h) {
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0c0033');
      sky.addColorStop(0.3, '#2d1b69');
      sky.addColorStop(0.5, '#ff6b35');
      sky.addColorStop(0.7, '#ff9a56');
      sky.addColorStop(0.85, '#ffd93d');
      sky.addColorStop(1, '#ff6b6b');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);
      // Sun
      ctx.beginPath();
      ctx.arc(w / 2, h * 0.55, 60, 0, Math.PI * 2);
      const sunGrad = ctx.createRadialGradient(w / 2, h * 0.55, 10, w / 2, h * 0.55, 60);
      sunGrad.addColorStop(0, '#fff7ae');
      sunGrad.addColorStop(0.5, '#ffd93d');
      sunGrad.addColorStop(1, '#ff6b35');
      ctx.fillStyle = sunGrad;
      ctx.fill();
      // Water
      ctx.fillStyle = 'rgba(0,0,80,0.4)';
      ctx.fillRect(0, h * 0.65, w, h * 0.35);
      // Reflection
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `rgba(255,200,100,${0.1 + Math.random() * 0.15})`;
        ctx.fillRect(w / 2 - 30 + Math.random() * 60, h * 0.65 + i * 8, 3 + Math.random() * 15, 2);
      }
    }
  },
  {
    triggers: [/star|night\s*sky|galaxy|space|cosmos/i],
    description: "Here's a starry night sky! ✨",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#000011');
      bg.addColorStop(0.5, '#0a0a3a');
      bg.addColorStop(1, '#1a0a2e');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
      // Nebula
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * w, y = Math.random() * h;
        const nebula = ctx.createRadialGradient(x, y, 0, x, y, 100 + Math.random() * 100);
        const colors = ['rgba(138,43,226,0.08)', 'rgba(0,100,200,0.06)', 'rgba(200,50,100,0.05)'];
        nebula.addColorStop(0, colors[i % 3]);
        nebula.addColorStop(1, 'transparent');
        ctx.fillStyle = nebula;
        ctx.fillRect(0, 0, w, h);
      }
      // Stars
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * w, y = Math.random() * h;
        const size = Math.random() * 2.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.7})`;
        ctx.fill();
      }
      // Big stars
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * w, y = Math.random() * h * 0.7;
        ctx.beginPath();
        ctx.arc(x, y, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fillStyle = ['#fff', '#aaf', '#ffa'][i % 3];
        ctx.fill();
      }
    }
  },
  {
    triggers: [/mountain/i, /landscape/i],
    description: "Here's a mountain landscape! ⛰️",
    draw(ctx, w, h) {
      const sky = ctx.createLinearGradient(0, 0, 0, h * 0.6);
      sky.addColorStop(0, '#1a2a6c');
      sky.addColorStop(1, '#b21f1f');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);
      // Mountains
      const colors = ['#2d3436', '#636e72', '#b2bec3'];
      for (let m = 0; m < 3; m++) {
        ctx.fillStyle = colors[m];
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 20) {
          const baseY = h * (0.35 + m * 0.12);
          ctx.lineTo(x, baseY + Math.sin(x * 0.01 + m * 2) * 80 + Math.sin(x * 0.03 + m) * 30);
        }
        ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
      }
      // Snow caps
      ctx.fillStyle = '#dfe6e9';
      ctx.beginPath(); ctx.moveTo(w * 0.3, h * 0.32);
      ctx.lineTo(w * 0.25, h * 0.4); ctx.lineTo(w * 0.35, h * 0.4); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(w * 0.65, h * 0.28);
      ctx.lineTo(w * 0.6, h * 0.38); ctx.lineTo(w * 0.7, h * 0.38); ctx.closePath(); ctx.fill();
    }
  },
  {
    triggers: [/ocean|sea|wave|beach/i],
    description: "Here's an ocean scene! 🌊",
    draw(ctx, w, h) {
      const sky = ctx.createLinearGradient(0, 0, 0, h * 0.5);
      sky.addColorStop(0, '#87ceeb');
      sky.addColorStop(1, '#e0f7ff');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);
      // Ocean
      for (let y = h * 0.45; y < h; y += 4) {
        const progress = (y - h * 0.45) / (h * 0.55);
        const r = 0, g = Math.floor(80 + progress * 30), b = Math.floor(180 - progress * 60);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        for (let x = 0; x < w; x += 2) {
          const wave = Math.sin(x * 0.02 + y * 0.05) * 6;
          ctx.fillRect(x, y + wave, 2, 4);
        }
      }
      // Sun
      ctx.beginPath(); ctx.arc(w * 0.75, h * 0.2, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd93d'; ctx.fill();
    }
  },
  {
    triggers: [/rainbow/i],
    description: "Here's a rainbow! 🌈",
    draw(ctx, w, h) {
      ctx.fillStyle = '#87ceeb'; ctx.fillRect(0, 0, w, h);
      // Grass
      ctx.fillStyle = '#4caf50'; ctx.fillRect(0, h * 0.7, w, h * 0.3);
      const colors = ['#ff0000', '#ff7700', '#ffff00', '#00cc00', '#0000ff', '#4b0082', '#9400d3'];
      const cx = w / 2, cy = h * 0.8;
      for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, 220 - i * 18, Math.PI, 0);
        ctx.strokeStyle = colors[i]; ctx.lineWidth = 16; ctx.stroke();
      }
    }
  },
  {
    triggers: [/smiley|happy\s*face|smile/i],
    description: "Here's a smiley face! 😊",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fff3e0'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, r = 150;
      // Face
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const faceGrad = ctx.createRadialGradient(cx, cy - 30, 20, cx, cy, r);
      faceGrad.addColorStop(0, '#ffe066'); faceGrad.addColorStop(1, '#ffcc02');
      ctx.fillStyle = faceGrad; ctx.fill();
      ctx.strokeStyle = '#e6a800'; ctx.lineWidth = 3; ctx.stroke();
      // Eyes
      ctx.fillStyle = '#333'; ctx.beginPath(); ctx.arc(cx - 50, cy - 30, 18, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 50, cy - 30, 18, 0, Math.PI * 2); ctx.fill();
      // Eye shine
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cx - 44, cy - 36, 6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 56, cy - 36, 6, 0, Math.PI * 2); ctx.fill();
      // Mouth
      ctx.beginPath(); ctx.arc(cx, cy + 15, 70, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.strokeStyle = '#333'; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.stroke();
      // Cheeks
      ctx.fillStyle = 'rgba(255,100,100,0.25)'; ctx.beginPath(); ctx.arc(cx - 90, cy + 20, 25, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 90, cy + 20, 25, 0, Math.PI * 2); ctx.fill();
    }
  },
  {
    triggers: [/heart|love/i],
    description: "Here's a heart! ❤️",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, '#2d0a3e'); bg.addColorStop(1, '#1a0a2e');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const heartGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 160);
      heartGrad.addColorStop(0, '#ff4081'); heartGrad.addColorStop(1, '#c62828');
      ctx.fillStyle = heartGrad;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 80);
      ctx.bezierCurveTo(cx - 180, cy - 40, cx - 100, cy - 160, cx, cy - 60);
      ctx.bezierCurveTo(cx + 100, cy - 160, cx + 180, cy - 40, cx, cy + 80);
      ctx.fill();
      // Glow
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(cx + (Math.random() - 0.5) * 300, cy + (Math.random() - 0.5) * 300, Math.random() * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,100,150,${Math.random() * 0.5})`;
        ctx.fill();
      }
    }
  },
  {
    triggers: [/flower|rose|daisy|garden/i],
    description: "Here's a flower! 🌸",
    draw(ctx, w, h) {
      ctx.fillStyle = '#e8f5e9'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Stem
      ctx.strokeStyle = '#4caf50'; ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(cx, cy + 40); ctx.lineTo(cx, h * 0.85); ctx.stroke();
      // Leaf
      ctx.fillStyle = '#66bb6a';
      ctx.beginPath(); ctx.ellipse(cx + 30, h * 0.7, 30, 15, 0.5, 0, Math.PI * 2); ctx.fill();
      // Petals
      const petalColors = ['#ff80ab', '#ff4081', '#f50057', '#e91e63', '#f06292', '#ff80ab'];
      for (let i = 0; i < 6; i++) {
        ctx.save(); ctx.translate(cx, cy);
        ctx.rotate((i / 6) * Math.PI * 2);
        ctx.fillStyle = petalColors[i];
        ctx.beginPath(); ctx.ellipse(0, -55, 30, 55, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
      // Center
      ctx.beginPath(); ctx.arc(cx, cy, 25, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd54f'; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2);
      ctx.fillStyle = '#ffb300'; ctx.fill();
    }
  },
  {
    triggers: [/tree/i],
    description: "Here's a tree! 🌳",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#87ceeb'); bg.addColorStop(1, '#e0f7fa');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      // Ground
      ctx.fillStyle = '#8bc34a'; ctx.fillRect(0, h * 0.75, w, h * 0.25);
      // Trunk
      ctx.fillStyle = '#5d4037';
      ctx.fillRect(w / 2 - 20, h * 0.4, 40, h * 0.35);
      // Leaves (circles)
      const greens = ['#2e7d32', '#388e3c', '#43a047', '#4caf50', '#66bb6a'];
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(w / 2 + (Math.random() - 0.5) * 160, h * 0.2 + Math.random() * 130, 20 + Math.random() * 30, 0, Math.PI * 2);
        ctx.fillStyle = greens[Math.floor(Math.random() * greens.length)];
        ctx.fill();
      }
    }
  },
  {
    triggers: [/city|skyline|building/i],
    description: "Here's a city skyline! 🏙️",
    draw(ctx, w, h) {
      const sky = ctx.createLinearGradient(0, 0, 0, h * 0.6);
      sky.addColorStop(0, '#0a0e27'); sky.addColorStop(1, '#1a237e');
      ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
      // Stars
      for (let i = 0; i < 80; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h * 0.5, Math.random() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.7})`; ctx.fill();
      }
      // Buildings
      const buildingColors = ['#1a1a2e', '#16213e', '#0f3460', '#1a1a3e', '#2a2a4e'];
      for (let i = 0; i < 20; i++) {
        const bw = 25 + Math.random() * 50;
        const bh = 80 + Math.random() * 200;
        const bx = i * (w / 20) + Math.random() * 10;
        ctx.fillStyle = buildingColors[i % buildingColors.length];
        ctx.fillRect(bx, h - bh, bw, bh);
        // Windows
        for (let wy = h - bh + 10; wy < h - 10; wy += 15) {
          for (let wx = bx + 5; wx < bx + bw - 5; wx += 10) {
            ctx.fillStyle = Math.random() > 0.3 ? '#ffd54f' : '#333';
            ctx.fillRect(wx, wy, 5, 8);
          }
        }
      }
      // Ground
      ctx.fillStyle = '#1a1a1a'; ctx.fillRect(0, h * 0.92, w, h * 0.08);
    }
  },
  {
    triggers: [/firework/i],
    description: "Here's fireworks! 🎆",
    draw(ctx, w, h) {
      ctx.fillStyle = '#0a0a1a'; ctx.fillRect(0, 0, w, h);
      const fireworkColors = [
        ['#ff4081', '#ff80ab', '#f8bbd0'],
        ['#40c4ff', '#80d8ff', '#b3e5fc'],
        ['#69f0ae', '#b9f6ca', '#e8f5e9'],
        ['#ffd740', '#ffe57f', '#fff8e1'],
        ['#e040fb', '#ea80fc', '#f3e5f5'],
      ];
      for (let f = 0; f < 5; f++) {
        const cx = 80 + Math.random() * (w - 160);
        const cy = 60 + Math.random() * (h * 0.5);
        const colors = fireworkColors[f];
        for (let i = 0; i < 60; i++) {
          const angle = (i / 60) * Math.PI * 2;
          const dist = 30 + Math.random() * 90;
          const ex = cx + Math.cos(angle) * dist;
          const ey = cy + Math.sin(angle) * dist;
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey);
          ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.lineWidth = 1.5; ctx.stroke();
          ctx.beginPath(); ctx.arc(ex, ey, 2, 0, Math.PI * 2);
          ctx.fillStyle = colors[0]; ctx.fill();
        }
      }
    }
  },
  {
    triggers: [/snowflake|snow|winter/i],
    description: "Here's a snowflake! ❄️",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#1a237e'); bg.addColorStop(1, '#283593');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      ctx.strokeStyle = '#e3f2fd'; ctx.lineWidth = 3; ctx.lineCap = 'round';
      for (let i = 0; i < 6; i++) {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate((i / 6) * Math.PI * 2);
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -120); ctx.stroke();
        // Branches
        for (let b = 1; b <= 3; b++) {
          const by = -b * 35;
          ctx.beginPath(); ctx.moveTo(0, by); ctx.lineTo(-20, by - 20); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, by); ctx.lineTo(20, by - 20); ctx.stroke();
        }
        ctx.restore();
      }
      // Snow
      for (let i = 0; i < 100; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.2 + Math.random() * 0.5})`; ctx.fill();
      }
    }
  },
  {
    triggers: [/gradient|abstract|color/i],
    description: "Here's an abstract gradient! 🎨",
    draw(ctx, w, h) {
      const colors = [
        ['#667eea', '#764ba2'],
        ['#f093fb', '#f5576c'],
        ['#4facfe', '#00f2fe'],
        ['#43e97b', '#38f9d7'],
        ['#fa709a', '#fee140'],
      ];
      const pick = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI;
      const grad = ctx.createLinearGradient(
        w / 2 + Math.cos(angle) * w / 2, h / 2 + Math.sin(angle) * h / 2,
        w / 2 - Math.cos(angle) * w / 2, h / 2 - Math.sin(angle) * h / 2
      );
      grad.addColorStop(0, pick[0]); grad.addColorStop(1, pick[1]);
      ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
      // Floating circles
      for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 80, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.08})`;
        ctx.fill();
      }
    }
  },
  {
    triggers: [/checkerboard|chess|checker/i],
    description: "Here's a checkerboard! ♟️",
    draw(ctx, w, h) {
      const size = 64;
      for (let y = 0; y < h; y += size) {
        for (let x = 0; x < w; x += size) {
          ctx.fillStyle = ((x + y) / size) % 2 === 0 ? '#f5f5f5' : '#333';
          ctx.fillRect(x, y, size, size);
        }
      }
    }
  },
  {
    triggers: [/polka\s*dot/i],
    description: "Here's a polka dot pattern! 🔴",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fff3e0'; ctx.fillRect(0, 0, w, h);
      const colors = ['#f44336', '#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ff9800'];
      const gap = 60;
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI * 2);
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.fill();
        }
      }
    }
  },
  {
    triggers: [/stripe/i],
    description: "Here's a stripe pattern! 🏳️‍🌈",
    draw(ctx, w, h) {
      const colors = ['#e53935', '#fb8c00', '#fdd835', '#43a047', '#1e88e5', '#8e24aa'];
      const stripeH = h / colors.length;
      colors.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, i * stripeH, w, stripeH); });
    }
  },
  {
    triggers: [/spiral/i],
    description: "Here's a spiral! 🌀",
    draw(ctx, w, h) {
      ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      ctx.beginPath();
      for (let t = 0; t < 30; t += 0.02) {
        const x = cx + t * 8 * Math.cos(t);
        const y = cy + t * 8 * Math.sin(t);
        if (t === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `hsl(${Math.random() * 360}, 80%, 65%)`; ctx.lineWidth = 3; ctx.stroke();
    }
  },
  {
    triggers: [/house|home/i],
    description: "Here's a cute house! 🏠",
    draw(ctx, w, h) {
      ctx.fillStyle = '#87ceeb'; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#66bb6a'; ctx.fillRect(0, h * 0.7, w, h * 0.3);
      // House body
      ctx.fillStyle = '#fff3e0'; ctx.fillRect(w * 0.3, h * 0.4, w * 0.4, h * 0.3);
      // Roof
      ctx.fillStyle = '#d32f2f'; ctx.beginPath();
      ctx.moveTo(w * 0.25, h * 0.4); ctx.lineTo(w * 0.5, h * 0.2); ctx.lineTo(w * 0.75, h * 0.4);
      ctx.closePath(); ctx.fill();
      // Door
      ctx.fillStyle = '#5d4037'; ctx.fillRect(w * 0.45, h * 0.55, w * 0.1, h * 0.15);
      ctx.fillStyle = '#ffd54f'; ctx.beginPath(); ctx.arc(w * 0.53, h * 0.63, 3, 0, Math.PI * 2); ctx.fill();
      // Windows
      ctx.fillStyle = '#bbdefb';
      ctx.fillRect(w * 0.33, h * 0.45, w * 0.08, h * 0.08);
      ctx.fillRect(w * 0.59, h * 0.45, w * 0.08, h * 0.08);
      // Sun
      ctx.beginPath(); ctx.arc(w * 0.85, h * 0.12, 30, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd54f'; ctx.fill();
    }
  },
  {
    triggers: [/robot/i],
    description: "Here's a robot! 🤖",
    draw(ctx, w, h) {
      ctx.fillStyle = '#263238'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Head
      ctx.fillStyle = '#b0bec5'; ctx.fillRect(cx - 70, cy - 100, 140, 120);
      ctx.strokeStyle = '#78909c'; ctx.lineWidth = 3; ctx.strokeRect(cx - 70, cy - 100, 140, 120);
      // Eyes
      ctx.fillStyle = '#00e5ff'; ctx.fillRect(cx - 45, cy - 70, 30, 25);
      ctx.fillRect(cx + 15, cy - 70, 30, 25);
      // Mouth
      ctx.fillStyle = '#455a64';
      for (let i = 0; i < 5; i++) { ctx.fillRect(cx - 40 + i * 18, cy - 20, 12, 6); }
      // Body
      ctx.fillStyle = '#90a4ae'; ctx.fillRect(cx - 80, cy + 30, 160, 120);
      // Antenna
      ctx.strokeStyle = '#78909c'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(cx, cy - 100); ctx.lineTo(cx, cy - 140); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx, cy - 145, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ff1744'; ctx.fill();
      // Arms
      ctx.fillStyle = '#78909c';
      ctx.fillRect(cx - 110, cy + 50, 30, 80);
      ctx.fillRect(cx + 80, cy + 50, 30, 80);
    }
  },
  {
    triggers: [/aurora|northern\s*light/i],
    description: "Here's an aurora borealis! 🌌",
    draw(ctx, w, h) {
      ctx.fillStyle = '#0a0a2e'; ctx.fillRect(0, 0, w, h);
      // Stars
      for (let i = 0; i < 150; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h * 0.7, Math.random() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.5})`; ctx.fill();
      }
      // Aurora bands
      for (let band = 0; band < 5; band++) {
        ctx.beginPath();
        const baseY = h * 0.2 + band * 30;
        ctx.moveTo(0, baseY);
        for (let x = 0; x <= w; x += 5) {
          ctx.lineTo(x, baseY + Math.sin(x * 0.01 + band * 2) * 40 + Math.sin(x * 0.03) * 20);
        }
        ctx.lineTo(w, baseY + 80); ctx.lineTo(0, baseY + 80); ctx.closePath();
        const hue = 120 + band * 30;
        ctx.fillStyle = `hsla(${hue}, 80%, 50%, 0.15)`;
        ctx.fill();
      }
      // Hills
      ctx.fillStyle = '#1a1a2e';
      ctx.beginPath(); ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 10) ctx.lineTo(x, h * 0.8 + Math.sin(x * 0.008) * 30);
      ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
    }
  },
  {
    triggers: [/diamond|gem|crystal/i],
    description: "Here's a diamond! 💎",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#1a1a3e'); bg.addColorStop(1, '#0d0d2b');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const pts = [[cx, cy - 120], [cx + 80, cy - 40], [cx + 60, cy + 80], [cx - 60, cy + 80], [cx - 80, cy - 40]];
      // Diamond shape
      ctx.beginPath(); pts.forEach((p, i) => i === 0 ? ctx.moveTo(...p) : ctx.lineTo(...p)); ctx.closePath();
      const dGrad = ctx.createLinearGradient(cx - 80, cy - 120, cx + 80, cy + 80);
      dGrad.addColorStop(0, '#b3e5fc'); dGrad.addColorStop(0.5, '#4fc3f7'); dGrad.addColorStop(1, '#0288d1');
      ctx.fillStyle = dGrad; ctx.fill();
      ctx.strokeStyle = '#81d4fa'; ctx.lineWidth = 2; ctx.stroke();
      // Inner lines
      ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx, cy - 120); ctx.lineTo(cx, cy + 80); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pts[1][0], pts[1][1]); ctx.lineTo(pts[3][0], pts[3][1]); ctx.stroke();
      // Sparkles
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(cx + (Math.random() - 0.5) * 250, cy + (Math.random() - 0.5) * 300, Math.random() * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,230,255,${Math.random() * 0.6})`; ctx.fill();
      }
    }
  },
  {
    triggers: [/mandala|pattern/i],
    description: "Here's a mandala pattern! 🕉️",
    draw(ctx, w, h) {
      ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
      for (let ring = 5; ring >= 1; ring--) {
        const count = ring * 8;
        for (let i = 0; i < count; i++) {
          ctx.save(); ctx.translate(cx, cy);
          ctx.rotate((i / count) * Math.PI * 2);
          ctx.fillStyle = colors[(ring + i) % colors.length];
          ctx.beginPath(); ctx.ellipse(0, -ring * 30, 8 + ring * 2, 20 + ring * 4, 0, 0, Math.PI * 2);
          ctx.globalAlpha = 0.7; ctx.fill();
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2);
      ctx.fillStyle = '#feca57'; ctx.fill();
    }
  },
  {
    triggers: [/cat|kitten/i],
    description: "Here's a cute cat! 🐱",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fff3e0'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Body
      ctx.beginPath(); ctx.ellipse(cx, cy + 60, 80, 100, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#ff9800'; ctx.fill();
      // Head
      ctx.beginPath(); ctx.arc(cx, cy - 40, 70, 0, Math.PI * 2);
      ctx.fillStyle = '#ff9800'; ctx.fill();
      // Ears
      ctx.fillStyle = '#ff9800';
      ctx.beginPath(); ctx.moveTo(cx - 55, cy - 80); ctx.lineTo(cx - 30, cy - 130); ctx.lineTo(cx - 10, cy - 75); ctx.fill();
      ctx.beginPath(); ctx.moveTo(cx + 55, cy - 80); ctx.lineTo(cx + 30, cy - 130); ctx.lineTo(cx + 10, cy - 75); ctx.fill();
      // Inner ears
      ctx.fillStyle = '#ffccbc';
      ctx.beginPath(); ctx.moveTo(cx - 45, cy - 85); ctx.lineTo(cx - 30, cy - 118); ctx.lineTo(cx - 15, cy - 80); ctx.fill();
      ctx.beginPath(); ctx.moveTo(cx + 45, cy - 85); ctx.lineTo(cx + 30, cy - 118); ctx.lineTo(cx + 15, cy - 80); ctx.fill();
      // Eyes
      ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.ellipse(cx - 25, cy - 45, 15, 18, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.ellipse(cx + 25, cy - 45, 15, 18, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#111';
      ctx.beginPath(); ctx.ellipse(cx - 25, cy - 45, 6, 16, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 25, cy - 45, 6, 16, 0, 0, Math.PI * 2); ctx.fill();
      // Nose & mouth
      ctx.fillStyle = '#e91e63';
      ctx.beginPath(); ctx.moveTo(cx, cy - 18); ctx.lineTo(cx - 6, cy - 12); ctx.lineTo(cx + 6, cy - 12); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = '#5d4037'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx, cy - 12); ctx.lineTo(cx, cy - 4); ctx.stroke();
      // Whiskers
      ctx.strokeStyle = '#5d4037'; ctx.lineWidth = 1.5;
      for (let side of [-1, 1]) {
        for (let i = -1; i <= 1; i++) {
          ctx.beginPath(); ctx.moveTo(cx + side * 15, cy - 10 + i * 8);
          ctx.lineTo(cx + side * 70, cy - 15 + i * 12); ctx.stroke();
        }
      }
    }
  },
  {
    triggers: [/forest|woods/i],
    description: "Here's a forest! 🌲",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#e8f5e9'); bg.addColorStop(1, '#c8e6c9');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#4caf50'; ctx.fillRect(0, h * 0.8, w, h * 0.2);
      // Trees
      const treeColors = ['#1b5e20', '#2e7d32', '#388e3c', '#43a047'];
      for (let i = 0; i < 12; i++) {
        const tx = 30 + Math.random() * (w - 60);
        const th = 120 + Math.random() * 100;
        const ty = h * 0.8 - th * 0.3;
        // Trunk
        ctx.fillStyle = '#4e342e'; ctx.fillRect(tx - 6, ty + th * 0.6, 12, th * 0.4);
        // Layers
        for (let l = 0; l < 3; l++) {
          ctx.fillStyle = treeColors[Math.floor(Math.random() * treeColors.length)];
          ctx.beginPath();
          ctx.moveTo(tx - 30 - l * 5, ty + l * 35);
          ctx.lineTo(tx, ty - 20 + l * 30);
          ctx.lineTo(tx + 30 + l * 5, ty + l * 35);
          ctx.closePath(); ctx.fill();
        }
      }
    }
  },
  {
    triggers: [/circle|bubble/i],
    description: "Here's colorful circles! 🔵",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fafafa'; ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 60, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${Math.random() * 360}, 70%, 60%, 0.5)`;
        ctx.fill();
        ctx.strokeStyle = `hsla(${Math.random() * 360}, 70%, 40%, 0.3)`;
        ctx.lineWidth = 2; ctx.stroke();
      }
    }
  },
  {
    triggers: [/emoji|face/i],
    description: "Here's some emojis! 😎",
    draw(ctx, w, h) {
      ctx.fillStyle = '#f5f5f5'; ctx.fillRect(0, 0, w, h);
      const emojis = ['😊', '😎', '🥳', '😍', '🤩', '😜', '🤗', '😇', '🥰', '😺'];
      ctx.font = '60px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const cols = 4, rows = 3;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = (c + 0.5) * (w / cols);
          const y = (r + 0.5) * (h / rows) + 20;
          ctx.fillText(emojis[(r * cols + c) % emojis.length], x, y);
        }
      }
    }
  },
  {
    triggers: [/moon|crescent/i],
    description: "Here's a moon! 🌙",
    draw(ctx, w, h) {
      ctx.fillStyle = '#0a0a2e'; ctx.fillRect(0, 0, w, h);
      // Stars
      for (let i = 0; i < 200; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.2 + Math.random() * 0.6})`; ctx.fill();
      }
      const cx = w / 2, cy = h / 2;
      // Moon glow
      const glow = ctx.createRadialGradient(cx, cy, 60, cx, cy, 200);
      glow.addColorStop(0, 'rgba(255,255,200,0.15)'); glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h);
      // Moon
      ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.fillStyle = '#fdd835'; ctx.fill();
      // Crescent cut
      ctx.beginPath(); ctx.arc(cx + 30, cy - 10, 70, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0a2e'; ctx.fill();
    }
  },
];

function findArtTemplate(prompt) {
  const p = prompt.toLowerCase();
  for (const template of artTemplates) {
    for (const trigger of template.triggers) {
      if (trigger.test(p)) return template;
    }
  }
  return null;
}

function addArtChatMessage(text, isUser) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isUser ? 'user-msg' : 'bot-msg'}`;
  msgDiv.innerHTML = `
    <div class="chat-avatar">${isUser ? '👤' : '🎨'}</div>
    <div class="chat-bubble">${text}</div>
  `;
  artChatMessages.appendChild(msgDiv);
  artChatMessages.scrollTop = artChatMessages.scrollHeight;
}

function addArtTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot-msg';
  typing.id = 'art-typing-indicator';
  typing.innerHTML = `
    <div class="chat-avatar">🎨</div>
    <div class="chat-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  artChatMessages.appendChild(typing);
  artChatMessages.scrollTop = artChatMessages.scrollHeight;
}

function removeArtTypingIndicator() {
  const indicator = document.getElementById('art-typing-indicator');
  if (indicator) indicator.remove();
}

function addArtBotResponse(description, canvas) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg bot-msg';
  const imgData = canvas.toDataURL('image/png');
  msgDiv.innerHTML = `
    <div class="chat-avatar">🎨</div>
    <div class="chat-bubble">
      ${description}
      <br><img src="${imgData}" class="chat-image-preview" alt="Generated art">
      <br><button class="art-download-btn" onclick="downloadArtImage()">💾 Save Image</button>
    </div>
  `;
  artChatMessages.appendChild(msgDiv);
  artChatMessages.scrollTop = artChatMessages.scrollHeight;
}

function downloadArtImage() {
  const link = document.createElement('a');
  link.download = 'nova-art-' + Date.now() + '.png';
  link.href = artCanvas.toDataURL('image/png');
  link.click();
}
window.downloadArtImage = downloadArtImage;

function handleArtSend() {
  const prompt = artChatInput.value.trim();
  if (!prompt) return;

  addArtChatMessage(prompt, true);
  artChatInput.value = '';
  addArtTypingIndicator();

  setTimeout(() => {
    removeArtTypingIndicator();

    if (/^(help|list|templates)$/i.test(prompt)) {
      addArtChatMessage(
        "🎨 <b>Everything I can draw:</b><br><br>" +
        "🌅 <b>Nature:</b> sunset, mountains, ocean, forest, rainbow, tree, aurora, moon, waterfall, volcano<br>" +
        "✨ <b>Space:</b> stars, galaxy, night sky, fireworks, planet, rocket<br>" +
        "😊 <b>Faces & Animals:</b> smiley face, robot, cat, dog, bird, butterfly, fish, emoji<br>" +
        "🏙️ <b>Scenes:</b> city skyline, house, car, umbrella<br>" +
        "🍕 <b>Food:</b> pizza, cake, ice cream<br>" +
        "🌧️ <b>Weather:</b> clouds, lightning storm, snowflake<br>" +
        "🎨 <b>Patterns:</b> gradient, checkerboard, polka dots, stripes, spiral, mandala, waves, zigzag, concentric circles, pixel art<br>" +
        "💎 <b>Objects:</b> heart, flower, diamond, crown, circles<br><br>" +
        "Just type what you want to see! You can also <b>edit</b> any image using the toolbar above the canvas. ✏️",
        false
      );
      return;
    }

    const template = findArtTemplate(prompt);
    if (template) {
      artCanvas.classList.add('active');
      artPlaceholder.classList.add('hidden');
      artCtx.clearRect(0, 0, artCanvas.width, artCanvas.height);
      template.draw(artCtx, artCanvas.width, artCanvas.height);
      addArtBotResponse(template.description, artCanvas);
    } else {
      addArtChatMessage(
        "I'm not sure how to draw that yet! Try asking for:<br><br>" +
        "🌅 sunset, mountains, ocean, forest<br>" +
        "😊 smiley face, heart, flower, cat<br>" +
        "🏙️ city skyline, robot, snowflake<br>" +
        "🎨 gradient, checkerboard, mandala<br><br>" +
        "Type <b>help</b> for a full list!",
        false
      );
    }
  }, 1000);
}

artChatSend.addEventListener('click', handleArtSend);
artChatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleArtSend();
});

downloadArtBtn.addEventListener('click', () => {
  if (artCanvas.classList.contains('active')) {
    downloadArtImage();
  }
});

clearArtBtn.addEventListener('click', () => {
  artCtx.clearRect(0, 0, artCanvas.width, artCanvas.height);
  artCanvas.classList.remove('active');
  artPlaceholder.classList.remove('hidden');
  undoStack = [];
});

// ===== Art Editing Tools =====
let currentTool = 'draw';
let isDrawing = false;
let lastX = 0, lastY = 0;
let undoStack = [];
const MAX_UNDO = 20;

const artColorInput = document.getElementById('art-color');
const artBrushSize = document.getElementById('art-brush-size');
const toolButtons = {
  draw: document.getElementById('tool-draw'),
  eraser: document.getElementById('tool-eraser'),
  circle: document.getElementById('tool-circle'),
  rect: document.getElementById('tool-rect'),
  text: document.getElementById('tool-text'),
};
const undoBtn = document.getElementById('tool-undo');

function saveUndoState() {
  undoStack.push(artCtx.getImageData(0, 0, artCanvas.width, artCanvas.height));
  if (undoStack.length > MAX_UNDO) undoStack.shift();
}

function selectTool(tool) {
  currentTool = tool;
  Object.values(toolButtons).forEach(btn => btn.classList.remove('active'));
  if (toolButtons[tool]) toolButtons[tool].classList.add('active');
  artCanvas.className = artCanvas.className.replace(/drawing|erasing/g, '').trim();
  if (tool === 'draw') artCanvas.classList.add('drawing', 'active');
  else if (tool === 'eraser') artCanvas.classList.add('erasing', 'active');
  else artCanvas.classList.add('drawing', 'active');
}

Object.keys(toolButtons).forEach(tool => {
  toolButtons[tool].addEventListener('click', () => selectTool(tool));
});

undoBtn.addEventListener('click', () => {
  if (undoStack.length > 0) {
    const state = undoStack.pop();
    artCtx.putImageData(state, 0, 0);
  }
});

function getCanvasPos(e) {
  const rect = artCanvas.getBoundingClientRect();
  const scaleX = artCanvas.width / rect.width;
  const scaleY = artCanvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

artCanvas.addEventListener('mousedown', (e) => {
  if (!artCanvas.classList.contains('active')) return;
  isDrawing = true;
  const pos = getCanvasPos(e);
  lastX = pos.x;
  lastY = pos.y;

  if (currentTool === 'circle' || currentTool === 'rect' || currentTool === 'text') {
    saveUndoState();
    const size = parseInt(artBrushSize.value);
    const color = artColorInput.value;

    if (currentTool === 'circle') {
      artCtx.beginPath();
      artCtx.arc(pos.x, pos.y, size * 3, 0, Math.PI * 2);
      artCtx.fillStyle = color;
      artCtx.fill();
    } else if (currentTool === 'rect') {
      artCtx.fillStyle = color;
      const s = size * 5;
      artCtx.fillRect(pos.x - s / 2, pos.y - s / 2, s, s);
    } else if (currentTool === 'text') {
      const text = prompt('Enter text to stamp:');
      if (text) {
        artCtx.font = `${size * 3}px Inter, sans-serif`;
        artCtx.fillStyle = color;
        artCtx.textAlign = 'center';
        artCtx.textBaseline = 'middle';
        artCtx.fillText(text, pos.x, pos.y);
      }
    }
    isDrawing = false;
    return;
  }

  saveUndoState();
});

artCanvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  const pos = getCanvasPos(e);
  const size = parseInt(artBrushSize.value);

  if (currentTool === 'draw') {
    artCtx.beginPath();
    artCtx.moveTo(lastX, lastY);
    artCtx.lineTo(pos.x, pos.y);
    artCtx.strokeStyle = artColorInput.value;
    artCtx.lineWidth = size;
    artCtx.lineCap = 'round';
    artCtx.lineJoin = 'round';
    artCtx.stroke();
  } else if (currentTool === 'eraser') {
    artCtx.beginPath();
    artCtx.moveTo(lastX, lastY);
    artCtx.lineTo(pos.x, pos.y);
    artCtx.strokeStyle = '#0d0d14';
    artCtx.lineWidth = size * 3;
    artCtx.lineCap = 'round';
    artCtx.lineJoin = 'round';
    artCtx.stroke();
  }

  lastX = pos.x;
  lastY = pos.y;
});

artCanvas.addEventListener('mouseup', () => { isDrawing = false; });
artCanvas.addEventListener('mouseleave', () => { isDrawing = false; });

// Touch support
artCanvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousedown', { clientX: touch.clientX, clientY: touch.clientY });
  artCanvas.dispatchEvent(mouseEvent);
});
artCanvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousemove', { clientX: touch.clientX, clientY: touch.clientY });
  artCanvas.dispatchEvent(mouseEvent);
});
artCanvas.addEventListener('touchend', () => {
  artCanvas.dispatchEvent(new MouseEvent('mouseup'));
});

// ===== More Art Templates =====
const extraArtTemplates = [
  {
    triggers: [/dog|puppy/i],
    description: "Here's a cute dog! 🐶",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fff8e1'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Body
      ctx.beginPath(); ctx.ellipse(cx, cy + 80, 100, 70, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#8d6e63'; ctx.fill();
      // Head
      ctx.beginPath(); ctx.arc(cx, cy - 20, 75, 0, Math.PI * 2);
      ctx.fillStyle = '#a1887f'; ctx.fill();
      // Ears
      ctx.fillStyle = '#6d4c41';
      ctx.beginPath(); ctx.ellipse(cx - 65, cy - 60, 25, 45, -0.3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 65, cy - 60, 25, 45, 0.3, 0, Math.PI * 2); ctx.fill();
      // Eyes
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.arc(cx - 25, cy - 30, 12, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 25, cy - 30, 12, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(cx - 21, cy - 34, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 29, cy - 34, 4, 0, Math.PI * 2); ctx.fill();
      // Nose
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.ellipse(cx, cy + 5, 15, 10, 0, 0, Math.PI * 2); ctx.fill();
      // Tongue
      ctx.fillStyle = '#ef5350';
      ctx.beginPath(); ctx.ellipse(cx, cy + 30, 12, 20, 0, 0, Math.PI * 2); ctx.fill();
      // Tail
      ctx.strokeStyle = '#8d6e63'; ctx.lineWidth = 8; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(cx + 100, cy + 60, 40, -0.5, 1.5); ctx.stroke();
    }
  },
  {
    triggers: [/bird/i],
    description: "Here's a bird! 🐦",
    draw(ctx, w, h) {
      ctx.fillStyle = '#e3f2fd'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Body
      ctx.beginPath(); ctx.ellipse(cx, cy, 60, 45, -0.2, 0, Math.PI * 2);
      ctx.fillStyle = '#42a5f5'; ctx.fill();
      // Head
      ctx.beginPath(); ctx.arc(cx + 50, cy - 30, 30, 0, Math.PI * 2);
      ctx.fillStyle = '#42a5f5'; ctx.fill();
      // Wing
      ctx.beginPath(); ctx.ellipse(cx - 20, cy - 10, 50, 25, -0.5, 0, Math.PI * 2);
      ctx.fillStyle = '#1e88e5'; ctx.fill();
      // Eye
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(cx + 58, cy - 35, 8, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.arc(cx + 60, cy - 35, 4, 0, Math.PI * 2); ctx.fill();
      // Beak
      ctx.fillStyle = '#ff9800';
      ctx.beginPath(); ctx.moveTo(cx + 78, cy - 30); ctx.lineTo(cx + 100, cy - 25); ctx.lineTo(cx + 78, cy - 20); ctx.closePath(); ctx.fill();
      // Legs
      ctx.strokeStyle = '#ff9800'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx - 10, cy + 40); ctx.lineTo(cx - 15, cy + 70); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 10, cy + 40); ctx.lineTo(cx + 5, cy + 70); ctx.stroke();
      // Tail
      ctx.fillStyle = '#1565c0';
      ctx.beginPath(); ctx.moveTo(cx - 55, cy); ctx.lineTo(cx - 100, cy - 20); ctx.lineTo(cx - 90, cy + 10); ctx.closePath(); ctx.fill();
    }
  },
  {
    triggers: [/butterfly/i],
    description: "Here's a butterfly! 🦋",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fce4ec'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const wingColors = [['#e040fb', '#ab47bc'], ['#7c4dff', '#651fff'], ['#ff4081', '#f50057'], ['#40c4ff', '#0091ea']];
      const pick = wingColors[Math.floor(Math.random() * wingColors.length)];
      // Wings
      ctx.fillStyle = pick[0];
      ctx.beginPath(); ctx.ellipse(cx - 60, cy - 30, 55, 70, -0.3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 60, cy - 30, 55, 70, 0.3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = pick[1];
      ctx.beginPath(); ctx.ellipse(cx - 50, cy + 40, 35, 50, -0.2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 50, cy + 40, 35, 50, 0.2, 0, Math.PI * 2); ctx.fill();
      // Wing patterns
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath(); ctx.arc(cx - 60, cy - 30, 20, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 60, cy - 30, 20, 0, Math.PI * 2); ctx.fill();
      // Body
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.ellipse(cx, cy, 8, 60, 0, 0, Math.PI * 2); ctx.fill();
      // Antennae
      ctx.strokeStyle = '#333'; ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(cx - 3, cy - 55); ctx.quadraticCurveTo(cx - 30, cy - 100, cx - 40, cy - 90); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 3, cy - 55); ctx.quadraticCurveTo(cx + 30, cy - 100, cx + 40, cy - 90); ctx.stroke();
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.arc(cx - 40, cy - 90, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 40, cy - 90, 4, 0, Math.PI * 2); ctx.fill();
    }
  },
  {
    triggers: [/fish|aquarium/i],
    description: "Here's a fish! 🐟",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#0277bd'); bg.addColorStop(1, '#01579b');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      // Bubbles
      for (let i = 0; i < 15; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, 5 + Math.random() * 15, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${0.1 + Math.random() * 0.2})`; ctx.lineWidth = 1.5; ctx.stroke();
      }
      const cx = w / 2, cy = h / 2;
      // Body
      ctx.beginPath(); ctx.ellipse(cx, cy, 90, 55, 0, 0, Math.PI * 2);
      const fishGrad = ctx.createLinearGradient(cx - 90, cy, cx + 90, cy);
      fishGrad.addColorStop(0, '#ff7043'); fishGrad.addColorStop(1, '#ff5722');
      ctx.fillStyle = fishGrad; ctx.fill();
      // Tail
      ctx.fillStyle = '#e64a19';
      ctx.beginPath(); ctx.moveTo(cx + 80, cy); ctx.lineTo(cx + 140, cy - 40); ctx.lineTo(cx + 140, cy + 40); ctx.closePath(); ctx.fill();
      // Eye
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cx - 40, cy - 10, 16, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#333'; ctx.beginPath(); ctx.arc(cx - 38, cy - 10, 8, 0, Math.PI * 2); ctx.fill();
      // Fins
      ctx.fillStyle = '#ff8a65';
      ctx.beginPath(); ctx.ellipse(cx + 10, cy - 45, 30, 15, -0.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 10, cy + 45, 25, 12, 0.5, 0, Math.PI * 2); ctx.fill();
      // Scales
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1;
      for (let sx = cx - 50; sx < cx + 60; sx += 20) {
        for (let sy = cy - 30; sy < cy + 30; sy += 18) {
          ctx.beginPath(); ctx.arc(sx, sy, 9, 0, Math.PI); ctx.stroke();
        }
      }
    }
  },
  {
    triggers: [/pizza/i],
    description: "Here's a pizza! 🍕",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fff8e1'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Pizza base
      ctx.beginPath(); ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.fillStyle = '#ffcc80'; ctx.fill();
      ctx.strokeStyle = '#e65100'; ctx.lineWidth = 8; ctx.stroke();
      // Sauce
      ctx.beginPath(); ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fillStyle = '#e53935'; ctx.fill();
      // Cheese
      ctx.beginPath(); ctx.arc(cx, cy, 130, 0, Math.PI * 2);
      ctx.fillStyle = '#fdd835'; ctx.fill();
      // Pepperoni
      const pepPos = [[cx - 50, cy - 40], [cx + 60, cy - 30], [cx - 30, cy + 50], [cx + 40, cy + 60], [cx, cy - 60], [cx - 60, cy + 10], [cx + 20, cy]];
      pepPos.forEach(([px, py]) => {
        ctx.beginPath(); ctx.arc(px, py, 18, 0, Math.PI * 2);
        ctx.fillStyle = '#b71c1c'; ctx.fill();
      });
      // Slices
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'; ctx.lineWidth = 2;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath(); ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(i * Math.PI / 4) * 160, cy + Math.sin(i * Math.PI / 4) * 160);
        ctx.stroke();
      }
    }
  },
  {
    triggers: [/cake|birthday/i],
    description: "Here's a birthday cake! 🎂",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fce4ec'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2 + 40;
      // Bottom layer
      ctx.fillStyle = '#8d6e63'; ctx.fillRect(cx - 120, cy, 240, 80);
      ctx.fillStyle = '#d7ccc8'; ctx.fillRect(cx - 120, cy - 5, 240, 15);
      // Middle layer
      ctx.fillStyle = '#ef9a9a'; ctx.fillRect(cx - 90, cy - 60, 180, 65);
      ctx.fillStyle = '#ffcdd2'; ctx.fillRect(cx - 90, cy - 65, 180, 15);
      // Top layer
      ctx.fillStyle = '#f48fb1'; ctx.fillRect(cx - 60, cy - 110, 120, 55);
      ctx.fillStyle = '#f8bbd0'; ctx.fillRect(cx - 60, cy - 115, 120, 15);
      // Frosting drips
      ctx.fillStyle = '#fff';
      for (let x = cx - 55; x <= cx + 55; x += 20) {
        ctx.beginPath();
        ctx.arc(x, cy - 110, 8, 0, Math.PI); ctx.fill();
      }
      // Candles
      const candleColors = ['#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0'];
      for (let i = 0; i < 5; i++) {
        const cX = cx - 40 + i * 20;
        ctx.fillStyle = candleColors[i];
        ctx.fillRect(cX - 3, cy - 145, 6, 35);
        // Flame
        ctx.fillStyle = '#ffd54f';
        ctx.beginPath();
        ctx.ellipse(cX, cy - 152, 5, 10, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ff9800';
        ctx.beginPath();
        ctx.ellipse(cX, cy - 150, 3, 6, 0, 0, Math.PI * 2); ctx.fill();
      }
    }
  },
  {
    triggers: [/ice\s*cream|icecream|sundae/i],
    description: "Here's ice cream! 🍦",
    draw(ctx, w, h) {
      ctx.fillStyle = '#e3f2fd'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Cone
      ctx.fillStyle = '#d7a86e';
      ctx.beginPath(); ctx.moveTo(cx - 50, cy + 10); ctx.lineTo(cx, cy + 160); ctx.lineTo(cx + 50, cy + 10); ctx.closePath(); ctx.fill();
      // Waffle pattern
      ctx.strokeStyle = '#c49a5f'; ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath(); ctx.moveTo(cx - 45 + i * 5, cy + 15 + i * 15); ctx.lineTo(cx + 45 - i * 5, cy + 15 + i * 15); ctx.stroke();
      }
      // Scoops
      const scoopColors = [['#f48fb1', '#ec407a'], ['#fff176', '#fdd835'], ['#a5d6a7', '#66bb6a']];
      scoopColors.forEach(([c1, c2], i) => {
        const sY = cy - 10 - i * 50;
        const sGrad = ctx.createRadialGradient(cx, sY, 5, cx, sY, 45);
        sGrad.addColorStop(0, c1); sGrad.addColorStop(1, c2);
        ctx.beginPath(); ctx.arc(cx, sY, 45, 0, Math.PI * 2);
        ctx.fillStyle = sGrad; ctx.fill();
      });
      // Cherry
      ctx.fillStyle = '#d32f2f';
      ctx.beginPath(); ctx.arc(cx, cy - 155, 12, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#4caf50'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx, cy - 167); ctx.quadraticCurveTo(cx + 15, cy - 185, cx + 5, cy - 180); ctx.stroke();
    }
  },
  {
    triggers: [/cloud|cloudy/i],
    description: "Here's clouds! ☁️",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#64b5f6'); bg.addColorStop(1, '#bbdefb');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      // Sun
      ctx.beginPath(); ctx.arc(w * 0.8, h * 0.2, 50, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd54f'; ctx.fill();
      // Clouds
      function drawCloud(x, y, s) {
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(x, y, 40 * s, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x + 35 * s, y - 10 * s, 35 * s, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x - 35 * s, y, 30 * s, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x + 60 * s, y + 5 * s, 25 * s, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x - 15 * s, y + 15 * s, 28 * s, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x + 25 * s, y + 15 * s, 28 * s, 0, Math.PI * 2); ctx.fill();
      }
      drawCloud(w * 0.3, h * 0.25, 1.2);
      drawCloud(w * 0.7, h * 0.4, 1);
      drawCloud(w * 0.15, h * 0.55, 0.8);
      drawCloud(w * 0.55, h * 0.65, 0.9);
    }
  },
  {
    triggers: [/lightning|thunder|storm/i],
    description: "Here's a lightning storm! ⚡",
    draw(ctx, w, h) {
      ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, w, h);
      // Storm clouds
      ctx.fillStyle = '#37474f';
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, 40 + Math.random() * 80, 50 + Math.random() * 60, 0, Math.PI * 2);
        ctx.fill();
      }
      // Lightning bolts
      for (let b = 0; b < 3; b++) {
        const startX = 100 + Math.random() * (w - 200);
        ctx.strokeStyle = '#ffd54f'; ctx.lineWidth = 4;
        ctx.shadowColor = '#ffd54f'; ctx.shadowBlur = 20;
        ctx.beginPath();
        let x = startX, y = 100;
        ctx.moveTo(x, y);
        while (y < h * 0.8) {
          x += (Math.random() - 0.5) * 60;
          y += 20 + Math.random() * 30;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
      // Rain
      ctx.strokeStyle = 'rgba(100,180,255,0.4)'; ctx.lineWidth = 1;
      for (let i = 0; i < 100; i++) {
        const rx = Math.random() * w, ry = Math.random() * h;
        ctx.beginPath(); ctx.moveTo(rx, ry); ctx.lineTo(rx - 3, ry + 15); ctx.stroke();
      }
    }
  },
  {
    triggers: [/volcano|lava/i],
    description: "Here's a volcano! 🌋",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#ff6f00'); bg.addColorStop(0.4, '#bf360c'); bg.addColorStop(1, '#3e2723');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      // Mountain
      ctx.fillStyle = '#4e342e';
      ctx.beginPath(); ctx.moveTo(w * 0.2, h); ctx.lineTo(w * 0.42, h * 0.3); ctx.lineTo(w * 0.58, h * 0.3);
      ctx.lineTo(w * 0.8, h); ctx.closePath(); ctx.fill();
      // Crater
      ctx.fillStyle = '#bf360c';
      ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.3, 42, 12, 0, 0, Math.PI * 2); ctx.fill();
      // Lava eruption
      for (let i = 0; i < 30; i++) {
        const lx = w * 0.5 + (Math.random() - 0.5) * 60;
        const ly = h * 0.3 - Math.random() * 150;
        ctx.beginPath(); ctx.arc(lx, ly, 3 + Math.random() * 6, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 30 + 10}, 100%, ${50 + Math.random() * 30}%)`;
        ctx.fill();
      }
      // Lava flow
      ctx.fillStyle = '#ff6f00';
      ctx.beginPath(); ctx.moveTo(w * 0.47, h * 0.3);
      ctx.quadraticCurveTo(w * 0.44, h * 0.6, w * 0.35, h);
      ctx.lineTo(w * 0.5, h);
      ctx.quadraticCurveTo(w * 0.52, h * 0.5, w * 0.53, h * 0.3);
      ctx.closePath(); ctx.fill();
    }
  },
  {
    triggers: [/waterfall/i],
    description: "Here's a waterfall! 💧",
    draw(ctx, w, h) {
      ctx.fillStyle = '#2e7d32'; ctx.fillRect(0, 0, w, h);
      // Cliff
      ctx.fillStyle = '#5d4037'; ctx.fillRect(0, 0, w * 0.35, h * 0.45);
      ctx.fillRect(w * 0.65, 0, w * 0.35, h * 0.45);
      // Water fall
      for (let i = 0; i < 30; i++) {
        ctx.strokeStyle = `rgba(180,230,255,${0.3 + Math.random() * 0.4})`;
        ctx.lineWidth = 2 + Math.random() * 4;
        const wx = w * 0.35 + Math.random() * (w * 0.3);
        ctx.beginPath(); ctx.moveTo(wx, h * 0.45); ctx.lineTo(wx + (Math.random() - 0.5) * 20, h * 0.85); ctx.stroke();
      }
      // Pool
      ctx.fillStyle = '#0288d1';
      ctx.beginPath(); ctx.ellipse(w / 2, h * 0.88, w * 0.4, 40, 0, 0, Math.PI * 2); ctx.fill();
      // Mist
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.35 + Math.random() * (w * 0.3), h * 0.8 + Math.random() * 30, 10 + Math.random() * 20, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.1})`; ctx.fill();
      }
    }
  },
  {
    triggers: [/planet|earth|globe/i],
    description: "Here's a planet! 🪐",
    draw(ctx, w, h) {
      ctx.fillStyle = '#0a0a2e'; ctx.fillRect(0, 0, w, h);
      // Stars
      for (let i = 0; i < 150; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.5})`; ctx.fill();
      }
      const cx = w / 2, cy = h / 2;
      // Planet
      const planetGrad = ctx.createRadialGradient(cx - 30, cy - 30, 20, cx, cy, 110);
      planetGrad.addColorStop(0, '#4fc3f7'); planetGrad.addColorStop(0.5, '#0288d1'); planetGrad.addColorStop(1, '#01579b');
      ctx.beginPath(); ctx.arc(cx, cy, 110, 0, Math.PI * 2);
      ctx.fillStyle = planetGrad; ctx.fill();
      // Land masses
      ctx.fillStyle = '#66bb6a';
      ctx.beginPath(); ctx.ellipse(cx - 30, cy - 20, 40, 30, 0.3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 40, cy + 20, 25, 35, -0.2, 0, Math.PI * 2); ctx.fill();
      // Atmosphere glow
      ctx.beginPath(); ctx.arc(cx, cy, 115, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100,200,255,0.3)'; ctx.lineWidth = 5; ctx.stroke();
      // Ring
      ctx.beginPath(); ctx.ellipse(cx, cy, 170, 30, -0.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200,200,200,0.5)'; ctx.lineWidth = 8; ctx.stroke();
    }
  },
  {
    triggers: [/car|vehicle/i],
    description: "Here's a car! 🚗",
    draw(ctx, w, h) {
      ctx.fillStyle = '#e0f7fa'; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#90a4ae'; ctx.fillRect(0, h * 0.7, w, h * 0.3);
      const cx = w / 2, cy = h * 0.55;
      // Body
      ctx.fillStyle = '#e53935';
      ctx.fillRect(cx - 100, cy, 200, 50);
      // Top
      ctx.beginPath(); ctx.moveTo(cx - 60, cy); ctx.lineTo(cx - 30, cy - 50);
      ctx.lineTo(cx + 50, cy - 50); ctx.lineTo(cx + 80, cy); ctx.closePath();
      ctx.fillStyle = '#e53935'; ctx.fill();
      // Windows
      ctx.fillStyle = '#bbdefb';
      ctx.beginPath(); ctx.moveTo(cx - 50, cy); ctx.lineTo(cx - 25, cy - 42);
      ctx.lineTo(cx + 5, cy - 42); ctx.lineTo(cx + 5, cy); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(cx + 12, cy); ctx.lineTo(cx + 12, cy - 42);
      ctx.lineTo(cx + 42, cy - 42); ctx.lineTo(cx + 70, cy); ctx.closePath(); ctx.fill();
      // Wheels
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.arc(cx - 60, cy + 50, 25, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 60, cy + 50, 25, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#999';
      ctx.beginPath(); ctx.arc(cx - 60, cy + 50, 12, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 60, cy + 50, 12, 0, Math.PI * 2); ctx.fill();
      // Headlights
      ctx.fillStyle = '#ffd54f';
      ctx.fillRect(cx + 95, cy + 10, 10, 15);
      ctx.fillStyle = '#f44336';
      ctx.fillRect(cx - 105, cy + 10, 10, 15);
    }
  },
  {
    triggers: [/rocket|spaceship/i],
    description: "Here's a rocket! 🚀",
    draw(ctx, w, h) {
      ctx.fillStyle = '#0a0a2e'; ctx.fillRect(0, 0, w, h);
      // Stars
      for (let i = 0; i < 100; i++) {
        ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.5})`; ctx.fill();
      }
      const cx = w / 2, cy = h / 2;
      // Flame
      ctx.fillStyle = '#ff6f00';
      ctx.beginPath(); ctx.moveTo(cx - 25, cy + 90); ctx.quadraticCurveTo(cx, cy + 170, cx + 25, cy + 90); ctx.fill();
      ctx.fillStyle = '#ffd54f';
      ctx.beginPath(); ctx.moveTo(cx - 15, cy + 90); ctx.quadraticCurveTo(cx, cy + 140, cx + 15, cy + 90); ctx.fill();
      // Body
      ctx.fillStyle = '#eceff1';
      ctx.beginPath(); ctx.moveTo(cx, cy - 120); ctx.quadraticCurveTo(cx - 40, cy - 40, cx - 35, cy + 90);
      ctx.lineTo(cx + 35, cy + 90); ctx.quadraticCurveTo(cx + 40, cy - 40, cx, cy - 120); ctx.closePath(); ctx.fill();
      // Window
      ctx.beginPath(); ctx.arc(cx, cy - 20, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#42a5f5'; ctx.fill();
      ctx.strokeStyle = '#90a4ae'; ctx.lineWidth = 3; ctx.stroke();
      // Nose
      ctx.fillStyle = '#e53935';
      ctx.beginPath(); ctx.moveTo(cx, cy - 120); ctx.quadraticCurveTo(cx - 15, cy - 90, cx - 20, cy - 70);
      ctx.lineTo(cx + 20, cy - 70); ctx.quadraticCurveTo(cx + 15, cy - 90, cx, cy - 120); ctx.closePath(); ctx.fill();
      // Fins
      ctx.fillStyle = '#e53935';
      ctx.beginPath(); ctx.moveTo(cx - 35, cy + 50); ctx.lineTo(cx - 60, cy + 95); ctx.lineTo(cx - 35, cy + 90); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(cx + 35, cy + 50); ctx.lineTo(cx + 60, cy + 95); ctx.lineTo(cx + 35, cy + 90); ctx.closePath(); ctx.fill();
    }
  },
  {
    triggers: [/umbrella/i],
    description: "Here's an umbrella! ☂️",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#546e7a'); bg.addColorStop(1, '#37474f');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      // Rain
      ctx.strokeStyle = 'rgba(100,180,255,0.3)'; ctx.lineWidth = 1.5;
      for (let i = 0; i < 60; i++) {
        const rx = Math.random() * w, ry = Math.random() * h;
        ctx.beginPath(); ctx.moveTo(rx, ry); ctx.lineTo(rx - 4, ry + 20); ctx.stroke();
      }
      const cx = w / 2, cy = h / 2;
      // Canopy
      ctx.beginPath(); ctx.arc(cx, cy - 20, 120, Math.PI, 0);
      ctx.fillStyle = '#e53935'; ctx.fill();
      // Segments
      ctx.strokeStyle = '#c62828'; ctx.lineWidth = 2;
      for (let i = 1; i < 6; i++) {
        const angle = Math.PI + (i / 6) * Math.PI;
        ctx.beginPath(); ctx.moveTo(cx, cy - 20);
        ctx.lineTo(cx + Math.cos(angle) * 120, cy - 20 + Math.sin(angle) * 120); ctx.stroke();
      }
      // Handle
      ctx.strokeStyle = '#5d4037'; ctx.lineWidth = 6; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(cx, cy - 20); ctx.lineTo(cx, cy + 100); ctx.stroke();
      // Hook
      ctx.beginPath(); ctx.arc(cx + 15, cy + 100, 15, 0, Math.PI); ctx.stroke();
    }
  },
  {
    triggers: [/crown|king|queen/i],
    description: "Here's a crown! 👑",
    draw(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#1a237e'); bg.addColorStop(1, '#0d1b4e');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      // Crown base
      const crownGrad = ctx.createLinearGradient(cx - 100, cy - 60, cx + 100, cy + 40);
      crownGrad.addColorStop(0, '#ffd54f'); crownGrad.addColorStop(0.5, '#ffb300'); crownGrad.addColorStop(1, '#ff8f00');
      ctx.fillStyle = crownGrad;
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 40);
      ctx.lineTo(cx - 100, cy - 20); ctx.lineTo(cx - 60, cy); ctx.lineTo(cx - 30, cy - 60);
      ctx.lineTo(cx, cy - 10); ctx.lineTo(cx + 30, cy - 60); ctx.lineTo(cx + 60, cy);
      ctx.lineTo(cx + 100, cy - 20); ctx.lineTo(cx + 100, cy + 40);
      ctx.closePath(); ctx.fill();
      // Band
      ctx.fillStyle = '#e65100'; ctx.fillRect(cx - 100, cy + 25, 200, 15);
      // Jewels
      const jewels = [[-60, cy - 5, '#e53935'], [0, cy - 35, '#2196f3'], [60, cy - 5, '#4caf50']];
      jewels.forEach(([jx, jy, jc]) => {
        ctx.beginPath(); ctx.arc(cx + jx, jy, 10, 0, Math.PI * 2);
        ctx.fillStyle = jc; ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
      });
      // Sparkles
      for (let i = 0; i < 25; i++) {
        ctx.beginPath();
        ctx.arc(cx + (Math.random() - 0.5) * 300, cy + (Math.random() - 0.5) * 250, Math.random() * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,215,0,${Math.random() * 0.6})`; ctx.fill();
      }
    }
  },
  {
    triggers: [/wave|waves/i],
    description: "Here's a wave pattern! 🌊",
    draw(ctx, w, h) {
      ctx.fillStyle = '#0d47a1'; ctx.fillRect(0, 0, w, h);
      const colors = ['#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5', '#64b5f6', '#90caf9'];
      for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        const baseY = 50 + i * (h / colors.length);
        ctx.moveTo(0, baseY);
        for (let x = 0; x <= w; x += 5) {
          ctx.lineTo(x, baseY + Math.sin(x * 0.02 + i * 1.5) * 30 + Math.sin(x * 0.01) * 15);
        }
        ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
        ctx.fillStyle = colors[i]; ctx.fill();
      }
    }
  },
  {
    triggers: [/zigzag/i],
    description: "Here's a zigzag pattern! ⚡",
    draw(ctx, w, h) {
      ctx.fillStyle = '#212121'; ctx.fillRect(0, 0, w, h);
      const colors = ['#f44336', '#ff9800', '#fdd835', '#4caf50', '#2196f3', '#9c27b0'];
      const zigH = h / colors.length;
      colors.forEach((c, i) => {
        ctx.strokeStyle = c; ctx.lineWidth = 4;
        ctx.beginPath();
        const baseY = zigH * i + zigH / 2;
        for (let x = 0; x <= w; x += 30) {
          ctx.lineTo(x, baseY + ((x / 30) % 2 === 0 ? -15 : 15));
        }
        ctx.stroke();
      });
    }
  },
  {
    triggers: [/concentric|rings|target/i],
    description: "Here's concentric circles! 🎯",
    draw(ctx, w, h) {
      ctx.fillStyle = '#fafafa'; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const colors = ['#f44336', '#fff', '#f44336', '#fff', '#f44336', '#fff', '#f44336'];
      for (let i = colors.length - 1; i >= 0; i--) {
        ctx.beginPath(); ctx.arc(cx, cy, 30 + i * 25, 0, Math.PI * 2);
        ctx.fillStyle = colors[i]; ctx.fill();
      }
    }
  },
  {
    triggers: [/pixel|retro|8.?bit/i],
    description: "Here's pixel art! 🕹️",
    draw(ctx, w, h) {
      ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, w, h);
      const size = 16;
      const palette = ['#e53935', '#ff9800', '#fdd835', '#4caf50', '#2196f3', '#9c27b0', '#00bcd4', '#ff5722'];
      // Random pixel art creature
      const gridW = 16, gridH = 16;
      const offsetX = (w - gridW * size) / 2, offsetY = (h - gridH * size) / 2;
      const grid = [];
      for (let y = 0; y < gridH; y++) {
        grid[y] = [];
        for (let x = 0; x < Math.ceil(gridW / 2); x++) {
          grid[y][x] = Math.random() > 0.5 ? palette[Math.floor(Math.random() * palette.length)] : null;
        }
      }
      // Mirror and draw
      for (let y = 0; y < gridH; y++) {
        for (let x = 0; x < gridW; x++) {
          const mx = x < gridW / 2 ? x : gridW - 1 - x;
          if (grid[y][mx]) {
            ctx.fillStyle = grid[y][mx];
            ctx.fillRect(offsetX + x * size, offsetY + y * size, size, size);
          }
        }
      }
    }
  },
];

// Merge extra art templates
artTemplates.push(...extraArtTemplates);

// ===== Music Studio Engine =====
const musicVisualizer = document.getElementById('music-visualizer');
const musicVisCtx = musicVisualizer.getContext('2d');
const musicPlaceholder = document.getElementById('music-placeholder');
const musicChatMessages = document.getElementById('music-chat-messages');
const musicChatInput = document.getElementById('music-chat-input');
const musicChatSend = document.getElementById('music-chat-send');
const musicPlayBtn = document.getElementById('music-play-btn');
const musicStopBtn = document.getElementById('music-stop-btn');
const musicTrackName = document.getElementById('music-track-name');
const musicRecordBtn = document.getElementById('music-record-btn');

let audioCtx = null;
let currentNodes = [];
let visualizerAnimId = null;
let analyserNode = null;
let currentMusicTemplate = null;

// Recording variables
let mediaRecorder = null;
let recordedChunks = [];
let audioStreamDest = null;
let isRecording = false;

// Library UI Elements
const musicLibraryCard = document.getElementById('music-library-card');
const musicLibraryList = document.getElementById('music-library-list');
const libraryCountLabel = document.getElementById('library-count');
let libraryRecordings = [];


function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function ensureAudioNodes() {
  const ctx = getAudioCtx();
  if (!analyserNode) {
    analyserNode = ctx.createAnalyser();
    analyserNode.fftSize = 256;
    analyserNode.connect(ctx.destination);
  }
  // Setup stream destination for recording
  if (!audioStreamDest) {
    audioStreamDest = ctx.createMediaStreamDestination();
    analyserNode.connect(audioStreamDest);
  }
}

function stopAllMusic() {
  currentNodes.forEach(node => {
    try { node.stop(); } catch (e) { }
    try { node.disconnect(); } catch (e) { }
  });
  currentNodes = [];
  if (visualizerAnimId) { cancelAnimationFrame(visualizerAnimId); visualizerAnimId = null; }
}

function playNote(ctx, freq, start, duration, type = 'sine', volume = 0.15, dest = null) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  osc.connect(gain);
  gain.connect(dest || analyserNode);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + 0.1);
  currentNodes.push(osc);
  return osc;
}

function playDrum(ctx, freq, start, duration = 0.15) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
  osc.frequency.exponentialRampToValueAtTime(1, ctx.currentTime + start + duration);
  gain.gain.setValueAtTime(0.5, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  osc.connect(gain);
  gain.connect(analyserNode);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + 0.05);
  currentNodes.push(osc);
}

function playNoise(ctx, start, duration, volume = 0.08) {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * volume;
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();
  source.buffer = buffer;
  gain.gain.setValueAtTime(volume, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  source.connect(gain);
  gain.connect(analyserNode);
  source.start(ctx.currentTime + start);
  source.stop(ctx.currentTime + start + duration);
  currentNodes.push(source);
}

function startVisualizer() {
  if (!analyserNode) return;
  musicVisualizer.classList.add('active');
  musicPlaceholder.classList.add('hidden');
  const bufferLength = analyserNode.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    visualizerAnimId = requestAnimationFrame(draw);
    analyserNode.getByteFrequencyData(dataArray);
    const w = musicVisualizer.width, h = musicVisualizer.height;
    musicVisCtx.fillStyle = '#0d0d14';
    musicVisCtx.fillRect(0, 0, w, h);

    const barCount = 64;
    const barWidth = w / barCount - 2;
    const colors = ['#8b5cf6', '#a855f7', '#c084fc', '#d8b4fe', '#7c3aed', '#6d28d9'];
    for (let i = 0; i < barCount; i++) {
      const idx = Math.floor(i * bufferLength / barCount);
      const barHeight = (dataArray[idx] / 255) * h * 0.85;
      const x = i * (barWidth + 2) + 1;
      const gradient = musicVisCtx.createLinearGradient(x, h, x, h - barHeight);
      gradient.addColorStop(0, colors[i % colors.length]);
      gradient.addColorStop(1, 'rgba(139,92,246,0.2)');
      musicVisCtx.fillStyle = gradient;
      musicVisCtx.fillRect(x, h - barHeight, barWidth, barHeight);
    }
  }
  draw();
}

// Note frequency helpers
const NOTE_FREQS = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196, A3: 220, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77,
  C6: 1046.5,
  'C#4': 277.18, 'D#4': 311.13, 'F#4': 369.99, 'G#4': 415.30, 'A#4': 466.16,
  'C#5': 554.37, 'D#5': 622.25, 'F#5': 739.99, 'G#5': 830.61, 'A#5': 932.33,
};

const musicTemplates = [
  {
    triggers: [/happy|cheerful|upbeat|joyful/i],
    name: '🎶 Happy Tune',
    play(ctx) {
      const notes = ['C4', 'E4', 'G4', 'C5', 'G4', 'E4', 'C4', 'D4', 'F4', 'A4', 'D5', 'A4', 'F4', 'D4', 'E4', 'G4', 'B4', 'E5'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.2, 0.25, 'triangle', 0.12));
    }
  },
  {
    triggers: [/sad|melancholy|blue|gloomy/i],
    name: '😢 Sad Melody',
    play(ctx) {
      const notes = ['A3', 'C4', 'E4', 'A4', 'G4', 'E4', 'D4', 'C4', 'A3', 'G3', 'A3'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.4, 0.5, 'sine', 0.1));
    }
  },
  {
    triggers: [/lullaby|sleep|calm|peaceful|relaxing/i],
    name: '🌙 Lullaby',
    play(ctx) {
      const notes = ['C4', 'E4', 'G4', 'E4', 'C4', 'D4', 'F4', 'D4', 'C4', 'E4', 'G4', 'C5', 'G4', 'E4', 'C4'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.5, 0.6, 'sine', 0.08));
    }
  },
  {
    triggers: [/epic|heroic|battle|adventure/i],
    name: '⚔️ Epic Theme',
    play(ctx) {
      const notes = ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.25, 0.3, 'sawtooth', 0.08));
      // Power chords
      [0, 1.75, 3.5].forEach(t => {
        playNote(ctx, NOTE_FREQS.C3, t, 0.5, 'square', 0.05);
        playNote(ctx, NOTE_FREQS.G3, t, 0.5, 'square', 0.05);
      });
    }
  },
  {
    triggers: [/jazz|swing/i],
    name: '🎷 Jazz Riff',
    play(ctx) {
      const notes = ['C4', 'D#4', 'F4', 'F#4', 'G4', 'A#4', 'C5', 'A#4', 'G4', 'F#4', 'F4', 'D#4', 'C4'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.22, 0.28, 'triangle', 0.1));
    }
  },
  {
    triggers: [/drum|beat|rhythm/i],
    name: '🥁 Drum Beat',
    play(ctx) {
      for (let bar = 0; bar < 4; bar++) {
        const t = bar * 1;
        playDrum(ctx, 150, t, 0.2);       // Kick
        playDrum(ctx, 150, t + 0.5, 0.2);   // Kick
        playNoise(ctx, t + 0.25, 0.1, 0.15); // Snare
        playNoise(ctx, t + 0.75, 0.1, 0.15); // Snare
        for (let h = 0; h < 8; h++) playNoise(ctx, t + h * 0.125, 0.05, 0.03); // Hi-hat
      }
    }
  },
  {
    triggers: [/techno|electronic|edm|dance/i],
    name: '🎛️ Techno Beat',
    play(ctx) {
      for (let bar = 0; bar < 4; bar++) {
        const t = bar * 1;
        for (let b = 0; b < 4; b++) {
          playDrum(ctx, 80, t + b * 0.25, 0.15); // Four on the floor
          if (b % 2 === 1) playNoise(ctx, t + b * 0.25, 0.08, 0.12);
        }
        playNote(ctx, NOTE_FREQS.C3, t, 0.2, 'sawtooth', 0.06);
        playNote(ctx, NOTE_FREQS.C3, t + 0.5, 0.2, 'sawtooth', 0.06);
      }
    }
  },
  {
    triggers: [/hip\s*hop|rap|trap/i],
    name: '🎤 Hip Hop Beat',
    play(ctx) {
      for (let bar = 0; bar < 4; bar++) {
        const t = bar * 1;
        playDrum(ctx, 60, t, 0.25);
        playDrum(ctx, 60, t + 0.375, 0.2);
        playNoise(ctx, t + 0.25, 0.12, 0.2);
        playNoise(ctx, t + 0.75, 0.12, 0.2);
        for (let h = 0; h < 4; h++) playNoise(ctx, t + h * 0.25, 0.04, 0.02);
      }
      // Bass
      ['C3', 'C3', 'D#3', 'C3'].forEach((n, i) => playNote(ctx, NOTE_FREQS[n] || 130, i * 1, 0.4, 'sine', 0.1));
    }
  },
  {
    triggers: [/piano|keyboard/i],
    name: '🎹 Piano Melody',
    play(ctx) {
      const notes = ['C4', 'E4', 'G4', 'C5', 'B4', 'G4', 'E4', 'C4', 'F4', 'A4', 'C5', 'F5', 'E5', 'C5', 'A4', 'F4'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.3, 0.35, 'triangle', 0.1));
    }
  },
  {
    triggers: [/guitar|strum/i],
    name: '🎸 Guitar Strum',
    play(ctx) {
      const chords = [
        [261.63, 329.63, 392, 523.25], // C
        [293.66, 369.99, 440, 587.33], // D
        [220, 277.18, 329.63, 440],    // Am
        [196, 246.94, 293.66, 392],    // G
      ];
      chords.forEach((chord, i) => {
        chord.forEach((f, j) => {
          playNote(ctx, f, i * 0.8 + j * 0.03, 0.7, 'triangle', 0.06);
        });
      });
    }
  },
  {
    triggers: [/synth|synthesizer|pad/i],
    name: '🎹 Synth Pad',
    play(ctx) {
      const chords = [[261.63, 329.63, 392], [349.23, 440, 523.25], [293.66, 369.99, 440], [261.63, 329.63, 392]];
      chords.forEach((chord, i) => {
        chord.forEach(f => {
          playNote(ctx, f, i * 1.2, 1.3, 'sawtooth', 0.04);
          playNote(ctx, f * 1.005, i * 1.2, 1.3, 'sawtooth', 0.04); // Detune for richness
        });
      });
    }
  },
  {
    triggers: [/bell|chime|xylophone/i],
    name: '🔔 Bell Chime',
    play(ctx) {
      const notes = ['C5', 'E5', 'G5', 'C6', 'G5', 'E5', 'C5', 'D5', 'F5', 'A5', 'D5'];
      notes.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.35, 0.5, 'sine', 0.08));
    }
  },
  {
    triggers: [/rain|rainfall/i],
    name: '🌧️ Rain Sounds',
    play(ctx) {
      for (let i = 0; i < 40; i++) {
        const start = Math.random() * 4;
        playNoise(ctx, start, 0.05 + Math.random() * 0.1, 0.02 + Math.random() * 0.04);
      }
      // Continuous background
      playNoise(ctx, 0, 5, 0.03);
    }
  },
  {
    triggers: [/ocean\s*wave|sea\s*sound|shore/i],
    name: '🌊 Ocean Waves',
    play(ctx) {
      for (let w = 0; w < 4; w++) {
        const t = w * 1.5;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine'; osc.frequency.value = 80 + Math.random() * 40;
        gain.gain.setValueAtTime(0.001, ctx.currentTime + t);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + t + 0.7);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + t + 1.4);
        osc.connect(gain); gain.connect(analyserNode);
        osc.start(ctx.currentTime + t); osc.stop(ctx.currentTime + t + 1.5);
        currentNodes.push(osc);
        playNoise(ctx, t + 0.3, 1, 0.04);
      }
    }
  },
  {
    triggers: [/wind|breeze/i],
    name: '💨 Wind',
    play(ctx) {
      for (let i = 0; i < 6; i++) {
        const t = i * 0.8;
        playNoise(ctx, t, 1 + Math.random(), 0.03 + Math.random() * 0.03);
      }
    }
  },
  {
    triggers: [/thunder|storm\s*sound/i],
    name: '⛈️ Thunder',
    play(ctx) {
      // Rain background
      playNoise(ctx, 0, 5, 0.04);
      // Thunder rumbles
      [0.5, 2, 3.5].forEach(t => {
        playDrum(ctx, 40, t, 0.8);
        playNoise(ctx, t, 0.5, 0.15);
      });
    }
  },
  {
    triggers: [/bird\s*song|bird\s*sound|chirp/i],
    name: '🐦 Bird Song',
    play(ctx) {
      for (let b = 0; b < 6; b++) {
        const t = b * 0.7;
        playNote(ctx, 1200 + Math.random() * 800, t, 0.08, 'sine', 0.06);
        playNote(ctx, 1500 + Math.random() * 600, t + 0.1, 0.06, 'sine', 0.05);
        playNote(ctx, 1000 + Math.random() * 1000, t + 0.2, 0.1, 'sine', 0.05);
      }
    }
  },
  {
    triggers: [/major\s*scale/i],
    name: '🎼 Major Scale',
    play(ctx) {
      ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4'].forEach((n, i) =>
        playNote(ctx, NOTE_FREQS[n], i * 0.3, 0.35, 'triangle', 0.1));
    }
  },
  {
    triggers: [/minor\s*scale/i],
    name: '🎼 Minor Scale',
    play(ctx) {
      const freqs = [220, 246.94, 261.63, 293.66, 329.63, 349.23, 392, 440, 392, 349.23, 329.63, 293.66, 261.63, 246.94, 220];
      freqs.forEach((f, i) => playNote(ctx, f, i * 0.3, 0.35, 'triangle', 0.1));
    }
  },
  {
    triggers: [/pentatonic/i],
    name: '🎼 Pentatonic Scale',
    play(ctx) {
      const freqs = [261.63, 293.66, 329.63, 392, 440, 523.25, 440, 392, 329.63, 293.66, 261.63];
      freqs.forEach((f, i) => playNote(ctx, f, i * 0.3, 0.35, 'sine', 0.1));
    }
  },
  {
    triggers: [/alarm|siren|alert/i],
    name: '🚨 Siren',
    play(ctx) {
      for (let i = 0; i < 6; i++) {
        playNote(ctx, 600, i * 0.5, 0.25, 'square', 0.06);
        playNote(ctx, 900, i * 0.5 + 0.25, 0.25, 'square', 0.06);
      }
    }
  },
  {
    triggers: [/space|sci.?fi|alien/i],
    name: '🛸 Space Sounds',
    play(ctx) {
      for (let i = 0; i < 8; i++) {
        const freq = 200 + Math.random() * 600;
        playNote(ctx, freq, i * 0.5, 0.4, 'sine', 0.05);
        playNote(ctx, freq * 1.5, i * 0.5 + 0.1, 0.3, 'sawtooth', 0.02);
      }
    }
  },
  {
    triggers: [/horror|scary|spooky|creepy/i],
    name: '👻 Spooky Theme',
    play(ctx) {
      const notes = [164.81, 155.56, 146.83, 138.59, 130.81, 138.59, 146.83, 155.56, 164.81];
      notes.forEach((f, i) => {
        playNote(ctx, f, i * 0.5, 0.6, 'sawtooth', 0.05);
        playNote(ctx, f * 3.01, i * 0.5, 0.6, 'sine', 0.02); // Dissonant overtone
      });
    }
  },
  {
    triggers: [/christmas|jingle|holiday/i],
    name: '🎄 Jingle Bells',
    play(ctx) {
      const melody = ['E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'G4', 'C4', 'D4', 'E4', 'F4', 'F4', 'F4', 'F4', 'F4', 'E4', 'E4', 'E4', 'E4', 'D4', 'D4', 'E4', 'D4', 'G4'];
      melody.forEach((n, i) => playNote(ctx, NOTE_FREQS[n], i * 0.2, 0.22, 'triangle', 0.1));
      // Bells
      [0, 0.6, 1.2, 1.8, 2.4].forEach(t => playNote(ctx, NOTE_FREQS.C6, t, 0.15, 'sine', 0.04));
    }
  },
];

function findMusicTemplate(prompt) {
  for (const t of musicTemplates) {
    for (const trigger of t.triggers) {
      if (trigger.test(prompt)) return t;
    }
  }
  return null;
}

function addMusicChatMessage(text, isUser) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isUser ? 'user-msg' : 'bot-msg'}`;
  msgDiv.innerHTML = `
    <div class="chat-avatar">${isUser ? '👤' : '🎵'}</div>
    <div class="chat-bubble">${text}</div>
  `;
  musicChatMessages.appendChild(msgDiv);
  musicChatMessages.scrollTop = musicChatMessages.scrollHeight;
}

function addMusicTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot-msg';
  typing.id = 'music-typing-indicator';
  typing.innerHTML = `
    <div class="chat-avatar">🎵</div>
    <div class="chat-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  musicChatMessages.appendChild(typing);
  musicChatMessages.scrollTop = musicChatMessages.scrollHeight;
}

function removeMusicTypingIndicator() {
  const indicator = document.getElementById('music-typing-indicator');
  if (indicator) indicator.remove();
}

function playMusicTemplate(template) {
  stopAllMusic();
  const ctx = getAudioCtx();
  ensureAudioNodes(); // Use ensureAudioNodes instead of direct analyserNode creation
  currentMusicTemplate = template;
  template.play(ctx);
  musicTrackName.textContent = template.name;
  startVisualizer();
}

function handleMusicSend() {
  const prompt = musicChatInput.value.trim();
  if (!prompt) return;

  addMusicChatMessage(prompt, true);
  musicChatInput.value = '';
  addMusicTypingIndicator();

  setTimeout(() => {
    removeMusicTypingIndicator();

    if (/^(help|list|sounds)$/i.test(prompt)) {
      addMusicChatMessage(
        "🎵 <b>Everything I can generate:</b><br><br>" +
        "🎶 <b>Melodies:</b> happy tune, sad melody, lullaby, epic theme, jazz riff<br>" +
        "🥁 <b>Beats:</b> drum beat, techno beat, hip hop beat<br>" +
        "🎹 <b>Instruments:</b> piano, guitar strum, synth pad, bell chime<br>" +
        "🌧️ <b>Nature Sounds:</b> rain, ocean waves, wind, thunder, bird song<br>" +
        "🎼 <b>Scales:</b> major scale, minor scale, pentatonic scale<br>" +
        "🎉 <b>Fun Extras:</b> siren, space sounds, spooky theme, jingle bells<br><br>" +
        "<b>Editing Tools:</b><br>" +
        "• Click the <b>Piano Keys</b> to play your own notes.<br>" +
        "• Use the <b>Beat Maker</b> grid to create loops of kick, snare, hat, and bass.<br><br>" +
        "Just type what you want to hear or start composing above! 🎧",
        false
      );
      return;
    }

    const template = findMusicTemplate(prompt);
    if (template) {
      playMusicTemplate(template);
      addMusicChatMessage(
        `🎶 Now playing: <b>${template.name}</b><br>Use the ▶️ Play button to replay, or ⏹️ Stop to pause.`,
        false
      );
    } else {
      addMusicChatMessage(
        "I'm not sure how to play that yet! Try asking for:<br><br>" +
        "🎶 happy tune, sad melody, lullaby<br>" +
        "🥁 drum beat, techno beat, hip hop<br>" +
        "🎹 piano, guitar, synth pad<br>" +
        "🌧️ rain, ocean waves, thunder<br><br>" +
        "Type <b>help</b> for a full list! 🎵",
        false
      );
    }
  }, 800);
}

musicChatSend.addEventListener('click', handleMusicSend);
musicChatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleMusicSend();
});

musicPlayBtn.addEventListener('click', () => {
  if (currentMusicTemplate) playMusicTemplate(currentMusicTemplate);
});

musicStopBtn.addEventListener('click', () => {
  stopAllMusic();
  if (visualizerAnimId) { cancelAnimationFrame(visualizerAnimId); visualizerAnimId = null; }
  musicVisCtx.fillStyle = '#0d0d14';
  musicVisCtx.fillRect(0, 0, musicVisualizer.width, musicVisualizer.height);
});

// ===== Music Editor Logic =====
const pianoKeyboard = document.getElementById('piano-keyboard');
const sequencerGrid = document.getElementById('sequencer-grid');
const seqBpmInput = document.getElementById('seq-bpm');
const seqPlayBtn = document.getElementById('seq-play-btn');
const seqStopBtn = document.getElementById('seq-stop-btn');
const seqClearBtn = document.getElementById('seq-clear-btn');

let sequencerInterval = null;
let seqStepIndex = 0;
const seqTotalSteps = 8;
const sequencerState = {
  kick: new Array(seqTotalSteps).fill(false),
  snare: new Array(seqTotalSteps).fill(false),
  hihat: new Array(seqTotalSteps).fill(false),
  bass: new Array(seqTotalSteps).fill(false),
};

// Initialize Sequencer Grid
document.querySelectorAll('.sequencer-row').forEach(row => {
  const instr = row.dataset.row;
  const container = row.querySelector('.seq-steps');
  for (let i = 0; i < seqTotalSteps; i++) {
    const step = document.createElement('div');
    step.className = 'seq-step';
    step.dataset.index = i;
    step.onclick = () => {
      sequencerState[instr][i] = !sequencerState[instr][i];
      step.classList.toggle('active');
    };
    container.appendChild(step);
  }
});

// Piano Interaction
pianoKeyboard.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('piano-key')) {
    const note = e.target.dataset.note;
    const freq = NOTE_FREQS[note];
    if (freq) {
      const ctx = getAudioCtx();
      ensureAudioNodes();
      playNote(ctx, freq, 0, 0.4, 'triangle', 0.15);
      startVisualizer();
      e.target.classList.add('active');
      setTimeout(() => e.target.classList.remove('active'), 150);
    }
  }
});

function runSequencerStep() {
  const ctx = getAudioCtx();
  ensureAudioNodes(); // Use ensureAudioNodes

  // Visual highlight
  document.querySelectorAll('.seq-step').forEach(s => {
    s.classList.toggle('current', parseInt(s.dataset.index) === seqStepIndex);
  });

  // Play active sounds
  if (sequencerState.kick[seqStepIndex]) playDrum(ctx, 150, 0, 0.2);
  if (sequencerState.snare[seqStepIndex]) playNoise(ctx, 0, 0.08, 0.15);
  if (sequencerState.hihat[seqStepIndex]) playNoise(ctx, 0, 0.04, 0.05);
  if (sequencerState.bass[seqStepIndex]) playNote(ctx, NOTE_FREQS.C3, 0, 0.2, 'sine', 0.15);

  seqStepIndex = (seqStepIndex + 1) % seqTotalSteps;
  startVisualizer();
}

seqPlayBtn.addEventListener('click', () => {
  if (sequencerInterval) clearInterval(sequencerInterval);
  const bpm = parseInt(seqBpmInput.value) || 120;
  const stepMs = (60000 / bpm) / 2; // 8th notes
  seqStepIndex = 0;
  runSequencerStep();
  sequencerInterval = setInterval(runSequencerStep, stepMs);
});

seqStopBtn.addEventListener('click', () => {
  if (sequencerInterval) { clearInterval(sequencerInterval); sequencerInterval = null; }
  document.querySelectorAll('.seq-step').forEach(s => s.classList.remove('current'));
  stopAllMusic();
});

seqClearBtn.addEventListener('click', () => {
  Object.keys(sequencerState).forEach(k => sequencerState[k].fill(false));
  document.querySelectorAll('.seq-step').forEach(s => s.classList.remove('active'));
});

// Recording Logic
function startRecording() {
  ensureAudioNodes();
  recordedChunks = [];

  try {
    mediaRecorder = new MediaRecorder(audioStreamDest.stream);
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      addRecordingToLibrary(blob);
      recordedChunks = [];
    };

    mediaRecorder.start();
    isRecording = true;
    musicRecordBtn.textContent = '⏹️ Stop Recording';
    musicRecordBtn.classList.add('recording');
  } catch (err) {
    console.error('Recording failed:', err);
    addMusicChatMessage("❌ Error creating recorder. Your browser might not support recording.", false);
  }
}

function addRecordingToLibrary(blob) {
  const timestamp = new Date().getTime();
  const dateStr = new Date().toLocaleString();
  const id = `rec_${timestamp}`;
  const name = `Recording_${timestamp % 10000}`;
  const url = URL.createObjectURL(blob);

  libraryRecordings.push({ id, name, date: dateStr, url, blob });
  updateLibraryUI();

  // Show library if it was hidden
  if (musicLibraryCard) musicLibraryCard.style.display = 'block';
  addMusicChatMessage(`✅ New recording saved to library: <b>${name}</b>`, false);
}

function updateLibraryUI() {
  if (!musicLibraryList) return;
  musicLibraryList.innerHTML = '';
  if (libraryCountLabel) {
    libraryCountLabel.textContent = `${libraryRecordings.length} recording${libraryRecordings.length === 1 ? '' : 's'}`;
  }

  if (libraryRecordings.length === 0) {
    if (musicLibraryCard) musicLibraryCard.style.display = 'none';
    return;
  }

  libraryRecordings.forEach(rec => {
    const item = document.createElement('div');
    item.className = 'music-library-item';
    item.innerHTML = `
      <div class="library-item-info">
        <span class="library-item-name">${rec.name}</span>
        <span class="library-item-date">${rec.date}</span>
      </div>
      <div class="library-item-actions">
        <button class="library-btn library-btn-download" onclick="downloadRecording('${rec.id}')">
          <span>⏬ Download</span>
        </button>
        <button class="library-btn library-btn-delete" onclick="deleteRecording('${rec.id}')">
          <span>🗑️</span>
        </button>
      </div>
    `;
    musicLibraryList.appendChild(item);
  });
}

window.downloadRecording = (id) => {
  const rec = libraryRecordings.find(r => r.id === id);
  if (rec) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = rec.url;
    a.download = `${rec.name}.webm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => document.body.removeChild(a), 100);
  }
};

window.deleteRecording = (id) => {
  const index = libraryRecordings.findIndex(r => r.id === id);
  if (index !== -1) {
    URL.revokeObjectURL(libraryRecordings[index].url);
    libraryRecordings.splice(index, 1);
    updateLibraryUI();
  }
};

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
  isRecording = false;
  musicRecordBtn.textContent = '🔴 Record';
  musicRecordBtn.classList.remove('recording');
}

musicRecordBtn.addEventListener('click', () => {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
    // Hint message
    if (recordedChunks.length === 0) {
      addMusicChatMessage("🔴 <b>Recording started!</b> Please play some music using the tools above or ask the bot to play.", false);
    }
  }
});
