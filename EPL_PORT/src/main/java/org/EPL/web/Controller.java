package org.EPL.web;

import java.util.List;

import org.EPL.dao.EscaleRepository;
import org.EPL.dao.NavirRepository;
import org.EPL.dao.OperationRepository;
import org.EPL.dao.ProceVerbaleRepository;
import org.EPL.entites.Escale;
import org.EPL.entites.Navir;
import org.EPL.entites.Operation;
import org.EPL.entites.ProceVerbale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class Controller {
	@Autowired
	private ProceVerbaleRepository proceverbales ;
	@Autowired
	private EscaleRepository escaleRepository;
	@Autowired
	OperationRepository operationRepository;
	@Autowired
	NavirRepository navirRepository;
	
	@GetMapping(value="/listprocesverbales")
	public List<ProceVerbale> ListProceVerbale(){
		return proceverbales.findAll();
		}
	@PostMapping(value="/addProceVerbale")
	public ProceVerbale addProceVerbale(@RequestBody ProceVerbale proces) {
		return proceverbales.save(proces);
	}
	
	
	@GetMapping(value="/listproceVerbale/{id}")
	public ProceVerbale listeProces(@PathVariable(name="id") Long PRVNUM) {
		return proceverbales.findById(PRVNUM).get();
		
	}
	
	@PutMapping(value="/UpdateproceVerbale/{id}")
	public ProceVerbale UpdateProces(@PathVariable(name="id") Long PRVNUM,@RequestBody ProceVerbale proces) {
		proces.setPRVNUM(PRVNUM);
		return proceverbales.save(proces);
	}
		@DeleteMapping(value="/deleteProcesVerbale/{id}")
		public void DeleteProces(@PathVariable(name="id") Long PRVNUM) {
			
			 proceverbales.deleteById(PRVNUM);
		
	}
		
		@GetMapping(value="/listEscale")
		public List<Escale> ListEscale(){
			return escaleRepository.findAll();
			}
		
		@PostMapping(value="/AddEscale")
		public Escale addEscale(@RequestBody Escale escal) {
			return escaleRepository.save(escal);
		}
		
		
		@GetMapping(value="/listEscale/{id}")
		public Escale listEscal(@PathVariable(name="id") Long ESCNUM) {
			return escaleRepository.findById(ESCNUM).get();
			
		}
		
		@PutMapping(value="/UpdateEscale/{id}")
		public Escale UpdateEscal(@PathVariable(name="id") Long ESCNUM,@RequestBody Escale escal) {
			escal.setESCNUM(ESCNUM);
			return escaleRepository.save(escal);
		}
			@DeleteMapping(value="/DeleteEscale/{id}")
			public void DeleteEscal(@PathVariable(name="id") Long ESCNUM) {
				
				 escaleRepository.deleteById(ESCNUM);
			
		}
			@GetMapping(value="/listOperation")
			public List<Operation> ListOperation(){
				return operationRepository.findAll();
				}
			
			@PostMapping(value="/AddOperation")
			public Operation addOperation(@RequestBody Operation opr) {
				return operationRepository.save(opr);
			}
			
			
			@GetMapping(value="/listOperation/{id}")
			public Operation listOperation(@PathVariable(name="id") Long OPRCOD) {
				return operationRepository.findById(OPRCOD).get();
				
			}
			
			@PutMapping(value="/UpdateOperation/{id}")
			public Operation UpdateOperation(@PathVariable(name="id") Long OPRCOD,@RequestBody Operation opr) {
				opr.setOPRCOD(OPRCOD);
				return operationRepository.save(opr);
			}
				@DeleteMapping(value="/DeleteOperation/{id}")
				public void DeleteOperation(@PathVariable(name="id") Long OPRCOD) {
					
					 escaleRepository.deleteById(OPRCOD);
				
			}
				
				@GetMapping(value="/listnavir")
				public List<Navir> ListNavir(){
					return navirRepository.findAll();
					}
}
