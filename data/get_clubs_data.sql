-- get Clubs

select
	name,
	concat(address_one, char(10), address_two) as addressName,
	address_three as street,
    zip_code as zipCode,
	city,
	'Germany' as country,
    email,
    founded_date as dateOfFoundation,
	description,
    website,
    ishd_id as ishdId,
	case published when 1 then 'true' else 'false' end as active,
	id as legacyId
from jos_bishl_club

