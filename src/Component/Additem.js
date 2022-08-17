import React from 'react';
class Additem extends React.Component {   
   constructor(props)
    {
      super(props);  
       
    } 
    render() { 
        return (
 <form>
 <div className="mb-3 col-2">
    <label htmlFor="exampleInputName" className="form-label">
      Name
    </label>
    <input
      type="name"
      className="form-control"
      id="exampleInputName"
      aria-describedby="NameHelp"
      
    />
    
  </div>
  <div className="mb-3 col-2">
    <label htmlFor="InputPrice" className="form-label">
      Price
    </label>
    <input
      type="Name"
      className="form-control"
      id="Price"
    />
  </div>
 
  <button type="submit" className="btn btn-primary col-2" onClick={()=>(this.props.additem)}>
    Submit
  </button>
</form>
        );
    }
}
export default Additem;