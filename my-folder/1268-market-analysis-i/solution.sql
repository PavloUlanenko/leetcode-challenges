-- Write your PostgreSQL query statement below
SELECT 
    u.user_id as buyer_id,
    u.join_date,
    COALESCE(COUNT(o.buyer_id),0) as orders_in_2019
FROM Users u
LEFT JOIN Orders o ON o.buyer_id = u.user_id
AND
    EXTRACT(YEAR FROM o.order_date) = 2019
GROUP BY
    u.user_id, u.join_date;
