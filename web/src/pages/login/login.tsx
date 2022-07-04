import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as BlackLogo } from "../../assets/svg/logo_black.svg";
import { ReactComponent as WhiteLogo } from "../../assets/svg/logo_white.svg";
import ButtonV2 from "./components/button/button";
import "./login.scss";
import { InputV2 } from "./components/input/input";
import { LoginAdapter } from "vending-core/model-login/login.adapter";
import { User } from "../../../../vending-core/common/types/user";
import asyncStorageHelpers, {
  StorageKey,
} from "vending-core/common/helpers/async-storage-helpers";

export default function LoginV2(props: any) {
  const { auth } = LoginAdapter();

  let history = useHistory();

  const inputUsername = React.createRef();
  const inputPass = React.createRef();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginErr, setLoginerr] = useState<boolean>(false);

  useEffect(() => {
     history.push('/dashboard')
    return () => {};
  }, []);

  const getUserInfo = async () => {
    const value = await asyncStorageHelpers.get(StorageKey.DEVICE_INFO);
    console.log("test_get_user_info: ", value);
  };

  const actionAuth = async () => {
    const data = {
      username: userName,
      password: password,
      grant_type: "password",
      client_id: "web",
    };

    const rs = await auth(data);
    if (rs) {
      console.log("====================================");
      console.log("Login: ", rs);
      console.log("====================================");
      asyncStorageHelpers.save(StorageKey.ACCESS_TOKEN, rs.access_token);
      asyncStorageHelpers.save(StorageKey.REFRESH_TOKEN, rs.refresh_token);
      history.push("/dashboard", { dataResult: rs });
    } else {
      setLoginerr(true);
    }
  };

  return (
    <div className="login">
      <div className="login__background">
        <WhiteLogo />
      </div>

      {/* <div className="login__form">
        <BlackLogo className="logo" />

        <span className="login__form__text">Đăng nhập</span>

        <div className="input-container">
          <p className="input-container__label">Tài khoản</p>
          <InputV2
            ref={inputUsername}
            placeholder="Nhập tài khoản"
            onChange={setUserName}
          />
        </div>

        <div className="input-container">
          <p className="input-container__label">Mật khẩu</p>
          <InputV2
            ref={inputPass}
            placeholder="Nhập mật khẩu"
            type="password"
            onChange={setPassword}
          />
        </div>
        {loginErr ? (
          <span className="label-login-err">
            Tài khoản hoặc mật khẩu không chính xác
          </span>
        ) : null}
        <ButtonV2 className="button" text="Đăng nhập" onClick={actionAuth} />
        <div className="language-button-container">
          <div className="language-button">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
            />
            <p className="language-button__text">VN</p>
          </div>

          <div className="language-button">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2880px-Flag_of_the_United_Kingdom.svg.png"
            />
            <p className="language-button__text">EN</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
