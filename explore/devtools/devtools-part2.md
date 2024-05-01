# part2 <br>

1. The bug was caused by the data type of num1 and num2. Because they are string, the result was just concatenated, not numerically added.
2. I fixed this bug by doing type conversion in calculateSum function.