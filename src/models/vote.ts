export interface UpsertVoteReq {
  _id?: string;
  title: string;
  description: string;
  options: string[];
}

export interface VoteDetail {
  _id: string,
  title: string,
  description: string,
  options: Array<{ title: string; count: number }>
}

