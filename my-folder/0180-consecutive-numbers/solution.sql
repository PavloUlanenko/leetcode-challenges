-- Write your PostgreSQL query statement below
WITH ConsecutiveNumbers AS (
    SELECT
        CASE 
            WHEN l1.num = l2.num AND l1.num = l3.num THEN l1.num
        END AS num
    FROM Logs l1
    LEFT JOIN Logs l2 ON l1.id = (l2.id + 1)
    LEFT JOIN Logs l3 ON l1.id = (l3.id - 1)
)
SELECT DISTINCT num AS ConsecutiveNums
FROM ConsecutiveNumbers
WHERE num IS NOT NULL;
