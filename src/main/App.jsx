import Rotas from './rotas'
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'toastr/build/toastr.css'
import '../custom.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css'

import 'toastr/build/toastr.min.js'
function App() {

    return (
        <>
            <Navbar />
            <Rotas />
        </>

    );
}

export default App;
