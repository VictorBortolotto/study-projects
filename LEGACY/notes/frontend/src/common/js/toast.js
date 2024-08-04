export const openToast = (type, message) => {
  let toast = document.getElementById('toast');
  toast.isOpen = true;
  toast.message = message;
  toast.style.color = 'white'
  toast.style.setProperty('--background', defineToastColor(type))

  setTimeout(() => {
    toast.isOpen = false
  },3500);
}

const defineToastColor = (type) => {
  let rgb = ''
  if (type === 'error'){
    rgb = 'rgb(236, 88, 88)';
  }else if(type === 'info'){
    rgb = 'rgb(79, 79, 224)';
  }else if(type === 'warn'){
    rgb = 'rgb(243, 183, 71)';
  }else {
    rgb = 'rgb(93, 221, 93)';
  }

  return rgb;
}