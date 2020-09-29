import { Page } from 'components/Layouts';
import { FormSection } from 'pages/VoteCreate/sections/FormSection';
import { useDispatch, useSelector } from 'react-redux';
import { createVoteReq } from 'store/actions/vote';
import { selectCreatedVoteDetail } from 'store/selectors/vote';

export function VoteCreatePage() {
  const dispatch = useDispatch();
  const createdVoteDetail = useSelector(selectCreatedVoteDetail)
  return <Page>
    <FormSection onSubmit={data => dispatch(createVoteReq(data))} />

    CREATED: {JSON.stringify(createdVoteDetail)}
  </Page>
}


