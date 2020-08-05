import { ICategory, IUnit, IRecipe, IIngredient, IMedia, IInstruction } from "../Interfaces/recipe.interface";
const img1 =
  "https://images.unsplash.com/photo-1445847562439-f251c3799ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
const img2 =
  "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

export const CategoriesMock: ICategory[] = [
    {name:"Breakfast", description:""},
    {name:"Boozy brunch", description:"Great brunch with an extra touch"}
]

export const UnitsMock: IUnit[]= [
    {symbol:"Lbs", name:"Pound"},
    {symbol:"cl", name:"Centiliter"}
]

export const RecipeMock1: IRecipe = {
    titleShort: "Guacamole",
    titleLong: "Pretty dope guac",
    description: "The story behind it ! ..., there's a lot to day actually ! \n Hy",
    originalLink: "https://www.haldbakedxjd.com",
    lastModifier: "manonsEmail",
    auditDate: new Date("2020-07-12"),
    creationDate: new Date("2020-07-12"),
    ingredients: [] as IIngredient[],
    medias: [
        {mediaPath: img1, tag: 'picture', title:'img1'},
        {mediaPath: img2, tag: 'picture', title:'img2'}
    ] as IMedia[],
    instructions: [] as IInstruction[],
    categories: [CategoriesMock[0]],
}