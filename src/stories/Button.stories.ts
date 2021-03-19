import Button from '../components/Button.svelte'

interface ButtonProps {
  label?: string
  primary?: boolean
  backgroundColor?: string
  size?: string
  pnClick?: any
}

interface Story {
  (): any
  args?: ButtonProps
}

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
    },
    primary: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    onClick: {
      action: 'onClick',
    },
  },
}

const Template = ({ onClick, ...args }: any) => ({
  Component: Button,
  props: args,
  on: {
    click: onClick,
  },
})

export const Primary: Story = Template.bind({}) as any;
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary: Story = Template.bind({}) as any;
Secondary.args = {
  label: 'Button',
}

export const Large: Story = Template.bind({}) as any;
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small: Story = Template.bind({}) as any;
Small.args = {
  size: 'small',
  label: 'Button',
}
