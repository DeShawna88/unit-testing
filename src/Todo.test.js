import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders a h2 tag', () => {
  const app = render(<Todo />)
  const heading = screen.getByRole('heading')
  expect(heading).toHaveTextContent('To-Do List')
});

test('adds a new task when add is clicked', () => {
  const app = render(<Todo />);
  const input = screen.getByPlaceholderText('Enter task');
  const button = screen.getByText('Add');
  fireEvent.change(input, {target: {value: 'Wash dishes'}});
  fireEvent.click(button);
  expect(screen.getByText('Wash dishes')).toBeInTheDocument()
});

test('removes a task when delete is clicked', () => {
  const app = render(<Todo />)
  const input = screen.getByPlaceholderText('Enter task');
  const addButton = screen.getByText('Add');
  fireEvent.change(input, {target: {value: 'Wash dishes'}});
  fireEvent.click(addButton);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Wash dishes')).not.toBeInTheDocument()
});