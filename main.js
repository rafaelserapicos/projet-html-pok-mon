// Définir une classe pour un guerrier
class Guerrier {
    constructor(name, attack, precision, pointsDeVie) {
        this.nom = name;
        this.attack = attack;
        this.precision = precision;
        this.pointsDeVie = pointsDeVie;
    }

    // Méthode pour attaquer un adversaire
    attaquer(adversaire) {
        console.log(`${this.nom} attaque ${adversaire.nom}`);
        if (Math.random() < this.precision) {
            console.log(`${this.nom} inflige ${this.attack} points de dégâts`);
            adversaire.pointsDeVie -= this.attack;
        } else {
            console.log(`${this.nom} rate l'attaque`);
        }
    }

    // Afficher des points de vie
    afficherPointsDeVie() {
        console.log(`${this.nom} a ${this.pointsDeVie} points de vie`);
    }
}

// Caractéristiques des guerriers 
let guerrier1 = new Guerrier("Soldat romain", 150, 0.7, 30);
let guerrier2 = new Guerrier("Soldat gaulois", 140, 0.5, 55);

// Boucle de combat
while (guerrier1.pointsDeVie > 0 && guerrier2.pointsDeVie > 0) {
    guerrier1.attaquer(guerrier2);
    guerrier2.afficherPointsDeVie();

    if (guerrier2.pointsDeVie <= 0) {
        console.log(`${guerrier1.nom} remporte le duel`);
        break;
    }

    guerrier2.attaquer(guerrier1);
    guerrier1.afficherPointsDeVie();

    if (guerrier1.pointsDeVie <= 0) {
        console.log(`${guerrier2.nom} remporte le duel`);
        break;
    }
}
