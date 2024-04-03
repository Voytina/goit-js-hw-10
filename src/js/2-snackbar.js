import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");


form.addEventListener(('submit'), e => {
    e.preventDefault();

    const valueDelay = form.elements.delay.value;
    const radioButton = e.currentTarget.querySelector('input[name="state"]:checked');

    let promiseState;
    if (radioButton) {
    promiseState = radioButton.value;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promiseState === "fulfilled") {
                resolve(valueDelay);
            } else {
                reject(valueDelay);
            }
        }, valueDelay);
    });



    promise.then((value) => {
        iziToast.success({
        title: 'Caution',
        message: `✅ Fulfilled promise in ${value}ms`,
});
    }).catch((value) => {
        iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${value}ms`,
});

    })

    
})
