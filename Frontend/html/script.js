// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    function highlightActiveSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150) && 
                window.scrollY < (sectionTop + sectionHeight - 150)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initialize active section on page load
    highlightActiveSection();
    
    // Prevent scroll when menu is open on mobile
    function preventScroll(e) {
        if (body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }
    
    // Touch events for mobile
    document.addEventListener('touchmove', preventScroll, { passive: false });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === '#hero')) {
            link.classList.add('active');
        }
    });
    
    // Logo click handler - scroll to top
    const logoLink = document.querySelector('.logo-link');
    logoLink.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('menu-open');
            }
        }
    });
});

// Performance optimization
window.addEventListener('load', function() {
    // Lazy load images if needed
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});// Programming Languages Data
const programmingLanguages = [
  {
    id: 1,
    name: "Python",
    category: "data",
    description: "High-level, interpreted language known for simplicity and readability. Dominates data science, AI, and web development.",
    icon: "🐍",
    color: "#3776AB",
    popularity: 1,
    year: 1991,
    creator: "Guido van Rossum",
    tags: ["Data Science", "AI/ML", "Web", "Automation"],
    usage: "28.7%",
    difficulty: "Easy",
    salary: "$120,000"
  },
  {
    id: 2,
    name: "JavaScript",
    category: "web",
    description: "The language of the web, enabling interactive websites and server-side applications with Node.js.",
    icon: "⚡",
    color: "#F7DF1E",
    popularity: 2,
    year: 1995,
    creator: "Brendan Eich",
    tags: ["Frontend", "Backend", "Mobile", "Desktop"],
    usage: "63.6%",
    difficulty: "Easy",
    salary: "$115,000"
  },
  {
    id: 3,
    name: "Java",
    category: "general",
    description: "Object-oriented, platform-independent language powering enterprise applications and Android apps.",
    icon: "☕",
    color: "#007396",
    popularity: 3,
    year: 1995,
    creator: "James Gosling",
    tags: ["Enterprise", "Android", "Big Data", "Web"],
    usage: "38.4%",
    difficulty: "Medium",
    salary: "$105,000"
  },
  {
    id: 4,
    name: "C#",
    category: "general",
    description: "Modern, object-oriented language for Windows applications, games (Unity), and enterprise software.",
    icon: "🔷",
    color: "#239120",
    popularity: 4,
    year: 2000,
    creator: "Microsoft",
    tags: [".NET", "Windows", "Games", "Web"],
    usage: "31.4%",
    difficulty: "Medium",
    salary: "$100,000"
  },
  {
    id: 5,
    name: "C++",
    category: "system",
    description: "High-performance language for system software, games, and resource-intensive applications.",
    icon: "⚙️",
    color: "#00599C",
    popularity: 5,
    year: 1985,
    creator: "Bjarne Stroustrup",
    tags: ["Systems", "Games", "Embedded", "High-Perf"],
    usage: "23.5%",
    difficulty: "Hard",
    salary: "$125,000"
  },
  {
    id: 6,
    name: "TypeScript",
    category: "web",
    description: "JavaScript superset with static typing, enhancing code quality and developer experience.",
    icon: "📘",
    color: "#3178C6",
    popularity: 6,
    year: 2012,
    creator: "Microsoft",
    tags: ["Frontend", "Backend", "Enterprise", "Scalable"],
    usage: "34.8%",
    difficulty: "Medium",
    salary: "$125,000"
  },
  {
    id: 7,
    name: "PHP",
    category: "web",
    description: "Server-side scripting language powering WordPress, Facebook, and 79% of websites.",
    icon: "🐘",
    color: "#777BB4",
    popularity: 7,
    year: 1995,
    creator: "Rasmus Lerdorf",
    tags: ["Web", "WordPress", "CMS", "E-commerce"],
    usage: "21.0%",
    difficulty: "Easy",
    salary: "$95,000"
  },
  {
    id: 8,
    name: "Swift",
    category: "mobile",
    description: "Modern, safe language for iOS, macOS, watchOS, and tvOS application development.",
    icon: "🚀",
    color: "#FA7343",
    popularity: 8,
    year: 2014,
    creator: "Apple",
    tags: ["iOS", "macOS", "Mobile", "Apple"],
    usage: "6.8%",
    difficulty: "Medium",
    salary: "$130,000"
  },
  {
    id: 9,
    name: "Go",
    category: "system",
    description: "Compiled, statically typed language designed for simplicity, concurrency, and performance.",
    icon: "🐹",
    color: "#00ADD8",
    popularity: 9,
    year: 2009,
    creator: "Google",
    tags: ["Backend", "Cloud", "Microservices", "DevOps"],
    usage: "9.5%",
    difficulty: "Easy",
    salary: "$135,000"
  },
  {
    id: 10,
    name: "Rust",
    category: "system",
    description: "Systems programming language focusing on safety, speed, and concurrency.",
    icon: "🦀",
    color: "#DEA584",
    popularity: 10,
    year: 2010,
    creator: "Mozilla",
    tags: ["Systems", "Embedded", "WebAssembly", "Safe"],
    usage: "7.0%",
    difficulty: "Hard",
    salary: "$140,000"
  },
  {
    id: 11,
    name: "Kotlin",
    category: "mobile",
    description: "Modern, concise language that's interoperable with Java, official for Android development.",
    icon: "🔶",
    color: "#7F52FF",
    popularity: 11,
    year: 2011,
    creator: "JetBrains",
    tags: ["Android", "Backend", "Multiplatform", "Web"],
    usage: "8.3%",
    difficulty: "Medium",
    salary: "$120,000"
  },
  {
    id: 12,
    name: "Ruby",
    category: "web",
    description: "Dynamic, object-oriented language known for elegant syntax and Ruby on Rails framework.",
    icon: "💎",
    color: "#CC342D",
    popularity: 12,
    year: 1995,
    creator: "Yukihiro Matsumoto",
    tags: ["Web", "Startups", "Prototyping", "Scripting"],
    usage: "6.1%",
    difficulty: "Easy",
    salary: "$110,000"
  },
  {
    id: 13,
    name: "SQL",
    category: "data",
    description: "Structured Query Language for managing and querying relational databases.",
    icon: "🗃️",
    color: "#336791",
    popularity: 13,
    year: 1974,
    creator: "IBM",
    tags: ["Database", "Analytics", "Backend", "Business"],
    usage: "47.0%",
    difficulty: "Easy",
    salary: "$105,000"
  },
  {
    id: 14,
    name: "R",
    category: "data",
    description: "Language and environment for statistical computing, graphics, and data analysis.",
    icon: "📊",
    color: "#276DC3",
    popularity: 14,
    year: 1993,
    creator: "Ross Ihaka & Robert Gentleman",
    tags: ["Statistics", "Data Science", "Research", "Visualization"],
    usage: "4.2%",
    difficulty: "Medium",
    salary: "$115,000"
  },
  {
    id: 15,
    name: "Scala",
    category: "functional",
    description: "Functional programming language that runs on JVM, blending OOP and functional paradigms.",
    icon: "⚡",
    color: "#DC322F",
    popularity: 15,
    year: 2004,
    creator: "Martin Odersky",
    tags: ["Big Data", "Concurrent", "Functional", "JVM"],
    usage: "3.2%",
    difficulty: "Hard",
    salary: "$145,000"
  }
  // Add more languages up to 50...
];

