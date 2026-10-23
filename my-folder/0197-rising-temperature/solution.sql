# Write your MySQL query statement below
SELECT w1.id
FROM Weather w1
LEFT JOIN Weather w2
ON w2.recordDate = w1.recordDate - INTERVAL 1 DAY
WHERE w2.id IS NOT NULL AND w1.temperature > w2.temperature;
