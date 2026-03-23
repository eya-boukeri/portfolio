# Portfolio Ingénieur — React

Portfolio professionnel pour stage ingénieur 2ème année, inspiré du design dark mode avec dégradés violet/bleu.

## 🚀 Lancer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm start

# 3. Construire pour production
npm run build
```

## ✏️ Personnaliser

**Toutes vos informations sont dans un seul fichier :**
```
src/data/portfolio.js
```

Modifiez :
- `info` → votre nom, titre, description, email, liens
- `education` → votre formation
- `experiences` → vos stages/expériences
- `projects` → vos projets (titre, description, tags, liens GitHub/demo)
- `skillCategories` → vos compétences par catégorie
- `navLinks` → les sections affichées dans la navbar

## 📸 Photo de profil

Cliquez sur le cadre dans la section Hero pour uploader votre photo directement.

## 🌐 Hébergement gratuit

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Ajouter dans package.json : "homepage": "https://username.github.io/portfolio"
npm run build
npx gh-pages -d build
```

### Netlify
Glissez-déposez le dossier `build/` sur [netlify.com/drop](https://netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel
```

## 📁 Structure du projet

```
src/
├── App.jsx                  # Composant racine
├── index.js                 # Point d'entrée
├── index.css                # Styles globaux & variables CSS
├── data/
│   └── portfolio.js         # ← MODIFIEZ CE FICHIER
└── components/
    ├── Navbar.jsx            # Navigation fixe
    ├── Hero.jsx              # Section principale + photo
    ├── About.jsx             # À propos + quick facts
    ├── Education.jsx         # Formation (timeline)
    ├── Experience.jsx        # Expériences professionnelles
    ├── Projects.jsx          # Grille de projets
    ├── Skills.jsx            # Compétences avec barres
    ├── Contact.jsx           # Formulaire de contact
    └── Footer.jsx            # Pied de page
```
