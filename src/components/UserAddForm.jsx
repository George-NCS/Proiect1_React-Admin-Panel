import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary:'',
            image:''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    };

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    };
    updateImage(event){
        this.setState({image:event.target.value})
    };
    updateSalariu(event){
        this.setState({salary:event.target.value})
    };

    render() {
        const {name, email, isGoldClient,salary,image} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient,salary,image)}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Aa"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="@."
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                <label htmlFor="salary">Salariu</label>
                <input
                    type="number"
                    name="salary"
                    required
                    onChange={(event)=> this.updateSalariu(event)}
                />
                <label htmlFor="image">Adauga imagine</label>
                <input 
                    type="url"
                    name="image"
                    onChange={(event) => this.updateImage(event)}
                />

                <input id="input-add" type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;