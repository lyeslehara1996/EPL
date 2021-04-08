package org.EPL.entites;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Navir {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long NAVNUM;
	private String NAVNOM;
	private int NAVLONG;
	private int NAVLARG;
	private int NAVTIR;
	private int NAVCTC;
	private String PAVINAV;
	private int  NAVCTV;
	private int NAVCTP;
	private int NAVJB;
	private String NAVPORT;
	
	@OneToMany(mappedBy = "Nav")
	private Collection<Operation> operations;
	@OneToMany(mappedBy = "Nav")
	private Collection<Escale> escales;
	@OneToMany(mappedBy = "Nav")
	private Collection<AvoirSituation> avoirsituations;

}
