export interface IRecipe {
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
  media: IMedia[];
  instructions: IInstruction[];
  categories: ICategory[];
}

export interface ITimeInterval{
  label: TimeIntervalLabel;
  timeValue: number;
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
  id: -1,
  titleShort: "",
  titleLong: "",
  description: "",
  originalLink: "",
  lastModifier: "",
  auditDate:  new Date(Date.now()),
  creationDate: new Date(Date.now()),
  timeIntervals:[
    {label: TimeIntervalLabel.Prep, timeValue:1, timeUnit:TimeUnit.Minutes},
    {label: TimeIntervalLabel.Cooking, timeValue:1, timeUnit:TimeUnit.Minutes}
  ],
  ingredients: [],
  media: [],
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
  id: number;
  mediaUrl: string;
  title: string;
  tag: string;
}

export interface IUnit {
  id: number;
  name: string;
  symbol: string;
}

export interface IInstruction {
  id: number;
  stepNum: number;
  description: string;
  media?: IMedia;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
}
