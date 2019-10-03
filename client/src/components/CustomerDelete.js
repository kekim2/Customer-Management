import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    render() {
        return (
            <div>
            <Button variant="contained" color="secondary"onClick={this.handleClickOpen}>Delete</Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle onClick={this.handleClose}>
                    Delete Caution
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        The information that you selected will delete.
                    </Typography>

                </DialogContent>
                <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>Delete</Button>
                        <Button variant="contained" color="primary" onClick={this.handleClose}>Close</Button>
                </DialogActions>

            </Dialog>
            </div>
            )
    }
}

export default CustomerDelete;