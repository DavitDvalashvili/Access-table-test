import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import React from "react";

const FacebookChat = () => {
  const MessengerRef = useRef<any>();

  useEffect(() => {
    MessengerRef.current.setAttribute("page_id", "562117496982021");
    MessengerRef.current?.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v16.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      (fjs.parentNode as ParentNode).insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        ref={MessengerRef}
        id="fb-customer-chat"
        className="fb-customerchat"
      ></div>
    </>
  );
};

export default FacebookChat;
