import "./App.css";
import Router from "./routes/Router";
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Item from "./component/Items";

class App extends Component {
  state = {
    post: [],
    question: [],
    IsLoad: false
  };

  componentDidMount() {
    //const link = `http://163.172.139.224/wp-json/wp/v2/posts/`;
    const link = `http://localhost:3001/`;
    axios
      .get(link)
      .then(res => {
        console.log(res.data);
        this.setState({ question: res.data, IsLoad: true });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { question, IsLoad } = this.state;
    return (
      <div className="App">
        <Router />

        <h1>oikos</h1>
        {/* {post.map(e => (
          <div key={e.id}>
            <h2>{e.title.rendered}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }}
            />
          </div>
        ))} */}
        {IsLoad && <Item post={question} />}
      </div>
    );
  }
}

export default App;
