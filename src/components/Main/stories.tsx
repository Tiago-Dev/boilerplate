import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'asfdsf',
    description: 'fgsdfgh'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'asfdsf',
  description: 'fgsdfgh'
}

export const Default: Story = (args) => <Main {...args} />
