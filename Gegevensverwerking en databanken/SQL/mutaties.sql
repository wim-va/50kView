/* MUTATIES */

/* 1 */
/* MySQL only */
CREATE TABLE boomleveranciers
SELECT * 
FROM leveranciers
WHERE lev_code IN(
	SELECT lev_code 
	FROM offertes
	WHERE art_code IN(
		SELECT art_code
		FROM planten
		WHERE soort = 'BOOM'
		)
	)

/* algemeen */
INSERT INTO boomleveranciers
SELECT * 
FROM leveranciers
WHERE lev_code IN(
	SELECT lev_code 
	FROM offertes
	WHERE art_code IN(
		SELECT art_code
		FROM planten
		WHERE soort = 'BOOM'
		)
	)

/* 2 */
/* MySQL only */
CREATE TABLE vaste_planten
SELECT plantennaam, planten.art_code, lev_naam, woonplaats
FROM planten, leveranciers, offertes
WHERE planten.art_code = offertes.art_code 
AND offertes.lev_code = leveranciers.lev_code
AND soort = 'VAST'

/* algemeen */
INSERT INTO vaste_planten
SELECT plantennaam, planten.art_code, lev_naam, woonplaats
FROM planten, leveranciers, offertes
WHERE planten.art_code = offertes.art_code 
AND offertes.lev_code = leveranciers.lev_code
AND soort = 'VAST'

/* 3 */
DELETE FROM offertes
WHERE lev_code = '007'
AND art_code IN(
	SELECT art_code
	FROM planten
	WHERE soort = 'VAST'
	)

/* 4 */
/* MySQL server only */
CREATE TABLE goedkoop
SELECT planten.art_code, plantennaam, lev_naam, off_prijs
FROM planten, offertes O1, leveranciers
WHERE leveranciers.lev_code = O1.lev_code
AND planten.art_code = O1.art_code
AND O1.lev_code IN(
	SELECT lev_code 
	FROM offertes O2
	WHERE O2.art_code = O1.art_code
	AND O2.off_prijs <= (
		SELECT MIN(O3.off_prijs)
		FROM offertes O3
		WHERE O3.art_code = O2.art_code
		)
	)

/* algemeen */
INSERT INTO goedkoop
SELECT planten.art_code, plantennaam, lev_naam, off_prijs
FROM planten, offertes O1, leveranciers
WHERE leveranciers.lev_code = O1.lev_code
AND planten.art_code = O1.art_code
AND O1.lev_code IN(
	SELECT lev_code 
	FROM offertes O2
	WHERE O2.art_code = O1.art_code
	AND O2.off_prijs <= (
		SELECT MIN(O3.off_prijs)
		FROM offertes O3
		WHERE O3.art_code = O2.art_code
		)
	)

/* 5 */
INSERT INTO bestellingen
VALUES('0205','009','04/23/1997','4/30/1997',160*10+20*200+55*25)

INSERT INTO bestelregels
VALUES('0205','242',10,160)

INSERT INTO bestelregels
VALUES('0205','437',200,20)

INSERT INTO bestelregels
VALUES('0205','082',25,55)


/* 6 */
DELETE FROM offertes
WHERE art_code IN(
	SELECT art_code
	FROM planten
	WHERE soort = 'WATER'
	)
	
DELETE FROM bestelregels 
WHERE art_code IN(
SELECT art_code
	FROM planten
	WHERE soort = 'WATER'
	)
	
DELETE FROM planten
WHERE soort = 'WATER'

/* 7 */
UPDATE bestellingen
SET lev_tijd = NULL
WHERE lev_code = '009'
AND art_code IN (
	SELECT art_code
	FROM planten
	)
