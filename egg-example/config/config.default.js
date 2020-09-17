exports.keys = 'zhonghuarenmingongheguo';
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.html': 'nunjucks',
    },
};
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
