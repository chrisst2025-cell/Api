# 🎵 Lyrics API - Chris St

## 🚀 API LYRICS EN LIGNE

Une API simple, rapide et accessible permettant de rechercher :

- 🎵 Titre d'une musique
- 👤 Artiste
- 💿 Album
- 📝 Paroles complètes
- ⏱️ Paroles synchronisées (si disponibles)
- 🖼️ Informations musicales
- 🎧 Aperçu audio (si disponible)

Cette API peut être utilisée dans :

- 🤖 Bots Discord
- 🤖 Bots WhatsApp
- 🌐 Sites web
- 📱 Applications mobiles
- 🔧 Autres projets utilisant une API REST


---

# ⭐ Fonctionnalités principales

## 🔎 Recherche Lyrics

Rechercher une musique avec :

- Le titre
- L'artiste
- Une combinaison titre + artiste


Exemple :

```
Adele Hello
```

Résultat :

```json
{
  "success": true,
  "track": "Hello",
  "artist": "Adele",
  "lyrics": "..."
}
```


---

# 🌐 Endpoints API


## GET Lyrics

### Endpoint

```
GET /api/lyrics
```


### Exemple :

```
/api/lyrics?song=Adele Hello
```



## POST Lyrics

### Endpoint

```
POST /api/lyrics
```


Body :

```json
{
  "song": "Adele Hello"
}
```



---

# 🎨 Interface Web

Le projet possède une interface moderne avec :

✅ Design transparent (Glassmorphism)

✅ Animations

✅ Profil administrateur

✅ Recherche musicale

✅ Affichage pochette

✅ Lecteur audio

✅ Téléchargement aperçu audio

✅ Documentation intégrée

✅ Responsive mobile



---

# 👑 Administrateur


Le profil administrateur est séparé du HTML.


Fichier :

```
data/admin.json
```


Exemple :

```json
{
  "name": "Chris St",
  "role": "Administrator",
  "avatar": "/assets/images/admin.jpg"
}
```


L'image administrateur se trouve ici :

```
public/assets/images/admin.jpg
```


---

# ⚙️ Paramètres administrateur


Le panneau administrateur permet :

- Changer le background du site
- Modifier l'apparence globale
- Ajouter les réseaux sociaux


Le changement de background est protégé par un mot de passe.


---

# 🖼️ Background global


Le background peut être changé avec :

- ImgBB
- Imgur
- Autre lien image public


Quand il est changé :

✅ Tous les visiteurs voient le nouveau background.

Le changement est enregistré côté serveur.


---

# 📁 Structure du projet


```
lyrics-api/

├── server.js

├── package.json


├── routes/

│   ├── lyrics.js

│   └── settings.js


├── utils/

│   └── settings.js


├── data/

│   ├── settings.json

│   └── admin.json


└── public/

    ├── index.html

    ├── css/

    │   └── style.css


    ├── js/

    │   ├── app.js

    │   └── settings.js


    └── assets/

        └── images/

            └── admin.jpg
```



---

# 🚀 Déploiement


Le projet est compatible avec :


✅ Render

✅ Railway

✅ Replit

✅ Vercel (avec adaptation serveur)

✅ Autres plateformes Node.js



Aucune configuration manuelle complexe nécessaire.


Après le déploiement :

- Installer les dépendances
- Lancer le serveur
- L'API devient accessible en ligne


---

# 📦 Installation locale


Installer les dépendances :


```bash
npm install
```


Démarrer :

```bash
npm start
```


Le serveur sera disponible :

```
http://localhost:3000
```



---

# 🔐 Sécurité


Le projet utilise :

- Validation des requêtes
- Protection du changement background
- Gestion des erreurs
- Séparation des données importantes


⚠️ Ne jamais publier les vrais mots de passe dans GitHub.


---

# 🛠️ Technologies utilisées


Backend :

- Node.js
- Express.js
- Axios


Frontend :

- HTML5
- CSS3
- JavaScript


Source Lyrics :

- LRCLIB



---

# 🤖 Utilisation avec un bot


Exemple :

```javascript
fetch(
"https://votre-api.com/api/lyrics?song=Adele Hello"
)
.then(res => res.json())
.then(data => {

console.log(data);

});
```



---

# 📌 Notes importantes


- Aucun MongoDB nécessaire.
- Les données sont stockées dans des fichiers JSON.
- Le projet est léger.
- Facile à modifier.
- Facile à déployer.



---

# ❤️ Créateur


Projet créé et personnalisé pour :

## Chris St


🎵 Lyrics API - Simple, rapide et accessible.
