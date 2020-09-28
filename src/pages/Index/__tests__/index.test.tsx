import { getSomeData } from 'remotes/getSomeData';
import { mocked } from 'ts-jest/utils';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { IndexPage } from 'pages/Index/index';
import { Provider } from 'react-redux';
import { reduxStore } from 'store';

jest.mock('remotes/getSomeData')

const mockedGetSomeData = mocked(getSomeData);

describe('Describe what we are testing, ', () => {
  test('with details', async () => {
    mockedGetSomeData.mockReturnValue(Promise.resolve('Some fake data received'))
    const { getByText } = render(
      <Provider store={reduxStore}>
        <IndexPage />
      </Provider>
    )

    fireEvent.click(getByText('Some Button'))

    await waitFor(() => {
      expect(mockedGetSomeData.mock.calls).toHaveLength(1)
      expect(getByText('Some fake data received')).toBeInTheDocument()
    })
  })
})
