
export default function Item(props) {

  return (
    <li className="border d-flex justify-content-between align-items-center  p-2 m2">
        <div className="p-3">{props.txt}</div>
        {/* // qund on apuis sur le button on appele props.delFunc et on va lui passe props.id et on fais ca avec une function anonyme pour eviter que la function delFunc() se execute  */}
        <button className="btn btn-danger p-2 h-5" onClick={() => props.delFunc(props.id)}>Supprimer</button>
    </li>
  )
}
