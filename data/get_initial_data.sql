-- get Venue
select
	name,
	short_name as shortName,
	address_one as street,
	zip_code as zipCode,
	city,
	'Germany' as country,
	latitude,
	longitude,
	image,
	description,
	case published when 1 then 'true' else 'false' end as active,
	id as legacyId
from jos_bishl_venue v

