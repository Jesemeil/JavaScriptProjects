import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import List1 from "./List1";
import List2 from "./List2";

function App() {
  const fruits = [
    { id: 1, name: "orange", calories: 45 },
    { id: 2, name: "apple", calories: 95 },
    { id: 3, name: "lemon", calories: 56 },
    { id: 4, name: "guava", calories: 67 },
    { id: 5, name: "pawpaw", calories: 73 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 45 },
    { id: 7, name: "calery", calories: 95 },
    { id: 8, name: "carrots", calories: 56 },
    { id: 9, name: "corn", calories: 67 },
    { id: 10, name: "broccoli", calories: 73 },
  ];

  const products = [
    { id: 11, name: "Egg", calories: 45 },
    { id: 12, name: "Meat", calories: 95 },
    { id: 13, name: "Turkey", calories: 56 },
    { id: 14, name: "Pork", calories: 67 },
    { id: 15, name: "Pig-meat", calories: 73 },
  ];

  return (
    <>
      <Header />
      <Footer />
      <Card />
      <Card />
      <Card />
      <Button />
      <Student name="Aghogho" age={27} isStudent={true} />
      <Student name="Akpan" age={78} isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={true} username="AJ Code" />
      <UserGreeting />
      <List />
      <List1 />
      <List2 items={fruits} category="Fruits" />
      <List2 items={vegetables} category="vegetables" />
      <List2 items={products} category="Products" />
    </>
  );
}

export default App;
