# INFOS
Cette version qu'on appelle Noune (pour Jeu de la Noune) est à son départ une copie du dossier tapisvert.
Dépôt GitHub : https://github.com/alexreflexive/noune.git


# TODO

# GARDER A L'ESPRIT

- Les messages dans la messageBox doivent à terme partir depuis index.js et non depuis dialog.js.

# Règles pour les messages lors des commits
On distingue bien ce que relève du graphisme, le moteur de jeu, de ce qui relève de la logique de jeu.
Les premiers sont notés "GAMEENGINE : bla bla bla" et les seconds "LOGIC : bla bla bla."
Plus tard on distinguera également ce qui relève d'une modification, d'un ajout minime et du débogage.

# Nommage
Commandes - les boutons dans les fenêtres modales qui déterminent l'avancement de la partie.
Contrôles - Les boutons qui contrôlent les actions de jeu (fold, call, etc.)
Mode : Les contrôles sont actifs ou pas.
Status : Pot ouvert, tout le monde est au niveau ou pas, fin de l'enchère.
Phase : préflop, flop, etc.
