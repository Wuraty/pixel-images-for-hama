const HAMA_COLORS = [
    { name: "Blanc (01)", r: 255, g: 255, b: 255 },
    { name: "Crème (02)", r: 240, g: 233, b: 177 },
    { name: "Jaune (03)", r: 242, g: 191, b: 0 },
    { name: "Orange (04)", r: 231, g: 82, b: 21 },
    { name: "Rouge (05)", r: 184, g: 26, b: 34 },
    { name: "Rose (06)", r: 226, g: 104, b: 140 },
    { name: "Violet (07)", r: 105, g: 54, b: 140 },
    { name: "Bleu Foncé (08)", r: 35, g: 60, b: 140 },
    { name: "Bleu (09)", r: 23, g: 45, b: 96 },
    { name: "Vert (10)", r: 35, g: 122, b: 62 },
    { name: "Vert Clair (11)", r: 84, g: 184, b: 130 },
    { name: "Marron (12)", r: 91, g: 53, b: 38 },
    { name: "Gris (17)", r: 133, g: 138, b: 141 },
    { name: "Noir (18)", r: 0, g: 0, b: 0 },
    { name: "Caramel (20)", r: 171, g: 79, b: 51 },
    { name: "Marron Clair (21)", r: 189, g: 112, b: 66 },
    { name: "Rose Mat (26)", r: 245, g: 171, b: 161 },
    { name: "Beige (27)", r: 238, g: 195, b: 153 },
    { name: "Marron Nounours (60)", r: 200, g: 120, b: 30 },
    { name: "Marron Glacé (76)", r: 178, g: 124, b: 82 },
    { name: "Abricot (79)", r: 245, g: 145, b: 90 },
    { name: "Gris Clair (70)", r: 178, g: 182, b: 185 },
    { name: "Aubergine (108)", r: 72, g: 30, b: 65 },
    { name: "Bleu Nuit (116)", r: 20, g: 30, b: 55 },
    { name: "Jaune Curry (122)", r: 215, g: 155, b: 55 },
    { name: "Vert Foncé (28)", r: 26, g: 61, b: 51 },
    { name: "Lie-de-vin (29)", r: 171, g: 35, b: 77 },
    { name: "Bordeaux (30)", r: 114, g: 35, b: 58 },
    { name: "Turquoise (31)", r: 52, g: 144, b: 161 },
    { name: "Fuchsia Néon (32)", r: 210, g: 40, b: 121 },
    { name: "Cerise (33)", r: 207, g: 30, b: 45 },
    { name: "Bleu Pétrole (83)", r: 15, g: 95, b: 120 },
    { name: "Eucalyptus (101)", r: 120, g: 150, b: 130 },
    { name: "Jaune Pastel (43)", r: 247, g: 235, b: 124 },
    { name: "Rouge Pastel (44)", r: 244, g: 129, b: 131 },
    { name: "Violet Pastel (45)", r: 170, g: 150, b: 202 },
    { name: "Bleu Pastel (46)", r: 120, g: 193, b: 228 },
    { name: "Vert Pastel (47)", r: 130, g: 206, b: 153 },
    { name: "Rose Pastel (48)", r: 244, g: 169, b: 205 },
    { name: "Rose Clair Pastel (95)", r: 250, g: 190, b: 205 },
    { name: "Lilas Pastel (96)", r: 195, g: 175, b: 215 },
    { name: "Glacier Pastel (97)", r: 175, g: 215, b: 235 },
    { name: "Menthe Pastel (98)", r: 180, g: 225, b: 200 },
    { name: "Rose Bonbon (121)", r: 235, g: 70, b: 130 },
    { name: "Or (61)", r: 203, g: 145, b: 65 },
    { name: "Argent (62)", r: 150, g: 155, b: 158 },
    { name: "Bronze (63)", r: 132, g: 104, b: 79 },
    { name: "Vert Forêt (102)", r: 75, g: 122, b: 71 },
    { name: "Jaune Clair (103)", r: 255, g: 255, b: 0 },
    { name: "Lime (104)", r: 120, g: 190, b: 33 },
    { name: "Abricot Clair (105)", r: 254, g: 165, b: 109 },
    { name: "Lavande Clair (106)", r: 214, g: 190, b: 250 },
    { name: "Lavande (107)", r: 158, g: 153, b: 245 },
    { name: "Cloudy Grey (109)", r: 133, g: 137, b: 116 },
    { name: "Matcha (110)", r: 130, g: 133, b: 112 },
    { name: "Dark Blush (111)", r: 138, g: 89, b: 79 },
    { name: "Rose Poudré (112)", r: 162, g: 132, b: 116 },
    { name: "Aqua (113)", r: 86, g: 147, b: 122 },
    { name: "Rouge Cerise (114)", r: 177, g: 43, b: 41 },
    { name: "Vert vif (115)", r: 91, g: 161, b: 86 },
    { name: "Gris souris (117)", r: 120, g: 120, b: 108 },
    { name: "Grenade (118)", r: 131, g: 65, b: 69 },
    { name: "Bleu Ciel (119)", r: 70, g: 135, b: 209 },
    { name: "Bleu Arctic (120)", r: 165, g: 171, b: 174 },
    { name: "Rouge Noël (22)", r: 209, g: 57, b: 63 },
    { name: "Jaune Néon (34)", r: 226, g: 242, b: 58 },
    { name: "Rouge Néon (35)", r: 255, g: 107, b: 114 },
    { name: "Bleu Néon (36)", r: 41, g: 87, b: 219 },
    { name: "Vert Néon (37)", r: 73, g: 204, b: 102 },
    { name: "Orange Néon (38)", r: 253, g: 145, b: 88 },
    { name: "Azure (49)", r: 55, g: 174, b: 214 },
    { name: "Perle (64)", r: 206, g: 206, b: 206 },
    { name: "Gris Foncé (71)", r: 91, g: 100, b: 108 },
    { name: "Café Frappé (75)", r: 224, g: 188, b: 164 },
    { name: "Blanc Calcaire (77)", r: 218, g: 220, b: 208 },
    { name: "Pêche (78)", r: 252, g: 194, b: 169 },
    { name: "Prune (82)", r: 163, g: 75, b: 123 },
    { name: "Vert Olive (84)", r: 106, g: 143, b: 63 },
    { name: "Rouge Transparent (13)", r: 184, g: 26, b: 34 },
    { name: "Jaune Transparent (14)", r: 242, g: 191, b: 0 },
    { name: "Bleu Foncé Transparent (15)", r: 23, g: 45, b: 96 },
    { name: "Vert Transparent (16)", r: 35, g: 122, b: 62 },
    { name: "Transparent (19)", r: 255, g: 255, b: 255 },
    { name: "Vert Phosphorescent (55)", r: 35, g: 122, b: 62 },
    { name: "Rouge Phosphorescent (56)", r: 184, g: 26, b: 34 },
    { name: "Rose Transparent (72)", r: 226, g: 104, b: 140 },
    { name: "Bleu Ciel Transparent (73)", r: 70, g: 135, b: 209 },
    { name: "Lilas Transparent (74)", r: 178, g: 111, b: 174 },
];
const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const widthRange = document.getElementById('widthRange');
const widthValue = document.getElementById('widthValue');
const heightRange = document.getElementById('heightRange');
const heightValue = document.getElementById('heightValue');
const gridCheck = document.getElementById('gridCheck');

