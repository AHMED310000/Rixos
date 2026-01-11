function searchHotel() {
    const name = document.getElementById("hotelName").value;
    const result = document.getElementById("result");

    if(name.trim() === "") {
        result.textContent = "اكتب اسم الفندق أولاً!";
    } else {
        result.textContent = `تم البحث عن الفندق: ${name}`;
    }
}
