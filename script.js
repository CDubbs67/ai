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
const answerText = document.getElementById('answer-text');
const askAnotherBtn = document.getElementById('ask-another-btn');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');
const suggestionChips = document.querySelectorAll('.suggestion-chip');

let searchHistory = JSON.parse(localStorage.getItem('askNovaHistory') || '[]');

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
      const score = matchCount / kwWords.length;
      if (score > bestScore && score >= 0.6) {
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
            return summaryData.extract;
          }
        }
      }
      return null;
    }

    const data = await response.json();
    if (data.extract) {
      return data.extract;
    }
    return null;
  } catch (err) {
    console.error('Wikipedia fetch failed:', err);
    return null;
  }
}

async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  // Show compact hero
  hero.classList.add('compact');

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

  if (!answer) {
    // Fall back to Wikipedia
    const wikiAnswer = await fetchFromWikipedia(query);
    if (wikiAnswer) {
      answer = wikiAnswer;
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

function resetView() {
  hero.classList.remove('compact');
  answerSection.classList.remove('visible');
  searchInput.value = '';
  searchInput.focus();
}

// ===== Event Listeners =====
searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

askAnotherBtn.addEventListener('click', resetView);

suggestionChips.forEach(chip => {
  chip.addEventListener('click', () => {
    searchInput.value = chip.dataset.query;
    handleSearch();
  });
});

// Load history on start
renderHistory();
