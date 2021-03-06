function Umur(props) {
    return <span>{props.age}</span>
}

function Salam(props) {
    return <p>Halo, Saya {props.name}, umur <Umur age={props.age} />!!</p>
}
export default Salam;