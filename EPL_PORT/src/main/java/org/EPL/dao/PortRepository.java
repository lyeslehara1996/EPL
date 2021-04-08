package org.EPL.dao;

import org.EPL.entites.Port;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PortRepository extends JpaRepository<Port, Long>{

}
