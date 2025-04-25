document.addEventListener("DOMContentLoaded", function () {
  // 日期选择器功能
  const datePickers = document.querySelectorAll(".date-picker input");
  datePickers.forEach((input) => {
    input.addEventListener("click", function () {
      // 这里可以添加日期选择器的弹出逻辑
      console.log("日期选择器点击");
    });
  });

  // 搜索功能
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-box input");

  searchBtn.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log("搜索:", searchTerm);
      // 这里可以添加实际搜索逻辑
    }
  });

  // 添加按钮功能
  const addBtn = document.querySelector(".add-btn");
  addBtn.addEventListener("click", function () {
    console.log("添加按钮点击");
    // 跳转到配置页面
    window.location.href = "add_config.html";
  });

  // 弹窗相关元素
  const dataModal = document.getElementById("dataModal");
  const videoModal = document.getElementById("videoModal");
  const coinModal = document.getElementById("coinModal");
  const confirmModal = document.getElementById("confirmModal");
  const closeDataModal = document.getElementById("closeDataModal");
  const closeVideoModal = document.getElementById("closeVideoModal");
  const closeCoinModal = document.getElementById("closeCoinModal");

  // 发放星火币相关元素
  const coinInput = document.getElementById("coinInput");
  const confirmCoin = document.getElementById("confirmCoin");
  const cancelCoin = document.getElementById("cancelCoin");
  const confirmAction = document.getElementById("confirmAction");
  const cancelConfirm = document.getElementById("cancelConfirm");
  const confirmMessage = document.getElementById("confirmMessage");

  // 当前选中的视频数据
  let currentVideoData = null;

  // 关闭弹窗功能
  closeDataModal.addEventListener("click", function () {
    dataModal.style.display = "none";
  });

  closeVideoModal.addEventListener("click", function () {
    videoModal.style.display = "none";
  });

  closeCoinModal.addEventListener("click", function () {
    coinModal.style.display = "none";
  });

  // 关闭星火币发放弹窗
  cancelCoin.addEventListener("click", function () {
    coinModal.style.display = "none";
  });

  // 关闭确认弹窗
  cancelConfirm.addEventListener("click", function () {
    confirmModal.style.display = "none";
  });

  // 点击弹窗外部关闭弹窗
  window.addEventListener("click", function (e) {
    if (e.target == dataModal) {
      dataModal.style.display = "none";
    }
    if (e.target == videoModal) {
      videoModal.style.display = "none";
    }
    if (e.target == coinModal) {
      coinModal.style.display = "none";
    }
    if (e.target == confirmModal) {
      confirmModal.style.display = "none";
    }
  });

  // 操作按钮功能
  document.addEventListener("click", function (e) {
    // 编辑按钮
    if (e.target.classList.contains("edit-btn")) {
      const id = e.target.getAttribute("data-id");
      console.log("编辑ID:", id);
      // 跳转到配置页面，带上ID参数
      window.location.href = `add_config.html?id=${id}`;
    }

    // 查看数据按钮
    if (e.target.classList.contains("view-btn")) {
      const id = e.target.getAttribute("data-id");
      console.log("查看数据ID:", id);

      // 显示查看数据弹窗
      displayDataModal(id);
    }

    // 视频管理按钮
    if (e.target.classList.contains("manage-btn")) {
      const id = e.target.getAttribute("data-id");
      console.log("视频管理ID:", id);

      // 显示视频管理弹窗
      displayVideoModal(id);
    }
  });

  // 分页功能
  const pageBtns = document.querySelectorAll(".page-btn");
  pageBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        document.querySelector(".page-btn.active").classList.remove("active");
        this.classList.add("active");
        console.log("切换到页码:", this.textContent);
        // 这里可以添加页面切换逻辑
      }
    });
  });

  // 查看数据弹窗展示函数
  function displayDataModal(id) {
    // 根据不同ID加载不同数据
    if (id === "1") {
      document.getElementById("dataPlanName").textContent = "测试计划";
      document.getElementById("submissionCount").textContent = "32";
      document.getElementById("totalLikes").textContent = "128,475";
      document.getElementById("totalViews").textContent = "1,246,890";
      document.getElementById("budget").textContent = "10,000";
      document.getElementById("balance").textContent = "4,325";
      document.getElementById("distributed").textContent = "5,675";
    } else if (id === "2") {
      document.getElementById("dataPlanName").textContent = "双十一活动";
      document.getElementById("submissionCount").textContent = "156";
      document.getElementById("totalLikes").textContent = "486,213";
      document.getElementById("totalViews").textContent = "3,892,455";
      document.getElementById("budget").textContent = "25,000";
      document.getElementById("balance").textContent = "8,120";
      document.getElementById("distributed").textContent = "16,880";
    }

    // 显示弹窗
    dataModal.style.display = "block";
  }

  // 视频管理弹窗展示函数
  function displayVideoModal(id) {
    // 根据不同ID加载不同视频列表
    let videoList = [];
    const tableBody = document.getElementById("videoTableBody");
    const emptyPlaceholder = document.getElementById("emptyPlaceholder");

    if (id === "1") {
      document.getElementById("videoPlanName").textContent = "测试计划";
      videoList = [
        {
          title: "测试产品开箱视频：惊喜连连",
          username: "科技探索者",
          sceid: "SCE12345678",
          platform: "抖音",
          videoLink: "https://www.douyin.com/video/12345678",
          likes: 1253,
          views: 15782,
          coinEarned: 125,
          coinPaid: 125,
          consumed: 120,
          isApproved: true,
        },
        {
          title: "新品体验全方位测评，这款产品值得购买吗？",
          username: "数码达人",
          sceid: "SCE87654321",
          platform: "bilibili",
          videoLink: "https://www.bilibili.com/video/BV87654321",
          likes: 3625,
          views: 42891,
          coinEarned: 362,
          coinPaid: 300,
          consumed: 150,
          isApproved: true,
        },
        {
          title: "【测评】最新功能实测，竟然发现这些问题！",
          username: "评测菌",
          sceid: "SCE98765432",
          platform: "小红书",
          videoLink: "https://www.xiaohongshu.com/note/98765432",
          likes: 945,
          views: 8762,
          coinEarned: 94,
          coinPaid: 0,
          consumed: 0,
          isApproved: false,
        },
      ];
    } else if (id === "2") {
      document.getElementById("videoPlanName").textContent = "双十一活动";
      videoList = [
        {
          title: "双十一购物清单推荐，这些超值商品不容错过！",
          username: "购物狂人",
          sceid: "SCE13579246",
          platform: "抖音",
          videoLink: "https://www.douyin.com/video/13579246",
          likes: 8256,
          views: 98762,
          coinEarned: 825,
          coinPaid: 825,
          consumed: 825,
          isApproved: true,
        },
        {
          title: "五分钟教你如何在双十一抢到最低价",
          username: "省钱达人",
          sceid: "SCE24681357",
          platform: "快手",
          videoLink: "https://www.kuaishou.com/video/24681357",
          likes: 6521,
          views: 75412,
          coinEarned: 652,
          coinPaid: 400,
          consumed: 350,
          isApproved: true,
        },
        {
          title: "双十一爆款产品测评，买前必看！",
          username: "评测菌",
          sceid: "SCE98765432",
          platform: "bilibili",
          videoLink: "https://www.bilibili.com/video/BV98765432",
          likes: 4217,
          views: 35689,
          coinEarned: 421,
          coinPaid: 0,
          consumed: 0,
          isApproved: true,
        },
        {
          title: "双十一败家直播：开箱十款新品",
          username: "剁手党",
          sceid: "SCE36925814",
          platform: "贴吧",
          videoLink: "https://tieba.baidu.com/p/36925814",
          likes: 2154,
          views: 19875,
          coinEarned: 215,
          coinPaid: 0,
          consumed: 0,
          isApproved: false,
        },
      ];
    }

    // 清空表格
    tableBody.innerHTML = "";

    // 展示视频列表
    if (videoList.length > 0) {
      emptyPlaceholder.style.display = "none";

      videoList.forEach((video) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td class="video-title" title="${video.title}">${video.title}</td>
          <td>${video.username}</td>
          <td>${video.sceid}</td>
          <td>${video.platform}</td>
          <td><a href="${
            video.videoLink
          }" target="_blank" class="video-link">${video.videoLink.substring(
          0,
          30
        )}${video.videoLink.length > 30 ? "..." : ""}</a></td>
          <td>${video.likes.toLocaleString()}</td>
          <td>${video.views.toLocaleString()}</td>
          <td>${video.coinEarned.toLocaleString()}</td>
          <td>${video.coinPaid.toLocaleString()}</td>
          <td>${video.consumed.toLocaleString()}</td>
          <td>
            ${
              video.isApproved
                ? '<button class="action-btn approved-btn" disabled>已通过</button>'
                : '<button class="action-btn approve-btn">通过审核</button>'
            }
            <button class="action-btn delete-btn">强制删除</button>
            ${
              video.coinEarned > video.coinPaid
                ? '<button class="action-btn pay-btn">发放星火币</button>'
                : '<button class="action-btn pay-btn" disabled>发放星火币</button>'
            }
          </td>
        `;

        tableBody.appendChild(row);
      });
    } else {
      emptyPlaceholder.style.display = "block";
    }

    // 显示弹窗
    videoModal.style.display = "block";
  }

  // 视频操作按钮点击事件
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("approve-btn")) {
      alert("通过审核功能暂未实现");
      // 将按钮从"通过审核"变为"已通过"
      e.target.innerHTML = "已通过";
      e.target.classList.remove("approve-btn");
      e.target.classList.add("approved-btn");
      e.target.disabled = true;
    } else if (e.target.classList.contains("delete-btn")) {
      alert("强制删除功能暂未实现");
    } else if (e.target.classList.contains("pay-btn") && !e.target.disabled) {
      // 获取视频数据
      const row = e.target.closest("tr");
      const videoTitle = row.querySelector(".video-title").textContent;
      const likes = parseInt(
        row.querySelector("td:nth-child(6)").textContent.replace(/,/g, "")
      );
      const views = parseInt(
        row.querySelector("td:nth-child(7)").textContent.replace(/,/g, "")
      );
      const coinEarned = parseInt(
        row.querySelector("td:nth-child(8)").textContent.replace(/,/g, "")
      );
      const coinPaid = parseInt(
        row.querySelector("td:nth-child(9)").textContent.replace(/,/g, "")
      );
      const consumed = parseInt(
        row.querySelector("td:nth-child(10)").textContent.replace(/,/g, "")
      );

      // 保存当前视频数据
      currentVideoData = {
        title: videoTitle,
        likes: likes,
        views: views,
        coinEarned: coinEarned,
        coinPaid: coinPaid,
        consumed: consumed,
        row: row,
      };

      // 填充发放星火币弹窗数据
      document.getElementById("coinModalLikes").textContent =
        likes.toLocaleString();
      document.getElementById("coinModalViews").textContent =
        views.toLocaleString();
      document.getElementById("coinModalEarned").textContent =
        coinEarned.toLocaleString();
      document.getElementById("coinModalPaid").textContent =
        coinPaid.toLocaleString();
      document.getElementById("coinModalConsumed").textContent =
        consumed.toLocaleString();

      // 设置默认可发放数量为还未发放的部分
      const remainingCoins = coinEarned - coinPaid;
      coinInput.value = remainingCoins > 0 ? remainingCoins : "";
      coinInput.max = remainingCoins;

      // 显示发放星火币弹窗
      coinModal.style.display = "block";
    }
  });

  // 确认发放星火币
  confirmCoin.addEventListener("click", function () {
    const payAmount = parseInt(coinInput.value);

    // 验证输入
    if (isNaN(payAmount) || payAmount <= 0) {
      alert("请输入有效的发放数量");
      return;
    }

    const remainingCoins =
      currentVideoData.coinEarned - currentVideoData.coinPaid;
    if (payAmount > remainingCoins) {
      alert(`发放数量不能超过未发放的星火币数量(${remainingCoins})`);
      return;
    }

    // 更新确认消息
    confirmMessage.textContent = `是否发放 ${payAmount} 个星火币？`;

    // 显示确认弹窗
    coinModal.style.display = "none";
    confirmModal.style.display = "block";
  });

  // 最终确认发放
  confirmAction.addEventListener("click", function () {
    const payAmount = parseInt(coinInput.value);

    // 这里可以添加API调用来实际发放星火币
    console.log(`发放 ${payAmount} 个星火币给视频: ${currentVideoData.title}`);

    // 更新显示的数据
    const newPaidAmount = currentVideoData.coinPaid + payAmount;
    const row = currentVideoData.row;

    // 更新表格中的已发放数量
    row.querySelector("td:nth-child(9)").textContent =
      newPaidAmount.toLocaleString();

    // 如果已经发放完全部星火币，禁用发放按钮
    if (newPaidAmount >= currentVideoData.coinEarned) {
      const payBtn = row.querySelector(".pay-btn");
      payBtn.disabled = true;
    }

    // 关闭确认弹窗
    confirmModal.style.display = "none";

    // 显示发放成功消息
    alert("星火币发放成功！");
  });
});
