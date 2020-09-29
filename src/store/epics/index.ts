import { combineEpics } from 'redux-observable';
import * as someFeatureEpic from './someFeature'
import * as voteEpics from './vote'

export const rootEpic = combineEpics(
  ...Object.values(someFeatureEpic),
  ...Object.values(voteEpics)
)
