// @flow
import React from 'react';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

type Props = {
    placeholder: ?string
};

type DefaultProps = {
    placeholder: string,
}

type State = {
    username: string,
    errorMessage: ?string
};

type NameState = 'VALID' | 'MISSING' | 'TOO_SHORT';

const MIN_NAME_LENGTH = 3;

const errorText = {
    nameMissing: 'Please provide a username',
    nameTooShort: `Username must be at least ${MIN_NAME_LENGTH} characters`
};

@autobind
export class EntryForm extends React.Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            errorMessage: null
        };
    }

    onFormSubmit(event: any) {
        const state: NameState = this.nameState(this.state.username);
        if (state !== 'VALID') {
            event.preventDefault();
            this.setError(state);
        }
    }

    onNameEntry(event: any) {
        const username = event.target.value;
        this.setState({ username });
    }
    
    setError(nameState: NameState) {
        switch(nameState) {
            case 'MISSING': 
                this.setState({ errorMessage: errorText.nameMissing });
                break;
            case 'TOO_SHORT':
                this.setState({ errorMessage: errorText.nameTooShort });
                break;
            default:
                return;
        }
    }

    nameState(value: string): NameState {
        if (!value || value === '') {
            return 'MISSING';
        }

        if (value.length < MIN_NAME_LENGTH) {
            return 'TOO_SHORT';
        }
        
        return 'VALID';
    }
    
    render() {
        let errorClass = classNames({
            'entry-form__errmsg': true,
            'is-shown': this.state.errorMessage
        });
        
        return (
            <form className="entry-form" noValidate="" onSubmit={this.onFormSubmit}>
                <input 
                    type="text" 
                    value={this.state.username}
                    placeholder={this.props.placeholder}
                    onChange={this.onNameEntry}
                />
                <button type="submit">Enter Game</button>
                <span className={errorClass}>
                    {this.state.errorMessage}
                </span>
            </form>
        );
    }
}

EntryForm.defaultProps = {
    placeholder: 'Enter your name...'
};
