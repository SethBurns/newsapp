// export function addOneMinute(inputString: string) {
//   // Extract the time portion (HH:MM:SS) using a regular expression
//   let timeMatch = inputString.match(/\d{2}:\d{2}:\d{2}/);

//   if (timeMatch) {
//     // Split the matched time into hours, minutes, and seconds
//     let [hours, minutes, seconds] = timeMatch[0].split(':').map(Number);

//     // Add one minute
//     if (minutes < 59) {
//       minutes++;
//     } else {
//       // If minutes is 59, wrap around to 00 and subtract one from hours
//       minutes = 0;
//       if (hours < 23) {
//         hours++;
//       } else {
//         // If hours is 23, wrap around to 00 and subtract one day from the date
//         hours = 0;
//         let date = new Date(inputString);
//         date.setDate(date.getDate() - 1);
//         inputString = date.toISOString();
//       }
//     }

//     // Create a new time string with the updated values
//     let updatedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//     // Replace the original time with the updated time in the input string
//     let updatedString = inputString.replace(/\d{2}:\d{2}:\d{2}/, updatedTime);

//     return updatedString;
//   } else {
//     return "No time found in the input string.";
//   }
// }

// export function subtractOneMinute(inputString: string) {
//   // Extract the time portion (HH:MM:SS) using a regular expression
//   let timeMatch = inputString.match(/\d{2}:\d{2}:\d{2}/);

//   if (timeMatch) {
//     // Split the matched time into hours, minutes, and seconds
//     let [hours, minutes, seconds] = timeMatch[0].split(':').map(Number);

//     // Subtract one minute
//     if (minutes > 0) {
//       minutes--;
//     } else {
//       // If minutes is 0, wrap around to 59 and subtract one from hours
//       minutes = 59;
//       if (hours > 0) {
//         hours--;
//       } else {
//         // If hours is 0, wrap around to 23 and subtract one day from the date
//         hours = 23;
//         let date = new Date(inputString);
//         date.setDate(date.getDate() - 1);
//         inputString = date.toISOString();
//       }
//     }

//     // Create a new time string with the updated values
//     let updatedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//     // Replace the original time with the updated time in the input string
//     let updatedString = inputString.replace(/\d{2}:\d{2}:\d{2}/, updatedTime);

//     return updatedString;
//   } else {
//     return "No time found in the input string.";
//   }
// }

export function addSecond(d: string) {;
  const date = new Date(d);
  date.setSeconds(date.getSeconds() + 1);
  if (date.getSeconds() === 0) date.setMinutes(date.getMinutes() + 1);
  if (date.getMinutes() === 0) date.setHours(date.getHours() + 1);
  return `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date
    .getUTCDate()
    .toString()
    .padStart(
      2,
      '0'
    )}T${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}Z`;
}

export function subtractSecond(d: string) {
  console.log('d', d);
  const date = new Date(d);
  console.log('date', date.toUTCString());
  date.setSeconds(date.getSeconds() - 1);

  if (date.getSeconds() === 59) date.setMinutes(date.getMinutes() - 1);
  if (date.getMinutes() === 59) date.setHours(date.getHours() - 1);
  const updatedDate = `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date
    .getUTCDate()
    .toString()
    .padStart(
      2,
      '0'
    )}T${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}Z`;
  console.log('updated', updatedDate);
  return updatedDate;
}
