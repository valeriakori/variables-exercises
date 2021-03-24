/*
* Milliseconds Lived

* Write a command line application that takes a birthdate as an argument 
* and tells the user how many milliseconds, seconds and days they have lived.

* Extra: Take the average life expectancy to tell the user 
* how many seconds / days they are likely to still live.
*/

const milliseconds = 31536000000;
const seconds = milliseconds / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;
const years = days / 365;

console.log(milliseconds + "ms are " + years + "year(s)");