import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";

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
    </>
  );
}

export default App;
