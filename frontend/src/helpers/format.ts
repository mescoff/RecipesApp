import { IRecipe, TimeIntervalLabel, ITimeInterval, TimeUnit, IMedia } from "../interfaces/recipe.interface";
import { IRecipeDTO, IMediaDTO } from "../interfaces/appDTO.interface";
import { logInfo } from "./helpers";


/**
 * Verify recipe is valid or reformat it
 * @param recipeFromApi Recipe received from API
 */
export const formatRecipe = (recipeFromApi: IRecipeDTO): IRecipe => {
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
    media: recipeFromApi.media !== undefined ? transformMediaDTO(recipeFromApi.media) : [],
    instructions: recipeFromApi.instructions ?? [],
    categories: recipeFromApi.categories ?? [],
  }
  return formattedRecipe;
}

const transformMediaDTO = (mediaDTOs: IMediaDTO[]) : IMedia[] => {
  const medias: IMedia[] = mediaDTOs.map(dto => {
    var blob = new Blob([dto.mediaBytes], { type: "image/jpeg" });
    var imageUrl = URL.createObjectURL(blob);
    logInfo("RecipeFormatted",`Media [id:${dto.id}] url is ${imageUrl} `);
    var media : IMedia = {id: dto.id, mediaUrl: imageUrl, title: dto.title, tag: dto.tag};
    return media;
  });
  return medias;
}

const defaultTimeIntervals = Object.keys(TimeIntervalLabel).map((enumKey): ITimeInterval =>
  ({ label: TimeIntervalLabel[enumKey], timeUnit: TimeUnit.Minutes, timeValue: 0 })
);