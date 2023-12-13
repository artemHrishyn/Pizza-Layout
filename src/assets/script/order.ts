function submitForm() {
    const nameUser = (document.getElementById('name') as HTMLInputElement).value;
    const adressUser = (document.getElementById('adress') as HTMLInputElement).value;
    const emailUser = (document.getElementById('email') as HTMLInputElement).value;
    const telUser = (document.getElementById('phone') as HTMLInputElement).value;
    console.log(`name: ${nameUser}, adress: ${adressUser}, email: ${emailUser}, tel: ${telUser}`);
}