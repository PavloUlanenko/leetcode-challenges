# Write your MySQL query statement below
SELECT name
FROM Employee
JOIN (SELECT managerId
        FROM Employee
        GROUP BY managerId
        HAVING COUNT(managerId) >= 5) as manager_ids
ON Employee.id = manager_ids.managerId;
