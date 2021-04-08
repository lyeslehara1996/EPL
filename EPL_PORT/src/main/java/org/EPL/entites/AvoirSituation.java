package org.EPL.entites;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AvoirSituation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long SITNUM;
	private Date SITHEU;
	private Date SITDAT;
	private String SITOBS;
	private String MVMTYP;
	private String ANCPOS;
	private String NVLPOS;
	@ManyToOne
	private Navir Nav;
}
