import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Landing from './home';
import Search from './search';
import Sale from './sales';

const App = (): JSX.Element => (
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route element={<Layout />}>
            <Route path='/search' element={<Search />} />
            <Route path='/sales/:saleId' element={<Sale />} />
        </Route>

    </Routes>
);
export default App;