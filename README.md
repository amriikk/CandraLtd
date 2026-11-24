# Candra Ltd.

A demo clothing store built with React and Redux, first written in 2020 while following COVID lockdowns, and brought back to life in 2026 to run on current tools. It's the starting point for my own small shop of 3D-printed pieces, curated merch and pothos cuttings.

**Live demo:** https://candra-ltd.vercel.app/

![Candra Ltd. home page](docs/home.png)

## What it does

- **Browse** five collections and their product pages (React Router; the catalog lives in Redux).
- **Cart:** add items (repeats are grouped), change quantities, remove items. Totals come from memoized Reselect selectors, and the cart survives a page reload (redux-persist).
- **Accounts:** sign up or sign in with email or Google (Firebase Auth). New users get a profile document in Firestore.
- **Checkout** in Stripe test mode. Use card `4242 4242 4242 4242`, any future date and any 3-digit CVC. There's no backend yet, so no charge is made: Stripe returns a payment token and the app confirms it.

## Built with

React 16 · Redux, React Redux, Reselect, redux-persist · React Router 5 · Firebase 8 (Auth + Firestore) · Stripe Checkout (legacy, test mode) · Sass · Create React App 5 · Jest · Vercel

## Engineering notes

When I came back to this project, it wouldn't install. What I found and fixed:

- **Old native packages.** `node-sass` 4 only supports up to Node 14, and Firebase 6 pulled in the old native `grpc` package. Neither installs on current Node. I switched to Dart Sass (`sass`), Firebase 8 (plain JavaScript, same API, no code changes needed) and react-scripts 5.
- **A rename that broke the home page.** While fighting those errors in 2021, `HomePage.scss` got renamed to `HomePage.css`, but the import still asked for `.scss`. I renamed it back.
- **A filename that only worked on a Mac.** The file was `SIgn-Up.scss` while the code imported `Sign-Up.scss`. macOS ignores letter case in filenames; Linux, where Vercel builds the site, doesn't.
- **Smaller fixes:** the Redux logger now runs only in development, a leftover `console.log` is gone, the default Create React App test (which could never pass) is replaced with tests for the cart logic, and a Vercel rewrite makes direct links like `/shop/hats` load.

## Run it

You need [Node 24](https://nodejs.org/).

```bash
git clone https://github.com/amriikk/CandraLtd.git
cd CandraLtd
npm install
npm start
```

Run the tests with `npm test`.

The Firebase settings in `src/Firebase/Firebase.Utils.js` are a web-app config, which Firebase designs to be public: access is controlled by the project's security rules. The Stripe key is a publishable test key.

## Roadmap

- Real payments with Stripe Checkout through a serverless function (the Checkout modal used here is Stripe's legacy version).
- Save the cart to the user's profile, and add a dark theme.

## Credits

Built following [Complete React Developer](https://zerotomastery.io/courses/learn-react/) by Andrei Neagoie and Yihua Zhang (Zero To Mastery).

## Author

**Jhon Trujillo** · [jotrio.com](https://jotrio.com) · [github.com/amriikk](https://github.com/amriikk)