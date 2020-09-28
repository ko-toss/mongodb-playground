import { useCallback, useState } from 'react';
import { getSomeData } from 'remotes/getSomeData';
import { useDispatch, useSelector } from 'react-redux';
import { someAction, someEpicAction } from 'store/actions/someActions';
import { selectSomeFeatureEpicReducerValue, selectSomeFeatureReducerValue } from 'store/selectors/someSelector';

export function IndexPage() {
  const dispatch = useDispatch();
  const someFeatureValue = useSelector(selectSomeFeatureReducerValue);
  const someEpicFeatureValue = useSelector(selectSomeFeatureEpicReducerValue)

  const [data, setData] = useState('');

  const handleClicked = useCallback(async () => {
    const someData = await getSomeData()
    setData(someData)
  }, [])

  return <div>
    Index Page
    <button onClick={handleClicked}>Some Button</button>
    <div>{data}</div>

    <button onClick={() => dispatch(someAction(100))}>Redux Button</button>
    <div>{someFeatureValue}</div>

    <button onClick={() => dispatch(someEpicAction(100))}>Redux Epic Button</button>
    <div>{someEpicFeatureValue}</div>
  </div>
}
