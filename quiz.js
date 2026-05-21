/* =============================================================
   DONNÉES DU DECK
   Format produit par convert.py à partir du .apkg.
   Chaque carte a : position, letter, piece_type, color1/2(/3).
     - color1 = sticker pointé par la flèche (à identifier)
     - color2 = autre sticker de la pièce
     - color3 = troisième sticker (corners uniquement)
   ============================================================= */
const DECK = {
  name: "Lettercubie",
  cards: [
    // --- EDGES ---
    { position:"UR", letter:"B", piece_type:"edge", color1:"FFFFFF", color2:"EE0000" },
    { position:"RU", letter:"M", piece_type:"edge", color1:"EE0000", color2:"FFFFFF" },
    { position:"UB", letter:"A", piece_type:"edge", color1:"FFFFFF", color2:"0000F2" },
    { position:"BU", letter:"Q", piece_type:"edge", color1:"0000F2", color2:"FFFFFF" },
    { position:"UL", letter:"D", piece_type:"edge", color1:"FFFFFF", color2:"FFA100" },
    { position:"LU", letter:"E", piece_type:"edge", color1:"FFA100", color2:"FFFFFF" },
    { position:"UF", letter:"C", piece_type:"edge", color1:"FFFFFF", color2:"00D800" },
    { position:"FU", letter:"I", piece_type:"edge", color1:"00D800", color2:"FFFFFF" },
    { position:"RD", letter:"O", piece_type:"edge", color1:"EE0000", color2:"FEFE00" },
    { position:"DR", letter:"V", piece_type:"edge", color1:"FEFE00", color2:"EE0000" },
    { position:"DB", letter:"W", piece_type:"edge", color1:"FEFE00", color2:"0000F2" },
    { position:"BD", letter:"S", piece_type:"edge", color1:"0000F2", color2:"FEFE00" },
    { position:"DF", letter:"U", piece_type:"edge", color1:"FEFE00", color2:"00D800" },
    { position:"FD", letter:"K", piece_type:"edge", color1:"00D800", color2:"FEFE00" },
    { position:"DL", letter:"X", piece_type:"edge", color1:"FEFE00", color2:"FFA100" },
    { position:"LD", letter:"G", piece_type:"edge", color1:"FFA100", color2:"FEFE00" },
    { position:"RB", letter:"N", piece_type:"edge", color1:"EE0000", color2:"0000F2" },
    { position:"BR", letter:"T", piece_type:"edge", color1:"0000F2", color2:"EE0000" },
    { position:"RF", letter:"P", piece_type:"edge", color1:"EE0000", color2:"00D800" },
    { position:"FR", letter:"J", piece_type:"edge", color1:"00D800", color2:"EE0000" },
    { position:"LB", letter:"H", piece_type:"edge", color1:"FFA100", color2:"0000F2" },
    { position:"BL", letter:"R", piece_type:"edge", color1:"0000F2", color2:"FFA100" },
    { position:"LF", letter:"F", piece_type:"edge", color1:"FFA100", color2:"00D800" },
    { position:"FL", letter:"L", piece_type:"edge", color1:"00D800", color2:"FFA100" },
    // --- CORNERS ---
    { position:"URB", letter:"B", piece_type:"corner", color1:"FFFFFF", color2:"EE0000", color3:"0000F2" },
    { position:"RBU", letter:"N", piece_type:"corner", color1:"EE0000", color2:"0000F2", color3:"FFFFFF" },
    { position:"BUR", letter:"Q", piece_type:"corner", color1:"0000F2", color2:"FFFFFF", color3:"EE0000" },
    { position:"UBL", letter:"A", piece_type:"corner", color1:"FFFFFF", color2:"0000F2", color3:"FFA100" },
    { position:"BLU", letter:"R", piece_type:"corner", color1:"0000F2", color2:"FFA100", color3:"FFFFFF" },
    { position:"LUB", letter:"E", piece_type:"corner", color1:"FFA100", color2:"FFFFFF", color3:"0000F2" },
    { position:"ULF", letter:"D", piece_type:"corner", color1:"FFFFFF", color2:"FFA100", color3:"00D800" },
    { position:"LFU", letter:"F", piece_type:"corner", color1:"FFA100", color2:"00D800", color3:"FFFFFF" },
    { position:"FUL", letter:"I", piece_type:"corner", color1:"00D800", color2:"FFFFFF", color3:"FFA100" },
    { position:"UFR", letter:"C", piece_type:"corner", color1:"FFFFFF", color2:"00D800", color3:"EE0000" },
    { position:"FRU", letter:"J", piece_type:"corner", color1:"00D800", color2:"EE0000", color3:"FFFFFF" },
    { position:"RUF", letter:"M", piece_type:"corner", color1:"EE0000", color2:"FFFFFF", color3:"00D800" },
    { position:"DRF", letter:"V", piece_type:"corner", color1:"FEFE00", color2:"EE0000", color3:"00D800" },
    { position:"RFD", letter:"P", piece_type:"corner", color1:"EE0000", color2:"00D800", color3:"FEFE00" },
    { position:"FDR", letter:"K", piece_type:"corner", color1:"00D800", color2:"FEFE00", color3:"EE0000" },
    { position:"DFL", letter:"U", piece_type:"corner", color1:"FEFE00", color2:"00D800", color3:"FFA100" },
    { position:"FLD", letter:"L", piece_type:"corner", color1:"00D800", color2:"FFA100", color3:"FEFE00" },
    { position:"LDF", letter:"G", piece_type:"corner", color1:"FFA100", color2:"FEFE00", color3:"00D800" },
    { position:"DLB", letter:"X", piece_type:"corner", color1:"FEFE00", color2:"FFA100", color3:"0000F2" },
    { position:"LBD", letter:"H", piece_type:"corner", color1:"FFA100", color2:"0000F2", color3:"FEFE00" },
    { position:"BDL", letter:"S", piece_type:"corner", color1:"0000F2", color2:"FEFE00", color3:"FFA100" },
    { position:"DBR", letter:"W", piece_type:"corner", color1:"FEFE00", color2:"0000F2", color3:"EE0000" },
    { position:"BRD", letter:"T", piece_type:"corner", color1:"0000F2", color2:"EE0000", color3:"FEFE00" },
    { position:"RDB", letter:"O", piece_type:"corner", color1:"EE0000", color2:"FEFE00", color3:"0000F2" },
  ]
};

