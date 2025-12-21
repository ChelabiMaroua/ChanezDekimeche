
// ============================================
// FONCTION 1: Affichage de l'heure et du jour
// ============================================
function updateTime() {
    var now = new Date();
    
    // Noms des jours
    var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var jour = jours[now.getDay()];
    
    // Format date
    var jourNum = now.getDate();
    var mois = now.getMonth() + 1;
    var annee = now.getFullYear();
    
    // Format heure
    var heures = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();
    
    // Ajout zéro
    if (heures < 10) heures = "0" + heures;
    if (minutes < 10) minutes = "0" + minutes;
    if (secondes < 10) secondes = "0" + secondes;
    
    // Texte final
    var dateTexte = jour + " " + jourNum + "/" + mois + "/" + annee;
    var heureTexte = heures + ":" + minutes + ":" + secondes;
    var texteComplet = dateTexte + " - " + heureTexte;
    
    // Mise à jour (SANS querySelector)
    var timeElements = document.getElementsByClassName('time-value');
    for (var i = 0; i < timeElements.length; i++) {
        timeElements[i].innerHTML = texteComplet;
    }
    
    return texteComplet;
}

// ============================================
// FONCTION 2: Validation du formulaire
// ============================================
function validateForm() {
    var nom = document.getElementById('nom');
    var email = document.getElementById('email');
    var sport = document.getElementById('sport');
    var isValid = true;
    
    // Reset styles
    if (nom) nom.style.borderColor = '';
    if (email) email.style.borderColor = '';
    if (sport) sport.style.borderColor = '';
    
    // Validation nom
    if (nom && nom.value.trim() === '') {
        nom.style.borderColor = 'red';
        nom.focus();
        alert("Veuillez saisir votre nom");
        return false;
    }
    
    // Validation email
    if (email) {
        if (email.value.trim() === '') {
            email.style.borderColor = 'red';
            email.focus();
            alert("Veuillez saisir votre email");
            return false;
        }
        
        // Validation format email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'red';
            email.focus();
            alert("Email invalide");
            return false;
        }
    }
    
    // Validation sport
    if (sport && sport.value === '') {
        sport.style.borderColor = 'red';
        sport.focus();
        alert("Veuillez choisir un sport");
        return false;
    }
    
    // Message succès
    var messageDiv = document.getElementById('messageValidation');
    if (messageDiv) {
        messageDiv.style.display = 'block';
        
        // Timer pour cacher (SANS addEventListener)
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 3000);
    }
    
    return false; // Empêche envoi réel
}

// ============================================
// FONCTION 3: Carousel d'images
// ============================================
var currentSlide = 0;

function changeSlide(n) {
    var slides = document.getElementsByClassName('carousel-slide');
    var dots = document.getElementsByClassName('control-dot');
    
    if (slides.length === 0) return;
    
    // Cacher toutes les slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' active', '');
        if (dots[i]) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
    }
    
    // Gérer limites
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;
    
    // Afficher slide active
    if (slides[currentSlide]) {
        slides[currentSlide].className += ' active';
        if (dots[currentSlide]) {
            dots[currentSlide].className += ' active';
        }
    }
}

function nextSlide() {
    var slides = document.getElementsByClassName('carousel-slide');
    changeSlide(currentSlide + 1);
}

function prevSlide() {
    changeSlide(currentSlide - 1);
}

// ============================================
// FONCTION 4: Contrôle vidéo
// ============================================
function playVideo() {
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
        try {
            videos[i].play();
        } catch(e) {
            // Gestion erreur simple
        }
    }
}

function pauseVideo() {
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
}

// ============================================
// FONCTION 5: Navigation entre pages
// ============================================
var pageOrder = [
    'index.html',
    'football.xhtml',
    'autres-sports.xhtml',
    'athletes.xhtml',
    'formulaire-contact.xhtml',
    'canvas.xhtml'
];

function goToPreviousPage() {
    var currentPage = window.location.pathname.split('/').pop();
    var idx = pageOrder.indexOf(currentPage);
    
    if (idx > 0) {
        window.location.href = pageOrder[idx - 1];
    } else {
        window.location.href = pageOrder[pageOrder.length - 1];
    }
}

function goToNextPage() {
    var currentPage = window.location.pathname.split('/').pop();
    var idx = pageOrder.indexOf(currentPage);
    
    if (idx < pageOrder.length - 1) {
        window.location.href = pageOrder[idx + 1];
    } else {
        window.location.href = pageOrder[0];
    }
}

// ============================================
// FONCTION 6: Dessin Canvas
// ============================================
// ============================================
// FONCTIONS CANVAS AMÉLIORÉES
// Logo "Sport Algérien" - Design professionnel
// ============================================

