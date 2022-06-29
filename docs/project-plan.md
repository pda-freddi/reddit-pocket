# Reddit Pocket Project Plan

## Table of Contents
1. [Summary](#summary)
2. [Implementation](#implementation)
3. [Development Methodology](#development-methodology)
4. [Wireframe](#wireframe)
5. [React UI Components Hierarchy](#react-ui-components-hierarchy)
6. [CSS Style Guide](#css-style-guide)

## Summary

The goal of this project is to develop a simple interactive UI for Reddit using React and Redux. 
The external data will be fetched using the JSON Reddit API. This method does not require user authentication and provides read-only data, which simplifies the logic necessary for the fetching but limits the functionality that the application can provide. Therefore, the application will feature subreddit browsing 
and displaying of posts and comments, but not the ability to post comments, rate posts and other features that would require a user account.

## Implementation

The React library will be used to write the logic of the components that make up the UI, with the Redux library serving as the state management tool for the application. With Redux, the state is centralized on a single store and the data it manages is accessed by the React components as needed. The React Router library will also be used to provide the navigability of the application between pages.

A wireframe and CSS style specification will guide the development of the visual aspects of the UI. However, most design decisions are intended to take place as the application takes shape, since this project is for educational purposes only and does not need to follow any specific design rules. The idea is to build a simple and elegant UI, with flat design and soft colors. Using CSS Grid and media queries, the application will be responsive and display appropriately on either desktop, tablets or smartphones.

Unit and integration tests will be written with Jest and React Testing Library following [Kent C. Dodds's guidelines](https://kentcdodds.com/blog/write-tests) on tests, focusing less on implementation details and more on integration tests that represent the way a user would interact with the application.

## Development Methodology 

No specific development methodology will be applied to this project. Rather a hands-on, trial and error approach will be used to provide rich opportunities to analyze and evaluate choices, make mistakes and re-think decisions along the way.

## Wireframe 

<img src="./wireframe/wireframe-desktop-mobile.png" alt="wireframe" width="600px" />

## React UI Components Hierarchy

This is a tentative division of the UI in React components. Adjustments will probably happen during development.

1. App
2. Header
- Search Bar
3. Main Content
- General Categories (hot, new, trending)
- Sidebar
- Post (score, title, content, details) 
- Comments

## CSS Style Guide

Font-family: [Poppins](https://fonts.google.com/specimen/Poppins?category=Sans+Serif#standard-styles) <br>
Color palette: <br>
<img src="./images/color-palette.png" alt="color palette" width="500px" />
* Cultured: #F5F5F5 (background)
* Rusty Red: #D83148
* Lapis Lazuli: #07599C
* Alice Blue: #E3E8F2
* Onyx: #313435
* General Purpose
* International Orange: #FF5700 (reddit orange)
* UFO Green: #3BCB56 (for up vote)
* Cadmium Red: #ED001C (for down vote)






