// ============================================
// FONCTION 1: Affichage de l'heure et du jour
// ============================================
function updateTime() {
    // Crée un nouvel objet Date avec l'heure actuelle
    var now = new Date();
    
    // Tableau des noms de jours (dimanche=0, lundi=1, etc.)
    var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    // Récupère le jour de la semaine (0-6) et le convertit en texte
    var jour = jours[now.getDay()];
    
    // Récupère le jour du mois (1-31)
    var jourNum = now.getDate();
    // Récupère le mois (0-11) et ajoute 1 car janvier = 0
    var mois = now.getMonth() + 1;
    // Récupère l'année complète (ex: 2024)
    var annee = now.getFullYear();
    
    // Récupère l'heure actuelle (0-23)
    var heures = now.getHours();
    // Récupère les minutes (0-59)
    var minutes = now.getMinutes();
    // Récupère les secondes (0-59)
    var secondes = now.getSeconds();
    
    // Formatage: ajoute un "0" devant si le nombre est < 10
    if (heures < 10) heures = "0" + heures;
    if (minutes < 10) minutes = "0" + minutes;
    if (secondes < 10) secondes = "0" + secondes;
    
    // Crée le texte de la date (ex: "Lundi 15/1/2024")
    var dateTexte = jour + " " + jourNum + "/" + mois + "/" + annee;
    // Crée le texte de l'heure (ex: "14:05:30")
    var heureTexte = heures + ":" + minutes + ":" + secondes;
    // Combine date et heure
    var texteComplet = dateTexte + " - " + heureTexte;
    
    // Sélectionne tous les éléments HTML avec la classe 'time-value'
    var timeElements = document.getElementsByClassName('time-value');
    // Parcourt tous les éléments trouvés
    for (var i = 0; i < timeElements.length; i++) {
        // Met à jour leur contenu avec l'heure complète
        timeElements[i].innerHTML = texteComplet;
    }
    
    // Retourne le texte complet (utile pour d'autres traitements)
    return texteComplet;
}

// ============================================
// FONCTION 2: Validation du formulaire
// ============================================
function validateForm() {
    // Récupère les éléments du formulaire par leur ID
    var nom = document.getElementById('nom');
    var email = document.getElementById('email');
    var sport = document.getElementById('sport');
    
    // Réinitialise les bordures rouges d'erreur
    if (nom) nom.style.borderColor = '';
    if (email) email.style.borderColor = '';
    if (sport) sport.style.borderColor = '';
    
    // Validation du nom: vérifie si le champ est vide (après suppression des espaces)
    if (nom && nom.value.trim() === '') {
        nom.style.borderColor = 'red'; // Met la bordure en rouge
        nom.focus(); // Place le curseur dans ce champ
        alert("Veuillez saisir votre nom");
        return false; // Empêche l'envoi du formulaire
    }
    
    // Validation de l'email
    if (email) {
        // Vérifie d'abord si le champ n'est pas vide
        if (email.value.trim() === '') {
            email.style.borderColor = 'red';
            email.focus();
            alert("Veuillez saisir votre email");
            return false;
        }
        
        // Expression régulière pour valider le format d'email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Teste si l'email correspond au format attendu
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'red';
            email.focus();
            alert("Email invalide");
            return false;
        }
    }
    
    // Validation du sport: vérifie si une option est sélectionnée
    if (sport && sport.value === '') {
        sport.style.borderColor = 'red';
        sport.focus();
        alert("Veuillez choisir un sport");
        return false;
    }
    
    // Si toutes les validations sont passées, affiche un message de succès
    var messageDiv = document.getElementById('messageValidation');
    if (messageDiv) {
        messageDiv.style.display = 'block'; // Affiche le message
        // Cache automatiquement le message après 3 secondes
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 3000);
    }
    
    // Retourne false pour empêcher l'envoi traditionnel du formulaire
    return false;
}

