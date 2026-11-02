# Write your MySQL query statement below
WITH joined_table AS (
    SELECT p.product_id, p.start_date, p.end_date, p.price, u.purchase_date, u.units, (
        CASE
            WHEN u.units IS NOT NULL THEN u.units * p.price
            ELSE 0
        END
    ) AS total_cost
    FROM Prices p
    LEFT JOIN UnitsSold u ON p.product_id = u.product_id AND u.purchase_date >= p.start_date AND u.purchase_date <= p.end_date
)
SELECT
    product_id,
    COALESCE(
        ROUND(SUM(total_cost) / SUM(units), 2),
        0
    ) AS average_price
FROM joined_table
GROUP BY product_id
