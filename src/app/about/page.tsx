import styles from "./about.module.scss";

const page = () => {
  return (
    <div className="container">
      <h1>about page</h1>
      <div>
        <h2>Design System</h2>
        <h3>Design principles</h3>
        <ul>
          <li>Less is more</li>
          <li>Recognisable consistency</li>
        </ul>
        <h3>UX principles</h3>
      </div>
    </div>
  );
};

export default page;
