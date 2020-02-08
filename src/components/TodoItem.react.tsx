import React, { Component } from "react";
import { Icon } from "antd";

type TodoItemProps = {
  index: number;
  text: string;
  onDelete: any;
};

type TodoItemState = {};

class TodoItem extends Component<TodoItemProps, TodoItemState> {
  state: TodoItemState = {};

  public constructor(props: TodoItemProps) {
    super(props);
  }

  private handleOnClick = () => {
    this.props.onDelete(this.props.index);
  };

  render() {
    return (
      <div style={{ width: "100%", padding: "10px 0px" }}>
        {this.props.text}
        <Icon
          theme="outlined"
          type="delete"
          style={{ float: "right" }}
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}

export default TodoItem;
