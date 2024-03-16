# Alzi: Alzheimer's care buddy

![version](https://img.shields.io/badge/version-10.2.4-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/WT2QAD3p)

![image](https://github.com/scole02/NeuroHeal/assets/67590424/cba537ff-8e23-4d69-b728-de14fa44c4a3)

Alzi, designed to assist individuals with Alzheimer's and their caregivers, includes an innovative feature where caregivers can track the patient's behavior and mental health status in real-time, and provide cognitive training and memory recall enhancement exercises based on the interactions between the patient and the AI chatbot. 
Alzi’s commitment to organizational features aligns with the overarching moral value of providing holistic support for Alzheimer's care, emphasizing the importance of infrastructure and efficiency in managing the challenges associated.

## Table of Contents

- [TechStack](#techstack)
- [Demo](#demovideo)
- [How To Run](#how-to-run)
- [How to Navigate on App](#how-to-navigate-on-app)
- [File Structure](#file-structure)
- [Licensing](#licensing)

## TechStack

<img src="https://github.com/scole02/NeuroHeal/assets/67590424/7eb1baed-4270-4935-bfe7-745052579019" alt="image" style="width: 200px; height: auto;">
<img src="https://github.com/scole02/NeuroHeal/assets/67590424/e0567d1d-1c9c-4e80-b767-c58d4e60fc9f" alt="image" style="width: 200px; height: auto;">
<img src="https://github.com/scole02/NeuroHeal/assets/67590424/edf0e33e-5beb-465f-b19c-4fe38d67a256" alt="image" style="width: 200px; height: auto;">
<img src="https://github.com/scole02/NeuroHeal/assets/67590424/e30fa149-bc32-4c94-b856-c7730e4904dd" alt="image" style="width: 200px; height: auto;">

## DemoVideo
[Link](https://drive.google.com/file/d/11fW7ziYyywsY2vmyWiwRa1v_uNXmnJrS/view?usp=drivesdk)

## How to Run

- Clone the repo: `git clone https://github.com/creativetimofficial/light-bootstrap-dashboard-react.git`.
- `npm install`
- `pip install --user pipenv`
- `sudo apt install python-django`
- `pipenv install`  
- `pipenv shell` 
- `cd alzi`
- `python manage.py migrate`  
- `python manage.py runserver`
- In a new shell start react project `cd NeuroHeal`
- `npm start`
- Navigate to http://localhost:3000

## How to Navigate on App

Refer to this documentation for navigating the live demo : [website](https://abounding-sneezeweed-a1a.notion.site/Alzi-27ec8c12d5b141f4af6d1ec83726068a)

## Alzi Function:

## File Structure
```

NeuroHeal
.
├── CHANGELOG.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── README.md
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── css
│   │   ├── demo.css
│   │   ├── documentation.css
│   │   └── light-bootstrap-dashboard.css
│   ├── img
│   └── tutorial-components.html
└── alzi
|   ├── alzi
|   │   ├── init.py
│   │   ├── deployment.py
│   |   ├── settings.py
|   │   ├── urls.py
|   │   ├── wsgi.py
|   ├── api
|   │   ├── migrations
|   |   |   ├── init.py
|   │   ├── init.py
|   │   ├── admin.py
|   │   ├── apps.py
|   │   ├── models.py
|   │   ├── mongo.py
|   │   ├── serializer.py
|   │   ├── tests.py
|   │   ├── urls.py
|   │   ├── utils.py
|   │   ├── views.py
|   ├── rmanage.py
|   ├── requirements.txt
└── alzi_frontend
|   ├── public
|   │   ├── favicon.ico
│   │   ├── index.html
│   |   ├── logo192.png
|   │   ├── logo512.png
|   │   ├── manifest.json
|   │   ├── robots.txt
|   ├── src
|   │   ├── app.css
|   │   ├── app.js
|   │   ├── QuestionsPage.js
|   │   ├── index.css
|   │   ├── index.js
|   │   ├── logo.svg
|   │   ├── reportWebVitals.js
|   │   ├── setuoTests.js
|   ├── Readme.ms
|   ├── package-lock.json
|   ├── package.json
|   ├── tsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── landing.css
    ├── landing.js
    ├── logo.svg
    ├── routes.js
    ├── web.config
    ├── Cpage
    │   ├── Clog.js
    │   ├── settings.py
    │   ├── urls.py
    ├── PPage
    │   ├── Chatbot.py
    │   ├── PLog.js
    ├── assets
    │   ├── css
    │   │   ├── animate.min.css
    │   │   ├── demo.css
    │   │   ├── light-bootstrap-dashboard-react.css
    │   │   ├── light-bootstrap-dashboard-react.css.map
    │   │   └── light-bootstrap-dashboard-react.min.css
    │   ├── fonts
    │   │   ├── nucleo-icons.eot
    │   │   ├── nucleo-icons.svg
    │   │   ├── nucleo-icons.ttf
    │   │   ├── nucleo-icons.woff
    │   │   └── nucleo-icons.woff2
    │   ├── img
    │   │   └── faces
    │   └── scss
    │       ├── lbd
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── lbdr
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── light-bootstrap-dashboard-react.scss
    ├── layouts
    │   └── Admin.js
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   └── AdminNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    └── views
        ├── Dashboard.js
        ├── Icons.js
        ├── Maps.js
        ├── Notifications.js
        ├── TableList.js
        ├── Typography.js
        ├── Upgrade.js
        └── UserProfile.js
```
## Licensing

- Licensed under MIT (https://github.com/scole02/NeuroHeal/blob/main/LICENSE.md)

