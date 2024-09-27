
let randomNumber = Math.floor(Math.random() * 100) + 1; // commentaire
let tablecritique = document.getElementById("ChoixTableCritique").value; // tablecritique prend la valeur du menu déroulant du select
let tablechance = document.getElementById("ChoixTableChance").value; // tablechance prend la valeur du menu déroulant du select
let ResultatEffetCritique = document.querySelector('.ResultatEffetCritique'); // ResultatEffetCritique sert à remplir le <p> correspondant
let ResultatChance = document.querySelector('.ResultatChance'); // ResultatEffetCritique sert à remplir le <p> correspondant
let selection = document.querySelector('.ChoixTable'); // selection sert à cibler le menu déroulant
let EffetCritiqueSubmit = document.querySelector('.EffetCritiqueSubmit'); // EffetCritiqueSubmit sert à cibler le bouton dans le form
let ChanceSubmit = document.querySelector('.ChanceSubmit'); // ChanceSubmit sert à cibler le bouton dans le form


function EffetCritique() {
  const d100 = Number(document.getElementById('D100').value);

  let indice;

  tablecritique = document.getElementById("ChoixTableCritique").value;
  if (tablecritique==="reussite") {
      const ListeReussites = [
  "Manœuvre ridicule. Tous les alliés avec une perception passive de 12 ou plus gagnent +2 au prochain jet", 
  "Timing retardé. Attaquer immédiatement le même adversaire avec un désavantage",
  "Grand Ouvert. Cible incapacitée pour le prochain tour. Pas de 1 ou de 2 au prochain jet de dégâts.",
  "Coup et Garde. +2CA pour 1 round. Pas de 1 ou de 2 au prochain jet de dégâts. ",
  "Découpage sauvage. Ignorer les résistances aux dégâts. Pas de 1 ou de 2 au prochain jet de dégâts.",
  "Représailles. Attaquer immédiatement le même adversaire. Pas de 1 ou de 2 au prochain jet de dégâts.",
  "Assaut impitoyable. Un dé de dégâts supplémentaire.",
  "Attaque défensive. +4 CA pour 1 round. Un dé de dégâts supplémentaire.",
  "Blessure traumatisante. Ignorer les résistances aux dégâts. Un dé de dégâts supplémentaire.",
  "Victimisé. L’adversaire provoque une attaque d’opportunité. Un dé de dégâts supplémentaire.",
  "Chute catastrophique. Jet de sauvegarde DD13 DEX ou chute à terre. Un dé de dégâts supplémentaire.",
  "Déboussolé. Jet de Sauvegarde DD 13 CON ou Etourdi pour 1 round. Un dé de dégâts supplémentaire.",
  "Poussière dans l'œil. Jet de Sauvegarde SAG DD 13 ou aveuglé pour 1 round. + 1 dé de dégâts.",
  "Hémorragie. 1d6 dégâts par round. Un dé de dégâts supplémentaire.",
  "Déroute. Avantagé en mêlée et le défenseur est désavantagé pour 1 round. +1 dé de dégâts.",
  "Les Dieux ont parlé. Lancez le dé de dégât 2 fois et prenez le meilleur résultat.",
  "Momentum. Attaquer immédiatement le même adversaire. Un dé de dégâts supplémentaire.",
  "Frappe puissante. Ignorer les résistances aux dégâts. Double Dégâts.",
  "Démonstration inspirante. Tous les alliés sont avantagés au prochain lancer. Double Dégâts.",
  "Vertigo. Fait tomber tous les objets en main. Repoussé à 1d4 +2 m. Jet de Sauv. DEX DD15 ou à terre. Dégâts x2.",
  "Reaction perplexe. Cible incapacitée 1 round, provoque attaques d’opportunité. Double Dégâts.",
  "…et reste à terre ! À terre et étourdi pendant 1 round. Jet de Sauvegarde DD 15 CON ou les déplacements sont réduits de moitié jusqu’au prochain repos. Double Dégâts.",
  "Contre astucieux. Attaquer immédiatement le même adversaire. Double Dégâts.",
  "Empalé. 1d10 dégâts d’hémorragie par round. Etourdi 1 round. Triple Dégâts.",
  "Conspiration. Le prochain coup est automatiquement critique. Aveuglé 1 round. Triple Dégâts.",
  "Démoralisé. À terre. Etourdi 2 rounds. Triple Dégâts.",
  "KO. Jet de Sauvegarde DD 16 CON ou inconscient. À terre. Etourdi 2 rounds. Triple Dégâts.",
  "Coup Ultime. Jet de Sauv. CON DD 18 ou mort. Projeté à terre à 1d4+2 m. Etourdi 3 rounds. Dégâts x4.",
  "Entrez un nombre entre 1 et 100"
  ];

  if (1 <= d100 && d100 <= 5) {
      indice = 0
      } else if (6 <= d100 && d100 <= 9) {
      indice=1
      } else if (10 <= d100 && d100 <= 15) {
      indice=2   
      } else if (16 <= d100 && d100 <= 19) {
      indice=3 
      } else if (20 <= d100 && d100 <= 25) {
      indice=4 
      } else if (26 <= d100 && d100 <= 29) {
      indice=5 
      } else if (30 <= d100 && d100 <= 35) {
      indice=6 
      } else if (36 <= d100 && d100 <= 39) {
      indice=7 
      } else if (40 <= d100 && d100 <= 45) {
      indice=8 
      } else if (46 <= d100 && d100 <= 49) {
      indice=9 
      } else if (50 <= d100 && d100 <= 53) {
      indice=10 
      } else if (54 <= d100 && d100 <= 56) {
      indice=11 
      } else if (57 <= d100 && d100 <= 59) {
      indice=12 
      } else if (60 <= d100 && d100 <= 63) {
      indice=13 
      } else if (64 <= d100 && d100 <= 65) {
      indice=14 
      } else if (d100 == 66) {
      indice=15 
      } else if (67 <= d100 && d100 <= 69) {
      indice=16 
      } else if (70 <= d100 && d100 <= 73) {
      indice=17 
      } else if (74 <= d100 && d100 <= 76) {
      indice=18 
      } else if (77 <= d100 && d100 <= 79) {
      indice=19 
      } else if (80 <= d100 && d100 <= 83) {
      indice=20 
      } else if (84 <= d100 && d100 <= 86) {
      indice=21 
      } else if (87 <= d100 && d100 <= 89) {
      indice=22 
      } else if (90 <= d100 && d100 <= 93) {
      indice=23 
      } else if (94 <= d100 && d100 <= 96) {
      indice=24 
      } else if (97 <= d100 && d100 <= 98) {
      indice=25 
      } else if (d100 == 99) {
      indice=26 
      } else if (d100 == 100) {
      indice=27 
      } else {
          indice=28
          };
      // alert(indice);
      ResultatEffetCritique.textContent = ListeReussites[indice]; // remplit le <p> correspondant    
  } else {
      const ListeEchecs = [
  "Seppuku. À terre. Désarmé (arme à 1d4+1 m). Etourdi 2 rounds. Coup critique sur soi-même.",
  "Échec Total. À terre. Désarmé (arme à 1d4+1 m). Etourdi 1 round. Coup critique sur soi-même.",
  "Contre prévisible. À terre. Désarmé. Etourdi 1 round. Dégâts sur soi-même.",
  "Bazar sanglant. Saigne 1d6 par round. Désarmé. Etourdi 1 round. Dégâts sur soi-même.",
  "Touché au ventre, souffle coupé. Dégâts sur soi-même. Incapacité pour 1 round.",
  "Faire pencher la balance. L’adversaire est avantagé et l’attaquant est désavantagé pour 1 round.",
  "Désarmement puissant. Désarmé (arme à 1d8+2 m). Désavantagé 1 round.",
  "Manoeuvre atroce. L’adversaire le plus proche obtient une attaque immédiate avantagée.",
  "Plus ils sont gros... Repoussé 1d4+1 m avant de tomber à terre.",
  "Maladresse. Désarmé. Désavantage au prochain jet de dé.",
  "Tomber la garde. L’adversaire le plus proche obtient une attaque immédiate.",
  "Vision troublée. Aveuglé 1 round.",
  "Perte de motivation. Le prochain jet de Sauvegarde échoue automatiquement.",
  "Coup partiel. Dégâts sur soi-même (réduits de moitié).",
  "Grand ouvert. Provoque une attaque d’opportunité de l’adversaire en mêlée le plus proche.",
  "Mauvais Karma. Le prochain jet de sauvegarde du combat est désavantagé.",
  "Réaction lente. Pas d’action bonus ou de réaction au prochain round.",
  "Récupération difficile. Dernier à jouer le prochain round.",
  "Rien d’inhabituel n’arrive.",
  "Entrez un nombre entre 1 et 100"
      ];

  if (d100 == 1) {
      indice = 0
      } else if (2 <= d100 && d100 <= 3) {
      indice=1
      } else if (4 <= d100 && d100 <= 6) {
      indice=2   
      } else if (7 <= d100 && d100 <= 9) {
      indice=3 
      } else if (10 <= d100 && d100 <= 16) {
      indice=4 
      } else if (17 <= d100 && d100 <= 19) {
      indice=5 
      } else if (20 <= d100 && d100 <= 23) {
      indice=6 
      } else if (24 <= d100 && d100 <= 26) {
      indice=7 
      } else if (27 <= d100 && d100 <= 29) {
      indice=8 
      } else if (30 <= d100 && d100 <= 33) {
      indice=9 
      } else if (34 <= d100 && d100 <= 36) {
      indice=10 
      } else if (37 <= d100 && d100 <= 39) {
      indice=11 
      } else if (40 <= d100 && d100 <= 45) {
      indice=12 
      } else if (46 <= d100 && d100 <= 49) {
      indice=13 
      } else if (50 <= d100 && d100 <= 55) {
      indice=14 
      } else if (56 <= d100 && d100 <= 60) {
      indice=15 
      } else if (61 <= d100 && d100 <= 67) {
      indice=16 
      } else if (68 <= d100 && d100 <= 80) {
      indice=17 
      } else if (81 <= d100 && d100 <= 100) {
      indice=18 
      } else {
          indice=19
          };
          ResultatEffetCritique.textContent = ListeEchecs[indice]; // remplit le <p> correspondant    
//        effet.textContent = ListeEchecs[0]; // remplit le <p> correspondant    
  }

document.getElementById('D100').value = "";
}

