package org.EPL.dao;

import org.EPL.entites.ProceVerbale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProceVerbaleRepository extends JpaRepository<ProceVerbale, Long>{

}
