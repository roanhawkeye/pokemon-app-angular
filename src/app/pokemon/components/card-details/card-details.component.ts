import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetailsResponse, RichPokemon } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemon-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  @Input()
  pokemon?: RichPokemon;

  private _pokemonDetails?: PokemonDetailsResponse;

  @Output()
  public onBackToListEmitter: EventEmitter<boolean> = new EventEmitter();

  backToList(){
    this.onBackToListEmitter.emit(false);
  }


}
