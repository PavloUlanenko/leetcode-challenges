-- Write your PostgreSQL query statement below
WITH joined_table AS (
    SELECT
        s.product_id,
        s.quantity,
        s.price,
        (CASE
            WHEN EXTRACT(MONTH FROM sale_date) = 12 OR EXTRACT(MONTH FROM sale_date) < 3
                THEN 'Winter'
            WHEN EXTRACT(MONTH FROM sale_date) < 6
                THEN 'Spring'
            WHEN EXTRACT(MONTH FROM sale_date) < 9
                THEN 'Summer'
                WHEN EXTRACT(MONTH FROM sale_date) < 12
            THEN 'Fall'
        END
        ) AS season,
        p.category
    FROM sales s
    JOIN products p USING (product_id)
),
totals_table AS (
    SELECT
        season,
        category,
        SUM(quantity) OVER (PARTITION BY season, category) AS total_quantity,
        SUM(price * quantity) OVER (PARTITION BY season, category) AS total_revenue
    FROM joined_table
),
ranked_table AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
                PARTITION BY season 
                ORDER BY total_quantity DESC, total_revenue DESC
        ) AS rank
    FROM totals_table
)
SELECT
    season,
    category,
    total_quantity,
    total_revenue
FROM ranked_table
WHERE rank = 1;
