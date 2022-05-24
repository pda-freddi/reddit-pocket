import { buildLinkPath } from "../buildLinkPath.js";

describe("builds correct link path for hotbar component", () => {
  describe("for the top voted section", () => {
    it("should return /top if current pathname is root", () => {
      let pathname = "/";
      let section = "top";
      expect(buildLinkPath(pathname, section)).toBe("/top");
    });

    it("should return pathname if it already ends with top", () => {
      let pathname = "/top";
      let section = "top";
      expect(buildLinkPath(pathname, section)).toBe("/top");
    });

    it("should return /top if pathname ends with /hot", () => {
      let pathname = "/hot";
      let section = "top";
      expect(buildLinkPath(pathname, section)).toBe("/top");
    });

    it("should return anypathname/top if anypathname ends with /rising", () => {
      let pathname = "/anypathname/rising";
      let section = "top";
      expect(buildLinkPath(pathname, section)).toBe("/anypathname/top");
    });

    it("should return pathname/top for any given pathname", () => {
      let pathname = "/anypathname/";
      let section = "top";
      expect(buildLinkPath(pathname, section)).toBe("/anypathname/top");
    });
  });
});