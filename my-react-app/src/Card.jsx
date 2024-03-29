import profilePic from "./assets/AJ.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h1 className="card-title">AJ Code</h1>
      <p className="card-text">I am a Software Engineer</p>
    </div>
  );
}
export default Card;
