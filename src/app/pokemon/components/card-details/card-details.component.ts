import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonDetailsResponse } from '../../interfaces/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnChanges {
  @Input()
  pokemonName?: string;

  private _pokemonDetails?: PokemonDetailsResponse;

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.pokemonService.getPokemonDetails(this.pokemonName?.toLowerCase() || '')
      .toPromise()
      .then(response => {
        this._pokemonDetails = response;
        console.log("pokemon details: ", this._pokemonDetails);
      })
  }

  get pokemon(): PokemonDetailsResponse | undefined {
    return this._pokemonDetails;
  }


}
