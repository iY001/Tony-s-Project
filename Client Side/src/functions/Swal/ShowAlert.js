import Swal from "sweetalert2";


export default function ShowAlert(icon, title, text) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    position: 'top',
    timerProgressBar: true,
  })
} 