/* =============================================================
   GÉOMÉTRIE SVG — CONSTANTES
   Points extraits directement des templates Anki (newer view).
   ============================================================= */
const SVG_GEOMETRY = {
  cube_faces: [
    "-0.22074582133342,-0.61175678026082 0.60293676418196,-0.54500420991028 0.22938291282174,-0.24194023808692 -0.70683725438887,-0.34837744803244",
    "0.22938291282174,-0.24194023808692 0.60293676418196,-0.54500420991028 0.60433045588959,0.29785512957028 0.26233892764947,0.72702448792228",
    "-0.70683725438887,-0.34837744803244 0.22938291282174,-0.24194023808692 0.26233892764947,0.72702448792228 -0.60483941282881,0.54672404453327",
  ],
  edge_stickers: {
    color2: "0.26772355841554,0.12064688682917 0.38999725701651,0.0024756201199928 0.39602760968253,0.2803131152464 0.27764020916861,0.41221383841928",
    color1: "-0.060798371182584,0.085519741743906 0.23148766678483,0.1284933931606 0.24140431753791,0.42006034475071 -0.043043473578544,0.36932114265504",
  },
  corner_stickers: {
    color3: "0.069762634892813,-0.40055310630383 0.35631465900575,-0.37155574238262 0.22989504503556,-0.26899160019356 -0.070672067911445,-0.30316254205521",
    color2: "0.25574159890418,-0.24051446431584 0.38216121287436,-0.3430786065049 0.3885367992724,-0.049335097145258 0.26626310067143,0.068836169563924",
    color1: "-0.08213499741471,-0.26727361280859 0.21843211553229,-0.23310267094694 0.22895361729955,0.076247962932823 -0.063332420667871,0.033274311516127",
  },
  arrow_y2: {
    edge:   "0.48",
    corner: "0.15",
  },
};

/* =============================================================
   GÉNÉRATEUR SVG
   ============================================================= */
