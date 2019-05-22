import reddit from './redditapi';


const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    // console.log(124);
    const searchTerm= searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    const searchLimit = document.getElementById('limit').value;
    console.log(searchLimit);
    if(searchTerm === ''){
        showMessage('search something', 'alert-danger');
    }
    searchInput.value='';
    reddit.search(searchTerm, searchLimit, sortBy);



    e.preventDefault();
});

function showMessage(message, className){
const div = document.createElement('div');
div.className=`alert ${className}`;
div.appendChild(document.createTextNode(message));
const searchContainer = document.getElementById('search-container');
const search = document.getElementById('search');
searchContainer.insertBefore(div, search);
setTimeout(() => document.querySelector('.alert').remove(), 2000)
}

