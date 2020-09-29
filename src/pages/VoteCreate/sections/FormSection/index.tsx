import { Input } from 'components/Input';
import { useInputState } from 'hooks/useInputState';
import styled from '@emotion/styled';
import { cssCheckBox, cssPaddingH } from 'styles/layouts';
import { SubText, Text } from 'components/Contents';
import { Button } from 'components/Button';
import { ChangeEvent, useCallback, useState } from 'react';
import produce from 'immer';
import { OptionRow } from 'components/OptionRow';
import { VoteHeader } from 'components/VoteHeader';
import { UpsertVoteReq } from 'models/vote';

interface Props {
  defaultTitle?: string;
  defaultDescription?: string;
  defaultOptions?: string[]
  buttonText?: string;
  onSubmit?: (formInput: UpsertVoteReq) => void;
}

export const FormSection = ({ defaultTitle = '', defaultDescription = '', defaultOptions, buttonText = '작성하기', onSubmit }: Props) => {
  const [errorObj, setErrorObj] = useState<Record<string, string | false>>({});
  const [title, setTitle] = useInputState(defaultTitle);
  const [description, setDescription] = useInputState(defaultDescription);

  const [options, setOptionList] = useState(defaultOptions == null || defaultOptions.length < 3 ? ['', '', ''] : defaultOptions)
  const handleOptionValueChanged = useCallback((optionIndex: number, event: ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setOptionList(currList => produce(currList, draft => {
      draft[optionIndex] = event.target.value
    }))
  }, [])

  const handleButtonClicked = useCallback(() => {
    const errorObj = formError({ title, description, options });
    if (Object.values(errorObj).some(error => Boolean(error))) {
      return setErrorObj(errorObj)
    }
    onSubmit?.({ title, description, options })
  }, [description, onSubmit, options, title]);


  return <form css={cssPaddingH}>
    <TitleInput placeholder="투표 제목을 써주세요" maxLength={300} value={title} onChange={setTitle} />
    <FormErrorText>{errorObj.title}</FormErrorText>

    <DescInput placeholder="투표 설명을 써주세요" maxLength={1000} value={description} onChange={setDescription} />
    <FormErrorText>{errorObj.description}</FormErrorText>

    <VoteHeader>
      <Text>투표 옵션을 작성해주세요</Text>
    </VoteHeader>
    <FormErrorText>{errorObj.options}</FormErrorText>
    {options.map((option, index) => {
      return <OptionRow key={index}>
        <FakeCheckbox />
        <DescInput css={{ marginTop: 0, marginLeft: 8 }} placeholder={`${index + 1}번째 옵션`} value={option}
                   onChange={event => handleOptionValueChanged(index, event)} />
      </OptionRow>
    })}
    <Button type="button" css={{ marginTop: 36 }} onClick={handleButtonClicked}>{buttonText}</Button>
  </form>
}

function formError({ title, description, options }: UpsertVoteReq) {
  return {
    title: title.length === 0 && '정확한 제목을 써주세요',
    description: description.length === 0 && '정확한 글을 써주세요',
    options: options.some(option => option === '') && '최소 3개의 옵션을 정확히 써주세요'
  }
}

function FormErrorText({ children }: { children: string | false }) {
  return Boolean(children) && <SubText css={{ color: 'darkred', marginTop: 4 }}>{children}</SubText>
}

const TitleInput = styled(Input)`
  display: block;
  width: 100%;
  margin-top: 16px;
  font-size: 24px;
`

const DescInput = styled(TitleInput)`
  font-size: 18px;
`

const FakeCheckbox = styled.div`
  ${cssCheckBox};
`


