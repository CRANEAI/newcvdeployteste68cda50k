
/*
archibald fountain. 1a prince albe... view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the archibald fountain. 1a prince albe... view has a status bar located at the very-top in the center of the view
archibald fountain. 1a prince albe... view has an input located at the very-top across the full width of the view, placeholder text needs identified
archibald fountain. 1a prince albe... view has Navigation Bar located at the very-top in the center of the view
archibald fountain. 1a prince albe... view has Label located at the very-top center of the view, text needs identified
archibald fountain. 1a prince albe... view has Label located at the very-top center of the view, text needs identified
archibald fountain. 1a prince albe... view has an Image located at the very-top across the full width of the view. this is a placeholder and should be updated with higher resolution Image
the archibald fountain. 1a prince albe... view has a Input Box located at the very-top in the center of the view, correct text needs defined
archibald fountain. 1a prince albe... view has Label located at the top center of the view, text needs identified
archibald fountain. 1a prince albe... view has Label located at the mid-bottom left of the view, text needs identified
archibald fountain. 1a prince albe... view has Label located at the main area center of the view, text needs identified
archibald fountain. 1a prince albe... view has Label located at the bottom left of the view, text needs identified
archibald fountain. 1a prince albe... view has Label located at the bottom left of the view, text needs identified

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button, Navbar, NavItem, NavbarBrand, Input, InputGroup, InputGroupText } from 'reactstrap';
        
        
        import {  }  from '../actions/archibald_fountain._1a_prince_albe...Actions.js'; 

        
        
       
        class archibaldfountain.1aprincealbe...View extends React.Component {

            state = {
                
                my_location : '', 

            }
    
            
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12}>
				<p className="label-light-purple-very-light-blue-small"> ( q my location 4 </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for back button-light-purple-very-light-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-purple-very-light-blue" 
                        onClick={() => this.back()}>back</Button> 

			</Col>

<Navbar color="light navigation-bar-light-purple-very-light-blue" light expand="md"> 
    <NavbarBrand>archibald fountain. 1a prince albe...</NavbarBrand> 
</Navbar> 
			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group input-light purple-very light blue" 
                                        value={this.state.my_location}
                                        onChange={this.handleChange}
                                        name="my_location"
                                        placeholder="my location" />				</InputGroup>			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-white-standard"> sydney </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block-small"> haymarkﬁt </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> surry hills </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> 15 min (4.9 km) </p>
			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(archibaldfountain.1aprincealbe...View);
    
        