export type Item = {
  date: string;
  title: string;
  desc: string;
  imgUrl: string;
  id: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchItemParams = {
  search: string;
};

export interface ItemSliceState {
  items: Item[];
  status: Status;
}
