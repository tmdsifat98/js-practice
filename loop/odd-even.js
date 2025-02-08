/*
Subtask-1:
Find all the odd numbers from 61 to 100.

Subtask-2:
Find all the even numbers from 78 to 98.
 */

for (i = 61; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("odd number:", i);
  } else {
    console.log("even number:", i);
  }
}
