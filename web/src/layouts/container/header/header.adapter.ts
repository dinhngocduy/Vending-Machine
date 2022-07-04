import { APP_CONFIGS } from "vending-core/common/app-config";
import { RootAdapter } from "vending-core/model-root/root.adapter";
import { useCallback, useEffect, useState } from "react";
import { ENUM_CONSTANT_NUMBER } from "libraries/enums/constant";
import { ENUM_PAGE } from "libraries/enums/page";
import useIdInPath from "libraries/hooks/useIdInPath";
import useWindowSize from "libraries/hooks/useWindowSize";
import asyncStorageHelpers, {
  StorageKey,
} from "vending-core/common/helpers/async-storage-helpers";

function HeaderAdapter() {
  const { width, height } = useWindowSize();
  const curPage = useIdInPath();

  //state
  const [page, setPage] = useState<string>(ENUM_PAGE.DASHBOARD);
  const [hasMiniMenu, setHasMiniMenu] = useState<boolean>(true);

  useEffect(() => {
    if (curPage !== page) {
      setPage(curPage);
    }
  }, []);

  useEffect(() => {
    if (width >= ENUM_CONSTANT_NUMBER.WIDTH_IPAD) {
      !hasMiniMenu && setHasMiniMenu(true);
    }
  }, [width, hasMiniMenu]);

  useEffect(() => {
    hasMiniMenu && setHasMiniMenu(false);
  }, [curPage]);

  const toggleMenu = useCallback(() => {
    setHasMiniMenu((prev) => !prev);
  }, []);

  const logoutApp = async () => {
    asyncStorageHelpers.save(StorageKey.ACCESS_TOKEN,'');
    asyncStorageHelpers.save(StorageKey.REFRESH_TOKEN,'');
    const url_logout =
      APP_CONFIGS.SSO_URL +
      APP_CONFIGS.GET_TOKEN_URL_SUFFIX +
      "logout" +
      "?redirect_uri=" +
      APP_CONFIGS.DOMAIN_APP;
    console.log("REDIRECT LOGOUT : ", url_logout);
    window.location.href = url_logout;
  };

  return {
    page,
    setPage,
    toggleMenu,
    hasMiniMenu,
    logoutApp,
  };
}

export default HeaderAdapter;
