import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class IngredientsForm extends Component {

constructor(props) {
super(props)

this.state = {
  i1:'',
  i2:'',
  i3:'',
  i4:'',
  i0:''
}

}

handleChange = (event) => {
  // console.log(event.target.name)
  this.setState({
    [event.target.name] : event.target.value
  })

}

queryDatabase = () => {
  console.log(this.state)
  var ingredients = []
  for (var i = 0; i < 5; ++i){
    var fieldName = "i" + i.toString()
    // console.log(this.state[fieldName])
    if (this.state[fieldName] !== '') {
      ingredients.push(this.state[fieldName])
    }
  }
  console.log(ingredients)
  ingredients = ingredients.join('%2C')
  console.log(ingredients)
  // var ingredients =

  // apples%2Cflour%2Csugar
  let urlStart = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?'
  let webApiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&fillIngredients=true&ingredients='+ingredients+'';
  let fullApiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?query=burger&cuisine=american&includeIngredients='+ingredients+'&excludeIngredients=coconut%2C+mango&intolerances=peanut%2C+shellfish&type=main+course&ranking=2&minCalories=150&maxCalories=1500&minFat=5&maxFat=100&minProtein=5&maxProtein=100&minCarbs=5&maxCarbs=100&minAlcohol=0&maxAlcohol=1000&minCaffeine=0&maxCaffeine=1000&minCopper=0&maxCopper=1000&minCalcium=0&maxCalcium=1000&minCholine=0&maxCholine=1000&minCholesterol=0&maxCholesterol=1000&minFluoride=0&maxFluoride=1000&minSaturatedFat=0&maxSaturatedFat=50&minVitaminA=0&maxVitaminA=5000&minVitaminC=0&maxVitaminC=1000&minVitaminD=0&maxVitaminD=1000&minVitaminE=0&maxVitaminE=1000&minVitaminK=0&maxVitaminK=1000&minVitaminB1=0&maxVitaminB1=1000&minVitaminB2=0&maxVitaminB2=1000&minVitaminB3=0&maxVitaminB3=1000&minVitaminB5=0&maxVitaminB5=1000&minVitaminB6=0&maxVitaminB6=1000&minVitaminB12=0&maxVitaminB12=1000&minFiber=0&maxFiber=1000&minFolate=0&maxFolate=1000&minFolicAcid=0&maxFolicAcid=1000&minIodine=0&maxIodine=1000&minIron=0&maxIron=1000&minMagnesium=0&maxMagnesium=1000&minManganese=0&maxManganese=1000&minPhosphorus=0&maxPhosphorus=1000&minPotassium=0&maxPotassium=1000&minSelenium=0&maxSelenium=1000&minSodium=0&maxSodium=1000&minSugar=0&maxSugar=1000&minZinc=0&maxZinc=1000&offset=0&number=10'
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
this.props.updateRecipes(data.data)
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
      <div className="App">
      Add up to 5 ingredients
      {rows}
      <button onClick={this.queryDatabase}>Search</button>
      <div>








      </div>
      </div>
    );
  }
}

export default IngredientsForm;
