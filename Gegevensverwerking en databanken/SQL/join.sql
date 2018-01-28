-- Vraag 1
select planten.art_code, plantennaam, lev_naam, off_prijs, lev_tijd 
from planten 
join offertes on planten.art_code=offertes.art_code 
join leveranciers on offertes.lev_code=leveranciers.lev_code 
order by plantennaam

-- Vraag 2
select categorie, plantennaam, prijs 
from plantschema 
join planten on hoogte between hoogte1 and hoogte2  
where categorie in ('midden','laag')

-- Vraag 3
select distinct woonplaats 
from leveranciers 
join offertes on leveranciers.lev_code=offertes.lev_code 
join planten on planten.art_code = offertes.art_code 
where soort='vast'

-- Vraag 4
select planten.art_code, plantennaam, soort, leveranciers.lev_naam,woonplaats 
from planten 
join offertes on planten.art_code = offertes.art_code 
join leveranciers on offertes.lev_code = leveranciers.lev_code 
where kleur ='rood' and woonplaats <> 'aalsmeer' 
order by soort, plantennaam

-- Vraag 5
select planten.art_code, plantennaam, min(off_prijs) 
from planten 
join offertes on planten.art_code = offertes.art_code 
group by plantennaam, planten.art_code 
order by plantennaam

-- Vraag 6
select plantennaam, hoogte, afstand 
from planten, plantschema 
where hoogte between hoogte1 and hoogte2  
and plantennaam in ('berk', 'beuk', 'linde')

-- Vraag 7
select bestellingen.bestelnr, leveranciers.lev_naam,sum(bestelregels.aantal) as aantal_planten, bestellingen.bedrag,
bestellingen.lev_datum 
from bestellingen, leveranciers, bestelregels
where bestellingen.lev_code = leveranciers.lev_code and
bestellingen.bestelnr = bestelregels.bestelnr
group by bestellingen.bestelnr, leveranciers.lev_naam, bestellingen.bedrag,bestellingen.lev_datum
order by bestellingen.lev_datum ASC, bestellingen.bestelnr

-- Vraag 8
select planten.plantennaam, bestelregels.bestelprijs, offertes.off_prijs 
from planten, offertes, bestellingen, bestelregels 
where planten.art_code = offertes.art_code 
AND offertes.lev_code = bestellingen.lev_code 
AND bestellingen.bestelnr  = bestelregels.bestelnr 
AND bestelregels.art_code = planten.art_code 
AND offertes.off_prijs < bestelregels.bestelprijs 

-- Vraag 9
select b1.bestelnr, b1.besteldatum 
from bestellingen b1, bestellingen b2 
where b1.besteldatum= b2.lev_datum and b1.bestelnr <> b2.bestelnr

-- Vraag 10
select bestellingen.bestelnr, lev_naam, '' as vermelding 
from bestellingen 
join leveranciers on bestellingen.lev_code = leveranciers.lev_code 
where lev_datum <= '03-23-1999' 
union 
select bestellingen.bestelnr, lev_naam, 'te laat' as vermelding 
from bestellingen 
join leveranciers on bestellingen.lev_code = leveranciers.lev_code 
where lev_datum > '03-23-1999' 
order by bestellingen.bestelnr

-- Vraag 11
select plantennaam, 'vast' as soort 
from planten 
where soort='vast'
union
select plantennaam, 'laatbloeier' 
from planten 
where soort='vast' and bloeibegin > 6
order by soort desc

-- Vraag 12
select planten.art_code, plantennaam, leveranciers.lev_code, woonplaats, '***' as indicatie 
from planten 
join offertes on planten.art_code=offertes.art_code  
join leveranciers on leveranciers.lev_code = offertes.lev_code 
where woonplaats='aalsmeer' and soort='boom'
union
select planten.art_code, plantennaam, leveranciers.lev_code, woonplaats, '' as indicatie 
from planten 
join offertes on planten.art_code=offertes.art_code 
join leveranciers on leveranciers.lev_code = offertes.lev_code 
where woonplaats<>'aalsmeer' and soort='boom'

-- Vraag 13
select bestelregels.bestelnr, offertes.art_code,  bestelprijs - off_prijs 
from offertes, bestellingen, bestelregels 
where offertes.lev_code=bestellingen.lev_code 
and bestellingen.bestelnr = bestelregels.bestelnr 
and offertes.art_code = bestelregels.art_code

--extra  vraag
select k1.kandnaam as mannen, k2.kandnaam as vrouwen 
from kandidaten k1, kandidaten k2 
where k1.geslacht='M' and k2.geslacht='V'
