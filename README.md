# 🏆 Buntain House Quiz Training Cockpit [Group B]

A high-performance, decentralized web simulation engine engineered specifically to train the **Buntain House (Yellow) Group B Team (Classes 6–8)** for the upcoming school quiz competition. 

Built with clean vanilla JavaScript architecture, decoupled static database nodes, and responsive Tailwind CSS layout scripts.

## 🚀 Live Link
👉 **[Access the Active Simulator Page Here](https://github.io)**  
*(Note: Replace this link with your actual GitHub Pages URL once deployed!)*

---

## 🛠️ System Repository Architecture

The codebase utilizes an optimized modular layout pattern. Each training sector is isolated into its own view file and dynamically hooks into standalone data structures to ensure fast load times and minimal memory footprint on mobile browsers:

```text
buntain-quiz-app/
├── index.html                  # Core Navigation Cockpit Dashboard
├── sector-india-files.html     # View Layer: 100 Indian History/Geography Prompts
├── sector-science.html         # View Layer: 100 Physics, Chemistry, & Tech Prompts
├── sector-mix-bag.html         # View Layer: 100 Rapid-Fire True/False Prompts
├── sector-sports-ent.html      # View Layer: 100 Global Sports & Culture Prompts
├── app.js                      # Central State Engine & Dynamic Timer Thread
├── questions-india.json        # Database: Category Array Data (1-50 & 51-100)
├── questions-science.json      # Database: Category Array Data (1-50 & 51-100)
├── questions-mixbag.json       # Database: Category Array Data (1-50 & 51-100)
└── questions-sports.json       # Database: Category Array Data (1-50 & 51-100)
```

---

## ⚡ Core Engineering Features

- **Automated Randomization:** Built-in Fisher-Yates shuffle engine randomizes the arrays on every page load so your squad never memorizes the question sequence order.
- **Dynamic File Routing:** The centralized `app.js` automatically detects which HTML module is running and seamlessly fetches the exact target JSON asset package.
- **High-Precision 10-Second Timer:** A custom JavaScript interval loop triggers every 100ms, shifting color parameters to **Yellow** and flashing **Red** as time expires to simulate real stage pressure.
- **Concealed Mask Mode:** Answers are completely masked by default. The team captain acts as the Quizmaster, reviewing group whispers during the countdown before toggling the mask.

---

## 📋 Buntain Squad Training Protocol

To pull off a win matching last year's historic **50-point victory loop**, use this application to run drills following these strict rules:

1. **The 10-Second Barrier:** Teammates must state a response before the timer bar zeroes out and locks.
2. **The Whisper Rule:** Group members must whisper ideas to the captain instantly. No shouting answers aloud to avoid triggering a **Voice Protocol Disqualification** or a **10-Point Decorum Penalty**.
3. **The Passed Question Rule:** Listen closely to other houses. A correct answer on a pass secures a risk-free **5 points**.

---

## 💻 Core Infrastructure Maintainer
- **Lead Developer:** Rik (`RikMakersHub`)
- **Focus Stack:** Embedded Systems, Microcontroller Firmware Optimization, Low-Power Node Architecture, Client-Side Cryptography, Web Utilities.
- **Profile Hub:** [DEV Community Portfolio](https://dev.to)

---

*Let's bring home the championship cup for Buntain House Yellow! 🏆*
