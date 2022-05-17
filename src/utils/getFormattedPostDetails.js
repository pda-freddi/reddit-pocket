/* Calculates the date difference between current time and date the post was sent 
and returns appropriate strings to display in component */
export function getFormattedPostDate(postCreatedDate) {

  const currentDate = new Date();
  const today = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
    hour: currentDate.getHours(),
    minutes: currentDate.getMinutes()
  }

  const creationDate = new Date(postCreatedDate * 1000);
  const sent = {
    year: creationDate.getFullYear(),
    month: creationDate.getMonth(),
    day: creationDate.getDate(),
    hour: creationDate.getHours(),
    minutes: creationDate.getMinutes()
  }

  let formattedPostDate = "";

  if (today.year !== sent.year) {
    const yearsDiff = (today.year - sent.year);
    formattedPostDate = yearsDiff > 1 ? yearsDiff + " years ago"
    : yearsDiff + " year ago";
  } else if (today.month !== sent.month) {
    const monthsDiff = (today.month - sent.month);
    formattedPostDate = monthsDiff > 1 ? monthsDiff + " months ago"
    : monthsDiff + " month ago";
  } else if (today.day !== sent.day) {
    const daysDiff = (today.day - sent.day);
    formattedPostDate = daysDiff > 1 ? daysDiff + " days ago"
    : daysDiff + " day ago";
  } else if (today.hour !== sent.hour) {
    const hoursDiff = (today.hour - sent.hour);
    formattedPostDate =  hoursDiff > 1 ? hoursDiff + " hours ago" 
    : hoursDiff + " hour ago";
  } else if (today.minutes !== sent.minutes) {
    const minutesDiff = (today.minutes - sent.minutes);
    formattedPostDate = minutesDiff > 1 ? minutesDiff + " minutes ago"
    : minutesDiff + " minute ago";
  } else {
    formattedPostDate = "seconds ago";
  }

  return formattedPostDate;
}

export function getFormattedPostScore(postScore) {
  let formattedPostScore = "•";
  if (postScore > 100000) {
    formattedPostScore = (postScore / 1000).toFixed(0) + "k";
  } else if (postScore > 1000) {
    formattedPostScore = (postScore / 1000).toFixed(1) + "k";
  } else if (postScore > 10) {
    formattedPostScore = postScore;
  } 
  return formattedPostScore;
}

export function getFormattedNumOfComments(numOfComments) {
  let formattedNumOfComments = numOfComments;
  if (numOfComments > 1000) {
    formattedNumOfComments = (numOfComments / 1000).toFixed(1) + "k";
  }
  return formattedNumOfComments;
}




