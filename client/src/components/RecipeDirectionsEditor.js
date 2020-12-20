import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default class RecipeDirectionsEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render() {
    return (
      <div>
        <text>the rich text editor is below but invisible for some reason</text>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}
