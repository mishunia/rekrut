import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from './Paragraph'

storiesOf('Atoms/Paragraph', module)
  .add('Default', () => <Paragraph>Lorem ipsum paragraph.</Paragraph>)
  .add('Alt 1', () => <Paragraph p2>Lorem ipsum paragraph.</Paragraph>)
  .add('Alt 2', () => <Paragraph p3>Lorem ipsum paragraph.</Paragraph>)
  .add('Alt 3', () => <Paragraph p4>Lorem ipsum paragraph.</Paragraph>)
