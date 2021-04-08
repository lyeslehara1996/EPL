package org.EPL.entites;

import javax.persistence.Column;
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
public class Quai {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long QAICOD;
	private int  QAILOG;
	private int QAITIR;
	private String QAIBAS;
	private String QAIOBS;
	private int QAIPLP;
	private String QAIUTI;
	private String QAITYPE;
	private String QAILIB;
	@ManyToOne
	private Operation opr;
}
