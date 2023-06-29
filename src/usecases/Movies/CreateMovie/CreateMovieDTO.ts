

export interface ICreateMovie  {
  title: string;
  writer: string;
  id_category: string;
}

export interface IMovie extends ICreateMovie {
  id: string;
  created_at: Date;
}