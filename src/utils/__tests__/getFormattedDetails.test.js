import { getFormattedDate, 
         getFormattedScore, 
         getFormattedNumOfComments } from "../getFormattedDetails.js";

/* Reddit's API always provides time values in epoch seconds, so getFormattedDate
function expects the date argument in this format */

describe("getFormattedDate", () => {
  describe("returns appropriate strings for each date", () => {
    it("should return seconds ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000);
      expect(getFormattedDate(epochSecondsDate)).toBe("seconds ago");
    });
    it("should return 1 minute ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 60;
      expect(getFormattedDate(epochSecondsDate)).toBe("1 minute ago");
    });
    it("should return 5 minutes ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 300;
      expect(getFormattedDate(epochSecondsDate)).toBe("5 minutes ago");
    });
    it("should return 1 hour ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 3600;
      expect(getFormattedDate(epochSecondsDate)).toBe("1 hour ago");    
    });
    it("should return 22 hours ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 79200;
      expect(getFormattedDate(epochSecondsDate)).toBe("22 hours ago");
    });
    it("should return 1 day ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 86400;
      expect(getFormattedDate(epochSecondsDate)).toBe("1 day ago");
    });
    it("should return 4 days ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 345600;
      expect(getFormattedDate(epochSecondsDate)).toBe("4 days ago");
    });
    it("should return 1 month ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 2628288;
      expect(getFormattedDate(epochSecondsDate)).toBe("1 month ago");
    });
    it("should return 11 months ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 29635200;
      expect(getFormattedDate(epochSecondsDate)).toBe("11 months ago");
    });
    it("should return 1 year ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 31536000;
      expect(getFormattedDate(epochSecondsDate)).toBe("1 year ago");
    });
    it("should return 5 year ago", () => {
      let date = new Date();
      let epochSecondsDate = (date.getTime() / 1000) - 173448000;
      expect(getFormattedDate(epochSecondsDate)).toBe("5 years ago");
    });
  });
});

describe("getFormattedScore", () => {
  describe("returns appropriate strings with score", () => {
    it("should return 205k", () => {
      let score = 205000;
      expect(getFormattedScore(score)).toBe("205k");
    });
    it("should return 99.9k", () => {
      let score = 99949;
      expect(getFormattedScore(score)).toBe("99.9k");
    })
    it("should return 9.53k", () => {
      let score = 9530;
      expect(getFormattedScore(score)).toBe("9.5k");
    });
    it("should return 950", () => {
      let score = 950;
      expect(getFormattedScore(score)).toBe("950");
    });
    it("should return •", () => {
      let score = 8;
      expect(getFormattedScore(score)).toBe("•");
    });
  });
});

describe("getFormattedNumOfComments", () => {
  describe("returns appropriate string with number of comments", () => {
    it("should return 15.4k", () => {
      let numOfComments = 15450;
      expect(getFormattedNumOfComments(numOfComments)).toBe("15.4k");
    });
    it("should return 2.6k", () => {
      let numOfComments = 2615;
      expect(getFormattedNumOfComments(numOfComments)).toBe("2.6k");
    });
    it("should return 450", () => {
      let numOfComments = 450;
      expect(getFormattedNumOfComments(numOfComments)).toBe("450");
    });
  });
});

