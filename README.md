## ![hero](/public/logo.png)

---

> Digitales Gesellenstück Level up Deutsch is my final project of 12-weeks long bootcamp at [neuefische GmbH](https://www.neuefische.de)

I developed this app for people who are learning German as a second language and which want to improve it. The idea is based on my years long experience in learning and teaching multiple languages. Getting to a communicative level while learning a language is not a big deal, but speaking like a native speaker and understanding the language like them is. Understanding of the cultural context is very important. It doesn't matter whether it's the ice break in the cinema, the Karnevalsumzug, the Sandmännchen, the white sausage with pretzel and beer - everyone in Germany knows that! These things are also relevant for you because the language is strictly related to the culture. Level up Deutsch is the right place to collect and describe such traditions and peculiarities. If you add the right pictures to them, they become a kind of gallery. With this app, you will no longer lose the thread of conversations in German, because you can generate and learn German phrases with the associated explanations here. Furthermore, Level up German offers you the perfect opportunity to link and save the words you want to remember with examples and explanations and to practise them with your vocabulary cards. You can edit them, delete them and move the ones you already know well to the archive so that you can repeat them again in a few weeks. Remember: practice makes perfect!

---

## Demo

Have a look at the hosted version on [Vercel](https://level-up-deutsch.vercel.app/) (Important: This demo is optimized for mobile screen)

---

## Preview

![App screens](/public/preview.png)

---

## Tech stack

- [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Jest](https://jestjs.io/)
- [styled components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Cloudinary](https://cloudinary.com/)
- [Axios](https://axios-http.com/docs/intro)
- [npm](https://www.npmjs.com/)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cloudinary Setup

- Create an account on [Cloudinary](https://cloudinary.com/)
- Go to [Upload presets](https://cloudinary.com/console/settings/upload#upload_presets)
- Click `Enable` unsigned uploading
- Copy the preset name (the 8 character hash below name)
- Add your cloudname and preset name to `.env.local`. You can use `.env.example` to create your own `.env.local`

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
- Create `.env.local` file (please check if you have added `env.local` in your `.gitignore`)
