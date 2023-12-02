// script.js
document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const modal = document.getElementById('confirmation-modal');
    const confirmDeleteButton = document.getElementById('confirm-delete');
    const cancelButton = document.getElementById('cancel-delete');
    const closeButton = document.getElementsByClassName('close')[0];
    

    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    confirmDeleteButton.addEventListener('click', function () {
        // Xử lý xóa sản phẩm ở đây
        modal.style.display = 'none';
    });

    cancelButton.addEventListener('click', function() {
        modal.style.display = 'none';
    })
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

    // Lấy thông tin sản phẩm cần sửa (có thể lấy thông tin từ server hoặc localStorage)

    // Điền thông tin sản phẩm vào các trường
    document.getElementById("product-name").value = "Tên sản phẩm cũ";
    document.getElementById("product-price").value = "Giá sản phẩm cũ";
    document.getElementById("product-description").value = "Mô tả sản phẩm cũ";

    // Xử lý nút Lưu
    document.getElementById("save-button").addEventListener("click", function () {
        // Lấy thông tin sửa sản phẩm từ các trường
        var newName = document.getElementById("product-name").value;
        var newPrice = document.getElementById("product-price").value;
        var newDescription = document.getElementById("product-description").value;
        var newImage = document.getElementById("product-image").files[0]; // Hình ảnh mới

        // Thực hiện lưu thông tin sửa sản phẩm (có thể gửi dữ liệu đến server hoặc lưu vào localStorage)
        
        // Sau khi lưu thành công, điều hướng hoặc cập nhật trang sản phẩm
        // window.location.href = "product.html"; // Điều hướng về trang sản phẩm
    });

    // Xử lý nút Hủy
    document.getElementById("cancel-button").addEventListener("click", function () {
        // Điều hướng hoặc cập nhật trang sản phẩm
        // window.location.href = "product.html"; // Điều hướng về trang sản phẩm
    });


/**js cho user */
const lockButton = document.getElementById("lockButton");
const confirmationModal = document.getElementById("confirmationModal");
const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton");

lockButton.addEventListener("click", () => {
  confirmationModal.style.display = "block";
});

confirmButton.addEventListener("click", () => {
  // Thực hiện khóa tài khoản ở đây
  alert("Tài khoản đã được khóa!");
  confirmationModal.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});
