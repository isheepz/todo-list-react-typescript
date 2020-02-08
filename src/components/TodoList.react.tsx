import React, { Component } from "react";
import TodoItem from "./TodoItem.react";

type TodoListProps = {
  data: Array<string>;
  onDelete: any;
};

type TodoListState = {};

class TodoList extends Component<TodoListProps, TodoListState> {
  state: TodoListState = {};

  public constructor(props: TodoListProps) {
    super(props);
  }

  private onDelete = (index: number) => {
    this.props.onDelete(index);
  };

  public render = () => {
    const items =
      this.props.data != null
        ? this.props.data.map((item, index) => (
            <TodoItem
              key={index}
              index={index}
              text={item}
              onDelete={this.onDelete}
            />
          ))
        : "";

    return <div style={{ fontSize: "120%" }}>{items}</div>;
  };
}

export default TodoList;
