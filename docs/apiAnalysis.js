

const state = {
  currentUrl: "https://reddit.com/lelele",
  posts: [{
    author: "author",
    url: "https://reddit.com/lalala",
    text: "text",
    subreddit: "r/lalala",
    title: "title",
    num_comments: 50,
    created: 154663156,
    ups: 5000,
    downs: 0, // if ups === 0, downs will be > 0
    is_video: false,
    media: {
      url: "https://linktovideo.com",
      height: 480,
      width: 264
    },
  }]
}

/*  
const posts = response.data.children --> returns an array of posts

Each post is an object with a data property that returns another object
with many properties about the post

posts[i].data --> object with post details

Relevant properties:

.author --> String with author's name; ex: "gyrozepp2"
.permalink --> String with link to the full post, ex: "/r/OnePiece/comments/umu2h0/one_piece_chapter_1049_spoilers/"
.selfText --> String with the text of the post in Markdown; ex: "Thanks to Etenboby from WG forums\n\nChapter 1049: **\"The world we should aspire to\"**\n\n* In the cover (...)"
.subreddit_name_prefixed --> String with name of subreddit; ex: "r/OnePiece"
.title --> String with title of the post; ex: "One Piece chapter 1049 spoilers"
.url --> String with full url of post; ex: "https://www.reddit.com/r/OnePiece/comments/umu2h0/one_piece_chapter_1049_spoilers/"
.created --> Number in milliseconds when post was created; ex: 1652215458
.num_comments --> Number with number of comments; ex: 3166
.ups --> Number of up votes received by the post; ex: 69834
.downs --> Number of down votes received by the post. It's zero in most cases
.is_video --> Boolean that informs if there's a video in the post
.media --> object containing the media of post
.secure_media --> seems to return the same as .media
.media.reddit_video --> has .dash_url and fallback_url relevant properties
.preview --> object containing preview of media
.thumbnail --> String containing a link to thumbnail; ex: https://b.thumbs.redditmedia.com/nQ-min_l6f62lxK5mYihBmpfXuofUL9FzX9zw1RZQNI.jpg



*/