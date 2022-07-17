import "./BackDrop.css";

const BackDrop =(props) => {
    return <div className='BAckDrop' onClick={props.close}></div>
}

export default BackDrop;