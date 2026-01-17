-- Write your PostgreSQL query statement below
SELECT
    COALESCE(e.employee_id, s.employee_id) AS employee_id
FROM Employees e
FULL OUTER JOIN Salaries s ON e.employee_id = s.employee_id
WHERE e.employee_id IS NULL OR s.employee_id IS NULL
ORDER BY employee_id;
-- UNION, also corect
-- SELECT
--     e.employee_id
-- FROM Employees e
-- WHERE
--     NOT EXISTS (SELECT 1 FROM Salaries s WHERE e.employee_id = s.employee_id)
-- UNION
-- SELECT
--     s.employee_id
-- FROM Salaries s
-- WHERE
--     NOT EXISTS (SELECT 1 FROM Employees e WHERE e.employee_id = s.employee_id)
-- ORDER BY employee_id ASC;
