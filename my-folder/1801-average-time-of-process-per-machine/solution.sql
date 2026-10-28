# Write your MySQL query statement below
WITH joined_table AS (
    SELECT a1.machine_id, a1.process_id, a1.activity_type, a1.timestamp AS t1, a2.timestamp AS t2
    FROM Activity a1
    LEFT JOIN Activity a2 ON a1.process_id = a2.process_id AND a1.machine_id = a2.machine_id AND a1.activity_type != a2.activity_type
    WHERE a1.activity_type = 'start'
    ORDER BY a1.machine_id, a1.process_id
)
SELECT machine_id, ROUND(AVG(t2 - t1), 3) AS processing_time
FROM joined_table
GROUP BY machine_id;
