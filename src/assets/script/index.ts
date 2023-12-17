let counter: number = 5;
const imgBlock: HTMLElement= document.querySelector(".pizza__img")!;
const img: HTMLImageElement = document.createElement('img');
img.src = `./assets/image/pizza-${counter}.svg`;
img.alt = 'pizza';

(window as any).chengeImg = function(value: string): void {
    img.src = '';
    if (value === 'left' && counter > 1) {
        counter--;
    } else if (value === 'right' && counter < 9) {
        counter++;
    }
    img.src = `./assets/image/pizza-${counter}.svg`;
}

imgBlock.append(img);