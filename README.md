# postcss_starter

This is a quick-start for [postcss](http://postcss.org/), react, and [storybook](https://storybook.js.org/).

You can see a running copy [here](http://konsumer.js.org/postcss_starter/).

Fork it, and clone your copy.

It's also how I like to structure my apps:

```
src/index.js - entry-point for react app
src/index.css - postcss root styles, shared by whole app
src/components/* - components used in app, complete with package.json files that point main to same-name file
src/**/*.test.js - unit tests
src/**/*.story.js - stories for storybook
public/ - the webroot, for static assets
```

## installation

```
npm i
```

## usage

* `npm test` - run unit-tests (generated from stories)
* `npm start` - run a live-reloading version of your app
* `npm build` - make a production version of your app, as static assets, in `public/`
* `npm run deploy` - deploy site to [gh-pages](https://pages.github.com/)
* `npm run storybook` - run your stories as a storybook
* `npm run storybook-build` - make a production version of your storybook, as static assets, in `storybook/`
* `npm test -- -u` - update test snapshots
