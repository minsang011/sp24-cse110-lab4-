# part2 <br>

1. 3, since the variable within for loop is in var type, it doesn't have a scope block. Hence, it's accessible from the outside of for loop. Also, the reaons why it's 3 not 2, the number is incremented by 1 (2 -> 3) at the end of the for loop condition during the third iteration. 
2. 150. The last element in prices list is 300 and the last assingment is the half of the last element. Hence, 150. Also, accessible from the outside of for loop as it's var type variable.
3. 150. With the similar reason from the question 2: the last element in prices list is 300 and the last assingment is the half of the last element. Hence, 150. Also, accessible from the outside of for loop as it's var type variable.
4. [50, 100, 150]. The function will return the list of prices which is halved from the input.
5. It causes a ReferenceError since the variable 'i' is out of scope.
6. It causes a ReferenceError since the variable 'discountedPrice' is out of scope.
7. 150. Although 'finalPrice' is also let type variable, it is declared within the scope (function scope).
8. [50, 100, 150]. The function will return the list of prices which is halved from the input. With the similar reason from the Q7, 'discounted' will be returned with no error.
9. It causes a ReferenceError since the variable 'i' is out of scope.
10. 3, since the number of elements in prices is 3.
11. [50, 100, 150]. The function will return the list of prices which is halved from the input. Since modifying the value of const variable does not cause an error, discounted.push(discountedPrice) will run without any error. 
12. Answers
    1.  A: student.name
    2.  B: student["Grad Year"]
    3.  C: student.greeting()
    4.  D: student["Favorite Teacher"].name
    5.  E: student.courseLoad[0]
13. Answers
    1.  A: '3' + 2 = '32' Because of the string concatenation
    2.  B: '3' - 2 = 1 Because '-' will be operated as a numerial operation, '3' will be converted to an integer 3. 
    3.  C: 3 + null = 3 Because null is considered as 0 in a numerial context
    4.  D: '3' + null = '3null' Because in this case, null is considered to be a string 'null' 
    5.  E: true + 3 = 4 Because true is considered as 1 in a numerical context
    6.  F: false + null = 0 Because both false and null are considered as 0 in a numerial context
    7.  G: '3' + undefined = '3undefined' undefined will be converted into a string in this case.
    8.  H: '3' - undefined = NaN undefined is considered as NaN in a numerial context
14. Answers:
    1.  A: True, because '2' will be converted into numerial 2
    2.  B: False, lexicographically '12' is less than '2'
    3.  C: True, '2' will be converted in a numerical context since it's equality operator, not strict
    4.  D: False, because it uses strict equality operator, '2' will not be converted
    5.  E: False, because true is considered as 1 in a numerical context
    6.  F: True, anything that's not 0 is considered as true in boolean. 
15. The difference between '==' and '===' is that '===' does not allow the type coercion.
17. It will return [2,4,6], which is a doubled version of the input. It will loop through the array and double its element by the function doSomething().
19. 1 4 3 2