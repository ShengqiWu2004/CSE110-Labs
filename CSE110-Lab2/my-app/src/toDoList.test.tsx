import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
describe("Read", () => {
    test("All Items Displayed", () => {
      render(<ToDoList/>);
    });

   });