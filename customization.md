# How to add custom fonts and colors to tailwind?

Adding custom colors and fonts to tailwind can be a tricky thing to find out or even apply.
In the following guide I'll try to explain the process step by step.

Our first stop is the `tailwind.config.js file`.
In this file you will see
``` 
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
```

Our focus for this section will be on theme:

```
  theme: {
    extend: {
    },
  },
```
 We will need this section for both adding colors as well as fonts.
 
 ## Adding fonts
 
 To add a font we first need to import a font.
 I used [fontspark](https://fontspark.app/) typed in the name of my shop and found a fitting font.
 which I will then import in the header of the html file.
 
 ```
 <link rel="preconnect" href="https://fonts.gstatic.com">
 <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap" rel="stylesheet"> 
```

Then we will return to themes and make an entry called fontFamily.

```
  theme: {
 extend: {
      fontFamily: {
      },
    },
  },
```

Here we will add our new fonts, in my example I added the font Libre Baskerville to my project.
On the google fonts website to css rule to specify this font is shown as.  

```
font-family: 'Libre Baskerville', serif;
```
So we will translate this into our theme like this:

```
  theme: {
 extend: {
      fontFamily: {
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
    },
  },
```
Note that I use Sherlock here, to show you can call the first name whatever you want, but you will call upon it in the html file using that name. 
 
If we use a font whose name is only one word like Roboto we'd use `''`  declare it like:
```
'Roboto': ['Roboto', 'sans-serif'],
```
If the font name has two words, like our Libre Baskerville use `""`.

Now if we type `font-Sherlock` in our html code, it will not change a thing.  
Why? Cause we didn't apply the most important rule yet.  
**When you change something in the tailwind.config.js file, you always use `npm run build` to apply it!**
 
### Do we use fonts/colors inside extend or outside extend?

If you are not satisfied with the amounts of blue that are already present inside tailwind, it's possible that you want to add extra shades of blue.
We will explain that in finer details in the next part. 

When making colors that are already in the template such as blue, there is a huge difference if you place it between extend or not.  

As extend implies it extends something. So with blue in mind, it will **add** your shades to already known blue color class.
   
However if you place it outside extend you will **replace** all of the blue shades, with your one shade.

TLDR:
`code inside extend adds`  
`code outside extend replaces`


## Adding colors
![wandersong gif](https://wanderso.ng/img/screens/preview01.gif)  
So you want to add more colors to your project?
Our theme at the moment looks like this:

```
  theme: {
 extend: {
      fontFamily: {
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
    },
  },
```

In order to add color we will have to add a color class to theme.
```
  theme: {
    extend: {
      colors:{

      },
      fontFamily: {
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
    },
  },
```

Because my example is a flower shop, I will be adding shades of green to my project.

```
  theme: {
    extend: {
      colors:{
        green:{
            light:'#a3d175',
            lime:'#84CC16',
            neon: '#11da21'
        },
      },
      fontFamily: {
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
    },
  },
```

DON'T FORGET to run `npm run build` to make sure these are applied to your project.
Once these are applied you will have to apply it to a part of your html.

to apply this to a background you can type for example in the body tag.
```
class="bg-green-neon" to apply a very bright green to your background 
```
You can also apply this to your text. In this case you use text-green-lime or any other color you added.

### Importing colors

As some may experience, when you port in tailwind, you may see teal on the cheatsheets.
But it doesn't really work, well no fear. It just didn't import all the colors, which is an easy fix.

At the top of your `tailwind.config.js` you add:
```
const colors = require('tailwindcss/colors')
```

in your color class you just add the colors you want to add from the following list.
[color palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)
```
  theme: {
    extend: {
      colors:{
        green:{
            light:'#a3d175',
            lime:'#84CC16',
            neon: '#11da21'
        },
        teal:colors.teal,
        lime:colors.lime,
        
      },
      fontFamily: {
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
    },
  },
```
As usual run `npm run build` to apply and enjoy your new shades of color!  

<img src="https://media2.giphy.com/media/G0vaYbZDJV0cM/giphy.gif?cid=ecf05e473as2s8npbkgmcx0ufdcgfn6ftwlhqvj38fyu869g&rid=giphy.gif" alt="Drop of paint that changes colors" width=300>
