import open from 'open';

(async () => {
    await open('./test/test.html', {
        'wait': false,
    });
})();