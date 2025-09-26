import { useState } from 'react';
import './App.css';



function App () {
            const [livre, setlivre] = useState('');
            const [auteur, setauteur] = useState('');


             const Valider_form = (e) => {
              e.preventDefault(); 
             
    console.log('Livre :', livre);
    console.log('Auteur :', auteur);

    setauteur ('');
    setlivre ('');
             }

     return (
      <div>

                      <h1>BOOKS</h1>
                      <p>Ajouter un livre à votre bibliothèque</p>
                      <form id='formulaire' onSubmit={Valider_form}>

                
                   <input type= 'text'   placeholder="livre" id='livre' onChange={(e) => setlivre(e.target.value)}></input>
                  
                   <input type= 'text' placeholder='auteur' id='auteur' onChange={(e) => setauteur (e.target.value)}></input>

                   <button type='submit'>Ajouter un livre</button>
                  
                    </form>
                        </div>
     )
                     

  }
   
  

export default App;
