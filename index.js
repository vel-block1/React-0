//composable
// sample of a component
// function Sample() {
//   return <h2>Try and learn it too!</h2>;
// }
// //another sample of component
// function MainComponent() {
//   return <h1>I'am learning REACT!</h1>;
// }
//displaying component
// ReactDOM.render(
//   <div>
//     <MainComponent />
//     <Sample />
//   </div>,
//   document.getElementById("root")
// );
//Imperative Way
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);
// console.log(h1);
//Declarative way
// ReactDOM.render(
//   <h1 className="header">This is an declarative way to program</h1>,
//   document.getElementById("root")
// );

//JSX
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );
// ReactDOM.render(page, document.getElementById("root"));

// const nav = (
//   <nav>
//     <h1>Website</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );
const root = document.getElementById("root");
// ReactDOM.render(nav, root);
//
// const nav = <h1>Sample</h1>;
// const page = (
//   <div>
//     <img src="React-icon.png" alt="React Icon" width="50px" />
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>was first released in 2013</li>
//       <li>was originally created by Jordan  Walke</li>
//       <li>maintained by Facebook</li>
//       <li>powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(page, root);

//custom components

function TemporaryName() {
  return (
    <div>
      <img src="React-icon.png" alt="React Icon" width="50px" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>was first released in 2013</li>
        <li>was originally created by Jordan Walke</li>
        <li>maintained by Facebook</li>
        <li>powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<TemporaryName />, root);
function List() {
  return (
    <div>
      <header>
        <nav>
          <img width="40px" src="React-icon.png" />
        </nav>
      </header>
      <h1>Reasons why learn REACT.JS!</h1>
      <h2>
        <ol>
          <li>To learn new skill</li>
          <li>To learn framework</li>
          <li>To learn to become front-end dev</li>
        </ol>
      </h2>
      <footer>© 2023 marcellones development. All rights reserved</footer>
    </div>
  );
}

ReactDOM.render(<List />, document.getElementById("root"));
