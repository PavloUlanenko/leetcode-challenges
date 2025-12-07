-- Write your PostgreSQL query statement below
SELECT
    s1.id,
    CASE
        WHEN (SELECT COUNT(*) FROM Seat) % 2 != 0 AND s1.id = (SELECT COUNT(*) FROM SEAT) THEN student
        WHEN id % 2 = 0 THEN (SELECT s2.student FROM Seat s2 WHERE s2.id = s1.id - 1)
        ELSE (SELECT student FROM Seat s2 WHERE s2.id = s1.id + 1)
    END
FROM Seat s1;
