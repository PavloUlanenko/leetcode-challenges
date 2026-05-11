-- Write your PostgreSQL query statement below
WITH eligible_stores AS (
    SELECT
        store_id
    FROM inventory
    GROUP BY store_id
    HAVING COUNT(store_id) > 2
),
joined_stores AS (
    SELECT *
    FROM stores
    JOIN inventory USING (store_id)
    WHERE store_id IN (SELECT store_id FROM eligible_stores)
),
aggregated_stores AS (
    SELECT DISTINCT
        store_id,
        store_name,
        location,
        FIRST_VALUE(quantity) OVER (PARTITION BY store_id ORDER BY price DESC) AS most_exp_qty,
        FIRST_VALUE(quantity) OVER (PARTITION BY store_id ORDER BY price) AS cheapest_qty,
        FIRST_VALUE(product_name) OVER (PARTITION BY store_id ORDER BY price DESC) AS most_exp_product,
        FIRST_VALUE(product_name) OVER (PARTITION BY store_id ORDER BY price) AS cheapest_product
    FROM joined_stores
)
SELECT
    store_id,
    store_name,
    location,
    most_exp_product,
    cheapest_product,
    ROUND(cheapest_qty::NUMERIC / most_exp_qty, 2) AS imbalance_ratio
FROM aggregated_stores
WHERE cheapest_qty > most_exp_qty
ORDER BY imbalance_ratio DESC, store_name;
