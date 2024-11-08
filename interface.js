const readline = require('readline-sync');

// Your Pussy is not wet. I just want to raped

// Projet de TODOLIST Pour enregister les tâches à faire 

//Créer un tableau vide pour stocker les tâches
let todoList = [];

// Créer l'objet tâche
 let tache = {
    intitulé: '',
    dateLimite: '',
    statut: ''
 };

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

function interfaceUtilisateur() {
    let choix;
    do {
        choix = afficherMenu();
        switch (choix) {
            case 1:
                // Ajouter une tâche
                function ajouterTache (nouvelleTache) {
                    // on vérifie si le statut est spécifié dans la nouvelle tâche
                    // si non on lui attribue par défaut le statut "en cours" 
                    if (!nouvelleTache.statut){
                        nouvelleTache.statut ='en cours';
                    }
                    nouvelleTache.dateLimite = new Date(nouvelleTache.dateLimite);
                    todoList.push(nouvelleTache);
                };
                break;
            case 2:
                // Supprimer une tâche
                function supprimerTache (indexTache) {
                    todoList.splice(indexTache,1)
                };
                break;
            case 3: 
                //modifier une tâche
                function modifierTache(indexTache, nouvellesInformations) {
                    todoList[indexTache] = {...todoList[indexTache],...nouvellesInformations};
                }
                break;
            case 4:
                //mettre à jour le statut de la tâche
                function mettreAJourStatut(indexTache, nouveauStatut) {
                    todoList[indexTache].statut = nouveauStatut;
                };
                break;
            case 5:
                //Afficher la Liste des tâches
                function afficherListe(){
                    for (i = 0; i < todoList.length; i++) {
                        console.log(`${i+1}. ${todoList[i].intitule} (Date limite: ${todoList[i].dateLimite}) (Statut: ${todoList[i].statut})`);
                    }
                };
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