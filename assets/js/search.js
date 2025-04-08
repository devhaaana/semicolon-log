function formatDate(dateString) {
    const regex = /^(\d{4}-\d{2}-\d{2})\s(\d{2}:\d{2}:\d{2})/;
    let convertDate = dateString;
    
    if (regex.test(dateString)) {
        convertDate = dateString.replace(/ \+\d{4}$/, '');
        convertDate = convertDate.replace(" ", "T");
    }
    let date = new Date(convertDate);
    let seasonIcon = "";

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    if (month >= 3 && month <= 5) {
        seasonIcon = '<i class="fa-solid fa-seedling" title="Spring" style="color: #4caf50;"></i>';
    } else if (month >= 6 && month <= 8) {
        seasonIcon = '<i class="fa-solid fa-sun" title="Summer" style="color: #F4B400;"></i>';
    } else if (month >= 9 && month <= 11) {
        seasonIcon = '<i class="fa-solid fa-leaf" title="Autumn" style="color: #996515;"></i>';
    } else {
        seasonIcon = '<i class="fa-solid fa-snowflake" title="Winter" style="color: #74C0FC;"></i>';
    }
    return `${seasonIcon}&nbsp;&nbsp;${year}년 ${month}월 ${day}일`;
}

$(function () {
    var posts = [];

    if (!sessionStorage.getItem("base_url")) {
        sessionStorage.setItem("base_url", '/semicolon-log');
    }
    let base_url = sessionStorage.getItem("base_url");

    $.get(base_url + '/search.json', function (data) {
        posts = data;
        updatePostCount(posts.length);
        displayResults(posts);
    });

    $('#search-input').on('keyup', function () {
        let keyword = this.value.toLowerCase();
        
        if (keyword === "") {
            updatePostCount(posts.length);
            displayResults(posts);
        } else {
            let searchResult = posts.filter(post => 
                post.title.toLowerCase().includes(keyword) || 
                (post.description && post.description.toLowerCase().includes(keyword))
            );
            updatePostCount(searchResult.length);
            displayResults(searchResult);
        }
    });

    function updatePostCount(count) {
        $('#post-count').text(`There are ${count} posts.`);
    }

    function displayResults(results) {
        let postListContainer = $('#post-list');
        postListContainer.empty();

        if (results.length === 0) {
            postListContainer.append('<div class="post-item">검색 결과가 없습니다.</div>');
            return;
        }

        results.forEach(post => {
            let formattedDate = formatDate(post.date);
            postListContainer.append(
                `
                <div class="posts divider">
                <a href="${post.url}">
                    <h2 class="title" href="${post.url}">[${post.category}] ${post.title}</h2>
                </a>
                <p class="description">${post.summation}</p>
                <div class="tags">
                    ${post.tags.split(',').map(tag => 
                        `<a href="${base_url}/tags/${tag.trim()}" class="tag"><i class="fa-solid fa-tags"></i> ${tag.trim()}</a>`
                    ).join('')}
                </div>
                <span class="date">${formattedDate}</span>
                </div>
                `
            );
        });
    }
});
