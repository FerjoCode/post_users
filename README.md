# Post Users

## Installation

-   ### Play with the pen in Codepen.io


    [1]: https://codepen.io/deucalion98/pen/wvwrLNR
    [Users posts][1]

-   ### Or install dependencies using the command
    -   `yarn` or `npm install`
-   ### Run local server

    -   `yarn build-serve` or `npm run build-serve`

-   ## Files strucure

-   _dist_ - distribution files.
    -   `index.html` - Static home file.
-   _src_ - source and uncompiled files.
    -   _Models_ - For entity classes to be used.
        -   `Post.js` - Handfle a single post model.
        -   `User.js` - Handfle a single post model.
    -   _Modules_ - Api calls and views handler.
        -   `Service.js` - Handle api calls.
        -   `Views.js` - handles view methods and markups to be rendered.
    -   `config.js` - Store api urls and helper methods.
    -   `index.js` - Entry point where models and modules logic works.
    -   `styles.scss` - Styles to be used in the views.
