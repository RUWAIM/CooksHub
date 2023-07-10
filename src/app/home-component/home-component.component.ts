import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable, map } from 'rxjs';
import { Hit, Recipe } from '../model/recipe';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  myRecipe!:Hit[]

constructor(private recipeService:RecipeService){


}
  ngOnInit(): void {
    this.getrecipe('ab')

  }

getrecipe(inp:any){
  this.recipeService.getRecipe(inp).subscribe(val=>{
    console.log(val);
    this.myRecipe = val
  })
}

}
