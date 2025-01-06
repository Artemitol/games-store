# Test Assignment for Frontend Intern

Develop an interface for the [Free-To-Play Games](https://www.freetogame.com/) website, consisting of two pages.

## Product Requirements
### Main Page
- Displays games
    - Games can be filtered by platform and genre (e.g., shooter)
    - Games can be sorted by release date, popularity, etc.
- Each game in the list contains:
    - title
    - release date (in Russian format)
    - publisher
    - genre
    - image
- Clicking on a game navigates to the game page
- Show a loading indicator while games are loading
- If data cannot be retrieved, notify the user
### Game Page
- Should contain (in any order/format):
    - title
    - release date (in Russian format)
    - publisher
    - developer
    - genre
    - image/poster
    - screenshot carousel
    - system requirements
- The page should have a button to return to the game list
- Show a loading indicator while the game is loading
- If data cannot be retrieved, notify the user

## Technical Requirements

- The application should be convenient to use on both mobile and desktop screens (responsive interface)
- The application is developed using React 18+ and Redux / Redux Toolkit
- Use the [Free-To-Play Games API](https://www.freetogame.com/api-doc) (with or without CORS). API calls and data processing are done directly from the frontend (except for the optional Node.JS task).
- Routing is done using [React Router v6](https://reactrouter.com/en/main)
- Any UI framework of your choice (e.g., [Ant Design](https://ant.design/), [Semantic UI](https://react.semantic-ui.com/), [Element UI](http://elemental-ui.com/))
- Package manager `npm`
- The application should run at `localhost:3001` with the command `npm start`
- Page transitions should not reload the page
- If a game card was opened, it should be available on subsequent page reloads without an additional request for 5 minutes

## Optional Tasks
- Use TypeScript
- Consider that the game list may contain thousands of titles
- On a failed request, there should be three retry attempts
- When navigating from page to page, requests related to the old page should be aborted (canceled/stopped)
- Backend for hosting static files and API encapsulation of external requests on Node.JS
- Code coverage with unit tests