-- Write your PostgreSQL query statement below
SELECT
    s.user_id,
    ROUND(COALESCE(AVG(CASE WHEN c.action = 'timeout' OR c.action IS NULL THEN 0 ELSE 1 END), 0), 2) AS confirmation_rate
FROM Signups s
LEFT JOIN Confirmations c ON s.user_id = c.user_id
GROUP BY s.user_id
