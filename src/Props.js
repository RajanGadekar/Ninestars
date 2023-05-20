
// export default function Props(props){
//     return(
//         <h2 style={{color:props.color}}>
//             {props.time}
//         </h2>
//     );
// }
function Mycomponent(props){
    return <div>{props.text}
    <br/>
    {props.text2}</div>;
}

const myProps = {
    text: "Hello World",
    text2: "red",
};

export default function Props(){
    return <Mycomponent {...myProps}/>;
}