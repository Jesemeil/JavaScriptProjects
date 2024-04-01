function List() {
  const fruits = [
    { id: 1, name: "orange", calories: 45 },
    { id: 2, name: "apple", calories: 95 },
    { id: 3, name: "lemon", calories: 56 },
    { id: 4, name: "guava", calories: 67 },
    { id: 5, name: "pawpaw", calories: 73 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => a.calories - b.calories); // Sorting by calories

  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 70);

  const listItems = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}:&nbsp; {lowCalFruit.calories}
    </li>
  ));

  // const listItems = fruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name}:&nbsp; {fruit.calories}
  //   </li>
  // ));

  return <ul>{listItems}</ul>;
}
export default List;
