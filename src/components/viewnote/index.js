import React from 'react';
import { Text } from 'native-base';
import Note from '../notes/note';

import * as h from '../../util/fetch/fetching';

export default class ViewNote extends React.Component {
    constructor (props) {
        super(props);
        this.state = {} 
    }
    static navigationOptions = {
        title: 'UPDATE YOUR NOTE',
    };
    local = '192.168.0.106:80';
    render() { 
        const {state} = this.props.navigation;
        console.log(state.params)
        return (
            <Note
                title={state.params.note_title} 
                text={state.params.note_text} 
                noteid={state.params.note_id} 
                new={false} 
                updateNote={(state) => this.updateNote(state)}
            />
        )
    }

    updateNote = (state) => {
        console.warn(state)
        h.fetching(state, 'POST', `http://${this.local}/notepad/api/api/update.php`, (data) => {
            console.log(data)
        });
    }
}