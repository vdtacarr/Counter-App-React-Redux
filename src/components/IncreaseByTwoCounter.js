import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {increasebytwoCounter} from "../redux/actions/counterActions";
class IncreaseByTwoCounter extends Component{
    render(){
        return(
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increasebytwoCounter())
                }}>
                 2 arttır
                </button>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increasebytwoCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter)