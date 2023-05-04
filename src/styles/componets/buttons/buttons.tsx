import styled from "styled-components";

export const LoginButton = styled.button`
  width: 90px;
  height: 28px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  background: none;
  border: none;

  color: var(--grey-2);

  &:hover {
    color: var(--brand-1);
  }
`;

export const SingUpButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4% 3%;
  cursor: pointer;

  width: 30%;
  height: 0px;

  border: 1.5px solid var(--grey-4);
  border-radius: 4px;

  color: var(--grey-0);
  background-color: transparent;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;

  &:hover {
    background: var(--grey-1);
    color: var(--grey-10);
    border: 1.5px solid var(--grey-1);
  }
`;

export const AddImageButton = styled.button`
  box-sizing: border-box;
  width: -webkit-fill-available;
  font-size: 0.7em;
  padding: 18px 16px 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  height: 38px;

  background: var(--brand-4);

  border: 1.5px solid var(--brand-4);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  line-height: 0px;

  color: var(--brand-1);

  @media (min-width: 800px) {
    width: 315px;
    padding: 12px 20px;
    padding-top: 24px;
    font-size: 0.8rem;
  }
`;

export const CancelButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  cursor: pointer;

  height: 48px;

  background: var(--grey-6);

  border: 1.5px solid var(--grey-6);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0px;

  color: var(--grey-2);

  @media (min-width: 800px) {
    width: 146px;
  }
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
  cursor: pointer;

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
  cursor: pointer;

  color: var(--whiteFixed);

  &:hover {
    background: var(--brand-2);
    border: 1.5px solid var(--brand-2);
  }
`;

export const ButtonGeneric = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  cursor: pointer;

  width: auto;
  height: 38px;

  border: 1.5px solid var(--grey-1);
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;

  color: var(--grey-1);

  &:hover {
    background: var(--grey-1);
    color: var(--grey-10);
    border: 1.5px solid var(--grey-1);
  }
`;

export const CreateAnnounceButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;

  width: 160px;
  height: 48px;

  border: 1.5px solid var(--brand-1);
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;
  cursor: pointer;

  color: var(--brand-1);

  &:hover {
    background: var(--brand-4);
  }
`;

export const ShowAdsbutton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;

  width: 206px;
  height: 48px;

  background: var(--grey-0);

  border: 1.5px solid var(--grey-0);
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 0px;

  color: var(--whiteFixed);

  &:hover {
    background: var(--grey-1);
    border: 1.5px solid var(--grey-1);
  }
`;

export const CancelModalButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;

  width: 119px;
  height: 38px;

  /* Feedback/alert-3 */

  background: #ffe5e5;
  /* Feedback/alert-3 */

  border: 1.5px solid #ffe5e5;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  /* identical to box height, or 0% */

  /* Feedback/alert-1 */

  color: #cd2b31;

  &:hover {
    background: #fdd8d8;
    /* Feedback/alert-2 */
    color: #cd2b31;
    border: 1.5px solid #fdd8d8;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 146px;
    height: 48px;
  }
`;

export const AceptModalButton = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;

  width: 119px;
  height: 38px;

  /* Feedback/sucess-3 */

  background: #ddf3e4;
  /* Feedback/sucess-3 */

  border: 1.5px solid #ddf3e4;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  /* identical to box height, or 0% */

  /* Feedback/sucess-1 */

  color: #18794e;

  &:hover {
    background: #ccebd7;
    /* Feedback/sucess-2 */
    border: 1.5px solid #ccebd7;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 146px;
    height: 48px;
  }
`;
