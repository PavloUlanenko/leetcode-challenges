-- Write your PostgreSQL query statement below
WITH salaries AS(
    SELECT
        e.id, e.name AS Employee, e.salary, e.departmentid, d.name AS Department,
        DENSE_RANK() OVER (PARTITION BY departmentid ORDER BY salary DESC) as salary_rank
    FROM Employee e
    JOIN Department d ON e.departmentId = d.id
    ORDER BY e.departmentid
)
SELECT
    Department, Employee, Salary
FROM salaries
WHERE salary_rank <= 3;
