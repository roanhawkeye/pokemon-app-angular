import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, RichPokemon } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemon-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  private _pokemons: RichPokemon[] = [];
  private _pokemonBk: RichPokemon[] = [];

  constructor( private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
    .toPromise()
    .then( response => {
      this._pokemons = response || [];
      this._pokemonBk = this._pokemons;
      console.log({pokemons: this._pokemons});
    });
  }

  filterPokemons(query: string){
    if(query.length === 0){
      this._pokemons = this._pokemonBk;
      return;
    }

    this._pokemons = this._pokemons.filter(pokemon => pokemon.name.includes(query));
  }

  get pokemons(): RichPokemon[]{
    return this._pokemons;
  }

}
