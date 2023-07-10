import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hit, RootObject } from './model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  getRecipe(input:any):Observable<Hit[]>{
   return this.http.get<RootObject>(`https://api.edamam.com/api/recipes/v2?app_id=5cccf8be&app_key=0afdae4f4f6874546fbdda71619ad2a2&type=public&q=${input}`).pipe(map(res=>{
    return res.hits
   }))
  }



}
