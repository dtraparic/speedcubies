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
    // --- EDGES (24 pièces × 1 sticker chacune) ---
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
    // --- CORNERS (24 pièces × 1 sticker chacune) ---
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
   Les trois faces noires du cube sont communes aux deux types.
   Les stickers diffèrent entre edge et corner.
   ============================================================= */
const SVG_GEOMETRY = {

  // Les trois faces noires du cube (communes)
  cube_faces: [
    "-0.22074582133342,-0.61175678026082 0.60293676418196,-0.54500420991028 0.22938291282174,-0.24194023808692 -0.70683725438887,-0.34837744803244",
    "0.22938291282174,-0.24194023808692 0.60293676418196,-0.54500420991028 0.60433045588959,0.29785512957028 0.26233892764947,0.72702448792228",
    "-0.70683725438887,-0.34837744803244 0.22938291282174,-0.24194023808692 0.26233892764947,0.72702448792228 -0.60483941282881,0.54672404453327",
  ],

  // Stickers pour les EDGES (2 stickers)
  // color2 est dessiné en premier (en dessous), color1 en second (pointé par la flèche)
  edge_stickers: {
    color2: "0.26772355841554,0.12064688682917 0.38999725701651,0.0024756201199928 0.39602760968253,0.2803131152464 0.27764020916861,0.41221383841928",
    color1: "-0.060798371182584,0.085519741743906 0.23148766678483,0.1284933931606 0.24140431753791,0.42006034475071 -0.043043473578544,0.36932114265504",
  },

  // Stickers pour les CORNERS (3 stickers)
  // color3 en haut, color2 à droite, color1 pointé (flèche monte plus haut : y2=0.15)
  corner_stickers: {
    color3: "0.069762634892813,-0.40055310630383 0.35631465900575,-0.37155574238262 0.22989504503556,-0.26899160019356 -0.070672067911445,-0.30316254205521",
    color2: "0.25574159890418,-0.24051446431584 0.38216121287436,-0.3430786065049 0.3885367992724,-0.049335097145258 0.26626310067143,0.068836169563924",
    color1: "-0.08213499741471,-0.26727361280859 0.21843211553229,-0.23310267094694 0.22895361729955,0.076247962932823 -0.063332420667871,0.033274311516127",
  },

  // Position Y du bout de la flèche (plus courte pour les corners)
  arrow_y2: {
    edge:   "0.48",
    corner: "0.15",
  },
};

/* =============================================================
   GÉNÉRATEUR SVG
   Construit un élément <svg> DOM à partir d'une carte.
   Utilise SVG_GEOMETRY pour tous les points fixes.
   ============================================================= */
function buildSVG(card) {
  const ns = "http://www.w3.org/2000/svg";

  // --- Racine SVG ---
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width",   "220");
  svg.setAttribute("height",  "220");
  svg.setAttribute("viewBox", "-0.9 -0.9 1.8 1.8");

  // --- Faces noires du cube ---
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

  // --- Stickers colorés ---
  const gStickers = document.createElementNS(ns, "g");
  gStickers.setAttribute("style", "opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round");

  // On choisit le bon set de stickers selon le type de pièce
  const stickerDef = card.piece_type === "corner"
    ? SVG_GEOMETRY.corner_stickers
    : SVG_GEOMETRY.edge_stickers;

  // Pour chaque sticker défini, on crée un polygone avec la couleur correspondante
  Object.entries(stickerDef).forEach(([colorKey, points]) => {
    const poly = document.createElementNS(ns, "polygon");
    poly.setAttribute("fill",   "#" + card[colorKey]);
    poly.setAttribute("stroke", "#000000");
    poly.setAttribute("points", points);
    gStickers.appendChild(poly);
  });
  svg.appendChild(gStickers);

  // --- Flèche (marker + line) ---
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
  line.setAttribute("x1",         "0.1");
  line.setAttribute("y1",         "0.8");
  line.setAttribute("x2",         "0.1");
  line.setAttribute("y2",         SVG_GEOMETRY.arrow_y2[card.piece_type]);
  line.setAttribute("stroke",     "#AAA");
  line.setAttribute("stroke-width", "0.06");
  line.setAttribute("marker-end", "url(#arrowhead)");
  svg.appendChild(line);

  return svg;
}

