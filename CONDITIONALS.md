# JavaScript Fundamentals

## What are conditionals?

The **if** statement executes if a condition is **true or false**. The **else** statement exectues if the **if statement is false**. You can use an **else if** statement to check if **multiple values are true or false**.

### Examples on if-else and else-if: 

```
if (condition) {
    // The code in here will be executed if the condition is true.
} else {
    // The code that executes if the if statement is false
}

if (condition) {
    // Code
} else if (condition) {
    // Code
} else {
    // Code
}
```

A **switch** statement is used when you want **to check multiple values**. You can use **multiple if-else statements** as well but it **becomes harder to read**. The **case statement contains the value you want to check in your switch**.

### Example on switch and case:

```
switch (expression) {
  case value1:
    // Code that gets executed if the expression matches the first value
    break;
  case value2:
    // Code that is executed if the expression matches the second value
    break;
  ...
  default:
    // Code that gets executed if the expression doesn't match any of the cases above
    break;
}
```