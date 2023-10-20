## Création d'un site ToDOList afin de créer des listes personnalisées, les archiver et les supprimer 

Pour ce site, devinez quel framework ai-je utilisé ? je vous laisse deviner... ET OUI ! React encore une fois.

CE fidèle framework m'a permis de réaliser ce projet que tout bon développeur React s'netraîne à réaliser afin de consolider ses compétences. 

Pour cette ToDOList, j'ai décidé encore un fois de partir sur un design épuré et minimaliste (deux couleurs de base, pas trop d'éléments et quelque chose d'esthétique et de claire).

Niveau design nous avons une page d'accueil avec Titre de l'app et bouton, les deux sont animés. La navigation entre les pages se fait avec une animation de balayage et fade des ééments vers la gauche.

Côté fonctionnalités, l'user à la possibilité de créer plusieurs listes numérotées et de les placer là ou il veut sur l'écran, (malheureusement cette fonctionnalité n'est pas optimale sur mobile cela du à la taille de l'écran qui bloque les déplacements des listes sur les différents axes... Logique en soit) 

L'user dispose d'un formualire afin d'entrer un éléments dans sa liste qui s'affiche directement à la soumission de ce dernier au clique sur le bouton. 

Niveau sauvegardes, les listes sont sauvegardées automatiquement dans le localStorage et récuperée puis affichée lors de la navigation vers la page Archive, qui présente les dernières listes ainsi que les éléments soumis par le formulaire. 

Enfin, côté suppression, l'user dispose d'un bouton suppression en rouge (on peut pas le louper j'ai mis un icône poubelle) qui au clique supprime toutes les listes archivées dans le localStorage. 

Je travaille encore sur ce projet, bien qu'il soit déja en ligne et fonctionnel, afin d'ajouter la fonctionnalité de personnalisation des titres des listes ! J'ai déja cette fonctionnalité mais lors de l'archivage, la liste du localStorage prend seulement le titre "list #1" sans la personnalisation appliquée en amont. 

Le site est hébergé via Vercel.



