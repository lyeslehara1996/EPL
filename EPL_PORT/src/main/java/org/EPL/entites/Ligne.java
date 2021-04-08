package org.EPL.entites;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
public class Ligne {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long LGNCOD;
	private String LGNLIG;
	@OneToMany(mappedBy = "lign")
	private Collection<Escale> escales;
	@OneToMany(mappedBy = "lign")
	private Collection<ProceVerbale> proceverbales;
	
}
