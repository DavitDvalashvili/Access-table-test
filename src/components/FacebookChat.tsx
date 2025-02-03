import { useEffect } from "react";
import React from "react";

const FacebookChat = () => {
  useEffect(() => {
    // Dynamically load the Facebook SDK script
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the customer chat after the script loads
      window.FB.init({
        appId: "645956757760274", // Replace with your actual Facebook App ID
        autoLogAppEvents: true,
        xfbml: true, // Parse the XFBML (Facebook Markup Language) on the page
        version: "v14.0", // Use the current Facebook Graph API version
      });
    };

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div
      className="fb-customerchat"
      data-attribution="setup_tool"
      data-page_id="562117496982021" // Replace with your actual Facebook Page ID
      data-logged_in_greeting="Hi! How can we help you?"
      data-logged_out_greeting="Goodbye!"
    ></div>
  );
};

export default FacebookChat;
