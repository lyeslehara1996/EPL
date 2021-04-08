package org.EPL.entites;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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

public class ProceVerbale {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long PRVNUM;
	private Date PRVDATE;
	private String PRVOBS;
	
	@ManyToOne

	private Ligne lign;
	
}
