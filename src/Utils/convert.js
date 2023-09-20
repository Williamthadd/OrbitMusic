export function formatNumberToK(number) {
  if (number >= 1000) {
    // If the number is greater than or equal to 1000, convert it to "K" format
    const numInK = parseInt(Math.floor(number / 1000));
    return numInK + "K"; // Keep one decimal place and append "K"
  } else {
    // If the number is less than 1000, leave it as is
    return number.toString();
  }
}
