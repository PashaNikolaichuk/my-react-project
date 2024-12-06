import BookList, { favouriteBooks } from "./BookList";

export default function App2() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
}
