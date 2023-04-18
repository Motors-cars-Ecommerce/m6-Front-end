import styled from "styled-components";

export const LoginButton = styled.button`
  width: 90px;
  height: 28px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  background: none;
  border: none;

  color: var(--grey-2);
`;

export const SingUpButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 50px;
  gap: 10px;

  width: 90px;
  height: 28px;

  border: 1.5px solid var(--grey-4);
  border-radius: 4px;

  color: var(--grey-0);
  background-color: transparent;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
`;

export const AddImageButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  padding-top: 24px;

  width: 315px;
  height: 38px;

  background: var(--brand-4);

  border: 1.5px solid var(--brand-4);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0px;

  color: var(--brand-1);
`;

export const CancelButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;

  width: 146px;
  height: 48px;

  background: var(--grey-6);
  /* Grey Scale/grey-6 */

  border: 1.5px solid var(--grey-6);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0px;

  color: var(--grey-2);
`;

export const DisableButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;

  width: 146px;
  height: 48px;

  background: var(--brand-3);

  border: 1.5px solid var(--brand-3);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0px;

  color: var(--brand-4);
`;

export const EnableButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;

  width: 146px;
  height: 48px;

  background: var(--brand-1);

  border: 1.5px solid var(--brand-1);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0px;

  color: var(--whiteFixed);

  &:hover {
    background: var(--brand-2);
    border: 1.5px solid var(--brand-2);
  }
`;
