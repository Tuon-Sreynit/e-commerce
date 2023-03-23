<template>
 <div class="w-[100%] h-[100vh]">
  <header>
    <div class="flex bg-[#F39CC6] w-[100%] h-[95px]">
      <img class="w-[120px] h-[120px] logo  " src="../src/assets/images/logo.jpg" alt="" >
      <nav>
        <RouterLink to="/" class="font-600 font-bold text-3xl ml-60">Collections</RouterLink>
        <RouterLink to="/new-in" class="font-600 font-bold text-3xl">New-In</RouterLink>
        <RouterLink to="/clothing" class="font-600 font-bold text-3xl">Clothing</RouterLink>
        <RouterLink to="/accessories" class="font-600 font-bold text-3xl">Accessories</RouterLink>
        <RouterLink to="/final-sale" class="font-600 font-bold text-3xl">Final-Sale</RouterLink>
      </nav>
      <div class="flex gap-[2rem]">
        <button class="login-button"><a href="../src/views/login.vue">Login</a></button>
        <button class="signup-button"><a href="../src/views/signup.vue">Sign Up</a></button>  
      </div>
    </div>
  </header>
  <div class="container flex justify-between  bg-gradient-to-r from-red-50 to-red-500  my-16 h-[400px] w-[70%] m-auto rounded-3xl">
    <div class="p-10 font">
      <h1 class="font-bold text-4xl text-center  ">DEALS YOU DON'T WANT TO MISS
      ONLINE SHOPPING SITE FOR WOMEN’S FASHION 
      - DIVAS WORLD</h1>
      <p class=" mt-14 text-xl"> &nbsp &nbsp&nbsp &nbsp &nbsp We’re the leading go-to online etailer for Women’s Fashion.
       We supply a wide range of Ladies Dresses, Skirts, Tops, 
      Jumpsuits, Jeans, Trousers, Blazers, Coats and Jackets.</p>
    </div>
      <img src="../src/assets/images/content.jpg" alt="" class="w-[400px] h-full ">
  </div>
  <div>
    <div class="content grid grid-cols-3 mx-28 font">
      <div class="con ">
        <img src="../src/assets/images/con1.webp" alt="" class="con-img">
        <h2 class="mt-2 text-xl text-center">Megan Oversized Daddy Blazer</h2>
        <p class="pl-6  mt-3 text-sm">KHR766,000.00 <br>
        <a href="../src/views/shipping.vue" class="text-[#4d4de9]">Shipping</a> calculated at checkout. </p>
      </div>
      <div class="con ">
        <img src="../src/assets/images/con2.webp" alt="" class="con-img">
        <h2 class="mt-2 text-xl text-center">Emma Pleather Rider Jacket</h2>
        <p class="pl-6  mt-3 text-sm">KHR1,026,000.00<br>
        <a href="../src/views/shipping.vue" class="text-[#4d4de9]">Shipping</a> calculated at checkout.  </p>
      </div>
      <div class="con ">
        <img src="../src/assets/images/con3.webp" alt="" class="con-img">
        <h2 class="mt-2 text-xl text-center">Lola Tweed Jacket and Skirt Set</h2>
        <p class="pl-6  mt-3 text-sm">KHR1,013,000.00<br>
        <a href="../src/views/shipping.vue " class="text-[#4d4de9]">Shipping</a> calculated at checkout. </p>
      </div>
      <div class="con ">
        <img src="../src/assets/images/con4.webp" alt="" class="con-img">
        <h2 class="mt-2 text-xl text-center">Marlin Embellished Tweed Jacket </h2>
        <p class="pl-6  mt-3 text-sm">KHR820,000.00<br>
        <a href="../src/views/shipping.vue" class="text-[#4d4de9]">Shipping</a> calculated at checkout. </p>
      </div>
      <div class="con ">
        <img src="../src/assets/images/con5.webp" alt="" class="con-img">
        <h2 class="mt-2 text-xl text-center">Giana Halter Top and Cape Set </h2>
        <p class="pl-6  mt-3 text-sm">KHR301,000.00<br>
        <a href="../src/views/shipping.vue" class="text-[#4d4de9]">Shipping</a> calculated at checkout. </p>
      </div>
      <div class="con ">
        <img src="../src/assets/images/con6.webp" alt="" class="con-img">
        <h2 class="mt-2 text-xl text-center">Ivy Cable Sweater n Shorts Set</h2>
        <p class="pl-6  mt-3 text-sm">KHR363,000.00<br>
        <a href="../src/views/shipping.vue" class="text-[#4d4de9]">Shipping</a> calculated at checkout. </p>
      </div>
      
    </div>
    <div class="viewmore bg-gradient-to-r from-pink-100 to-pink-400  ">
        <a href="../src/views/viewmore.vue">View More</a>
    </div>
  </div>

  <footer>
    <div class="footer flex justify-between items-start bg-[#F39CC6] mt-10 px-20 pt-20 pb-14 font gap-20">
  
      <img class="w-[120px] h-[120px] rounded-full" src="../src/assets/images/logo.jpg" alt="" >
      <div>
        <h2 class="font-bold text-5xl tracking-widest pb-4 ">CUSTOMER</h2>
        <ul class="font-thin text-xl  tracking-widest ">
          <li class="p-4">
            <a href="#">SERVICE</a> 
          </li>
          <li class="p-4">
            <a href="#">SHIPPING</a>
          </li>
          <li class="p-4">
            <a href="#">RETURN & EXCHANGE</a>
          </li>
          <li class="p-4">
            <a href="#">CURRENCY</a>
          </li>
          <li class="p-4">
            <a href="#">CONVERSIONS</a>
          </li>
          <li class="p-4">
            <a href="#">SIZE-CHART</a>
          </li>
          <li class="p-4">
            <a href="#">PRIVACY POLICY</a>
          </li>
          <li class="p-4">
            <a href="#">FAQ</a>
          </li>
          <li class="p-4">
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold text-5xl tracking-widest pb-3">INFORMATION</h2>
        <ul class="font-thin text-xl tracking-widest ">
          <li class="p-4">
            <a href="#">ABOUT STORETS</a>
          </li>
          <li class="p-4">
            <a href="#">SASTAINABLILITY</a>
          </li>
          <li class="p-4">
            <a href="#">AMBASSADOR</a>
          </li>
          <li class="p-4">
            <a href="#">BECOME AN AFFILIATE</a>
          </li>
          <li class="p-4">
            <a href="#">LOYALTY PROGRAM</a>
          </li>
          <li class="p-4">
            <a href="#">STORETS APP</a>
          </li>

        </ul>
      </div>
      <div class="mt-20">
        <div class="inline justify-center">
          <div>
            <h1 class="tracking-widest font-thin text-xl">GET 10% OFF ON YOUR FIRST PURCHASE</h1>
          <input class="bg-gradient-to-r from-blue-50 to-blue-300 mt-10 mb-3" id="email" type="email" value="" placeholder="Enter your email" 
          name="contact[email]" autocorrect="off" autocapitalize="none">
          </div>
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.3" stroke="currentColor" class="w-7 h-7 ml-64">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>

        </div>
        <div class=" mt-72 flex  justify-between ">
          <div>
            <img src="../src/assets/images/socail-media/facebook.png" alt="" class="socail-img">
          </div>
          <div>
            <img src="../src/assets/images/socail-media/linkedin.png" alt="" class="socail-img">
          </div>
          <div>
            <img src="../src/assets/images/socail-media/twitter.png" alt="" class="socail-img">
          </div>
          <div>
            <img src="../src/assets/images/socail-media/diamond.png" alt="" class="socail-img">
          </div>
          <div>
            <img src="../src/assets/images/socail-media/behance.png" alt="" class="socail-img">
          </div>
        </div>
      </div>
    </div>
  </footer>
 </div>
  
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import New_In from "./views/new_in.vue";
export default {
  data() {
    return {
      isCheckingOut: false,
    };
  },
  components: {
    New_In,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');
.font{
  font-family: 'Jost', sans-serif;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
}
.con-img{
  width: 400px;
  height: 560px;
  border-radius: 10px 10px 0 0;
}
.con{
  background-color: #f245cc;
  width: 400px;
  height: 660px;
  border-radius: 10px;
 margin-bottom: 50px;
 box-shadow: 1px 1px 10px #cbced1, -1px -1px 10px #fff;
}
.socail-img{
  width: 40px;
  height: 40px;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
#email{
  border-radius: 1rem;
  padding: 1rem;
  width: 300px;
  height: 50px;
  box-shadow: 1px 1px 7px #cbced1, -1px -1px 7px #fff;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.signup-button{
    margin-top: 20px;
    width:100px;
    height:55px;
    margin-right:7px;
    border:none;
    border-radius:5px;
    background-color:#fcd7d7;
    font-size:17px;
    font-weight:600;
    cursor:pointer;
    color:#150a0a;
    box-shadow: 1px 1px 7px #cbced1, -1px -1px 7px #fff;
}

.login-button{
    margin-top: 20px;
    width:100px;
    height:55px;
    border:none;
    border-radius:5px;
    font-size:17px;
    font-weight:600;
    color:#150a0a;
    background-color:#fcd7d7;
    cursor:pointer;
    box-shadow: 1px 1px 7px #cbced1, -1px -1px 7px #fff;
}
.viewmore{
  margin: auto;
  padding-top: 10px;
  width:120px;
  height:50px;
  border:1px solid beige;
  border-radius:7px;
  font-size:18px;
  font-weight:600;
  color:#150a0a;
  background-color:#fcd7d7;
  cursor:pointer;
  text-align: center;
  box-shadow: 1px 1px 7px #cbced1, -1px -1px 7px #fff;
}


.login-button:hover{
    
    background-color:#f69a9a;
}


.signup-button:hover{
    
    background-color:#f69a9a;
}

</style>
