import "./mail.css";

const Mail = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle"> save time, save money</h1>
      <span className="maildesc">
        sign up and we will send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Mail;
