exports.handler = async (event, context) => {
    const { handler } = await import('./index.mjs');
    return handler(event, context);
}
