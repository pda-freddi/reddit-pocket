/* Calculates the date difference between current time and date the post/comment was sent 
and returns appropriate strings to display in component */
export function getFormattedDate(date) {

  const currentDate = new Date();
  const today = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
    hour: currentDate.getHours(),
    minutes: currentDate.getMinutes()
  }

  const creationDate = new Date(date * 1000);
  const sent = {
    year: creationDate.getFullYear(),
    month: creationDate.getMonth(),
    day: creationDate.getDate(),
    hour: creationDate.getHours(),
    minutes: creationDate.getMinutes()
  }

  let formattedDate = "";

  if (today.year !== sent.year) {
    const yearsDiff = (today.year - sent.year);
    formattedDate = yearsDiff > 1 ? yearsDiff + " years ago"
    : yearsDiff + " year ago";
  } else if (today.month !== sent.month) {
    const monthsDiff = (today.month - sent.month);
    formattedDate = monthsDiff > 1 ? monthsDiff + " months ago"
    : monthsDiff + " month ago";
  } else if (today.day !== sent.day) {
    const daysDiff = (today.day - sent.day);
    formattedDate = daysDiff > 1 ? daysDiff + " days ago"
    : daysDiff + " day ago";
  } else if (today.hour !== sent.hour) {
    const hoursDiff = (today.hour - sent.hour);
    formattedDate =  hoursDiff > 1 ? hoursDiff + " hours ago" 
    : hoursDiff + " hour ago";
  } else if (today.minutes !== sent.minutes) {
    const minutesDiff = (today.minutes - sent.minutes);
    formattedDate = minutesDiff > 1 ? minutesDiff + " minutes ago"
    : minutesDiff + " minute ago";
  } else {
    formattedDate = "seconds ago";
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
    formattedScore = score;
  } 
  return formattedScore;
}

export function getFormattedNumOfComments(numOfComments) {
  let formattedNumOfComments = numOfComments;
  if (numOfComments > 1000) {
    formattedNumOfComments = (numOfComments / 1000).toFixed(1) + "k";
  }
  return formattedNumOfComments;
}




