-- Write your PostgreSQL query statement below
WITH MAX_DEPARTMENT_SALARY AS (
    SELECT
        departmentId,
        MAX(salary) AS salary
    FROM Employee
    GROUP BY departmentId
)
SELECT
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
GROUP BY d.name, e.salary, e.name, e.departmentid
HAVING e.salary IN (
    SELECT salary FROM MAX_DEPARTMENT_SALARY WHERE MAX_DEPARTMENT_SALARY.departmentId = e.departmentId
);
