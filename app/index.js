document.getElementById('liveToastBtn').addEventListener('click', function () {
    var toastElement = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
});

const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')

if (toastTrigger2) {
  const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap2.show()
  })
}
const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')

if (toastTrigger3) {
  const toastBootstrap3 = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
  toastTrigger3.addEventListener('click', () => {
    toastBootstrap3.show()
  })
}

