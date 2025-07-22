import { useEffect } from "react";

const Chat = () => {

  useEffect(() => {
    // Load the Tawk.to script
    var Tawk_API = Tawk_API || {};
    // var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/67c428f58f598e1914aab3c6/1ilb40060";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null
};

export default Chat;
