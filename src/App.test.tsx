import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Gustavo")).toBeInTheDocument;
    expect(getByText("Diego")).toBeInTheDocument;
    expect(getByText("Mayk")).toBeInTheDocument;
  });

  it("should be able to add new item to the list", () => {
    const { getByText, findByText } = render(<App />);

    const addButton = getByText("Adicionar");

    userEvent.click(addButton);

    expect(findByText("Novo")).toBeInTheDocument;
  });
});
