const prompt = require("prompt-sync")();
function premier_affichage(){ 
    console.log("           .-.-._________.-.-.")
    console.log("           ._._.BIENVENUE._._.")
    let pseudo = prompt("   Entrer votre pseudo pendant le jeu: ") // on entre le pseudo
    console.log("                                             ")
    return pseudo
}
function Menu(){// on affiche le menu
    console.log("       _____________________________")
    console.log("       _________JEU DE CARTE________")
    console.log("            __________________")
    console.log("           | *******MENU******|")  
    console.log("           | 1) Jouer         |")  
    console.log("           | 2) Règle du jeu  |")
    console.log("           | 3) Quitter       |")  
    console.log("           |__________________|");    
    console.log("                                    ")
}
function proposition_menu(){ // on choisit l'un dans le menu
    var choix_de_menu = +prompt("Saisir votre choix: ")
    return choix_de_menu
}
function carte_aleatoire(){// on fait une carte aleatoire peut-être: feu,eau,plante
    var carte = ["feu","eau","plante"]
    return  carte[Math.floor(Math.random()*carte.length)]
}
function traitement_du_jeu(choix_de_menu, pseudo){
    let perso_gagnant = 0
    let robot_gagnant = 0
    let nombre_nul = 0
    if(choix_de_menu==1){
        for (let i = 1; i <= 3; i++) {
            console.log("       *******ROUND "+i+" *******")
            console.log("   Mettez sur la table vos cartes: ")
            let my_cards = prompt("-->"+pseudo+": ") // on stocke dans la my_cards= la carte que je donnne
            let pc = carte_aleatoire() // on stocke dans pc= la carte aléatoire
            console.log("-->Robot: "+pc) // on affiche la carte donner par le robot
            if(((my_cards=="feu") && (pc=="eau")) || ((my_cards=="eau") && (pc=="plante")) || ((my_cards=="plante") && (pc=="feu"))){
                console.log("   ==>> Robot gagne <<== ")
                robot_gagnant=robot_gagnant+1
                console.log("                               ")
            }
            if(((pc=="feu") && (my_cards=="eau")) || ((pc=="eau") && (my_cards=="plante")) || ((pc=="plante") && (my_cards=="feu"))){
                console.log("   ==>> "+pseudo+" gagne <<==")
                perso_gagnant=perso_gagnant+1
                console.log("                               ")
            }
            if(pc==my_cards){
                console.log("   ==>> NULL <<==")
                nombre_nul=nombre_nul+1
                console.log("                               ")
            }

        }
        console.log("   -----------STAT OF GAME-------- ")
        // on affiche le nombre victoire,defaite et null :recapitulation des 3 rounds successives
        console.log("Victoire: "+perso_gagnant+      "      Defaite: "+robot_gagnant +"        Null: "+nombre_nul)
        console.log("   -----------RESULTAT FINAL------")
        if(robot_gagnant>perso_gagnant){ // robot gagne
            console.log("                                        ")
            console.log('¤¤¤¤¤¤ Dommage, Vous êtes "PERDU" ¤¤¤¤¤')
            console.log("                                        ")
        }
        if(robot_gagnant<perso_gagnant){ // perso gagne
            console.log("                                        ")
            console.log('¤¤¤¤¤¤ Felicitations, Vous êtes "GAGNE" ¤¤¤¤¤')
            console.log("                                          ")
        }
        if(robot_gagnant==perso_gagnant){ // null
            console.log("                                        ")
            console.log("       ¤¤¤¤¤¤¤¤ NULL ¤¤¤¤¤¤¤")
            console.log("                       "); 
            console.log("           | *******END GAME******|")  
            console.log("           | 1) Rejouer           |")  
            console.log("           | 2) Quitter           |")  
            console.log("           |______________________|")
            let choix1 = prompt("entrez votre choix: ") // choix: peut être rejouer ou quitter
                if(choix1==1){
                    traitement_du_jeu(1, pseudo) // rejouer
                }
        }
       
        
    }
    
}
function regle_du_jeu(choix_de_menu){
    if(choix_de_menu==2){
        console.log("   1) Le jeu consiste des 3 cartes differentes (feu,eau,plante), chaque carte a leur pouvoir.")
        console.log("   2) Pendant ce jeu: il y a 3 manches: chaque manche peut être victoire, defaite et null.");
        console.log("   3) A chaque manche, vous donnez une carte que tu préfères.")
        console.log("   4) L'objectif c'est que ton pouvoir du carte est supérieur que l'autre carte en provenance du robot")
    }
}
// deroulement du jeu
function game(){
    let pseudo = premier_affichage()
    Menu()
    let choix_de_menu = proposition_menu()
    regle_du_jeu(choix_de_menu)
    traitement_du_jeu(choix_de_menu, pseudo)

}
game()

