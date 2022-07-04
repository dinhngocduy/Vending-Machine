import { RootAdapter } from "vending-core/model-root/root.adapter";
import { redirectSSO, redirectApp } from "libraries/utils/redirect";
import { useEffect } from "react";
import asyncStorageHelpers, {
  StorageKey,
} from "vending-core/common/helpers/async-storage-helpers";
import { Subscription } from "rxjs";
import EventBus, {
  EventBusType,
  EventBusName,
} from "vending-core/common/event-bus";

export const AppAdapter = () => {
  const subscriptions = new Subscription();

  const { getTokenByCode } = RootAdapter();

  useEffect(() => {
    const init = async () => {
      console.log("-----Init App-----");
      const urlParams = new URLSearchParams(window.location.search);
      let code: any = urlParams.get("code");
      console.log("CHECK URL : ", window.location.href);
      console.log("URL PARAM: ", urlParams);
      console.log("CODE : ", code);

      const accessToken: any = await asyncStorageHelpers.get(
        StorageKey.ACCESS_TOKEN
      );
      const refreshToken = await asyncStorageHelpers.get(
        StorageKey.REFRESH_TOKEN
      );
      if (code) {
        console.log("-----code-----", code);
        // const response = await AppServices.getInstance().getTokenByCode(code);
        // if (response && response.status === SUCCESS) {
        //   let accessToken = response.data.access_token;
        //   asyncStorageHelpers.save(StorageKey.ACCESS_TOKEN, accessToken);
        //   asyncStorageHelpers.save(
        //     StorageKey.REFRESH_TOKEN,
        //     response.data.refresh_token
        //   );
        //   //   localStorage.setItem("access_token", accessToken);
        //   //   localStorage.setItem("refresh_token", response.data.refresh_token);
        //   getProfile(accessToken);
        //   //   redirectApp();
        //   window.location.pathname = "/dashboard";
        //   return;
        getTokenByCode(code);
        //   return;
        // }
      }

      console.log("--- TOKEN -- : ", accessToken, "--", refreshToken);

      if (!accessToken && !refreshToken) {
        console.log("-----App adapter 57-----");
        redirectSSO();
      }
      if (accessToken) {
        //   console.log("-----App adapter 61-----");
        //   if (!isExpiredToken(accessToken)) {
        //       console.log("-----App adapter 63-----");
        //     getProfile(accessToken);
        //   } else {
        //     if (isExpiredToken(refreshToken)) {
        //       console.log("-----App adapter 67-----");
        //       redirectSSO();
        //     } else {
        //       console.log("-----App adapter 70-----");
        //       const response =
        //         await AppServices.getInstance().getTokenByRefreshToken(
        //           refreshToken
        //         );
        //       if (response && response.status === SUCCESS) {
        //         let access_token = response.data.access_token;
        //         localStorage.setItem("access_token", response.data.access_token);
        //         localStorage.setItem(
        //           "refresh_token",
        //           response.data.refresh_token
        //         );
        //         console.log("-----App adapter 73-----");
        //   getProfile(accessToken);
        //       } else {
        //         redirectSSO();
        //       }
        //     }
        //   }
        //   redirectApp();
        // history.push("/dashboard");
        return;
      }
      // if (!accessToken && refreshToken) {
      //   console.log("-----App adapter 77-----");
      //   const response = await AppServices.getInstance().getTokenByRefreshToken(
      //     refreshToken
      //   );
      //   if (response && response.status === SUCCESS) {
      //     let access_token = response.data.access_token;
      //     localStorage.setItem("access_token", response.data.access_token);
      //     localStorage.setItem("refresh_token", response.data.refresh_token);
      //     getProfile(access_token);
      //     redirectApp();

      //   }
      // }
    };

    init();
  }, []);

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        console.log("CATCH EVENT BUS APP : ", res);

        switch (res?.type) {
          case EventBusName.REDIRECT_APP:
            redirectApp();
            break;
          case EventBusName.REDIRECT_SSO:
            redirectSSO();
            break;
          case EventBusName.LOGOUT_APP:
            redirectSSO();
            break;
        }
      })
    );
  };

  // lấy thông tin user theo token
  const getProfile = async (token: string) => {
    console.log("GET PROFILE");

    redirectApp();

    // gọi api lấy thông tin user từ database
    // const response = await AppServices.getInstance().viewDetailInfo();
    // // nếu có data trả về thì lưu vào localStorage và chuyển đến màn hình chat
    // if (response && response.data) {
    //   let userRes = response.data;
    //   console.log("-----App adapter 120-----", userRes);

    //   if (!userRes?.id) {
    //     logout();
    //   }

    //   let ihcmUser = {
    //     id: userRes.id,
    //     userName: userRes.userName,
    //     email: userRes.email,
    //     firstName: userRes.firstName,
    //     lastName: userRes.lastName,
    //     avatar: userRes.avatar,
    //     gender: userRes.gender,
    //     status: userRes.status,
    //     createdAt: userRes.createdAt,
    //     orgId: userRes.orgId,
    //     employeeid: userRes.empId,
    //   };

    //   localStorage.setItem("userId", userRes.id);
    //   localStorage.setItem("loginUser", JSON.stringify(ihcmUser));
    //   history?.push('/');
    // }
    // // nếu data trả về null
    // else {
    //   // tách userId từ token để lấy thông tin từ ihcm
    //   let decodeInfo = decodeJwt(token);
    //   console.log("-----App adapter 135-----", decodeInfo);
    //   if (decodeInfo) {
    //     var userId = decodeInfo.sub.split(":")[2];
    //     if (!userId) {
    //       logout();
    //       return;
    //     }
    //     let ihcmUser: any = {
    //       id: userId,
    //     };
    //     if (userId) {
    //     //   PushStreamService.subChat(userId);
    //     }
    //     // gọi api sang ihcm để lấy thông tin user
    //     const responsePostUser =
    //       await AppServices.getInstance().getProfileFromIhcm(token);
    //     if (responsePostUser.data) {
    //       ihcmUser.avatar = responsePostUser.data.fullPathPhoto;
    //       ihcmUser.firstName = responsePostUser.data.firstName;
    //       ihcmUser.lastName = responsePostUser.data.lastName;
    //       ihcmUser.userName = responsePostUser.data.fullName;
    //       ihcmUser.email = responsePostUser.data.email;
    //       ihcmUser.gender = responsePostUser.data.gender === "M" ? "1" : "0";
    //       ihcmUser.status = responsePostUser.data.status;
    //       ihcmUser.orgId = responsePostUser.data.orgId;
    //       ihcmUser.password = responsePostUser.data.user?.password;
    //       ihcmUser.isAdmin = responsePostUser.data.isAdmin;
    //       ihcmUser.salt = responsePostUser.data.user?.salt;
    //       ihcmUser.createdAt = responsePostUser.data.createdDate;
    //       ihcmUser.empId = responsePostUser.data.id;
    //       setUserInfo(ihcmUser);
    //       const syncUser = await AppServices.getInstance().syncUser(ihcmUser);
    //       localStorage.setItem("userId", userId);
    //       localStorage.setItem("loginUser", JSON.stringify(ihcmUser));

    //       redirectApp();
    //     } else {
    //       logout();
    //       return;
    //     }
    //   } else {
    //     logout();
    //   }
    // }
  };

  const logout = async () => {
    // await HeaderServices().getInstance().logout(getRealms(), "web");
    redirectSSO();
    // await PushStreamService.closeSocket();
  };

  return {};
};
