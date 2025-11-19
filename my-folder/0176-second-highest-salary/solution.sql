-- Write your PostgreSQL query statement below
SELECT (
    SELECT DISTINCT salary
    FROM Employee
    GROUP BY salary
    ORDER BY salary DESC
    OFFSET 1
    LIMIT 1
) as SecondHighestSalary;
