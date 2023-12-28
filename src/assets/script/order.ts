function submitForm() {
    const nameUser = (document.getElementById('name') as HTMLInputElement).value;
    const adressUser = (document.getElementById('adress') as HTMLInputElement).value;
    const emailUser = (document.getElementById('email') as HTMLInputElement).value;
    const telUser = (document.getElementById('phone') as HTMLInputElement).value;
    
    alert(
        `Ваші дані\n
        Ім'я: ${nameUser},\n
        Адреса: ${adressUser},\n
        e-mail: ${emailUser},\n
        Телефон: ${telUser}`);
}