function EffetChance() {
    const D10 = Number(document.getElementById('D10').value);
    const D6 = Number(document.getElementById('D6').value);
    tablechance = document.getElementById("ChoixTableChance").value;
    
    let indice = (D10 - 1) * 6 + D6 - 1;

    if (tablechance === "chance") {
        const ListeChance = [
  "Réussir une attaque OU Trouver un raccourci ou une porte cachée",
  "Relancer une attaque OU Vous réussissez un jet de sauvegarde de mort",
  "Avantage sur un jet d'attaque OU Vous découvrez un défaut, une faiblesse, une vulnérabilité ou une résistance d'une créature",
  "+1d4 à un jet d'attaque OU Un ancien contact vous aide",
  "+1d6 à un jet d'attaque OU Vous vous souvenez d'une information pertinente utile dans votre situation actuelle",
  "+1d8 à un jet d'attaque OU Une créature casse ou perd un équipement",
  "+1d10 à un jet d'attaque OU Désamorcer un piège avec succès",
  "+1d12 à un jet d'attaque OU Une créature de votre choix fait une chute",
  "Transformer une attaque contre vous en échec OU Déverrouiller automatiquement une serrure banale",
  "Réussir un test de capacité OU Vous impressionnez quelqu'un que vous essayez de rallier à votre cause",
  "Choisissez votre place dans l'ordre d'initiative OU Une créature de votre choix est momentanément distraite",
  "Infligez le maximum de dégâts sur une attaque OU +1d20 à un test de capacité basé sur le Charisme",
  "Réussir un jet de sauvegarde OU Vous parvenez à éviter d'être détecté par une créature",
  "Avantage sur un jet de sauvegarde OU Donner un avantage sur un jet de sauvegarde à un allié",
  "+1d4 à un jet de sauvegarde OU Vous êtes capable d'improviser un outil ou un équipement pour votre objectif",
  "+1d6 à un jet de sauvegarde OU Vous voyez à travers un tour, un mensonge ou une illusion",
  "+1d8 à un jet de sauvegarde OU Vous êtes insensible à un poison ou une substance nocive que vous ingérez",
  "+1d10 à un jet de sauvegarde OU Vous gardez votre équilibre ou évitez une chute",
  "+1d12 à un jet de sauvegarde OU Vous gagnez un jeu ou un concours de compétence, d'esprit ou de logique",
  "Jusqu'à la fin de votre tour, vous ne provoquez pas d'attaques d'opportunité OU Vous parvenez à naviguer un terrain dangereux sans dommage",
  "Recevez la quantité maximale de guérison d'une seule source OU Vous trouvez quelqu'un ou quelque chose qui peut traiter une maladie qui vous afflige",
  "Obliger un attaquant à relancer une attaque OU Vous évitez de justesse l'activation d'un piège",
  "Vous trouvez deux fois plus de trésors que normalement OU Vous obtenez le meilleur prix possible lors de la vente d'un objet",
  "Votre attaque assomme votre cible OU Évitez de déclencher une alarme",
  "Vous vous déplacez à travers l'espace d'un ennemi sans provoquer d'attaque d'opportunité OU Vous réussissez à briser une porte banale",
  "Une créature devient étourdie après vous avoir attaqué OU Une personne avec qui vous interagissez vous apprécie instantanément",
  "Relancez un test de compétence OU Le MJ vous donne un indice ou une piste pour résoudre un problème",
  "Relancez un jet de sauvegarde OU Récupérez des matériaux ou des ingrédients qui seraient autrement consommés",
  "Vous bénéficiez des avantages d'un repos long après un repos court OU Vous récupérez un niveau d'épuisement après un repos court",
  "+1d4 à un test de compétence OU Vous obtenez un aperçu du fonctionnement d'un sort, d'un piège ou d'un dispositif",
  "+1d6 à un test de compétence OU Vous convainquez une créature que vous êtes expert dans une compétence de votre choix",
  "+1d8 à un test de compétence OU Vous infligez des dégâts doubles lors d'une attaque",
  "+1d10 à un test de compétence OU Vous pouvez prendre une action non-attaque supplémentaire lors de votre tour",
  "+1d12 à un test de compétence OU Vous accomplissez une tâche sans un outil qui serait normalement requis",
  "Ajoutez le double de votre bonus de maîtrise à un test de compétence, que vous soyez compétent ou non OU +1d20 à un test de compétence",
  "Votre attaque touche à la fois votre cible et une créature adjacente OU Vous obtenez l'avantage sur un test de compétence",
  "Vous évitez d'être surpris OU Vous repérez automatiquement un piège ou une embuscade",
  "+1d20 à un jet de sauvegarde OU Une créature se rend ou vous donne des informations volontiers, sans combattre",
  "Vous subissez des dégâts minimaux d'une seule source OU Vous réduisez de moitié les dégâts subis par un allié adjacent",
  "Vous transformez un coup critique contre vous en un coup normal OU Vous obtenez un avantage sur un test de compétence opposé",
  "Un allié adjacent peut faire une attaque contre une cible choisie OU Vous obtenez un indice ou découvrez un secret",
  "Votre attaque inflige 1d4 dégâts supplémentaires OU Une créature vous donne des conseils sur un problème",
  "Votre attaque inflige 1d6 dégâts supplémentaires OU +1d20 à un test de compétence basé sur la Dextérité",
  "Votre attaque inflige 1d8 dégâts supplémentaires OU +1d20 à un test de compétence basé sur la Force",
  "Votre attaque inflige 1d10 dégâts supplémentaires OU Vous réussissez un test de Performance",
  "Votre attaque inflige 1d12 dégâts supplémentaires OU Vous réussissez un test d'Intimidation",
  "Votre attaque inflige 1d20 dégâts supplémentaires OU Une créature fuit au lieu de s'engager avec vous",
  "Réduisez les dégâts d'une source unique de 1d4 OU Interrompez une créature avant qu'elle ne fasse quelque chose que vous (ou elle) pourriez regretter",
  "Réduisez les dégâts d'une source unique de 1d6 OU Vous évitez des effets environnementaux dangereux pendant un tour",
  "Réduisez les dégâts d'une source unique de 1d8 OU Vous gagnez des points de vie temporaires égaux à deux fois votre bonus de compétence",
  "Réduisez les dégâts d'une source unique de 1d10 OU Vous réussissez un test pour maintenir votre Concentration",
  "Réduisez les dégâts d'une source unique de 1d12 OU +1d20 à un test de compétence basé sur l'Intelligence",
  "Réduisez les dégâts d'une source unique de 1d20 OU +1d20 à un test de compétence basé sur la Sagesse",
  "Au lieu d'être réduit à 0 point de vie, vous êtes réduit à 1 point de vie OU Soyez guéri du poison ou de la maladie",
  "+1d20 à un jet d'attaque OU Un objet lancé pour attirer l'attention, faire tomber quelque chose, ou similaire, a l'effet désiré",
  "Vous évitez d'être étourdi OU Réduisez le nombre de créatures hostiles de moitié",
  "Trouvez automatiquement un endroit sûr pour vous reposer OU Découvrez automatiquement une source sûre de nourriture ou d'eau",
  "Vous vous relevez d'une position couchée sans dépenser de mouvement OU Surmontez automatiquement une condition",
  "Votre attaque aveugle votre cible OU Apprenez l'emplacement d'un secret ou d'une cachette",
  "Votre attaque endommage l'armure de votre cible et réduit son CA de 1 OU Un marchand a l'objet dont vous avez besoin"
        ];
         
  ResultatChance.textContent = ListeChance[indice]; // remplit le <p> correspondant  
    } else {
        const ListeMalchances = [
            "Vous manquez une attaque OU -1d20 à un test de Persuasion",
            "Relancez un jet d'attaque OU Un détail négligé vous oblige à refaire une tâche",
            "Désavantage sur un jet d'attaque OU Vous échouez à voir ou entendre quelque chose d'important",
            "-1d4 sur un jet d'attaque OU Vous attirez l'attention d'une créature plus puissante à proximité",
            "-1d6 sur un jet d'attaque OU Vous ne bénéficiez d'aucun avantage lors de votre prochain repos court",
            "-1d8 sur un jet d'attaque OU Quelque chose de précieux en votre possession est endommagé",
            "-1d10 sur un jet d'attaque OU Un incendie se déclenche à proximité",
            "-1d12 sur un jet d'attaque OU Vous perdez ou laissez tomber un équipement clé",
            "Une attaque manquée contre vous réussit maintenant OU Un risque que vous avez pris ne porte pas ses fruits",
            "Échec à un test d'habileté OU Vous vous embarrassez à un moment inopportun",
            "Vous agissez en dernier dans l'ordre d'initiative OU Vous perdez pied ou faites une chute",
            "Dégâts minimum lors d'une attaque OU Vous révélez accidentellement une faille ou un vice à quelqu'un qui pourrait en profiter",
            "Échouer un jet de sauvegarde OU Vous déclenchez un piège que vous n’aviez pas remarqué",
            "Désavantage sur un jet de sauvegarde OU Vous confondez quelqu’un avec quelqu’un d’autre",
            "-1d4 à un jet de sauvegarde OU Vous laissez tomber votre porte-monnaie, renversant son contenu",
            "-1d6 à un jet de sauvegarde OU Une capacité magique ou un sort tourne mal",
            "-1d8 à un jet de sauvegarde OU Vous vous souvenez d’un souvenir traumatisant qui vous fait hésiter",
            "-1d10 à un jet de sauvegarde OU Votre action a l’effet contraire à celui escompté",
            "-1d12 à un jet de sauvegarde OU Vous vous blessez accidentellement avec une arme ou un effet de sort",
            "Votre vitesse est divisée par deux pendant 1d2 tours OU Vous êtes repéré par quelqu’un que vous essayez d’éviter",
            "Jusqu'à la fin de votre tour, les attaques d'opportunité contre vous sont effectuées avec avantage OU Recevez le minimum de soins d’une seule source",
            "Votre coup ricoche et frappe une créature proche OU Votre sommeil est interrompu, peut-être par des cauchemars intenses ou une perturbation",
            "Vous subissez des dégâts de saignement continus à partir d'une attaque qui vous touche OU Un petit objet sur vous disparaît",
            "Vous découvrez que votre arme est en mauvais état ; elle inflige la moitié des dégâts jusqu'à ce que vous puissiez prendre le temps nécessaire pour en prendre soin OU Quelque chose d’insalubre vous infecte avec une maladie",
            "Une attaque qui vous touche vous étourdit jusqu'à la fin de votre prochain tour OU Une personne avec laquelle vous interagissez vous déteste de manière irrationnelle",
            "Un ennemi que vous combattez choisit de vous attaquer plutôt que d'autres cibles, dans la mesure du possible OU Une créature choisie sait toujours où vous êtes",
            "Relancer un test de capacité OU Vous n'ajoutez pas votre bonus de maîtrise à un test de capacité",
            "Relancer un jet de sauvegarde OU Vous confondez un danger avec quelque chose d’inoffensif",
            "Vos attaques sont effectuées avec un désavantage pendant 1d2 rounds OU Vous ne tirerez aucun bénéfice de votre prochain long repos",
            "-1d4 à un test de capacité OU Vos outils se cassent ou s'abîment pendant leur utilisation",
            "-1d6 à un test de capacité OU Vous confondez une potion avec une autre et vous la buvez",
            "-1d8 à un test de capacité OU Vous vous blessez accidentellement",
            "-1d10 à un test de capacité OU Une erreur que vous faites nuit à une autre créature",
            "-1d12 à un test de capacité OU Vous êtes convaincu qu'un test de capacité a réussi",
            "-1d20 à un test de capacité OU Vous perdez l'utilisation d'une compétence pendant 24 heures",
            "Désavantage sur un test de capacité OU -1d6 à une Sagesse (Perception) ou une Intelligence Vérification (d'enquête)",
            "Vous ne parvenez pas à repérer une embuscade OU -1d20 à un test de capacité basé sur l'Intelligence",
            "-1d20 à un jet de sauvegarde OU Vous êtes aveuglé pendant 1d2 tours",
            "Subissez un maximum de dégâts provenant d'une seule source OU -1d20 à un test de capacité basé sur la Force",
            "Une attaque vous inflige un coup critique OU Un de vos membres devient inutilisable pendant 1d2 tours",
            "Une attaque d'arme contre vous est empoisonnée OU Une substance que vous consommez vous empoisonne",
            "Vous subissez 1d4 dégâts supplémentaires d'une seule source OU Vous n'ajoutez pas votre bonus de maîtrise à un test nécessitant des outils",
            "Vous subissez 1d6 dégâts supplémentaires d'une seule source OU Vous avez un désavantage sur un test pour maintenir la concentration",
            "Vous subissez 1d8 dégâts supplémentaires d'une seule source OU Vous vomissez une potion que vous venez de consommer, la rendant inutile",
            "Vous subissez 1d10 dégâts supplémentaires d'une seule source OU -1d20 à un test de capacité basé sur la Dextérité",
            "Vous subissez 1d12 dégâts supplémentaires d'une seule source OU Vous perdez votre voix et êtes incapable de parler pendant 1d2 tours",
            "Vous subissez 1d20 dégâts supplémentaires d'une seule source OU Vous ne pouvez pas effectuer d'action de déplacement ce tour-ci",
            "-1d20 à un jet d'attaque OU Une substance que vous donnez à quelqu’un d’autre à consommer l’empoisonne",
            "Les pièces d’or que vous trouvez sont en fait des pièces de cuivre OU 2d20 pièces d'or vous sont volées",
            "Une porte ou un coffre déverrouillé que vous trouvez est, en revanche, verrouillé OU Lorsque vous essayez de crocheter une serrure, votre crochet se casse",
            "Vous subissez le double de dégâts lorsque vous êtes surpris OU Une créature hostile supplémentaire apparaît",
            "Vous ne trouvez pas d’endroit pour vous reposer OU Vous êtes attaqué et surpris par une créature pendant votre sommeil",
            "Une attaque qui vous frappe vous désarme OU Vous faites tomber un objet des mains de quelqu'un",
            "Une attaque qui vous touche vous met à terre",
            "Vous pouvez effectuer une action, vous déplacer OU effectuer une action bonus ce tour-ci OU Vous êtes assourdi pendant 1d2 tours",
            "Une attaque qui vous touche vous agrippe OU -1d20 à un test de capacité basé sur le Charisme",
            "Vous êtes effrayé par quelque chose que vous pouvez voir OU Vous êtes paralysé par la peur",
            "Un ennemi effectue une attaque supplémentaire contre vous OU L'un de vos alliés PNJ est en danger",
            "Une attaque qui vous touche vous rend incapable d'agir jusqu'à la fin de votre prochain tour OU Un allié PNJ essaie de se sauver au lieu de vous",
            "Vous ne parvenez pas à dégainer votre arme ou votre outil OU Vous endommagez accidentellement un objet qui ne vous appartient pas"
        ];
        
    ResultatChance.textContent = ListeMalchances[indice]; // remplit le <p> correspondant  
    };
  
    document.getElementById('D10').value = "";
    document.getElementById('D6').value = "";
}


function Reset() { // vide les lignes d'effets
  EffetCritique.textContent = "";
  table=""
}

EffetCritiqueSubmit.addEventListener('click', EffetCritique);
ChanceSubmit.addEventListener('click', EffetChance);
selection.addEventListener('change', Reset);
