import { AnyZodObject, z } from 'zod'


export interface IMovie {
  id: string;
  title: string;
  id_category: string;
  writer:string;
  created_at: Date;
};


export interface IMovieRequest {
  title: string;
  id_category: string;
  writer: string;
}

