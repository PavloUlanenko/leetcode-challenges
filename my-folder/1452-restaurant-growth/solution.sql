-- Write your PostgreSQL query statement below
WITH daily_totals AS (
    SELECT 
        visited_on,
        SUM(amount) AS daily_amount
    FROM Customer
    GROUP BY visited_on
)
SELECT
    d1.visited_on,
    SUM(d2.daily_amount) AS amount,
    ROUND(SUM(d2.daily_amount) / 7.0, 2) AS average_amount
FROM daily_totals d1
JOIN daily_totals d2 
    ON d2.visited_on BETWEEN d1.visited_on - INTERVAL '6 days' 
                       AND d1.visited_on
GROUP BY d1.visited_on
HAVING COUNT(d2.visited_on) = 7
ORDER BY d1.visited_on;
