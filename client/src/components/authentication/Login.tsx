import Button from "./../../components/Button";
import Input from "./Input";

function LoginForm() {
  return (
    <form className="space-y-5">
      <div className="space-y-1">
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={"email"}
          onInputChange={() => {}}
        />
      </div>

      <div className="space-y-1">
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={"password"}
          onInputChange={() => {}}
        />
      </div>

      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          btnTitle="Login"
          btnVariant="primary"
          size="md"
          customStyle="w-full"
          onBtnClick={() => {}}
        />

        <Button
          type="button"
          btnTitle="Login as Guest"
          btnVariant="secondary"
          size="md"
          customStyle="w-full"
          onBtnClick={() => {}}
        />
      </div>
    </form>
  );
}

export default LoginForm;
