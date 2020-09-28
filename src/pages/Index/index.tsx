import { useCallback, useState } from 'react';
import { getSomeData } from 'remotes/getSomeData';

export function IndexPage() {
  const [data, setData] = useState('');

  const handleClicked = useCallback(async () => {
    const someData = await getSomeData()
    setData(someData)
  }, [])

  return <div>
    Index Page
    <button onClick={handleClicked}>Some Button</button>
    <div>{data}</div>
  </div>
}
