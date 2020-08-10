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
  ingredients: IIngredient[];
  medias: IMedia[];
  instructions: IInstruction[];
  categories: ICategory[];
}


export const defaultRecipe: IRecipe = {
   
  titleShort: "",
  description: "",
  originalLink: "",
  lastModifier: "",
  auditDate:  new Date(Date.now()),
  creationDate: new Date(Date.now()),
  ingredients: [],
  medias: [],
  instructions: [],
  categories: [],
}

export interface IIngredient {
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
  name: string;
  symbol: string;
}

export interface IInstruction {
  stepNum: number;
  description: number;
}

export interface ICategory {
  name: string;
  description: string;
}
