/*
30 questions -> tabQuestions

4 propositions: 
1-2-3-4 points
3 propositions
1- 2,5 -4 points
2 propositions
1-4 points

Scores:
30min 75milieu 120max
//!objet avec questions en cle et tabPropositions en value
//! tabDeReponse ->index qui correspond aux questions
*/ 

/* let quiz = {
    cle1 = 'Ma Première Question?'/ value1 = ['Réponse1', 'Réponse2', 'Réponse3'];
    cle2 = 'Ma Deuxième Question?'/ value2 = ['Réponse1', 'Réponse2'];
    cle3 = 'Ma Troisième Question?'/ value3 = ['Réponse1', 'Réponse2', 'Réponse3', 'Réponse4'];
    -> remettre un obj en value pour avoir Réponse en clé et score en value ? 
} */




    /* let quiz2 = {
    cle1 = 'Ma Première Question?'/ value1 = {
                                                clé1= Réponse1/ value = score1;
                                                clé2 = Réponse2/ value = score2;
                                                clé3 = réponse3 /value = score3;
                                            };
    cle2 = 'Ma Deuxième Question?'/ value2 = ['Réponse1', 'Réponse2'];
    cle3 = 'Ma Troisième Question?'/ value3 = ['Réponse1', 'Réponse2', 'Réponse3', 'Réponse4'];

    -> remettre un obj en value pour avoir Réponse en clé et score en value ? 
} */


/* let quiz = {
    "Etes-vous un trou du cul?" : {
        "Oui, je m'appelle Romaric" : 4,
        "Non, tout va bien pour moi" : 2.5,
        "J'essaye de faire mieux" : 1,
    },
    "Question deux?"  : {
        "réponse1" : 4,
        "réponse2" : 3 ,
        "réponse3" : 2 ,
        "réponse4" : 1,
    }
} */

tableauQuiz = [
    //(objetQuestion) 
    {
        question : "Etes-vous un trou de bal?",
        réponses : [
           //(objetRéponses1)
            {
                texteRéponse : "Oui je m'appelle Romaric",
            },
            //(objetRéponses2 
            {
                texteRéponse : "Non tout vas bien pour moi",
            },
            //objetRéponses3
            {
                texteRéponse : "J'essaye de faire mieux",
            },
        ],
    },
    {
        question : "Question 2 ?",
        réponses : [
            //objetRéponses1 
            {
                texteRéponse : "Oui je m'appelle Romaric",
            },
            // objetRéponses2
            {
                texteRéponse : "Non tout vas bien pour moi",
            },
        ],
    }
]

let tabDeReponseClient = ["Oui, je m'appelle Romaric", "réponse2"];

function enregistreReponse(formulaire){
    let repondu = [];
    // parcourir formulaire et pour chaque reponses:
    repondu.push(objRéponse); 
}
enregistreReponse(formulaire);

