-- Write your PostgreSQL query statement below
SELECT 
    st.student_id, 
    st.student_name, 
    sub.subject_name,
    COUNT(ex.student_id) AS attended_exams
FROM Students st
CROSS JOIN Subjects sub
LEFT JOIN Examinations ex ON ex.student_id = st.student_id AND ex.subject_name = sub.subject_name
GROUP BY st.student_id, st.student_name, sub.subject_name
ORDER BY st.student_id, sub.subject_name;
