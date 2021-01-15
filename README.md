<<<<<<< HEAD
# Workshop-tailwind-css


## Learning objectives

- knowing what tailwind css is and having a first experience with it.
- being able to make a user friendly experience with tailwind.
- creating a visually appealing lay out.

## The mission

In the current times, we are all seeing a rise in online shopping.  
Some shops however could use a bit of help.  
You can choose if you want to rework an existing online shop, or create one from scratch.  
 
The main goal of this workshop is to create a visually appealing store page.

## Challenges
  
- Think of your store, what is your target? The store's profile, try to aim you design towards it.
- Colors! Try to use at least 5 colors, taste the rainbow!  
<img src="https://media3.giphy.com/media/uZclwnfXqjpMk/giphy.gif" alt="bird with lots of colors" width=300>  
## Installing tailwind.css

The first step to installing tailwind.css is to make sure you have node npm installed.
> use `npm --version` to verify that you have npm installed on your pc  
>

To install tailwind.css fully you will need to go through a few steps.  
You can link a stylesheet as we tend to do with bootstrap, this comes at a loss of some functionalities, an example of this is setting up custom colors.   
In today's workshop we will go over the full set up, with instructions so you can look it up again should you want to try it in the future.  
  
#### Installation steps:
  
  1. Make your repository/folder
  2. Set up your basic files, index.html and your css file, this can be done later as well.  
  3. In your root folder, open your terminal and type the following code: `npm init -y` this should create a package.json.
  4. Once the package.json is made we install tailwind using `npm install tailwindcss`.
5. In your css paste the following code at the top of your file:  
  ```
  @tailwind base;  
  @tailwind components;  
  @tailwind utilities;
  ```

6. Next we will set up an autoprefixer using `npm install postcss-cli autoprefixer`.  
  This should install Postcss, which we will need to configure.
7. In your terminal you use `npx tailwindcss init` to create your tailwind.config.js file, in this file you can define and customize your tailwind.  
   e.g. adding custom colours to your choices.     

8. `touch postcss.config.js` In this config file paste the following code:  
  ```
  module.exports = {
       plugins: [
           require('tailwindcss'),
           require('autoprefixer'),
       ]
   }
   ```


9. In your package.json look for the scripts.
In scripts you paste `"build": "postcss main.css -o build/styles.css"`  
so it will look like:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "postcss main.css -o build/styles.css"
  },
```

**note** that main.css should be changed to your css file name, or even the path to said css file.

10. In the terminal type `npm run build` to execute the scripts.
**Important to know** is that you will need to run this command each time you touch the config files.

11. add your built stylesheet to your html file.
`<link rel="stylesheet" href="build/styles.css">` 

12. Time to start! You now should have succesfully installed tailwind. 
For those that are curious, but not sure where to start tailwind wise.  
I suggest taking a look at the [tailwind cheatsheet](https://tailwindcomponents.com/cheatsheet/) this site has the corresponding css code as well as extra documentation for each component.


For those that prefer guides with practical examples I suggest to check out [tailwind css for beginners](https://codingthesmartway.com/tailwind-css-for-absolute-beginners/).  

### installing for other frameworks?
Check out the following link for guides for other frameworks like vue.js, react, laravel
[tailwind installation](https://tailwindcss.com/docs/installation)            
**possible errors**

During installation I got a bug that starts with:
```
TypeError: Object.entries(...).flatMap is not a function[![enter image description here][1]][1]
TypeError: Object.entries(...).flatMap is not a function
```

This means that you should check your node version, if it's below v11.0 you will have to update your node version.  
## Adding fonts/colors
To add fonts/colors please refer to:
[customization](customization.md)

### Useful tools
Looking for inspiration? Maybe give the following links a try. 
   
**color palettes:**  
[colorsinspo](https://colorsinspo.com/)  
[colorspace](https://mycolor.space/)  
[visme colorschemes](https://visme.co/blog/website-color-schemes/)   
[Hexcolor random color generator](https://hexcolor.co/random-colors)   
Have a picture, but don't know which colours are in it?  
 [Hexcolor image to color](https://hexcolor.co/image-to-colors)    
 
**Photos and illustrations**  
[PikWizard stock photos](https://pikwizard.com/)  
[free Illustrations](https://freeillustrations.xyz/)  
[css Icons](https://css.gg/)  

**Fonts**  
[google fonts](https://fonts.google.com/)    
not sure which font? Try a sentence in: 
[fontspark](https://fontspark.app/)  

**Extra cheat sheet**
A more visual cheat sheet
[Tailwind.css cheat sheet](https://umeshmk.github.io/Tailwindcss-cheatsheet/)

**good tool to have but not really for this exercise**  
For those that really are more for instantly done code.  
Though I would make sure you understand it first, or else you will get overwhelmed.
[tailblocks](https://tailblocks.cc/)

![good luck pikachu](https://media2.giphy.com/media/mqWZoUiub0cyA/giphy.gif)


=======
# tailwind-css
>>>>>>> 8571324dc198f408075e6559f32450362a37e29a
