-- Write your PostgreSQL query statement below
WITH heavy_weeks AS (
    SELECT 
        employee_id, 
        DATE_TRUNC('week', meeting_date) AS week
    FROM meetings
    GROUP BY 
        employee_id, 
        DATE_TRUNC('week', meeting_date)
    HAVING SUM(duration_hours) > 20
)
SELECT 
    hw.employee_id, 
    e.employee_name, 
    e.department, 
    COUNT(*) AS meeting_heavy_weeks
FROM heavy_weeks hw
JOIN employees e USING (employee_id)
GROUP BY 
    hw.employee_id, 
    e.employee_name, 
    e.department
HAVING COUNT(*) > 1
ORDER BY 
    meeting_heavy_weeks DESC, 
    e.employee_name ASC;
