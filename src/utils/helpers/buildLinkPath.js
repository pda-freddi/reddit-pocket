/* Returns appropriate paths for Link elements in Hotbar component 
for different sections (hot, new, etc.) and subreddits */

export function buildLinkPath(pathname, section) {
  if (pathname === "/")
    return `/${section}`;

  const pathEndsWithHot = pathname.endsWith("hot");
  const pathEndsWithTop = pathname.endsWith("top");
  const pathEndsWithRising = pathname.endsWith("rising");
  const pathEndsWithNew = pathname.endsWith("new");

  switch (section) {
    case "hot":
      if (pathEndsWithHot)
        return `${pathname}`;
      if (pathEndsWithTop)
        return `${pathname.replace("top", "hot")}`;
      if (pathEndsWithRising)
        return `${pathname.replace("rising", "hot")}`;
      if (pathEndsWithNew)
        return `${pathname.replace("new", "hot")}`;
      return `${pathname}hot`;

    case "top":
      if (pathEndsWithTop)
        return `${pathname}`;
      if (pathEndsWithHot)
        return `${pathname.replace("hot", "top")}`;
      if (pathEndsWithRising)
        return `${pathname.replace("rising", "top")}`;
      if (pathEndsWithNew)
        return `${pathname.replace("new", "top")}`;
      return `${pathname}top`;


    case "rising":
      if (pathEndsWithRising)
        return `${pathname}`;
      if (pathEndsWithHot)
        return `${pathname.replace("hot", "rising")}`;
      if (pathEndsWithTop)
        return `${pathname.replace("top", "rising")}`;
      if (pathEndsWithNew)
        return `${pathname.replace("new", "rising")}`;
      return `${pathname}rising`;

    case "new":
      if (pathEndsWithNew)
        return `${pathname}`;
      if (pathEndsWithHot)
        return `${pathname.replace("hot", "new")}`;
      if (pathEndsWithTop)
        return `${pathname.replace("top", "new")}`;
      if (pathEndsWithRising)
        return `${pathname.replace("rising", "new")}`;
      return `${pathname}new`;

    default:
      return console.error("Unexpected section argument");
  }
}