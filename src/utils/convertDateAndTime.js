export default function convertDateAndTime(isoString) {
  // Create a new Date object from the ISO string
  const date = new Date(isoString);

  // Apply the UTC+06:00 offset
  // Note: 6 hours in milliseconds
  const offset = 6 * 60 * 60 * 1000;
  const datePlus06 = new Date(date.getTime() + offset);

  // Extract date components
  const day = String(datePlus06.getUTCDate()).padStart(2, "0");
  const month = String(datePlus06.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based, so +1
  const year = datePlus06.getUTCFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  // Extract time components
  let hours = datePlus06.getUTCHours();
  const minutes = String(datePlus06.getUTCMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedTime = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;

  // Return the formatted date and time
  return {
    date: formattedDate,
    time: formattedTime,
    timeZone: "+06:00", // Always show the UTC+06:00 time zone
  };
}
