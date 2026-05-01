export const siteData = {
  siteName: "Rodrigo Farate Laia",
  titleSuffix: "Master in Computer Science (AI Major)",
  profile: {
    name: "Rodrigo Farate Laia",
    title: "Master in Computer Science (AI Major)",
    avatar: "Rodrigo_Laia.jpg",
    meta: [
      {
        icon: "location",
        text: "Lisbon, Portugal"
      },
      {
        icon: "institution",
        text: "Instituto Superior Tecnico / INESC-ID"
      },
      {
        icon: "email",
        text: "rodrigo.laia@tecnico.ulisboa.pt",
        href: "mailto:rodrigo.laia@tecnico.ulisboa.pt"
      }
    ],
    links: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/laiarodrigo"
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rodrigo-laia/"
      }
    ]
  },
  about: {
    heading: "About me",
    lead:
      'Master in Computer Science and Engineering (Artificial Intelligence) at Instituto Superior Tecnico, conducting a thesis under the supervision of <a href="https://web.tecnico.ulisboa.pt/arlindo.oliveira/" target="_blank" rel="noreferrer">Arlindo Oliveira</a> and <a href="https://web.tecnico.ulisboa.pt/arlindo.oliveira/" target="_blank" rel="noreferrer">Bruno Martins</a>.',
    paragraphs: [
      "I am currently a researcher at INESC-ID / Instituto Superior Tecnico, working on translation and classification between European and Brazilian Portuguese. My interests center on natural language processing, machine learning, and building reliable evaluation pipelines for applied AI systems.",
      "Alongside my thesis work, I have research experience in anomaly detection for network operations at Diffusion Dynamics and in data-driven modeling for nuclear fusion research through collaborations with the University of Wisconsin-Madison and LIP. I also received Tecnico's Academic Merit Award for 2024/2025."
    ]
  },
  publications: [
    {
      title:
        "Data-driven approach to model the influence of magnetic geometry in the confinement of fusion devices",
      authors: "Laia, R.; Jorge, R.; Abreu, G.",
      venue: "Nuclear Fusion, 66(1):016034, 2026",
      summary:
        "Peer-reviewed work on modeling how magnetic geometry affects confinement properties in fusion devices.",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1088/1741-4326/ae1e12"
        }
      ]
    }
  ],
  cvDownload: {
    label: "Open PDF CV",
    href: "Rodrigo_Laia_CV_CMU%20(3).pdf"
  },
  cv: [
    {
      title: "Education",
      entries: [
        {
          role: "MSc in Computer Science and Engineering (Artificial Intelligence)",
          place: "Instituto Superior Tecnico",
          period: "Oct 2024 - Present",
          details: [
            "Average: 18/20.",
            "Received Tecnico's Academic Merit Award (2024/2025).",
            "Coursework includes NLP, Deep Learning, Reinforcement Learning, and Search & Planning."
          ]
        },
        {
          role: "BSc in Physics and Technological Engineering",
          place: "Instituto Superior Tecnico",
          period: "Oct 2021 - Sep 2024",
          details: [
            "Average: 16/20.",
            "BSc project: Machine Learning as a Tool to Improve Nuclear Fusion Experiments.",
            "Presented work at FISICA 2024 (24th National Physics Conference & 34th Iberian Meeting for Physics Education)."
          ]
        },
        {
          role: "Athens Program",
          place: "Czech Technical University",
          period: "Nov 2023",
          details: ["Introduction to Lean Six Sigma Management."]
        }
      ]
    },
    {
      title: "Research Experience",
      entries: [
        {
          role: "Researcher",
          place: "INESC-ID / Instituto Superior Tecnico",
          period: "Sep 2025 - Present",
          description:
            'Master thesis on translation and classification between European and Brazilian Portuguese, supervised by <a href="https://web.tecnico.ulisboa.pt/arlindo.oliveira/" target="_blank" rel="noreferrer">Arlindo Oliveira</a> and <a href="https://web.tecnico.ulisboa.pt/arlindo.oliveira/" target="_blank" rel="noreferrer">Bruno Martins</a>.'
        },
        {
          role: "Researcher (Machine Learning)",
          place: "Diffusion Dynamics",
          period: "Nov 2024 - Mar 2025",
          details: [
            "Designed a time-series anomaly detection pipeline for a Tier-1 network provider.",
            "Built scalable SQLite-backed batch pipelines and an evaluation dashboard with Gradio.",
            "Defined an evaluation protocol focused on actionable incidents and lower transient-noise false alarms."
          ]
        },
        {
          role: "Research Collaborator",
          place: "University of Wisconsin-Madison",
          period: "Jan 2024 - Dec 2025",
          details: [
            "Released a dataset of 12.4M stellarator configurations with feasibility metrics for fusion research.",
            "Achieved 95% accuracy distinguishing feasible stellarators by optimizing LightGBM models.",
            "Built reproducible Python experiment pipelines and evaluation for large-scale physics simulations."
          ]
        },
        {
          role: "Research Intern",
          place:
            "LIP (Laboratorio de Instrumentacao e Fisica Experimental de Particulas)",
          period: "Jun 2022 - Sep 2022",
          details: [
            "Built a high-performance Unity/C# visualization tool integrating Monte Carlo simulations for real-time particle-cascade exploration.",
            "Demo: QCD Jets Visualization."
          ]
        }
      ]
    },
    {
      title: "Publications",
      entries: [
        {
          role:
            "Data-driven approach to model the influence of magnetic geometry in the confinement of fusion devices",
          place: "Nuclear Fusion",
          period: "2026",
          description:
            'Laia, R.; Jorge, R.; Abreu, G. DOI: <a href="https://doi.org/10.1088/1741-4326/ae1e12" target="_blank" rel="noreferrer">10.1088/1741-4326/ae1e12</a>.'
        }
      ]
    },
    {
      title: "Technical Skills",
      entries: [
        {
          role: "Programming",
          details: ["Python, C#, C++, R, SQL."]
        },
        {
          role: "ML / Data",
          details: ["NumPy, pandas, scikit-learn, PyTorch, TensorFlow, LightGBM."]
        }
      ]
    },
    {
      title: "Languages",
      entries: [
        {
          role: "Portuguese",
          description: "Native"
        },
        {
          role: "English",
          description: "C1"
        }
      ]
    },
    {
      title: "Volunteering",
      entries: [
        {
          role: "AEIST (Student Association)",
          description:
            "Coordinated volunteers across multiple events, streamlined requests, and managed stationery working supplies."
        },
        {
          role: "ReFood",
          description:
            "Recovered food, organized routes, and helped support multiple families."
        },
        {
          role: "Web Summit Volunteer",
          description:
            "Onboarded speakers and attendees and resolved logistics issues during the conference."
        }
      ]
    }
  ]
};
