package org.EPL.dao;

import org.EPL.entites.AvoirSituation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface AvoirSituationRepository  extends JpaRepository<AvoirSituation, Long>{

}
