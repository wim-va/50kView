/* VIEWS */

/* 1 */
CREATE VIEW off_lisse 
AS SELECT *
FROM offertes
WHERE lev_code IN(
	SELECT lev_code
	FROM leveranciers
	WHERE woonplaats = 'LISSE'
	)

/* 2 */
CREATE VIEW vgl_off_prijs (art_code, min_off, max_off, gem_off)
AS SELECT art_code, MIN(off_prijs), MAX(off_prijs), AVG(off_prijs)
FROM offertes
GROUP BY art_code	

/* 3 */
CREATE VIEW vast_laag
AS SELECT planten.*
FROM planten, plantschema
WHERE hoogte BETWEEN hoogte1 AND hoogte2
AND soort = 'VAST'
AND categorie = 'LAAG'

/* 4 */
CREATE VIEW off_lev014
AS SELECT planten.art_code, plantennaam, off_prijs, prijs
FROM planten, offertes
WHERE planten.art_code = offertes.art_code
AND lev_code = '014'

/* 5 */
CREATE VIEW besteld 
AS SELECT plantennaam, bestellingen.bestelnr, bestellingen.lev_code, bestelregels.art_code
FROM planten, bestelregels, bestellingen, offertes
WHERE planten.art_code = offertes.art_code
AND offertes.art_code = bestelregels.art_code
AND offertes.lev_code = bestellingen.lev_code
AND bestellingen.bestelnr = bestelregels.bestelnr

/* 6 */
CREATE VIEW min_prijs (art_code, plantennaam, lev_code, off_prijs, winst)
AS SELECT planten.art_code, plantennaam, lev_code, off_prijs, prijs - off_prijs
FROM planten, offertes O
WHERE planten.art_code = O.art_code
AND off_prijs = (
	SELECT MIN(off_prijs)
	FROM offertes O2
	WHERE O2.art_code = O.art_code
	)