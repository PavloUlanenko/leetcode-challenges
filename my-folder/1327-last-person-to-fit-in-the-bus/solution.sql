-- Write your PostgreSQL query statement below
WITH weight_limit AS (
    SELECT
        person_name,
        (SELECT SUM(weight) FROM Queue q2 WHERE q2.turn <= q1.turn) AS SUM
    FROM Queue q1
    WHERE (
        SELECT SUM(weight) FROM Queue q2 WHERE q2.turn <= q1.turn
    ) <= 1000
    ORDER BY q1.turn
)
SELECT person_name
FROM weight_limit
ORDER BY sum DESC
LIMIT 1;
