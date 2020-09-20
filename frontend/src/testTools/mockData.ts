import { ICategory, IUnit, IRecipe, IIngredient, IMedia, IInstruction, TimeIntervalLabel, TimeUnit, ITimeInterval } from "../interfaces/recipe.interface";
const img1 =
  "https://images.unsplash.com/photo-1445847562439-f251c3799ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
const img2 =
  "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

export const categoriesMock: ICategory[] = [
    {name:"Breakfast", description:""},
    {name:"Boozy brunch", description:"Great brunch with an extra touch"}
]

export const unitsMock: IUnit[]= [
    {id:0,symbol:"Lbs", name:"Pound"},
    {id:1,symbol:"cl", name:"Centiliter"},
    {id:2,symbol:"cup", name:"Cup"},
    {id:3,symbol:"Tbsp", name:"Tablespoon"},
    {id:4,symbol:"Tsp", name:"Teaspoon"},
]
export const timeIntervalMocks : ITimeInterval[] = [
  {label: TimeIntervalLabel.Prep, timeValue:"30", timeUnit:TimeUnit.Minutes},
  {label: TimeIntervalLabel.Cooking, timeValue:"2", timeUnit:TimeUnit.Hours},
];

export const instructionsMock: IInstruction[] = [
  {stepNum: 1, description: 'Take the avocado. Open them in half and empty them in a bowl'},
  {stepNum: 2, description: 'Get a knife and fork and start slicing everything in tiny pieces'},
  {stepNum: 3, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions'},
  {stepNum: 4, description: 'Get your fork and start mashing and mixing'},
  {stepNum: 5, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container'},
]

export const ingredientsMock: IIngredient[] = [
  {id:0,name: 'Broccoli', quantity: '3', unit: unitsMock[2] },
  {id:1,name: 'Olive Oil', quantity: '1', unit: unitsMock[3] },
  {id:2,name: 'Salt', quantity: '3', unit: unitsMock[4] },
]

export const recipeMock1: IRecipe = {
    titleShort: "Guacamole",
    titleLong: "Pretty dope guac",
    description: "The story behind it ! ... there's a lot to say actually !\ntypescFirst we'd do it every other week ! Can you believe that?",
    originalLink: "https://www.haldbakedxjd.com",
    lastModifier: "manonsEmail",
    auditDate: new Date("2020-07-12"),
    creationDate: new Date("2020-07-12"),
    timeIntervals: timeIntervalMocks,
    ingredients: [] as IIngredient[],
    medias: [
        {mediaPath: img1, tag: 'picture', title:'img1'},
        {mediaPath: img2, tag: 'picture', title:'img2'}
    ] as IMedia[],
    instructions: instructionsMock,
    categories: [categoriesMock[0]],
}

