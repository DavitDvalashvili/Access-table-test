import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="645956757760274" chatSupport>
      <CustomChat pageId="562117496982021" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
