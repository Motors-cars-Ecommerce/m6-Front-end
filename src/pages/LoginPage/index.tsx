import { Link, Navigate } from "react-router-dom";
import { LoginPage } from "./styles";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { DataUserContext } from "../../context/userContext";
import { loginUserSchema } from "../../Schemas/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILogin } from "../../interfaces/User";
import { HeaderComponet } from "../../components/Header/Header";
import { FormComponet } from "../../styles/componets/Forms/form";
import { InputBoxComponent } from "../../styles/componets/inputs/input";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginUserSchema),
  });

  const submit = (data: ILogin) => {
    login(data);
  };

  const { login } = useContext(DataUserContext);

  return (
    <>
      <HeaderComponet />
      <LoginPage>
        <div className="containerLogin">
          <FormComponet onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>
            <section>
              <label htmlFor="username">Usuário</label>
              <InputBoxComponent
                id="username"
                className="formInput"
                title="Email"
                type="text"
                placeholder="Digite seu usuário"
                {...register("email")}
              />
            </section>
            <section>
              <label htmlFor="password">Senha</label>
              <InputBoxComponent
                id="password"
                className="formInput"
                title="Senha"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
            </section>
            <section className="forgottenPassWord">
              <Link to="/forgot-password">Esqueci minha senha</Link>
            </section>
            <button type="submit" className="loginBTN">
              Entrar
            </button>
          </FormComponet>
          <p className="registerText">
            Não possui cadastro? <Link to="/register">Clique aqui</Link>
          </p>
        </div>
      </LoginPage>
      <Footer />
    </>
  );
};

export default Login;
/* 
function useForm(arg0: { resolver: any }): {
  register: any;
  handleSubmit: any;
  formState: { errors: any };
} {
  throw new Error("Function not implemented.");
}

function yupResolver(schemaLogin: any): any {
  throw new Error("Function not implemented.");
} */