// ============================================
// FONCTION 3: Carousel d'images
// ============================================
// Variable globale qui garde en mémoire l'index de la slide actuelle
var currentSlide = 0;

// Fonction principale pour changer de slide
function changeSlide(n) {
    // Récupère toutes les slides et les points indicateurs
    var slides = document.getElementsByClassName('carousel-slide');
    var dots = document.getElementsByClassName('control-dot');
    
    // Si aucune slide n'existe, on quitte la fonction
    if (slides.length === 0) return;
    
    // Cache toutes les slides et désactive les points
    for (var i = 0; i < slides.length; i++) {
        // Supprime la classe 'active' des slides
        slides[i].className = slides[i].className.replace(' active', '');
        // Supprime la classe 'active' des points (si ils existent)
        if (dots[i]) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
    }
    
    // Gère le dépassement des limites (boucle infinie)
    if (n >= slides.length) currentSlide = 0; // Retour à la première slide
    else if (n < 0) currentSlide = slides.length - 1; // Aller à la dernière slide
    else currentSlide = n; // Mettre à jour l'index courant
    
    // Affiche la nouvelle slide active
    if (slides[currentSlide]) {
        slides[currentSlide].className += ' active'; // Ajoute la classe 'active'
        if (dots[currentSlide]) {
            dots[currentSlide].className += ' active'; // Active le point correspondant
        }
    }
}

// Fonction pour passer à la slide suivante
function nextSlide() {
    var slides = document.getElementsByClassName('carousel-slide');
    changeSlide(currentSlide + 1);
}

// Fonction pour revenir à la slide précédente
function prevSlide() {
    changeSlide(currentSlide - 1);
}

// ============================================
// FONCTION 4: Contrôle vidéo
// ============================================
// Fonction pour lancer la lecture de toutes les vidéos
function playVideo() {
    var videos = document.getElementsByTagName('video');
    // Parcourt toutes les vidéos de la page
    for (var i = 0; i < videos.length; i++) {
        try {
            videos[i].play(); // Démarre la lecture
        } catch(e) {
            console.log("Erreur lecture vidéo"); // Gère les erreurs silencieusement
        }
    }
}

// Fonction pour mettre en pause toutes les vidéos
function pauseVideo() {
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause(); // Met en pause la lecture
    }
}

// ============================================
// FONCTION 5: Navigation entre pages
// ============================================
// Tableau définissant l'ordre des pages dans la navigation
var pageOrder = [
    'index.html',
    'football.xhtml',
    'autres-sports.xhtml',
    'athletes.xhtml',
    'formulaire-contact.xhtml',
    'canvas.xhtml'
];

// Fonction pour aller à la page précédente
function goToPreviousPage() {
    // Récupère le nom du fichier de la page actuelle
    var currentPage = window.location.pathname.split('/').pop();
    // Trouve l'index de la page actuelle dans le tableau
    var idx = pageOrder.indexOf(currentPage);
    
    // Si on n'est pas sur la première page, aller à la précédente
    if (idx > 0) {
        window.location.href = pageOrder[idx - 1];
    } else {
        // Si on est sur la première page, aller à la dernière (boucle)
        window.location.href = pageOrder[pageOrder.length - 1];
    }
}

// Fonction pour aller à la page suivante
function goToNextPage() {
    var currentPage = window.location.pathname.split('/').pop();
    var idx = pageOrder.indexOf(currentPage);
    
    // Si on n'est pas sur la dernière page, aller à la suivante
    if (idx < pageOrder.length - 1) {
        window.location.href = pageOrder[idx + 1];
    } else {
        // Si on est sur la dernière page, retourner à la première (boucle)
        window.location.href = pageOrder[0];
    }
}

// ============================================
// FONCTION 6: Dessin Canvas 
// ============================================

