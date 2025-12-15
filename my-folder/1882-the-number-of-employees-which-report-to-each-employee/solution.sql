-- Write your PostgreSQL query statement below
SELECT
    e1.employee_id,
    e1.name,
    (SELECT COUNT(reports_to) FROM Employees e2 WHERE e1.employee_id = e2.reports_to) AS reports_count,
    ROUND((SELECT AVG(age) FROM Employees e3 WHERE e1.employee_id = e3.reports_to), 0) AS average_age
FROM Employees e1
WHERE e1.employee_id IN (
    SELECT reports_to FROM Employees
)
ORDER BY employee_id;
