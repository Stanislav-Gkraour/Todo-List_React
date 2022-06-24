import {useState} from 'react'
import Item from './Item'
// uuid import pour avoir des cle unique
import {v4 as uuidv4} from 'uuid'


export default function Form(){

    const [dataArr, setDataArr] = useState([
        // chaque element va avoir un id de base
        {txt : 'Promener le chien', id: uuidv4()},
        {txt : 'Sport', id: uuidv4()},
        {txt : 'Coder en React', id: uuidv4()},
    ])
    // creer la function delete qui prend en parametre 'id'
    const deleteElement = id => {
        // pour filtrer les 'li' on va utiliser la methode  filter()
        const filteredState = dataArr.filter(item => {

            return item.id !== id
        })
        setDataArr(filteredState)
    }

    const [stateInput, setStateInput] = useState();
    
    const linkedInput = (e) => {
        setStateInput(e)
    }

    const addTodo = e => {
        // ca va prevenir le comportement par defaut d'acctualiser la page , ca va pas actualiser la page 
        e.preventDefault();
        const newArr = [...dataArr]; // spread operator va copier tout ce que on a dans le tableau dataArr dans newArr

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();
        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('');
    }
    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form onSubmit={e => addTodo(e)} className='mb-3'>
                <label htmlFor="todo" className='form-label mt-3'>Chose à faire</label>
                <input onInput={e => linkedInput(e.target.value)} value={stateInput} type="text" className='form-control' id='todo' />
                <button className="mt-2 btn-primary d-block">Envoyer</button>
            </form>

            <h2>liste de choses à faire :</h2>

            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        // props
                        <Item 
                        txt={item.txt} // le text qui vien de notre state
                        key={item.id}  // l'cle unique depui le state pour react
                        id={item.id} // l'id
                        // comme on veut utiliser la function deleteElement il faut la passer en props 
                        delFunc={deleteElement}
                        />
                    )
                })}
            </ul>


        </div>
    )
}