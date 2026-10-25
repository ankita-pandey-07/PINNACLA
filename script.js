document.addEventListener('DOMContLoaded' , () => {
    const actionBtn = document.getElementById('actionBtn');

    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            alert('Welcome to pinnacle! JavaScript is working perfectly.');      
        });
    }
});