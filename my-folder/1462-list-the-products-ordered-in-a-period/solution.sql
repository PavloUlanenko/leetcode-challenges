-- Write your PostgreSQL query statement below
SELECT p.product_name, SUM(o.unit) AS unit
FROM Products p
RIGHT JOIN Orders o
ON p.product_id = o.product_id
WHERE (o.order_date >= '2020-02-01 00:00:00'
  AND o.order_date < '2020-03-01 00:00:00')
GROUP BY p.product_name
HAVING SUM(o.unit) >= 100;
