-- Write your PostgreSQL query statement below
SELECT DISTINCT email
FROM Person p1
WHERE (SELECT COUNT(*) FROM Person p2 WHERE p1.email = p2.email) > 1;
