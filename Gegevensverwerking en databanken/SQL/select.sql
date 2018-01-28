-- Vraag 1
select * 
from planten  
where soort='water' 
order by hoogte desc 

-- Vraag 2
select distinct woonplaats 
from leveranciers

-- Vraag 3
select distinct kleur 
from planten 
where kleur is not null

-- Vraag 4
select distinct soort 
from planten 
where kleur='rood'

-- Vraag 5
select * 
from planten 
where prijs > 12 and soort <> 'boom'

-- Vraag 6
select art_code, plantennaam 
from planten 
where plantennaam like '__n%' --(2 maal underscore)

-- Vraag 7
select plantennaam, Bloeieinde - Bloeibegin + 1 AS periode 
from planten 
where soort='boom' and kleur  is not null 

-- Vraag 8
select art_code, plantennaam 
from planten 
where soort='1-jarig' or soort='2-jarig'

-- Vraag 9
select * 
from planten 
where plantennaam like '%kruid%' and soort <> 'kruid'

-- Vraag 10a
select plantennaam 
from planten 
where plantennaam like '_____' --(5 underscores)

-- Vraag 10b
select plantennaam 
from planten 
where plantennaam like '_____%' --(5 underscores)

-- Vraag 10c
select plantennaam 
from planten 
where plantennaam not like '______%' --(6 underscores)

-- Vraag 11
select max(hoogte) 
from planten 
where soort='boom'

-- Vraag 12
select sum(bedrag) 
from bestellingen 
where lev_code='065'

-- Vraag 13
select count(*) as aantal, min(aantal) as minimum, max(aantal) as maximum, sum(aantal) as totaal 
from bestelregels 
where art_code='036'

-- Vraag 14
select count(*) as aantal,min(off_prijs) as 'minimum offerte' 
from offertes 
where art_code='036'
