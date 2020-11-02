import { IInstruction } from "../../../../interfaces/recipe.interface"
import { deleteElementAndReorder, moveElementandReorder } from "./instructionsHelper";
import { instructionsMock } from "../../../../testTools/mockData";


// DELETING INSTRUCTION
const listWithDeletedObject: IInstruction[] = [
  { id: 1, stepNum: 1, description: 'Take the avocado. Open them in half and empty them in a bowl' },
  { id: 2, stepNum: 2, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
  { id: 3, stepNum: 3, description: 'Get your fork and start mashing and mixing' },
  { id: 4, stepNum: 4, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
];

test('One element is deleted and list is reordered', () => {
  expect(deleteElementAndReorder(instructionsMock, 2)).toEqual(listWithDeletedObject);
});

test('Last element is deleted and list is empty as expected', () => {
  expect(deleteElementAndReorder([{ id: 1, stepNum: 1, description: 'Take the avocado. Open them in half and empty them in a bowl' }], 0))
    .toEqual([]);
});


// DRAGGING INSTRUCTION
//////
// Dragging element up in the list
//////
test('Element is moved up and list is reordered', () => {
  expect(moveElementandReorder(instructionsMock, 3, 1)).toEqual(
    [
      { stepNum: 1, description: 'Take the avocado. Open them in half and empty them in a bowl' },
      { stepNum: 2, description: 'Get your fork and start mashing and mixing' },
      { stepNum: 3, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
      { stepNum: 4, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions' },
      { stepNum: 5, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
    ]
  );
});

test('Element is moved up to first position and list is reordered', () => {
  expect(moveElementandReorder(instructionsMock, 3, 0)).toEqual(
    [
      { stepNum: 1, description: 'Get your fork and start mashing and mixing' },
      { stepNum: 2, description: 'Take the avocado. Open them in half and empty them in a bowl' },
      { stepNum: 3, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
      { stepNum: 4, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions' },
      { stepNum: 5, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
    ]
  );
});

test('Last element is moved up to first position and list is reordered', () => {
  expect(moveElementandReorder(instructionsMock, 4, 0)).toEqual([
    { stepNum: 1, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
    { stepNum: 2, description: 'Take the avocado. Open them in half and empty them in a bowl' },
    { stepNum: 3, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
    { stepNum: 4, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions' },
    { stepNum: 5, description: 'Get your fork and start mashing and mixing' },
  ]);
});

//////
// Dragging element down in the list
//////
test('Element is moved down and list is reordered', () => {
  expect(moveElementandReorder(instructionsMock, 1, 3)).toEqual(
    [
      { stepNum: 1, description: 'Take the avocado. Open them in half and empty them in a bowl' },
      { stepNum: 2, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions' },
      { stepNum: 3, description: 'Get your fork and start mashing and mixing' },
      { stepNum: 4, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
      { stepNum: 5, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
    ]
  );
});

test('Element is moved down to last position and list is reordered', () => {
  expect(moveElementandReorder(instructionsMock, 2, 4)).toEqual(
    [
      { stepNum: 1, description: 'Take the avocado. Open them in half and empty them in a bowl' },
      { stepNum: 2, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
      { stepNum: 3, description: 'Get your fork and start mashing and mixing' },
      { stepNum: 4, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
      { stepNum: 5, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions' },
    ]
  );
});

test('First element is moved down to last position and list is reordered', () => {
  expect(moveElementandReorder(instructionsMock, 0, 4)).toEqual([
    { stepNum: 1, description: 'Get a knife and fork and start slicing everything in tiny pieces' },
    { stepNum: 2, description: 'Add the olive oil, salt, lemon juice, cayenne pepper and scallions' },
    { stepNum: 3, description: 'Get your fork and start mashing and mixing' },
    { stepNum: 4, description: 'READY ! If you have some leftover pour some lemon all over it and move it to a sealed container' },
    { stepNum: 5, description: 'Take the avocado. Open them in half and empty them in a bowl' },
  ]);
});