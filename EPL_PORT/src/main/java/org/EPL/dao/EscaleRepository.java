package org.EPL.dao;

import org.EPL.entites.Escale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface EscaleRepository extends JpaRepository<Escale, Long> {

}
