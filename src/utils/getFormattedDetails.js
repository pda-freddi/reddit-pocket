/* Calculates the difference between current time and time the post/comment was sent 
and returns appropriate strings to display in component */

export function getFormattedDate(time) {
  const currentDate = new Date();
  // time parameter is expected in epoch seconds, so convert currentTime to seconds
  const currentTime = (currentDate.getTime() / 1000);
  const creationTime = time;
  // Calculate time difference and evaluate in if statements to return
  // an appropriate string
  const timeDifference = currentTime - creationTime;
  let formattedDate = "";
  /* For reference:
  1 day = 86.400 seconds
  1 week = 7 days = 604.800 seconds
  1 month = 30,42 days = 2.628.288 seconds
  1 year = 365 days = 31.536.000 seconds
  */
  if (timeDifference < 60) {
    formattedDate = "seconds ago";
  } else if (timeDifference < 120) {
    formattedDate = "1 minute ago";
  } else if (timeDifference < 3600) {
    formattedDate = Math.floor(timeDifference / 60) + " minutes ago";
  } else if (timeDifference < 7200) {
    formattedDate = "1 hour ago";
  } else if (timeDifference < 86400) {
    formattedDate = Math.floor(timeDifference / 3600) + " hours ago";
  } else if (timeDifference < 172800) {
    formattedDate = "1 day ago";
  } else if (timeDifference < 2628288) {
    formattedDate = Math.floor(timeDifference / 86400) + " days ago";
  } else if (timeDifference < 5256576) {
    formattedDate = "1 month ago";
  } else if (timeDifference < 31536000) {
    formattedDate = Math.floor(timeDifference / 2628288) + " months ago";
  } else if (timeDifference < 63072000) {
    formattedDate = "1 year ago";
  } else if (timeDifference >= 63072000) {
    formattedDate = Math.floor(timeDifference / 31536000) + " years ago";
  }
  return formattedDate;
}

export function getFormattedScore(score) {
  let formattedScore = "•";
  if (score > 100000) {
    formattedScore = (score / 1000).toFixed(0) + "k";
  } else if (score > 1000) {
    formattedScore = (score / 1000).toFixed(1) + "k";
  } else if (score > 10) {
    formattedScore = score.toString();
  }
  return formattedScore;
}

export function getFormattedNumOfComments(numOfComments) {
  if (numOfComments === undefined) return;
  let formattedNumOfComments;
  if (numOfComments > 1000) {
    formattedNumOfComments = (numOfComments / 1000).toFixed(1) + "k";
  } else {
    formattedNumOfComments = numOfComments.toString();
  }
  return formattedNumOfComments;
}




