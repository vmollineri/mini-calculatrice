/* 
    Déclaration de fonctions
*/

let resultat;

function addition(nombreA, nombreB) {
    resultat = nombreA + nombreB;
    return resultat;
}

function multiplication(nombreA, nombreB) {
    resultat = nombreA * nombreB;
    return resultat;
}

function soustraction(nombreA, nombreB) {
    resultat = nombreA - nombreB;
    return resultat;
}

function division(nombreA, nombreB) {
    if (nombreDeux == 0) {
        throw new Error('Il est impossible de diviser par 0.');
    }
    
    resultat = nombreA / nombreB;
    return resultat;
}

/*
    Fin déclaration des fonctions
*/

let choix, restart = false;

do {
    do {
        choix = Number(prompt('Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n')); 
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);


    let nombreUn, nombreDeux;

    do {
        nombreUn = Number(prompt('Veuillez saisir votre premier nombre : '));
        nombreDeux = Number(prompt('Veuillez saisir votre deuxième nombre : '));
    } while (isNaN(nombreUn) || isNaN(nombreDeux));


    try {
        switch (choix) {
            case 1:
                resultat = addition(nombreUn, nombreDeux);
                break;
            case 2:
                resultat = multiplication(nombreUn, nombreDeux);
                break;
            case 3:
                resultat = soustraction(nombreUn, nombreDeux);
                break;
            case 4:
                resultat = division(nombreUn, nombreDeux);
                break;
            default:
                throw new Error('Oups une erreur est survenu !');
        }
        alert('Voici le résultat de votre opération : ' + resultat);

    } catch (error) {
        alert(error);
    }
    restart = confirm('Un autre calcul ?');
} while (restart);