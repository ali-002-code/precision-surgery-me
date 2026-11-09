/**
 * Permanently redirects www.precisionsurgeryme.com to the canonical apex
 * domain, keeping the path and query string.
 */
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "precisionsurgeryme.com";
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  },
};
