import {getPageElements} from "./getPageElements.js";
import {renderPosts} from "./renderPosts.js";
const {paginationBlock, blogsList} = getPageElements();
export const controls = (page) => {
    paginationBlock.addEventListener('click', (e) => {
        let target = e.target;
        if ( target.closest('.pagination__arrow_left')) {
            if (page === 1) {

            } else {
            page--;
                window.history.pushState(
                    {},
                    '',
                    `?page=${page}`
                )
            console.log(page)
            renderPosts(page)
            }
        }
        if ( target.closest('.pagination__arrow_right')) {
            page++
            window.history.pushState(
                {},
                '',
                `?page=${page}`
            )
            renderPosts(page)
            console.log(page)
        }
    });
}
