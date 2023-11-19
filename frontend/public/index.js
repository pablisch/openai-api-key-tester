
document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('button');
  const reportDiv = document.querySelector('.report');
  button.disabled = false;

  // add event listener to the form
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    // console.log('button clicked')
    button.disabled = true;
    clearReport();

    for (let i = 1; i <= 3; i++) {
      try {
        const res = await fetch('http://localhost:4000/openai/test/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            keyNumber: i,
          }),
        });

        const data = await res.json();
        console.log('key number is', i, 'data is', data);
        displayReport(data, i);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
    button.disabled = false;
  });

  const displayReport = (data, i) => {
    const newDiv = document.createElement('div');
    const newParagraph1 = document.createElement('p');
    const newParagraph2 = document.createElement('p');
    const newParagraph3 = document.createElement('p');
    newDiv.appendChild(newParagraph1);
    newDiv.appendChild(newParagraph2);
    newDiv.appendChild(newParagraph3);
    if (data.generatedResponse) {
      newParagraph1.textContent = `API Key ${i} is working fine.`;
      newParagraph2.textContent = `OpenAI returned the answer ${data.generatedResponse}.`;
      newParagraph3.textContent = `All is good.`;
      newDiv.classList.add('ok');
    } else {
      console.log('message in error:', data.message)
      newParagraph1.textContent = `API Key ${i} is not happy.`;
      newParagraph2.textContent = `The server returned status: ${data.message.status}, code: ${data.message.code} and type: ${data.message.type}.`;
      newParagraph3.textContent = `The server returned an error message ${data.message.error.message}.`;
      newDiv.classList.add('error');
    }
    reportDiv.appendChild(newDiv);
  }

  const clearReport = () => {
    while (reportDiv.firstChild) {
      reportDiv.removeChild(reportDiv.lastChild);
    }
    // console.log("report cleared")
  }
});

