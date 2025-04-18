import type { Meta, StoryObj } from '@storybook/react'
import { CTAButton, CTAButtonProps } from './CTAButton'
import { CircleDashed } from 'lucide-react'

const meta: Meta<typeof CTAButton> = {
  title: 'Components/CTAButton',
  component: CTAButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small']
    },
    design: {
      control: 'select',
      options: ['outline_light', 'outline_dark', 'filled_light', 'filled_dark', 'filled_pink', 'neutral_dark']
    }
  }
}
export default meta

type Story = StoryObj<typeof CTAButton>

export const LargeOutlineDark: Story = {
  args: {
    label: 'A Text',
    size: 'large',
    design: 'outline_dark',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}
export const LargeOutlineLight: Story = {
  args: {
    label: 'A Text',
    size: 'large',
    design: 'outline_light',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}

export const MediumFilledLightWithIcon: Story = {
  args: {
    label: 'A Text dsfg gf sdgh sghsgdh h',
    size: 'medium',
    design: 'filled_light',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}

export const MediumFilledPinkWithIcon: Story = {
  args: {
    label: 'A Text dsfg gf sdgh sghsgdh h',
    size: 'medium',
    design: 'filled_pink',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}

export const MediumFilledDarkWithIcon: Story = {
  args: {
    label: 'A Text dsfg gf sdgh sghsgdh h',
    size: 'medium',
    design: 'filled_dark',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}

export const SmallNeutralDark: Story = {
  args: {
    label: 'A Text sdkfjhsdkfnjsid',
    size: 'small',
    design: 'neutral_dark',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}

export const NeutralLight: Story = {
  args: {
    label: 'A Text sdkfjhsdkfnjsid',
    size: 'small',
    design: 'neutral_light',
    icon: <CircleDashed className='w-4 h-4' />,
    disabled: true
  }
}
