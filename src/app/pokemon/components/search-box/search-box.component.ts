import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtPokemonInput')
  pokemonInput!: ElementRef<HTMLInputElement>

  @Output()
  onSearchEmmiter: EventEmitter<string> = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  searchPokemon(){
    const pokemon = this.pokemonInput.nativeElement.value;

    this.onSearchEmmiter.emit(pokemon);

    this.pokemonInput.nativeElement.value = '';
  }
}
