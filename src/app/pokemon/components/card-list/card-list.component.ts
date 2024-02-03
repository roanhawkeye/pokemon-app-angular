import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public pokemons: Pokemon[] = [];

  private _shouldShowDetails: boolean = false;
  public pokemonName: string = "";

  get shouldShowDetails(): boolean {
    return this._shouldShowDetails;
  }

  showDetails(name: string){
    this._shouldShowDetails = true;
    this.pokemonName = name;
  }

  onBackToList(showDetails: boolean){
    this._shouldShowDetails = showDetails;
  }

}
