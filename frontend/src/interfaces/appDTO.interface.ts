import { ITimeInterval, IIngredient, IInstruction, ICategory } from "./recipe.interface";

export interface IRecipeDTO {
  // Will generate those myself
  id: number;
  titleShort: string;
  titleLong?: string;
  description: string;
  originalLink: string;
  lastModifier: string;
  auditDate: Date;
  creationDate: Date;
  timeIntervals: ITimeInterval[];
  ingredients: IIngredient[];
  media: IMediaDTO[];
  instructions: IInstruction[];
  categories: ICategory[];
}


export interface IMediaDTO {
  id: number;
  mediaBytes: Uint8Array;
  title: string;
  tag: string;
}