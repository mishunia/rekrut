import styled, { css } from 'styled-components'
import Media from './Media'

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding: 30px 0;

  list-style-type: none;
  width: 100%;
  margin: 0 auto;

  @media ${Media.tablet} {
    margin-right: -10px;
    margin-left: -10px;
    width: calc(100% + 20px);
  }

  ${({ grid3 }) =>
    grid3 &&
    css`
      justify-content: space-between;

      ${GridListItem} {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.gutter.xl};
      }

      @media ${Media.laptop} {
        ${GridListItem} {
          width: calc(33% - 20px);
          margin-bottom: 20px;
        }
      }
    `};

  ${({ grid4 }) =>
    grid4 &&
    css`
      justify-content: space-between;

      ${GridListItem} {
        width: 100%;
      }

      @media ${Media.laptop} {
        ${GridListItem} {
          width: calc(25% - 20px);
        }
      }
    `};
`

const GridListItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`

export { GridList, GridListItem }
