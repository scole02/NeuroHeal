

```
light-bootstrap-dashboard-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
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
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes.js
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
## NeuroHeal

This project is composed of a Django app and a React app

You will need pipenv to install dependencies.

`pip install --user pipenv`
`sudo apt install python-django`

## Steps to run
1. `pipenv install`  installs all dependencies for this project
2. `pipenv shell` starts a new shell with this python env activated (Ctrl-D to deactivate env)
3. `cd alzi`
4. `python manage.py migrate`  probably not neccessary as we are not using built in sql database
5. `python manage.py runserver` you may get errors with the database, most likely cuz your IP is not added, so msg me
6. In a new shell start react project `cd alzi_frontend`
7. `npm start`
8. Enjoy


APIs (Can be found in `alzi/alzi/urls.py`)

Single question operations:  
localhost:8000/api/question/\<id> (GET, PUT)  
localhost:8000/api/question/ (POST)

Get all Questions:  
localhost:8000/api/questions/ (GET)