function buildSVG(card) {
  const ns = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width",   "220");
  svg.setAttribute("height",  "220");
  svg.setAttribute("viewBox", "-0.9 -0.9 1.8 1.8");

  // Faces noires
  const gFaces = document.createElementNS(ns, "g");
  gFaces.setAttribute("style", "stroke-width:0.1;stroke-linejoin:round;opacity:1");
  SVG_GEOMETRY.cube_faces.forEach(pts => {
    const poly = document.createElementNS(ns, "polygon");
    poly.setAttribute("fill",   "#000000");
    poly.setAttribute("stroke", "#000000");
    poly.setAttribute("points", pts);
    gFaces.appendChild(poly);
  });
  svg.appendChild(gFaces);

  // Stickers colorés
  const gStickers = document.createElementNS(ns, "g");
  gStickers.setAttribute("style", "opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round");

  const stickerDef = card.piece_type === "corner"
    ? SVG_GEOMETRY.corner_stickers
    : SVG_GEOMETRY.edge_stickers;

  Object.entries(stickerDef).forEach(([colorKey, points]) => {
    const poly = document.createElementNS(ns, "polygon");
    poly.setAttribute("fill",   "#" + card[colorKey]);
    poly.setAttribute("stroke", "#000000");
    poly.setAttribute("points", points);
    gStickers.appendChild(poly);
  });
  svg.appendChild(gStickers);

  // Flèche
  const defs = document.createElementNS(ns, "defs");
  const marker = document.createElementNS(ns, "marker");
  marker.setAttribute("id",           "arrowhead");
  marker.setAttribute("markerWidth",  "0.2");
  marker.setAttribute("markerHeight", "0.2");
  marker.setAttribute("refX",         "0.05");
  marker.setAttribute("refY",         "0.1");
  marker.setAttribute("orient",       "auto");
  marker.setAttribute("markerUnits",  "userSpaceOnUse");
  const arrowTip = document.createElementNS(ns, "polygon");
  arrowTip.setAttribute("points", "0 0, 0.15 0.1, 0 0.2, 0.05 0.10");
  arrowTip.setAttribute("fill",   "#AAA");
  marker.appendChild(arrowTip);
  defs.appendChild(marker);
  svg.appendChild(defs);

  const line = document.createElementNS(ns, "line");
  line.setAttribute("x1", "0.1");
  line.setAttribute("y1", "0.8");
  line.setAttribute("x2", "0.1");
  line.setAttribute("y2", SVG_GEOMETRY.arrow_y2[card.piece_type]);
  line.setAttribute("stroke",       "#AAA");
  line.setAttribute("stroke-width", "0.06");
  line.setAttribute("marker-end",   "url(#arrowhead)");
  svg.appendChild(line);

  return svg;
}

/* =============================================================
   UTILITAIRES
   ============================================================= */

