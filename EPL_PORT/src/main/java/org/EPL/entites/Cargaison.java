package org.EPL.entites;

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
public class Cargaison {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long MARCOD;
	private int MARLIB;
	private String MARMVM;
	private String TYPMAR;
	private String TYPMARLIB;
	private String MARTON;
	private int MARNBC;
	@ManyToOne
	private Escale esc;
}
