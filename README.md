# 🚀 Portfolio - Amine Ouardi

Portfolio professionnel d'Amine Ouardi - Data Analyst et Consultant EPM, spécialisé dans l'analyse de données, la visualisation et l'optimisation des performances d'entreprise.

## 📋 Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Contributions](#contributions)

## 🎯 À propos

Ce portfolio présente mes compétences en tant que Data Analyst et Consultant EPM, avec des sections dédiées à :
- Mon profil professionnel
- Mon expérience professionnelle
- Mes compétences techniques
- Mes projets réalisés
- Les témoignages clients
- Un formulaire de contact

## 🛠 Technologies utilisées

### Frontend
- **React 18.3.1** - Bibliothèque UI moderne
- **TypeScript 5.3.3** - Typage statique
- **Vite 5.1.4** - Build tool ultra-rapide
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Framer Motion 11.0.8** - Animations fluides

### 3D & Graphiques
- **Three.js 0.161.0** - Bibliothèque 3D
- **@react-three/fiber 8.15.16** - Renderer React pour Three.js
- **@react-three/drei 9.99.4** - Helpers pour React Three Fiber

### Autres
- **react-hot-toast** - Notifications toast
- **@emailjs/browser** - Service d'envoi d'emails
- **react-parallax-tilt** - Effets de parallaxe
- **react-vertical-timeline-component** - Timeline verticale

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure)
- **npm** ou **yarn** ou **pnpm**

## 🚀 Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/aminerc/myportfolio.git
   cd myportfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

## ⚙️ Configuration

### Variables d'environnement

1. **Créer un fichier `.env` à la racine du projet**
   ```bash
   cp .env.example .env
   ```

2. **Configurer les variables d'environnement**
   
   Vous devez configurer EmailJS pour le formulaire de contact :
   - Créez un compte sur [EmailJS](https://www.emailjs.com/)
   - Créez un service email
   - Créez un template email
   - Récupérez votre Public Key

   Puis ajoutez les valeurs dans votre fichier `.env` :
   ```env
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

### Configuration EmailJS

1. **Service Email**
   - Connectez votre service email (Gmail, Outlook, etc.)
   - Notez le Service ID

2. **Template Email**
   - Créez un template avec les variables suivantes :
     - `{{form_name}}` - Nom de l'expéditeur
     - `{{from_email}}` - Email de l'expéditeur
     - `{{message}}` - Message
     - `{{to_name}}` - Votre nom (Amine Ouardi)
     - `{{to_email}}` - Votre email
   - Notez le Template ID

3. **Public Key**
   - Trouvez votre Public Key dans les paramètres de votre compte EmailJS

## 📜 Scripts disponibles

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur `http://localhost:5173`

### Build de production
```bash
npm run build
```
Crée un build optimisé dans le dossier `dist/`

### Preview du build
```bash
npm run preview
```
Prévisualise le build de production localement

### Linting
```bash
npm run lint
```
Vérifie le code avec ESLint

### Vérification TypeScript
```bash
npm run ts:check
```
Vérifie les erreurs de type TypeScript

### Déploiement
```bash
npm run deploy
```
Build et déploie sur GitHub Pages (nécessite `gh-pages`)

## 📁 Structure du projet

```
myportfolio/
├── public/                 # Assets statiques (modèles 3D, favicon)
├── src/
│   ├── assets/            # Images, icônes, logos
│   ├── components/        # Composants React
│   │   ├── atoms/        # Composants atomiques (Header)
│   │   ├── canvas/       # Composants 3D (Ball, Earth, Stars)
│   │   ├── layout/       # Composants de layout (Navbar, Footer, Loader)
│   │   └── sections/     # Sections principales (Hero, About, etc.)
│   ├── constants/        # Données statiques et configuration
│   ├── hoc/              # Higher-Order Components
│   ├── types/            # Définitions TypeScript
│   ├── utils/            # Utilitaires (motion.ts)
│   ├── App.tsx           # Composant principal
│   ├── main.tsx          # Point d'entrée
│   └── globals.css       # Styles globaux
├── index.html            # Template HTML
├── vite.config.js        # Configuration Vite
├── tailwind.config.cjs   # Configuration Tailwind
├── tsconfig.json         # Configuration TypeScript
└── package.json          # Dépendances et scripts
```

## 🚀 Déploiement

### GitHub Pages

Le projet est configuré pour être déployé sur GitHub Pages :

1. **Configurer le base path dans `vite.config.js`**
   ```js
   base: '/myportfolio/', // Changez selon votre repo
   ```

2. **Déployer**
   ```bash
   npm run deploy
   ```

3. **Configurer GitHub Pages**
   - Allez dans Settings > Pages de votre repo
   - Sélectionnez la branche `gh-pages` comme source
   - Votre site sera disponible à `https://votre-username.github.io/myportfolio/`

### Autres plateformes

Le projet peut être déployé sur :
- **Vercel** : Connectez votre repo GitHub
- **Netlify** : Connectez votre repo GitHub
- **AWS Amplify** : Connectez votre repo GitHub
- **Surge.sh** : `surge dist/`

## 🔧 Personnalisation

### Modifier les données

Les données du portfolio sont centralisées dans :
- `src/constants/config.ts` - Textes et configuration
- `src/constants/index.ts` - Données (expériences, projets, technologies)

### Modifier les styles

- `src/globals.css` - Styles globaux
- `tailwind.config.cjs` - Configuration Tailwind (couleurs, thème)
- Les composants utilisent Tailwind CSS pour le styling

### Modifier les images

Remplacez les images dans `src/assets/` :
- `pdp.jpg` - Photo de profil
- `company/` - Logos des entreprises
- `tech/` - Icônes des technologies
- `projet*.png` - Images des projets

## 📝 Contributions

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Amine Ouardi**
- Portfolio : [https://aminerc.github.io/myportfolio/](https://aminerc.github.io/portfolio_aminerc/)
- Email : aminerc.business@outlook.com
- GitHub : [@aminerc](https://github.com/aminerc)

## 🙏 Remerciements

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) pour les composants 3D
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- [EmailJS](https://www.emailjs.com/) pour le service d'emails

