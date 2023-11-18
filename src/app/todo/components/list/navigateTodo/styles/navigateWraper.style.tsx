import styled, { css } from "styled-components";

export const StyledButtonsChildren = css`
  color: #000;
  flex-shrink: 0;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  width: 29px;
`;

export const StyledNavigateWraper = styled.div`
  border-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;
  margin: auto;
  width: 18rem;

  .btnIndex {
    margin-left: 0.3rem;
  }

  .btnChildren {
    color: #000;
    flex-shrink: 0;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    height: 100%;
    line-height: normal;
    text-align: center;
    width: 29px;
  }
`;
