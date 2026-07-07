// Weekly reading log
Purpose: To show a weekly reading log
Inputs: day, title, minutes
Results: day of the week, book title, minutes reading
//Weekly reading log with 3 different objects each day
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
//Creates a new object using the function parameters of day, book, minutes
// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}
Purpose: Calculates the total number of minutes spent on reading.
Inputs: entries in minutes
Results: total time reading in a final numerical value
// Goes through and adds in all of the reading entries from the inputs
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
  //If book has not been counted yet, start at 1.
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }
//Stores and displays the book with highest count
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      //Updates the most-read book
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    //Readable dashboard summary message
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

Suggestion for Improvement: Create a function that calculates the average number of minutes read per day. This would give us more information on what days the person reads more (i.e. weekend vs weekday).
Test Case: Add in a book that has never been used before. This would test to see if the program correctly stores the new book and recalculates the correct number of minutes read.
