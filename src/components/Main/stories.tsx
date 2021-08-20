import { Meta, Story } from '@storybook/react'
import Main from '.'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Angular',
  description: 'Angular'
}
