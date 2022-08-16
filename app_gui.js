const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const history = require('connect-history-api-fallback');

require('dotenv').config();

const app = express();

function getCookies(req) {
    if (req.headers.cookie == null) {
        return {};
    }

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach(rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];

    if (token == null) {
        return res.redirect(301, '/admin-login');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.redirect(301, '/admin-login');
        }

        req.user = user;
        next();
    });
}

app.get('/admin', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});

app.get('/admin-login', (req, res) => {
    res.sendFile('login_register.html', { root: './static' });
});

app.get('/admin-users', authToken, (req, res) => {
    if (req.user.role === 'ADMIN' || req.user.role === 'MODERATOR') {
        res.sendFile('users.html', { root: './static' });
    }
    else {
        res.status(401).send('Not authorized');
    }
});

app.get('/admin-restaurants', authToken, (req, res) => {
    if (req.user.role === 'ADMIN' || req.user.role === 'MODERATOR') {
        res.sendFile('restaurants.html', { root: './static' });
    }
    else {
        res.status(401).send('Not authorized');
    }
});

app.get('/admin-foods', authToken, (req, res) => {
    if (req.user.role === 'ADMIN' || req.user.role === 'MODERATOR') {
        res.sendFile('foods.html', { root: './static' });
    }
    else {
        res.status(401).send('Not authorized');
    }
});

app.get('/admin-comments', authToken, (req, res) => {
    if (req.user.role === 'ADMIN' || req.user.role === 'MODERATOR') {
        res.sendFile('comments.html', { root: './static' });
    }
    else {
        res.status(401).send('Not authorized');
    }
});

const staticMdl = express.static(path.join(__dirname, 'dist'));

app.use(staticMdl);
app.use(history({ index: '/index.html' }));
app.use(staticMdl);

app.use(express.static(path.join(__dirname, 'static')));
app.listen({ port: process.env.PORT || 8080 }, async () => {
    console.log('GUI server started!')
});