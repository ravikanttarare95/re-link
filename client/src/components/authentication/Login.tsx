import Button from "./../../components/Button";
import Input from "./Input";
import Label from "./Label";

function LoginForm() {
  return (
    <form className="space-y-5">
      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor={"input-email"} labelTitle={"Email address:"} />

        <Input
          id="input-email"
          type="email"
          placeholder="you@example.com"
          value={"email"}
          onInputChange={() => {}}
        />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label htmlFor={"input-password"} labelTitle={"Password"} />

        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={"password"}
          onInputChange={() => {}}
        />
      </div>

      {/* Buttons */}
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
