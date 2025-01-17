import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 14px 14px;
  height: 100%;
  @media screen and (min-width: 768px) {
    padding: 60px 24px 24px;
  }
`;

export const StyledText = styled.p`
  font-size: 12px;
  color: ${p => p.theme.currentTheme.greySubtitle};
  padding-bottom: ${p => p.theme.spacing(2)};
  letter-spacing: -0.02em;
`;

export const StyledCreateWrapper = styled.div`
  padding: ${p => p.theme.spacing(3.5)} 0;
  border-top: 1px solid ${p => p.theme.currentTheme.line};
  border-bottom: 1px solid ${p => p.theme.currentTheme.line};
`;
export const StyledLogoutBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  color: ${p => p.theme.currentTheme.iconNeedHelp};
  padding: 0;
  display: flex;
  gap: ${p => p.theme.spacing(3.5)};
  align-items: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

// export const StyledSVGPlus = styled.svg`
//   fill: ${p => p.theme.violetColors.accentColor};
//   stroke: rgb(255, 255, 255);
//   width: 20px;
//   height: 20px;
//   padding: 8px 10px;
// `;

export const StyledSVGLogout = styled.svg`
  fill: transparent;
  stroke: ${p => p.theme.currentTheme.iconLogout};

  width: 32px;
  height: 32px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.currentTheme.hoverIconLogout};;
    opacity: 0.5;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 24px;
`;

export const Boards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;