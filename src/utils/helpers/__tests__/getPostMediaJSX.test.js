import React from "react";
import { getPostMediaJSX } from "../getPostMediaJSX.js";

describe("returns appropriate JSX for each type of media", () => {
  describe("when media type is image", () => {
    it("should return an img tag with post url as src", () => {
      let post = {
        postHint: "image",
        url: "https://example.com"
      };
      expect(getPostMediaJSX(post)).toStrictEqual(
        <img src={post.url} alt="post media" className="postImage" />
      );
    });
  });
  describe("when media type is video", () => {
    it("should return a message if there's no media", () => {
      let post = {
        isVideo: true,
        media: ""
      };
      expect(getPostMediaJSX(post)).toStrictEqual(<p>This video was deleted</p>);
    });
    it("should return only a video tag if media is a gif", () => {
      let post = {
        id: 123,
        isVideo: true,
        media: {
          is_gif: true,
          fallback_url: "https://example.com"
        }
      };
      expect(getPostMediaJSX(post)).toStrictEqual(
        <>
          <video 
          id={`${post.id}v`}
          controls
          className="postVideo"
          >
            <source src={post.media.fallback_url} type="video/mp4" data-testid={`${post.id}tv`} />
          </video>
        {""}
        </>
        );
    });
    it("should return video and audio tag if media is not a gif", () => {
      let post = {
        isVideo: true,
        id: 123,
        media: {
          is_gif: false,
          fallback_url: "https://example.com"
        },
        url: "https://example2.com"
      };
      expect(getPostMediaJSX(post)).toStrictEqual(
        <>
          <video 
          id={`${post.id}v`}
          controls
          className="postVideo"
          >
            <source src={post.media.fallback_url} type="video/mp4" data-testid={`${post.id}tv`} />
          </video>
          <audio id={`${post.id}a`}>
            <source src={`${post.url}/DASH_audio.mp4`} type="audio/mp4" data-testid={`${post.id}ta`} />
            <source src="10-seconds-of-silence.mp3" type="audio/mpeg" />
          </audio>
        </>
      );
    });
  });
});