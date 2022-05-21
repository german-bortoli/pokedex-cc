# Pokedex

Pokedex code challenge

## Project Links

- 👽 [Pokedex Site](https://dreamy-pithivier-c367b9.netlify.app) 
- 🚦 [Storybook](https://main--6285308d68b6aa003a919dd0.chromatic.com/)
- 📰 [Kanban Board](https://github.com/german-bortoli/pokedex-cc/projects/1)

> Note: If you want to see another storybook branch, please change `main` from the URL to the branch that you want.

## Tech stack decisions

- Typescript with [CRA](https://github.com/facebook/create-react-app).
- Storybooks with chromatic to test and review graphic changes.
- Use unit tests as much as possible.
- Use react-hooks and contexts avoiding redux.

## Pokemon Listing

The screen to list pokemons has the following features:

 - Pokemons per page selector.
 - Pokemon Cards (name and avatar).
 - Pagination.

When clicking a pokemon card will trigger the pokemon profile modal box.

### Pokemon Profile

At the moment I'm fetching all the moves and abilities at the same time, ideally it would be nice to add some pagination fetching just a few of them and also add better condensed design.

The profile shows the following information:

 - Small avatar, pokemon name.
 - Big avatar
 - Height, Weight, Base Experience and Order.
 - Moves and Abilities.

> Dev: To implement this feature, it was used a react context, so you can open any pokemon profile by his name into the whole app, and a modal will popup with show up.
> To use please import the `PokemonProfileProvider` into your App and use the code below.

```tsx
// Import the context
import { usePokemonProfile } from '../contexts';

// Get show pokemon profile hook,
const { showPokemonProfile } = usePokemonProfile();

// Show pokemon profile popup
showPokemonProfile('charizard');
```

# Environment setup

Clone this project and into the root path execute `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
