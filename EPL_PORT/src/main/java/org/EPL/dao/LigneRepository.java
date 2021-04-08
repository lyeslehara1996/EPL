package org.EPL.dao;

import org.EPL.entites.Ligne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LigneRepository extends JpaRepository<Ligne,Long>{

}
