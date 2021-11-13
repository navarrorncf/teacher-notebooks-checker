# teacher-notebooks-checker 🔎

An application for checking teachers class registers and notebooks in iEducar, the current school management system in the public school system in Brasília, Brazil. Furthermore, it helps in managing them and programatically adds some visual cues to help its users.

---

# Usage

Clone or download this repository and install its dependencies using

```
npm install
```

and then run the command

```
npm run build
```

to see the output in the 'dist' folder. You can also see it live in webpack dev server using

```
npm run dev
```

This way, the application will be served in localhost port 9000, per default webpack dev server configuration.

---

# About this project 🤔

## Motivation behind this app 🤨

As a school management system, iEducar has a quite poor user experience, specially in the way it presents data to its users. It also lacks integration between school timetables and the school calendar. These issues force the school management team to waste a lot of time checking manually for errors, missing class reports and pending notebooks, among other little things. 🤯

Using data extracted from iEducar (again, manually, as they do not provide an API for its regular users), this app integrates classes timetables, school calendar and notebooks data to make the life of the school manager a lot easier! 😌

---

## Technologies used 🤖

- HTML
- CSS
- JavaScript
- Webpack

---

## About the choice of technologies 🤓

After using frameworks like React or Vue for a while, I decided to check on my skills using pure JavaScript. Some tools like create-react-app also take care of other stuff, like webpack and babel config, and I saw this as an oportunity to also test my skills in webpack! 💪

The observer design pattern was a source of inspiration for the way the application state is handled, as well as its interaction with the components that need to know about the it. It may feel like overengineering to some people, but again, I wanted to see if I could implement the application this way. 🧐

---

## Final thoughts

This application is, as of now, a simple draft that can and should be improved. Knowing my coworkers, the only users of this app currently, it won't be long before they request new features. But I can rest knowing that the application architecture, though it can be improved, feels clean enough to be extended. 👌