let originalImage = null;

// Fonction pour mettre à jour l'affichage des chiffres et relancer le calcul
function updateAndProcess() {
    widthValue.innerText = widthRange.value;
    heightValue.innerText = heightRange.value;
    if (originalImage) processImage();
}

upload.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        originalImage = new Image();
        originalImage.onload = () => processImage();
        originalImage.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

widthRange.addEventListener('input', updateAndProcess);
heightRange.addEventListener('input', updateAndProcess);
gridCheck.addEventListener('change', processImage);

function getNearestColor(r, g, b) {
    let nearest = HAMA_COLORS[0];
    let minDistance = Infinity;

    for (let color of HAMA_COLORS) {
        // Formule de distance simple
        let distance = Math.sqrt(
            Math.pow(r - color.r, 2) +
            Math.pow(g - color.g, 2) +
            Math.pow(b - color.b, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearest = color;
        }
    }
    return nearest;
}

// Remplace toute ta fonction processImage par celle-ci
function processImage() {
    if (!originalImage) return;

    const w = parseInt(widthRange.value);
    const h = parseInt(heightRange.value);
    const zoom = 20; 

    // 1. BROUILLON & CALCUL COULEURS
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = w;
    tempCanvas.height = h;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(originalImage, 0, 0, w, h);
    
    const imageData = tempCtx.getImageData(0, 0, w, h);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const nearest = getNearestColor(imageData.data[i], imageData.data[i+1], imageData.data[i+2]);
        imageData.data[i] = nearest.r;
        imageData.data[i+1] = nearest.g;
        imageData.data[i+2] = nearest.b;
    }
    tempCtx.putImageData(imageData, 0, 0);

    // 2. VRAI CANVAS
    canvas.width = w * zoom;
    canvas.height = h * zoom;
    ctx.imageSmoothingEnabled = false; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dessin des perles
    ctx.drawImage(tempCanvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

    // 3. GRILLE PRO (Perles + Plaques)
    if (gridCheck.checked) {
        // --- COUCHE 1 : GRILLE DES PERLES (Motif répétitif) ---
        const patternCanvas = document.createElement('canvas');
        patternCanvas.width = zoom;
        patternCanvas.height = zoom;
        const pCtx = patternCanvas.getContext('2d');
        pCtx.strokeStyle = "rgba(100, 100, 100, 0.3)";
        pCtx.lineWidth = 1;
        pCtx.strokeRect(0, 0, zoom, zoom);
        
        const pattern = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // --- COUCHE 2 : DÉLIMITATION DES PLAQUES (Tous les 29 pixels) ---
        ctx.strokeStyle = "rgba(100, 100, 100, 0.8)"; // Ligne bien visible
        ctx.lineWidth = 2; // Un peu plus épaisse
        ctx.beginPath();

        // Lignes verticales des plaques
        for (let x = 0; x <= w; x += 29) {
            const posX = x * zoom;
            ctx.moveTo(posX, 0);
            ctx.lineTo(posX, canvas.height);
        }
        // Lignes horizontales des plaques
        for (let y = 0; y <= h; y += 29) {
            const posY = y * zoom;
            ctx.moveTo(0, posY);
            ctx.lineTo(canvas.width, posY);
        }
        ctx.stroke();
    }

    // 4. STATS (On garde ta logique)
    updateStats(w, h, imageData.data);

    // 5. STYLE MOBILE
    const displayWidth = Math.floor(window.innerWidth * 0.95);
    canvas.style.width = displayWidth + "px";
    canvas.style.height = "auto";
    canvas.style.imageRendering = "pixelated";
}

// Nouvelle version du bouton de téléchargement (Plus robuste sur mobile/Acode)
document.getElementById('downloadBtn').onclick = function() {
    if (!canvas) return;
    
    try {
        const dataUrl = canvas.toDataURL("image/png");
        const win = window.open();
        if (win) {
            win.document.write('<iframe src="' + dataUrl + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
        } else {
            // Si le pop-up est bloqué, on tente la méthode classique
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'mon_modele_hama.png';
            link.click();
        }
    } catch (e) {
        alert("L'image est trop grande pour être générée sur ce téléphone. Essaie de réduire la taille.");
    }
};

function updateStats(w, h, data) {
    const plaquesH = Math.ceil(w / 29);
    const plaquesV = Math.ceil(h / 29);
    const totalPlaques = plaquesH * plaquesV;

    // Affichage du besoin en plaques
    const statsPlaquesDiv = document.getElementById('statsPlaques');
    if (statsPlaquesDiv) {
        statsPlaquesDiv.innerHTML = `<strong>Besoin en plaques :</strong> ${totalPlaques} (${plaquesH} x ${plaquesV})`;
    }

    // Comptage des perles
    const counts = {};
    for (let i = 0; i < data.length; i += 4) {
        const key = `${data[i]},${data[i+1]},${data[i+2]}`;
        counts[key] = (counts[key] || 0) + 1;
    }

    // Génération de la liste des perles avec calcul des sachets et effets visuels
    let perlesHTML = "<strong>Liste des perles :</strong><br>";
    HAMA_COLORS.forEach(color => {
        const key = `${color.r},${color.g},${color.b}`;
        if (counts[key]) {
            const nbPerles = counts[key];
            const nbSachets = Math.ceil(nbPerles / 1000);
            
            // Logique pour les effets spéciaux
            const isTransparent = color.name.toLowerCase().includes("transparent");
            const isPhospho = color.name.toLowerCase().includes("phosphorescent");

            // Paramètres de style par défaut
            let opacity = "1";
            let glow = "1px 1px 2px black";
            let border = "";

            if (isTransparent) {
                opacity = "0.5";
                glow = "none";
                border = "border: 1px solid rgba(0,0,0,0.2); border-radius: 50%;";
            }

            if (isPhospho) {
                // Effet de lueur jaune/vert fluo pour les phosphorescentes
                glow = "0 0 10px rgba(200, 255, 0, 0.9), 0 0 3px rgba(0, 0, 0, 0.5)";
            }

            perlesHTML += `
                <div style="margin-bottom: 5px; display: flex; align-items: center;">
                    <span style="
                        color: rgb(${key}); 
                        opacity: ${opacity}; 
                        text-shadow: ${glow};
                        ${border}
                        width: 14px;
                        height: 14px;
                        display: inline-block;
                        text-align: center;
                        line-height: 14px;
                        margin-right: 8px;
                        font-size: 18px;
                    ">●</span> 
                    <span style="flex-grow: 1;">
                        ${color.name} : <strong>${nbPerles}</strong> 
                        <span style="color: #666; font-size: 0.85em; font-style: italic; margin-left: 5px;">
                            (${nbSachets} sachet${nbSachets > 1 ? 's' : ''})
                        </span>
                    </span>
                </div>`;
        }
    });

    const statsPerlesDiv = document.getElementById('statsPerles');
    if (statsPerlesDiv) {
        statsPerlesDiv.innerHTML = perlesHTML;
    }

    const divResultats = document.getElementById('resultats');
    if (divResultats) {
        divResultats.style.display = 'block';
    }
}