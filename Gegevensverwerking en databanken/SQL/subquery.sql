-- Vraag 1
select plantennaam, prijs 
from planten 
where soort='boom' 
and prijs = (select max(prijs) from planten where soort='boom')

-- Vraag 2
select plantennaam, prijs, soort 
from planten  
where prijs < = (select min(prijs) from planten where soort='vast')

-- Vraag 3
select plantennaam 
from planten  
where hoogte > (select max(hoogte) from planten where soort='vast') 
and prijs < (select avg(prijs) from planten)

-- Vraag 4
select bestelregels.art_code, bestelregels.bestelnr, bestelregels.aantal, bestelregels.bestelprijs, bestellingen.bedrag 
from bestelregels 
join bestellingen on bestelregels.bestelnr = bestellingen.bestelnr 
where bestellingen.lev_code =  (select lev_code from leveranciers 
where lev_naam='flora bv.') 
order by bestelregels.art_code
--of (zonder subquery)
select bestelregels.art_code, bestelregels.bestelnr, bestelregels.aantal, bestelregels.bestelprijs, bestellingen.bedrag 
from bestelregels 
join bestellingen on bestelregels.bestelnr = bestellingen.bestelnr  
join leveranciers on leveranciers.lev_code = bestellingen.lev_code 
where leveranciers.lev_naam= 'flora bv.' 
order by bestelregels.art_code

-- Vraag 5
-- (Toon een lijst met de bestelnrs van bestellingen van 
-- leveranciers die (momenteel) 5% korting geven)
SELECT DISTINCT Bestelnr 
FROM Bestellingen 
WHERE Lev_code IN (SELECT Lev_code FROM Leveranciers WHERE Korting >= 5)
--of
select bestelnr 
from bestellingen 
join leveranciers on bestellingen.lev_code = leveranciers.lev_code 
where korting >= 5

-- Vraag 6
select * 
from leveranciers 
where lev_code in (select lev_code from bestellingen where lev_datum < '04-01-1999')

select distinct l.* 
from leveranciers l 
inner join bestellingen b on l.lev_code = b.lev_code 
where lev_datum < '04-01-1999'

-- Vraag 7
select o.art_code, lev_code, off_prijs 
from offertes o 
join planten on o.art_code = planten.art_code 
where soort ='vast' and o.off_prijs = 
(select min(off_prijs) from offertes where art_code = o.art_code)

-- Vraag 8
select o.art_code, lev_naam, off_prijs 
from offertes o 
join leveranciers on o.lev_code = leveranciers.lev_code 
where o.off_prijs < 
(select avg(off_prijs) from offertes where art_code = o.art_code) 
order by art_code

-- Vraag 9
select b.bestelnr, lev_naam, br.art_code, plantennaam, bestelprijs 
from bestelregels br 
join planten p on br.art_code = p.art_code  
join bestellingen b on b.bestelnr = br.bestelnr 
join leveranciers l on l.lev_code = b.lev_code 
where br.bestelprijs > (select max(off_prijs) 
from offertes where art_code = br.art_code)

-- Vraag 10
select lev_naam 
from leveranciers l 
join offertes o on l.lev_code = o.lev_code 
group by lev_naam  
having count(art_code) >= 
all( select count(*) from offertes group by lev_code)
