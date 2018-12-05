{
    const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        parts = [],
        img = new Image();


    const init = () => {
        img.onload = splitImage();

    };

    const splitImage = () => {
        const partWidth = img.width / 3;
        const partHeight = img.height / 3;

        for (let i = 0; i < 9; ++i) {
            let x = (-partWidth * i) % (partWidth * 3);
            let y = (partHeight * i) <= partHeight ? 0 : -partHeight;

            canvas.width = partWidth;
            canvas.height = partHeight;

            ctx.drawImage(this, x, y, partWidth * 3, partHeight * 3);

            parts.push(canvas.toDataURL());

        }
    }
    init();
    img.src = '../assets/dog.jpg';

};




