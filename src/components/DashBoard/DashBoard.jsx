import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import { selectAllBoards } from 'redux/boards/selectors';
import { getAllColumns } from 'redux/columns/operations';
import { selectColumns } from 'redux/columns/selectors';
import { ButtonText, DashBoardWrapper, Text } from './DashBoard.styled';
import { ColumnList } from 'components/ColumnList/ColumnList';

const DashBoard = () => {
  const { boardId } = useParams();
  console.log(boardId);
  const dispatch = useDispatch();

  // const boards = useSelector(selectAllBoards);
  const columns = useSelector(selectColumns);

  useEffect(() => {
    dispatch(getAllColumns());
  }, [dispatch, boardId]);

  const { t } = useTranslation('global');

  const filteredColumns = columns.filter(column => column.board === boardId);
  

  return (
    <DashBoardWrapper>  
      {/* {boards.length === 0 ?  */}
      {!boardId ? 
        (<Text>{t('screenPage.static.message1')}
        <ButtonText>{t('screenPage.static.message2')}</ButtonText> 
         {t('screenPage.static.message3')}</Text> )
        : <ColumnList columns={filteredColumns}/>  }
    </DashBoardWrapper>
  );
};

export default DashBoard;
