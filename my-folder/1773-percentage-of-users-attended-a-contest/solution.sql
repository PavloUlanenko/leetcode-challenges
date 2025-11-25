-- Write your PostgreSQL query statement below
SELECT contest_id, ROUND(COUNT(*)::NUMERIC / (SELECT COUNT(*) from Users) * 100, 2) as percentage
FROM Register r
JOIN Users u
ON r.user_id = u.user_id
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id;
