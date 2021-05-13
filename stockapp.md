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
