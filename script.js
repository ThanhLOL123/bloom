// Danh sách các câu chúc
const quotes = [
    "Chúc bạn một ngày vui vẻ và tràn đầy năng lượng!",
    "Mọi điều tốt đẹp nhất sẽ đến với bạn hôm nay!",
    "Hãy luôn mỉm cười vì bạn xứng đáng được hạnh phúc!",
    "Chúc bạn thành công trong mọi dự định của mình!",
    "Hãy tận hưởng từng khoảnh khắc tuyệt vời trong cuộc sống!",
    "Niềm vui lớn nhất là lan tỏa yêu thương đến mọi người!",
    "Chúc một ngày đầy ắp tiếng cười và niềm vui!"
];

// Hàm lấy ngày hiện tại dưới dạng chuỗi
function getTodayString() {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Định dạng YYYY-MM-DD
}

// Hàm để chọn câu chúc cho ngày hôm nay
function getDailyQuote() {
    const today = getTodayString();
    const savedData = JSON.parse(localStorage.getItem('dailyQuote')) || {};

    if (savedData.date === today) {
        // Nếu đã có câu chúc của ngày hôm nay, hiển thị lại
        return savedData.quote;
    } else {
        // Chọn câu chúc mới và lưu lại
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        localStorage.setItem('dailyQuote', JSON.stringify({ date: today, quote: quote }));
        return quote;
    }
}

// Hiển thị câu chúc
document.addEventListener("DOMContentLoaded", () => {
    const dailyQuote = getDailyQuote();
    document.getElementById("daily-quote").textContent = dailyQuote;
});