// Mélange Fisher-Yates — retourne une copie
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Formate millisecondes → "MM:SS.d"
function formatTime(ms) {
  const tenths = Math.floor(ms / 100);
  const d    = tenths % 10;
  const secs = Math.floor(tenths / 10) % 60;
  const mins = Math.floor(tenths / 600);
  return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}.${d}`;
}

// Label + couleur selon score 0-100
function getGrade(score) {
  if (score === 100) return { label: "PERFECT",       color: "#00e676" };
  if (score >= 90)  return { label: "EXCELLENT",      color: "#00e5ff" };
  if (score >= 75)  return { label: "BIEN",           color: "#b2ff59" };
  if (score >= 50)  return { label: "MOYEN",          color: "#ffd740" };
  return               { label: "À RETRAVAILLER", color: "#ff3c6e" };
}

/* =============================================================
   ÉTAT GLOBAL DU QUIZ
   ============================================================= */
let deck        = [];   // cartes dans l'ordre actuel du run
let currentIdx  = 0;    // index de la carte affichée
let totalErrors = 0;    // erreurs cumulées sur tout le run
let results     = [];   // { card, timeMs, attempts } — une entrée par carte UNIQUE résolue
let cardStartMs = null; // performance.now() au début de la carte courante
let timerStart  = null; // performance.now() au début du run
let timerRaf    = null; // handle requestAnimationFrame

// Dictionnaire position → nombre d'erreurs sur cette carte
// Persiste entre les passages (mode requeue) → fix bugs #6 et #7
let cardAttempts = {};  // ex: { "UR": 2, "FU": 1, ... }

// Options lues au démarrage
let optRequeue = false;
let optRotate  = true;

/* =============================================================
   NAVIGATION ENTRE ÉCRANS
   ============================================================= */
const SCREENS = {
  start:     document.getElementById("screen-start"),
  countdown: document.getElementById("screen-countdown"),
  quiz:      document.getElementById("screen-quiz"),
  results:   document.getElementById("screen-results"),
};

function showScreen(name) {
  Object.entries(SCREENS).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
  });
}

const $ = id => document.getElementById(id);

/* =============================================================
   TIMER — requestAnimationFrame pour la fluidité
   ============================================================= */
function startTimer() {
  timerStart = performance.now();
  function tick() {
    $("timer").textContent = formatTime(performance.now() - timerStart);
    timerRaf = requestAnimationFrame(tick);
  }
  timerRaf = requestAnimationFrame(tick);
}

function stopTimer() {
  cancelAnimationFrame(timerRaf);
  return performance.now() - timerStart;
}

/* =============================================================
   COUNTDOWN (#2)
   Affiche 3 → 2 → 1 → GO puis lance le quiz
   ============================================================= */
function runCountdown(onComplete) {
  showScreen("countdown");
  const el     = $("countdown-number");
  const steps  = ["3", "2", "1", "GO"];
  let   i      = 0;

  function showStep() {
    el.textContent = steps[i];
    // Relance l'animation CSS à chaque chiffre
    el.style.animation = "none";
    el.offsetHeight;   // reflow
    el.style.animation = "";

    i++;
    if (i < steps.length) {
      setTimeout(showStep, 800);
    } else {
      // "GO" affiché 400ms puis on lance
      setTimeout(onComplete, 400);
    }
  }

  showStep();
}

/* =============================================================
   AFFICHAGE D'UNE CARTE
   ============================================================= */
function showCard(idx) {
  cardStartMs = performance.now();

  const card = deck[idx];

  $("position-label").textContent = card.position;

  // SVG
  const container = $("svg-container");
  container.innerHTML = "";
  container.appendChild(buildSVG(card));

  // Rotation aléatoire statique si option activée
  container.classList.toggle("rotating", optRotate);
  if (optRotate) {
    const deg = Math.floor(Math.random() * 360);
    container.querySelector("svg").style.transform = `rotate(${deg}deg)`;
  }

  // Reset input + feedback
  const input = $("answer-input");
  input.value = "";
  input.classList.remove("shake", "correct");
  $("feedback").textContent = "";
  $("feedback").className   = "feedback";

  // HUD — en mode requeue deck.length grandit → la barre peut reculer (voulu)
  $("progress-text").textContent = `${idx + 1} / ${deck.length}`;
  $("progress-bar").style.width  = `${(idx / deck.length) * 100}%`;
  $("error-count").textContent   = totalErrors;

  // Relance l'animation d'entrée
  const area = $("card-area");
  area.style.animation = "none";
  area.offsetHeight;
  area.style.animation = "";

  setTimeout(() => input.focus(), 30);
}

/* =============================================================
   GESTION DE LA RÉPONSE UTILISATEUR
   ============================================================= */
function onInput() {
  const input  = $("answer-input");
  const typed  = input.value.trim().toUpperCase();
  if (!typed) return;

  const card     = deck[currentIdx];
  const expected = card.letter.toUpperCase();

  if (typed === expected) {
    // ---- BONNE RÉPONSE ----

    // On ne pousse dans results que si c'est la PREMIÈRE fois qu'on valide cette position.
    // En mode requeue une même carte peut revenir : on ignore les passages suivants.
    if (!results.find(r => r.card.position === card.position)) {
      const timeMs = performance.now() - cardStartMs;
      results.push({
        card,
        timeMs,
        // cardAttempts[position] a été incrémenté à chaque erreur,
        // donc +1 pour compter cette bonne réponse elle-même
        attempts: (cardAttempts[card.position] || 0) + 1,
      });
    }

    input.classList.remove("shake");
    input.classList.add("correct");
    $("feedback").textContent = "✓";
    $("feedback").className   = "feedback ok";

    setTimeout(() => {
      currentIdx++;
      if (currentIdx >= deck.length) {
        endQuiz();
      } else {
        showCard(currentIdx);
      }
    }, 280);

  } else {
    // ---- MAUVAISE RÉPONSE ----

    // On incrémente le compteur d'erreurs pour CETTE position (persiste entre les passages)
    cardAttempts[card.position] = (cardAttempts[card.position] || 0) + 1;
    totalErrors++;
    $("error-count").textContent = totalErrors;

    $("feedback").textContent = `✗ Ce n'est pas "${typed}"`;
    $("feedback").className   = "feedback";

    input.classList.remove("shake");
    input.offsetHeight;
    input.classList.add("shake");
    input.value = "";
    setTimeout(() => input.classList.remove("shake"), 320);

    // Mode requeue : réinsertion aléatoire après la position courante
    if (optRequeue) {
      const removed  = deck.splice(currentIdx, 1)[0];
      const insertAt = currentIdx + 1 + Math.floor(Math.random() * (deck.length - currentIdx));
      deck.splice(insertAt, 0, removed);
      // La carte suivante est maintenant à currentIdx (l'ancienne a été déplacée)
      setTimeout(() => showCard(currentIdx), 320);
    }
  }
}

