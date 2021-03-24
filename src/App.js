import logo from './logo.svg';
import './App.css';
import FullName from './component/profil/FullName';
import Address from './component/profil/Address'
import ProfilPhoto from './component/profil/ProfilPhoto';

function App() {
  return (
    <div >
     <FullName/>
      <Address/>
       <ProfilPhoto/>
    </div>
  );
}

export default App;
