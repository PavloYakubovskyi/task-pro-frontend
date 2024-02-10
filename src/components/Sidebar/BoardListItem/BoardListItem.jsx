import sprite from '../../../images/icons.svg';
import { StyledBoardItem, StyledBoardList, StyledBoardListdBtn, StyledBtnWrapper, StyledSVGPensil,  StyledSVGTrash,  } from './BoardListItem.styled';
import { useState } from 'react';
import { BoardModalBase } from 'components/boardModals/ModalsBase/BoardModalBase';

export const BoardListItem = ({ board }) => {
  const [isModalOpen, setOpenModal] = useState(false);
  console.log(board);

  function CloseModal() {
    setOpenModal(false);
  }

  function OpenModal() {
    setOpenModal(true);
  }

  function SubmitForm(info) {
    console.log(info);
    setOpenModal(false);
  }

  return (
        <StyledBoardList>
      
       <StyledBoardItem to={`/home/${board._id}`}>{board.title}</StyledBoardItem>

       <StyledBtnWrapper> 

        <StyledBoardListdBtn onClick={OpenModal} type='button'>
       <StyledSVGPensil>
            <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
          </StyledSVGPensil>
       </StyledBoardListdBtn>

       <StyledBoardListdBtn type='button'>
       <StyledSVGTrash>
            <use xlinkHref={`${sprite}#icon-trash-04`}></use>
          </StyledSVGTrash>
       </StyledBoardListdBtn>

       </StyledBtnWrapper>
      <span></span>
      <BoardModalBase
        isModalOpen={isModalOpen}
        info={board}
        onCloseModal={CloseModal}
        action={'edit'}
        SubmitForm={SubmitForm}
      />
      </StyledBoardList>
  )
}