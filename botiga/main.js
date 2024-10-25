

const btnCart = document.querySelector('.contenidor-icona');
const btnContenidor = document.querySelector('.contenidor-cart-productes');

btnCart.addEventListener('click', () => {
    btnContenidor.classList.toggle('hiden-cart');
})


//--------------------------------------------------------------------------


const cartInfo = document.querySelector('.info-cart-product');
const compraInfo = document.querySelector('.cart-product');
const btn = document.querySelectorAll('.add-cart');

//llista dels contenidors de producte

const productList = document.querySelector('.cart');
let totProductes = []

let valorTotal = document.querySelector('.total-pagar');
let countProduct = document.querySelector('#contador-productes');

//funcio per mostrar html

compraInfo.addEventListener('click', (e) => {
    if (e.target.classList.contains('creu-tancar'))
    {
        const product = e.target.parentElement;
        console.log(product);
    }
});

const showHtml = () => 
{
    compraInfo.innerHTML = '';

    let total = 0;
    let totalCistella = 0;


    totProductes.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product')
        containerProduct.innerHTML =
            `<div class="info-cart-product">
                                <span class="quantitat-producte-cistella">${product.quantity}</span>
                                <span class="nom-producte-cistella">${product.title}</span>
                                <span class="preu-producte-cistella">${parseInt(product.price) * product.quantity}€</span>
                                <div class="creu-tancar">
                                <img src="assets/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                            </div>`
        compraInfo.append(containerProduct);

        total = total + parseInt(product.price) * product.quantity;
        totalCistella = totalCistella + product.quantity;

    });
    valorTotal.innerHTML = `${total}`;
    countProduct.innerHTML = `${totalCistella}`;

}



btn.forEach(boto => {


    boto.addEventListener('click', (e) => {


        if (e.target.classList.contains('add-cart')) {
            const product = e.target.parentElement;

            const infoProduct =
            {
                quantity: 1,
                title: product.querySelector('h2').textContent,
                price: product.querySelector('p').textContent,
            };
            const exits = totProductes.some( product => product.title === infoProduct.title);
            if (exits)
            {
                const products = totProductes.map(product =>
                {
                    if (product.title === infoProduct.title)
                    {
                        product.quantity++;
                        return product;
                    }
                    else
                    {
                        return product;
                    }
                })
                totProductes = [...products];
            }
            else
            {
                totProductes = [ ...totProductes, infoProduct];
            }
            showHtml()
        }
    })

});