import {renderPosts} from "./renderPosts.js";
import {controls} from "./controls.js";
let page = +(new  URLSearchParams(window.location.search).get('page'));

if (page === 0) {
    page = 1;
}
renderPosts(page);
controls(page);

