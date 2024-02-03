import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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

  constructor() { }

  searchPokemon(){
    const pokemon = this.pokemonInput.nativeElement.value;
    this.onSearchEmmiter.emit(pokemon);
    this.pokemonInput.nativeElement.value = '';
  }
}
