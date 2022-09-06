export async function onRequest({ env }) {
    return new Response(JSON.stringify(env));
}