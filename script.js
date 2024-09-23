// You can add any interactive features here, for example, filtering products

const filterButtons = document.querySelectorAll('.product-filter button');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Implement filter functionality
    });
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition < 200) {
        document.body.style.backgroundColor = "#e0f7fa";  // สีฟ้าอ่อน
    } else if (scrollPosition >= 200 && scrollPosition < 400) {
        document.body.style.backgroundColor = "#b2ebf2";  // สีฟ้าเข้มขึ้นเล็กน้อย
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
        document.body.style.backgroundColor = "#80deea";  // สีฟ้าโทนเย็น
    } else if (scrollPosition >= 600 && scrollPosition < 800) {
        document.body.style.backgroundColor = "#4dd0e1";  // สีฟ้าน้ำทะเล
    } else {
        document.body.style.backgroundColor = "#26c6da";  // สีเข้มขึ้น
    }
});


