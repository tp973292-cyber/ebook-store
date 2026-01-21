function pay() {
  const upi =
    "upi://pay?pa=9046879917-3@ybl&pn=EbookStore&am=149&cu=INR&tn=EBOOK149";
  window.location.href = upi;

  setTimeout(() => {
    window.location.href = "unlock.html";
  }, 3000);
}