// Generate category labels
const categoryLabels = {
  "general": "General Purpose",
  "web": "Web Development",
  "mobile": "Mobile Development",
  "data": "Data Science/AI",
  "system": "System Programming",
  "functional": "Functional Programming"
};

// Initialize languages grid
function initLanguagesGrid() {
  const grid = document.getElementById('languagesGrid');
  const searchInput = document.getElementById('languageSearch');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Render all languages initially
  renderLanguages(programmingLanguages);
  
  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = programmingLanguages.filter(lang => 
      lang.name.toLowerCase().includes(searchTerm) ||
      lang.description.toLowerCase().includes(searchTerm) ||
      lang.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderLanguages(filtered);
  });
  
  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      let filtered;
      
      if (filter === 'all') {
        filtered = programmingLanguages;
      } else {
        filtered = programmingLanguages.filter(lang => lang.category === filter);
      }
      
      renderLanguages(filtered);
    });
  });
}

// Render languages to grid
function renderLanguages(languages) {
  const grid = document.getElementById('languagesGrid');
  grid.innerHTML = '';
  
  languages.forEach(lang => {
    const card = createLanguageCard(lang);
    grid.appendChild(card);
  });
}

// Create language card element
function createLanguageCard(lang) {
  const card = document.createElement('div');
  card.className = 'language-card';
  card.style.setProperty('--card-color', lang.color);
  
  card.innerHTML = `
    <div class="language-header">
      <div class="language-icon" style="background: ${lang.color}20; border: 1px solid ${lang.color}40;">
        ${lang.icon}
      </div>
      <div class="language-info">
        <h3>${lang.name}</h3>
        <span class="language-category">${categoryLabels[lang.category]}</span>
      </div>
    </div>
    
    <div class="language-details">
      <p class="language-description">${lang.description}</p>
      
      <div class="language-stats">
        <div class="language-stat">
          <span class="stat-value">#${lang.popularity}</span>
          <span class="stat-label">Popularity</span>
        </div>
        <div class="language-stat">
          <span class="stat-value">${lang.year}</span>
          <span class="stat-label">Released</span>
        </div>
        <div class="language-stat">
          <span class="stat-value">${lang.usage}</span>
          <span class="stat-label">Usage</span>
        </div>
      </div>
      
      <div class="language-tags">
        ${lang.tags.map(tag => `<span class="language-tag">${tag}</span>`).join('')}
      </div>
      
      <div class="language-actions">
        <button class="language-btn" onclick="viewLanguageDetails(${lang.id})">
          <i class="fas fa-info-circle"></i> Details
        </button>
        <button class="language-btn primary" onclick="learnLanguage('${lang.name}')">
          <i class="fas fa-graduation-cap"></i> Learn
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// Initialize comparison table
function initComparisonTable() {
  const tableBody = document.getElementById('comparisonTable');
  const topLanguages = programmingLanguages.slice(0, 10); // Top 10 for table
  
  tableBody.innerHTML = topLanguages.map(lang => `
    <tr>
      <td><strong>${lang.name}</strong></td>
      <td>${categoryLabels[lang.category]}</td>
      <td>
        <div class="difficulty-stars">
          ${getDifficultyStars(lang.difficulty)}
        </div>
      </td>
      <td>
        <span class="demand-indicator demand-${getDemandLevel(lang.popularity)}">
          ${getDemandText(lang.popularity)}
        </span>
      </td>
      <td><strong>${lang.salary}</strong></td>
      <td>${getLearningCurve(lang.difficulty)}</td>
    </tr>
  `).join('');
}

// Helper functions
function getDifficultyStars(difficulty) {
  switch(difficulty) {
    case 'Easy': return '★★★☆☆';
    case 'Medium': return '★★★★☆';
    case 'Hard': return '★★★★★';
    default: return '★★★☆☆';
  }
}

function getDemandLevel(popularity) {
  if (popularity <= 5) return 'high';
  if (popularity <= 10) return 'medium';
  return 'low';
}

function getDemandText(popularity) {
  if (popularity <= 5) return 'High Demand';
  if (popularity <= 10) return 'Medium Demand';
  return 'Low Demand';
}

function getLearningCurve(difficulty) {
  switch(difficulty) {
    case 'Easy': return '2-4 months';
    case 'Medium': return '4-8 months';
    case 'Hard': return '8-12+ months';
    default: return '3-6 months';
  }
}

// Language actions
function viewLanguageDetails(id) {
  const lang = programmingLanguages.find(l => l.id === id);
  if (lang) {
    alert(`${lang.name}\n\nCreator: ${lang.creator}\nReleased: ${lang.year}\nCategory: ${categoryLabels[lang.category]}\n\n${lang.description}`);
  }
}

function learnLanguage(langName) {
  const resources = {
    'Python': 'https://www.python.org/about/gettingstarted/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'Java': 'https://www.java.com/en/download/help/learn_java.html',
    'C#': 'https://dotnet.microsoft.com/en-us/learn/csharp',
    'C++': 'https://isocpp.org/get-started',
    'TypeScript': 'https://www.typescriptlang.org/docs/',
    'PHP': 'https://www.php.net/manual/en/getting-started.php',
    'Swift': 'https://developer.apple.com/swift/',
    'Go': 'https://go.dev/doc/tutorial/getting-started',
    'Rust': 'https://www.rust-lang.org/learn',
    'Kotlin': 'https://kotlinlang.org/docs/getting-started.html',
    'Ruby': 'https://www.ruby-lang.org/en/documentation/quickstart/',
    'SQL': 'https://www.w3schools.com/sql/',
    'R': 'https://www.r-project.org/',
    'Scala': 'https://docs.scala-lang.org/getting-started/index.html'
  };
  
  const url = resources[langName] || `https://www.google.com/search?q=learn+${encodeURIComponent(langName)}+programming`;
  window.open(url, '_blank');
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('hero6')) {
    initLanguagesGrid();
    initComparisonTable();
  }
});