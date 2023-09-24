const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                const href = event.target.getAttribute('href');
                Router.go(href);
            });
        });
        window.addEventListener('popstate', event => Router.go(event.state.route, false))
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        if(addToHistory) {
            history.pushState({route}, '', route);
        }
        let pageElement = null;
        switch(route) {
            case '/': 
                pageElement = document.createElement('menu-page');
            break;
            case '/order': 
            pageElement = document.createElement('order-page');
            break;
            default:
                if (route.startsWith("/product-")) {                
                    pageElement = document.createElement("details-page");
                    pageElement.dataset.productId = route.substring(route.lastIndexOf("-")+1);
                }
            break;
        }

        if(pageElement) {
            const cache = document.querySelector('main');
            cache.innerHTML = '';
            cache.appendChild(pageElement);
        }
    }
};

export default Router;