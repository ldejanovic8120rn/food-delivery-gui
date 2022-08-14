window.addEventListener('load', init);

function init() {
    document.getElementById('logut-button').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/admin-login';
    })

    document.getElementById('user-button').addEventListener('click', e => {
        window.location.href = '/admin-users';
    })

    document.getElementById('restaurant-button').addEventListener('click', e => {
        window.location.href = '/admin-restaurants';
    })

    document.getElementById('food-button').addEventListener('click', e => {
        window.location.href = '/admin-foods';
    })

    document.getElementById('comment-button').addEventListener('click', e => {
        window.location.href = '/admin-comments';
    })
}