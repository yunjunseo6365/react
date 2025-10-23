import React from "react";
import Card from "./Card";

function Main({card}) {

    return (
          <div className="content-card-item">
              <Card card={card}/>
          </div>
    );
}

export default Main;