import ToastMessage from "../../components/ToastMessage/ToastMessage";
import { useToastMessage } from "../../hooks/useToastMessage";
import AuthPageLayout from "./AuthPageLayout";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const { message, isFailed, isVisible, showToastMessage, closeToastMessage } =
    useToastMessage("", false, false);

  return (
    <>
      <AuthPageLayout>
        <ToastMessage
          message={message}
          isFailed={isFailed}
          isVisible={isVisible}
          onClose={closeToastMessage}
        />
        <LoginForm message={showToastMessage} />
      </AuthPageLayout>
    </>
  );
};

export default LoginPage;
