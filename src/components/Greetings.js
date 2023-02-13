//Destructring props

//const Greetings =({Name,Age})=>{
const Greetings =(props)=>{
    const {Name,Age}=props
    return <h1>Hi {Name},Age {Age}</h1>
}

export default Greetings;