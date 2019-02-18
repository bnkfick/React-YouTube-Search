import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";


const StyledForm = styled(Form)`
    margin-top: 2em;
`

const StyledFormGroup = styled(FormGroup)`
    position: relative;
`
const ClearBtn = styled.span`
    color: gray;
    font-weight: 900;
    font-size: 24px;
    position: absolute;
    top: 0px;
    right: 30px;
    cursor: pointer;
    :hover {
        color: #0F224E;
    }
`
const StyledInput = styled(Input)`
    height: 3em;
`

class SearchBar extends Component {
    state = {
        searchTerm: ""
    }

    handleInputChange = (event) => {
        const { value } = event.target;
        this.setState({ searchTerm: value }, function() {
            this.props.searchYouTube(this.state.searchTerm);
        });
    }

    render() {
        return (
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <StyledFormGroup>
                    <Label for="search" hidden>Search</Label>
                    <StyledInput 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="What would you like to search for?" 
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}/>
                    <ClearBtn onClick={ () => this.setState({ search: ""})}>x</ClearBtn>
                </StyledFormGroup>
            </StyledForm>

        )
    }
}

export default SearchBar;