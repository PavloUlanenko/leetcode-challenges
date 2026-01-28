-- Write your PostgreSQL query statement below
SELECT
    name
FROM Employee e
WHERE e.id IN (
    SELECT
        managerId
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(managerId) >= 5
);
