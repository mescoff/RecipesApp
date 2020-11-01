import { IRecipe, TimeIntervalLabel, ITimeInterval, TimeUnit } from "../interfaces/recipe.interface";


/**
 * Verify recipe is valid or reformat it
 * @param recipeFromApi Recipe received from API
 */
export const formatRecipe = (recipeFromApi: IRecipe): IRecipe => {
  const formattedRecipe: IRecipe = {
    id: recipeFromApi.id,
    titleShort: recipeFromApi.titleShort,
    titleLong: recipeFromApi.titleLong,
    description: recipeFromApi.description,
    originalLink: recipeFromApi.originalLink,
    lastModifier: recipeFromApi.lastModifier,
    auditDate: recipeFromApi.auditDate,
    creationDate: recipeFromApi.creationDate,
    timeIntervals: recipeFromApi.timeIntervals ?? defaultTimeIntervals,
    ingredients: recipeFromApi.ingredients ?? [],
    media: recipeFromApi.media ?? [],
    instructions: recipeFromApi.instructions ?? [],
    categories: recipeFromApi.categories ?? [],
  }
  return formattedRecipe;
}

const defaultTimeIntervals = Object.keys(TimeIntervalLabel).map((enumKey): ITimeInterval =>
  ({ label: TimeIntervalLabel[enumKey], timeUnit: TimeUnit.Minutes, timeValue: 0 })
);