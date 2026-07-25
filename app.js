// Central Engine Configuration State
let quizData = null; 
let currentFile = '';
let currentIndex = 0;
let timerInterval = null;

// Routing Map: Detect which standalone JSON asset to fetch based on HTML view filename
function getTargetJsonPath() {
    const page = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    if (page === "sector-india-files.html") return "questions-india.json";
    if (page === "sector-science.html") return "questions-science.json";
    if (page === "sector-mix-bag.html") return "questions-mixbag.json";
    if (page === "sector-sports-ent.html") return "questions-sports.json";
    return "";
}

// Asynchronous Application Bootstrap Loader
async function initApp() {
    currentFile = getTargetJsonPath();
    if (!currentFile) return; // Exit system if user is resting on the index.html master menu

    try {
        const response = await fetch(currentFile);
        quizData = await response.json(); // Clean array configuration payload synced
        shuffleArray();
        renderCard();
    } catch (error) {
        console.error("Critical repository loading error:", error);
        document.getElementById('question_display').innerText = "Failed to sync segment data module. Verify JSON file names match exactly.";
    }
}

// Fisher-Yates Randomization Protocol for the Loaded Question Set
function shuffleArray() {
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
}

// Visual Card Engine State Sync
function renderCard() {
    clearInterval(timerInterval);
    document.getElementById('answer_box').classList.add('hidden');
    
    document.getElementById('card_index').innerText = `Question ${currentIndex + 1} / ${quizData.length}`;
    
    const currentNode = quizData[currentIndex];
    document.getElementById('question_display').innerText = currentNode.q;
    document.getElementById('answer_display').innerText = currentNode.a;
    
    runCountdown();
}

// High-Precision 10-Second Countdown Execution Thread
function runCountdown() {
    const timerBar = document.getElementById('timer_bar');
    const timerText = document.getElementById('timer_text');
    timerBar.style.width = '100%';
    timerBar.className = "h-full bg-yellow-400 w-full transition-all duration-100 ease-linear";
    timerText.className = "font-bold text-yellow-500 tracking-wider";
    timerText.innerText = "10.0s REMAINING";

    const totalDuration = 10000; // 10000ms target limit
    const intervalTick = 100; // Refreshes styling thread parameters every 100ms
    let elapsed = 0;

    timerInterval = setInterval(() => {
        elapsed += intervalTick;
        let percentageLeft = 100 - (elapsed / totalDuration) * 100;
        let secondsRemaining = ((totalDuration - elapsed) / 1000).toFixed(1);

        if (percentageLeft <= 0) {
            percentageLeft = 0;
            secondsRemaining = "0.0";
            clearInterval(timerInterval);
            timerBar.className = "h-full bg-red-600 w-full transition-all duration-100";
            timerText.className = "font-bold text-red-500 tracking-wider animate-pulse";
            timerText.innerText = "TIME OUT!";
        } else if (percentageLeft < 35) {
            timerBar.className = "h-full bg-red-500 w-full transition-all duration-100 ease-linear";
            timerText.className = "font-bold text-red-400 tracking-wider";
            timerText.innerText = `${secondsRemaining}s TIMEOUT WARNING`;
        } else {
            timerText.innerText = `${secondsRemaining}s REMAINING`;
        }
        timerBar.style.width = `${percentageLeft}%`;
    }, intervalTick);
}

// Answer Visibility Handler
function toggleAnswer() {
    document.getElementById('answer_box').classList.toggle('hidden');
}

// Queue Iteration Forward Control Link
function nextQuestion() {
    currentIndex = (currentIndex + 1) % quizData.length;
    renderCard();
}

// Global Lifecycle Event Mapping
window.addEventListener('DOMContentLoaded', initApp);
