# cmv-widgets

Composant graphique customisable qui affiche les résultats d'un groupe d'équipes au challenge européen du vélo.

Pour ajouter votre widget, il suffit d'ajouter les fichiers suivants:
- ./teams/example.json           /// Description du contenu du widget ([voir exemple ci-dessous](#Exemple-du-fichier-de-déscription-du-widget))
- ./blasons/example-blason.png     /// Le logo de votre groupe
- ./previews/example-preview.png    /// La page qui sera affichée dans les previews facebook et twitter

## Exemple du fichier de description du widget
```json 
{
  "title": "My incredible team",
  "blason": "./blasons/teamExemple-blason.png",
  "preview": "./previews/teamExemple-preview.png",
  "background_style" : "background-color:#2e97bd",
  "teams": {
    "My Incredible Cycling Team" : "mict"
  }
}
```

Vous pouvez faire une pull-request sur le dépot de votre groupement sur https://github.com/damienmarchal/cmv-widgets, le
widget sera alors hébergé et accessible sur le serveur:
http://dmarchal.space/challengeMEL2021/widgets/widget.html?group=votrewidget


