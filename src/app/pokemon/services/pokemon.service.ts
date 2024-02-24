import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonDetailsResponse, PokemonListResponse, RichPokemon } from '../interfaces/pokemon.interfaces';
import { Observable, catchError, finalize, map, mergeMap, scan } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<RichPokemon[]>{

    const params = new HttpParams()
      .set('limit', '30');

    return this.http.get<PokemonListResponse>(`${this.baseUrl}pokemon`, { params })
      .pipe(
        mergeMap((pokemonResponse: PokemonListResponse) => pokemonResponse.results),
        mergeMap((pokemon: Pokemon) => this.http.get<PokemonDetailsResponse>(`${this.baseUrl}pokemon/${pokemon.name}`)),
        catchError(err => {
          console.error("Error", err);
          return [];
        }),
        map( (pokemonDetails: PokemonDetailsResponse): RichPokemon => {
          return <RichPokemon> {
            name: pokemonDetails.name,
            details: pokemonDetails
          }
        }),
        scan((acc: RichPokemon[], pokemon: RichPokemon) => {
          acc.push(pokemon);
          return acc;
        }, []),
        finalize(() => console.log("Gathering of pokemon and pokemon details finalized!"))
      );

  }

  getPokemonDetails(name: string): Observable<PokemonDetailsResponse> {
    return this.http.get<PokemonDetailsResponse>(`${this.baseUrl}pokemon/${name}`)
  }

}
