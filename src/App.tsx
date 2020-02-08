import React from "react";
import TodoList from "./components/TodoList.react";
import TodoNewItem from "./components/TodoNewItem.react";
import { Row, Col } from "antd";

import "./App.css";

type AppState = {
  items: Array<string>;
};
class App extends React.Component<{}, AppState> {
  state: AppState = {
    items: []
  };

  // eslint-disable-next-line no-this-before-super
  public constructor(props: any) {
    super(props);
    this.onNewItem = this.onNewItem.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  private onNewItem = (item: string) => {
    let items: Array<string> = this.state.items;
    items.push(item);
    this.setState({
      items
    });
  };

  private onDelete = (index: number): void => {
    // let newItems = [...this.state.items.filter(i => i !== item)];
    let newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({
      items: newItems
    });
  };

  render() {
    console.log(process.env.REACT_APP_HOST);
    return (
      <div className="App">
        <Row gutter={24}>
          <Col span={18} offset={3}>
            <TodoNewItem onNewItem={this.onNewItem} />
            <TodoList data={this.state.items} onDelete={this.onDelete} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
