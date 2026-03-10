-- Write your PostgreSQL query statement below
SELECT
    user_id,
    COUNT(prompt) AS prompt_count,
    ROUND(AVG(tokens), 2) AS avg_tokens
FROM prompts
GROUP BY user_id
HAVING COUNT(prompt) >= 3 AND COUNT(DISTINCT tokens) > 1
ORDER BY avg_tokens DESC, user_id ASC;
