import { combineEpics } from 'redux-observable';
import * as someFeatureEpic from './someFeature'

export const rootEpic =  combineEpics(
  ...Object.values(someFeatureEpic)
)
