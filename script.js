<script>
    document.getElementById("birthday-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const data = {
            content: `Chúc mừng sinh nhật ${name}!\nLời chúc: ${message}`
        };

        fetch("https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert("Đã gửi thông tin thành công!");
            } else {
                alert("Có lỗi xảy ra khi gửi thông tin.");
            }
        })
        .catch(error => {
            console.error("Lỗi:", error);
            alert("Có lỗi xảy ra khi gửi thông tin.");
        });
    });
</script>
