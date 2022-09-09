import {shallowRef} from "vue";
import Index from "./pages/Index.vue";
import Impressum from "./pages/Impressum.vue";
import Datenschutz from "./pages/Datenschutz.vue";
import NotFound from "./pages/404.vue";


export function initRouter(app) {
    app.config.globalProperties.$routerComponent = shallowRef(router(app));

    app.config.globalProperties.$router = {
        push: (route) => {
            window.history.pushState(null, '', route);
            app.config.globalProperties.$routerComponent.value = router(app);
        }
    };

    app.config.globalProperties.$window.addEventListener('popstate', function (event) {
        app.config.globalProperties.$routerComponent.value = router(app);
    });

}

function router(app) {
    console.log(window.location.pathname);
    if (window.location.pathname === '/') {
        app.config.globalProperties.$i18n.locale = 'en';
        return Index;
    } else if (window.location.pathname === '/impressum') {
        return Impressum;
    } else if (window.location.pathname === '/datenschutz') {
        return Datenschutz;
    } else if (window.location.pathname === '/de') {
        app.config.globalProperties.$i18n.locale = 'de';
        return Index;
    } else {
        return NotFound;
    }
}


