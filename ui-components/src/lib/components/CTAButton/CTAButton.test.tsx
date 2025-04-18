import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { CTAButton } from './CTAButton'

describe('CTAButton', () => {
  it('should render', async () => {
    render(<CTAButton label={'test text'} design={'outline_dark'} size={'large'} />)
    expect(screen.getByTestId('cta-button-test text')).toBeDefined()
  })
})
