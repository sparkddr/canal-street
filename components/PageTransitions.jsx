import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// const MainComponent

export default function PageTransitions({ children, route }) {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={route} classNames={"page"} timeout={1000}>
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}
