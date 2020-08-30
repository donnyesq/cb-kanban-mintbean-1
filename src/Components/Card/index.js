import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { saveCardInfo } from '../../actions';
import Dialog from '@material-ui/core/Dialog';

const close = keyframes`
0%{
 transform: translate(0%, 15%) scale(0.25);
}
55% {
 transform: translate(50%, 50%) scale(1.15);
}
100% {
 transform: translate(0%, 0%) scale(1);
}
`;

export default function Card({
  children,
  columnId,
  item,
  cardStatus,
  setCardStatus,
}) {
  // const items = useSelector((state) => state.columns[columnId].items);
  // const objectFinder = (element) => element.id === item.id;
  // const index = items.findIndex(objectFinder);
  const [info, setInfo] = useState(item.task);
  console.log('===>', !item);
  const [title, setTitle] = useState(children);
  // const dispatch = useDispatch();

  return (
    <Dialog open={cardStatus} aria-labelledby='form-dialog-title'>
      {item !== null ? (
        <CardWrapper>
          <Header title={item.content} setTitle={setTitle} />
          <ContentWrapper>
            <TextField
              id='outlined-multiline-static'
              label='Description'
              multiline
              rows={4}
              defaultValue={item.task}
              variant='outlined'
              onChange={(e) => {
                setInfo(e.target.value);
              }}
            />
            <Button
              variant='contained'
              onClick={() => {
                setCardStatus((n) => !n);
                // dispatch(saveCardInfo(columnId, item, info, title));
              }}
            >
              SAVE
            </Button>
          </ContentWrapper>
        </CardWrapper>
      ) : (
        'LOADING'
      )}
    </Dialog>
  );
}

const CardWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  transform: translate(-50%, -50%) scale(1);
  width: 300px;
  height: 400px;
  background: rgb(246, 243, 33);
  background: linear-gradient(
    225deg,
    rgba(246, 243, 33, 1) 0%,
    rgba(233, 231, 19, 1) 56%,
    rgba(251, 224, 2, 1) 94%,
    rgba(255, 226, 0, 1) 100%
  );
  box-shadow: 0 10px 15px 0 #888888;
  border-radius: 12px;
  /* animation: ${close} 0.9s cubic-bezier(0.075, 0.82, 0.165, 1); */
  animation-fill-mode: forwards;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
