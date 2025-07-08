import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../../components/TaskItem';

describe('TaskItem Component', () => {
  const mockTask = { _id: '1', title: 'Test Task' };
  const mockOnDelete = jest.fn();

  test('renders task title', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<TaskItem task={mockTask} onDelete={mockOnDelete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});