import styled , {css} from 'styled-components';
import Button from "../Button"
import { LocationOn  , Cake} from 'styled-icons/material-outlined';

const IconCSS = css`
  width: 20px;
  height: 20px;

    color: var(--gray);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;

  ::-webkit-scrollbar{
      display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;

  height: min(33vw , 199px);

  background: var(--twitter);

  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
   padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    > li {
      font-size: 15px;
      color: var(--gray);
      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;





export const EditContainer = styled.div`
    position: absolute;
    height: min(33vw , 199px);
    width: min(33vw , 249px);
    right: 0;
    border: 2.2px solid var(--twitter);

    border-radius: 9%;

    .editSave{
        position: absolute;
        margin-top: min(33vw , 129px);
    }
`;

export const EditChild = styled.div`
    padding-top: 10px;
    display: flex;
`;

export const Span = styled.div`
    padding-left: 10px;
    display: flex;
`;


export const NameInput = styled.input`
    width: min(33vw ,100px);
    border-bottom:1px solid var(--gray);
    margin-left: 15px;
    color: white;
    /* background: var(--gray); */
    &:fo{
        border-bottom: 1px solid var(--gray);
    }
`;

export const InstaInput = styled.input`
    
`;




























































export const LocationIcon = styled(LocationOn)`
  ${IconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${IconCSS}
`;

export const Followage = styled.div`
  display: flex;
  > span {
    font-size: 15px;
    color: var(--gray);
    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;
    padding: 4px 16px;
    font-size: 13px;
    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;