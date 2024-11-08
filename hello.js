const readline = require('readline-sync');

// Créer un tableau vide pour stocker les tâches
let todoList = [];

// Créer l'objet tâche
let tache = {
    intitulé: '',
    dateLimite: '',
    statut: ''
};

// Fonction pour afficher le menu
function afficherMenu() {
    console.log("Que souhaitez-vous faire ?");
    console.log("1. Ajouter une tâche");
    console.log("2. Supprimer une tâche");
    console.log("3. Modifier une tâche");
    console.log("4. Mettre à jour le statut d'une tâche");
    console.log("5. Afficher la liste des tâches");
    console.log("6. Quitter");

    return readline.questionInt('Votre choix : ');
}

// Fonction pour ajouter une tâche
function ajouterTache() {
    let intitulé = readline.question('Intitulé de la tâche : ');
    let dateLimite = readline.question('Date limite (format: AAAA-MM-JJ) : ');

    // Créer la nouvelle tâche
    let nouvelleTache = {
        intitulé: intitulé,
        dateLimite: new Date(dateLimite), // Conversion de la date
        statut: 'en cours' // Statut par défaut
    };

    todoList.push(nouvelleTache);
    console.log('Tâche ajoutée avec succès !');
}

// Fonction pour supprimer une tâche
function supprimerTache() {
    afficherListe();
    let index = readline.questionInt('Entrez le numéro de la tâche à supprimer : ') - 1;
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        console.log('Tâche supprimée avec succès.');
    } else {
        console.log('Numéro de tâche invalide.');
    }
}

// Fonction pour modifier une tâche
function modifierTache() {
    afficherListe();
    let index = readline.questionInt('Entrez le numéro de la tâche à modifier : ') - 1;
    if (index >= 0 && index < todoList.length) {
        let nouvelleTache = todoList[index];

        // Demander les nouvelles informations
        nouvelleTache.intitulé = readline.question(`Nouvel intitulé (actuel : ${nouvelleTache.intitulé}) : `);
        nouvelleTache.dateLimite = new Date(readline.question(`Nouvelle date limite (actuelle : ${nouvelleTache.dateLimite.toISOString().split('T')[0]}) : `));

        console.log('Tâche modifiée avec succès !');
    } else {
        console.log('Numéro de tâche invalide.');
    }
}

// Fonction pour mettre à jour le statut d'une tâche
function mettreAJourStatut() {
    afficherListe();
    let index = readline.questionInt('Entrez le numéro de la tâche pour changer son statut : ') - 1;
    if (index >= 0 && index < todoList.length) {
        let nouveauStatut = readline.question('Entrez le nouveau statut (par exemple: terminé, en cours, en attente) : ');
        todoList[index].statut = nouveauStatut;
        console.log('Statut mis à jour avec succès !');
    } else {
        console.log('Numéro de tâche invalide.');
    }
}

// Fonction pour afficher la liste des tâches
function afficherListe() {
    if (todoList.length === 0) {
        console.log('Aucune tâche à afficher.');
    } else {
        todoList.forEach((tache, index) => {
            console.log(`${index + 1}. ${tache.intitulé} (Date limite: ${tache.dateLimite.toISOString().split('T')[0]}) (Statut: ${tache.statut})`);
        });
    }
}

// Fonction principale pour l'interface utilisateur
function interfaceUtilisateur() {
    let choix;
    do {
        choix = afficherMenu();
        switch (choix) {
            case 1:
                // Ajouter une tâche
                ajouterTache();
                break;
            case 2:
                // Supprimer une tâche
                supprimerTache();
                break;
            case 3:
                // Modifier une tâche
                modifierTache();
                break;
            case 4:
                // Mettre à jour le statut d'une tâche
                mettreAJourStatut();
                break;
            case 5:
                // Afficher la liste des tâches
                afficherListe();
                break;
            case 6:
                console.log("Au revoir !");
                break;
            default:
                console.log("Choix invalide.");
        }
    } while (choix !== 6);
}

// Appeler la fonction pour démarrer l'interface
interfaceUtilisateur();
