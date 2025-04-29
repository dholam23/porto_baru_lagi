// Toggle Tema Gelap
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Validasi Form Kontak
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("pesan").value.trim();
    const msg = document.getElementById("formMsg");

    if (!name || !email || !message) {
        msg.textContent = "Harap isi semua field!";
        msg.style.color = "red";
    } else {
        msg.textContent = "Form berhasil dikirim!";
        msg.style.color = "green";
        this.reset();
    }
});

// Tambah Kegiatan (To-do List)
function tambahKegiatan() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    const list = document.getElementById("todoList");

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.style.marginLeft = "10px";
    btnHapus.onclick = () => li.remove();

    li.appendChild(btnHapus);
    list.appendChild(li);
    input.value = "";
}
