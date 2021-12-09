
import classes from './MealsSummary.module.css'
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';





const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Biryani',
      description: 'Hot Dum Biryani',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Mutton Biryani',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Veg Biryani',
      description: 'Delicious Veg Biryani',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Ice Creame',
      description: 'StrawBerry IceCreame',
      price: 18.99,
    },
  ];






const MealsAvailable = () => {

    const mealsList = DUMMY_MEALS.map( (meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />);

     return  <section className={classes.meals}>
  
              <ul style={{listStyle : "none"}}>
                   <Card>
                     {mealsList}
                   </Card>


              </ul>
        
            </section>

};

export default MealsAvailable;