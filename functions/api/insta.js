// export async function onRequest(context) {
//     // Contents of context object
//     const {
//       request, // same as existing Worker API
//       env, // same as existing Worker API
//       params, // if filename includes [id] or [[path]]
//       waitUntil, // same as ctx.waitUntil in existing Worker API
//       next, // used for middleware or to fetch assets
//       data, // arbitrary space for passing data between middlewares
//     } = context;
  
//     return new Response("Hello, world!");
//   }
  
export async function onRequest({ env }) {
  
  let apiKey = await env.insta.get("insta_key");
  let apiCacheTime = await env.insta.get("insta_key_time");

  // update insta api key
  if (!apiKey || !apiCacheTime || (Date.now() - apiCacheTime) > 1000 * 60 * 60 * 24 * 7) {
    let req = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${apiKey}`);
    let { access_token } = await req.json();

    env.insta.put('insta_key', access_token);
    env.insta.put('insta_key_time', Date.now().toString());

    console.log("Updated API Key.");
  }

  let instaJSON = await env.insta.get("insta_json");
  let instaJSONCache = await env.insta.get("insta_json_time");
  
  if (!instaJSON || !instaJSONCache || (Date.now() - instaJSONCache) > 1000 * 60 * 15) {
    let req = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${apiKey}`);
    instaJSON = JSON.stringify((await req.json()).data);

    env.insta.put('insta_json', instaJSON);
    env.insta.put('insta_json_time', Date.now().toString());

    console.log("Updated Insta json.");
  }

  return new Response(instaJSON);
}
  