function drawLogo() {
    var canvas = document.getElementById('logoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    
    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. FOND : Rectangle vert avec dégradé
    var gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, '#006233');    // Vert foncé
    gradient.addColorStop(1, '#008044');    // Vert clair
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
    
    // 2. CERCLES CONCENTRIQUES (effet cible)
    ctx.beginPath();
    ctx.arc(200, 150, 80, 0, Math.PI * 2);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(200, 150, 60, 0, Math.PI * 2);
    ctx.strokeStyle = '#DA251D'; // Rouge
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(200, 150, 40, 0, Math.PI * 2);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 3. ÉTOILE CENTRALE (5 branches, style olympique)
    drawFivePointedStar(ctx, 200, 150, 30, 15);
    ctx.fillStyle = '#FFD700'; // Or
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 4. SYMBOLE SPORTIF (silhouette de coureur)
    ctx.beginPath();
    // Tête
    ctx.arc(200, 90, 8, 0, Math.PI * 2);
    // Corps
    ctx.moveTo(200, 98);
    ctx.lineTo(200, 130);
    // Bras gauche
    ctx.moveTo(200, 110);
    ctx.lineTo(180, 100);
    // Bras droit
    ctx.moveTo(200, 110);
    ctx.lineTo(220, 100);
    // Jambe gauche
    ctx.moveTo(200, 130);
    ctx.lineTo(185, 160);
    // Jambe droite
    ctx.moveTo(200, 130);
    ctx.lineTo(215, 160);
    
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    // 5. LAURIER (couronne de victoire)
    drawLaurelWreath(ctx, 200, 150, 100);
    
    // 6. TEXTE "SPORT ALGÉRIEN" avec effet
    ctx.font = 'bold 24px "Arial Black", Arial, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    
    // Ombre portée
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.fillText('SPORT', 200, 220);
    ctx.fillText('ALGÉRIEN', 200, 250);
    
    // Réinitialiser l'ombre
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // 7. BORDURE DÉCORATIVE
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 380, 280);
}

// ============================================
// FONCTION POUR DESSINER UNE ÉTOILE À 5 BRANCHES
// ============================================
function drawFivePointedStar(ctx, cx, cy, outerRadius, innerRadius) {
    ctx.beginPath();
    
    var angle = Math.PI / 2;  // Commence en haut
    var angleStep = Math.PI / 5;
    
    for (var i = 0; i < 10; i++) {
        var radius = (i % 2 === 0) ? outerRadius : innerRadius;
        var x = cx + Math.cos(angle) * radius;
        var y = cy - Math.sin(angle) * radius;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        angle += angleStep;
    }
    
    ctx.closePath();
}

// ============================================
// FONCTION POUR DESSINER UNE COURONNE DE LAURIER
// ============================================
function drawLaurelWreath(ctx, cx, cy, diameter) {
    var radius = diameter / 2;
    var leafCount = 12;
    var angleStep = (Math.PI * 2) / leafCount;
    
    ctx.save();
    ctx.translate(cx, cy);
    
    for (var i = 0; i < leafCount; i++) {
        var angle = i * angleStep;
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI/2);
        
        // Dessiner une feuille de laurier
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-8, -15, -5, -25, 0, -30);
        ctx.bezierCurveTo(5, -25, 8, -15, 0, 0);
        ctx.closePath();
        
        ctx.fillStyle = '#228B22'; // Vert forêt
        ctx.fill();
        ctx.strokeStyle = '#006400'; // Vert foncé
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Veine centrale de la feuille
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -25);
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.restore();
    }
    
    ctx.restore();
}

