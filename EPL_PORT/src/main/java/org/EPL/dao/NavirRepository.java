package org.EPL.dao;

import java.util.List;

import org.EPL.entites.Navir;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface NavirRepository extends JpaRepository<Navir, Long> {
	@RestResource(path = "/navirByNom")
	public List<Navir> findByNAVNOMContains(@Param("mc") String navnom);
	
	@RestResource(path = "/navirByPage")
	public Page<Navir> findByNAVNOMContains(@Param("mc") String navirnom, Pageable pageable);
	
}
