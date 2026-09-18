const buttons = document.querySelectorAll('.tag-filter');
const posts = document.querySelectorAll('#post-list li');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedTag = button.dataset.tag;
        console.log({button, buttons})    

        buttons.forEach((btn) => btn.setAttribute('aria-pressed', `${btn === button}`));

        posts.forEach((post) => {
            const postTags = post.dataset.tags?.split(',') ?? [];
            post.hidden = selectedTag !== 'all' && !postTags.includes(selectedTag);
        });
    });
});
