# Installation du bot

1. Cloner ce répertoire avec la commande `git clone https://github.com/Guscraftin/base-bot.git`  
*Vous devez avoir installé git sur votre machine. Si votre machine ne reconnait la commande **git**, installez la via ce lien : https://git-scm.com/download/. Une fois git installé, ouvrez **Git Bash** pour exécuter les commandes git.*

2. Allez à la racine du répertoire que vous venez de télécharger (avec la commande `cd base-bot`) et tapez la commande : `npm i`  
*Vous devez avoir installé nodejs sur votre machine. Si votre machine ne reconnait la commande **npm**, installez la via ce lien : https://nodejs.org/fr/download/*

3. Changez les trois variables dans `config.json`

4. Pour obtenir ces valeurs, suivez ces étapes :

   1. Rendez-vous sur https://discord.com/developers/applications et créez une nouvelle application en cliquant sur le bouton en haut à droite. Entrez le nom de votre bot et acceptez les conditions d'utilisation, puis cliquez sur "Create".
   2. Dans la section "Bot", cliquez sur "Reset Token", puis sur le bouton "Copier" pour copier le token du bot qui s'affiche. Remplacez 'Mettre-ici-le-token-du-bot' par ce token dans le fichier `config.json`.
   3. Dans la section "OAuth2", cliquez sur "Copier" sous l'identifiant client. Remplacez 'Mettre-ici-l'id-du-bot' par ce token dans le fichier `config.json`.
   4. Activez le mode développeur dans vos paramètres Discord en allant dans les paramètres utilisateur, puis dans la section "Avancés". Faites un clic droit sur le serveur où vous souhaitez inviter le bot, puis cliquez sur "Copier l'identifiant". Remplacez 'Mettre-ici-l'id-du-serveur-où-le-bot-est-présent' par ce token dans le fichier `config.json`.



5. Pour lancer votre bot, executez `node .`

Les prochaines fois que vous voudrez lancer le bot, il faudra simplement retourner à la racine de votre projet et entrer cette commande `node .`
