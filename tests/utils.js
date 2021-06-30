exports.generateControllerParams = (params={}, body) => {
    const req = {
        params: {id: params.id},
        query: params.query,
        body,
    };
    const res = {};
    res.setHeader = jest.fn();
    res.status = jest.fn().mockImplementation(function () {
        return res;
    });
    res.send = jest.fn().mockImplementation(function () {
        return res;
    });
    res.end = jest.fn();
    return {req, res};
};
