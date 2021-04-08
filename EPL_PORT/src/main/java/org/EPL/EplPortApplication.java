package org.EPL;

import org.EPL.dao.LigneRepository;
import org.EPL.dao.NavirRepository;
import org.EPL.dao.ProceVerbaleRepository;
import org.EPL.entites.Ligne;
import org.EPL.entites.Navir;
import org.EPL.entites.ProceVerbale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication

public class EplPortApplication implements CommandLineRunner{

	@Autowired
	private LigneRepository lignesRepository;
	@Autowired
	private ProceVerbaleRepository proceverbalesRepository;
	@Autowired
	private NavirRepository navirRepository;
	
	@Autowired
	private RepositoryRestConfiguration restConfiguration;
	
	public static void main(String[] args) {
		SpringApplication.run(EplPortApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	Ligne L1=	lignesRepository.save(new Ligne(1,"Alger-Marssielle", null, null));
	Ligne L2=	lignesRepository.save(new Ligne(2,"Alger-Espagne", null, null));
	Ligne L3=lignesRepository.save(new Ligne(3,"Marssielle-Alger", null, null));
	
	proceverbalesRepository.save(new ProceVerbale(1,null, "monObservation", L3));
	
	navirRepository.save(new Navir(1,"Tarik-ben-ziad", 255, 30, 10, 20, null, 11, 5, 0, null, null, null, null));
	navirRepository.save(new Navir(2,"Tarik-ben-Djamel", 255, 23, 10, 20, null, 11, 5, 0, null, null, null, null));
	navirRepository.save(new Navir(3,"Tassili", 255, 30, 0, 15, null, 11, 5, 0, null, null, null, null));
	navirRepository.save(new Navir(4,"Tzourt",300, 40, 19, 29, null, 7, 5, 0, null, null, null, null));
	navirRepository.save(new Navir(5,"coronia", 400, 10, 18, 21, null, 6, 5, 0, null, null, null, null));
	navirRepository.save(new Navir(6,"colombia",255, 20, 17, 10, null, 5, 5, 0, null, null, null, null));
	
	}

}
