function CopyMail() {
  var copyText = document.getElementById('email');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

const ageTextElement = document.getElementById('ageText');

const getCurrentAge = () => {
  const date = new Date();

  return date.getFullYear() - 2001;
};

ageTextElement.innerText = `${getCurrentAge()} years`;
