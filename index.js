export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/.well-known/com.apple.remotemanagement") {
      const jsonData = {
        "msg": "Replace this with your actual Apple JSON content"
      };

      return new Response(JSON.stringify(jsonData), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};
