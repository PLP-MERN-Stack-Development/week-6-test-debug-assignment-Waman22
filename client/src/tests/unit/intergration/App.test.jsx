import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import * as api from '../../api';

jest.mock('../../api');

describe('App Integration', () => {
  test('displays tasks fetched from API', async () => {
    const mockTasks = [{ _id: '1', title: 'Test Task' }];
    api.getTasks.mockResolvedValue(mockTasks);

    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
    expect(api.getTasks).toHaveBeenCalledTimes(1);
  });
});