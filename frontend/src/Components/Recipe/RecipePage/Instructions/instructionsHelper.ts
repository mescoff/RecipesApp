import { IInstruction } from "../../../../Interfaces/recipe.interface";
import { logInfo } from "../../../../Tools/helpers";

/**
 * Move element in a list of instructions and reorder rest of the steps
 * @param list List to update
 * @param startIndex Index where element was
 * @param endIndex Index where element should be moved
 */
export const moveElementandReorder = (list: IInstruction[], startIndex: number, endIndex: number): IInstruction[] => {
  // We can't do the reordering in place otherwise we will modify the list referenced in the state (and state should be immutable)
  // so we create an empty list, place the new element, reorder the range that is affected, and simply copy unaffected elements, in one go 
  const reorderedInst = new Array<IInstruction>();

  // using two pointers to go through each list (old and new)
  // i is original list index, j is reordered list index
  let i = 0, j = 0;

  //FIXME:  bringing element from bottom to top fails 

  // reordering when element goes up the list
  logInfo('MoveElement', `Element start index: ${startIndex} | end index: ${endIndex}`);
  if (startIndex > endIndex) {
    while (i < list.length && j < list.length) {
      if (i === startIndex) {
        // logInfo('MoveElement', `[i:${i} j:${j}]  i is same as start index of element to move. Skip it`)
        i++;
      }
      if (j === endIndex) {
        // place our moving element in the new list and move to the next
        const elementToMove = { ...list[startIndex] };
        elementToMove.stepNum = endIndex + 1;
        // logInfo('MoveElement', `[i:${i} j:${j}] j is same as end Index. Placing element to move [${elementToMove.description}] at step ${elementToMove.stepNum} `)
        reorderedInst[endIndex] = elementToMove;
        j++;
      }
      else if (j > endIndex && j <= startIndex) {
        // reorder: copy element from list, assign it current index in reordered list
        const copy = { ...list[i] };
        copy.stepNum = j + 1;
        reorderedInst[j] = copy;
        // logInfo('MoveElement', `[i:${i} j: ${j}] reordering element [${copy.description}] before:${copy.stepNum - 1}, after:${copy.stepNum}`)
        j++;
        i++;
      }
      else {
        // simply copy the element that preserved its order
        // logInfo('MoveElement', `[i:${i} j: ${j}] copying elemnents that do not need modif for i:${i} and j:${j} `)
        reorderedInst[j] = list[i];
        i++;
        j++;
      }
    }
  }
  // reordering when element goes down the list
  else {

    while (j < list.length) {
      // logInfo('MoveElement', `[i:${i} j: ${j}] While entered`);
      if (i === startIndex) {
        // logInfo('MoveElement', `[i:${i} j:${j}]  i is same as start index of element to move. Skip it`)
        i++;
      }
      if (j === endIndex) {
        // place our moving element in the new list and move to the next
        const elementToMove = { ...list[startIndex] };
        elementToMove.stepNum = endIndex + 1;
        // logInfo('MoveElement', `[i:${i} j:${j}] j is same as end Index. Placing element to move [${elementToMove.description}] at step ${elementToMove.stepNum} `)
        reorderedInst[endIndex] = elementToMove;
        j++;
      }
      else if (j >= startIndex && j < endIndex) {
        // reorder: copy element from list, assign it current index in reordered list
        const copy = { ...list[i] };
        copy.stepNum = j + 1;
        reorderedInst[j] = copy;
        // logInfo('MoveElement', `[i:${i} j: ${j}] reordering element [${copy.description}] before:${copy.stepNum - 1}, after:${copy.stepNum}`)
        j++;
        i++;
      }
      else {
        // simply copy the element that preserved its order
        // logInfo('MoveElement', `[i:${i} j: ${j}] copying elemnents that do not need modif for i:${i} and j:${j} `)
        reorderedInst[j] = list[i];
        i++;
        j++;
      }
    }
  }

  return reorderedInst;
}

export const deleteElementAndReorder = (list: IInstruction[], elementIndex: number) => {
logInfo('DeleteElement', `[Delete Instruction] With step number: ${list[elementIndex]} at index: ${elementIndex}`);
    // create new list. Remove instruction, and reorder following steps
    const updatedInstructions = new Array<IInstruction>();
    for (let i = 0; i < list.length; i++) {
      if (i === elementIndex) {
        // skip/don't add instruction to be deleted
        // logInfo('DeleteElement', `[Delete Instruction] Skipping item at index ${i}`);
        continue;
      }
      else if (i > elementIndex) {
        // logInfo('DeleteElement', `[Delete Instruction] Reordering items after index ${i}`);
        // reorder instructions (replace with new instance to avoid modifying object in place)
        const reorderedInst = {
          ...list[i],
          stepNum: list[i].stepNum - 1
        }
        updatedInstructions.push(reorderedInst);
      }
      else {
        // no need to copy new instance of instruction
        updatedInstructions.push(list[i]);
      }
    }

    return updatedInstructions;
}