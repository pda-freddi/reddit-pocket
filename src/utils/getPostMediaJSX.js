import styles from "../components/post/Post.module.css";
import Markdown from "markdown-to-jsx";

// Check the kind of media in the post object and return appropriate JSX to render in Post component
export function getPostMediaJSX(post) {

  if (post.postHint === 'image') {
    return (
      <img src={post.url} alt="" className={styles.postImage} />
    );
  }

  if (post.isVideo) {
    if (!post.media) return <p>This video was deleted</p>;
    return (
      <>
        <video
        id={`${post.id}v`}
        controls
        src={post.media.fallback_url}
        className={styles.postVideo}>
        </video>
        {
          post.media.is_gif ?
          "" 
          :
          // audio src = `${post.url}/DASH_audio.mp4`; will return 403 error if there's no audio file
          <audio src={`${post.url}/DASH_audio.mp4`} id={`${post.id}a`}>
          </audio>
        }
      </>
    );
  }

  if (post.text) {
    return (
      <Markdown className={styles.postText}>{post.text}</Markdown>
    );
  }

  if (post.postHint === "link" || post.postHint === "rich:video" || 
  (post.postHint === undefined && !post.isVideo && !post.text && !post.url.includes("comments"))) {
    return (
      <div className={styles.postExternalLinkContainer}>
        <a 
        href={post.url} 
        target="_blank" 
        className={styles.postExternalUrl} 
        rel="noreferrer">Link to external resource</a>
        <img src={post.thumbnail.url} alt="" className={styles.postThumbnail} />
      </div>
    );
  }
}