
// btn color add remove part--

document.getElementById('history-btn').addEventListener('click', function () {

    removeOrAddColorBtn('history-btn');
})

document.getElementById('donate-btn').addEventListener('click', function () {

    removeOrAddColorBtn('donate-btn');
});


// show section part ---

document.getElementById('history-btn').addEventListener('click', function () {

    showHistoryOrDonateSection('history-section');

})

document.getElementById('donate-btn').addEventListener('click', function () {

    showHistoryOrDonateSection('donate-section');

})


// -----    

const blogBtn = document.getElementById('blog-page-btn')
if (blogBtn) {

    blogBtn.addEventListener('click', function (e) {

        e.preventDefault();

        window.location.href = "./blog.html";
    });

}

