import React from 'react';

import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option, OptGroup } = Select;

export default class RecipeIngredientsEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  {' '}
                  <Form.Item
                    {...field}
                    name={[field.name, 'ingredient-qty']}
                    fieldKey={[field.fieldKey, 'ingredient-qty']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Ingredient Quantity" />
                  </Form.Item>
                  <Form.Item>
                    <Select
                      defaultValue="lucy"
                      showSearch
                      style={{ width: 200 }}
                      // onChange={handleChange}
                    >
                      <OptGroup label="Manager">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                      </OptGroup>
                      <OptGroup label="Engineer">
                        <Option value="Yiminghe">yiminghe</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'ingredient-name']}
                    fieldKey={[field.fieldKey, 'ingredient-name']}
                    rules={[
                      { required: true, message: 'Missing ingredient name' },
                    ]}
                  >
                    <Input placeholder="Ingredient Name" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add ingredient
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    );
  }
}
