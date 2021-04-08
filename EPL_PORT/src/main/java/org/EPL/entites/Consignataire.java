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
public class Consignataire {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long CONCOD;
	private String CONNOM;
	private String  CONLIB;
	private String CONADR;
	private int CONTEL;
	private String CONVIL;
	private String CONMEL;
	@OneToMany(mappedBy = "Cons")
	private Collection<Escale> escales;
}
