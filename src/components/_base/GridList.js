import styled, { css } from 'styled-components'
import Media from './Media'

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding: 30px 0;

  list-style-type: none;
  width: 100%;
  margin: 0 auto;

  ${({ grid1 }) =>
    grid1 &&
    css`
      justify-content: space-between;

      ${GridListItem} {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: ${({ theme }) => theme.gutter.l};
      }

      @media ${Media.laptop} {
        ${GridListItem} {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    `};

  ${({ grid4 }) =>
    grid4 &&
    css`
      /* justify-content: space-between; */

      ${GridListItem} {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
      }

      @media ${Media.laptop} {
        ${GridListItem} {
          width: calc(25%);
          padding: 10px;
        }
      }
    `};
`

const GridListItem = styled.li`
  display: flex;
`

export { GridList, GridListItem }
