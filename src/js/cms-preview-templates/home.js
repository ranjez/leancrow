import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {

    return <div>
        { widgetFor("body") }
    </div>
  }
}