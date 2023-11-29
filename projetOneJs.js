const prompt = require("prompt-sync")();

let choice = ""
let index = 0

console.log("Après vous être perdu dans la forêt du Risset et avoir passé la nuit à essayer de retrouver votre chemin, vous débouchez au petit matin hors de la forêt sur un petit sentier. Après quelques minutes de marche vous arrivez devant une taverne repondant au doux nom de Chez Karlus. voulez-vous entrer?")
choice = prompt("oui ou non ? ")
while (choice != "oui" && choice != "non") {
    choice = prompt("oui ou non ? ")
}
if (choice == "oui") {

    console.log(" Vous entrez dans la taverne. Epuisé, affamé, vous suppliez le tavernier, un certain Oliver, de vous offrir le gîte et le couvert. Ce dernier vous regarde d'un air dédégnieux et s'exclaffe : Mouaaahahaha!!! Sache qu'ici rien n'est gratuit. J'ai perdu un objet, si tu acceptes de le chercher pour moi je serais magnanime Mouhahaha!!! Voulez-vous l'aider? ")
    choice = prompt("oui ou non ? ")
    while (choice != "oui" && choice != "non") {
        choice = prompt("oui ou non ? ")
    }
    if (choice == "oui") {
        console.log(" Vous n'êtes pas totalement convaincu de la bienveillance du personnage mais n'ayant pas le choix vous acceptez de l'aider. il vous dit qu'il a perdu sa cigarette électronique. Vous semblez perplex, vous n'avez jamais entendu parlé de ce genre de chose. Fouillez la taverne, oui ou non?  ")
        choice = prompt("oui ou non ? ")
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non ? ")
        }
        if (choice == "oui") {
            console.log(" Vous passez deux bonnes heures à inspecter chaque piece de la bâtisse, en vain vous ne trouvez pas l'objet. Explorer l'extérieur oui ou non ?")
            choice = prompt("oui ou non ? ")
            while (choice != "oui" && choice != "non") {
                choice = prompt("oui ou non ? ")
            }
            if (choice == "oui") {
                console.log(" Vous décidez d'aller explorer l'extérieur de la taverne, après quelques minutes de recherche, vous trébuchez sur un petit objet noir avec une sorte d'appendice rond noir dessus. Vous appuyez dessus et un rire sournois retentit : AH AH AH AH !!! Retourner voir le tavernier oui ou non? ")
                choice = prompt("oui ou non ? ")
                while (choice != "oui" && choice != "non") {
                    choice = prompt("oui ou non ? ")
                }
                if (choice == "oui") {
                    console.log(" Hahaha! s'exclafe t-il, tu n'es peut-être pas si inutile que ça après tout. Peut-être va tu pouvoir me servir à quelque chose. Répond à cette énigme et tu pourras rester avec moi sinon MEURS!! : Je suis mieux que dieux, pire que le diable, les pauvres en ont, les riches en ont besoin et si j'en mange je meurs ? Attention tu n'as droit qu' à trois essais ")
                    choice = prompt(" Quelle est ta réponse? ")
                    while (choice != "rien" && index < 2) {

                        if (index < 2) {
                            choice = prompt(" Essai encore: ")
                            index++
                        }
                    }
                    if (choice == "rien") {
                        console.log("HA HA HA, tu as fais tes preuves petit effronté, tu vas pouvoir me servir pour le reste de ta vie!!! GAME OVER");
                    } else { console.log("MEEEEEUUUUUURRRT !!!! le tavernier sort son sabre et vous tranche la tête. GAME OVER ") }
                }
                else { console.log(" Vous pensez que cet objet sorti d'un autre temps doit avoir beaucoup de valeur, vous décider de le mettre dans votre poche et de partir en courrant. Sur votre chemin vous rencontrez un riche marchant qui vous en offre une fortune ainsi que sa fille en mariage. Vous achetez un chateau et vivez heureux le restant de vos jours !!! YOU WIN ") }
            } else { console.log("Vous retournez voir le tavernier les mains vides et ce dernier s'ecrit: Mouahahaha!!! Vaut rien!! Ce dernier sort son sabre et vous tranche la tête. Vous êtes mort. GAME OVER ") }
        } else {
            console.log(" Vous décidez d'aller explorer l'extérieur de la taverne, après quelques minutes de recherche, vous trébuchez sur un petit objet noir avec une sorte d'appendice rond noir dessus. Vous appuyez dessus et un rire sournois retentit : AH AH AH AH !!! Retourner voir le tavernier oui ou non? ")
            choice = prompt("oui ou non ? ")
            while (choice != "oui" && choice != "non") {
                choice = prompt("oui ou non ? ")
            }
            if (choice == "oui") {
                console.log(" Hahaha! s'exclafe t-il, tu n'es peut-être pas si inutile que ça après tout. Peut-être va tu pouvoir me servir à quelque chose. Répond à cette énigme et tu pourras rester avec moi sinon MEURS!! : Je suis mieux que dieux, pire que le diable, les pauvres en ont, les riches en ont besoin et si j'en mange je meurs ? Attention tu n'as droit qu' à trois essais ")
                choice = prompt(" Quelle est ta réponse? ")
                while (choice != "rien" && index < 2) {

                    if (index < 2) {
                        choice = prompt(" Essai encore: ")
                        index++
                    }
                }
                if (choice == "rien") {
                    console.log("HA HA HA, tu as fais tes preuves petit effronté, tu vas pouvoir me servir pour le reste de ta vie!!! GAME OVER");
                } else { console.log("MEEEEEUUUUUURRRT !!!! le tavernier sort son sabre et vous tranche la tête. GAME OVER ") }
            }
            else { console.log(" Vous pensez que cet objet sorti d'un autre temps doit avoir beaucoup de valeur, vous décider de le mettre dans votre poche et de partir en courrant. Sur votre chemin vous rencontrez un riche marchant qui vous en offre une fortune ainsi que sa fille en mariage. Vous achetez un chateau et vivez heureux le restant de vos jours !!! YOU WIN ") }
        }

    } else {
        console.log(" Vous faite un bras d'honneur au tavernier et vous lui lancer un : Vas-chier mec, plutôt crever!! Sortir en courrant de la taverne? ")
        choice = prompt("oui ou non ? ")
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non ? ")
        }
        if (choice == "oui") {
            console.log(" Effectivement, vous prenez vos jambes à votre cous mais vous trébuchez sur une chaise, en tombant vous vous coincez la tête dans un crachoir et mourez noyé dans d'atroces souffrances. GAME OVER ")
        } else { console.log(" Effectivement, le tavernier sors son sabre et vous tranche la tête. GAME OVER ") }
    }
} else {
    console.log(" Vous continuez votre chemin, vous marchez pendant des heures sans trouver âmes qui vivent. Affamé et épuisé vous vous effondrez et mourrez dans d'atroces souffrances. GAME OVER")
}
