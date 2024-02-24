import { Component, Input } from '@angular/core';
import { Pokemon, RichPokemon } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public pokemons: RichPokemon[] = [];

  private _shouldShowDetails: boolean = false;
  public currentPokemon!: RichPokemon;

  get shouldShowDetails(): boolean {
    return this._shouldShowDetails;
  }

  showDetails(pokemon: RichPokemon){
    this._shouldShowDetails = true;
    this.currentPokemon = pokemon;
  }

  onBackToList(showDetails: boolean){
    this._shouldShowDetails = showDetails;
  }

}
