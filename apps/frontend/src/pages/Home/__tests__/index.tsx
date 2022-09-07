import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "..";
import { StoresProvider } from "@stores/index";

test("<Home />", () => {
  render(
    <StoresProvider>
      <Home />
    </StoresProvider>,
  );

  const incrementBtn = screen.getByText("Incrementar");
  const decrementBtn = screen.getByText("Decrementar");
  const resetBtn = screen.getByText("Resetar");
  const count = screen.getByTestId("count");

  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);

  expect(count).toHaveTextContent("2");

  fireEvent.click(decrementBtn);

  expect(count).toHaveTextContent("1");

  fireEvent.click(resetBtn);

  expect(count).toHaveTextContent("0");
});
