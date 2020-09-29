import { ChangeEvent, useCallback, useState } from 'react';

export function useInputState(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue ?? '');
  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }, [])
  return [value, onInputChange] as const
}
