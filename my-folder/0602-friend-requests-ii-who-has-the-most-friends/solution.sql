-- Write your PostgreSQL query statement below
WITH friends AS (
    SELECT requester_id FROM RequestAccepted
    UNION ALL
    SELECT accepter_id FROM RequestAccepted
)
SELECT
    requester_id AS id,
    COUNT(requester_id) AS num
FROM friends
GROUP BY requester_id
ORDER BY COUNT(requester_id) DESC
LIMIT 1;
