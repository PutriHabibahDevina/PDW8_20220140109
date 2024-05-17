
  document.getElementById('confirm-order').addEventListener('click', function(event) {
      event.preventDefault(); // Menghentikan pengiriman formulir bawaan

      // Mendapatkan nilai input dari formulir
      var recipientName1 = document.getElementById('recipient-name1').value;
      var recipientName2 = document.getElementById('recipient-name2').value;
      var recipientAddress = document.getElementById('recipient-address').value;
      var recipientPhone2 = document.getElementById('recipient-phone2').value;
      var deliveryDate = document.getElementById('delivery-date').value;
      var deliveryTime = document.getElementById('delivery-time').value;
      var productTulip = document.getElementById('product-tulip').checked;
      var productMawar = document.getElementById('product-mawar').checked;
      var productSweetPea = document.getElementById('product-sweet-pea').checked;
      var productHydrangea = document.getElementById('product-hydrangea').checked;
      var productGardenia = document.getElementById('product-gardenia').checked;
      var productDahlia = document.getElementById('product-dahlia').checked;
      var quantity = document.getElementById('quantity').value;
      var specialMessage = document.getElementById('special-message').value;
      var paymentMethodTransfer = document.getElementById('payment-method-transfer').checked;
      var paymentMethodCreditCard = document.getElementById('payment-method-credit-card').checked;
      var paymentMethodEWallet = document.getElementById('payment-method-ewallet').checked;
      
      // Validasi setidaknya satu produk dipilih
      if (!(productTulip || productMawar || productSweetPea || productHydrangea || productGardenia || productDahlia)) {
          alert("Harap pilih setidaknya satu produk.");
          return;
      }
      
      // Menampilkan pesan yang telah diisi
      alert("Pesan Anda:\n" +
            "Nama Pengirim: " + recipientName1 + "\n" +
            "Nama Penerima: " + recipientName2 + "\n" +
            "Alamat Pengiriman: " + recipientAddress + "\n" +
            "Nomor Telepon Penerima: " + recipientPhone2 + "\n" +
            "Tanggal Pengiriman: " + deliveryDate + "\n" +
            "Waktu Pengiriman: " + deliveryTime + "\n" +
            "Produk Pesanan:\n" +
            (productTulip ? "- Bunga Tulip Pink\n" : "") +
            (productMawar ? "- Buket Mawar Putih\n" : "") +
            (productSweetPea ? "- Bunga Sweet Pea\n" : "") +
            (productHydrangea ? "- Bunga Hydrangea Biru\n" : "") +
            (productGardenia ? "- Bunga Gardenia Putih\n" : "") +
            (productDahlia ? "- Bunga Dahlia\n" : "") +
            "Jumlah: " + quantity + "\n" +
            "Special Message: " + specialMessage + "\n" +
            "Metode Pembayaran:\n" +
            (paymentMethodTransfer ? "- Transfer Bank\n" : "") +
            (paymentMethodCreditCard ? "- Kartu Kredit\n" : "") +
            (paymentMethodEWallet ? "- E-Wallet\n" : "")
           );
  });

