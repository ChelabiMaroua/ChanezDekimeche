// ============================================
// FICHIER : canvas-script.js
// PROJET : Sport Algérien - Logo Minimaliste
// DESIGN : "Algerian Sport Minimal"
// ============================================

// Variables pour le logo minimaliste
var logoState = {
    colors: {
        primary: '#006233',    // Vert algérien
        secondary: '#FFFFFF',  // Blanc
        accent: '#D21034',     // Rouge algérien
        gold: '#FFD700',       // Or
        silver: '#E0E0E0',     // Argent
        dark: '#2D3748'        // Gris foncé
    },
    isAnimating: false,
    animationId: null
};

// ============================================
// LOGO MINIMALISTE : "FENNEC ÉLÉGANT"
// ============================================
function drawMinimalistLogo() {
    var canvas = document.getElementById('sportLogoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    
    // Effacer le canvas avec fond épuré
    clearCanvasMinimal(ctx, canvas);
    
    // Dessiner le logo en plusieurs parties
    drawMinimalistBase(ctx);
    drawGeometricFennec(ctx);
    drawAbstractElements(ctx);
    drawMinimalistText(ctx);
    drawSubtleEffects(ctx);
    
    console.log("Logo minimaliste dessiné");
}

// ============================================
// FONCTIONS DE DESSIN MINIMALISTE
// ============================================

function clearCanvasMinimal(ctx, canvas) {
    // Fond très simple avec léger dégradé
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#FFFFFF');
    gradient.addColorStop(1, '#F8FAFC');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawMinimalistBase(ctx) {
    // Cercle extérieur très subtil
    ctx.save();
    
    // Cercle principal avec contour minimal
    ctx.beginPath();
    ctx.arc(300, 200, 150, 0, Math.PI * 2);
    ctx.strokeStyle = logoState.colors.dark;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.1;
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    // Cercle intérieur plus discret
    ctx.beginPath();
    ctx.arc(300, 200, 130, 0, Math.PI * 2);
    ctx.strokeStyle = logoState.colors.dark;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.05;
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    ctx.restore();
}

function drawGeometricFennec(ctx) {
    // Fennec géométrique et épuré
    ctx.save();
    ctx.translate(300, 200);
    
    // Corps du fennec (triangle arrondi)
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.quadraticCurveTo(15, -10, 0, -40);
    ctx.quadraticCurveTo(-15, -10, 0, 20);
    ctx.closePath();
    
    // Remplissage avec dégradé subtil
    var bodyGradient = ctx.createLinearGradient(-20, -40, 20, 40);
    bodyGradient.addColorStop(0, '#F5DEB3');
    bodyGradient.addColorStop(1, '#E8C9A0');
    ctx.fillStyle = bodyGradient;
    ctx.fill();
    
    // Contour très fin
    ctx.strokeStyle = logoState.colors.dark;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    // Oreilles géométriques
    drawMinimalEar(ctx, -12, -38, -0.3);
    drawMinimalEar(ctx, 12, -38, 0.3);
    
    // Queue élégante
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.bezierCurveTo(15, 30, 10, 50, 0, 40);
    ctx.bezierCurveTo(-10, 50, -15, 30, 0, 20);
    ctx.closePath();
    
    var tailGradient = ctx.createLinearGradient(-10, 20, 10, 50);
    tailGradient.addColorStop(0, '#F5DEB3');
    tailGradient.addColorStop(1, '#D4B483');
    ctx.fillStyle = tailGradient;
    ctx.fill();
    
    ctx.strokeStyle = logoState.colors.dark;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    // Yeux simples (points)
    ctx.fillStyle = logoState.colors.dark;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(-6, -15, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(6, -15, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    
    // Nez (petit triangle)
    ctx.beginPath();
    ctx.moveTo(-2, -8);
    ctx.lineTo(2, -8);
    ctx.lineTo(0, -5);
    ctx.closePath();
    ctx.fillStyle = '#8B4513';
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.globalAlpha = 1;
    
    ctx.restore();
}

function drawMinimalEar(ctx, x, y, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    // Oreille en triangle arrondi
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(6, -20);
    ctx.lineTo(-6, -20);
    ctx.closePath();
    
    var earGradient = ctx.createLinearGradient(-6, -20, 6, 0);
    earGradient.addColorStop(0, '#D2691E');
    earGradient.addColorStop(1, '#F5DEB3');
    ctx.fillStyle = earGradient;
    ctx.fill();
    
    ctx.strokeStyle = logoState.colors.dark;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    ctx.restore();
}

function drawAbstractElements(ctx) {
    // Éléments abstraits autour du fennec
    ctx.save();
    ctx.translate(300, 200);
    
    // Cercles concentriques abstraits
    ctx.globalAlpha = 0.03;
    for (var i = 0; i < 6; i++) {
        var radius = 80 + i * 15;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = logoState.colors.dark;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    ctx.globalAlpha = 1;
    
    // Points de repère géométriques
    var points = [
        {x: 0, y: -100, size: 3},
        {x: 86.6, y: -50, size: 2},   // 100 * cos(30°), 100 * sin(30°)
        {x: 86.6, y: 50, size: 2},
        {x: 0, y: 100, size: 3},
        {x: -86.6, y: 50, size: 2},
        {x: -86.6, y: -50, size: 2}
    ];
    
    points.forEach(function(point) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.size === 3 ? logoState.colors.primary : logoState.colors.accent;
        ctx.globalAlpha = point.size === 3 ? 0.4 : 0.2;
        ctx.fill();
    });
    ctx.globalAlpha = 1;
    
    // Lignes de connexion subtiles
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = logoState.colors.dark;
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    ctx.beginPath();
    ctx.moveTo(0, -100);
    ctx.lineTo(86.6, -50);
    ctx.lineTo(86.6, 50);
    ctx.lineTo(0, 100);
    ctx.lineTo(-86.6, 50);
    ctx.lineTo(-86.6, -50);
    ctx.closePath();
    ctx.stroke();
    
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    
    ctx.restore();
}

function drawMinimalistText(ctx) {
    // Texte épuré et élégant
    ctx.save();
    
    // Nom principal
    ctx.font = '300 28px "Helvetica Neue", Arial, sans-serif';
    ctx.fillStyle = logoState.colors.dark;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalAlpha = 0.9;
    ctx.fillText('SPORT ALGÉRIEN', 300, 330);
    
    // Sous-titre léger
    ctx.font = '300 14px "Helvetica Neue", Arial, sans-serif';
    ctx.fillStyle = logoState.colors.dark;
    ctx.globalAlpha = 0.5;
    ctx.fillText('EXCELLENCE & ÉLÉGANCE', 300, 355);
    
    // Petite mention
    ctx.font = '300 11px "Helvetica Neue", Arial, sans-serif';
    ctx.globalAlpha = 0.3;
    ctx.fillText('FENNEC ÉLÉGANT', 300, 370);
    
    ctx.globalAlpha = 1;
    ctx.restore();
}

function drawSubtleEffects(ctx) {
    // Effets très subtils pour la profondeur
    ctx.save();
    
    // Ombre légère sous le fennec
    ctx.shadowColor = 'rgba(0, 0, 0, 0.05)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    
    ctx.beginPath();
    ctx.arc(300, 200, 80, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
    ctx.fill();
    
    ctx.shadowColor = 'transparent';
    
    // Points lumineux très subtils
    var highlights = [
        {x: 220, y: 120, size: 20, opacity: 0.02},
        {x: 380, y: 120, size: 15, opacity: 0.015},
        {x: 300, y: 280, size: 25, opacity: 0.01}
    ];
    
    highlights.forEach(function(highlight) {
        ctx.beginPath();
        ctx.arc(highlight.x, highlight.y, highlight.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + highlight.opacity + ')';
        ctx.fill();
    });
    
    ctx.restore();
}

// ============================================
// ANIMATION MINIMALISTE
// ============================================
function animateMinimalLogo() {
    if (logoState.isAnimating) {
        cancelAnimationFrame(logoState.animationId);
        logoState.isAnimating = false;
    }
    
    var canvas = document.getElementById('sportLogoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    var startTime = Date.now();
    var duration = 4000; // 4 secondes
    
    logoState.isAnimating = true;
    
    function animate() {
        var currentTime = Date.now();
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        
        // Effet de fondu en ouverture
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dessiner le fond
        clearCanvasMinimal(ctx, canvas);
        
        // Animation de rotation très subtile
        ctx.save();
        ctx.translate(300, 200);
        ctx.rotate(progress * Math.PI * 0.5); // Rotation limitée à 90°
        ctx.translate(-300, -200);
        
        // Dessiner les éléments avec opacité animée
        ctx.globalAlpha = Math.min(progress * 2, 1);
        drawMinimalistBase(ctx);
        drawGeometricFennec(ctx);
        drawAbstractElements(ctx);
        
        // Texte qui apparaît progressivement
        if (progress > 0.5) {
            ctx.globalAlpha = (progress - 0.5) * 2;
            drawMinimalistText(ctx);
        }
        
        ctx.globalAlpha = 1;
        ctx.restore();
        
        // Effets spéciaux pour la fin
        if (progress > 0.8) {
            drawSubtleEffects(ctx);
        }
        
        if (progress < 1) {
            logoState.animationId = requestAnimationFrame(animate);
        } else {
            // Dessiner le logo final statique
            drawMinimalistLogo();
            logoState.isAnimating = false;
            logoState.animationId = null;
        }
    }
    
    logoState.animationId = requestAnimationFrame(animate);
}

// ============================================
// EFFETS SPÉCIAUX MINIMALISTES
// ============================================
function pulseEffect() {
    var canvas = document.getElementById('sportLogoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    var pulseSize = 0;
    var pulseOpacity = 0;
    var pulseDirection = 1;
    
    // Arrêter toute animation existante
    if (logoState.animationId) {
        cancelAnimationFrame(logoState.animationId);
    }
    
    function pulse() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMinimalistLogo();
        
        // Effet de pulse concentrique
        ctx.save();
        ctx.translate(300, 200);
        
        for (var i = 0; i < 3; i++) {
            var radius = 150 + pulseSize + i * 10;
            var opacity = pulseOpacity - i * 0.1;
            
            if (opacity > 0) {
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(0, 98, 51, ' + opacity + ')';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
        
        ctx.restore();
        
        // Mettre à jour les valeurs de pulse
        pulseSize += pulseDirection * 2;
        pulseOpacity += pulseDirection * 0.05;
        
        if (pulseSize > 30 || pulseOpacity > 0.3) {
            pulseDirection = -1;
        }
        
        if (pulseSize <= 0 && pulseOpacity <= 0) {
            pulseDirection = 1;
            logoState.animationId = null;
            drawMinimalistLogo();
            return;
        }
        
        logoState.animationId = requestAnimationFrame(pulse);
    }
    
    logoState.animationId = requestAnimationFrame(pulse);
}

function colorShiftMinimal() {
    // Palette de couleurs minimalistes alternatives
    var colorSchemes = [
        {primary: '#006233', secondary: '#FFFFFF', accent: '#D21034', dark: '#2D3748'},
        {primary: '#1E40AF', secondary: '#F8FAFC', accent: '#DC2626', dark: '#374151'},
        {primary: '#059669', secondary: '#F0FDF4', accent: '#7C3AED', dark: '#1F2937'},
        {primary: '#7C2D12', secondary: '#FFFBEB', accent: '#1E40AF', dark: '#292524'},
        {primary: '#1E3A8A', secondary: '#EFF6FF', accent: '#BE123C', dark: '#1E293B'}
    ];
    
    var randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    logoState.colors = randomScheme;
    
    // Effet de transition douce
    var canvas = document.getElementById('sportLogoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    var opacity = 0;
    
    // Arrêter toute animation existante
    if (logoState.animationId) {
        cancelAnimationFrame(logoState.animationId);
    }
    
    function transition() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dessiner l'ancien logo avec opacité décroissante
        if (opacity < 1) {
            ctx.globalAlpha = 1 - opacity;
            drawMinimalistLogo();
        }
        
        // Dessiner le nouveau logo avec opacité croissante
        ctx.globalAlpha = opacity;
        var tempColors = logoState.colors;
        logoState.colors = randomScheme;
        drawMinimalistLogo();
        logoState.colors = tempColors;
        
        ctx.globalAlpha = 1;
        
        opacity += 0.05;
        if (opacity < 1) {
            logoState.animationId = requestAnimationFrame(transition);
        } else {
            logoState.colors = randomScheme;
            drawMinimalistLogo();
            logoState.animationId = null;
        }
    }
    
    logoState.animationId = requestAnimationFrame(transition);
}

// ============================================
// FONCTIONS UTILITAIRES
// ============================================
function downloadMinimalLogo() {
    var canvas = document.getElementById('sportLogoCanvas');
    if (!canvas) return;
    
    // Arrêter les animations
    if (logoState.animationId) {
        cancelAnimationFrame(logoState.animationId);
        logoState.animationId = null;
    }
    
    // Créer un canvas temporaire pour le téléchargement
    var tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1200; // Haute résolution
    tempCanvas.height = 800;
    var tempCtx = tempCanvas.getContext('2d');
    
    // Mettre à l'échelle et dessiner
    tempCtx.scale(2, 2);
    var tempColors = logoState.colors;
    
    // Dessiner le logo en haute résolution
    clearCanvasMinimal(tempCtx, tempCanvas);
    logoState.colors = tempColors;
    
    // Redimensionner les fonctions de dessin
    tempCtx.save();
    tempCtx.translate(300, 200);
    drawMinimalistBase(tempCtx);
    drawGeometricFennec(tempCtx);
    drawAbstractElements(tempCtx);
    tempCtx.restore();
    
    // Ajouter le texte en haute résolution
    tempCtx.font = '300 56px "Helvetica Neue", Arial, sans-serif';
    tempCtx.fillStyle = logoState.colors.dark;
    tempCtx.textAlign = 'center';
    tempCtx.fillText('SPORT ALGÉRIEN', 300, 330);
    
    // Télécharger
    var link = document.createElement('a');
    link.download = 'logo-sport-algerien-minimal-' + Date.now() + '.png';
    link.href = tempCanvas.toDataURL('image/png');
    link.click();
    
    alert('Logo minimaliste téléchargé en haute résolution !');
}

function showLogoDetails() {
    var details = `
    ╔═══════════════════════════════════════════════╗
    ║        LOGO MINIMALISTE - SPORT ALGÉRIEN      ║
    ╠═══════════════════════════════════════════════╣
    ║                                               ║
    ║  🎨 DESIGN : "Fennec Élégant"                 ║
    ║  ✨ STYLE : Minimaliste & Sophistiqué         ║
    ║  🎯 ÉLÉMENTS :                                ║
    ║    • Fennec géométrique épuré                 ║
    ║    • Formes abstraites subtiles               ║
    ║    • Typographie élégante                     ║
    ║    • Palette de couleurs sobre                ║
    ║                                               ║
    ║  🛠️ TECHNIQUES :                             ║
    ║    • Courbes de Bézier                        ║
    ║    • Dégradés subtils                         ║
    ║    • Opacités contrôlées                      ║
    ║    • Effets de profondeur légers              ║
    ║                                               ║
    ║  📐 DIMENSIONS : 600×400 pixels               ║
    ║  🎬 ANIMATIONS : Oui (subtiles)               ║
    ║  🎨 COULEURS : Modifiables                    ║
    ║  💾 EXPORT : PNG haute qualité                ║
    ║                                               ║
    ║  👨‍🎨 CRÉATEUR : Chanez Dekimeche            ║
    ║  🏛️ PROJET : L1 Info - Université            ║
    ╚═══════════════════════════════════════════════╝
    `;
    
    alert(details);
}

function resetMinimalLogo() {
    // Arrêter toutes les animations
    if (logoState.animationId) {
        cancelAnimationFrame(logoState.animationId);
        logoState.animationId = null;
        logoState.isAnimating = false;
    }
    
    // Réinitialiser les couleurs
    logoState.colors = {
        primary: '#006233',
        secondary: '#FFFFFF',
        accent: '#D21034',
        gold: '#FFD700',
        silver: '#E0E0E0',
        dark: '#2D3748'
    };
    
    // Redessiner le logo
    drawMinimalistLogo();
    
    alert('Logo réinitialisé à son état original.');
}

// ============================================
// INITIALISATION
// ============================================
function initMinimalCanvas() {
    console.log('Initialisation du canvas minimaliste...');
    
    // Dessiner le logo au chargement
    drawMinimalistLogo();
    
    // Mettre à jour l'affichage de l'heure
    updateCanvasTime();
    
    console.log('Canvas minimaliste initialisé !');
}

function updateCanvasTime() {
    var timeElement = document.getElementById('currentTime');
    if (timeElement) {
        var now = new Date();
        timeElement.innerHTML = now.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) + ' · ' + now.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// ============================================
// ÉVÉNEMENTS AU CHARGEMENT
// ============================================
if (window.addEventListener) {
    window.addEventListener('load', initMinimalCanvas);
} else if (window.attachEvent) {
    window.attachEvent('onload', initMinimalCanvas);
} else {
    window.onload = initMinimalCanvas;
}