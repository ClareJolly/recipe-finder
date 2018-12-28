import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class ViewRecipe extends Component {

constructor(props) {
super(props)

this.state = {
  recipeDetails: ''

}

}



componentDidMount = () => {
  console.log(this.props.recipe_id)

  let urlStart = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?'
  let webApiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+this.props.recipe_id+'/information';

let tokenStr = '61a78e4b93msh2be99b23d7ed69bp1c7705jsna1e9c63f6f17';

// let url = urlStart +
// .header("X-RapidAPI-Key", "61a78e4b93msh2be99b23d7ed69bp1c7705jsna1e9c63f6f17")

  // var url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar"

  // axios.post(loginurl,userCredentials)
  axios.get(webApiUrl, {
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': tokenStr,
    // 'JsonStub-Project-Key': 'f39f1bd2-d303-4b7e-9a11-c0f049a46f87'
  },
  data: {}
}).then((data) =>
// console.log(data)
this.setState({
  recipeDetails: data.data

})
)
// .then((data) => console.log(data))
}

  render() {

    console.log(this.state)
    var rows = [];
    var fieldName
for (var i = 0; i < 5; i++) {
  fieldName = "i" + (i).toString()
  // console.log(fieldName)
// note: we add a key prop here to allow react to uniquely identify each
// element in this array. see: https://reactjs.org/docs/lists-and-keys.html
rows.push( <div key={i}><input type="text" name={fieldName} onChange={this.handleChange}/></div>);
}



    return (
      <div className="ViewRecipe">
      <div>Here are the recipe details</div>
      <div><h2>{this.state.recipeDetails.title}</h2></div>
      <div><img src={this.state.recipeDetails.image}/></div>
      <div>{this.state.recipeDetails.instructions}</div>
      <div><button onClick={() => this.props.backTo("list")}>Back</button></div>
      <div>








      </div>
      </div>
    );
  }
}

export default ViewRecipe;
