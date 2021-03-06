import React from 'react';
import { BrowserRouter as Router, Route}from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/*PÁGINAS*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Perfil from './view/usuario-logado';
import UsuarioRecuperarSenha from './view/recuperar-senha';


function App() {
  return (
  <Provider store={store}>
   <Router>
     <Route exact path='/' component = {Login} />
     <Route exact path='/novousuario' component={NovoUsuario} />
     <Route exact path='/home:parametro' component={Perfil} />
     <Route exact path='/recuperar-senha' component={UsuarioRecuperarSenha} />
   </Router>
  </Provider>   
  );
}

export default App;
