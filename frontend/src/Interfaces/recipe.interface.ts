export interface IRecipe {
  // Will generate those myself
  id?: string;
  titleShort: string;
  titleLong?: string;
  description: string;
  originalLink: string;
  lastModifier: string;
  auditDate: Date;
  creationDate: Date;
  timeIntervals: ITimeInterval[];
  ingredients: IIngredient[];
  medias: IMedia[];
  instructions: IInstruction[];
  categories: ICategory[];
}

export interface ITimeInterval{
  label: TimeIntervalLabel;
  timeValue: string;
  timeUnit: TimeUnit;
}
export enum TimeIntervalLabel{
  Prep="Prep",
  Cooking="Cooking"
}

export enum TimeUnit {
  Seconds = 'sec',
  Minutes = 'min',
  Hours = 'hours'
}


export const defaultRecipe: IRecipe = {
   
  titleShort: "",
  description: "",
  originalLink: "",
  lastModifier: "",
  auditDate:  new Date(Date.now()),
  creationDate: new Date(Date.now()),
  timeIntervals:[],
  ingredients: [],
  medias: [],
  instructions: [],
  categories: [],
}

export interface IIngredient {
  id: number;
  name: string;
  quantity: string;
  unit: IUnit;
}

export interface IMedia {
  mediaPath: string;
  title: string;
  tag: string;
}

export interface IUnit {
  id: number;
  name: string;
  symbol: string;
}

export interface IInstruction {
  stepNum: number;
  description: string;
}

export interface ICategory {
  name: string;
  description: string;
}