// Fonction principale pour dessiner le logo
function drawLogo() {
    // Récupère l'élément canvas par son ID
    var canvas = document.getElementById('logoCanvas');
    // Si le canvas n'existe pas, on quitte la fonction
    if (!canvas) return;
    
    // Obtient le contexte 2D pour dessiner
    var ctx = canvas.getContext('2d');
    
    // Efface tout le contenu précédent du canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. FOND : Rectangle vert avec dégradé
    // Crée un dégradé linéaire du coin supérieur gauche au coin inférieur droit
    var gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, '#006233'); // Couleur de départ (vert foncé)
    gradient.addColorStop(1, '#008044'); // Couleur d'arrivée (vert plus clair)
    
    // Applique le dégradé comme couleur de remplissage
    ctx.fillStyle = gradient;
    // Dessine un rectangle qui remplit tout le canvas
    ctx.fillRect(0, 0, 400, 300);
    
    // 2. CERCLES CONCENTRIQUES
    // Premier cercle (blanc, rayon 80)
    ctx.beginPath(); // Commence un nouveau tracé
    ctx.arc(200, 150, 80, 0, Math.PI * 2); // Dessine un cercle complet
    ctx.strokeStyle = '#FFFFFF'; // Couleur du contour: blanc
    ctx.lineWidth = 3; // Épaisseur du trait
    ctx.stroke(); // Dessine le contour
    
    // Deuxième cercle (rouge, rayon 60)
    ctx.beginPath();
    ctx.arc(200, 150, 60, 0, Math.PI * 2);
    ctx.strokeStyle = '#DA251D'; // Rouge
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Troisième cercle (blanc, rayon 40)
    ctx.beginPath();
    ctx.arc(200, 150, 40, 0, Math.PI * 2);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 3. ÉTOILE CENTRALE (5 branches)
    // Dessine une étoile à 5 branches
    drawFivePointedStar(ctx, 200, 150, 30, 15);
    // Remplit l'étoile en or
    ctx.fillStyle = '#FFD700';
    ctx.fill();
    // Ajoute un contour blanc
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 4. SILHOUETTE DE COUREUR
    ctx.beginPath();
    // Tête (cercle)
    ctx.arc(200, 90, 8, 0, Math.PI * 2);
    // Corps (ligne verticale)
    ctx.moveTo(200, 98);
    ctx.lineTo(200, 130);
    // Bras gauche (ligne diagonale)
    ctx.moveTo(200, 110);
    ctx.lineTo(180, 100);
    // Bras droit (ligne diagonale)
    ctx.moveTo(200, 110);
    ctx.lineTo(220, 100);
    // Jambe gauche (ligne diagonale)
    ctx.moveTo(200, 130);
    ctx.lineTo(185, 160);
    // Jambe droite (ligne diagonale)
    ctx.moveTo(200, 130);
    ctx.lineTo(215, 160);
    
    // Style pour le coureur
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round'; // Arrondit les extrémités des lignes
    ctx.stroke();
    
    // 5. COURONNE DE LAURIER
    // Dessine une couronne de laurier autour du logo
    drawLaurelWreath(ctx, 200, 150, 100);
    
    // 6. TEXTE
    // Configure la police pour le texte
    ctx.font = 'bold 24px "Arial Black", Arial, sans-serif';
    ctx.fillStyle = '#FFFFFF'; // Texte blanc
    ctx.textAlign = 'center'; // Centre le texte horizontalement
    
    // Ajoute une ombre au texte
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    // Dessine le texte sur deux lignes
    ctx.fillText('SPORT', 200, 220); // Première ligne
    ctx.fillText('ALGÉRIEN', 200, 250); // Deuxième ligne
    
    // Réinitialise les paramètres d'ombre
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // 7. BORDURE
    // Ajoute une bordure dorée autour du logo
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    // Dessine un rectangle avec décalage pour créer une bordure intérieure
    ctx.strokeRect(10, 10, 380, 280);
}

