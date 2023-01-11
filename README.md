# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.png)



### Links

- Solution URL: [[Add solution URL here](https://github.com/Haybuka/interactive-payment-card)](https://github.com/Haybuka/interactive-payment-card)
- Live Site URL: [[Add live site URL here](https://cardts.netlify.app)](https://cardts.netlify.app)

## My process

### Built with

- Formik for validation
- Typescript
- Tailwindcss
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

- Was able to practice using types in Typescript.
-  setting of types on Formik setFieldValues and function usage.
- Prop drilling using Typescript, while assigning types.


```Ts
 type Label = {
  type:string;
  fieldLabel? : string;
  fieldName: string;
  fieldValue: string;
  placeholder: string;
  className?:string;
  error? : string;
  setFieldValue: FormikValues['setFieldValue'];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
};

```




### Useful resources

- [Typescript](https://www.typescriptlang.org/) 


## Author

- Website - [Paschal Chukwu](https://www.your-site.com)
- Frontend Mentor - [@Haybuka](https://www.frontendmentor.io/profile/Haybuka)
- Twitter - [@Haybuka](https://www.twitter.com/Haybuka)

