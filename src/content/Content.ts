import textLogo from "../assets/png/text-logo.png";
import companyBanner from "@/assets/svg/company-logo.svg";
import about1 from "@/assets/jpeg/about1.jpeg";
import about2 from "@/assets/jpeg/about2.jpeg";
import html5 from "@/assets/svg/html5-icon.svg";
import css from "@/assets/svg/css-icon.svg";
import javascript from "@/assets/svg/javascript-icon.svg";
import reactjs from "@/assets/svg/reactjs-icon.svg";
import angular from "@/assets/svg/angular-icon.svg";
import typescript from "@/assets/svg/typescript-icon.svg";
import bootstrap from "@/assets/svg/bootstrap-icon.svg";
import tailwindcss from "@/assets/svg/tailwindcss-icon.svg";
import sass from "@/assets/svg/sass-icon.svg";
import jquery from "@/assets/svg/jquery-icon.svg";
import materialUi from "@/assets/svg/materialUi-icon.svg";
import nodejs from "@/assets/svg/nodejs-icon-2.svg";
import express from "@/assets/svg/express-icon.svg";
import mysql from "@/assets/svg/mysql-icon.svg";
import mongodb from "@/assets/svg/mongodb-icon.svg";
import php from "@/assets/svg/php-icon.svg";
import laravel from "@/assets/svg/laravel-icon.svg";
import postgresql from "@/assets/svg/postgresql-icon.svg";
import firebase from "@/assets/svg/firebase-icon.svg";
import aws from "@/assets/svg/aws-icon.svg";
import heroku from "@/assets/svg/heroku-icon.svg";
import git from "@/assets/svg/git-icon.svg";
import postman from "@/assets/svg/postman-icon.svg";
import stripe from "@/assets/svg/stripe-icon.svg";
import paypal from "@/assets/svg/paypal-icon.svg";
import tiptap from "@/assets/svg/tiptap-icon.png";
import redux from "@/assets/svg/redux-icon.svg";

export const content = {
  general: {
    companyName: "DevTime Technologies",
    companyTextLogo: textLogo.src,
    message: "Message",
    email: "Email",
    submit: "Submit",
  },
  header: {
    navigationButtons: [
      {
        name: "Home",
        href: "",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Services",
        href: "#services",
      },
      {
        name: "Reviews",
        href: "#reviews",
      },
      {
        name: "Contact",
        href: "#contact",
      },
    ]
  },
  home: {
    heading: 'The DevTime technologies',
    subHeading: ["Mobile App development", "Front End development", "Full Stack development"],
    banner: companyBanner.src
  },
  about: {
    heading: 'About Us',
    detils: [
      {
        title: 'A bit about me',
        content: `
                I'm a self-taught web developer and Mobile App Developer with experience in designing
                new features from ideation to production, implementation of wireframes and design
                flows into high-performance software applications. I take into consideration the user
                experience while writing reusable and efficient code. I passionately combine good
                design, technology, and innovation in all my projects, which I like to accompany from
                the first idea to release. Currently, I'm focused on the backend development.
              `,
        image: about1.src
      },
      {
        title: 'Technologies and Tools',
        content: `
                Using a combination of cutting-edge technologies and reliable open-source software I
                build user-focused, performant apps and websites for smartphones, tablets, and
                desktops.
              `,
        image: about2.src
      },
    ],
    languages: [
      {
        name: 'HTML 5',
        icon: html5.src,
      },
      {
        name: 'CSS',
        icon: css.src,
      },
      {
        name: 'JavaScript',
        icon: javascript.src,
      },
      {
        name: 'React js',
        icon: reactjs.src,
      },
      {
        name: 'Angular',
        icon: angular.src,
      },
      {
        name: 'TypeScript',
        icon: typescript.src,
      },
      {
        name: 'Bootstrap',
        icon: bootstrap.src,
      },
      {
        name: 'Tailwind',
        icon: tailwindcss.src,
      },
      {
        name: 'sass',
        icon: sass.src,
      },
      {
        name: 'jQuery',
        icon: jquery.src,
      },
      {
        name: 'Material UI',
        icon: materialUi.src,
      },
      {
        name: 'Node js',
        icon: nodejs.src,
      },
      {
        name: 'Express',
        icon: express.src,
      },
      {
        name: 'MySQL',
        icon: mysql.src,
      },
      {
        name: 'MongoDB',
        icon: mongodb.src,
      },
      {
        name: 'PHP',
        icon: php.src,
      },
      {
        name: 'Laravel',
        icon: laravel.src,
      },
      {
        name: 'PostgreSQL',
        icon: postgresql.src,
      },
      {
        name: 'Firebase',
        icon: firebase.src,
      },
      {
        name: 'AWS',
        icon: aws.src,
      },
      {
        name: 'Heroku',
        icon: heroku.src,
      },
      {
        name: 'Git',
        icon: git.src,
      },
      {
        name: 'Postman',
        icon: postman.src,
      },
      {
        name: 'Stripe',
        icon: stripe.src,
      },
      {
        name: 'PayPal',
        icon: paypal.src,
      },
      {
        name: 'Tiptap',
        icon: tiptap.src,
      },
      {
        name: 'Redux',
        icon: redux.src,
      },
    ]
  },
  services: {
    heading: 'Services',
    services: [
      {
        step: '01',
        name: 'Design',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        step: '02',
        name: 'Develop',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        step: '03',
        name: 'Maintain',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
    ]
  },
  projects: {
    heading: 'Reviews',
    reviews: [
      {
        name: 'Luca M',
        message:
          '“Always the best hamburger place in Biella. In addition to the classic sandwiches, the special ones that alternate throughout the year are also very good, such as the Autumn Special (see photo) with Arnad lard, honey and walnuts. Possibility to accompany everything with different local craft beers.”',
      },
      {
        name: 'Nicole C',
        message:
          '“Always a pleasure to return as a fixed stop every time I return to Biella. Superb quality of ingredients and selection of local beers.”',
      },
      {
        name: 'Lynn Lynn',
        message:
          '“Chanced upon this place due to a short rain. Was super impressed by the food , caffe latte and very goo service ! Will be back again !”',
      },
    ]
  },
  contact: {
    heading: 'Get in Touch',
    subHeading: "We are always happy to hear from our customers. Please feel free to contact us with any questions, comments, or concerns.",
    address: '501, Pride Sapphire, Main Road, near Amin Marg, Vidhyakunj Society, Sirvar Park, Kotecha Nagar, Rajkot, Gujarat 360001',
    phone: '+91 9913357614',
    email: 'romikmakavana1214@gmail.com'
  },
  footer: {
    heading: 'Footer',
    discription: "We work to offer you an always fresh and excellent product using quality raw materials carefully selected from local suppliers."
  }
}