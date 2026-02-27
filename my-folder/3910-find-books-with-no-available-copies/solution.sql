-- Write your PostgreSQL query statement below
WITH borrowed_book_ids AS (
    SELECT
        book_id,
        COUNT(*) AS current_borrowers
    FROM borrowing_records
    WHERE return_date IS NULL
    GROUP BY book_id
)
SELECT
    lb.book_id,
    lb.title,
    lb.author,
    lb.genre,
    lb.publication_year,
    br.current_borrowers
FROM library_books lb
JOIN borrowed_book_ids br ON br.book_id = lb.book_id AND lb.total_copies = br.current_borrowers
ORDER BY br.current_borrowers DESC, lb.title;
