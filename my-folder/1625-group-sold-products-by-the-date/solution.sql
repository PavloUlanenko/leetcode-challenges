-- Write your PostgreSQL query statement below
SELECT sell_date, COUNT(DISTINCT product) as num_sold, STRING_AGG(DISTINCT product, ',' ORDER BY product ASC) as products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date ASC;
