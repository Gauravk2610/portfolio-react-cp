/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Gaurav Konde",
  title: "Hi all, I'm Gaurav",
  subTitle: emoji(
    "A passionate Full Stack Software, Python & BlockChain Developer 🚀 having an experience of designing and building Web Applications with JavaScript / Reactjs  and some other cool libraries and frameworks, also built some smart contracts, ERC20 tokens creation, some DeFi, and other cool stuffs. Also have worked on Django FrameWork And have Created some Awesome Projects 🔥 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cgY3BdrX1DTI-BctjY2eRW7yXZojW-aI/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gauravk2610",
  linkedin: "https://www.linkedin.com/in/gaurav-konde-51aab6193/",
  gmail: "gauravkonde26@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/gaurav_konde/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK, PYTHON & BLOCKCHAIN DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces / Back end for your web applications"
    ),
    emoji("⚡ Progressive Blockchain Applications Based on EVM"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    ),
    emoji(
      "⚡ Built Some Awesome Bots, WebAutomation, Webscrapping & Opencv based applications using Python  "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sqlite-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Atharva College of Engineering",
      logo: require("./assets/images/atharva.png"),
      subHeader: "Bachelor's in Information Technology",
      duration: "2019 - Ongoing",
      desc: "",
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Html / Css", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "Python ",
      progressPercentage: "90%"
    },
    {
      Stack: "Solidity ",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Techq Konnect",
      companylogo: require("./assets/images/TKLOGO1.png"),
      date: "March 2020 – April 2020",
      desc:
        "Working with technologies made easy !!!",
      descBullets: [
        "Computer Vision Projects",
        "Object Detection Project",
        "Emotion Detection System",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "83f73eabfd11e1a1671fd80e02cfbde2c665db32",
  githubUserName: "Gauravk2610", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "2nd Place Atmanirbhar Start Up Competition",
      subtitle:
        "Drishti: A Smart Aid For Blind People",
      image: require("./assets/images/atma.PNG"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Atmanirbhar Startup",
          url:
            ""
        }
      ]
    },
    {
      title: "Hack Nagpur",
      subtitle:
        "Top 15 Winning Teams at Hack Nagpur",
      image: require("./assets/images/hn.png"),
      footerLink: [
        {
          name: "Hackathon",
          url:
            ""
        },
        {
          name: "Top 15",
          url:
            ""
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9987882211",
  email_address: "gauravkonde26@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Gauravk2610", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
