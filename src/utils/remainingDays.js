import convertToBanglaNumber from "./convertNumbertoBangla";

export default function calculateRemainingTime(startDate, endDate) {
  const now = new Date(); // Get the current date

  // Define the start and end dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now > end) {
    console.log("The end date has already passed.");
    return;
  }

  // Calculate total months and days remaining
  let monthsRemaining =
    end.getMonth() -
    now.getMonth() +
    12 * (end.getFullYear() - now.getFullYear());
  let daysRemaining = Math.floor((end - now) / (1000 * 60 * 60 * 24));

  // Adjust for exact months and days
  const tempDate = new Date(
    now.getFullYear(),
    now.getMonth() + monthsRemaining,
    now.getDate()
  );
  if (tempDate > end) {
    monthsRemaining--;
    tempDate.setMonth(tempDate.getMonth() - 1);
  }
  daysRemaining = Math.floor((end - tempDate) / (1000 * 60 * 60 * 24));

  // Display the result
  return `${convertToBanglaNumber(monthsRemaining)} মাস ${convertToBanglaNumber(
    daysRemaining
  )} দিন`;
}
