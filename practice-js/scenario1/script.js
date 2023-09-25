window.onload = function() {
    const root = document.documentElement;
    const emailModal = document.getElementsByClassName('email-modal')[0];
    const closeBtn = document.getElementsByClassName('gg-close-r')[0];
    const offerDeclined = document.getElementsByClassName('email-modal__decline-offer')[0];
    const emailInput = document.getElementsByClassName('email-modal__email-input')[0];
    const emailSubmitBtn = document.getElementsByClassName('form-group__submit-btn')[0];
    const emailThank = document.getElementsByClassName('email-thank')[0];
    const emailError = document.getElementsByClassName('email-modal__error')[0];

    let modalState = false;

    function showModal() {
        emailModal.classList.add("email-modal--visible");
    }

    function removeModal() {
        emailModal.classList.remove("email-modal--visible");
    }

    function validateEmail(inputText) {
        let emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        return !!inputText.value.match(emailFormat);
    }

    function removeError() {
        emailError.classList.remove('email-modal__error--visible');
    }

    root.addEventListener('mouseleave', () => {
        if (!modalState) {
            showModal();
            modalState = true;
        }
    })
    closeBtn.addEventListener('click', () => {
        removeModal();
    })
    offerDeclined.addEventListener('click', () => {
        removeModal();
    })
    emailInput.addEventListener('click', () => {
        removeError();
    })
    emailSubmitBtn.addEventListener('click', () => {
        if (validateEmail(emailInput)) {
            emailThank.classList.add('email-thank--success');
            setTimeout(function() {
                removeModal();
            }, 5000)
        } else {
            emailError.classList.add('email-modal__error--visible');
        }
    })
}