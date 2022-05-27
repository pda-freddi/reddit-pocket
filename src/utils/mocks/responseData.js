export const responseData = {
  subreddits: {
    data: {
      children: [
        {
          kind: "t5",
          data: {
            icon_img: "https://imgurl.com",
            id: "123",
            display_name: "subreddit one",
            url: "/r/subreddit-one/"
          }
        },
        {
          kind: "t5",
          data: {
            icon_img: "https://imgurl.com",
            id: "456",
            display_name: "subreddit two",
            url: "/r/subreddit-two/"
          }
        }
      ]
    }
  },
  posts: {
    data: {
      children: [
        {
          kind: "t3",
          data: {
            author: "author one",
            created: 1653587053,
            id: "123",
            is_video: false,
            permalink: "r/subreddit-one/comments/post-one/",
            media: null,
            num_comments: 150,
            post_hint: "image",
            score: 15000,
            subreddit_name_prefixed: "r/subreddit one",
            selftext: "",
            title: "post one",
            thumbnail: "https://thumbnail.com",
            thumbnail_height: 100,
            thumbnail_width: 140,
            url: "https://image.com"
          }
        },
        {
          kind: "t3",
          data: {
            author: "author two",
            created: 1653587785,
            id: "456",
            is_video: true,
            permalink: "r/subreddit-two/comments/post-two/",
            media: {
              reddit_video: {
                fallback_url: "https://video.com",
                is_gif: false
              }
            },
            num_comments: 8540,
            post_hint: "hosted:video",
            score: 48070,
            subreddit_name_prefixed: "r/subreddit two",
            selftext: "",
            title: "post two",
            thumbnail: "https://thumbnail.com",
            thumbnail_height: 140,
            thumbnail_width: 140,
            url: "https://video.com"
          }
        },
        {
          kind: "t3",
          data: {
            author: "author three",
            created: 1653584287,
            id: "789",
            is_video: false,
            permalink: "r/subreddit-three/comments/post-three/",
            media: null,
            num_comments: 4029,
            score: 24876,
            subreddit_name_prefixed: "r/subreddit three",
            selftext: "This is post text",
            title: "post three",
            thumbnail: "",
            url: "https://reddit.com/r/subreddit-three/comments/post-three/"
          }
        },
      ]
    }
  },
  comments: [
    {
      data: {
        children: [
          {
            kind: "t3",
            data: {
              author: "author three",
              created: 1653584287,
              id: "789",
              is_video: false,
              permalink: "r/subreddit-three/comments/post-three/",
              media: null,
              num_comments: 4029,
              score: 24876,
              subreddit_name_prefixed: "r/subreddit three",
              selftext: "This is post text",
              title: "post three",
              thumbnail: "",
              url: "https://reddit.com/r/subreddit-three/comments/post-three/"
            }
          }
        ]
      }
    },
    {
      data: {
        children: [
          {
            kind: "t1",
            data: {
              author: "comment author one",
              body: "comment one text",
              created: 1653581234,
              edited: false,
              id: "100",
              score: 540
            }
          },
          {
            kind: "t1",
            data: {
              author: "comment author two",
              body: "comment two text",
              created: 1653584567,
              edited: false,
              id: "101",
              score: 147
            }
          },
          {
            kind: "t1",
            data: {
              author: "comment author three",
              body: "comment three text",
              created: 1653587891,
              edited: 1653588054,
              id: "102",
              score: 125
            }
          },
        ]
      }
    }
  ]
};