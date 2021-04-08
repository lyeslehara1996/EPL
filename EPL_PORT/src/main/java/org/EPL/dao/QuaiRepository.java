package org.EPL.dao;

import org.EPL.entites.Quai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface QuaiRepository extends JpaRepository<Quai, Long>{

}
