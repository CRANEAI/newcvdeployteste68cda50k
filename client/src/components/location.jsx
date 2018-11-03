
/*
location view
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
import { Row, Col , Navbar, NavItem, NavbarBrand } from 'reactstrap';
        
        
        import {  }  from '../actions/locationActions.js'; 

        
        
       
        class locationView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        				{/*<!-- TODO: Confirm label text --> */}

			</Col>

			<Col md={12}>
				<p className="label-lavender-block-small"> haymarkﬁt </p>
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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(locationView);
    
        