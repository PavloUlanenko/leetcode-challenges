-- Write your PostgreSQL query statement below
SELECT
   u.name AS NAME,
   SUM(t.amount) AS BALANCE
FROM Transactions t
LEFT JOIN Users u ON t.account = u.account
GROUP BY t.account, u.name
HAVING SUM(t.amount) > 10000;
