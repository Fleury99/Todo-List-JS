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

// Supprimer une tâche
function supprimerTache (indexTache) {
    todoList.splice(indexTache,1)
};

//modifier une tâche

function modifierTache(indexTache, nouvellesInformations) {
    todoList[indexTache] = {...todoList[indexTache],...nouvellesInformations};
}

//mettre à jour le statut de la tâche
function mettreAJourStatut(indexTache, nouveauStatut) {
    todoList[indexTache].statut = nouveauStatut;
};

//Afficher la Liste des tâches
function afficherListe(){
    for (i = 0; i < todoList.length; i++) {
        console.log(`${i+1}. ${todoList[i].intitule} (Date limite: ${todoList[i].dateLimite}) (Statut: ${todoList[i].statut})`);
    }
};
