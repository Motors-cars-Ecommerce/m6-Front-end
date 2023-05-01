import FormCadastro from "../../components/FormCadastro"
import { HeaderComponet } from "../../components/Header/Header"
import { Main } from "./registerPageStyle"

export const RegisterPage = ()=>{
    return(
        <>
            <HeaderComponet/>
            <Main>
                <FormCadastro/>
            </Main>

        </>
    )
}