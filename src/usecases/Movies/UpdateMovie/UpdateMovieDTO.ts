
export interface IUpdateMovie {
  title: string;
  writer: string;
  id_category: string;
}

export interface IMovie extends IUpdateMovie{
  id: string;
  created_at: Date;
}