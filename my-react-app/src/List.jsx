function List() {
  const fruits = ["orange", "apple", "lemon", "guava", "pawpaw"];

  const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  return <ul>{listItems}</ul>;
}
export default List;
