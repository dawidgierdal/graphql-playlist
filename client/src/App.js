import { GlobalStyle } from './styles/globalStyles';
import { BookList } from './components/BookList';
import { AddBook } from './components/AddBook';

function App() {
  return (
    <>
        <GlobalStyle />
        <BookList />
        <AddBook />
    </>
  );
}

export default App;
