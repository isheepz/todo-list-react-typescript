import React, { Component } from "react";
import { Input } from "antd";

type TodoNewItemState = {
  value: string;
};

type TodoNewItemProps = {
  onNewItem(item: string): void;
};

class TodoNewItem extends Component<TodoNewItemProps, TodoNewItemState> {
  state: TodoNewItemState = {
    value: ""
  };

  public handleNewItem = (item: string): void => {
    if (item !== "") {
      this.props.onNewItem(item);
      this.setState({
        value: ""
      });
    }
  };

  public handleChange = (value: string): void => {
    this.setState({ value });
  };

  public render = () => {
    return (
      <Input.Search
        size="large"
        enterButton="Add"
        value={this.state.value}
        placeholder="Enter new task"
        onChange={callback => {
          const value = callback.currentTarget.value;
          this.handleChange(value);
        }}
        onPressEnter={callback => {
          const value = callback.currentTarget.value;
          this.handleNewItem(value);
        }}
        onSearch={value => {
          this.handleNewItem(value);
        }}
        style={{ paddingBottom: "10px" }}
      />
    );
  };
}

export default TodoNewItem;
