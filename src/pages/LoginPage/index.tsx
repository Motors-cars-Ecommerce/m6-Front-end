import { Link } from "react-router-dom";
import { LoginPage } from "./styles";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { DataUserContext } from "../../contexts/userContext";
import { loginUserSchema } from "../../schemas/user.schemas";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginUserSchema),
  });

  const { userLogin } = useContext(DataUserContext);

  return (
    <LoginPage>
      <Header />
      <div className="containerLogin">
        <form onSubmit={handleSubmit(userLogin)}>
          <h2>Login</h2>
          <section>
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              className="formInput"
              title="Email"
              type="text"
              placeholder="Digite seu usuário"
              {...register("username")}
            />
          </section>
          <section>
            <label htmlFor="password">Senha</label>
            <input
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
        </form>
        <p className="registerText">
          Não possui cadastro? <Link to="/register">Clique aqui</Link>
        </p>
      </div>
    </LoginPage>
  );
};

export default Login;
function useForm(arg0: { resolver: any }): {
  register: any;
  handleSubmit: any;
  formState: { errors: any };
} {
  throw new Error("Function not implemented.");
}

function yupResolver(schemaLogin: any): any {
  throw new Error("Function not implemented.");
}
