/* This function receives the pathname and search properties of the location
object from Posts component and returns the appropriate URL to be passed to the
getPosts() function */

export const getFetchUrl = (pathname, search) => {
  if (search) {
    return `https://www.reddit.com/search.json${search}`;
  }
  return `https://www.reddit.com${pathname}.json`;
};