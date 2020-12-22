import React from 'react';

import { Form, TimePicker, InputNumber, Input } from 'antd';
import RecipeDirectionsEditor from '../components/RecipeDirectionsEditor';
import RecipeIngredientsEditor from '../components/RecipeIngredientsEditor';

export default class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form>
        <Form.Item name="recipe-prep-time" label="Prep time">
          <TimePicker />
        </Form.Item>
        <Form.Item name="recipe-cook-time" label="Cook time">
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="recipe-serving-size"
          label="Servings"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="recipe-name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="recipe-description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="recipe-ingredirents" label="Ingredients">
          <RecipeIngredientsEditor />
        </Form.Item>
        <Form.Item name="recipe-directions" label="Directions">
          <RecipeDirectionsEditor />
        </Form.Item>
      </Form>
    );
  }
}
