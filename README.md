<!--
╔══════════════════════════════════════════════════════════════╗
║           EDSON · GitHub Profile README                      ║
║   Customizable sections marked with: [CUSTOMIZE: ...]        ║
╚══════════════════════════════════════════════════════════════╝

HOW TO CUSTOMIZE:
  - Replace "edson-dev" with your actual GitHub username everywhere
  - Replace "edsondev" social handles
  - Toggle sections ON/OFF by removing the HTML comment wrappers <!-- OFF> ... <OFF -->
  - Update stats card theme: change ?theme=XXX (options below)
  - Add/remove tech badges in the Skills section
  - Update the "Currently working on" and "Currently learning" lines
-->

<div align="center">

<!-- ════════════════════════════════════════════════════════
     ANIMATED HEADER BANNER
     [CUSTOMIZE: Change gradient colors, your name, tagline]
════════════════════════════════════════════════════════ -->

<svg width="860" height="200" viewBox="0 0 860 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="860" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0D0D0D"/>
      <stop offset="100%" stop-color="#0f1923"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="860" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00FFB2"/>
      <stop offset="50%" stop-color="#00C2FF"/>
      <stop offset="100%" stop-color="#B44DFF"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .title { font: 700 48px 'Courier New', monospace; fill: #FFFFFF; }
      .sub   { font: 400 16px 'Courier New', monospace; fill: #8892A4; }
      .tag   { font: 600 13px 'Courier New', monospace; fill: #00FFB2; }
      .cursor { animation: blink 1s step-end infinite; }
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      .line { animation: drawLine 2s ease forwards; stroke-dasharray: 860; stroke-dashoffset: 860; }
      @keyframes drawLine { to { stroke-dashoffset: 0; } }
      .fadeIn { animation: fadeIn 1.5s ease forwards; opacity: 0; }
      @keyframes fadeIn { to { opacity: 1; } }
    </style>
  </defs>

  <!-- Background -->
  <rect width="860" height="200" rx="16" fill="url(#bg)"/>

  <!-- Grid lines -->
  <line x1="0" y1="50" x2="860" y2="50" stroke="#1a2535" stroke-width="1"/>
  <line x1="0" y1="100" x2="860" y2="100" stroke="#1a2535" stroke-width="1"/>
  <line x1="0" y1="150" x2="860" y2="150" stroke="#1a2535" stroke-width="1"/>
  <line x1="200" y1="0" x2="200" y2="200" stroke="#1a2535" stroke-width="1"/>
  <line x1="660" y1="0" x2="660" y2="200" stroke="#1a2535" stroke-width="1"/>

  <!-- Accent bar top -->
  <rect class="line" x="0" y="0" width="860" height="4" rx="2" fill="url(#accent)"/>

  <!-- Terminal prompt + name -->
  <text class="fadeIn" x="40" y="80" style="animation-delay:0.3s">
    <tspan class="tag">~/dev</tspan>
    <tspan class="sub"> $ </tspan>
    <tspan class="title">Edson</tspan>
    <tspan class="cursor" font-size="44" fill="#00FFB2" font-family="monospace">▌</tspan>
  </text>

  <!-- Tagline -->
  <text class="sub fadeIn" x="40" y="115" style="animation-delay:0.8s">Software Developer · Games · XR · Backend · AI</text>

  <!-- Tags -->
  <text class="tag fadeIn" x="40" y="148" style="animation-delay:1.2s; font-size:12px; font-family:Courier New,monospace; fill:#00FFB2;">
    #Unity  #Flutter  #Next.js  #FastAPI  #RA  #VR  #AI
  </text>

  <!-- Status dot -->
  <circle cx="800" cy="30" r="6" fill="#00FFB2" filter="url(#glow)">
    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <text x="818" y="34" font-size="11" fill="#8892A4" font-family="Courier New,monospace">online</text>

  <!-- Corner decorations -->
  <rect x="0" y="196" width="860" height="4" rx="2" fill="url(#accent)" opacity="0.4"/>
</svg>

<br/>

<!-- ════════════════════════════════════════════════════════
     VISITOR COUNTER + PROFILE VIEWS
     [CUSTOMIZE: Replace "edson-dev" with your username]
════════════════════════════════════════════════════════ -->

![Visitors](https://komarev.com/ghpvc/?username=edson-dev&style=for-the-badge&color=00FFB2&labelColor=0d0d0d&label=PROFILE+VIEWS)
&nbsp;&nbsp;
![GitHub followers](https://img.shields.io/github/followers/edson-dev?style=for-the-badge&color=00C2FF&labelColor=0d0d0d&label=FOLLOWERS)
&nbsp;&nbsp;
![GitHub User's stars](https://img.shields.io/github/stars/edson-dev?style=for-the-badge&color=B44DFF&labelColor=0d0d0d&label=TOTAL+STARS)

</div>

---

## 👋 Sobre mim

```typescript
const edson = {
  role:     "Software Developer",
  focus:    ["Multiplataforma", "Backend", "Games", "XR", "IA"],
  location: "Brasil 🇧🇷",
  
  // [CUSTOMIZE: Update these]
  workingOn:  "Jogo multiplayer educativo com Unity + Photon",
  learning:   "WebXR · LLMs · Computação Gráfica Avançada",
  lookingFor: "Projetos desafiadores em Games, XR e IA",
  
  philosophy: "Da concepção à entrega — soluções escaláveis e bem arquitetadas 🚀",
};
```

---

## 🚀 Áreas de Atuação

<div align="center">

| | Área | Destaque |
|---|---|---|
| 🎮 | **Jogos** | 2D · 3D · Multiplayer · Educativos |
| 📱 | **Mobile** | Android · iOS (nativo e cross-platform) |
| 🌐 | **Web** | Aplicações modernas e performáticas |
| 🧠 | **Backend & APIs** | Sistemas escaláveis e automações |
| 🤖 | **IA & Chatbots** | WhatsApp · APIs inteligentes |
| 🕶️ | **RA · VR · XR** | Experiências imersivas e interativas |

</div>

---

## 🧠 Stack Tecnológica

<!-- ════════════════════════════════════════════
     LANGUAGES
     [CUSTOMIZE: Remove/add badges as needed]
     Badge generator: https://shields.io
════════════════════════════════════════════ -->

### 💬 Linguagens

<div align="center">

![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

### 🎮 Games & XR

<div align="center">

![Unity](https://img.shields.io/badge/Unity-FFFFFF?style=for-the-badge&logo=unity&logoColor=black)
![Photon](https://img.shields.io/badge/Photon-004680?style=for-the-badge&logo=photon&logoColor=white)
![AR Foundation](https://img.shields.io/badge/AR%20Foundation-FF6D00?style=for-the-badge&logo=unity&logoColor=white)
![VR/XR Toolkit](https://img.shields.io/badge/VR%2FXR%20Toolkit-7C3AED?style=for-the-badge&logo=unity&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![A-Frame](https://img.shields.io/badge/A--Frame-EF2D5E?style=for-the-badge&logo=aframe&logoColor=white)
![MindAR](https://img.shields.io/badge/MindAR-00FFB2?style=for-the-badge&logoColor=black)

</div>

### 📱 Mobile & 🌐 Web

<div align="center">

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Swift](https://img.shields.io/badge/Swift%20iOS-FA7343?style=for-the-badge&logo=swift&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

### ⚙️ Backend & DevOps

<div align="center">

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Quarkus](https://img.shields.io/badge/Quarkus-4695EB?style=for-the-badge&logo=quarkus&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)

</div>

### 🗄️ Banco de Dados

<div align="center">

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

</div>

---

## 📊 GitHub Stats

<!-- ════════════════════════════════════════════
     GITHUB STATS CARDS
     [CUSTOMIZE: Replace username + choose theme]
     
     Available themes: dark, radical, merko, gruvbox,
     tokyonight, onedark, cobalt, synthwave, highcontrast,
     dracula, github_dark, nightowl, aura, catppuccin_mocha
════════════════════════════════════════════ -->

<div align="center">

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=edson-dev&show_icons=true&theme=github_dark&bg_color=0d0d0d&border_color=00FFB2&title_color=00FFB2&icon_color=00C2FF&text_color=8892A4&hide_border=false&count_private=true&include_all_commits=true"/>

<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=edson-dev&layout=compact&theme=github_dark&bg_color=0d0d0d&border_color=00FFB2&title_color=00FFB2&text_color=8892A4&hide_border=false&langs_count=8"/>

</div>

<div align="center">

[![GitHub Streak](https://streak-stats.demolab.com?user=edson-dev&theme=dark&background=0d0d0d&border=00FFB2&ring=00FFB2&fire=00C2FF&currStreakLabel=B44DFF&sideLabels=8892A4&dates=8892A4)](https://git.io/streak-stats)

</div>

---

## 📈 Atividade

<!-- ════════════════════════════════════════════
     CONTRIBUTION GRAPH
     [CUSTOMIZE: Replace username, change color]
     Colors: github-dark, react, vue, rogue, xcode,
             merko, tokyo-night, high-contrast, dracula
════════════════════════════════════════════ -->

<div align="center">

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=edson-dev&bg_color=0d0d0d&color=00FFB2&line=00C2FF&point=B44DFF&area=true&area_color=00FFB220&hide_border=false&border_color=00FFB2&radius=8)](https://github.com/ashutosh00710/github-readme-activity-graph)

</div>

---

## 🏆 Conquistas

<div align="center">

<!-- [CUSTOMIZE: theme options: flat, flat-square, plastic, for-the-badge, no-frame, radical, tokyonight, dark_lover, onedark, dracula, gruvbox, algolia, juicyfresh, kimbie_dark, monokai] -->

[![Trophies](https://github-profile-trophy.vercel.app/?username=edson-dev&theme=algolia&no-frame=true&row=1&column=7&margin-w=8&margin-h=8)](https://github.com/ryo-ma/github-profile-trophy)

</div>

---

## 🌐 Conecte-se

<!-- ════════════════════════════════════════════
     SOCIAL LINKS
     [CUSTOMIZE: Replace URLs with your actual links]
     Add/remove platforms as needed
════════════════════════════════════════════ -->

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/edsondev)
[![Portfolio](https://img.shields.io/badge/Portfolio-0d0d0d?style=for-the-badge&logo=vercel&logoColor=00FFB2)](https://edsondev.vercel.app)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:edson@email.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5581999999999)

<!-- OPTIONAL: Uncomment if you use these platforms
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/edsondev)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@edsondev)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/edsondev)
[![Itch.io](https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itchdotio&logoColor=white)](https://edson.itch.io)
-->

</div>

---

<!-- ════════════════════════════════════════════
     QUOTE / FOOTER
     [CUSTOMIZE: Change quote or toggle off]
════════════════════════════════════════════ -->

<div align="center">

<sub>
  <code>// "Da concepção à entrega — código limpo, arquitetura sólida, experiências que importam."</code>
</sub>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,20&height=80&section=footer&animation=twinkling"/>

</div>

<!--
══════════════════════════════════════════════════════════════
  QUICK CUSTOMIZATION REFERENCE
══════════════════════════════════════════════════════════════

  1. USERNAME:       Replace all "edson-dev" with YOUR GitHub username
  2. SOCIAL LINKS:   Update LinkedIn, Portfolio, Email, WhatsApp URLs
  3. STATS THEME:    Change ?theme= in Stats cards URL
     Options: github_dark · tokyonight · radical · dracula · dark
  4. STREAK THEME:   Change &theme= in Streak Stats URL
  5. GRAPH COLOR:    Change &color= &line= in Activity Graph URL
  6. TROPHY THEME:   Change ?theme= in Trophies URL
  7. BADGE COLORS:   Edit &color= in shields.io badge URLs
  8. WORKING ON:     Update the "workingOn" field in the TypeScript block
  9. LEARNING:       Update the "learning" field
 10. TOGGLE SECTION: Wrap any section in <!-- OFF> ... <OFF --> to hide it

  USEFUL TOOLS:
  - Badges:    https://shields.io
  - Stats:     https://github-readme-stats.vercel.app
  - Streak:    https://streak-stats.demolab.com
  - Trophies:  https://github-profile-trophy.vercel.app
  - Graph:     https://github-readme-activity-graph.vercel.app
  - Views:     https://komarev.com/ghpvc
  - Banner:    https://capsule-render.vercel.app
══════════════════════════════════════════════════════════════
-->
