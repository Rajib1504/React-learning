export default function Friend({friend}){
console.log(friend);
const{name,email} = friend;
const divStyle = {
      border:'2px solid yellow',
      margin:'13px',
      padding:'14px',
      borderRadius:'14px'
}
      return(
            <div style={divStyle}>
                  <h3>Name:{name}</h3>
                  <p>Email: {email}</p>
            </div>
      )
}