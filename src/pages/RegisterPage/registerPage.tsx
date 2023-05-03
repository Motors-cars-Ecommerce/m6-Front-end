import Footer from "../../components/Footer/Footer";
import FormCadastro from "../../components/FormCadastro";
import { HeaderComponet } from "../../components/Header/Header";
import { Main } from "./registerPageStyle";

export const RegisterPage = () => {
  return (
    <>
      <HeaderComponet />
      <div>
        <Main>
          <FormCadastro />
        </Main>
      </div>
      <Footer />
    </>
  );
};
