import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
describe("Read", () => {
    test("All Items Displayed", () => {
      render(<ToDoList/>);
      const AppleText = screen.getByText("Apples");
      const BananaText = screen.getByText("Bananas");
      expect(AppleText).toBeInTheDocument();
      expect(BananaText).toBeInTheDocument();
    });

    test("Checking",()=>{
      render(<ToDoList/>);
      const NonePurchased = screen.getByText("Items bought: 0");
      expect(NonePurchased).toBeInTheDocument();
      const checkApples = screen.getByTestId("check-box-test-Apples");
      fireEvent.click(checkApples);
      const OnePurchased = screen.getByText("Items bought: 1");
      expect(OnePurchased).toBeInTheDocument();
      const checkBananas = screen.getByTestId("check-box-test-Bananas");
      fireEvent.click(checkBananas);
      const TwoPurchased = screen.getByText("Items bought: 2");
      expect(TwoPurchased).toBeInTheDocument();
    })

});