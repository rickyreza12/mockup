SELECT a.crewequipment_id, a.crewdepartment_id, crewdepartment_name, a.crewoccupation_id, crewoccupation_name, 
		   crewdetail_nik, crewdetail_name,
		   --crewdetail_date,
		   DAY(crewdetail_date) AS DAY_DATE, MONTH(crewdetail_date) AS MONTH_DATE, YEAR(crewdetail_date) AS YEAR_DATE,
		   show_name
	FROM transaction_crewdetail a
	LEFT OUTER JOIN transaction_crewequipment b
		ON b.crewequipment_id = a.crewequipment_id
	LEFT OUTER JOIN master_crewdepartment c
		ON c.crewdepartment_id = a.crewdepartment_id
	LEFT OUTER JOIN master_crewoccupation d
		ON d.crewoccupation_id = a.crewoccupation_id
	WHERE 
		crewequipment_booking_startdate IS NOT NULL AND 
		crewdetail_date IS NOT NULL AND (a.crewdepartment_id <> '' or a.crewoccupation_id <> 0) AND 
		crewdetail_isCanceled = 0 AND
		crewequipment_isapprovedfinal = 1 AND b.crewdepartment_id = 'PSV' AND
		crewdepartment_name <> '' AND crewoccupation_name <> '' and 
		MONTH(crewdetail_date) = 3 and
		YEAR(crewdetail_date) = 2021 
	order by DAY_DATE asc,  YEAR_DATE desc