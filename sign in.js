document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah reload halaman

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Harap isi semua field!");
    return;
  }

  // Validasi email sederhana
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Format email tidak valid!");
    return;
  }

  // Simulasi login
  alert(`Login berhasil!\nEmail: ${email}`);
});
