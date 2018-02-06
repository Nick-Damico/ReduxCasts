export function selectBook(book) {
  // SelectBook is an ActionCreator, it needs to return an action,
  // which is a Plain Old JavaScript Object with a property of,
  // Type and sometimes a payload which is other information needed
  // to update the store(state) of the Application.
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
