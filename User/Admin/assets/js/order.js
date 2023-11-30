// Giả sử bạn có một danh sách đơn hàng (mảng) như sau:
const orders = [
    { id: 1, date: '2023-01-01', details: 'Chi tiết đơn hàng 1' },
    { id: 2, date: '2023-01-02', details: 'Chi tiết đơn hàng 2' },
    // ...Thêm đơn hàng khác vào đây
  ];
  
  function filterOrders() {
    // Lấy ngày bắt đầu và kết thúc từ input
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
  
    // Lọc đơn hàng theo khoảng thời gian
    const filteredOrders = orders.filter(order => order.date >= startDate && order.date <= endDate);
  
    // Hiển thị danh sách đơn hàng
    displayOrders(filteredOrders);
  }
  
  function displayOrders(orderList) {
    const orderContainer = document.getElementById('order-list');
    orderContainer.innerHTML = ''; // Xóa nội dung cũ
  
    orderList.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.innerHTML = `
        <p>Đơn hàng #${order.id} - Ngày: ${order.date}</p>
        <a href="#" onclick="viewOrderDetails(${order.id})">Xem chi tiết</a>
      `;
      orderContainer.appendChild(orderElement);
    });
  }
  
  function viewOrderDetails(orderId) {
    // Xử lý khi người dùng muốn xem chi tiết một đơn hàng
    // Bạn có thể chuyển hướng đến trang chi tiết đơn hàng hoặc hiển thị thông tin chi tiết ngay tại đây.
    alert(`Xem chi tiết đơn hàng #${orderId}`);
  }
  function displayOrders(orderList) {
    const orderContainer = document.getElementById('order-list');
    orderContainer.innerHTML = ''; // Xóa nội dung cũ
  
    orderList.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.innerHTML = `
        <p>Đơn hàng #${order.id} - Ngày: ${order.date}</p>
        <p>Trạng thái: ${order.status}</p>
        <a href="#" onclick="viewOrderDetails(${order.id})">Xem chi tiết</a>
        <button onclick="markOrderProcessed(${order.id})">Đánh dấu đã xử lý</button>
      `;
      orderContainer.appendChild(orderElement);
    });
  }
  
  function markOrderProcessed(orderId) {
    // Tìm đơn hàng trong danh sách và cập nhật trạng thái
    const orderToUpdate = orders.find(order => order.id === orderId);
    if (orderToUpdate) {
      orderToUpdate.status = 'Đã xử lý';
      // Cập nhật giao diện người dùng
      displayOrders(orders);
    }
  }
    
  // Listen for changes to order status
document.querySelectorAll('.order-status').forEach((select) => {
    select.addEventListener('change', (event) => {
      const orderId = event.target.closest('tr').children[0].innerText;
      const newStatus = event.target.value;
  
      // Update order status
      // This is just a placeholder. In reality, you would send a request to your server to update the status.
      console.log(`Order ${orderId} status updated to ${newStatus}`);
    });
  });

  /**Thống kê đơn hàng */
  document.getElementById('stats-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const product = event.target.elements.product.value;
    const startDate = event.target.elements['start-date'].value;
    const endDate = event.target.elements['end-date'].value;
  
    // Load stats
    // This is just a placeholder. In reality, you would fetch these details from your server.
    const stats = [
      // ...
    ];
  
    // Display stats
    const table = document.getElementById('stats-table');
    table.innerHTML = '';
    stats.forEach((stat) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${stat.product}</td>
        <td>${stat.sales}</td>
      `;
      table.appendChild(row);
    });
  });
  // Thống kê đơn hàng
 

