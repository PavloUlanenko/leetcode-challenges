-- Write your PostgreSQL query statement below
SELECT
    s1.product_id,
    year AS first_year,
    s1.quantity,
    s1.price
FROM Sales s1
GROUP BY s1.product_id, s1.year, s1.quantity, s1.price
HAVING s1.year = (SELECT MIN(s2.year) FROM Sales s2 WHERE s1.product_id = s2.product_id);
