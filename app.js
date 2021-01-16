const serverHandle = (res, req) => {
    req.setHeader('Content-type', 'application/json');

    const resData = {
        name: 'wenyajun33333eeeeeee2ffeefeefefefefe',
        stice: 'imooc',
        env: process.env.NODE_ENV,
    };
    req.end(JSON.stringify(resData));
};
module.exports = serverHandle;
