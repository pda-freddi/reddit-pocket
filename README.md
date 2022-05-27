# Reddit Pocket

This project was built for Codecademy's Full Stack Engineering Path.

It's a Reddit Client built with React and Redux. [Reddit](https://www.reddit.com/) is a network of communities where people can dive into their interests, hobbies and passions.

This application features posts and comments delivered through Reddit's JSON API. The user can browse popular subreddits and filter the content by "hot", "top voted", "rising" and "new". A search feature is also provided to find posts that match a given search term.

A live demo can be found [here](www.example.com).

## Technologies

* React v18.1.0
* Redux Toolkit v1.8.1
* React Router v6.3.0
* CSS Modules
* [Reddit's JSON API](https://github.com/reddit-archive/reddit/wiki/API)
* Jest and React Testing Library

## Wireframe

<img src="./docs/wireframe/wireframe-desktop-mobile.png" alt="wireframe" width="600px" />

The project's plan and thought-process documentation can be found in the [docs folder](./docs).

## Screenshots

<img src="./docs/screenshots/desktop/desktop_feed.jpg" alt="post feed" width="600px" />

More screenshots of [desktop](./docs/screenshots/desktop) and [mobile](./docs/screenshots/mobile) views are available.

## Features

* Simple UI with flat design and soft colors.
* Post feed browsing by popular subreddits and sections (hot, top voted, rising and new).
* Search bar to find posts by specific terms.
* Unique view for any post and its comments.
* Responsive layout that adapts to different screen sizes.
* Relevant link to Reddit.com at the end of each section if the viewer wants to see more content or comments.

## Known Issues

* Some text posts with tables or long links can overflow the post container and break the layout pattern. The issue has to do with the markdown rendering of the content, which is currently being handled by the "markdown-to-jsx" library.
* Audio and video fall out of sync if user clicks through the video's progress bar and audio volume cannot be controlled through video controls. This happens because Reddit's videos have their audio sent in a separate file through the API. Getting them to play simultaneously was accomplished with a simple workaround, but to get them to stay in sync is a bit more complex. I'm currently looking into alternatives to fix this issue.

## Improvements

* Besides fixing the known issues, I plan to add a dropdown navigation menu for the sidebar so that this feature is also available on smaller screens.

## Acknowledgements

* Icons from [freeicons.io](https://freeicons.io/).
* Loading animation from [loading.io](https://loading.io/css/).
