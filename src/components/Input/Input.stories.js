import Input from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
  },
}

export const asText = {
  args: {
    label: 'Nombre de Usuario',
    name: 'username',
    value: '',
    onChange: () => {},
    type: 'text',
    required: true,
    placeholder: 'Denn1s'
  },
}
