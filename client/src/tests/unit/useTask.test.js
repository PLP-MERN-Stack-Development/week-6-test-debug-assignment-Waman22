import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from '../../hooks/useTasks';
import * as api from '../../api';

jest.mock('../../api');

describe('useTasks', () => {
  test('fetches tasks', async () => {
    const mockTasks = [{ _id: '1', title: 'Test Task' }];
    api.getTasks.mockResolvedValue(mockTasks);

    const { result, waitForNextUpdate } = renderHook(() => useTasks());
    await waitForNextUpdate();

    expect(result.current.tasks).toEqual(mockTasks);
  });
});