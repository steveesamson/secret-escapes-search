import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Landing from './home';
import LocationSearch from './search';
import SaleDetail from './saleDetail';

const App = (): JSX.Element => (
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route element={<Layout />}>
            <Route path='/search' element={<LocationSearch />} />
            <Route path='/sale/:saleId' element={<SaleDetail />} />
        </Route>

    </Routes>
);
export default App;