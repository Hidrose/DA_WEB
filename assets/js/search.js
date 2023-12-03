// Giả sử dữ liệu sản phẩm của bạn được lưu trữ trong một mảng
const products = [
    { name: 'HERMES', link: './hermes.html' },
    { name: 'Gucci', link: './gucci.html' },
    { name: 'VALENTINO', link: './gucci.html' },
    { name: 'Chanel', link: './gucci.html' },
    
    // Thêm nhiều sản phẩm hơn nếu cần
];

// Hàm lọc sản phẩm dựa trên văn bản người dùng nhập
function filterProducts(searchTerm) {
    return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Hàm hiển thị kết quả tìm kiếm
function displayResults(results) {
    const resultsList = document.getElementById('searchResultsList');
    resultsList.innerHTML = '';

    results.forEach(result => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.name;
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.getElementById('searchResultsContainer');

    // Bộ lắng nghe sự kiện cho sự thay đổi đầu vào
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length === 0) {
            searchResultsContainer.style.display = 'none';
            return;
        }

        const filteredResults = filterProducts(searchTerm);
        displayResults(filteredResults);

        // Hiển thị container kết quả
        searchResultsContainer.style.display = 'block';
    });
});