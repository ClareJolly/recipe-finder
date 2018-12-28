import React, { Component } from 'react';

import './App.css';
import Header from '../components/Header'
import IngredientsForm from './IngredientsForm'
import ViewRecipe from './ViewRecipe'

class App extends Component {

  constructor(props) {
  super(props)

  this.state = {
    recipes:[],
    viewRecipe: false,
    recipe_id:''

  }

this.updateRecipes = this.updateRecipes.bind(this);
this.backTo = this.backTo.bind(this)
  }

  chooseRecipe (id) {
    console.log(id)
    this.setState({
      viewRecipe: true,
      recipe_id: id,
      pageView: 'home'
    })
  }

  updateRecipes (recipes) {
    console.log(recipes)
    this.setState({recipes: recipes})
    // console.log(test)
  }

  backTo(view) {
    this.setState({
      pageView: view,
      viewRecipe: false
    })
  }


  render() {
    return (
      <div className="App">
      <Header />
      {this.state.recipes.length === 0 && <IngredientsForm updateRecipes={this.updateRecipes}/>}
      {(!this.state.viewRecipe ||  this.state.pageView === 'list') && <div className="recipeContainer">
      {this.state.recipes.map ((recipe, index) => {

        {/*// var inviteesArray = event.invitees_new
        // var inResponses = inviteesArray.filter(word => word.response === "IN").length*/}

        return <div key={index} onClick={() => this.chooseRecipe(recipe.id)} className="recipeDetails"><div>{recipe.title}</div><div className="recipeImage"><img src={recipe.image} /></div></div>
      })}
      </div>
      }
      {this.state.viewRecipe && <ViewRecipe backTo={this.backTo} recipe_id = {this.state.recipe_id}/>}
      </div>
    );
  }
}

export default App;