/* =============================================================
   UTILITAIRES
   ============================================================= */

// Mélange un tableau (Fisher-Yates). Retourne une copie, ne modifie pas l'original.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Formate un temps en millisecondes → "MM:SS.d"
function formatTime(ms) {
  const tenths = Math.floor(ms / 100);
  const d    = tenths % 10;
  const secs = Math.floor(tenths / 10) % 60;
  const mins = Math.floor(tenths / 600);
  return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}.${d}`;
}

// Retourne un label et une couleur selon le score (0-100)
function getGrade(score) {
  if (score === 100) return { label: "PERFECT",         color: "#00e676" };
  if (score >= 90)  return { label: "EXCELLENT",        color: "#00e5ff" };
  if (score >= 75)  return { label: "BIEN",             color: "#b2ff59" };
  if (score >= 50)  return { label: "MOYEN",            color: "#ffd740" };
  return               { label: "À RETRAVAILLER",   color: "#ff3c6e" };
}

/* =============================================================
   ÉTAT GLOBAL DU QUIZ
   Toutes les variables mutables sont ici pour être lisibles d'un coup.
   ============================================================= */
let deck        = [];   // cartes dans l'ordre actuel du run
let currentIdx  = 0;    // index de la carte affichée
let totalErrors = 0;    // erreurs cumulées sur tout le run
let cardErrors  = 0;    // erreurs sur la carte courante
let results     = [];   // { card, timeMs, attempts } — une entrée par carte résolue
let timerStart  = null; // timestamp performance.now() du début
let timerRaf    = null; // requestAnimationFrame handle

// Options lues au démarrage
let optRequeue = false;
let optRotate  = true;

/* =============================================================
   NAVIGATION ENTRE ÉCRANS
   ============================================================= */
const SCREENS = {
  start:   document.getElementById("screen-start"),
  quiz:    document.getElementById("screen-quiz"),
  results: document.getElementById("screen-results"),
};

function showScreen(name) {
  Object.entries(SCREENS).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
  });
}

// Raccourci getElementById
const $ = id => document.getElementById(id);

/* =============================================================
   TIMER — utilise requestAnimationFrame pour la fluidité
   ============================================================= */
function startTimer() {
  timerStart = performance.now();
  function tick() {
    const elapsed = performance.now() - timerStart;
    $("timer").textContent = formatTime(elapsed);
    timerRaf = requestAnimationFrame(tick);
  }
  timerRaf = requestAnimationFrame(tick);
}

function stopTimer() {
  cancelAnimationFrame(timerRaf);
  return performance.now() - timerStart;
}

/* =============================================================
   AFFICHAGE D'UNE CARTE
   ============================================================= */
function showCard(idx) {
  cardErrors = 0;

  const card = deck[idx];

  // Label de position
  $("position-label").textContent = card.position;

  // SVG
  const container = $("svg-container");
  container.innerHTML = "";
  container.appendChild(buildSVG(card));
  // Appliquer ou retirer la rotation selon l'option
  container.classList.toggle("rotating", optRotate);
  if (optRotate) {
    const deg = Math.floor(Math.random() * 360);
    container.querySelector("svg").style.transform = `rotate(${deg}deg)`;
  }

  // Réinitialiser l'input et le feedback
  const input = $("answer-input");
  input.value = "";
  input.classList.remove("shake", "correct");
  $("feedback").textContent = "";
  $("feedback").className   = "feedback";

  // Mise à jour HUD
  // Note : en mode requeue, deck.length peut augmenter → la barre recule (comportement voulu)
  $("progress-text").textContent      = `${idx + 1} / ${deck.length}`;
  $("progress-bar").style.width       = `${(idx / deck.length) * 100}%`;
  $("error-count").textContent        = totalErrors;

  // Ré-déclencher l'animation d'entrée de la carte
  const area = $("card-area");
  area.style.animation = "none";
  area.offsetHeight;           // force un reflow pour relancer l'animation
  area.style.animation = "";

  // Focus sur l'input (petit délai pour laisser le DOM se mettre à jour)
  setTimeout(() => input.focus(), 30);
}

/* =============================================================
   GESTION DE LA RÉPONSE UTILISATEUR
   Appelé à chaque frappe dans l'input.
   ============================================================= */
function onInput() {
  const input    = $("answer-input");
  const typed    = input.value.trim().toUpperCase();
  if (!typed) return;

  const expected = deck[currentIdx].letter.toUpperCase();

  if (typed === expected) {
    // ---- BONNE RÉPONSE ----
    const timeMs = performance.now() - timerStart - results.reduce((s, r) => s + r.timeMs, 0);
    // On enregistre le résultat de cette carte
    results.push({
      card:     deck[currentIdx],
      timeMs:   performance.now() - timerStart - results.reduce((s,r) => s + r.timeMs, 0),
      attempts: cardErrors + 1,
    });

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
    cardErrors++;
    totalErrors++;
    $("error-count").textContent = totalErrors;

    // Message : on montre ce que l'utilisateur a tapé, pas la bonne réponse
    $("feedback").textContent = `✗ Ce n'est pas "${typed}"`;
    $("feedback").className   = "feedback";

    // Shake visuel sur l'input
    input.classList.remove("shake");
    input.offsetHeight; // reflow pour relancer l'animation CSS
    input.classList.add("shake");
    input.value = "";
    setTimeout(() => input.classList.remove("shake"), 320);

    // Mode requeue : on retire la carte et on la réinsère aléatoirement après la position actuelle
    if (optRequeue) {
      const card = deck.splice(currentIdx, 1)[0];
      // Position aléatoire entre currentIdx+1 et la fin du deck
      const insertAt = currentIdx + 1 + Math.floor(Math.random() * (deck.length - currentIdx));
      deck.splice(insertAt, 0, card);
      // On affiche la prochaine carte (qui est maintenant à currentIdx puisque l'actuelle a été retirée)
      setTimeout(() => showCard(currentIdx), 320);
    }
  }
}

