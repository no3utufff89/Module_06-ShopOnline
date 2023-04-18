export const createBlog = ({id, title}) => {
    const li = document.createElement('li');
    li.className = 'blogs-list__item blog-card';
    li.innerHTML = `
    <div class="blog-card__pic">
                        <img src="../assets/blogs/blog_01.png" alt="Картинка блога" class="blog-card__img">
                    </div>
                    <div class="blog-card__content">
                        <a href="article.html?id=${id}" class="blog-card__link">
                            <h3 class="blog-card__title">${title}</h3>
                        </a>
                        <div class="blog-card__time-info">
                            <div class="card-date">
                                <span class="card-date__date">25</span>
                                <span class="card-date__month">октября</span>
                                <span class="card-date__year">2021</span>,&nbsp;
                            </div>
                            <div class="card-time">
                                <span class="card-time__hour">12</span>
                                :
                                <span class="card-time__minute">45</span>
                            </div>
                        </div>
                        <div class="blog-card__stat">
                            <div class="views">
                                <svg class="views-icon" width="24" height="25">
                                    <use href="#eye-icon" width="24" height="25"></use>
                                </svg>
                                <span class="views-number">
                                    1.2
                                </span>
                                к
                            </div>
                            <div class="comments">
                                <svg class="comments-icon" width="24" height="24">
                                    <use href="#chat-icon" width="24" height="24"></use>
                                </svg>
                                <span class="comments-number">0</span>
                            </div>
                        </div>
                    </div>
  `
    return li;
};
export const createPaginationLi = (page, liActive) => {
    const li = document.createElement('li');
    li.className = `pagination__item ${liActive}`;
    const a = document.createElement('a');
    a.textContent = page;
    if (page === 1) {
        a.href= `./blog.html`;
    } else {
        a.href= `./blog.html?page=${page}`;
    }
    li.append(a);
    return li;
};