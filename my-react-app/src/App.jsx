import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Card />
      <Card />
      <Card />
      <Button />
      <Student name="Aghogho" age={27} isStudent={true} />
      <Student name="Akpan" age="78" isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={true} username="AJ Code" />
      <UserGreeting />
      <List />
    </>
  );
}

export default App;
