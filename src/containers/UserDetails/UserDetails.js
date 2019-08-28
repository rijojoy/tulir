import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "gatsby"
import { setUserDetails } from "../../Actions/index";
class UserDetails extends Component {
	
	state = {

		       userDetails: {

                               name: ''
		       }
	};
    
    changeHandler = (event) => {
        
        console.log("Change Handler");
        var stateCpy = {...this.state.userDetails};
            stateCpy.name = event.target.value;
        
         this.setState({userDetails:stateCpy});
    };

    clickHandler = () => {
    	 this.props.setUserDetails(this.state.userDetails);
    }
	render() {

		return (
                    
                     <div class="panel panel-info">
                      <div class="panel-heading">User Details</div>
                      <div class="panel-body">
 <input 
                                          type="text" 
                                          class="form-control" 
                                          id="name" 
                                          placeholder="Enter your name to proceed..." 
                                          onChange={this.changeHandler}
                                          width="100"/>
                                          <br />
                                           <Link 
                                               class="btn btn-success btn-lg" 
                                               to="/Price/"
                                               onClick={this.clickHandler}>
                                               Enter
                                          </Link>
                      </div>
                    </div>
                     
                      
                      
                         
			   )
	}

}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => {
      
      return {

      	       setUserDetails: (data) => dispatch(setUserDetails(data))
      }
}

export default connect(
	                    mapStateToProps,
	                    mapDispatchToProps
	                  )(UserDetails);