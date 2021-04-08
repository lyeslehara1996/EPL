package org.EPL.dao;

import org.EPL.entites.Cargaison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface CargaisonRepository extends JpaRepository<Cargaison, Long> {

}
