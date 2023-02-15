if (window.location.search.startsWith('?q&a')) {
    const redirect = document.referrer.replace(/issues\/new\/choose/, 'discussions/categories/q-a')
    if (redirect.startsWith('https://github.com/')) {
        window.location.href = redirect
    }
}
