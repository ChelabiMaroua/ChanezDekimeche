// ============================================
// FICHIER: script.js - CORRIGÉ
// AUTEUR: Chanez Dekimeche
// PROJET: Sport Algérien - Module Info1Rb
// ============================================

// Variables globales pour l'animation
var animationActive = false;
var animationFrameId = null;
var starRotation = 0;
var pulseValue = 0;

// ============================================
// FONCTION 1: Affichage de l'heure et du jour
// ============================================
function updateTime() {
    var now = new Date();
    
    var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var jour = jours[now.getDay()];
    
    var jourNum = now.getDate();
    var mois = now.getMonth() + 1;
    var annee = now.getFullYear();
    
    var heures = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();
    
    if (heures < 10) heures = "0" + heures;
    if (minutes < 10) minutes = "0" + minutes;
    if (secondes < 10) secondes = "0" + secondes;
    
    var dateTexte = jour + " " + jourNum + "/" + mois + "/" + annee;
    var heureTexte = heures + ":" + minutes + ":" + secondes;
    var texteComplet = dateTexte + " - " + heureTexte;
    
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
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 3000);
    }
    
    return false;
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
            console.log("Erreur lecture vidéo");
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

function drawLogo() {
    var canvas = document.getElementById('logoCanvas');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    
    // Effacer
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. FOND : Rectangle vert avec dégradé
    var gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, '#006233');
    gradient.addColorStop(1, '#008044');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
    
    // 2. CERCLES CONCENTRIQUES
    ctx.beginPath();
    ctx.arc(200, 150, 80, 0, Math.PI * 2);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(200, 150, 60, 0, Math.PI * 2);
    ctx.strokeStyle = '#DA251D';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(200, 150, 40, 0, Math.PI * 2);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 3. ÉTOILE CENTRALE (5 branches)
    drawFivePointedStar(ctx, 200, 150, 30, 15);
    ctx.fillStyle = '#FFD700';
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 4. SILHOUETTE DE COUREUR
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
    
    // 5. COURONNE DE LAURIER
    drawLaurelWreath(ctx, 200, 150, 100);
    
    // 6. TEXTE
    ctx.font = 'bold 24px "Arial Black", Arial, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    
    // Ombre
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
    
    // 7. BORDURE
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 380, 280);
}

// ============================================
// FONCTION POUR DESSINER UNE ÉTOILE À 5 BRANCHES
// ============================================
function drawFivePointedStar(ctx, cx, cy, outerRadius, innerRadius) {
    ctx.beginPath();
    
    var angle = Math.PI / 2;
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
        
        // Feuille de laurier simple
        ctx.beginPath();
        ctx.ellipse(0, -12, 8, 12, 0, 0, Math.PI * 2);
        ctx.closePath();
        
        ctx.fillStyle = '#228B22';
        ctx.fill();
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Veine centrale
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -20);
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.restore();
    }
    
    ctx.restore();
}


// ============================================
// INITIALISATION
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
    
    // Cacher message validation
    var msg = document.getElementById('messageValidation');
    if (msg) {
        msg.style.display = 'none';
    }
    
    // Effets fade-in
    var fadeElems = document.getElementsByClassName('fade-in');
    for (var i = 0; i < fadeElems.length; i++) {
        fadeElems[i].style.opacity = '0';
        (function(elem) {
            setTimeout(function() {
                elem.style.opacity = '1';
            }, 100 + (i * 50));
        })(fadeElems[i]);
    }
}

// Démarrage
window.onload = initAll;