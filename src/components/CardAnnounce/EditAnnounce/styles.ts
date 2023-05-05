import styled from "styled-components";

export const DivEditModal = styled.div``;

export const DivHeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 24px;
    cursor: pointer;
  }
`;

export const DivButtonModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 15px;

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
  }

  .button_select {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 228px;
    height: 48px;

    /* Brand/brand1 */

    background: #4529e6;
    /* Brand/brand1 */

    border: 1.5px solid #4529e6;
    border-radius: 4px;

    color: #fff;
  }

  .buton_unselect {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 228px;
    height: 48px;

    /* Grey Scale/grey-4 */

    border: 1.5px solid #adb5bd;
    border-radius: 4px;
  }
`;

export const DivOptionsModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    font-size: 0.7rem;
  }

  @media (min-width: 800px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 15px;
  }
`;
