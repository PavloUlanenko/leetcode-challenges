-- Write your PostgreSQL query statement below
SELECT
    p.product_id,
    p.product_name
FROM
    Sales s
JOIN Product p
ON s.product_id = p.product_id
GROUP BY p.product_id, p.product_name
HAVING MAX(s.sale_date) BETWEEN '2019-01-01' AND '2019-03-31' AND MIN(s.sale_date) BETWEEN '2019-01-01' AND '2019-03-31';
