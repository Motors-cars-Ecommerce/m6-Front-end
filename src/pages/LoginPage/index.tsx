import { Link } from "react-router-dom";
import { LoginPage } from "./styles";
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
import { DashboardContext } from "../../context/DashboardContext";
import ModalPasswordRecovery from "../../components/ModalPasswordRecovery/ModalPasswordRecovery";


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

  const { modalPasswordRecovery, setModalPasswordRecovery } = useContext(DashboardContext)

  return (
    <>
      <HeaderComponet />
      {
        modalPasswordRecovery && <ModalPasswordRecovery/>
      }
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
               {errors.email && <span> {errors.email.message} </span>}
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
               {errors.password && <span> {errors.password.message} </span>}
            </section>
            <button className="buttonForgotPass" onClick={()=> setModalPasswordRecovery(true)} >Esqueci minha senha</button>
            <button type="submit" className="loginBTN" >
              Entrar
            </button>
          </FormComponet>
          <p className="registerText">Ainda não possui conta?</p>
          <Link className="registerBtn" to="/register">
            Cadastrar
          </Link>
        </div>
      </LoginPage>
      <Footer />
    </>
  );
};

export default Login;
