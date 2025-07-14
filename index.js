chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.startsWith("https://usdt0.to/api/trpc/bridge.blacklisted")) {
      console.log('Intercepting USDT0 Check');
      const customResponse = {result:{data:{json:{blacklisted:false}}}};
      return { redirectUrl: "data:application/json," + encodeURIComponent(JSON.stringify(customResponse)) };
    }
  },
  {urls: ["<all_urls>"]},
  ["requestBody", "blocking"]
);
