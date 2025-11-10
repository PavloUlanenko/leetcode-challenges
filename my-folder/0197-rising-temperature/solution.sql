-- Write your PostgreSQL query statement below
SELECT id
FROM Weather w1
WHERE w1.temperature > (
    SELECT temperature
    FROM Weather w2
    WHERE w2.recordDate = w1.recordDate - INTERVAL '1 day'
);
