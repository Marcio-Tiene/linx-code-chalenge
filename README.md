# Linx frontend code challenge

#### Published on netlify at this [link](https://gracious-einstein-0d8015.netlify.app/)

This project was developed for the technical challenge of the selection process for the frontend developer position at [Linx](https://www.linx.com.br/).

The goal of the project was to build a landing page using this [mock](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614/specs/), using this [public api](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1) for dynamic modification of the page, validating the forms, and using only Javascript, CSS HTML avoiding the use of frontend development frameworks and using semantic tags from HTMl 5. As I didn't have a post route in the challenge, in the success form send I created an alert showing the information sent.

In this project I use the webpack together with babel to work with modular javascript, in addition I used the yup library for validating forms and the axios library for http requests in the public api.

# Setting Up the project.

To use this project on your enviroment, follow these steps:

1. Clone the github project.

2. Make sure you have the latest version of node and npm / yarn installed

3. Use the following command on the command line to install the dependencies.

   ```bash
   $ yarn
   ```

   or

   ```bash
   $ npm i
   ```

4. Use the following command on the command line to start the webpack in watch mode, thus creating the bundle script used by html and watch mode causes you to rebuild the bundle when saving any file.

   ```sh
   $ yarn dev
   ```

   or

   ```bash
   $ npm run dev
   ```

5. open the index.html file from the public folder in your browser one with a html server of your choice, I use the vscode live server.

### You can now use and modify the project at your discretion.
