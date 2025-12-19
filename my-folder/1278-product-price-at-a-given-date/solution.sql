-- Write your PostgreSQL query statement below
WITH max_prices_before_date AS (
    SELECT DISTINCT ON (product_id)
        product_id, new_price AS price
    FROM Products
    WHERE change_date <= '2019-08-16'
    ORDER BY product_id, change_date DESC
)
SELECT
    *
FROM max_prices_before_date
UNION ALL
SELECT
    product_id,
    10 AS price
FROM Products
WHERE product_id NOT IN (
    SELECT product_id FROM max_prices_before_date
)
GROUP BY product_id
ORDER BY product_id;

