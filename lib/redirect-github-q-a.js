if (window.location.search.startsWith('?q&a')) {
    window.location.href = document.referrer.replace(/issues\/new\/choose/, 'discussions/categories/q-a')
}
