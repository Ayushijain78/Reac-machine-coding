import "./App.css";
import Accordian from "./components/Accordian";

function App() {
  const ReactAdvantage = () => {
    return (
      <ul>
        <li>
          {" "}
          Easy creation of dynamic applications: React makes it easier to create
          dynamic web applications because it provides less coding and provides
          more functionality, whereas, with JavaScript applications, code tends
          to get complex very quickly.
        </li>
        <li>
          Improved performance: React uses virtual DOM, which makes web
          applications perform faster. Virtual DOM compares its previous state
          and updates only those components in the real DOM, whose states have
          changed, rather than updating all the components — like conventional
          web applications.
        </li>
        <li>
          Reusable components: Components are the building blocks of any React
          application, and a single app usually consists of multiple components.
          These components have their own logic and controls, and they can be
          reused through the application, which, in turn, dramatically reduces
          the development time of an application.
        </li>
        <li>
          Unidirectional data flow: React follows a unidirectional data flow.
          This means that when designing a React app, we often nest child
          components within parent components. And since the data flows in a
          single direction, it becomes easier to debug errors and know where the
          problem occurs in an application at the moment.
        </li>
        <li>
          Dedicated tools for easy debugging: Facebook has released a chrome
          extension that we can use to debug React applications. This makes the
          process of debugging React to web applications faster and easier.
        </li>
      </ul>
    );
  };
  const data = [
    {
      header: "What is ReactJS?",
      description:
        "React Js is a javascript Liabrary for creating component based UIs",
    },
    {
      header: "What is JSX?",
      description:
        "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
    },
    {
      header: "Can web browsers read JSX directly?",
      description: `Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object 
      For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel`,
    },
    {
      header: "What is the virtual DOM?",
      description: `DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. The following are some of the most frequently asked react interview questions.`,
    },
    {
      header: "Why use React instead of other frameworks, like Angular?",
      description: <ReactAdvantage />,
    },
    {
      header: "What is an event in React?",
      description: `An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
      React events are named using camelCase, rather than lowercase in HTML.
      With JSX, you pass a function as the event handler, rather than a string in HTML.`,
    },
  ];
  return (
    <div className="App">
      <h2 className="text-center">Accordian</h2>
      <Accordian data={data} />
    </div>
  );
}

export default App;
