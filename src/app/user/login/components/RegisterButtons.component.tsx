import useHandleChangeRegister from "../states/useHandleChangeRegister.state";

type indexProps = {
  selectLogin: boolean;
};

export default function RegisterButtons() {
  const setRegisterFormart = useHandleChangeRegister(
    (state) => state.setIsLogin
  );

  const handleSelectFormat = ({ selectLogin }: indexProps) => {
    setRegisterFormart(selectLogin);
  };

  return (
    <div>
      <button onClick={() => handleSelectFormat({ selectLogin: true })}>
        SignIn
      </button>
      <button onClick={() => handleSelectFormat({ selectLogin: false })}>
        SignUp
      </button>
    </div>
  );
}
