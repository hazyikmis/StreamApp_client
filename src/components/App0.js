import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOn1 = () => {
  return (
    <div>
      Page One
      <a href='/pagetwo'>Navigate to Page Two (BAD!!!!)</a>
      <Link to='/pagetwo'>Navigate to Page Two</Link>
    </div>
  );
};

const PageTw2 = () => {
  return (
    <div>
      Page Two
      <button>Click Me</button>
      <a href='/'>Navigate to Page One (BAD!!!!)</a>
      <Link to='/'>Navigate to Page One</Link>
    </div>
  );
};

const PageThr3 = () => {
  return <div>Page Three</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={PageOn1} />
        <Route path='/pagetwo' component={PageTw2} />
        <Route path='/pagetwo/pagethree' component={PageThr3} />
      </BrowserRouter>
    </div>
  );
};

export default App;
