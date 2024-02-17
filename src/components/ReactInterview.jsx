import React from "react";

const ReactInterview = () => {
  return (
    <div>
      ReactInterview
      <h3>How to prevent componnets from rerendering?</h3>
      <p>`Ans: by using pure components. pure componets: by default components re-render when the parent rerenders, Pure components render if the props
        change|| this is used for prefomance optimization, can be achived my
        wpapping the component using memo, eg: <code>const greetings= memo(()=&gt; &#123;&#125;
        )</code>(note: memo is a HOC, takes a component returns a new component)`
      </p>
      <h3>What is data binding?</h3>
      <p>Data binding:(data syncronization between UI and the
        app state): one way binding, two way binding through controled
        componets(input onChange method)</p>
    </div>
  );
};

export default ReactInterview;
