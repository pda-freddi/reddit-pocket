import { getFetchUrl } from "../getFetchUrl.js";

describe("get correct URL for content fetching", () => {
  describe("when search params are provided", () => {
    it("should return /search.json path with query string appended", () => {
      let pathname = "/anypathname";
      let search = "?q=searchParams";
      expect(getFetchUrl(pathname, search)).toBe("https://www.reddit.com/search.json?q=searchParams");
    });
  });

  describe("when no search params are provided", () => {
    it("should return pathname.json", () => {
      let pathname = "/anypathname";
      let search = "";
      expect(getFetchUrl(pathname, search)).toBe("https://www.reddit.com/anypathname.json");
    }); 
  });
});