-- Write your PostgreSQL query statement below
SELECT
    e1.employee_id,
    e1.department_id
FROM Employee e1
GROUP BY e1.employee_id, e1.department_id, e1.primary_flag
HAVING e1.primary_flag = 'Y' OR (SELECT COUNT(e2.employee_id) FROM Employee e2 WHERE e2.employee_id = e1.employee_id) = 1
ORDER BY employee_id; 
