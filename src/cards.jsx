
function Card(props){


    return(
        <div className="Card">
             
            <div>
               <p> priority: {props.priority}
               <br />
                <span>  {props.giventask } </span> 
                <button className="btn" >delete</button>
                </p>

            </div>
        </div>
    )
}

export default Card;