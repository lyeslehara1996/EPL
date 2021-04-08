package org.EPL.entites;

import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
public class Escale {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ESCNUM;
	private Date ESCDAR;
	private Date ESCHAR;
	private Date ESCDPD;
	private Date ESCHPD;
	private Date ESCDSO;
	private Date ESCHSO;
	private String ESCMAR;
	private Date DATPAC;
	private int  ESCTIR;
	private String ESCOBS;
	private String ESCPAV;
	@ManyToOne
	private Consignataire Cons;
	@ManyToOne
	private Navir Nav;
	@ManyToOne
	private Ligne lign;
	@OneToMany(mappedBy = "esc")
	private Collection<Cargaison> cargaisons;
	
}
