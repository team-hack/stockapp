# Stock App

The stock app is a clone of the Robinhood app. We are making this because we like the UI of Robinhood and want to try building this ourselves.

## Additionally:

- Support for Watchlists
- Crypto
- Live feed
- Live news
- Animations (Greensock, other cool animation libs)

## Database (Entities / Model)

See diagram:
[UML](https://drive.google.com/file/d/1xo0qRE1HOA4jNApH2B_lKBY-iSpMh2nJ/view?usp=sharing)

## Endpoints (Controller)

| URL           | Purpose          | CRUD Operations Supported |
| ------------- | ---------------- | ------------------------- |
| /             | Dashboard (Home) |                           |
| /signup       |                  | GET & POST                |
| /signin       |                  | GET & POST                |
| /messages     |                  | GET                       |
| /message      |                  | POST                      |
| /message/{id} |                  | GET,POST,UPDATE,DELETE    |
| /users        | See all users    | \*                        |
| /stocks       | See all stocks   | \*                        |

...

## Services (Plugin)

- API Services (Yahoo! Finance API)

## Views

- React on the front end
- Vue?
- JQuery
- Swift
- Android
- Animations Greensock API

## Concepts

[Too Early Demo Repo](https://github.com/vijayxtreme/stock-app-demo)

[Figma Design](https://www.figma.com/file/lR8osVzOIEQiaBUCiQM340/Stock-App?node-id=0%3A1)

## Naming Files & Conventions

When creating a component, be sure to follow this file and folder structure within `src/components`.

```sh
src/
 | components/
    | MyComponent/
    |   tests/
    |    | MyComponent.test.tsx
    | MyComponent.tsx
    | MyComponentStyled.tsx
    | index.tsx
```
## Getting Setup 

### Installing SSH

First step make sure you have a ssh key. If you are unsure you can use this [tutorial](https://gorails.com/setup/osx/11.0-big-sur#git) to get you started. 

Next run the following commands in your terminal:
```sh
$ git clone git@github.com:team-hack/stockapp.git
$ cd stockapp
$ npm install
$ npm start
```
You should now be able to preview the stock app at: http://localhost:3000/