/* =============================================================
   DÉMARRAGE DU QUIZ
   ============================================================= */
function startQuiz() {
  // Lire les options depuis le DOM
  optRequeue = $("opt-requeue").checked;
  optRotate  = $("opt-rotate").checked;

  const countVal = document.querySelector('input[name="opt-count"]:checked').value;
  const count    = parseInt(countVal, 10);

  // Préparer le deck : shuffle puis slice aux N premières cartes
  deck        = shuffle(DECK.cards).slice(0, count);
  currentIdx  = 0;
  totalErrors = 0;
  results     = [];

  showScreen("quiz");
  startTimer();
  showCard(0);

  // On écoute l'input une seule fois (pas de doublons si on rejoue)
  const input = $("answer-input");
  input.removeEventListener("input", onInput);
  input.addEventListener("input", onInput);
}

/* =============================================================
   FIN DU QUIZ ET AFFICHAGE DES RÉSULTATS
   ============================================================= */
function endQuiz() {
  const totalMs = stopTimer();
  showScreen("results");
  renderResults(totalMs);
}

function renderResults(totalMs) {
  const totalCards   = results.length;
  const perfectCards = results.filter(r => r.attempts === 1).length;
  const scoreVal     = Math.round((perfectCards / totalCards) * 100);

  // Score et grade
  $("score-value").textContent = scoreVal;
  const g = getGrade(scoreVal);
  $("score-grade").textContent  = g.label;
  $("score-grade").style.color  = g.color;

  // Stats résumées
  $("stat-total-time").textContent = formatTime(totalMs);
  $("stat-errors").textContent     = totalErrors;
  $("stat-avg").textContent        = formatTime(totalMs / totalCards);

  // Tableau — trié par temps décroissant (les plus lentes en haut)
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
