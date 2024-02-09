import styled from "styled-components";

export const SidebarWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

export const StyledSidebarNavWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const StyledText = styled.p`
  /* min-width: 320px; */
font-size: 12px;
color: rgba(255, 255, 255, 0.5);
padding-bottom: 8px;
  /* max-width: 335px;
  display: flex;
  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(5)};
  margin: 0 auto; */

  /* @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(8)};
  } */

  /* @media screen and (min-width: 1440px) {
   padding: 24px;
  } */
`;

export const StyledCreateBtnWrapper = styled.div`
padding: 14px 0;
border-top: 1px solid rgba(255, 255, 255, 0.1);
border-bottom:  1px solid rgba(255, 255, 255, 0.1);
margin-bottom: 40px;
`
export const StyledLogoutBtn = styled.button`
border: none;
background-color: transparent;
width: 100%;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
text-align: start;
color: rgb(255, 255, 255);
padding: 0;
display: flex;
gap: 14px;
align-items: center;
/* margin: auto 0; */
margin-top: 24px;
`

export const StyledSVGLogout = styled.svg`
  fill: transparent;
  stroke: white;
  /* background-color:white; */
  width: 32px;
  height: 32px;
  
`;


export const StyledItemWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: auto;
align-items: end;
`;

export const StyledNavItems = styled.div`
display: flex;
flex-direction: column;

`;