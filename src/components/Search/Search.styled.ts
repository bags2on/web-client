import styled, { css } from 'styled-components'
import { Field, Form } from 'formik'
import { Link } from 'react-router-dom'
import IconButton from '../../shared/IconButton'
import SvgIcon from '../../shared/SvgIcon'

export const Container = styled.div`
  flex-grow: 1;
  position: relative;
  @media ${({ theme }) => theme.media.xl} {
    margin: 0 25px;
  }
`

export const SearchForm = styled(Form)`
  width: 100%;
  position: relative;
  vertical-align: bottom;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`

export const SearchInput = styled(Field)<{ $withData: boolean }>`
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right: 0;
  outline: none;
  width: 100%;
  left: auto;
  height: 100%;
  z-index: 450;
  transition-duration: 0.4s;
  border-radius: 10px;
  border: 1px solid;
  color: #fff;
  border-color: #3c4144;
  background-color: #3c4144;
  padding: 10px 46px 10px 15px;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  &::placeholder {
    color: #c4c4c4;
    text-align: center;
  }

  ${({ $withData }) =>
    $withData &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  @media ${({ theme }) => theme.media.lg} {
    width: 100%;
    border-color: transparent;
  }
`

export const SearchButton = styled(IconButton)`
  z-index: 475;
  color: #bbc0c4;
`

export const TheSearchIcon = styled(SvgIcon)`
  fill: #bbc0c4;
  font-size: 19px;
  @media ${({ theme }) => theme.media.md} {
    font-size: 22px;
  }
`

export const LinkWrapper = styled(Link)`
  color: inherit;
  display: flex;
  text-decoration: none;
`

export const Results = styled.div`
  position: absolute;
  z-index: 500;
  top: 100%;
  width: 100%;
  max-height: 400px;
  padding: 15px 7px 10px;
  overflow: auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#3c4144')};
`

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 77px;
`

export const ProductList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 7px;
  & li {
    margin-bottom: 7px;
  }
`
export const InfoBox = styled.div`
  padding-top: 10px;
  margin-left: 10px;
`

export const ProductTitle = styled.p`
  font-weight: 500;
  margin: 0;
  display: block;
  margin-bottom: 7px;
`

export const ProductMainTag = styled.span`
  padding: 3px 5px;
  color: #fff;
  font-weight: 500;
  border-radius: 6px;
`

export const Overlay = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: fixed;
  z-index: 400;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100 * var(--vh));
  background-color: rgba(0, 0, 0, 0.5);
`
