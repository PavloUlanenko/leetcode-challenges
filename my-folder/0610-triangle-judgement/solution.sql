-- Write your PostgreSQL query statement below
SELECT
    *,
    CASE
        WHEN BOOL_OR(x + y > z AND y + z > x AND x + z > y)
        THEN 'Yes'
        ELSE 'No'
    END triangle
FROM Triangle
GROUP BY x, y, z;
