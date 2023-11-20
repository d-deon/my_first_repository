document.getElementById('dark-theme-btn').addEventListener
('click', () => {
    document.documentElement.style.setProperty
    ('--background-color', '#333')

})

document.getElementById('light-theme-btn').addEventListener
('click', ()=>{
    document.documentElement.style.setProperty
    ('--background-color', 'white')

})