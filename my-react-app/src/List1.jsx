function List1() {
  const foods = ["rice", "beans", "yam", "noodles", "starch"];

  const foodItems = foods.map((food) => <li>{food}</li>);

  return <ol>{foodItems}</ol>;
}
export default List1;
