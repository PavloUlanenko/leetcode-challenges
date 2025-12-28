-- Write your PostgreSQL query statement below
WITH orders_from_red AS (
    SELECT
        sales_id
    FROM Orders o
    LEFT JOIN Company c
    ON o.com_id = c.com_id
    WHERE c.name = 'RED'
)
SELECT
    name
FROM SalesPerson s
WHERE s.sales_id NOT IN (
    SELECT * FROM orders_from_red
);
