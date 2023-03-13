import './Country.css';
export function Country(props){
    return  <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src={props.img} alt="Avatar" style={{width:300,height:200}}/>
        </div>
        <div class="flip-card-back">
            <h1>{props.name}</h1>
        </div>
    </div>
</div>

  ;
}