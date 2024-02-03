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

}
