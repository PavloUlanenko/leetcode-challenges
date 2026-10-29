# Write your MySQL query statement below
WITH counted_exams AS (
    SELECT COUNT(*) AS attended_exams, student_id, subject_name
    FROM Examinations
    GROUP BY student_id, subject_name
)
SELECT st.student_id, st.student_name, sub.subject_name, IFNULL(c.attended_exams, 0) AS attended_exams
FROM Students st
CROSS JOIN Subjects sub
LEFT JOIN counted_exams c ON st.student_id = c.student_id AND sub.subject_name = c.subject_name
ORDER BY st.student_id, sub.subject_name;
-- select * from counted_exams
