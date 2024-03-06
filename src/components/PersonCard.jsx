import React, {Component} from "react";
import '../App.css';
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    handleClick = () => {
        this.setState({age:this.state.age +1})
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return(
            <div className="Card">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleClick}>Birthday for: {firstName} {lastName}</button>
            </div>
        )
    }
}
// con componente funcional:
// import React, { useState } from "react";
// import '../App.css';

// const PersonCard = ({ firstName, lastName, hairColor, age }) => {
//     const [currentAge, setCurrentAge] = useState(age);

//     const handleClick = () => {
//         setCurrentAge(currentAge + 1);
//     }
//     return (
//         <div className="Card">
//             <h1>{lastName}, {firstName}</h1>
//             <p>Age: {currentAge}</p>
//             <p>Hair Color: {hairColor}</p>
//             <button onClick={handleClick}>Birthday for: {firstName} {lastName}</button>
//         </div>
//     );
// }
export default PersonCard;