import { saveStudent } from './repo/studentsRepo.js';

const saveContactForm = () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const successMessage = document.createElement('div');
    const parent = contactForm.parentNode;

    successMessage.classList.add('spinner');
    parent.replaceChild(successMessage, contactForm);
  
    const values = [ ...event.target ].reduce((prev, curr) => {
      return { ...prev, [curr.name]: curr.value };
    }, {});

    const values2 = await saveStudent(values);
    parent.replaceChild(contactForm, successMessage);
    console.log({ values2 });
  });
};

saveContactForm();
