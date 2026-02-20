WITH trips_extended AS (
    SELECT
        t.*,
        u.banned AS client_banned,
        u2.banned AS driver_banned
    FROM Trips t
    LEFT JOIN Users u ON t.client_id = u.users_id
    LEFT JOIN Users u2 ON t.driver_id = u2.users_id
    WHERE t.request_at >= '2013-10-01' 
      AND t.request_at <= '2013-10-03'
      AND u.banned = 'No'
      AND u2.banned = 'No'
)
SELECT
    t.request_at AS "Day",
    ROUND(
        SUM(CASE WHEN t.status IN ('cancelled_by_driver', 'cancelled_by_client') THEN 1 ELSE 0 END)::NUMERIC / 
        COUNT(*),
        2
    ) AS "Cancellation Rate"
FROM trips_extended t
GROUP BY t.request_at;
