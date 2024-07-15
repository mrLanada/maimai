// Function to show submenu
function showSubmenu(submenuId) {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        if (submenu.id === submenuId) {
            submenu.style.display = submenu.style.display === 'none' ? 'flex' : 'none';
        } else {
            submenu.style.display = 'none';
        }
    });
}

// Function to show content
function showContent(type, index) {
    const mainPage = document.getElementById('mainPage');
    const contentPage = document.getElementById('contentPage');
    const content = document.getElementById('content');
    
    mainPage.style.display = 'none';
    contentPage.style.display = 'flex';
    contentPage.className = 'content-page ' + type;
    
    // Clear previous content
    content.innerHTML = '';

    if (type === 'poem') {
        const poemDetails = getPoemDetails(index);
        content.innerHTML = '<div class="poem-container"><img src="' + poemDetails.image + '" alt="Poem Image"><p>' + poemDetails.text + '</p></div>';
    } else if (type === 'song') {
        const songDetails = getSongDetails(index);
        content.innerHTML = '<img src="' + songDetails.image + '" alt="Song Image"><audio controls autoplay><source src="' + songDetails.audio + '" type="audio/mpeg"></audio>';
    } else if (type === 'picture') {
        const pictureDetails = getPictureDetails(index);
        content.innerHTML = '<div class="picture-container"><img src="' + pictureDetails.image + '" alt="Picture"><div class="scrollable-text">' + pictureDetails.description + '</div></div>';
    }
}

// Function to go back to main page
function goBack() {
    const mainPage = document.getElementById('mainPage');
    const contentPage = document.getElementById('contentPage');
    const content = document.getElementById('content');
    
    mainPage.style.display = 'flex';
    contentPage.style.display = 'none';
    content.innerHTML = '';
}

// Sample data and functions to get poems, songs, and pictures
function getPoemDetails(index) {
    // Replace with actual poem details
    const poems = [
        { image: "images/poem1.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem2.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem3.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem4.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem5.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem6.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem7.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem8.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem9.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem10.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem11.jpg", text: "Happy Anniversary, My Love!!!" },
        { image: "images/poem12.jpg", text: "Happy Anniversary, My Love!!!" },
    ];
    return poems[index - 1];
}

function getSongDetails(index) {
    // Replace with actual song details
    const songs = [
        { image: "images/song1.jpg", audio: "audio/song1.mp3" },
        { image: "images/song2.jpg", audio: "audio/song2.mp3" },
        { image: "images/song3.jpg", audio: "audio/song3.mp3" },
        { image: "images/song4.jpg", audio: "audio/song4.mp3" },
        { image: "images/song5.jpg", audio: "audio/song5.mp3" },
        { image: "images/song6.jpg", audio: "audio/song6.mp3" },
        { image: "images/song7.jpg", audio: "audio/song7.mp3" },
        { image: "images/song8.jpg", audio: "audio/song8.mp3" },
        { image: "images/song9.jpg", audio: "audio/song9.mp3" },
        { image: "images/song10.jpg", audio: "audio/song10.mp3" },
        { image: "images/song11.jpg", audio: "audio/song11.mp3" },
        { image: "images/song12.jpg", audio: "audio/song12.mp3" }
    ];
    return songs[index - 1];
}

function getPictureDetails(index) {
    // Replace with actual picture details
    const pictures = [
        { image: "images/picture1.jpg", description: "Cutieee sakon baby uy" },
        { image: "images/picture2.jpg", description: "iba gud talaga imo aura didi <3" },
        { image: "images/picture3.jpg", description: "kahusayyy mo!!!" },
        { image: "images/picture4.jpg", description: "an arom gad uy mas nakaka-inlove!!!" },
        { image: "images/picture5.jpg", description: "cutie uy kaupay la pirme i-kiss mwahh" },
        { image: "images/picture6.jpg", description: "wow taasa mo didi and as always sexy pirme<3" },
        { image: "images/picture7.jpg", description: "cutieee babyyy!!!" },
        { image: "images/picture8.jpg", description: "wow rich kit man diay ini nga akon baby" },
        { image: "images/picture9.jpg", description: "irong imo uy taasa, kahusayyy!!!" },
        { image: "images/picture10.jpg", description: "kacutieeeee!!!" },
        { image: "images/picture11.jpg", description: "wow so ganda naman ng baby ko na yan!" },
        { image: "images/picture12.jpg", description: "sexyhaaaa swerteaha ko gudman" }
    ];
    return pictures[index - 1];
}
