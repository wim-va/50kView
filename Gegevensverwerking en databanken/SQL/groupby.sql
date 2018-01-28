-- Vraag 1
select soort, count(*) as aantal, avg(prijs) as 'gemiddelde prijs' 
from planten 
group by soort

-- Vraag 2
select kleur, min(prijs) as 'minimum prijs' 
from planten 
where soort='vast' 
group by kleur 
order by min(prijs)

-- Vraag 3
select lev_code, count(*) 
from offertes 
where lev_tijd <= 10 
group by lev_code

-- Vraag 4
select art_code, min(off_prijs) as 'laagste prijs', max(off_prijs) as 'hoogste prijs' 
from offertes 
group by art_code

-- Vraag 5
select soort, avg(prijs)as'gemiddelde prijs' 
from planten 
group by soort having count(*) >= 5

-- Vraag 6
select lev_tijd, avg(off_prijs) as 'gemiddelde prijs' 
from offertes 
group by lev_tijd

-- Vraag 7
select soort, min(prijs) as 'laagste prijs' 
from planten 
where bloeibegin <= 6 and bloeieinde >= 5 
group by soort
