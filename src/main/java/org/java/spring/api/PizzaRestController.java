package org.java.spring.api;

import java.util.List;
import org.java.spring.Pizza;
import org.java.spring.services.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1.0/pizzas")
public class PizzaRestController {

	@Autowired
	private PizzaService pizzaService;

	@GetMapping
	public ResponseEntity<List<Pizza>> getIndex(@RequestParam(required = false) String searched) {
		
		List<Pizza> pizzas = searched == null ? pizzaService.findAll() : pizzaService.findByName(searched);
		
		return new ResponseEntity<>(pizzas, HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Pizza> getPizza(@PathVariable int id) {
		
		Pizza pizza = pizzaService.findById(id);
		
		if(pizza == null) return new ResponseEntity<>(pizza, HttpStatus.OK);
		
		return new ResponseEntity<>(pizza, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Pizza> create(@RequestBody Pizza pizza) {

		pizzaService.save(pizza);
		
		return new ResponseEntity<>(pizza, HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Pizza> update(
			@PathVariable int id,
			@RequestBody Pizza newPizza) {
		
		Pizza pizza = pizzaService.findById(id);
		
		pizza.setName(newPizza.getName());
		pizza.setDescription(newPizza.getDescription());
		pizza.setImg(newPizza.getImg());
		pizza.setPrice(newPizza.getPrice());
		pizza.setIngredients(newPizza.getIngredients());
		
		pizzaService.save(pizza);
		
		return new ResponseEntity<>(pizza, HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Pizza> delete(@PathVariable int id) {
		
		pizzaService.deleteById(id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
