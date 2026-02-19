-- Write your PostgreSQL query statement below
WITH stores_union AS (
    SELECT
        product_id,
        'store1' AS store,
        store1 AS price
    FROM Products p1
    WHERE p1.store1 IS NOT NULL
    UNION ALL
    SELECT
        product_id,
        'store2' AS store,
        store2 AS price
    FROM Products p2
    WHERE p2.store2 IS NOT NULL
    UNION ALL
    SELECT
        product_id,
        'store3' AS store,
        store3 AS price
    FROM Products p3
    WHERE p3.store3 IS NOT NULL
)
SELECT
    *
FROM stores_union;
