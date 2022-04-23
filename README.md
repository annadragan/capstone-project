## ![hero](/src/icons/level.png)

---

> Digitales Gesellenstück Level up Deutsch is my final project of 12-weeks long bootcamp at [neuefische GmbH](https://www.neuefische.de)

Level up Deutsch hilft Dir Deutsch als Zweitsprache auf das höchste Niveau zu bringen. Hier kannst Du Dir eigene Vokabelkärtchen erstellen und mit diesen trainieren. In den kulturellen Kontext tauchst du mit deutschen Redewendungen und durch das individuelle Sammeln für Dich neuer Besonderheiten ein.

## Demo

Have a look at the hosted version on [Vercel](https://level-up-deutsch.vercel.app/)

---

## Preview

## Video

<div>
<img src="./src/movie.gif" width="160"/>
</div>

### Important: This demo is optimized for mobile screen!

![App screens]()

## Tech stack

- [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Jest](https://jestjs.io/)
  - [husky](https://typicode.github.io/husky/#/)
- [styled components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- Cloudinary
- Axios
- Local Storage

---

## Cloudinary Setup

- Create an account on [Cloudinary](https://cloudinary.com/)
- Go to [Upload presets](https://cloudinary.com/console/settings/upload#upload_presets)
- Click `Enable` unsigned uploading
- Copy the preset name (the 8 character hash below name)
- Add your cloudname and preset name to `.env.local`. You can use `.env.example` to create your own `.env.local` inside the `.gitignore`

---

## Project Setup

- clone this repository
- install all npm dependencies  
   `npm install`
- run app in development mode via `npm start`
- open [http://localhost:3000](http://localhost:3000) to view it in the browser
- to run React Testing Library & Jest  
   `npm test`
- to run Storybook  
  `npm run storybook`
- Create a build ready for deploying: `npm run build`