// ============================================
// FONCTION POUR ANIMER LE LOGO
// ============================================
function animateLogo() {
    var canvas = document.getElementById('logoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    var rotation = 0;
    var pulse = 0;
    var direction = 1;
    
    function animate() {
        // Effacer
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 1. FOND avec effet de pulsation
        var pulseValue = 10 * Math.sin(pulse);
        var gradient = ctx.createLinearGradient(0, 0, 400, 300);
        gradient.addColorStop(0, '#006' + (33 + pulseValue).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, '#008' + (44 + pulseValue).toString(16).padStart(2, '0'));
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 400, 300);
        
        // 2. CERCLES CONCENTRIQUES animés
        ctx.save();
        ctx.translate(200, 150);
        
        // Cercle extérieur (rotation)
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.arc(0, 0, 80, 0, Math.PI * 2);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.rotate(-rotation);
        
        // Cercle moyen (pulsation)
        var scale = 1 + 0.1 * Math.sin(pulse);
        ctx.scale(scale, scale);
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 2);
        ctx.strokeStyle = '#DA251D';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.scale(1/scale, 1/scale);
        
        // Cercle intérieur (rotation inverse)
        ctx.rotate(-rotation);
        ctx.beginPath();
        ctx.arc(0, 0, 40, 0, Math.PI * 2);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.restore();
        
        // 3. ÉTOILE CENTRALE (effet brillant)
        drawFivePointedStar(ctx, 200, 150, 30, 15);
        
        // Effet de brillance sur l'étoile
        var shineGradient = ctx.createRadialGradient(200, 150, 5, 200, 150, 35);
        shineGradient.addColorStop(0, '#FFEE44'); // Jaune brillant
        shineGradient.addColorStop(1, '#FFD700'); // Or
        
        ctx.fillStyle = shineGradient;
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 4. COUREUR (animation course)
        ctx.save();
        var legAngle = 0.5 * Math.sin(pulse * 2); // Mouvement de jambes
        
        // Tête
        ctx.beginPath();
        ctx.arc(200, 90, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        
        // Corps
        ctx.moveTo(200, 98);
        ctx.lineTo(200, 130);
        
        // Bras (balancement)
        var armAngle = 0.3 * Math.sin(pulse);
        ctx.moveTo(200, 110);
        ctx.lineTo(200 - 20 * Math.cos(armAngle), 110 - 10 * Math.sin(armAngle));
        
        ctx.moveTo(200, 110);
        ctx.lineTo(200 + 20 * Math.cos(armAngle), 110 + 10 * Math.sin(armAngle));
        
        // Jambes (course)
        ctx.moveTo(200, 130);
        ctx.lineTo(200 - 15, 160 + 10 * Math.sin(legAngle));
        
        ctx.moveTo(200, 130);
        ctx.lineTo(200 + 15, 160 - 10 * Math.sin(legAngle));
        
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        ctx.restore();
        
        // 5. LAURIER statique
        drawLaurelWreath(ctx, 200, 150, 100);
        
        // 6. TEXTE avec effet de brillance
        ctx.font = 'bold 24px "Arial Black", Arial, sans-serif';
        ctx.textAlign = 'center';
        
        // Effet de brillance sur le texte
        var textShine = Math.sin(pulse) * 0.2 + 0.8;
        ctx.fillStyle = 'rgba(255, 255, 255, ' + textShine + ')';
        
        // Ombre animée
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 5 + 2 * Math.sin(pulse);
        ctx.shadowOffsetX = 2 + Math.sin(pulse);
        ctx.shadowOffsetY = 2 + Math.sin(pulse);
        
        ctx.fillText('SPORT', 200, 220);
        ctx.fillText('ALGÉRIEN', 200, 250);
        
        // Réinitialiser l'ombre
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // 7. BORDURE avec effet de pulsation
        var borderPulse = 2 * Math.sin(pulse);
        ctx.strokeStyle = '#FFD' + (700 + borderPulse * 100).toString().padStart(3, '0');
        ctx.lineWidth = 4 + Math.sin(pulse);
        ctx.strokeRect(10 + Math.sin(pulse), 10 + Math.sin(pulse), 
                      380 - 2 * Math.sin(pulse), 280 - 2 * Math.sin(pulse));
        
        // Mettre à jour les animations
        rotation += 0.01;
        pulse += 0.05;
        
        // Limiter la rotation
        if (rotation > Math.PI * 2) rotation = 0;
        
        // Continuer l'animation
        setTimeout(animate, 50);
    }
    
    animate();
}

// ============================================
// FONCTION POUR EFFACER LE CANVAS
// ============================================
function clearCanvas() {
    var canvas = document.getElementById('logoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Afficher un message
    ctx.font = '20px Arial';
    ctx.fillStyle = '#006233';
    ctx.textAlign = 'center';
    ctx.fillText('Canvas effacé - Cliquez sur "Dessiner"', 200, 150);
}

// ============================================
// FONCTION POUR TÉLÉCHARGER LE LOGO
// ============================================
function downloadLogo() {
    var canvas = document.getElementById('logoCanvas');
    if (!canvas) return;
    
    var link = document.createElement('a');
    link.download = 'logo-sport-algerien.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// ============================================
// INITIALISATION (SANS addEventListener)
// ============================================
function initAll() {
    // Heure
    updateTime();
    setInterval(updateTime, 1000);
    
    // Carousel auto
    var slides = document.getElementsByClassName('carousel-slide');
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }
    
    // Canvas
    var canvas = document.getElementById('logoCanvas');
    if (canvas) {
        drawLogo();
    }
    
    // Cacher message validation
    var msg = document.getElementById('messageValidation');
    if (msg) {
        msg.style.display = 'none';
    }
    
    // Effets fade-in (simple)
    var fadeElems = document.getElementsByClassName('fade-in');
    for (var i = 0; i < fadeElems.length; i++) {
        fadeElems[i].style.opacity = '0';
        (function(elem) {
            setTimeout(function() {
                elem.style.opacity = '1';
            }, 100);
        })(fadeElems[i]);
    }
}

window.onload = initAll;