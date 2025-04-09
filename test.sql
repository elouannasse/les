


SELECT *
FROM employes



SELECT nom
FROM employes


SELECT *
FROM employes
WHERE departement="IT"






SELECT *
FROM employes
WHERE salaire>3000



SELECT nom, salaire
FROM employes
WHERE departement = "RH"



SELECT *
FROM employes
WHERE nom LIKE "A%"


SELECT *
FROM employes
WHERE salaire BETWEEN 2000 and 4000




SELECT *
FROM employes
ORDER BY salaires DESC


SELECT nom , departement
FROM employes
WHERE salaire>2500 AND departement="IT"




SELECT * 
FROM employes 
WHERE nom LIKE "%e%" and departement="Finance"












INSERT INTO employes
    (nom,salaire,departement)
VALUES("Alice", 8000, 'IT' )


UPDATE employes
SET salaire=8500
WHERE id=1

DELETE FROM employes 
WHERE id=2


INSERT INTO employes (nom,salaire,departement)
VALUES
("Alice", 8000, 'IT' ),
("ssd", 9000, 'FR' )


UPDATE employes
SET departement="Ressources Humaines"
WHERE departement="RH"



DELETE from employes
WHERE salaire<2000

INSERT INTO employes (nom,salaire,departement)
VALUES ("Alice", 8000, 'IT' )




UPDATE employes
SET salaire=salire*10
WHERE departement="IT"

DELETE FROM employes
WHERE nom LIKE"A%"

INSERT into employe (nom,salire, departement)
VALUES ("zakaria",12,"IT")

UPDATE employe
SET nom="zak" ,salaire=11
WHERE id=1

DELETE FROM employes 
WHERE id=1


-- somaine 3     

-- tables employes et departements

-- Faciles


-- Joindre employes et departements sur departement_id.

select *
FROM employes e
    INNER JOIN departements d ON d.departement_id=e.departement_id


-- Sélectionner noms et départements des employés.
select nom , departement
FROM employes e
    INNER JOIN departements d ON d.departement_id=e.departement_id

-- Utiliser LEFT JOIN pour inclure tous les employés.
SELECT e.nom, d.departement 
FROM employes e
LEFT JOIN departements d ON e.departement_id = d.departement_id;


-- Moyens


-- Sélectionner les employés de "IT".
SELECT * 
FROM employes e
INNER JOIN departement d ON d.departement_id=e.departement_id
WHERE d.departement_name='IT'


-- Compter les employés par département.
SELECT COUNT(*),d.departement_name
FROM employes e
INNER JOIN departement d ON d.departement_id=e.departement_id
GROUP BY d.departement_name

-- Trouver les départements sans employés avec RIGHT JOIN.
SELECT d.departement_name
FROM employes e
RIGHT JOIN departement d ON d.departement_id=e.departement_id
WHERE e.employes_id=NULL



-- Joindre employes, departements, projets.SELECT * 
SELECT * 
FROM employes e
INNER JOIN departement d ON d.departement_id=e.departement_id
INNER JOIN projects p ON p.project_id=e.project_id



-- Difficiles

-- Trouver le salaire max par département.
SELECT MAX(e.salaire),d.departement_name
FROM employes e 
INNER JOIN departement d ON d.departement_id=e.departement_id
GROUP BY d.departement_name

-- Calculer la moyenne des salaires par département avec JOIN et GROUP BY.

SELECT AVG(e.salaire),d.departement_name
FROM employes e 
INNER JOIN departement d ON d.departement_id=e.departement_id
GROUP BY d.departement_name

-- Créer une vue avec une jointure