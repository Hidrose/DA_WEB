// Mô phỏng dữ liệu người dùng
const users = [
    { id: 1, name: "Người Dùng 1", address: "Địa chỉ 1", status: "active" },
    { id: 2, name: "Người Dùng 2", address: "Địa chỉ 2", status: "locked" },
    // Thêm dữ liệu người dùng khác nếu cần
  ];
  
  // Hiển thị dữ liệu người dùng trong bảng
  const userTableBody = document.querySelector("#userTable tbody");
  
  users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.address}</td>
      <td>${user.status}</td>
      <td><button onclick="openEditModal(${user.id})">Chỉnh sửa</button></td>
    `;
    userTableBody.appendChild(row);
  });
  
  // Mở modal chỉnh sửa với thông tin người dùng cụ thể
  function openEditModal(userId) {
    const user = users.find(u => u.id === userId);
    document.getElementById("editID").value = user.id;
    document.getElementById("editName").value = user.name;
    document.getElementById("editAddress").value = user.address;
    document.getElementById("editStatus").value = user.status;
    document.getElementById("editModal").style.display = "block";
  }
  
  // Đóng modal chỉnh sửa
  function closeModal() {
    document.getElementById("editModal").style.display = "none";
  }
  
  // Xử lý sự kiện khi submit form chỉnh sửa
  document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Lấy giá trị từ các trường nhập liệu
    const userId = parseInt(document.getElementById("editID").value);
    const newName = document.getElementById("editName").value;
    const newAddress = document.getElementById("editAddress").value;
    const newStatus = document.getElementById("editStatus").value;
  
    // Cập nhật thông tin người dùng trong mảng
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      users[userIndex].name = newName;
      users[userIndex].address = newAddress;
      users[userIndex].status = newStatus;
  
      // Cập nhật thông tin người dùng trong bảng
      const row = userTableBody.querySelector(`tr:nth-child(${userIndex + 1})`);
      row.innerHTML = `
        <td>${userId}</td>
        <td>${newName}</td>
        <td>${newAddress}</td>
        <td>${newStatus}</td>
        <td><button onclick="openEditModal(${userId})">Chỉnh sửa</button></td>
      `;
    }
  
    // Đóng modal chỉnh sửa
    closeModal();
  });
  