import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

test('renders zaloguj if auth is null', () => {
    render(<Menu />)
    const link = screen.getByText()
});

test('renders wyloguj if user exists', () => {
    
});