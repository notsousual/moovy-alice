
# [DEMO](https://moovy-alice.netlify.app/)
https://moovy-alice.netlify.app/

Material UI, Redux, Typescript are used. The design & markup are adaptive. Enjoy!

## :face_with_head_bandage: BUGGY API

The OMDb API is generally kind of buggy and bumpy, so I have some workarounds in the project regarding the missing typing scheme, incorrect response statuses, etc.

### :exclamation: Genre filter:
- The genre isn't provided in the search results request list ([example](https://www.omdbapi.com/?apikey=4811b5b3&s=Bat)).
 However, it's provided in the search by name/IMDb ID result, which always returns just !!1 item ([example](https://www.omdbapi.com/?apikey=4811b5b3&t=Bat&plot=full)). It's not guaranteed IMDb ID is always provided and it's not safe to just rely on the movie title, so I didn't implement the filter.

### :books: Pagination:
- Generally handled by Mui Datagrid
- API issue: The total number of pages for all results isn't provided by the API (neither the maximum amount of items per page for the method or e.g. next/prev page index), so I thought it was unreasonable to 'shoot blindly' and do a buggy implementation of calculating an approximate page size using "totalResults". The app always uses default response without pagination (I figured it shows the 1st result page).

### Response status workaround:
- The response status of the request is always 200 (OK) if you use the right API key,
even if the service can't find the movie by its name, doesn't return larger JSONs with too many results, etc.

==========================================================
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
