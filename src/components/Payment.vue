<template>
    <div class="payment-heading">
        <p class="shipping-title">Shopping Cart > Shipping > Payment</p>
        <hr class="shipping-hr">
    </div>
    <div class="payment-body">
        <div class="discount">
            <p class="disc-title">Before you place your order</p>
            <p class="disc-title-2">Got a discount code?</p>
            <input class="input-disc-code" type="text" placeholder="Discount Code">
        </div>

        <div class="summary">
            <table>
            <caption>Summary</caption>
            <tr>
                <td>Plain Basic T-shirt - Over...</td>
                <td>x2</td>
                <td>120.000</td>
            </tr>
            <tr>
                <td>Desk Lamp - Short</td>
                <td>x1</td>
                <td>96.000</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td></td>
                <td>30.000</td>
            </tr>
            <tr>
                <td>Total</td>
                <td></td>
                <td>249.000</td>
            </tr>
            </table>
        </div>

        <!-- Payment Information -->
        <div class="payment-information">
            <div class="payment-title"> 
                <img class="payment-icon" src="../assets/img/address-icon.png" alt="">
                <p>Payment Information</p>
            </div>
            
            <input class="input-payment" type="email" placeholder="E-mail" required>
            <input class="input-payment" type="number" placeholder="Card Number">
            <input class="input-payment-2" type="text" placeholder="MM/YY">
            <input class="input-payment-3" type="number" placeholder="CVC">
        </div>
    </div>
</template>

<style scoped>

</style>
