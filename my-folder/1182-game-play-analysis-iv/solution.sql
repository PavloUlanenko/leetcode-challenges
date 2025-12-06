-- Write your PostgreSQL query statement below
WITH FirstLogin AS (
    SELECT 
        player_id,
        MIN(event_date) AS first_login
    FROM Activity
    GROUP BY player_id
)
SELECT ROUND(
    COUNT(DISTINCT CASE 
        WHEN a.event_date = fl.first_login + INTERVAL '1 day' 
        THEN a.player_id 
    END)::NUMERIC / 
    COUNT(DISTINCT fl.player_id), 
    2
) AS fraction
FROM FirstLogin fl
LEFT JOIN Activity a ON fl.player_id = a.player_id;
