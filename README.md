### Code Style
- Save your folder with clean name, 2 version mobile and deskop 

# Folders
  - Format: file-name.{ext file} (lower case and add - between each word)
  - Structure
    /assets
      /css
        /components - style your components
        /fonts - import your fonts
        /layout - style your layout
        /pages - style your pages
        /setting
          global - style global css (use only when components has same style)
          mixins - method to quick same style in each file
          variables - save your variables
      /icons
        - save your icon here (only .svg) (format filename as icon-{ name }-{ ?properties }-{ color }.svg)
      /images
        - save your image here (format filename as image-{ name }.{ ext image }) .png .jpg .gif
      /js
        - write your JavaScript code here
    /includes
      /common
        - save your static data defined
      /components
        - save your static, mixin HTML code
      /layout
        - save your layout file to extends in each file

      format filename: mobile-version: mobile-filename.pug
                       desktop-version: desktop-filename.pug

# Run Project
- npm install
- npm install -g gulp
- gulp dev
- open any pug file(ctrl + s) ->  auto render pug to html
- open file main.scss(ctrl + s) ->  auto render file main.css
- gulp build
