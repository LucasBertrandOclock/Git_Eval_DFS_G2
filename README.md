# Evaluation
- La notation se fait sur 20
- Si vous respectez les règles sans faire d'erreur, vous aurez la note maximale de 17
- Afin d'atteindre plus que 17, il faut dépasser les attentes demandées par le sujet (toujours concernant git)
- A savoir, si vous n'appliquez pas l'utilisation de la branche develop, vous aurez 2 points en moins

# Développez un jeu de votre choix
Vous pouvez développer un jeu de votre choix, l'objectif n'étant pas forcément qu'il soit terminé, mais que vous appliquiez au mieux les conseils qui vous ont été proposés tout au long de la formation.
Si vous n'avez pas d'idée particulière de jeu, je vous propose un jeu avec des règles simples ci-dessous.

# Développez un jeu du serpent
## Règles du jeu
Vous devez simuler un jeu du serpent en jeu de plateau entre deux joueurs. Vous devez réaliser une interface graphique. Ce jeu est un jeu de tour par tour avec lancement de dé.
  
Les joueurs lancent un dé (1-6) au tour par tour, ils doivent arriver à la case 50.
S'il dépasse 50, le joueur retourne directement à la case 25. Jusqu'à ce qu'un des deux gagne la partie.
Le jeu acclame le joueur par son nom à la fin.
Affichez l'avancement des joueurs au fur et à mesure des tours.
Votre objectif est de réaliser ce mini projet en équipe avec git, partagez-vous bien les tâches et concentrez-vous sur votre façon d'utiliser git et de collaborer.

## Fonctionnalités à implémenter
- Implémenter des cases bonus et malus : 3 cases pour avancer de X cases et 3 cases pour reculer de X cases sur le plateau (faites en sortes que ces cases ne puissent pas être les mêmes OU pour les expérimentés faites une génération de ces cases automatiques sans que ça puisse se chevaucher.)
- Proposez l'utilisation (une fois par joueur et par partie) d'un super dé (1-12) et si ce lancé tombe sur une case malus, celle-ci ne peut pas faire reculer le joueur.
- Proposez la possibilité d'ajouter plus de joueurs à une partie.
- Améliorez le jeu en y implémentant vos idées !

## Git - Evaluation
Ce qui sera évalué ici est essentiellement votre façon d'utiliser et exploiter git. Votre réalisation sera commentée sous forme de revue de code, mais je vais surtout regarder votre repo git, donc n'oubliez pas de m'en donner l'accès également (en lecture seulement si vous voulez) : cbrasseur (sur github) ou cdric.brasseur@gmail.com.
Vous devez mettre en place tout ce qu'on a vu durant la formation :
- Pensez à utiliser --no-ff pour que la branche reste toujours visible ! (si vous passez pas par develop surtout)
- Utilisez git sur vos deux ou trois postes pour versionner vos sources
- Collaborez en utilisant github (donnez vous les accès et donnez les moi égalament)
- Réalisés des commits qui respectent les conseils proposés (gimoji, action, explication du commit)
- Utilisez les branches et soyez cohérents dans vos merges.
- Mergez donc correctement
- Vous **devez** également avoir une branche develop intermédiaire
- Si nécessaire pensez à employer un stash
- Réalisez des pull requests pour mettre à jour le code sur la branche main distante.
- Assurez vous de toujours faire réaliser une revue de code pour chaque pull request (pas besoin de le forcer en ajoutant une règle)
- Pensez à faire un tag pour la version finale du jour au moins (ou même faire plusieurs versions, mais sur une journée c'est un peu overkill, pour pas dire inutile)
- ...
- /!\ Quelques éléments vus en cours ne sont pas expliqués ici (intentionnellement), à vous de faire en sorte de ne rien oublier !

Bonus git:
- Mettez en place les milestones, des issues git (sous forme de travail à réaliser et/ou sous forme de bugs)
- Pratiquez github project
- Assurez vous d'avoir un tag et une release qui explique bien votre code
