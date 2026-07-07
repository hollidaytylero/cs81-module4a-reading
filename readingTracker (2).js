// Weekly reading log
Purpose: To show a weekly reading log
Inputs: day, title, minutes
Results: day of the week, book title, minutes reading
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];
Purpose: Adds a new reading entry into the log
Inputs: day, title, minutes
Results: day of the week, book title, minutes reading

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}
Purpose: Calculates the total number of minutes spent on reading.
Inputs: entries in minutes
Results: total time reading in a final numerical value

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}
Purpose: Determines which book is read the most frequently according to the log.
Inputs: Different reading entries of time
Outputs: Title of the book read most frequently

// Returns the book read most frequently
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}
Purpose: Gives a daily dashboard or summary of reading.
Input: A variety of entries based on what has been read.
Output: Diary of reading information/summary of each day.

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

Suggestion for Improvement: 
Test Case: 
