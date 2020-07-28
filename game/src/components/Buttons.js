import React, { Component } from 'react';
import { Button, ButtonToolbar, DropdownItem, ButtonDropdown, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,

        }
    }
    toggle = (e) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }
    handleSelect = (e) => {
        this.props.gridSize(e)
    }

    render() {

        return (
            <div className="center">
                <ButtonToolbar>
                    <Button style={{ backgroundColor: '#6B969B' }} onClick={this.props.playButton}>
                        Play
                    </Button>
                    <Button style={{ backgroundColor: '#6B969B' }} onClick={this.props.pauseButton}>
                        Pause
                    </Button>
                    <Button style={{ backgroundColor: '#6B969B' }} onClick={this.props.clear}>
                        Clear
                    </Button>
                    <Button style={{ backgroundColor: '#6B969B' }} onClick={this.props.slow}>
                        Slow
                    </Button>
                    <Button style={{ backgroundColor: '#6B969B' }} onClick={this.props.fast}>
                        Fast
                    </Button>
                    <Button style={{ backgroundColor: '#6B969B' }} onClick={this.props.seed}>
                        Seed
                    </Button>
                    <ButtonDropdown >
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle style={{ backgroundColor: '#6B969B' }} caret>Select Grid Size</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => this.handleSelect('1')}>20X10</DropdownItem>
                                <DropdownItem onClick={() => this.handleSelect('2')}>50X30</DropdownItem>
                                <DropdownItem onClick={() => this.handleSelect('3')}>70X50</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonDropdown>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Buttons;