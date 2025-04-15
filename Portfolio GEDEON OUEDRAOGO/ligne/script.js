// Exemple de données de formation en ligne avec des liens externes réels
const formations = [
    {
      id: 1,
      name: "Développement Web",
      icon: "https://img.icons8.com/ios/50/000000/web-design.png",
      description: "Apprenez à créer des sites web avec HTML, CSS et JavaScript.",
      modules: [
        { 
          name: "Introduction au Web", 
          link: "module1.html", 
          resources: [
            { type: "video", url: "youtube.com/@Grafikart" },
            { type: "pdf", url: "https://www.w3.org/WAI/WCAG21/quickref/" }
          ]
        },
        { 
          name: "HTML et CSS", 
          link: "module2.html", 
          resources: [
            { type: "video", url: "https://www.youtube.com/watch?v=Y80juYcu3ZI&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&pp=0gcJCV8EOCosWNin" },
            { type: "pdf", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" }
          ]
        },
        { 
          name: "JavaScript de Base", 
          link: "module3.html", 
          resources: [
            { type: "video", url: "https://www.youtube.com/watch?v=Y80juYcu3ZI&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&pp=0gcJCV8EOCosWNin" },
            { type: "pdf", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Intelligence Artificielle",
      icon: "https://www.youtube.com/watch?v=stuU2TK3t0Q&list=PL6Xpj9I5qXYGhsvMWM53ZLfwUInzvYWsm",
      description: "Explorez les bases de l'intelligence artificielle et de l'apprentissage machine.",
      modules: [
        { 
          name: "Intelligence Artificielle", 
          link: "module4.html", 
          resources: [
            { type: "video", url: "https://www.youtube.com/watch?v=stuU2TK3t0Q&list=PL6Xpj9I5qXYGhsvMWM53ZLfwUInzvYWsm" },
            { type: "pdf", url: "https://en.wikipedia.org/wiki/Artificial_intelligence" }
          ]
        },
        { 
          name: "Apprentissage Supervisé", 
          link: "module5.html", 
          resources: [
            { type: "video", url: "https://www.youtube.com/watch?v=GjV8EM2LbdI" },
            { type: "pdf", url: "https://scikit-learn.org/stable/supervised_learning.html" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Marketing Digital",
      icon: "https://www.youtube.com/watch?v=2NU5iKz53OA&list=PLEoukj9GaJNkmVSxf4GC-PO0DuvPZJgUW",
      description: "Comprendre le Marketing Digital et comment les exploiter à l'aide des outils modernes.",
      modules: [
        { 
          name: "Introduction au marketing digital", 
          link: "module6.html", 
          resources: [
            { type: "video", url: "https://www.youtube.com/watch?v=H5wwqgY6olY" },
            { type: "pdf", url: "https://www.coursera.org/learn/what-is-datascience" }
          ]
        },
        { 
          name: "Analyse des Données avec Python", 
          link: "module7.html", 
          resources: [
            { type: "video", url: "https://www.youtube.com/watch?v=r-uOLxNrNk8" },
            { type: "pdf", url: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html" }
          ]
        }
      ]
    }
  ];
  
  // Fonction pour afficher les formations
  function displayFormations() {
    const formationList = document.querySelector('.formation-list');
    formationList.innerHTML = '';  // Vider la liste avant de la remplir
  
    formations.forEach(formation => {
      const formationCard = document.createElement('div');
      formationCard.classList.add('formation-card');
      
      formationCard.innerHTML = `
        <img src="${formation.icon}" alt="${formation.name}">
        <h2>${formation.name}</h2>
        <p>${formation.description}</p>
        <a href="${formation.modules[0].link}" target="_blank">Explorer la formation</a>
      `;
      
      formationList.appendChild(formationCard);
    });
  }
  
  // Appel de la fonction au chargement de la page
  document.addEventListener('DOMContentLoaded', displayFormations);
  