// ============================================
// FONCTION POUR DESSINER UNE ÉTOILE À 5 BRANCHES
// ============================================
function drawFivePointedStar(ctx, cx, cy, outerRadius, innerRadius) {
    ctx.beginPath(); // Commence un nouveau tracé
    
    var angle = Math.PI / 2; // Angle initial (point vers le haut)
    var angleStep = Math.PI / 5; // Incrément d'angle (36 degrés)
    
    // Une étoile à 5 branches a 10 points (5 pointes extérieures et 5 intérieures)
    for (var i = 0; i < 10; i++) {
        // Alterne entre rayon extérieur et intérieur
        var radius = (i % 2 === 0) ? outerRadius : innerRadius;
        // Calcule les coordonnées x,y du point
        var x = cx + Math.cos(angle) * radius;
        var y = cy - Math.sin(angle) * radius;
        
        // Déplace le "crayon" au premier point
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            // Trace une ligne vers le point suivant
            ctx.lineTo(x, y);
        }
        
        // Passe à l'angle suivant
        angle += angleStep;
    }
    
    ctx.closePath(); // Rejoint le dernier point au premier
}

// ============================================
// FONCTION POUR DESSINER UNE COURONNE DE LAURIER
// ============================================
function drawLaurelWreath(ctx, cx, cy, diameter) {
    var radius = diameter / 2; // Rayon du cercle
    var leafCount = 12; // Nombre de feuilles
    var angleStep = (Math.PI * 2) / leafCount; // Angle entre chaque feuille
    
    // Sauvegarde l'état actuel du contexte
    ctx.save();
    // Déplace l'origine du dessin au centre du cercle
    ctx.translate(cx, cy);
    
    // Dessine chaque feuille
    for (var i = 0; i < leafCount; i++) {
        var angle = i * angleStep;
        // Position de la feuille sur le cercle
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;
        
        // Sauvegarde l'état avant de dessiner la feuille
        ctx.save();
        // Positionne et oriente le contexte pour cette feuille
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI/2); // Oriente la feuille vers l'extérieur
        
        // Dessine la forme de la feuille (une ellipse)
        ctx.beginPath();
        ctx.ellipse(0, -12, 8, 12, 0, 0, Math.PI * 2);
        ctx.closePath();
        
        // Remplit la feuille en vert
        ctx.fillStyle = '#228B22';
        ctx.fill();
        // Ajoute un contour plus foncé
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Dessine la veine centrale de la feuille
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -20);
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Restaure l'état du contexte pour la prochaine feuille
        ctx.restore();
    }
    
    // Restaure l'état original du contexte
    ctx.restore();
}

// ============================================
// INITIALISATION
// ============================================
function initAll() {
    // Heure: met à jour immédiatement puis toutes les secondes
    updateTime();
    setInterval(updateTime, 1000); // 1000ms = 1 seconde
    
    // Carousel auto: fait défiler automatiquement si plus d'une slide
    var slides = document.getElementsByClassName('carousel-slide');
    if (slides.length > 1) {
        setInterval(nextSlide, 5000); // Change de slide toutes les 5 secondes
    }
    
    // Cacher le message de validation au démarrage
    var msg = document.getElementById('messageValidation');
    if (msg) {
        msg.style.display = 'none';
    }
    
    // Effets fade-in progressifs
    var fadeElems = document.getElementsByClassName('fade-in');
    for (var i = 0; i < fadeElems.length; i++) {
        // Initialise l'opacité à 0 (invisible)
        fadeElems[i].style.opacity = '0';
        // Fonction auto-exécutante pour capturer la valeur de i
        (function(elem) {
            // Déclenche l'animation avec un délai progressif
            setTimeout(function() {
                elem.style.opacity = '1'; // Rend visible
            }, 100 + (i * 50)); // Délai croissant: 100ms, 150ms, 200ms...
        })(fadeElems[i]);
    }
}

// Démarrage: exécute initAll quand la page est complètement chargée
window.onload = initAll;