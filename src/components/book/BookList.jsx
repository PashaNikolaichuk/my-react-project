export const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li style={{ backgroundColor: "#f0f0f0" }} key={book.id}>
            {book.name}
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
console.log(favouriteBooks);