/* =============================================================
   DÉMARRAGE DU QUIZ
   ============================================================= */
function startQuiz() {
  // Lire les faces cochées (#3)
  const checkedFaces = [...document.querySelectorAll('input[name="opt-face"]:checked')]
    .map(cb => cb.value);

  // Filtrer le deck sur la première lettre de position (= face du sticker mémo)
  const filtered = DECK.cards.filter(card => checkedFaces.includes(card.position[0]));

  // Lire le nombre de cartes
  const countVal = document.querySelector('input[name="opt-count"]:checked').value;
  const count    = countVal === "all" ? filtered.length : parseInt(countVal, 10);

  // Lire les options
  optRequeue = $("opt-requeue").checked;
  optRotate  = $("opt-rotate").checked;

  // Initialiser l'état
  deck         = shuffle(filtered).slice(0, count);
  currentIdx   = 0;
  totalErrors  = 0;
  results      = [];
  cardAttempts = {};  // reset du dictionnaire d'erreurs par position

  // Countdown puis lancement (#2)
  runCountdown(() => {
    showScreen("quiz");
    startTimer();
    showCard(0);
  });

  // Enregistrer l'écouteur une seule fois
  const input = $("answer-input");
  input.removeEventListener("input", onInput);
  input.addEventListener("input", onInput);
}

/* =============================================================
   FIN DU QUIZ
   ============================================================= */
function endQuiz() {
  const totalMs = stopTimer();
  showScreen("results");
  renderResults(totalMs);
}

function renderResults(totalMs) {
  // results contient exactement une entrée par carte unique du deck initial
  const totalCards   = results.length;
  const perfectCards = results.filter(r => r.attempts === 1).length;
  const scoreVal     = Math.round((perfectCards / totalCards) * 100);

  $("score-value").textContent = scoreVal;
  const g = getGrade(scoreVal);
  $("score-grade").textContent = g.label;
  $("score-grade").style.color = g.color;

  $("stat-total-time").textContent = formatTime(totalMs);
  $("stat-errors").textContent     = totalErrors;
  $("stat-avg").textContent        = formatTime(totalMs / totalCards);

  // Tableau trié par temps décroissant (les plus lentes en premier)
  const sorted = [...results].sort((a, b) => b.timeMs - a.timeMs);
  const tbody  = $("results-tbody");
  tbody.innerHTML = "";

  sorted.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.className = r.attempts > 1 ? "row-failed" : "row-ok";
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${r.card.position}</td>
      <td>${r.card.letter}</td>
      <td>${formatTime(r.timeMs)}</td>
      <td>${r.attempts === 1 ? "✓" : r.attempts + " essais"}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* =============================================================
   INITIALISATION
   ============================================================= */
$("deck-count").textContent = DECK.cards.length;

$("btn-start").addEventListener("click", startQuiz);

$("btn-restart").addEventListener("click", () => {
  $("timer").textContent = "00:00.0";
  showScreen("start");
});

// Raccourcis Tout / Aucun pour les faces (#3)
$("btn-all-faces").addEventListener("click", () => {
  document.querySelectorAll('input[name="opt-face"]').forEach(cb => cb.checked = true);
});
$("btn-no-faces").addEventListener("click", () => {
  document.querySelectorAll('input[name="opt-face"]').forEach(cb => cb.checked = false);
});
