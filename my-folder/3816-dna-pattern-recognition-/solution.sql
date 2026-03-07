-- Write your PostgreSQL query statement below
SELECT
    sample_id,
    dna_sequence,
    species,
    COALESCE(COUNT(CASE WHEN dna_sequence ~ '^ATG\D+' THEN 1 ELSE NULL END), 0) AS has_start,
    COALESCE(COUNT(CASE WHEN dna_sequence ~ '(TAA|TAG|TGA)$' THEN 1 ELSE NULL END), 0) AS has_stop,
    COALESCE(COUNT(CASE WHEN dna_sequence ~ 'ATAT' THEN 1 ELSE NULL END), 0) AS has_atat,
    COALESCE(COUNT(CASE WHEN dna_sequence ~ '.*GGG.*' THEN 1 ELSE NULL END), 0) AS has_ggg
FROM Samples
GROUP BY sample_id, dna_sequence, species
ORDER BY sample_id;
